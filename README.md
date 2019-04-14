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

Useful commands:

Command list (Having package globally installed)
```bash
typeorm -h
```

Generate migration in project
```bash
./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -n initial
```
