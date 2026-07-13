"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import iconClose from "@/assets/icons/icon-close.svg";
import { TokenCircle } from "@/components/TokenCircle/TokenCircle";
import { useSecureToken } from "@/hooks/useSecureToken";

interface TokenModalProps {
  open: boolean;
  onClose: () => void;
}

export function TokenModal({ open, onClose }: TokenModalProps) {
  const { code, remainingSeconds, durationSeconds, cycle } = useSecureToken();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center bg-white/70 backdrop-blur-[2px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Token para compras"
            className="relative flex h-[550px] w-[316px] max-w-[calc(100%-32px)] flex-col items-center gap-10 rounded-[15px] bg-white pt-12 shadow-[3px_7px_25px_0px_rgba(0,70,205,0.25)]"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={onClose}
              className="absolute top-4 right-4 flex size-6 items-center justify-center"
            >
              <Image src={iconClose} alt="" className="size-6" />
            </button>

            <h1 className="font-heading-zon px-6 text-center text-[17px] font-bold uppercase text-zon-blue-dark">
              Token para compras
            </h1>

            <TokenCircle
              code={code}
              remainingSeconds={remainingSeconds}
              durationSeconds={durationSeconds}
              cycle={cycle}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
