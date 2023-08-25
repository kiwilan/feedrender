# Feed renderer

[![version][version-src]][version-href]
[![h3][h3-version-src]][h3-version-href]
[![node][node-version-src]][node-version-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![tests][tests-src]][tests-href]

API to render HTML from RSS feed. Built for Podcasts, powered by [h3][h3-version-href].

## Setup

Download dependencies

```bash
pnpm i
```

Create `.env` file

```bash
cp .env.example .env
```

## Development

Run dev server

```bash
pnpm dev
```

Go to [localhost:3000](http://localhost:3000)

## Build

Build application

```bash
pnpm build
```

Local preview

```bash
pnpm start
```

You can use PM2 to run application in production.

## License

[BSD 2-Clause](LICENSE)

[version-src]: https://img.shields.io/badge/dynamic/json?label=version&query=version&url=https://raw.githubusercontent.com/kiwilan/feed-renderer/main/package.json&colorA=18181B&colorB=F0DB4F
[version-href]: https://github.com/kiwilan/feed-renderer/releases

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
