# Getting started with Testcontainers for NodeJS

This is sample code for [Getting started with Testcontainers for NodeJS](https://testcontainers.com/guides/getting-started-with-testcontainers-for-nodejs) Guide.

## 1. Setup Environment
Make sure you have NodeJS and a [compatible container runtime](https://node.testcontainers.org/supported-container-runtimes/) installed.
For example:

```shell
$ node -v
v18.15.0

$ docker version
...
Server: Docker Desktop 4.12.0 (85629)
 Engine:
  Version:          20.10.17
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.11
...
```

## 2. Setup Project

* Clone the repository

```shell
git clone https://github.com/testcontainers/tc-guide-getting-started-with-testcontainers-for-nodejs.git
cd tc-guide-getting-started-with-testcontainers-for-nodejs/src
npm install
```

* Open the **tc-guide-getting-started-with-testcontainers-for-nodejs** project in your favorite IDE.

## 3. Run Tests

```shell
$ npm test
```

The tests should pass.
