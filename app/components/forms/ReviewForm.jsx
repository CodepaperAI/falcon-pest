"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import { reviewSchema } from "../../lib/validation";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { Button } from "../common/Button";

export function ReviewForm({ onSubmitReview }) {
  const [hovered, setHovered] = useState(0);
  const [success, setSuccess] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(reviewSchema), defaultValues: { rating: 5 } });

  const rating = watch("rating");

  useEffect(() => {
    setValue("rating", 5);
  }, [setValue]);

  const submitReview = (data) => {
    onSubmitReview({
      ...data,
      id: `review-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      rating: Number(data.rating),
    });
    setSuccess("Your review has been saved locally and will appear at the top.");
    reset({ rating: 5 });
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
      <Button type="submit" className="w-full">Submit Review</Button>
      {success ? <p className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-4 text-sm text-[#D4AF37]">{success}</p> : null}
    </form>
  );
}
