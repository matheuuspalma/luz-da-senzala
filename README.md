# Luz da Senzala

Plataforma web do Projeto Luz da Senzala, composta por site institucional e painel administrativo para gestão da ONG.

## Estrutura

```
├── apps/
│   ├── website/          Site institucional (público)
│   └── admin/            Painel administrativo (privado)
├── backend/              API REST (NestJS + Prisma)
├── packages/
│   └── shared/           Tipos e utilitários compartilhados
├── docker-compose.yml    PostgreSQL + pgAdmin
└── turbo.json            Orquestração de tarefas
```

## Stack

- **Frontend:** React 19, Vite, TypeScript, TailwindCSS, React Router
- **Backend:** NestJS 11, Prisma ORM, PostgreSQL, JWT, Swagger
- **Infra:** Docker Compose, TurboRepo, pnpm workspaces

## Pré-requisitos

- Node.js >= 22
- pnpm >= 9
- Docker (opcional, para banco de dados)

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Subir banco de dados
docker compose up -d

# Criar tabelas
cd backend && npx prisma db push

# Iniciar desenvolvimento (backend + website + admin)
pnpm dev
```

### Serviços

| Serviço      | URL                         |
|--------------|-----------------------------|
| Website      | http://localhost:5173       |
| Admin        | http://localhost:5174       |
| API          | http://localhost:3333/api   |
| Swagger docs | http://localhost:3333/api/docs |
| pgAdmin      | http://localhost:5433       |

## Scripts

| Comando              | Descrição                          |
|----------------------|------------------------------------|
| `pnpm dev`           | Inicia todos os serviços em dev    |
| `pnpm build`         | Build de produção                  |
| `pnpm lint`          | Lint em todos os pacotes           |
| `pnpm format`        | Formatação com Prettier            |
| `pnpm turbo <task>`  | Executa task específica no monorepo|

## Licença

Projeto sem fins lucrativos — uso exclusivo do Projeto Luz da Senzala.
