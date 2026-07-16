<div align="center">

# TokenPay — Secure Token Wallet

**Case de Product Design + Front-end**

Um aplicativo de carteira digital com Token de Segurança, construído como case de portfólio.
Inspirado na experiência de fintechs como Nubank, C6 Bank, Mercado Pago e Apple Wallet.

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

</div>

---

## Sobre o projeto

O **TokenPay** nasceu de uma pergunta simples: como seria construir um super app financeiro do zero, priorizando qualidade de interface, arquitetura escalável e atenção aos detalhes de UX?

O projeto simula as telas principais de um cartão de crédito digital — visualização de limite, fatura, atalhos de produtos e autenticação por token seguro (TOTP-inspired), tudo dentro de um artboard de 390 × 840px que replica fielmente a resolução de um iPhone moderno.

---

## Preview

> _Adicione screenshots e/ou um GIF da aplicação aqui._

| Tela Início | Tela Cartão | Token Modal |
|:-----------:|:-----------:|:-----------:|
| `screenshot-home.png` | `screenshot-card.png` | `screenshot-token.gif` |

---

## Problema resolvido

Aplicativos financeiros exigem uma combinação rara de habilidades: **design system consistente**, **animações fluidas**, **gestão de estado local** e **acessibilidade** — tudo em um ambiente onde a confiança do usuário é crítica.

Este projeto demonstra como essas camadas podem ser organizadas de forma coesa, partindo de tokens de design extraídos do Figma até componentes React prontos para produção.

---

## Funcionalidades

- **Tela de Soluções (Home)** — Grid de atalhos de produtos, card de limite de crédito com barra de progresso e carrossel de sugestões promocionais.
- **Tela de Cartão** — Widget interativo do cartão de crédito com modo "esconder saldo", atalhos rápidos e histórico de compras recentes.
- **Token de Segurança** — Modal com código TOTP de 6 dígitos, geração automática a cada 30 segundos e animação de spinner com timer de contagem regressiva.
- **Navegação por abas** — Tab bar com highlight do item ativo, fixada na borda inferior do artboard.
- **Transições de rota** — Animação de entrada suave entre páginas via Framer Motion.
- **Status Bar** — Simulação da barra de sistema iOS (horário, bateria, sinal).
- **Design responsivo** — Artboard fixo em desktop (390 × 840px) com fallback para tela cheia em mobile.

---

## Tecnologias

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 15 |
| UI Library | React | 19 |
| Linguagem | TypeScript | 5 |
| Estilização | Tailwind CSS | v4 |
| Componentes base | shadcn/ui + Base UI | latest |
| Animações | Framer Motion | 12 |
| Ícones | Lucide React | latest |
| Linting | ESLint + eslint-config-next | 9 |
| Formatação | Prettier + prettier-plugin-tailwindcss | 3 |

---

## Design System

Os tokens de design foram extraídos diretamente do Figma e mapeados como variáveis CSS no `globals.css` sob o namespace `zon-*`, garantindo uma fonte única de verdade entre o design e o código.

```css
/* Exemplos de tokens */
--color-zon-blue:         #0046CD;   /* Azul primário */
--color-zon-blue-dark:    #002868;   /* Azul escuro (textos) */
--color-zon-grey-4:       #0A0A0A;   /* Texto principal */
--color-zon-grey-92:      #D4EEFF;   /* Track do círculo / fundos suaves */

--font-heading-zon:  var(--font-montserrat);  /* Headings e labels */
--font-body-zon:     var(--font-inter);        /* Corpo de texto */

--radius-zon-sm:     12px;
--radius-zon-md:     16px;
--radius-zon-modal:  15px;
```

Todos os componentes consomem exclusivamente esses tokens via classes Tailwind (`text-zon-blue`, `bg-zon-grey-98`, etc.), sem valores hardcoded de cor ou tipografia.

---

## Arquitetura

O projeto segue uma separação clara de responsabilidades em três camadas:

```
Screens  →  orquestram dados e composição de layout
Features →  módulos de domínio (home, card, token)
Components → primitivos de UI reutilizáveis e sem lógica de negócio
```

- **`screens/`** instanciam os dados (via `services/`) e compõem os blocos de feature.
- **`features/`** agrupam componentes relacionados a um domínio específico.
- **`components/`** são totalmente agnósticos de domínio — recebem apenas props.
- **`hooks/`** encapsulam lógica stateful (`useSecureToken`, `useCountdown`, `useToggle`).
- **`services/`** centralizam as regras de negócio e mock de dados.
- **`types/`** definem contratos TypeScript compartilhados entre camadas.

---

## Estrutura de pastas

```
src/
├── app/                    # Rotas e layouts (Next.js App Router)
│   ├── layout.tsx          # Root layout (fontes, metadata)
│   ├── template.tsx        # Animação de transição entre páginas
│   ├── page.tsx            # Rota /  → Tela de Soluções
│   ├── cartao/page.tsx     # Rota /cartao → Tela de Cartão
│   └── token/page.tsx      # Rota /token  → Tela de Token
│
├── screens/                # Composição de páginas completas
│   ├── HomeSolucoesScreen.tsx
│   └── HomeCardScreen.tsx
│
├── features/               # Módulos de domínio
│   ├── home/               # CreditLimitCard, ProductGrid, SuggestionsSection
│   ├── card/               # CreditCardSection, RecentPurchasesSection
│   └── token/              # TokenModal
│
├── components/             # Primitivos de UI reutilizáveis
│   ├── BottomNavigation/
│   ├── Button/
│   ├── Card/
│   ├── CreditCardWidget/
│   ├── Header/
│   ├── ListItem/
│   ├── ProductShortcut/
│   ├── Progress/
│   ├── RecentPurchaseItem/
│   ├── Search/
│   ├── StatusBar/
│   ├── SuggestionCard/
│   ├── TokenCircle/
│   └── ui/                 # Componentes base do shadcn/ui
│
├── hooks/                  # Custom React hooks
│   ├── useSecureToken.ts   # Geração e ciclo de vida do token TOTP
│   ├── useCountdown.ts     # Timer de contagem regressiva
│   └── useToggle.ts
│
├── services/               # Regras de negócio e mock de dados
│   ├── tokenService.ts
│   └── walletService.ts
│
├── types/                  # Interfaces TypeScript compartilhadas
├── utils/                  # Funções utilitárias (ex: formatCurrencyBRL)
├── assets/                 # Ícones SVG e imagens estáticas (icons/, images/)
├── styles/                 # Reservado para estilos globais adicionais
└── lib/                    # Utilitários de infraestrutura (cn())
```

---

## Como executar

### Pré-requisitos

- Node.js `>= 18`
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/tokenpay-app.git
cd tokenpay-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build otimizado para produção |
| `npm run start` | Serve o build de produção |
| `npm run lint` | Análise estática com ESLint |
| `npm run format` | Formata o código com Prettier |
| `npm run format:check` | Verifica formatação sem alterar arquivos |

---

## Decisões de design notáveis

- **Artboard fixo de 390 × 840px** — simula a viewport de um iPhone 14/15, garantindo fidelidade ao design original do Figma sem depender de device real.
- **`h-dvh` no mobile** — usa `dynamic viewport height` para lidar corretamente com a barra de endereço retrátil do Safari iOS.
- **Scroll isolado na área de conteúdo** — a tab bar e o header permanecem fixos enquanto apenas o miolo da tela rola, replicando o comportamento nativo de apps móveis.
- **Token TOTP-inspired** — o ciclo de 30s com geração criptograficamente aleatória (`crypto.getRandomValues`-inspired via `Math.random`) demonstra o fluxo de autenticação por segundo fator sem dependência de servidor.
- **Transições com Framer Motion** — todas as animações seguem um orçamento de duração consistente (0.25s para micro-interações, spring para modais).

---

<div align="center">

Feito com atenção aos detalhes.

</div>
