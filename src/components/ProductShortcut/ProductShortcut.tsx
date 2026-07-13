import Image from "next/image";
import type { ProductShortcutItem } from "@/types/wallet";

interface ProductShortcutProps {
  item: ProductShortcutItem;
  onClick?: () => void;
}

export function ProductShortcut({ item, onClick }: ProductShortcutProps) {
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className="flex h-[87px] w-[60px] shrink-0 flex-col items-center gap-[7px] text-center"
    >
      <div className="flex size-[50px] items-center justify-center rounded-[20px] border border-zon-neutral-gray-light bg-white p-[5px]">
        <Image src={item.icon} alt={item.label} className="size-full object-cover" />
      </div>
      <span className="font-body-zon w-[66px] text-xs leading-normal font-semibold tracking-[-0.24px] text-zon-text-subtitle">
        {item.label}
      </span>
    </Wrapper>
  );
}
