import { Card } from "@/components/Card/Card";
import { ProgressBar } from "@/components/Progress/ProgressBar";
import { formatCurrencyBRL } from "@/utils/currency";
import type { WalletBalance } from "@/types/wallet";

interface CreditLimitCardProps {
  balance: WalletBalance;
}

export function CreditLimitCard({ balance }: CreditLimitCardProps) {
  return (
    <Card className="flex w-full flex-col gap-3.5 px-[21px] pt-5 pb-[21px]">
      <p className="font-heading-zon text-[15px] leading-[22.5px] font-semibold text-zon-grey-15">
        Você utilizou{" "}
        <span className="font-bold text-zon-grey-4">
          {formatCurrencyBRL(balance.used)}
        </span>{" "}
        do seu limite.
      </p>

      <ProgressBar value={balance.used} max={balance.limit} />

      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col items-start">
          <span className="font-heading-zon text-xs leading-[18px] font-semibold text-zon-grey-35">
            Disponível
          </span>
          <span className="font-heading-zon text-[17px] leading-[25.5px] font-bold text-zon-blue">
            {formatCurrencyBRL(balance.available)}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="font-heading-zon text-xs leading-[18px] font-semibold text-zon-grey-35">
            Limite total
          </span>
          <span className="font-heading-zon text-[17px] leading-[25.5px] font-bold text-zon-grey-15">
            {formatCurrencyBRL(balance.limit)}
          </span>
        </div>
      </div>
    </Card>
  );
}
