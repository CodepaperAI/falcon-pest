import { z } from "zod";

// Lead attribution. Without these, a submission arrives with no indication of
// which page produced it, so there is no way to tell whether a landing page is
// generating business. `sourcePage` is the pathname the form was submitted
// from; `sourceSection` is a closed union naming the CTA surface.
//
// sourcePage is deliberately an open string, NOT an enum of known routes — a
// closed enum would silently 400 every submission from any page added later.
export const SOURCE_SECTIONS = [
  "hero",
  "inline-cta",
  "post-table-cta",
  "sticky-bar",
  "footer-cta",
  "booking-page",
  "contact-page",
  "service-modal",
  "unknown",
];

const attribution = {
  sourcePage: z.string().max(200).optional().default("unknown"),
  sourceSection: z.enum(SOURCE_SECTIONS).optional().default("unknown"),
};

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
  ...attribution,
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
  ...attribution,
});