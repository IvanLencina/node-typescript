# node-typescript
Basic configuration for a NodeJs + TypeScript project

This project provides a simple scaffold for node applications with typescript. It includes an example controller, DI implementation and router.

## Installation

```bash
npm install
```

## Running

```bash
npm run dev
```

## Build

```bash
npm run tsc
```

## Production deployment

```bash
npm run prod
```

## Persistance
Integrated with TypeORM

Config file: ormconfig.json

Useful scripts:

npm run migrations:generate  -- Generates a new migration file if your schema differs agains database schema
npm run migrations:run -- Runs all pending migrations
