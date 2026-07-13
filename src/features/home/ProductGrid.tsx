import { ProductShortcut } from "@/components/ProductShortcut/ProductShortcut";
import { PRODUCT_SHORTCUTS } from "@/services/walletService";

interface ProductGridProps {
  order: (keyof typeof PRODUCT_SHORTCUTS)[];
  onSelect?: (id: string) => void;
}

export function ProductGrid({ order, onSelect }: ProductGridProps) {
  return (
    <div className="flex w-full max-w-[323px] items-center gap-[13px]">
      {order.map((id) => (
        <ProductShortcut
          key={id}
          item={PRODUCT_SHORTCUTS[id]}
          onClick={onSelect ? () => onSelect(id) : undefined}
        />
      ))}
    </div>
  );
}
