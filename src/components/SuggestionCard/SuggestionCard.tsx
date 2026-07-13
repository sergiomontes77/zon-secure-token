import Image, { type StaticImageData } from "next/image";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import type { SuggestionBanner } from "@/types/wallet";

interface SuggestionCardProps {
  suggestion: SuggestionBanner;
  promoImages?: StaticImageData[];
}

export function SuggestionCard({ suggestion, promoImages = [] }: SuggestionCardProps) {
  return (
    <Card className="flex w-full flex-col gap-4 rounded-[12px] p-4">
      {promoImages.map((promoImage, index) => (
        <div
          key={index}
          className="relative h-[236px] w-full shrink-0 overflow-hidden rounded-lg"
        >
          <Image src={promoImage} alt="" fill sizes="350px" className="object-cover" />
        </div>
      ))}

      <div className="relative h-[103px] w-full shrink-0 overflow-hidden rounded-lg">
        <Image
          src={suggestion.image}
          alt=""
          fill
          sizes="350px"
          className="object-cover object-bottom"
        />
      </div>
      <div className="flex w-full flex-col gap-2">
        <p className="font-body-zon text-lg leading-[1.4] font-bold tracking-[-0.63px] text-zon-grey-4">
          {suggestion.title}
        </p>
        <p className="font-body-zon text-sm leading-[1.3] text-zon-text-tertiary">
          {suggestion.description}
        </p>
      </div>
      <Button variant="solid">{suggestion.ctaLabel}</Button>
    </Card>
  );
}
