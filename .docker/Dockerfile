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

HEALTHCHECK --interval=60s --timeout=30s --start-period=30s --retries=3 \
    CMD ["node", "-e", "require('http').get('http://localhost:3000/api/health', res => process.exit(res.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"]

CMD ["node", "server/index.mjs"]