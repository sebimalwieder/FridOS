FROM node:22-alpine
EXPOSE 3000

RUN corepack enable
WORKDIR /app
COPY --chown=node . /app

RUN pnpm i --frozen-lockfile
RUN pnpm build
CMD node .output/server/index.mjs
