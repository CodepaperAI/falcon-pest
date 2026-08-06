import type { FormGuardConfig } from "./form-guard/types";

/**
 * Per-site form guard settings. This is the only file in the guard that differs
 * between client sites — everything under `lib/form-guard/` is byte-identical
 * fleet-wide, which is what makes drift detectable with a checksum.
 *
 * This site has three separate endpoints, so `action` is overridden per route
 * (see `formGuardFor` below). Without that, a token solved on the contact form
 * would verify happily against the booking endpoint.
 */
export const formGuardConfig: FormGuardConfig = {
  canonicalHost: "falconpestcontrol.ca",
  honeypotField: "company",
  minElapsedMs: 3000,
  action: "contact",
  contactLabel: "289-990-5828",
  contactHref: "tel:+12899905828",
};

/** Turnstile actions, shared by each form and the route that receives it. */
export const FORM_GUARD_ACTIONS = {
  contact: "contact",
  book: "book",
  review: "review",
} as const;

export type FormGuardAction = (typeof FORM_GUARD_ACTIONS)[keyof typeof FORM_GUARD_ACTIONS];

/** The config for one endpoint, bound to that endpoint's action. */
export const formGuardFor = (action: FormGuardAction): FormGuardConfig => ({
  ...formGuardConfig,
  action,
});
