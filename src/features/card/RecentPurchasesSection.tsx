import Image from "next/image";
import iconChevronRight from "@/assets/icons/icon-chevron-right.svg";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";
import { RecentPurchaseItem } from "@/components/RecentPurchaseItem/RecentPurchaseItem";
import type { RecentPurchase } from "@/types/wallet";

interface RecentPurchasesSectionProps {
  purchases: RecentPurchase[];
}

export function RecentPurchasesSection({ purchases }: RecentPurchasesSectionProps) {
  return (
    <section className="flex w-full flex-col items-start gap-3 pt-3">
      <div className="flex w-full items-center justify-between">
        <h2 className="font-heading-zon text-base leading-6 font-bold text-zon-grey-4">
          Compras recentes
        </h2>
        <Button variant="ghost">
          Ver tudo
          <Image src={iconChevronRight} alt="" className="size-4" />
        </Button>
      </div>

      <Card className="flex w-full flex-col items-start px-[21px] py-1">
        {purchases.map((purchase, index) => (
          <RecentPurchaseItem
            key={purchase.id}
            purchase={purchase}
            showDivider={index < purchases.length - 1}
          />
        ))}
      </Card>
    </section>
  );
}
