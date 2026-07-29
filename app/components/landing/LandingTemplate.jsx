"use client";

// The single rendering template for every landing-page family.
//
// TWO INVARIANTS — do not break these:
//
// 1. This file MUST NOT import app/data/landingPages (the registry). It is a
//    client component; importing the registry would bundle every record — all
//    long-form copy, every FAQ, for every page — into this page's JS payload.
//    The route resolves the one record it needs on the server and passes it in.
//
// 2. This file MUST NOT render any head/SEO component. The route owns <head>
//    via Next's metadata export. A client-rendered <title> or canonical is
//    invisible to crawlers that do not execute JS, which is the exact defect
//    this project was brought in to fix.

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Phone,
  ArrowRight,
  Bug,
  Mouse,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  CalendarClock,
  Home,
  Building2,
  UtensilsCrossed,
  Warehouse,
  BedDouble,
  MapPin,
  ClipboardCheck,
  Leaf,
  AlertTriangle,
  Landmark,
  Snowflake,
  Sun,
} from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { BookingForm } from "../forms/BookingForm";
import { companyConfig } from "../../lib/config";

// Explicit map, not `import * as Icons` — a namespace import pulls the whole
// lucide package into this client bundle. Keys mirror iconRegistry in
// app/data/landingPages/types.ts, where they are type-checked, so an unknown
// key fails at compile time rather than rendering nothing here.
const ICONS = {
  Bug,
  Mouse,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  CalendarClock,
  Home,
  Building2,
  UtensilsCrossed,
  Warehouse,
  BedDouble,
  MapPin,
  Phone,
  ClipboardCheck,
  Leaf,
  AlertTriangle,
  Landmark,
  Snowflake,
  Sun,
};

function Icon({ name, ...props }) {
  const Cmp = ICONS[name] ?? Bug;
  return <Cmp {...props} />;
}

/** Sticky call bar. Appears after ~35% scroll, dismissible, both breakpoints. */
function StickyCallBar() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setShow(max > 0 && window.scrollY / max > 0.35);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D4AF37]/30 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <p className="hidden text-sm text-[#BDBDBD] sm:block">
          Speak to a technician about your property.
        </p>
        <div className="flex flex-1 items-center justify-end gap-2">
          <a
            href={`tel:${companyConfig.phoneRaw}`}
            data-cta="sticky-bar-call"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#C9A227] sm:flex-none"
          >
            <Phone size={16} /> {companyConfig.phone}
          </a>
          <a
            href="#book"
            data-cta="sticky-bar-book"
            className="hidden rounded-full border border-[#2A2A2A] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37] sm:inline-flex"
          >
            Book online
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="rounded-full border border-[#2A2A2A] px-3 py-2.5 text-sm text-[#7a7a7a] transition hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

function CtaRow({ location, heading, body }) {
  return (
    <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] p-8">
      <h2 className="text-2xl font-semibold text-white">{heading}</h2>
      <p className="mt-3 max-w-2xl text-base leading-8 text-[#BDBDBD]">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`tel:${companyConfig.phoneRaw}`}
          data-cta={`${location}-call`}
          className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#C9A227]"
        >
          <Phone size={16} /> Call {companyConfig.phone}
        </a>
        <a
          href="#book"
          data-cta={`${location}-book`}
          className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
        >
          Book online <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

export function LandingTemplate({ page, related = [] }) {
  const hero = page.images[0];

  return (
    <main className="bg-black text-white">
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden border-b border-[#2A2A2A] bg-black py-20 sm:py-24">
        <Image src={hero.src} alt={hero.alt} fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/50" />
        <Container className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            {companyConfig.serviceArea}
          </p>
          {/* min-h + symmetric padding, never a fixed height: a long H1 must be
              able to grow rather than disappear behind the overlay navbar. */}
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#D8D8D8]">{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              data-cta="hero-call"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#C9A227]"
            >
              <Phone size={16} /> Call {companyConfig.phone}
            </a>
            <a
              href="#book"
              data-cta="hero-book"
              className="inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-black/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Book an inspection <ArrowRight size={16} />
            </a>
          </div>
        </Container>
      </section>

      {/* ---------- Benefits ---------- */}
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {page.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-3xl border border-[#2A2A2A] bg-[#111111] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                  <Icon name={b.icon} size={20} />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-white">{b.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#BDBDBD]">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Long-form sections, with images interleaved ---------- */}
      <Section className="bg-[#050505]">
        <Container>
          <div className="space-y-16">
            {page.sections.map((s, i) => {
              const img = page.images[(i + 1) % page.images.length];
              const flip = i % 2 === 1;
              return (
                <div
                  key={s.heading}
                  className="grid items-center gap-10 lg:grid-cols-2"
                >
                  <div className={flip ? "lg:order-2" : ""}>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {s.heading}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-[#BDBDBD]">{s.body}</p>
                  </div>
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#2A2A2A] ${flip ? "lg:order-1" : ""}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ---------- Fact table, then the peak-intent CTA ---------- */}
      {page.factTable ? (
        <Section>
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {page.factTable.caption}
            </h2>
            <div className="mt-8 overflow-x-auto rounded-3xl border border-[#2A2A2A]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <tbody>
                  {page.factTable.rows.map((r) => (
                    <tr key={r.label} className="border-b border-[#2A2A2A] last:border-0">
                      <th
                        scope="row"
                        className="w-64 bg-[#0d0d0d] px-6 py-5 align-top text-sm font-semibold uppercase tracking-wider text-[#D4AF37]"
                      >
                        {r.label}
                      </th>
                      <td className="px-6 py-5 align-top text-base leading-7 text-white">
                        {r.value}
                        {r.source ? (
                          <span className="mt-2 block text-xs leading-5 text-[#7a7a7a]">
                            Source: {r.source}
                          </span>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Peak-intent moment: immediately after the specifics, not only
                at the top and bottom of the page. */}
            <div className="mt-10">
              <CtaRow
                location="post-table"
                heading={page.ctaHeading}
                body={page.ctaBody}
              />
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ---------- FAQs ----------
          Native <details>/<summary>: zero JS, fully present in the server HTML,
          and open before hydration. A JS accordion that unmounts closed content
          would hide these answers from crawlers — fatal on a page whose whole
          purpose is answering them. */}
      <Section className="bg-[#050505]">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Common questions
          </h2>
          <div className="mt-8 space-y-4">
            {page.faqs.map((f) => (
              <details
                key={f.question}
                className="group rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 open:border-[#D4AF37]/40"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {f.question}
                    <span className="mt-1 shrink-0 text-[#D4AF37] transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-base leading-8 text-[#BDBDBD]">{f.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Booking form. The #book anchor every CTA points at, so
           they scroll rather than navigating the visitor off the page. ---------- */}
      <Section id="book" className="scroll-mt-28">
        <Container className="max-w-2xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Book an inspection
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-7 text-[#BDBDBD]">
            Tell us the address and what you have seen. We will confirm the appointment and
            what the visit involves.
          </p>
          <div className="mt-10">
            <BookingForm section="inline-cta" />
          </div>
          <p className="mt-6 text-center text-sm text-[#BDBDBD]">
            Prefer to talk it through?{" "}
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              data-cta="form-call"
              className="font-semibold text-[#D4AF37] hover:underline"
            >
              Call {companyConfig.phone}
            </a>
          </p>
        </Container>
      </Section>

      {/* ---------- Related pages ---------- */}
      {related.length ? (
        <Section className="border-t border-[#2A2A2A] bg-[#050505]">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Nearby and related
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={r.pathname}
                  className="group rounded-2xl border border-[#2A2A2A] bg-[#111111] p-6 transition hover:border-[#D4AF37]/50"
                >
                  <h3 className="text-base font-semibold text-white group-hover:text-[#D4AF37]">
                    {r.h1}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#BDBDBD]">
                    {r.metaDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#D4AF37]">
                    View <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <StickyCallBar />
    </main>
  );
}

export default LandingTemplate;
