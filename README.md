# Feed renderer

[![h3][h3-version-src]][h3-version-href]
[![node][node-version-src]][node-version-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![tests][tests-src]][tests-href]

Node.js application to render HTML from RSS feed. Built for Podcasts, powered by [h3][h3-version-href].

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

[BSD 2-Clause](LICENSE)

[h3-version-src]: https://img.shields.io/badge/dynamic/json?label=h3&query=dependencies['h3']&url=https://raw.githubusercontent.com/kiwilan/feed-renderer/main/package.json&colorA=18181B&colorB=F0DB4F
[h3-version-href]: https://github.com/unjs/h3
[codecov-src]: https://img.shields.io/codecov/c/gh/kiwilan/feed-renderer/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/kiwilan/feed-renderer
[license-src]: https://img.shields.io/github/license/kiwilan/feed-renderer.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/kiwilan/feed-renderer/blob/main/LICENSE
[node-version-src]: https://img.shields.io/static/v1?label=Node.js&message=v16&style=flat&colorA=18181B&colorB=F0DB4F
[node-version-href]: https://nodejs.org/en/
[tests-src]: https://img.shields.io/github/actions/workflow/status/kiwilan/feed-renderer/run-tests.yml?branch=main&label=tests&style=flat&colorA=18181B
[tests-href]: https://github.com/kiwilan/feed-renderer/actions/workflows/run-tests.yml
