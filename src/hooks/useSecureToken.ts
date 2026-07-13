"use client";

import { useCallback, useEffect, useState } from "react";
import { generateSecureToken, TOKEN_DURATION_SECONDS } from "@/services/tokenService";
import { useCountdown } from "@/hooks/useCountdown";

const PLACEHOLDER_CODE = "000000";

export function useSecureToken() {
  const [code, setCode] = useState(PLACEHOLDER_CODE);
  const [cycle, setCycle] = useState(0);

  const regenerate = useCallback(() => {
    setCode(generateSecureToken());
    setCycle((value) => value + 1);
  }, []);

  // Gera o primeiro código apenas no cliente para evitar mismatch de hidratação
  // (o servidor sempre renderiza o placeholder determinístico acima).
  useEffect(() => {
    regenerate();
  }, [regenerate]);

  const remainingSeconds = useCountdown(TOKEN_DURATION_SECONDS, regenerate, cycle);

  return {
    code,
    remainingSeconds,
    durationSeconds: TOKEN_DURATION_SECONDS,
    cycle,
  };
}
