"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const ACTIVE_COLOR = "#0046CD";
const INACTIVE_COLOR = "#CFCFCE";

function HomeIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 18V15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.07 2.82L3.14 8.37C2.36 8.99 1.86 10.3 2.03 11.28L3.36 19.24C3.6 20.66 4.96 21.81 6.4 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99 20.86 8.37L13.93 2.83C12.86 1.97 11.13 1.97 10.07 2.82Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartaoIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 8.50496H22"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16.505H8"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 16.505H14.5"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.44 3.50496H17.55C21.11 3.50496 22 4.38496 22 7.89496V16.105C22 19.615 21.11 20.495 17.56 20.495H6.44C2.89 20.505 2 19.625 2 16.115V7.89496C2 4.38496 2.89 3.50496 6.44 3.50496Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AtendimentoIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9965 11H16.0054"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 11H12.0045"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99451 11H8.00349"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 12H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 17H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const NAV_ITEMS = [
  { id: "inicio", label: "Início", href: "/", Icon: HomeIcon },
  { id: "cartao", label: "Cartão", href: "/cartao", Icon: CartaoIcon },
  { id: "atendimento", label: "Atendimento", href: "#", Icon: AtendimentoIcon },
  { id: "menu", label: "Menu", href: "#", Icon: MenuIcon },
] as const;

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="flex w-full shrink-0 items-start bg-white pt-[13px] shadow-[0px_-5px_10px_0px_rgba(0,0,0,0.1)]"
      style={{
        paddingBottom: "max(13px, env(safe-area-inset-bottom))",
        minHeight: "91px",
      }}
    >
      {NAV_ITEMS.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : item.href !== "#" && pathname.startsWith(item.href);
        const color = active ? ACTIVE_COLOR : INACTIVE_COLOR;

        return (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-1 flex-col items-center gap-[3px]"
            aria-current={active ? "page" : undefined}
          >
            <item.Icon color={color} />
            <span
              className={`font-heading-zon text-[10px] font-medium leading-[14px] ${
                active ? "text-zon-blue" : "text-zon-disabled"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
