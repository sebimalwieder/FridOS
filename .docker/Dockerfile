FROM node:24-alpine
EXPOSE 3000
RUN corepack enable
USER node
WORKDIR /app
COPY --chown=node:node . .
RUN pnpm i
RUN pnpm build
CMD ["node", ".output/server/index.mjs"]
