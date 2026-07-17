import Image from "next/image";
import { Container } from "./Container";

export function PageBanner({ title, description, image, eyebrow }) {
  return (
    <section className="relative overflow-hidden border-b border-[#2A2A2A] bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.2),_transparent_60%)]" />
      <Container className="relative grid items-center gap-10 py-24 lg:grid-cols-2 lg:gap-14 lg:py-28">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#BDBDBD]">{description}</p>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute inset-0 rounded-[2rem] border border-[#D4AF37]/30 bg-black/70" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#2A2A2A] bg-[#000000] shadow-[0_0_80px_rgba(0,0,0,0.45)]">
            <Image src={image} alt={title} width={900} height={700} className="h-[380px] w-full object-cover object-center sm:h-[420px] md:h-[480px]" priority />
          </div>
        </div>
      </Container>
    </section>
  );
}
