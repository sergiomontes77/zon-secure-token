"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  max: number;
}

export function ProgressBar({ value, max }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className="h-[14px] w-full rounded-[999px] border border-zon-grey-92 bg-zon-grey-96">
      <div className="size-full overflow-clip rounded-[inherit]">
        <motion.div
          className="h-full rounded-[999px] bg-zon-blue"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
