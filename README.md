# UI Sempre em Casa

## Getting started

You can view a live demo over at https://sec-15emmn9hy.vercel.app/

### To get the frontend running locally:

- Clone this repo
- Run `npm install` to install all req'd dependencies
- Run `npm run start:dev` to start the local server (this project uses my own build config)

Local web server will use port `8080`. You can configure port and other environment variables on `.env` file. See `.env.example` as example.

Making requests to the backend API
For convenience, we have a live API server running at https://sec-mock-api.herokuapp.com/api/products for the application to make requests against.

If you want to change the API URL to a local server, simply edit your `.env` and change API_URL to the local server's URL (i.e. `http://localhost:3000/api`)

## To get the quality tools running locally:

### TypeScript, ESlint, Prettier

- Run `npm run check-types` to check for typescript errors
- Run `npm run lint` to check for ESLint errors

### Application Tests

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
