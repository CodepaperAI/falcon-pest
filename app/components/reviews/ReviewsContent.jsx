"use client";

import { PageBanner } from "../common/PageBanner";
import { Section } from "../common/Section";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { ReviewCard } from "../common/ReviewCard";
import { ReviewForm } from "../forms/ReviewForm";
import { SlideUp } from "../animation/SlideUp";
import reviewsData from "../../data/reviews";

const featuredReviews = reviewsData.slice(0, 3);

export function ReviewsContent() {
  return (
    <main className="bg-black text-white">
      <PageBanner title="Client Reviews" description="See how our premium service is reshaping the way clients experience pest management." image="/hero7.png" eyebrow="Testimonials" />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Heading eyebrow="What clients say" title="Beautiful service, proven results." description="Our clients trust us for elite care, fast follow-up, and long-lasting protection." />
            <div className="mt-8 grid gap-6">
              {featuredReviews.map((review, index) => (
                <SlideUp key={review.id} delay={index * 0.05}>
                  <ReviewCard review={review} />
                </SlideUp>
              ))}
            </div>
          </div>
          <ReviewForm />
        </Container>
      </Section>
    </main>
  );
}