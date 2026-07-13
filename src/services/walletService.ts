import productTokenCompras from "@/assets/images/product-token-compras.png";
import productContaDigital from "@/assets/images/product-conta-digital.png";
import productRecarga from "@/assets/images/product-recarga.png";
import productSeguro from "@/assets/images/product-seguro.png";
import productGiftCard from "@/assets/images/product-gift-card.png";
import bannerEmprestimo from "@/assets/images/banner-emprestimo.png";
import promoPix from "@/assets/images/promo-pix.png";
import promoSeguroFamilia from "@/assets/images/promo-seguro-familia.png";
import promoFinanciamentoCarro from "@/assets/images/promo-financiamento-carro.png";
import promoFilmesSeries from "@/assets/images/promo-filmes-series.png";
import type {
  CreditCardInvoice,
  ProductShortcutItem,
  RecentPurchase,
  SuggestionBanner,
  WalletBalance,
} from "@/types/wallet";

export const PRODUCT_SHORTCUTS: Record<string, ProductShortcutItem> = {
  "token-compras": {
    id: "token-compras",
    label: "Token para Compras",
    icon: productTokenCompras,
  },
  "conta-digital": {
    id: "conta-digital",
    label: "Conta Digital",
    icon: productContaDigital,
  },
  recarga: {
    id: "recarga",
    label: "Recarga",
    icon: productRecarga,
  },
  seguro: {
    id: "seguro",
    label: "Seguro",
    icon: productSeguro,
  },
  "gift-card": {
    id: "gift-card",
    label: "Gift Card",
    icon: productGiftCard,
  },
};

export function getWalletBalance(): WalletBalance {
  return {
    used: 754.18,
    available: 4245.82,
    limit: 5000,
  };
}

export function getCreditCardInvoice(): CreditCardInvoice {
  return {
    status: "Em aberto",
    monthLabel: "Fatura atual de agosto",
    amount: 754.18,
    dueDateLabel: "Vence em 12/11/2025",
  };
}

export function getRecentPurchases(): RecentPurchase[] {
  return [
    {
      id: "1",
      merchant: "Supermercado Condor",
      initials: "SU",
      dateLabel: "Hoje · 14:32",
      amount: 312.4,
    },
    {
      id: "2",
      merchant: "Farmácia Nissei",
      initials: "FA",
      dateLabel: "Hoje · 09:18",
      amount: 48.9,
    },
    {
      id: "3",
      merchant: "Posto Condor",
      initials: "PO",
      dateLabel: "Ontem · 17:45",
      amount: 150,
    },
    {
      id: "4",
      merchant: "Posto Condor",
      initials: "CA",
      dateLabel: "03/11 · em 6x de R$ 41,50",
      amount: 249,
    },
    {
      id: "5",
      merchant: "Mercado Pago",
      initials: "ME",
      dateLabel: "02/11",
      amount: 89.9,
    },
  ];
}

export function getSuggestionBanner(): SuggestionBanner {
  return {
    id: "emprestimo",
    image: bannerEmprestimo,
    title: "Empréstimos com as melhores taxas",
    description: "Mostre aos seus amigos como é fácil ter uma vida longe da fila do banco.",
    ctaLabel: "Pegar empréstimos",
  };
}

export function getPromoBanners() {
  return [promoPix, promoSeguroFamilia, promoFinanciamentoCarro, promoFilmesSeries];
}
