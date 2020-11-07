# Nuxt/Bootstrap Boilerplate v1.1.0

🦾 Starter boilerplate to create a web app with Nuxt.js, BootstrapVue & Firebase\
📦 Nuxt.js, BootstrapVue, Firebase\
⌚ Last update: 11/6/2020

![logo](https://repository-images.githubusercontent.com/310706137/5a681d80-2074-11eb-95c8-f36fe44290ec)

## Introduction

You will find in this boilerplate everything you need to start a Nuxt, Boostrap & Firebase project from bottom.

## Getting Started

#### Create your project on Firebase

[Start here](https://firebase.google.com/).

#### Clone

Clone:

```
cd nuxt-firebase-boilerplate
```

#### Copy your Firebase config object in nuxt.config.js

1. Open your Firebase project.
2. Click on Project Settings.
3. Copy/paste firebaseConfig object in in nuxt.config.js, under modules, @nuxtjs/firebase, config.

#### Install and run

```
npm i
npm run serve
```

Enjoy !

### About nuxt.config.js

#### bootstrapVue

[BootstrapVue](https://bootstrap-vue.org/) is configured to be build from @/assets/custom.css.

#### mode

By default, this boilerplate is on SPA mode.

#### target

By default, this boilerplate is on server target.

#### plugins

Put in here all your plugins from @/plugins folder.

#### components

By default, on true. Auto-import components.

#### buildModules

By default, import eslint module.

#### modules

By default, import bootstrap-vue/nuxt module.

##### Config

Please put here all your config

#### build

By default, extractCSS true, friendlyErrors on false and run eslint on save.

#### server

By default, app run on port 3000 or process.env.PORT for Heroku deployments.

#### ssr

By default, on false.

## Built With

- [Nuxt](https://cli.vuejs.org/) - The Intuitive Vue Framework
- [BootstrapVue](https://bootstrap-vue.org/) - helps you to build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap v4.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors ✨

- **guillaumeduhan** - _Initial work_ - [Github](https://github.com/guillaumeduhan)

## License

This project is licensed under the MIT License.
