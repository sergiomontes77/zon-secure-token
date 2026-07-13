export const TOKEN_DURATION_SECONDS = 30;
export const TOKEN_LENGTH = 6;

export function generateSecureToken(): string {
  let code = "";
  for (let i = 0; i < TOKEN_LENGTH; i++) {
    code += Math.floor(Math.random() * 10).toString();
  }
  return code;
}
