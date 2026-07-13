import Image from "next/image";
import { Search } from "lucide-react";
import iconBarcodeScanner from "@/assets/icons/icon-barcode-scanner.svg";

interface SearchBarProps {
  placeholder?: string;
}

export function SearchBar({ placeholder = "O que você precisa hoje?" }: SearchBarProps) {
  return (
    <div className="flex w-full items-center gap-[9px]">
      <div className="flex h-10 flex-1 items-center">
        <label className="flex h-10 w-full items-center gap-1 rounded-[10px] border-[0.6px] border-zon-grey-400 bg-white px-3 py-2.5">
          <Search className="size-[19px] text-zon-text-border-default" strokeWidth={2} />
          <input
            type="text"
            placeholder={placeholder}
            className="font-body-zon w-full bg-transparent text-xs font-semibold text-zon-text-border-default placeholder:text-zon-text-border-default focus:outline-none"
          />
        </label>
      </div>
      <button
        type="button"
        aria-label="Ler código de barras"
        className="flex size-10 shrink-0 items-center justify-center rounded-[10px] border-[0.6px] border-zon-grey-400 bg-white px-3 py-2.5"
      >
        <Image src={iconBarcodeScanner} alt="" className="size-5" />
      </button>
    </div>
  );
}
