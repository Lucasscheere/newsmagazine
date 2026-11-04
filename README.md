# News Magazine

 Jornal/portal editorial com artigos gerenciados no Strapi (CMS headless) e exibidos por um frontend Next.js



## Estrutura-alvo proposta para o MVP

```
newsmagazine/ 
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx 
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── artigos/[slug]/page.tsx
│   │   ├── cadernos/[slug]/page.tsx
│   │   ├── passatempos/
│   │   │   └── caca-palavras/page.tsx
│   │   └── sobre/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── article/
│   │   ├── charts/
│   │   └── games/
│   ├── lib/
│   │   └── strapi/
│   └── theme/
└── .env.local

newsmagazine-cms/                   # Strapi (repositório separado)
├── src/api/
│   ├── article/
│   ├── category/
│   ├── author/
│   └── page/
└── config/

```

## Checklist do MVP

### Já feito

- [x]  Repositório criado no GitHub e versionado (3 commits)
- [x]  Projeto Next.js 16 com TypeScript inicializado
- [x]  Biome configurado (lint e format)
- [x]  React Compiler, `cacheComponents` e `partialPrefetching` habilitados
- [x]  MUI 9 + Emotion + `AppRouterCacheProvider` integrados
- [x]  Tema MUI com paleta do design system e breakpoints
- [x]  Fontes carregadas com `next/font` (Merriweather, EB Garamond, Hanken Grotesk)
- [x]  Layout raiz com `lang="pt-BR"`, `CssBaseline` e `ThemeProvider`
- [x]  Componentes `AppBarGeral`, `Footer` e `Masterhead`
- [x]  Home montada com AppBar + Masthead + Footer
- [x]  UI prototipada no Stitch (8 telas + `DESIGN.md`)
- [x]  Decisão de consumo do Strapi via módulo único `lib/strapi`

### Fase 0 — Ajustes de fundação

- [x]  Substituir o README boilerplate por documentação real do projeto
- [x]  Definir nome final do jornal (News Magazine) e a linha editorial
- [x]  Corrigir o token `background.footer` no tema (o valor está sem o `#`)
- [x]  Alinhar a tipografia ao `DESIGN.md` (ele cita Cormorant Garamond; o código usa EB Garamond)
- [x]  Definir variantes tipográficas do tema (h1–h4, body, label-caps)
- [ ]  Configurar variáveis de ambiente (`.env.local` e `.env.example`)

### Fase 1 — CMS (Strapi)

- [ ]  Rodar o Strapi localmente (Ubuntu) com Postgres ou MySQL
- [ ]  Criar os content types: Article, Category, Author e Page
- [ ]  Habilitar draft/publish e configurar SEO básico
- [ ]  Configurar permissões públicas somente-leitura e token de API
- [ ]  Cadastrar conteúdo de exemplo (seed) usando os textos das telas do Stitch
- [ ]  Criar contas/papéis para autores colaboradores

### Fase 2 — Integração Next.js ↔ Strapi

- [ ]  Criar `lib/strapi` com cliente HTTP e tipos
- [ ]  Implementar `getArticles` e `getArticleBySlug` (e leitura por caderno)
- [ ]  Configurar `images.remotePatterns` para as mídias do Strapi
- [ ]  Definir estratégia de cache e revalidação (webhook de publicação do Strapi)
- [ ]  Tratar erros e estados vazios da API

### Fase 3 — Páginas do MVP

- [ ]  Tela inicial (destaques, cadernos, dossiês)
- [ ]  Página de artigo (`/artigos/[slug]`) com autor, tabelas e relacionados
- [ ]  Listagem por caderno (`/cadernos/[slug]`)
- [ ]  Página Sobre / Contato
- [ ]  `not-found.tsx` (404)
- [ ]  `error.tsx` (500 / instabilidade)
- [ ]  Responsividade (mobile, tablet, desktop)
- [ ]  Metadata dinâmica, `sitemap.xml` e `robots.txt`

### Fase 4 — Extras (avaliar se entram no MVP)

- [ ]  Componentes de gráfico conforme a paleta de 10 séries
- [ ]  Caça-palavras: modelagem dos desafios e conteúdo gerenciado no Strapi
- [ ]  Caça-palavras: página e lógica do jogo no Next.js
- [ ]  Busca de artigos

### Fase 5 — Qualidade e publicação

- [ ]  Lint e build sem erros (`biome check` e `next build`)
- [ ]  Testes manuais das rotas principais
- [ ]  Acessibilidade e performance (Lighthouse)
- [ ]  Escolher hospedagem (front e Strapi) com foco em custo mínimo
- [ ]  Banco de produção (Postgres/MySQL) e backup
- [ ]  Configurar domínio, HTTPS e variáveis de produção
- [ ]  Publicar o MVP

### Feito por:
Lucas Scheere, <br>
Desenvolvedor Full Stack, <br>
[[Linkedin](https://www.linkedin.com/in/lucas-scheere/)]