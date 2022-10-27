# EnvCoder

Package, that allows you to encrypt, decrypt, convert your `.json` to `.env` file

## Features

- Encrypt `.json` with unique generated key
- Decrypt your data back to the original `.json` file 
- Convert `.json` file with variables to `.env`
- Parse data `.json` file from URL to `.env`

## Installation

```bash
$ npm install envcoder
```
or if you use `yarn`:
```bash
$ yarn add envcoder
```

## Commands

### encrypt

Encrypt your local `.json` file:
```bash
$ envcoder encrypt example.json
```

### decrypt

Decrypt your local `.json` file:
```bash
$ envcoder decrypt example-pub.json example.key
```

### env
Decrypt your local `.json` file:
```bash
$ envcoder env -f example-pub.json -s example.key
```

Decrypt your remote `.json` file by URL:
```bash
$ envcoder env -u https://example.com/file/example-pub.json -s example.key
```

Also, you can add variable `ENV_SECRET_KEY` in your `env`, then package will prioritize it

### json
Convert and build your local `.json` file to `.env`:
```bash
$ envcoder json -f example-pub.json
```

Convert and build your remote `.json` file to `.env`:
```bash
$ envcoder json -u https://example.com/file/example-pub.json
```

## Quick Start

First, you need `.json` file with your variables in the root of your project.

Example file: [example.json](./example.json)

```json
{
  "node": {
    "env": "development"
  },
  "mongo": {
    "host1": "127.0.0.1",
    "port1": "8000",
    "replica": false,
    "user": "user",
    "password": "password",
    "database": "example_db",
    "root": {
      "user": "root",
      "password": "root"
    }
  }
}
```

Now, you can __encrypt__ your data using following command:
```bash
$ envcoder encrypt example.json
```

You will get 2 files: `example-pub.json` which contains your encrypted data and `example.key`, which contains generated key to decrypt your data

To __decrypt__, simply run the following command:
```bash
$ envcoder decrypt example-pub.json example.key
```

You can decrypt your data and convert it to `.env` with following command:
```bash
$ envcoder env -f example-pub.json -s example.key
```

This will build you `.env` file, that looks like this:
```dotenv
NODE_ENV=development
MONGO_HOST1=127.0.0.1
MONGO_PORT1=8000
MONGO_USER=user
MONGO_PASSWORD=password
MONGO_DATABASE=example_db
MONGO_ROOT_USER=root
MONGO_ROOT_PASSWORD=root
```
