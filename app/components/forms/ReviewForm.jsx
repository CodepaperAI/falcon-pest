"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import { reviewSchema } from "../../lib/validation";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";
import TurnstileWidget from "../TurnstileWidget";
import { formGuardConfig, FORM_GUARD_ACTIONS } from "../../lib/form-guard.config";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export function ReviewForm() {
  const [hovered, setHovered] = useState(0);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(reviewSchema), defaultValues: { rating: 5 } });

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

  const rating = watch("rating");

  const submitReview = async (data) => {
    setSubmitting(true);
    setErrorMsg("");
    setSuccess("");

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, rating: Number(data.rating), company, elapsedMs: mountedAtRef.current ? Date.now() - mountedAtRef.current : undefined, turnstileToken }),
      });
      if (!res.ok) throw new Error("Request failed");

      setSuccess(`Thank you, ${data.name}. Your review has been sent to our team.`);
      reset({ name: "", review: "", rating: 5 }); // clear every field explicitly
      setHovered(0);
    } catch (err) {
      // Turnstile tokens are single-use — without a reset the retry would
      // replay a spent token and fail again.
      setTurnstileToken("");
      turnstileRef.current?.reset();
      setErrorMsg("Sorry, we couldn't send your review. Please try again or call us at 289-990-5828.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitReview)} className="space-y-5 rounded-[2rem] border border-[#2A2A2A] bg-[#111111] p-8">
      <Input label="Name" placeholder="Jordan Singh" error={errors.name?.message} {...register("name")} />

      <div>
        <span className="mb-2 block text-sm font-medium text-white">Rating</span>
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, index) => {
            const value = index + 1;
            const active = value <= (hovered || rating || 0);
            return (
              <button
                key={value}
                type="button"
                onMouseEnter={() => setHovered(value)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => setValue("rating", value)}
                className="text-[#D4AF37]"
                aria-label={`Rate ${value} stars`}
              >
                <Star size={24} fill={active ? "currentColor" : "none"} stroke="currentColor" />
              </button>
            );
          })}
        </div>
        {errors.rating?.message ? <span className="mt-2 block text-sm text-red-400">{errors.rating?.message}</span> : null}
      </div>

      <Textarea label="Review" placeholder="Share your experience with Falcon Pest Control" error={errors.review?.message} {...register("review")} />

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
          action={FORM_GUARD_ACTIONS.review}
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
        {submitting ? "Sending..." : "Submit Review"}
      </Button>

      {success ? <p className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-[#D4AF37]">{success}</p> : null}
      {errorMsg ? <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">{errorMsg}</p> : null}
    </form>
  );
}