"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../lib/validation";
import { useLeadSource } from "../../lib/useLeadSource";
import { companyConfig } from "../../lib/config";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";
import TurnstileWidget from "../TurnstileWidget";
import { formGuardConfig, FORM_GUARD_ACTIONS } from "../../lib/form-guard.config";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export function ContactForm({ section = "contact-page" }) {
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const leadSource = useLeadSource(section);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  // Honeypot. Never visible, so any value here came from a bot.
  const [company, setCompany] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef(null);
  // Unique per mount: this form can appear more than once on a page, and two
  // instances would otherwise collide on the label's htmlFor target.
  const honeypotId = useId();

  // Set on mount, never during render. These pages are prerendered, so a
  // build-time timestamp would make every visitor look like an instant
  // submitter and trip the timing check.
  const mountedAtRef = useRef(0);
  useEffect(() => {
    mountedAtRef.current = Date.now();
  }, []);

  // This previously only set a success message and reset — it never posted
  // anywhere, so every enquiry was silently discarded after telling the
  // customer their request had been received.
  const onSubmit = async (data) => {
    setSubmitting(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...leadSource, company, elapsedMs: mountedAtRef.current ? Date.now() - mountedAtRef.current : undefined, turnstileToken }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSuccess(`Thank you, ${data.name}. Your request has been received and our team will contact you shortly.`);
      reset();
    } catch (err) {
      // Turnstile tokens are single-use — without a reset the retry would
      // replay a spent token and fail again.
      setTurnstileToken("");
      turnstileRef.current?.reset();
      setErrorMsg(`Sorry, we couldn't send your request. Please call us at ${companyConfig.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] border border-[#2A2A2A] bg-[#111111] p-8">
      <Input label="Name" placeholder="Ava Lewis" error={errors.name?.message} {...register("name")} />
      <Input label="Email" type="email" placeholder="ava@email.com" error={errors.email?.message} {...register("email")} />
      <Input label="Phone Number" placeholder="(905) 123-4567" error={errors.phone?.message} {...register("phone")} />
      <Textarea label="Message" placeholder="Tell us about the issue and the property type" error={errors.message?.message} {...register("message")} />
      {/*
        Honeypot. Off-screen rather than display:none — some bots skip fields
        that are outright hidden but fill anything readable in the DOM.
        aria-hidden and tabIndex keep it away from screen readers and the tab
        order, so no human can reach it.
      */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", height: 0, width: 0, overflow: "hidden" }}>
        <label htmlFor={honeypotId}>Company (leave this field empty)</label>
        <input id={honeypotId} type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} tabIndex={-1} autoComplete="off" />
      </div>

      {TURNSTILE_SITE_KEY ? (
        <TurnstileWidget
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          action={FORM_GUARD_ACTIONS.contact}
          contactLabel={formGuardConfig.contactLabel}
          contactHref={formGuardConfig.contactHref}
          // This form sits on a near-black panel; Cloudflare's light default
          // would drop a white box into the middle of it.
          theme="dark"
          onVerify={setTurnstileToken}
          onUnavailable={() => setTurnstileToken("")}
        />
      ) : (
        <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          This form is not fully configured. Please call us at{" "}
          <a href={formGuardConfig.contactHref} className="underline">{formGuardConfig.contactLabel}</a>.
        </p>
      )}

      <Button type="submit" className="w-full" disabled={submitting || !turnstileToken}>
        {submitting ? "Sending..." : "Send Request"}
      </Button>
      {success ? <p className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-[#D4AF37]">{success}</p> : null}
      {errorMsg ? <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">{errorMsg}</p> : null}
    </form>
  );
}
