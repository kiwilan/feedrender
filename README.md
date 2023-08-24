# Feed renderer

[![h3][h3-version-src]][h3-version-href]
[![node][node-version-src]][node-version-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![tests][tests-src]][tests-href]

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]

[![JSDocs][jsdocs-src]][jsdocs-href]

[h3-version-src]: https://img.shields.io/badge/dynamic/json?label=h3&query=dependencies['h3']&url=https://raw.githubusercontent.com/kiwilan/feed-renderer/main/package.json&colorA=18181B&colorB=F0DB4F
[h3-version-href]: https://github.com/unjs/h3
[codecov-src]: https://img.shields.io/codecov/c/gh/kiwilan/feed-renderer/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/kiwilan/feed-renderer
[license-src]: https://img.shields.io/github/license/kiwilan/feed-renderer.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/kiwilan/feed-renderer/blob/main/LICENSE
[node-version-src]: https://img.shields.io/static/v1?style=flat-square&label=Node.js&message=v16&colorA=18181B&colorB=F0DB4F
[node-version-href]: https://nodejs.org/en/
[tests-src]: https://img.shields.io/github/actions/workflow/status/kiwilan/feed-renderer/run-tests.yml?branch=main&label=tests&style=flat-square&colorA=18181B
[tests-href]: https://github.com/kiwilan/feed-renderer/actions/workflows/run-tests.yml

[npm-version-src]: https://img.shields.io/npm/v/h3?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/h3
[npm-downloads-src]: https://img.shields.io/npm/dm/h3?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/h3
[bundle-src]: https://img.shields.io/bundlephobia/minzip/h3?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=h3
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/h3

[nuxt-version-src]: https://img.shields.io/badge/dynamic/json?label=Nuxt&query=dependencies['nuxt']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&logo=nuxt.js&logoColor=ffffff&labelColor=18181b
[nuxt-version-href]: https://nuxt.com
[tailwind-version-src]: https://img.shields.io/badge/dynamic/json?label=Tailwind%20CSS&query=dependencies['tailwindcss']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&labelColor=18181b
[tailwind-version-href]: https://tailwindcss.com/
[content-version-src]: https://img.shields.io/badge/dynamic/json?label=@nuxt/content&query=dependencies['@nuxt/content']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&labelColor=18181b
[content-version-href]: https://content.nuxtjs.org/
[i18n-version-src]: https://img.shields.io/badge/dynamic/json?label=@nuxtjs/i18n&query=dependencies['@nuxtjs/i18n']&url=https://raw.githubusercontent.com/ewilan-riviere/portfolio/main/package.json&message=v3&color=28cf8d&labelColor=18181b
[i18n-version-href]: https://v8.i18n.nuxtjs.org/
[tests-src]: https://img.shields.io/github/actions/workflow/status/ewilan-riviere/portfolio/ci.yml?branch=main&label=tests&style=flat-square&colorA=18181B
[tests-href]: https://github.com/ewilan-riviere/portfolio/actions/workflows/ci.yml
[license-src]: https://img.shields.io/github/license/ewilan-riviere/portfolio.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/ewilan-riviere/portfolio/blob/main/LICENSE

<!-- [![node][node-version-src]][node-version-href]
[![version][version-src]][version-href]
[![downloads][downloads-src]][downloads-href]
[![license][license-src]][license-href]

[![tests][tests-src]][tests-href]
[![codecov][codecov-src]][codecov-href]

[![fastify](https://img.shields.io/static/v1?label=Fastify&message=v4.x&color=000000&style=flat-square&logo=fastify&logoColor=ffffff)](https://www.fastify.io)
[![typescript](https://img.shields.io/static/v1?label=TypeScript&message=v4.9&color=3178C6&style=flat-square&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org)
[![node.js](https://img.shields.io/static/v1?label=Node.js&message=v18.x&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en)
[![pnpm](https://img.shields.io/static/v1?label=pnpm&message=v7.x&color=F69220&style=flat-square&logo=pnpm&logoColor=ffffff)](https://pnpm.io) -->

Node.js application to render HTML from RSS feed.

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
