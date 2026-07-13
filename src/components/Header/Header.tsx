import Image from "next/image";
import iconMenuHamburger from "@/assets/icons/icon-menu-hamburger.svg";
import iconBell from "@/assets/icons/icon-bell.svg";
import logoZonSolucoes from "@/assets/images/logo-zon-solucoes.svg";
import logoZonCard from "@/assets/images/logo-zon-card.svg";
import avatar from "@/assets/images/avatar.png";

export type HeaderVariant = "solucoes" | "card";

interface HeaderProps {
  variant: HeaderVariant;
  notificationCount?: number;
}

export function Header({ variant, notificationCount = 1 }: HeaderProps) {
  return (
    <header className="flex w-full shrink-0 flex-col items-center gap-4 bg-white px-4 py-3">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-1 items-center gap-3">
          <button
            type="button"
            aria-label="Abrir menu"
            className="flex items-end justify-center rounded-md bg-white p-1"
          >
            <Image src={iconMenuHamburger} alt="" className="size-5" />
          </button>
          {variant === "solucoes" ? (
            <Image src={logoZonSolucoes} alt="Z-ON Soluções" className="h-10 w-[107px]" />
          ) : (
            <Image src={logoZonCard} alt="Z-ON Card" className="h-[27.948px] w-[69.452px]" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Notificações"
              className="relative flex items-end justify-center rounded-md bg-white p-1"
            >
              <Image src={iconBell} alt="" className="size-5" />
              {notificationCount > 0 && (
                <span className="absolute top-[9.5px] left-[13px] flex size-2 items-center justify-center rounded-full border border-white bg-zon-error px-0.5 py-0">
                  <span className="font-body-zon text-[4px] font-semibold text-white">
                    {notificationCount}
                  </span>
                </span>
              )}
            </button>
          </div>
          <div className="h-[29px] w-0 border-l border-zon-stroke-default" />
          <div className="relative flex w-6 flex-col items-end">
            <div className="relative mb-[-6px] size-6 overflow-hidden rounded-full border border-zon-stroke-default">
              <Image src={avatar} alt="Avatar" fill sizes="24px" className="object-cover" />
            </div>
            <span className="relative size-1.5 rounded-full border-[0.75px] border-white bg-zon-success" />
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-zon-stroke-default" />
    </header>
  );
}
