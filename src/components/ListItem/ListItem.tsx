import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ListItemProps {
  leading: ReactNode;
  title: string;
  subtitle: string;
  trailing: ReactNode;
  showDivider?: boolean;
}

export function ListItem({ leading, title, subtitle, trailing, showDivider = true }: ListItemProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-3.5 py-4",
        showDivider && "border-b border-zon-grey-93",
      )}
    >
      {leading}
      <div className="min-w-0 flex-1">
        <p className="font-heading-zon truncate text-[15px] leading-[22.5px] font-semibold text-zon-grey-4">
          {title}
        </p>
        <p className="font-heading-zon text-[13px] leading-[19.5px] font-medium text-zon-grey-35">
          {subtitle}
        </p>
      </div>
      <div className="font-heading-zon shrink-0 text-[15px] leading-[22.5px] font-bold text-zon-grey-4">
        {trailing}
      </div>
    </div>
  );
}
