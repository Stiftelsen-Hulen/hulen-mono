# hulen-mono
> Monorepo for hulen.no
- Now using turborepo and pnpm

### Getting started
- cd project root
- `pnpm install`
- cd apps/web & make `.env`
- cd apps/cms & make `.env`
- cd project root
- `turbo dev` or `pnpm dev` to run both web and cms
- `pnpm --filter ./apps/cms dev` only cms
- `pnpm --filter ./apps/web dev`only web
