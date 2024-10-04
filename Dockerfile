FROM node:20.17.0-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY . /app/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

ENV HOST=0.0.0.0

EXPOSE 3000

# CMD ["pm2-runtime", "start", "./dist/node.js"]
CMD ["node", "./dist/node.js"]
