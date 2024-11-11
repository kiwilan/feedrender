FROM node:20.15.0-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY . /app/
RUN rm -rf node_modules
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -
RUN /root/.local/share/pnpm/pnpm install
RUN /root/.local/share/pnpm/pnpm build

ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", "./dist/node.js"]
