"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../lib/validation";
import { useLeadSource } from "../../lib/useLeadSource";
import { companyConfig } from "../../lib/config";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";

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
        body: JSON.stringify({ ...data, ...leadSource }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSuccess(`Thank you, ${data.name}. Your request has been received and our team will contact you shortly.`);
      reset();
    } catch (err) {
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
      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Send Request"}
      </Button>
      {success ? <p className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-[#D4AF37]">{success}</p> : null}
      {errorMsg ? <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">{errorMsg}</p> : null}
    </form>
  );
}
