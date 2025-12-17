}

# 🧵 Ateliê CKaizen — Site Institucional

Projeto de **site institucional para um ateliê de costura artesanal**, desenvolvido com **Next.js (App Router)** e utilizado **em produção por uma empresa real**.

Além do uso prático, o projeto também funciona como **material de estudo contínuo e item de portfólio**, com foco em **arquitetura front-end**, organização de código e boas práticas modernas.

🔗 **Site em produção:**
[https://atelie-ckaizen.vercel.app](https://atelie-ckaizen.vercel.app)

---

## 🧠 Contexto do projeto

O **Ateliê CKaizen** atua com **costura artesanal**, criação manual e manutenção de roupas, com atenção aos detalhes, alinhado à filosofia de **melhoria contínua (Kaizen)**.

Este projeto foi desenvolvido considerando **dois públicos simultaneamente**:

* **Usuários finais e clientes do ateliê**
* **Desenvolvedores e recrutadores**, interessados na qualidade técnica da solução

Por isso, o código prioriza **clareza, escalabilidade e manutenibilidade**, além da estética.

---

## 🎯 Objetivos técnicos

* Construir um site institucional funcional para um negócio real
* Aplicar na prática o **Next.js App Router**
* Trabalhar com **layout global compartilhado**
* Utilizar **componentização consciente**
* Estruturar o projeto de forma escalável
* Implementar um fluxo real de **deploy contínuo**

---

## 🛠️ Stack e decisões técnicas

* **Next.js 16 (App Router)**
  Utilizado para aproveitar Server Components, rotas baseadas em pastas e layout compartilhado.

* **React 18**
  Base para composição de componentes reutilizáveis.

* **TypeScript**
  Tipagem estática para maior previsibilidade e segurança no desenvolvimento.

* **Tailwind CSS**
  Escolhido pela produtividade, consistência visual e facilidade de manutenção.

* **Vercel**
  Plataforma de deploy com integração direta ao GitHub e CI/CD automático.

* **Git & GitHub**
  Versionamento e histórico real de evolução do projeto.

---

## 📁 Arquitetura do projeto

```bash
atelie-ckaizen/
├─ app/
│  ├─ layout.tsx      # Estrutura global da aplicação
│  ├─ page.tsx        # Página inicial (/)
│  └─ sobre/
│     └─ page.tsx     # Página Sobre (/sobre)
│
├─ components/
│  ├─ Header.tsx      # Cabeçalho e navegação
│  └─ Footer.tsx      # Rodapé global
│
├─ public/            # Assets estáticos
├─ globals.css        # Estilos globais
└─ tsconfig.json      # Configuração TypeScript + alias de imports
```

### Destaques arquiteturais

* Separação clara entre **layout**, **páginas** e **componentes**
* Uso de **alias (`@/`)** para imports previsíveis
* Layout global desacoplado de conteúdo
* Base preparada para crescimento do projeto

---

## 🧠 Conceitos aplicados

* App Router e rotas baseadas em diretórios
* Layout compartilhado (`layout.tsx`)
* Componentização e reutilização
* Server Components por padrão
* Organização orientada à escalabilidade
* Deploy contínuo com GitHub + Vercel
* Código pensado para leitura e manutenção

---

## ▶️ Execução local

```bash
git clone https://github.com/hubrenanb/atelie-ckaizen.git
cd atelie-ckaizen
npm install
npm run dev
```

Acesse: `http://localhost:3000`

---

## 🚀 Deploy e ambiente de produção

O projeto está integrado ao **Vercel**, com deploy automático a cada push na branch `main`.

Isso garante:

* Atualizações rápidas
* Versionamento seguro
* Estabilidade para uso em produção

---

## 🔜 Evoluções planejadas

* Página de contato
* Seção de serviços de costura
* Galeria de trabalhos realizados
* SEO avançado (metadata por página)
* Otimização de performance e acessibilidade

---

## 👤 Autor

**Renan Bernardo**
Desenvolvedor Front-end
GitHub: [https://github.com/hubrenanb](https://github.com/hubrenanb)
