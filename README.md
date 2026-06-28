# Luz da Senzala

Plataforma web do **Projeto Luz da Senzala** — ONG do subúrbio carioca que promove ancestralidade, segurança alimentar e reparação social através da **Cozinha Ancestral Velha Cambinda**.

## Site em produção

- **Website:** https://luz-da-senzala.vercel.app
- **API:** https://luz-da-senzala-api.onrender.com
- **Swagger:** https://luz-da-senzala-api.onrender.com/api/docs
- **Banco:** Neon PostgreSQL (serverless)

## Projetos / Ações da ONG

| Projeto | Descrição | Status |
|---|---|---|
| **Cozinha Ancestral Velha Cambinda** | Segurança alimentar com comida ancestral. 300+ refeições/mês em Madureira e Méier | Ativo |
| **Filhas da Terra** | Nova ação do projeto — página em construção | Em breve |

## Estrutura do monorepo

```
luz-da-senzala/
├── apps/
│   ├── website/          Site institucional público (React + Vite)
│   │   ├── src/
│   │   │   ├── components/layout/   Header, Footer, Layout
│   │   │   ├── pages/              Home, Sobre, CozinhaVelhaCambinda,
│   │   │   │                       FilhasDaTerra, Galeria, Doações, Contato
│   │   │   └── routes/            Configuração de rotas
│   │   └── public/assets/         QR Code PIX, fotos da galeria
│   └── admin/             Painel administrativo (ainda não iniciado)
├── backend/               API REST (NestJS + Prisma + PostgreSQL)
│   ├── src/
│   ├── prisma/schema.prisma  Modelos: User, Family, FamilyMember, Volunteer,
│   │                          Event, Photo (com thumbnailUrl), News
│   └── .env               Variáveis de ambiente (não versionado)
├── packages/
│   └── shared/            Tipos compartilhados (PaginatedResponse, etc.)
├── docker-compose.yml     PostgreSQL 16 + pgAdmin para desenvolvimento local
├── turbo.json             Orquestração de build paralelo
├── pnpm-workspace.yaml    Workspaces: apps/*, backend, packages/*
└── render.yaml            Config de deploy do backend no Render
```

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend | React 19, Vite 6, TypeScript, TailwindCSS 3, React Router 7 |
| HTTP | Axios, TanStack Query 5 |
| Backend | NestJS 11, Prisma ORM 6, PostgreSQL |
| Auth | JWT, Passport, Argon2 |
| API Docs | Swagger (@nestjs/swagger) |
| Segurança | Helmet, CORS, Rate Limit, Validação com class-validator |
| Infra | Docker Compose, TurboRepo, pnpm workspaces |

## Design System

Cores definidas no `tailwind.config.cjs` e disponíveis como classes Tailwind:

| Cor | Hex | Uso |
|---|---|---|
| `primary` | `#8B4513` | Marrom principal |
| `secondary` | `#DAA520` | Dourado de destaque |
| `background` | `#F5F5F5` | Fundo da página |
| `card` | `#FEF5E7` | Cards e seções destacadas |
| `text-primary` | `#333333` | Texto principal |
| `text-secondary` | `#666666` | Texto secundário |

## Desenvolvimento local

```bash
# Instalar dependências
pnpm install

# Subir banco local (opcional — Neon já está configurado)
docker compose up -d

# Rodar tudo em dev
pnpm dev
```

### Serviços locais

| Serviço | URL |
|---|---|
| Website | http://localhost:5173 |
| Admin | http://localhost:5174 |
| API | http://localhost:3333/api |
| Swagger | http://localhost:3333/api/docs |
| pgAdmin | http://localhost:5433 |

## Deploy

| Serviço | Plataforma | Tipo |
|---|---|---|
| Website | Vercel | Static + CDN (grátis) |
| API | Render | Web Service Node (grátis, dorme após 15min) |
| Banco | Neon | PostgreSQL serverless (grátis) |

O deploy é automático via GitHub — todo `git push` na `master` publica.

## Banco de dados

```prisma
Modelos: User, Family, FamilyMember, Volunteer, Event, Photo, News
```

Fotos nunca são armazenadas no banco — apenas metadados (url, thumbnailUrl). Em produção usa-se o sistema de arquivos local (ou futuramente S3/MinIO).

## Observações importantes

- **Rotas SPAs:** Sempre usar `<Link to="">` do React Router, nunca `<a href="">`, para evitar 404 no Vercel.
- **Fotos:** As imagens da galeria estão em `apps/website/public/assets/gallery/`. HEIC é convertido automaticamente para JPEG.
- **Instagram embed:** Usa o script oficial do Instagram (`embed.js`). O componente `InstagramEmbed` aceita URL de post ou reel.
- **QR Code PIX:** Estático em `apps/website/public/assets/qrcode-doacao.jpeg`.
- **Chave PIX:** `projetoluzdasenzala@gmail.com`
- **Link vaquinha:** https://vaquinhadorazoes.com/vaquinha/1406266321
