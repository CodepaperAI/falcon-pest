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
  const normalized = value.replace(/[^\d]/g, "");
  // strip a leading country code "1" if present (e.g. +1 905...)
  const digits = normalized.length === 11 && normalized.startsWith("1")
    ? normalized.slice(1)
    : normalized;
  // must be 10 digits and start with a Niagara/Hamilton-region area code
  const areaCode = digits.slice(0, 3);
  const allowed = ["905", "289", "365", "742"];
  return digits.length === 10 && allowed.includes(areaCode);
}, "Please enter a Niagara/Hamilton region number (905, 289, 365, or 742)"),
  message: z.string().min(10, "Please share a bit more detail about your needs"),
});

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number").refine((value) => {
  const normalized = value.replace(/[^\d]/g, "");
  // strip a leading country code "1" if present (e.g. +1 905...)
  const digits = normalized.length === 11 && normalized.startsWith("1")
    ? normalized.slice(1)
    : normalized;
  // must be 10 digits and start with a Niagara/Hamilton-region area code
  const areaCode = digits.slice(0, 3);
  const allowed = ["905", "289", "365", "742"];
  return digits.length === 10 && allowed.includes(areaCode);
}, "Please enter a Niagara/Hamilton region number (905, 289, 365, or 742)"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please choose a date").refine((value) => {
    const selected = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, "Please choose today or a future date"),
  note: z.string().optional(),
});