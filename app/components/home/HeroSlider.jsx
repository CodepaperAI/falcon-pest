"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Slide 0 carries the page's only <h1>, so its title leads with the phrase
// people actually search ("pest control niagara falls" / "…niagara region")
// rather than an adjective. Slides 1-2 keep their original copy and render as
// <h2> so the document has exactly one h1.
const slides = [
  {
    title: "Pest Control in Niagara Falls & the Niagara Region",
    subtitle: "Licensed, discreet treatment for rodents, cockroaches, ants and spiders — for homes and businesses across Niagara.",
    image: "/hero5.png",
    alt: "Falcon Pest Control technician treating the exterior of a Niagara home",
  },
  {
    title: "Fast Response. Peace of Mind.",
    subtitle: "From urgent infestations to ongoing prevention, we protect homes and businesses with precision.",
    image: "/hero6.png",
    alt: "Falcon Pest Control service vehicle parked outside a residential property",
  },
  {
    title: "Eco-Conscious Care with a Premium Standard",
    subtitle: "Modern treatments designed to keep your property safe, clean, and beautifully protected.",
    image: "/hero7.png",
    alt: "Close-up of low-impact pest control equipment being prepared for a treatment",
  },
];

const HEADING_CLASS = "text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl";

/** Slide body. Shared by the server-rendered fallback and the Swiper slides so
 *  the two render byte-identical markup and hydration cannot mismatch. */
function SlideBody({ slide, index, animate }) {
  const Heading = index === 0 ? "h1" : "h2";
  const inner = (
    <>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Premium Pest Control</p>
      <Heading className={HEADING_CLASS}>{slide.title}</Heading>
      <p className="mt-6 text-lg leading-8 text-[#D8D8D8]">{slide.subtitle}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#C9A227]">
          Book Service <ArrowRight size={18} />
        </Link>
        <Link href="/services" className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-black/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
          Explore Services
        </Link>
      </div>
    </>
  );

  return (
    <div className="relative flex h-[82vh] min-h-[620px] w-full items-center overflow-hidden">
      {/* Full-bleed background image, like the About hero */}
      <Image src={slide.image} alt={slide.alt} fill priority={index === 0} className="object-cover object-center" />
      {/* Gradients so the text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent_60%)]" />

      {/* Content overlaid on the left */}
      <div className="relative z-10 w-full px-6 py-24 sm:px-10 lg:px-14">
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {inner}
          </motion.div>
        ) : (
          <div className="max-w-2xl">{inner}</div>
        )}
      </div>
    </div>
  );
}

export function HeroSlider() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Previously this returned null until mounted, so the entire hero — including
  // the only <h1> on the site and all of the above-the-fold copy — was absent
  // from the server-rendered HTML and invisible to any crawler that does not
  // execute JS. Now the first slide renders statically and Swiper takes over
  // after hydration.
  if (!mounted) {
    return (
      <section className="relative isolate overflow-hidden bg-black">
        <SlideBody slide={slides[0]} index={0} animate={false} />
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <SlideBody slide={slide} index={index} animate />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}