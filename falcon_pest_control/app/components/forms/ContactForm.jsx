"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../lib/validation";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";

export function ContactForm() {
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = (data) => {
    setSuccess(`Thank you, ${data.name}. Your request has been received and our team will contact you shortly.`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] border border-[#2A2A2A] bg-[#111111] p-8">
      <Input label="Name" placeholder="Ava Lewis" error={errors.name?.message} {...register("name")} />
      <Input label="Email" type="email" placeholder="ava@email.com" error={errors.email?.message} {...register("email")} />
      <Input label="Phone Number" placeholder="+91XXXXXXXXXX" error={errors.phone?.message} {...register("phone")} />
      <Textarea label="Message" placeholder="Tell us about the issue and the property type" error={errors.message?.message} {...register("message")} />
      <Button type="submit" className="w-full">Send Request</Button>
      {success ? <p className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-[#D4AF37]">{success}</p> : null}
    </form>
  );
}
