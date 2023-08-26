# Feedrender

[![version][version-src]][version-href]
[![h3][h3-version-src]][h3-version-href]
[![node][node-version-src]][node-version-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![tests][tests-src]][tests-href]

API to render HTML from RSS feed. Built for podcast feeds, powered by [unjs/h3][h3-version-href].

> [!NOTE]\
> Demo is available at: [feedrender.git-projects.xyz](https://feedrender.git-projects.xyz/)

## About

Some podcast services offer a RSS feed with HTML render if RSS feed is requested from a browser. These services (Acast, Ausha) are not open source and not free. This project is an attempt to create an open source alternative.

## Features

- 🌻 Render RSS feed as HTML on `/api/render` endpoint
  - 🔧 Option to return XML feed
  - 🗂️ Option to return JSON response with HTML as string
  - ✅ If crawler is not a browser, return original XML feed
- 🗄️ Return a JSON response with RSS feed parsed as objects on `/api/parser` endpoint

### Roadmap

- [x] Render RSS feed
- [ ] Add option for apple podcast banner
- [ ] Add color customization
- [ ] Add feeds options for subscribe button
- [ ] Add registering and token
- [ ] Add cache
- [ ] Better error handling
- [ ] Add tests
- [ ] Better locale support
- [ ] Add CORS support

## Usage

Feedrender API offers some endpoints to execute different tasks.

### Render feed

To render RSS feed, you can use the `/render` endpoint.

```bash
/api/render
```

Default behavior is to return HTML as page. You can use query parameters to change the response.

Query parameters

| Name     | Required | Type                  | Default     | Description                                                                                                                                   |
| -------- | -------- | --------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`    | true     | `string`              | `undefined` | URL of RSS feed, allow base64 URL                                                                                                             |
| `format` | false    | `html`, `json`, `xml` | `html`      | Type of response, default `html` will render HTML page, `json` will give JSON response with HTML string and `xml` will give original RSS feed |

> [!WARNING]\
> If crawler is not a browser, response will be original XML feed.

Example: <https://feedrender.git-projects.xyz/api/render?url=https://2hdp.fr/2HDP.xml>

### Parser

To parse RSS feed, you can use the `/parser` endpoint.

```bash
/api/parser
```

Return a JSON response with `Podcast` object represent RSS feed.

Query parameters

| Name  | Required | Type     | Default     | Description                       |
| ----- | -------- | -------- | ----------- | --------------------------------- |
| `url` | true     | `string` | `undefined` | URL of RSS feed, allow base64 URL |

Example: <https://feedrender.git-projects.xyz/api/parser?url=https://2hdp.fr/2HDP.xml>

## Installation

### Docker

You can use `docker compose` or `docker` to run the application.

#### Docker compose

Create `.env` file

```bash
cp .env.example .env
```

Docker compose will use the `.env` file to set environment variables.

```bash
docker compose up -d
```

#### Docker image

Build and run the docker image

```bash
docker build -t feedrender-app:latest .
docker run -it -p 3000:3000 feedrender-app:latest
```

### Local

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

### Build

Build application

```bash
pnpm build
```

Local preview

```bash
pnpm start:tsx
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

[version-src]: https://img.shields.io/badge/dynamic/json?label=version&query=version&url=https://raw.githubusercontent.com/kiwilan/feedrender/main/package.json&colorA=18181B&colorB=F0DB4F
[version-href]: https://github.com/kiwilan/feedrender/releases

[h3-version-src]: https://img.shields.io/badge/dynamic/json?label=h3&query=dependencies['h3']&url=https://raw.githubusercontent.com/kiwilan/feedrender/main/package.json&colorA=18181B&colorB=F0DB4F
[h3-version-href]: https://github.com/unjs/h3
[codecov-src]: https://img.shields.io/codecov/c/gh/kiwilan/feedrender/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/kiwilan/feedrender
[license-src]: https://img.shields.io/github/license/kiwilan/feedrender.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/kiwilan/feedrender/blob/main/LICENSE
[node-version-src]: https://img.shields.io/static/v1?label=Node.js&message=v16&style=flat&colorA=18181B&colorB=F0DB4F
[node-version-href]: https://nodejs.org/en/
[tests-src]: https://img.shields.io/github/actions/workflow/status/kiwilan/feedrender/run-tests.yml?branch=main&label=tests&style=flat&colorA=18181B
[tests-href]: https://github.com/kiwilan/feedrender/actions/workflows/run-tests.yml
