# React Frontend Template

> Powered by [@bondi-js](https://github.com/react-federation/bondi) 🚌

Welcome! This is a template for frontends and microfrontends with React and Typescript!

## Pre-requisites

- [Node > 12](https://nodejs.org/en/)
- [NVM](https://github.com/nvm-sh/nvm) (just in case that you need to change the version of node). [See this for Windows](https://github.com/coreybutler/nvm-windows)
- [Yarn](https://yarnpkg.com/) [(Take a look to the commands)](https://classic.yarnpkg.com/en/docs/migrating-from-npm/)

> Be careful of not to use npm!

## Features

- Quality gate hooks with Husky 🐶
- Typescript support out of the box
- Webpack Bundle Analyzer (with the env variable `ANALYZE=true`)
- CSS, SCSS and CSS-in-JS support.
- Testing with @testing-library/react and jest
- Coverage gate on push
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Dynamic module loading via [@bondi-js/utils](https://github.com/react-federation/bondi/packages/utils)

## Installation

Inside the directory of the project, just type

```bash
  yarn
```

## Run Locally

Start the local dev server

```bash
  yarn dev
```

## Running Tests

To run tests once, run the following command

```bash
  yarn test
```

To run tests everytime that a file is modified, run the following command

```bash
  yarn test:watch
```

## Developing

### How do i create a new page?

The current method of creating a new page is by making a new react component inside `/pages` and then, mapping that file to the list inside `router/routes.ts`

### How do i test?

We recommend making unit testing to each component, the template includes a helper that wraps the testing library (see: [`utils/test/setup.tsx`](./utils/test/setup.tsx) for the source and [`components/crypto/table-helpers.spec.tsx`](./components/crypto/table-helpers.spec.tsx) for an example).

### Can i make API Mocks for my test and for development?

Yes you can! Check the directory [`./mocks`](./mocks) and the [`MSW documentation`](https://mswjs.io/)

## Roadmap

- Add module federation examples with microfrontends
- Who knows

## Authors

- Leonel Vieyra (lvieyra@prismamp.com)
- Pablo Sanchez (pasanchez@prismamp.com)

Tuvimos un problema al levantar debido a la configuracion de Module Federation, especificamente al output, se debe cambiar a:

```
output: {
  publicPath: 'auto',
  path: path.resolve(\_\_dirname, 'build'),
},
```
TESTR