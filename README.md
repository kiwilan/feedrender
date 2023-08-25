# Feed renderer

[![version][version-src]][version-href]
[![h3][h3-version-src]][h3-version-href]
[![node][node-version-src]][node-version-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![tests][tests-src]][tests-href]

API to render HTML from RSS feed. Built for podcast feeds, powered by [unjs/h3][h3-version-href].

## About

Some podcast services offer a RSS feed with HTML render if RSS feed is requested from a browser. These services (Acast, Ausha) are not open source and not free. This project is an attempt to create an open source alternative.

## Docker

```bash
cp .env.example .env
```

You can use `docker-compose` or `docker` to run the application.

### Docker compose

Docker compose will use the `.env` file to set environment variables.

```bash
docker-compose up -d
```

### Docker image

Build and run the docker image

```bash
docker build -t feed-renderer .
docker run -it -p 3000:3000 feed-renderer
```

## Local

Download dependencies

```bash
pnpm i
```

Create `.env` file

```bash
cp .env.example .env
```

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

## Tests

Run tests

```bash
pnpm test
```

## Credits

- [`unjs`](https://github.com/unjs): for `unjs/h3`, `unjs/ofetch` and `unjs/listhen`
- [`fast-xml-parser`](https://github.com/NaturalIntelligence/fast-xml-parser): for XML parsing
- [`vue`](https://github.com/vuejs/core): for render functions used to render HTML

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
