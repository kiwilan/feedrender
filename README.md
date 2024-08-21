# Feedrender

![Banner with microphone picture in background and Feedrender title](https://raw.githubusercontent.com/kiwilan/feedrender/main/docs/banner.jpg)

[![version][version-src]][version-href]
[![h3][h3-version-src]][h3-version-href]
[![node][node-version-src]][node-version-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![tests][tests-src]][tests-href]

API to render HTML from RSS feed. Built for podcast feeds, powered by [unjs/h3][h3-version-href].

> [!NOTE]\
> Demo is available at: [feedrender.kiwilan.app](https://feedrender.kiwilan.app/)

## About

Some podcast services offer a RSS feed with HTML render if RSS feed is requested from a browser. These services (Acast, Ausha) are not open source and not free. This project is an attempt to create an open source alternative.

## Features

- 🌻 Render RSS feed as HTML on `/api/render` endpoint
  - 🔧 Option to return XML feed
  - 🗂️ Option to return JSON response with HTML as string
  - ✅ If crawler is not a browser, return original XML feed
- 🗄️ Return a JSON response with RSS feed parsed as objects on `/api/json` endpoint
- 🗒️ Return a XML response with RSS feed on `/api/xml` endpoint

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

## Docker

You can use `docker compose` to run the application.

Create `.env` file

```bash
cp .env.example .env
```

- `PORT`: internal port of the container (default `3000`)
- `HOST`: host of the application
- `HTTPS`: false (`true` or `false`)
- `ENV`: environment (`development`, `production`, `test`)
- `APP_PORT`: external port of the container (default `3000`)

Docker compose will use the `.env` file to set environment variables.

```bash
docker compose down
docker compose up --build -d
```

## Usage

Feedrender API offers some endpoints to execute different tasks.

### Render

To render RSS feed, you can use the `/render` endpoint.

```bash
/api/render
```

Default behavior is to return HTML as page. You can use query parameters to change the response.

Query parameters

| Name     | Required | Type           | Default     | Description                                                                                             |
| -------- | -------- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `url`    | true     | `string`       | `undefined` | URL of RSS feed, allow base64 URL                                                                       |
| `format` | false    | `html`, `json` | `html`      | Type of response, default `html` will render HTML page, `json` will give JSON response with HTML string |

> [!WARNING]\
> If crawler is not a browser, response will be original XML feed.

Example: <https://feedrender.git-projects.xyz/api/render?url=https://2hdp.fr/2HDP.xml>

### JSON

To parse RSS feed, you can use the `/json` endpoint.

```bash
/api/json
```

Return a JSON response with `Podcast` object represent RSS feed.

Query parameters

| Name  | Required | Type     | Default     | Description                       |
| ----- | -------- | -------- | ----------- | --------------------------------- |
| `url` | true     | `string` | `undefined` | URL of RSS feed, allow base64 URL |

Example: <https://feedrender.git-projects.xyz/api/json?url=https://2hdp.fr/2HDP.xml>

### XML

To parse show XML from RSS feed, you can use the `/xml` endpoint.

> [!NOTE]\
> Could be useful for RSS feed with only HTML render.

```bash
/api/xml
```

Return a JSON response with `Podcast` object represent RSS feed.

Query parameters

| Name  | Required | Type     | Default     | Description                       |
| ----- | -------- | -------- | ----------- | --------------------------------- |
| `url` | true     | `string` | `undefined` | URL of RSS feed, allow base64 URL |

Example: <https://feedrender.git-projects.xyz/api/xml?url=https://feedpress.me/rdvjeux>

## Tests

Run tests

```bash
pnpm test
```

## Credits

- [`unjs`](https://github.com/unjs): for `unjs/h3` and `unjs/ofetch`
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
