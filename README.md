# TokenPay

Aplicativo de pagamentos com Token de Segurança (Secure Token Wallet), inspirado em fintechs como Nubank, C6 Bank, Mercado Pago e Apple Wallet. Projeto de portfólio focado em UX/UI, arquitetura de componentes e boas práticas de front-end.

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## Estrutura de pastas

```
src/
  app/          # Rotas e layouts (Next.js App Router)
  components/   # Componentes de UI reutilizáveis (inclui components/ui do shadcn)
  features/     # Módulos de domínio (ex.: wallet, transactions, auth)
  hooks/        # Custom React hooks
  services/     # Integrações com APIs e regras de negócio
  types/        # Tipos e interfaces TypeScript compartilhados
  utils/        # Funções utilitárias
  assets/       # Ícones e imagens estáticas
  styles/       # Estilos globais e tokens adicionais
  lib/          # Utilitários de infraestrutura (ex.: cn() do shadcn)
```

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando                 | Descrição                        |
| ----------------------- | --------------------------------- |
| `npm run dev`           | Ambiente de desenvolvimento       |
| `npm run build`         | Build de produção                 |
| `npm run start`         | Serve o build de produção         |
| `npm run lint`          | Roda o ESLint                     |
| `npm run format`        | Formata o código com Prettier     |
| `npm run format:check`  | Verifica formatação sem alterar   |
