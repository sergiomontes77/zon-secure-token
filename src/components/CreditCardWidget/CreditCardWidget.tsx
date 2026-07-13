import Image from "next/image";
import iconClockBadge from "@/assets/icons/icon-clock-badge.svg";
import iconClockSmall from "@/assets/icons/icon-clock-small.svg";
import watermarkFragment1 from "@/assets/icons/card-watermark-fragment-1.svg";
import watermarkFragment2 from "@/assets/icons/card-watermark-fragment-2.svg";
import watermarkFragment3 from "@/assets/icons/card-watermark-fragment-3.svg";
import { formatCurrencyBRL } from "@/utils/currency";
import { Button } from "@/components/Button/Button";
import type { CreditCardInvoice } from "@/types/wallet";

interface CreditCardWidgetProps {
  invoice: CreditCardInvoice;
  masked?: boolean;
  onViewInvoice?: () => void;
}

export function CreditCardWidget({ invoice, masked = false, onViewInvoice }: CreditCardWidgetProps) {
  return (
    <div className="relative h-[246px] w-full max-w-[350px] shrink-0 overflow-hidden rounded-[20px] bg-zon-blue px-[23px] py-[33px] shadow-[0px_6px_13px_0px_rgba(0,70,205,0.25)]">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <Image
          src={watermarkFragment1}
          alt=""
          className="absolute top-[60.09px] left-[182.06px] h-[79.829px] w-[151.384px]"
        />
        <Image
          src={watermarkFragment2}
          alt=""
          className="absolute top-0 left-[219.26px] h-[60.118px] w-[114.743px]"
        />
        <Image
          src={watermarkFragment3}
          alt=""
          className="absolute top-[139.88px] left-[219.26px] h-[60.118px] w-[114.743px]"
        />
      </div>

      <div className="relative flex h-full flex-col gap-2.5">
        <div className="flex items-center gap-1.5 self-start rounded-[999px] border border-zon-blue-89 bg-zon-grey-96 px-[13px] py-[7px]">
          <Image src={iconClockBadge} alt="" className="size-3.5" />
          <span className="font-heading-zon text-xs leading-[18px] font-bold tracking-[0.2px] text-zon-blue">
            {invoice.status}
          </span>
        </div>

        <div className="flex h-[153px] flex-col gap-2.5">
          <p className="font-heading-zon w-full text-base font-bold text-zon-blue-primary-100">
            {invoice.monthLabel}
          </p>
          <p className="font-heading-zon w-full text-[32px] font-semibold text-zon-grayscale-0">
            {masked ? "R$ ••••••" : formatCurrencyBRL(invoice.amount)}
          </p>
          <div className="flex h-[29px] w-full items-center gap-2 pt-1 pb-3.5">
            <Image src={iconClockSmall} alt="" className="size-4" />
            <span className="font-heading-zon text-sm font-semibold text-zon-blue-100">
              {invoice.dueDateLabel}
            </span>
          </div>
          <Button variant="solid-pill" onClick={onViewInvoice}>
            Ver fatura
          </Button>
        </div>
      </div>
    </div>
  );
}
