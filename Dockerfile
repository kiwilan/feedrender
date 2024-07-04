FROM node:20.15.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/app/
RUN npm install pm2 -g
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["pm2-runtime", "start", "./dist/node.js"]
