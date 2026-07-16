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

const DASH_COUNT = 24;
const GLOW_DURATION_SECONDS = 2.4;

// Arredondado a 2 casas decimais: Math.cos/Math.sin podem gerar dígitos finais
// diferentes entre o motor JS do servidor e do navegador, causando mismatch de hidratação.
function round(value: number) {
  return Math.round(value * 100) / 100;
}

// O anel fica parado — cada traço apenas troca de cor (cinza ↔ azul) no lugar.
// O atraso escalonado por índice faz a "luz" parecer percorrer o anel fixo.
const DASHES = Array.from({ length: DASH_COUNT }, (_, i) => {
  const angle = (i * 360) / DASH_COUNT;
  const rad = (angle * Math.PI) / 180;
  const r1 = 78;
  const r2 = 96;
  return {
    x1: round(110 + r1 * Math.cos(rad)),
    y1: round(110 + r1 * Math.sin(rad)),
    x2: round(110 + r2 * Math.cos(rad)),
    y2: round(110 + r2 * Math.sin(rad)),
    delay: round(-(i / DASH_COUNT) * GLOW_DURATION_SECONDS),
  };
});

export function TokenCircle({ code, remainingSeconds }: TokenCircleProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative flex size-[250px] items-center justify-center">
        <svg viewBox="0 0 220 220" className="absolute inset-0 size-full" aria-hidden>
          {DASHES.map((dash, i) => (
            <line
              key={i}
              x1={dash.x1}
              y1={dash.y1}
              x2={dash.x2}
              y2={dash.y2}
              strokeWidth={10}
              strokeLinecap="round"
              style={{
                animation: `token-dash-glow ${GLOW_DURATION_SECONDS}s ease-in-out infinite`,
                animationDelay: `${dash.delay}s`,
              }}
            />
          ))}
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
