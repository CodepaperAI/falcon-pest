"use client";

import { useEffect, useState } from "react";
import { PageBanner } from "../common/PageBanner";
import { Section } from "../common/Section";
import { Container } from "../common/Container";
import { Heading } from "../common/Heading";
import { ReviewCard } from "../common/ReviewCard";
import { ReviewForm } from "../forms/ReviewForm";
import { SlideUp } from "../animation/SlideUp";
import reviewsData from "../../data/reviews";

export function ReviewsContent() {
  const [reviews, setReviews] = useState(reviewsData);

  useEffect(() => {
    const storedReviews = window.localStorage.getItem("falcon-reviews");
    if (storedReviews) {
      const parsed = JSON.parse(storedReviews);
      setReviews([...(parsed || []), ...reviewsData]);
    }
  }, []);

  const onSubmitReview = (review) => {
    const updated = [review, ...reviews];
    setReviews(updated);
    window.localStorage.setItem("falcon-reviews", JSON.stringify(updated));
  };

  return (
    <main className="bg-black text-white">
      <PageBanner title="Client Reviews" description="See how our premium service is reshaping the way clients experience pest management." image="/hero7.png" eyebrow="Testimonials" />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Heading eyebrow="What clients say" title="Beautiful service, proven results." description="Our clients trust us for elite care, fast follow-up, and long-lasting protection." />
            <div className="mt-8 grid gap-6">
              {reviews.map((review, index) => (
                <SlideUp key={`${review.id}-${index}`} delay={index * 0.05}>
                  <ReviewCard review={review} />
                </SlideUp>
              ))}
            </div>
          </div>
          <ReviewForm onSubmitReview={onSubmitReview} />
        </Container>
      </Section>
    </main>
  );
}
