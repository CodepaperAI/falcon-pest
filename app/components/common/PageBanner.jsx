"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function PageBanner({ title, description, image, eyebrow }) {
  return (
    <section className="relative isolate flex min-h-[460px] items-center overflow-hidden border-b border-[#2A2A2A] bg-black lg:min-h-[68vh]">
      {/* Full-bleed background image */}
      <Image src={image} alt={title} fill priority className="object-cover object-center" />
      {/* Dark gradient so the text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.18),_transparent_60%)]" />

      {/* Content hugs the left, like the home hero */}
      <div className="relative z-10 w-full px-6 py-24 sm:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#D8D8D8]">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}