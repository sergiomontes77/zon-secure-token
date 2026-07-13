"use client";

import { useState } from "react";
import { StatusBar } from "@/components/StatusBar/StatusBar";
import { Header } from "@/components/Header/Header";
import { BottomNavigation } from "@/components/BottomNavigation/BottomNavigation";
import { ProductGrid } from "@/features/home/ProductGrid";
import { CreditCardSection } from "@/features/card/CreditCardSection";
import { RecentPurchasesSection } from "@/features/card/RecentPurchasesSection";
import { TokenModal } from "@/features/token/TokenModal";
import { getCreditCardInvoice, getRecentPurchases, PRODUCT_SHORTCUTS } from "@/services/walletService";

const PRODUCT_ROW: (keyof typeof PRODUCT_SHORTCUTS)[] = [
  "token-compras",
  "recarga",
  "gift-card",
  "seguro",
  "conta-digital",
];

interface HomeCardScreenProps {
  initialTokenOpen?: boolean;
}

export function HomeCardScreen({ initialTokenOpen = false }: HomeCardScreenProps) {
  const [tokenOpen, setTokenOpen] = useState(initialTokenOpen);
  const invoice = getCreditCardInvoice();
  const purchases = getRecentPurchases();

  const handleSelect = (id: string) => {
    if (id === "token-compras") setTokenOpen(true);
  };

  return (
    <div className="relative mx-auto flex h-dvh w-full max-w-[390px] flex-col overflow-hidden bg-zon-grey-98 sm:h-[840px] sm:max-h-[840px] sm:shadow-2xl">
      <StatusBar />
      <Header variant="card" />

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-5 pt-[19px] pb-6">
        <CreditCardSection invoice={invoice} />
        <ProductGrid order={PRODUCT_ROW} onSelect={handleSelect} />
        <RecentPurchasesSection purchases={purchases} />
      </div>

      <BottomNavigation />

      <TokenModal open={tokenOpen} onClose={() => setTokenOpen(false)} />
    </div>
  );
}
