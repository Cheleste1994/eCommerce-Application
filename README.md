# **eCommerce-Application🛍️🌐**

Welcome to our eCommerce application! This platform replicates real-world shopping experiences in a digital environment 🏪. It's a comprehensive online shopping portal that provides an interactive and seamless experience to users. From product discovery to checkout, the application ensures a smooth journey for the user, enhancing their engagement and boosting their purchasing confidence 🚀.

Users can browse through a vast range of products 📚👗👟, view detailed descriptions, add their favorite items to the basket 🛒, and proceed to checkout 💳. It includes features such as user registration and login 📝🔐, product search 🔍, product categorization, and sorting to make the shopping experience more streamlined and convenient.

An important aspect of our application is that it's responsive 📲, ensuring it looks great on various devices with a minimum resolution of 390px. This feature makes the shopping experience enjoyable, irrespective of the device users prefer.

Key pages in the application include:

  * Login and Registration pages 🖥️
  * Main page 🏠
  * Catalog Product page 📋
  * Detailed Product page 🔎
  * User Profile page 👤
  * Basket page 🛒
  * About Us page 🙋‍♂️🙋‍♀️

The application is powered by CommerceTools 🌐, a leading provider of commerce solutions for B2C and B2B enterprises. CommerceTools offers a cloud-native, microservices-based commerce platform that enables brands to create unique and engaging digital commerce experiences.


## Installation

```bash

yarn # If you don't have yarn installed, run: npm install -g yarn
yarn prepare

```

## Features

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) - more strict
- [React Router](https://reactrouter.com/) - with lazy-loading / code-splitting use case
- [Redux Toolkit](https://redux-toolkit.js.org/) - with async and sync use case
- [Ant Design](https://ant.design/)
- [Jest](https://jestjs.io/) with [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://tailwindcss.com/) - with [airbnb](https://github.com/airbnb/javascript) and really [powerful configuration](./.eslintrc)
- [Prettier](https://prettier.io/) - with editor configuration [file](./.vscode/settings.json)
- [SASS/SCSS](https://sass-lang.com/) with [CSS Modules](https://github.com/css-modules/css-modules)
- [dotenv (.env)](https://github.com/motdotla/dotenv)
- [editorconfig](https://editorconfig.org/)
- JS/TS native fetch get/post/put/delete [helpers](./src/common/request.ts)

## Available Scripts

In the project directory, you can run:

##### `yarn dev`

##### `yarn build`

##### `yarn preview`

##### `yarn lint`

##### `yarn lint:fix`

##### `yarn format`

##### `yarn compile`

##### `yarn prepare`

##### `yarn test`

## Development

### Folder Structure

Folder structure should look like this;

```
src/
├── App.test.tsx
├── App.tsx
├── main.tsx
├── setupTests.ts
├── test-utils.ts
├── vite-env.d.ts
├── assets
│   ├── %image%.jpg
│   └── %icon%.svg
├── common
│   ├── request.ts
│   └── %util_name%.ts
├── components
│   ├── partials
│   │   └── %ModuleName%
│   │       ├── %ParticalName%.tsx
│   │       ├── %ParticalName%.test.tsx
│   │       └── %ParticalName%.scss
│   └── shareds
│       └── %ParticalName%
│           ├── %ParticalName%.tsx
│           ├── %ParticalName%.test.tsx
│           └── %ParticalName%.scss
├── routes
│   ├── %ModuleName%
│   │   ├── index.tsx
│   │   ├── index.scss
│   │   ├── %ModuleRouteName%
│   │   │   ├── index.tsx
│   │   │   ├── %ModuleRouteName%.test.tsx
│   │   │   └── %ModuleRouteName%.scss
│   │   └── %ModuleRouteName%
│   │       ├── index.tsx
│   │       ├── %ModuleRouteName%.test.tsx
│   │       └── %ModuleRouteName%.scss
│   └── index.tsx (router)
├── store
│   ├── slices
│   │   ├── %module-name%.slice.ts
│   │   └── %module-name%.slice.ts
│   ├── hooks.ts
│   └── index.ts
└── styles
    ├── global.scss
    └── vendors.scss
```
