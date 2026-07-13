"use client";

import { useState } from "react";
import { StatusBar } from "@/components/StatusBar/StatusBar";
import { Header } from "@/components/Header/Header";
import { SearchBar } from "@/components/Search/SearchBar";
import { BottomNavigation } from "@/components/BottomNavigation/BottomNavigation";
import { ProductGrid } from "@/features/home/ProductGrid";
import { CreditLimitCard } from "@/features/home/CreditLimitCard";
import { SuggestionsSection } from "@/features/home/SuggestionsSection";
import { TokenModal } from "@/features/token/TokenModal";
import {
  getPromoBanners,
  getSuggestionBanner,
  getWalletBalance,
  PRODUCT_SHORTCUTS,
} from "@/services/walletService";

const TOP_ROW = Object.keys(PRODUCT_SHORTCUTS) as (keyof typeof PRODUCT_SHORTCUTS)[];
const BOTTOM_ROW: (keyof typeof PRODUCT_SHORTCUTS)[] = [
  "token-compras",
  "recarga",
  "gift-card",
  "seguro",
  "conta-digital",
];

export function HomeSolucoesScreen() {
  const [tokenOpen, setTokenOpen] = useState(false);
  const balance = getWalletBalance();
  const suggestion = getSuggestionBanner();
  const promoImages = getPromoBanners();

  const handleSelect = (id: string) => {
    if (id === "token-compras") setTokenOpen(true);
  };

  return (
    <div className="relative mx-auto flex h-dvh w-full max-w-[390px] flex-col overflow-hidden bg-white sm:h-[840px] sm:max-h-[840px] sm:shadow-2xl">
      <StatusBar />
      <Header variant="solucoes" />

      <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-[19px] pt-2 pb-6">
        <SearchBar />

        <section className="flex w-full flex-col items-start gap-3">
          <h2 className="font-heading-zon text-base leading-6 font-bold text-zon-grey-4">
            Nossos produtos
          </h2>
          <ProductGrid order={TOP_ROW} onSelect={handleSelect} />
        </section>

        <CreditLimitCard balance={balance} />

        <SuggestionsSection suggestion={suggestion} promoImages={promoImages} />

        <ProductGrid order={BOTTOM_ROW} onSelect={handleSelect} />
      </div>

      <BottomNavigation />

      <TokenModal open={tokenOpen} onClose={() => setTokenOpen(false)} />
    </div>
  );
}
