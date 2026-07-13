"use client";

import { AnimatePresence, motion } from "framer-motion";

interface TokenCircleProps {
  code: string;
  remainingSeconds: number;
  durationSeconds: number;
  cycle: number;
}

function formatTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}

export function TokenCircle({ code, remainingSeconds }: TokenCircleProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative flex size-[250px] items-center justify-center">
        <svg
          viewBox="0 0 220 220"
          className="absolute inset-0 size-full animate-spin"
          style={{ animationDuration: "2s" }}
          aria-hidden
        >
          <circle cx={110} cy={110} r={102} fill="none" stroke="#ffffff" strokeWidth={16} />
          <circle
            cx={110}
            cy={110}
            r={102}
            fill="none"
            stroke="#0003FF"
            strokeWidth={16}
            strokeLinecap="round"
            strokeDasharray="160 481"
          />
        </svg>

        <div className="flex flex-col items-center gap-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={code}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="font-heading-zon text-lg font-bold tracking-[7.02px] text-zon-blue-dark"
            >
              {code}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="font-heading-zon text-lg leading-[1.4] font-bold tracking-[-0.18px] text-zon-blue">
          {formatTimer(remainingSeconds)}
        </span>
        <span className="font-heading-zon text-base leading-6 font-medium text-[#9d9d9d]">
          Tempo restante
        </span>
      </div>
    </div>
  );
}
