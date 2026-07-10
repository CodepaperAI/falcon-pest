"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, Leaf, Clock3, BadgeDollarSign } from "lucide-react";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";
import { Card } from "../common/Card";
import { FadeIn } from "../animation/FadeIn";

const highlights = [
  {
    title: "Licensed Professionals",
    description: "Certified experts with proven field experience.",
    icon: ShieldCheck,
    value: "10+",
    count: 10,
  },
  {
    title: "Eco Friendly",
    description: "Responsible treatments designed around safety.",
    icon: Leaf,
    value: "24/7",
    count: null,
  },
  {
    title: "Fast Response",
    description: "Rapid scheduling and transparent updates.",
    icon: Clock3,
    value: "30 min",
    count: null,
  },
  {
    title: "Affordable Pricing",
    description: "Premium results without premium confusion.",
    icon: BadgeDollarSign,
    value: "Flexible",
    count: null,
  },
];
export function WhyChooseUs() {
  const [counts, setCounts] = useState(highlights.map(() => 0));

  useEffect(() => {
  const timers = highlights.map((item, index) => {
    if (item.count === null) return null;

    return window.setTimeout(() => {
      setCounts((prev) => {
        const next = [...prev];
        next[index] = item.count;
        return next;
      });
    }, 250 + index * 120);
  });

  return () =>
    timers.forEach((timer) => {
      if (timer) clearTimeout(timer);
    });
}, []);

  return (
    <Section className="bg-[#060606]">
      <Container>
        <Heading eyebrow="Why Choose Us" title="The standard for premium pest protection." description="Every visit is guided by precision, care, and a commitment to long-term comfort." center />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <Card className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Icon size={24} />
                  </div>
                 <div className="mt-6 text-3xl font-semibold text-white">
  {item.count !== null ? `${counts[index]}+` : item.value}
</div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#BDBDBD]">{item.description}</p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
