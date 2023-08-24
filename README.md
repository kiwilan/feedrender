# Feed renderer

[![node][node-version-src]][node-version-href]
[![version][version-src]][version-href]
[![downloads][downloads-src]][downloads-href]
[![license][license-src]][license-href]

[![tests][tests-src]][tests-href]
[![codecov][codecov-src]][codecov-href]

[![fastify](https://img.shields.io/static/v1?label=Fastify&message=v4.x&color=000000&style=flat-square&logo=fastify&logoColor=ffffff)](https://www.fastify.io)
[![typescript](https://img.shields.io/static/v1?label=TypeScript&message=v4.9&color=3178C6&style=flat-square&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org)
[![node.js](https://img.shields.io/static/v1?label=Node.js&message=v18.x&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en)
[![pnpm](https://img.shields.io/static/v1?label=pnpm&message=v7.x&color=F69220&style=flat-square&logo=pnpm&logoColor=ffffff)](https://pnpm.io)

A template for [fastify](https://www.fastify.io/) with Typescript, eslint, pnpm and `@kiwilan/fastify-utils`.

## Setup

```bash
pnpm i
```

```bash
cp .env.example .env
```

```bash
pnpm dev
```

## Build

In `.env`:

```bash
LOG_LEVEL=error      # debug | error | fatal  | info | trace | warn | silent

PORT=3000 # pm2 port
BASE_URL=domain.com
HTTPS=true
```

```bash
pnpm build
```

### Nginx

```bash
server {
  listen 80;
  listen [::]:80;
  server_name api.domain.com;

  charset utf-8;

  error_log /var/log/nginx/api.log warn;
  access_log /var/log/nginx/api.log;

  location / {
    include proxy_params;
    proxy_pass http://localhost:3000; # pm2 port
  }
}
```

## License

[MIT](LICENSE)

[version-src]: https://img.shields.io/npm/v/@kiwilan/filesystem.svg?style=flat-square&colorA=18181B&colorB=339933
[version-href]: https://www.npmjs.com/package/@kiwilan/filesystem
[node-version-src]: https://img.shields.io/static/v1?style=flat-square&label=Node.js&message=v16&color=339933&logo=node&logoColor=ffffff&labelColor=18181b
[node-version-href]: https://www.php.net/
[downloads-src]: https://img.shields.io/npm/dt/@kiwilan/filesystem.svg?style=flat-square&colorA=18181B&colorB=339933
[downloads-href]: https://www.npmjs.com/package/@kiwilan/filesystem
[license-src]: https://img.shields.io/github/license/kiwilan/node-filesystem.svg?style=flat-square&colorA=18181B&colorB=339933
[license-href]: https://github.com/kiwilan/node-filesystem/blob/main/README.md
[tests-src]: https://img.shields.io/github/actions/workflow/status/kiwilan/node-filesystem/run-tests.yml?branch=main&label=tests&style=flat-square&colorA=18181B
[tests-href]: https://github.com/kiwilan/node-filesystem/actions/workflows/run-tests.yml
[codecov-src]: https://codecov.io/gh/kiwilan/node-filesystem/branch/main/graph/badge.svg?token=SHQV8D60YV
[codecov-href]: https://codecov.io/gh/kiwilan/node-filesystem
