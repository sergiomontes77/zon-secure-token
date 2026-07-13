"use client";

import Image from "next/image";
import iconEyeSlash from "@/assets/icons/icon-eye-slash.svg";
import { Button } from "@/components/Button/Button";
import { CreditCardWidget } from "@/components/CreditCardWidget/CreditCardWidget";
import { useToggle } from "@/hooks/useToggle";
import type { CreditCardInvoice } from "@/types/wallet";

interface CreditCardSectionProps {
  invoice: CreditCardInvoice;
  onViewInvoice?: () => void;
}

export function CreditCardSection({ invoice, onViewInvoice }: CreditCardSectionProps) {
  const [hidden, toggleHidden] = useToggle(false);

  return (
    <section className="flex w-full flex-col items-start gap-2">
      <h1 className="font-heading-zon w-full text-[22px] leading-[26.4px] font-bold text-zon-grey-4">
        Meu cartão de crédito
      </h1>

      <div className="flex w-full items-center justify-between pt-2">
        <span className="font-heading-zon text-base leading-6 font-bold text-zon-grey-4">
          Seu cartão
        </span>
        <Button variant="ghost" onClick={toggleHidden}>
          <Image src={iconEyeSlash} alt="" className="size-5" />
          {hidden ? "Mostrar" : "Esconder"}
        </Button>
      </div>

      <CreditCardWidget invoice={invoice} masked={hidden} onViewInvoice={onViewInvoice} />
    </section>
  );
}
