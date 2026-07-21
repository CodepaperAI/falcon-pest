"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "../../lib/validation";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";
import services from "../../data/services";

// Today in YYYY-MM-DD for the date input's min attribute
const todayStr = new Date().toISOString().split("T")[0];

export function BookingForm({ defaultService = "", onSuccess }) {
const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: { service: defaultService },
  });

  const onSubmit = (data) => {
    setSuccess(`Thank you, ${data.name}. Your booking for ${data.service} on ${data.date} has been received. Our team will confirm shortly.`);
    reset({ service: defaultService });
    // If used inside the modal, close it after a short confirmation delay
    if (onSuccess) {
      setTimeout(() => onSuccess(), 1800);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] border border-[#2A2A2A] bg-[#111111] p-8">
      <Input label="Name" placeholder="Ava Lewis" error={errors.name?.message} {...register("name")} />
      <Input label="Email" type="email" placeholder="ava@email.com" error={errors.email?.message} {...register("email")} />
      <Input label="Phone Number" placeholder="+91XXXXXXXXXX" error={errors.phone?.message} {...register("phone")} />

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

      <Button type="submit" className="w-full">Book Service</Button>
      {success ? <p className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-[#D4AF37]">{success}</p> : null}
    </form>
  );
}