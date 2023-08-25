FROM node:18.16.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/app/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

ENV PORT=3000
ENV HOST=0.0.0.0
ENV HTTPS=false

EXPOSE 3000

CMD [ "pnpm", "start" ]
