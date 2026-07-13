"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "outline" | "solid" | "solid-pill" | "ghost";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  outline:
    "h-8 rounded-[4px] border border-zon-blue-25 px-3 py-1 font-body-zon text-xs font-semibold text-zon-blue-25",
  solid: "h-8 rounded-[4px] bg-zon-blue px-3 py-1 font-body-zon text-xs font-semibold text-zon-neutral-05",
  "solid-pill":
    "h-[35px] w-full rounded-[4px] bg-zon-grayscale-0 px-[30px] py-[5px] font-heading-zon text-xs font-semibold text-zon-blue",
  ghost: "flex items-center gap-1.5 px-1 py-1.5 font-heading-zon text-[13px] font-bold text-zon-blue",
};

export function Button({ variant = "outline", className, children, ...props }: ButtonProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      className={cn("inline-flex items-center justify-center", variantStyles[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
