import { Star } from "lucide-react";
import { Card } from "./Card";

export function ReviewCard({ review }) {
  return (
    <Card className="h-full">
      <div className="flex gap-1 text-[#D4AF37]">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={`${review.id}-${index}`} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="mt-5 text-base leading-8 text-[#BDBDBD]">“{review.review}”</p>
      <div className="mt-6 border-t border-[#2A2A2A] pt-4">
        <p className="font-semibold text-white">{review.name}</p>
      </div>
    </Card>
  );
}
