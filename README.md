# Tunepack - Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/ffb3103a-6844-40d0-a46f-46acf5c2e9fd/deploy-status)](https://app.netlify.com/sites/tunepack/deploys)

## Getting started
Install npm dependencies and correctly configure your `.env` file

```shell
npm install
cp .env.example .env
```

## Development
To start development:

```shell
npm run dev
```

## Dist preview

```shell
npm run dist-server
```

With bundle analyzer:

```shell
ANALYZER=true npm run dist-server
```
