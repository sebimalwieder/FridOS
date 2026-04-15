FROM node:24-alpine AS builder
RUN corepack enable
USER node
WORKDIR /app
COPY --chown=node:node . .
RUN pnpm i
RUN pnpm build

FROM node:24-alpine AS runner
EXPOSE 3000
USER node
WORKDIR /app
COPY --chown=node:node --from=builder /app/.output /app
CMD ["node", "server/index.mjs"]