FROM dhi.io/node:24-alpine3.23-dev AS builder
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm i
RUN pnpm build

FROM dhi.io/node:24-alpine3.23 AS runner
EXPOSE 3000
USER node
WORKDIR /app
COPY --chown=node:node --from=builder /app/.output /app
CMD ["node", "server/index.mjs"]