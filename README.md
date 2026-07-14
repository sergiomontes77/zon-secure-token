# 🔐 Z-ON Secure Token

Aplicação mobile desenvolvida para reproduzir a experiência de autenticação por **Secure Token**, criada para aumentar a segurança nas transações do cartão Private Label da Z-ON Soluções Financeiras.

Este projeto demonstra como uma solução de UX, Produto e Tecnologia pode reduzir fraudes sem comprometer a experiência do usuário.

🌐 **Aplicação:** https://zon-secure-token.vercel.app

📂 **Repositório:** https://github.com/sergiomontes77/zon-secure-token

---

# O Problema

Durante análises de fraude foi identificado um comportamento recorrente:

Clientes, principalmente pessoas com menor familiaridade com tecnologia, compartilhavam a senha do cartão com terceiros para concluir compras presenciais. Em alguns casos, essas senhas eram utilizadas posteriormente para realizar transações fraudulentas utilizando apenas o CPF do cliente e a senha já conhecida.

O desafio era aumentar a segurança sem tornar o processo de pagamento mais complexo.

---

# A Solução

Foi criada uma experiência baseada em **Secure Token**, substituindo a autenticação apenas por senha estática por um código temporário válido por 30 segundos.

A solução contempla:

- geração automática de Token temporário;
- renovação do código a cada 30 segundos;
- indicador visual do tempo restante;
- opção de ocultar e exibir o Token;
- navegação simples e intuitiva.

Além da funcionalidade, foi realizada uma estratégia de educação dos clientes durante aproximadamente três meses para incentivar a adoção da nova forma de autenticação.

---

# Resultado

A iniciativa contribuiu para uma redução aproximada de **25% nas fraudes** envolvendo o cartão Private Label.

> **Observação:** Este repositório é um case de portfólio que reproduz a experiência da funcionalidade desenvolvida. O resultado apresentado refere-se à iniciativa implementada no produto real.

---

# Meu Papel

Como Senior Product Designer participei da concepção da experiência da funcionalidade, colaborando na definição dos fluxos, arquitetura da interface, componentes, validação da experiência e alinhamento com Produto e Engenharia.

Neste projeto reproduzo essa experiência utilizando Next.js, TypeScript e um Design System componentizado.

---

# Funcionalidades

- Home de Soluções
- Tela do Cartão
- Secure Token
- Contagem regressiva
- Mostrar / Ocultar Token
- Navegação Mobile
- Componentização
- Responsividade
- Animações com Framer Motion

---

# Screenshots

## Home

![Home](docs/images/home.png)

---

## Cartão

![Cartão](docs/images/home-card.png)

---

## Secure Token

![Secure Token](docs/images/secure-token.png)

---

# Tecnologias

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide Icons

---

# Como executar

```bash
git clone https://github.com/sergiomontes77/zon-secure-token.git

cd zon-secure-token

npm install

npm run dev
```

Abra:

```
http://localhost:3000
```

---

# Roadmap

### Versão atual

- Home
- Cartão
- Secure Token
- Contagem regressiva
- Navegação
- Componentes reutilizáveis

### Próximas evoluções

- Login com biometria
- Histórico de Tokens
- Dark Mode
- Skeleton Loading
- Estados de erro
- Internacionalização
- Testes automatizados

---

# Autor

**Sérgio Romão Montes**

Senior Product Designer

LinkedIn

https://linkedin.com/in/sergiormontes1977

Portfólio

https://sergioromaomontes.com.br

GitHub

https://github.com/sergiomontes77

---

# Licença

Projeto desenvolvido para fins de estudo e portfólio.
