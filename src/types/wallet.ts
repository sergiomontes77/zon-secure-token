import type { StaticImageData } from "next/image";

export interface ProductShortcutItem {
  id: string;
  label: string;
  icon: StaticImageData;
}

export interface RecentPurchase {
  id: string;
  merchant: string;
  initials: string;
  dateLabel: string;
  amount: number;
  installmentLabel?: string;
}

export interface CreditCardInvoice {
  status: string;
  monthLabel: string;
  amount: number;
  dueDateLabel: string;
}

export interface WalletBalance {
  used: number;
  available: number;
  limit: number;
}

export interface SuggestionBanner {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  ctaLabel: string;
}
