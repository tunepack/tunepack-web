# Tunepack - Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/0c2e2cad-e121-4dbf-b34d-4b8d779614a5/deploy-status)](https://app.netlify.com/sites/tunepack/deploys)

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
