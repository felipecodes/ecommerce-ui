# Ecommerce UI

## What was used on this project?

This project's stack consists of basic Typescript/React/Javascript libraries and the usage of something that is a feature-based approach. Different layers were defined to make every boundry explicit (see src/app folder). So, we have:

Layers:

- `app/modules`: Feature-based approach for composing the application features
  - `app/modules/example/components`: React components for the example feature
  - `app/modules/example/dto`: [DTO pattern](https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/)-based approach for representing the data structures from API and Redux State
  - `app/modules/example/redux`: Redux state management for example feature
    - `app/modules/example/redux/operations`: use cases-based approach for application actions
    - `app/modules/example/redux/example.slice.ts`: example feature reducer, and state selectors
- `app/shared`: generic/shared code (components, styles, enums)
- `app/pages`: page components

Libs:

- [React.js](https://reactjs.org/), and [styled-components](https://styled-components.com/)
- [Redux](https://redux.js.org/), and [Redux Toolkit](https://redux-toolkit.js.org/)
- [jest](https://jestjs.io/), and [@testing-library/react](https://testing-library.com/)

## Getting started

You can view a live demo over at https://sec-beta.vercel.app/

### To get the frontend running locally:

- Clone this repo
- This project has an `.nvmrc` file, so you can use `nvm use` for use correctly node version. See more at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- Run `npm install` to install all req'd dependencies
- Run `npm run start:dev` to start the local server (this project uses my own build config)

Local web server will use port `8080`. You can configure port and other environment variables on `.env` file. See `.env.example` as example.

Making requests to the backend API
For convenience, we have a live API server running at https://sec-mock-api.herokuapp.com/api/products for the application to make requests against.

If you want to change the API URL to a local server, simply edit your `.env` and change API_URL to the local server's URL (i.e. `http://localhost:3000/api`)

### To get the quality tools running locally:

#### TypeScript, ESlint, Prettier

- Run `npm run check-types` to check for typescript errors
- Run `npm run lint` to check for ESLint errors

#### Application Tests

- Run `npm run test` to run/check application tests
- Run `npm run test:watch` to run/check tests, and keep tests running
- Run `npm run test:coverage` to run/check test coverage

## Functionality overview

### General Functionality

- Home page (URL: `/` )
- List of product cards
- Add product pack do the cart

## Contribute

- See tasks and issues on our [Github Project Board](https://github.com/felipecodes/sec/projects/1)
- We have a vscode settings for this project, you can see on `.vscode/settings.json` file.
