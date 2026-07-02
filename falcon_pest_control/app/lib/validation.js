import { z } from "zod";

export const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  rating: z.coerce.number().min(1, "Please choose a rating").max(5),
  review: z.string().min(10, "Please share a few more details"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number").refine((value) => {
    const normalized = value.replace(/[^\d+]/g, "");
    const indiaPattern = /^(\+91[6-9]\d{9}|[6-9]\d{9})$/;
    const canadaPattern = /^(\+1[2-9]\d{9}|[2-9]\d{9})$/;
    return indiaPattern.test(normalized) || canadaPattern.test(normalized);
  }, "Only Indian or Canadian numbers are accepted"),
  message: z.string().min(10, "Please share a bit more detail about your needs"),
});
