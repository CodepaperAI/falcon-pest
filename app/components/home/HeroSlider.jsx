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

const slides = [
  {
    title: "Luxury Pest Protection for Every Space",
    subtitle: "Discreet, effective, and premium pest control backed by certified professionals.",
    image: "/hero5.png",
  },
  {
    title: "Fast Response. Peace of Mind.",
    subtitle: "From urgent infestations to ongoing prevention, we protect homes and businesses with precision.",
    image: "/hero6.png",
  },
  {
    title: "Eco-Conscious Care with a Premium Standard",
    subtitle: "Modern treatments designed to keep your property safe, clean, and beautifully protected.",
    image: "/hero7.png",
  },
];

export function HeroSlider() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

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
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative flex h-[82vh] min-h-[620px] w-full items-center overflow-hidden">
              {/* Full-bleed background image, like the About hero */}
              <Image src={slide.image} alt={slide.title} fill priority className="object-cover object-center" />
              {/* Gradients so the text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent_60%)]" />

              {/* Content overlaid on the left */}
              <div className="relative z-10 w-full px-6 py-24 sm:px-10 lg:px-14">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="max-w-2xl"
                >
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">Premium Pest Control</p>
                  <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">{slide.title}</h1>
                  <p className="mt-6 text-lg leading-8 text-[#D8D8D8]">{slide.subtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#C9A227]">
                      Book Service <ArrowRight size={18} />
                    </Link>
                    <Link href="/services" className="inline-flex items-center rounded-full border border-[#2A2A2A] bg-black/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                      Explore Services
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}