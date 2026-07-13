import type { StaticImageData } from "next/image";
import { SuggestionCard } from "@/components/SuggestionCard/SuggestionCard";
import type { SuggestionBanner } from "@/types/wallet";

interface SuggestionsSectionProps {
  suggestion: SuggestionBanner;
  promoImages: StaticImageData[];
}

export function SuggestionsSection({ suggestion, promoImages }: SuggestionsSectionProps) {
  return (
    <section className="flex w-full flex-col items-start gap-3">
      <h2 className="font-heading-zon text-base leading-6 font-bold text-zon-grey-4">
        Sugestões
      </h2>
      <div className="flex w-full flex-col items-center gap-4">
        <SuggestionCard suggestion={suggestion} promoImages={promoImages} />
        <div className="flex h-2 items-center gap-2">
          <span className="h-2 w-8 rounded-full bg-zon-blue" />
          <span className="size-2 rounded-full bg-zon-grey-88" />
          <span className="size-2 rounded-full bg-zon-grey-88" />
          <span className="size-2 rounded-full bg-zon-grey-88" />
        </div>
      </div>
    </section>
  );
}
