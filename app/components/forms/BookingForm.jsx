"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "../../lib/validation";
import { useLeadSource } from "../../lib/useLeadSource";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";
import TurnstileWidget from "../TurnstileWidget";
import { formGuardConfig, FORM_GUARD_ACTIONS } from "../../lib/form-guard.config";
import services from "../../data/services";

// Today in YYYY-MM-DD for the date input's min attribute
const todayStr = new Date().toISOString().split("T")[0];

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export function BookingForm({ defaultService = "", onSuccess, section = "booking-page" }) {
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const leadSource = useLeadSource(section);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: { service: defaultService },
  });

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

  const onSubmit = async (data) => {
    setSubmitting(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...leadSource, company, elapsedMs: mountedAtRef.current ? Date.now() - mountedAtRef.current : undefined, turnstileToken }),
      });
      if (!res.ok) throw new Error("Request failed");

      setSuccess(`Thank you, ${data.name}. Your booking for ${data.service} on ${data.date} has been received. Our team will confirm shortly.`);
      reset({ name: "", email: "", phone: "", service: defaultService, date: "", note: "" }); // clear every field explicitly
      if (onSuccess) setTimeout(() => onSuccess(), 1800);
    } catch (err) {
      // Turnstile tokens are single-use — without a reset the retry would
      // replay a spent token and fail again.
      setTurnstileToken("");
      turnstileRef.current?.reset();
      setErrorMsg("Sorry, we couldn't send your booking. Please call us at 289-990-5828.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] border border-[#2A2A2A] bg-[#111111] p-8">
      <Input label="Name" placeholder="Ava Lewis" error={errors.name?.message} {...register("name")} />
      <Input label="Email" type="email" placeholder="ava@email.com" error={errors.email?.message} {...register("email")} />
      <Input label="Phone Number" placeholder="(905) 123-4567" error={errors.phone?.message} {...register("phone")} />

      {/* Service dropdown — styled to match Input */}
      <label className="block text-sm text-[#BDBDBD]">
        <span className="mb-2 block font-medium text-white">Service</span>
        <select
          {...register("service")}
          className="w-full rounded-2xl border border-[#2A2A2A] bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]"
        >
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>{s.title}</option>
          ))}
        </select>
        {errors.service?.message ? <span className="mt-2 block text-sm text-red-400">{errors.service.message}</span> : null}
      </label>

      <Input label="Preferred Date" type="date" min={todayStr} error={errors.date?.message} {...register("date")} />
      <Textarea label="Note (optional)" placeholder="Anything we should know about the property or the issue?" error={errors.note?.message} {...register("note")} />

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
          action={FORM_GUARD_ACTIONS.book}
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
        {submitting ? "Sending..." : "Book Service"}
      </Button>
      {success ? <p className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-[#D4AF37]">{success}</p> : null}
      {errorMsg ? <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">{errorMsg}</p> : null}
    </form>
  );
}