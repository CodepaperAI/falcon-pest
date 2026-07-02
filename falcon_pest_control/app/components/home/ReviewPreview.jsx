import { Star } from "lucide-react";
import Link from "next/link";
import { Container } from "../common/Container";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import reviews from "../../data/reviews";
import { SlideUp } from "../animation/SlideUp";

export function ReviewPreview() {
  return (
    <Section className="bg-[#050505]">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Heading eyebrow="Reviews" title="Trusted by clients who expect more." description="Elegant service, detailed care, and lasting results are what our clients remember most." />
          <Button href="/reviews" variant="secondary">Read More Reviews</Button>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, index) => (
            <SlideUp key={review.id} delay={index * 0.08}>
              <Card className="h-full">
                <div className="flex gap-1 text-[#D4AF37]">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={`${review.id}-${starIndex}`} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-[#BDBDBD]">“{review.review}”</p>
                <div className="mt-6 border-t border-[#2A2A2A] pt-4">
                  <p className="font-semibold text-white">{review.name}</p>
                </div>
              </Card>
            </SlideUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}
