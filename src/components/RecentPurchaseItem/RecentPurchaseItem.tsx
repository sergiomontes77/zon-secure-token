import { ListItem } from "@/components/ListItem/ListItem";
import { formatCurrencyBRL } from "@/utils/currency";
import type { RecentPurchase } from "@/types/wallet";

interface RecentPurchaseItemProps {
  purchase: RecentPurchase;
  showDivider?: boolean;
}

export function RecentPurchaseItem({ purchase, showDivider = true }: RecentPurchaseItemProps) {
  return (
    <ListItem
      showDivider={showDivider}
      leading={
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-zon-grey-88 bg-zon-grey-98">
          <span className="font-heading-zon text-sm font-bold text-zon-blue-darker">
            {purchase.initials}
          </span>
        </div>
      }
      title={purchase.merchant}
      subtitle={purchase.dateLabel}
      trailing={`− ${formatCurrencyBRL(purchase.amount)}`}
    />
  );
}
