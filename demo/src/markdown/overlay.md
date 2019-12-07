QThemeMixin
===

QThemeMixin is a Vue Mix-in library for components created with Quasar Framework. It is only for components that use a `render` function. It does not work with template formats found with SFC (single file components). This mixin works best in conjunction with the [QColorizeMixin][https://github.com/hawkeye64/q-colorize-mixin] to apply the theme colors.

# Features

Allows you to define themes to be used (check out [QCalendar](https://github.com/quasarframework/app-extension-qcalendar)) in conjunction with [QColorizeMixin](https://github.com/hawkeye64/q-colorize-mixin).

# Install
To add this mix-in to your Quasar application, run the following (in your Quasar app folder):

```bash
yarn add q-theme-mixin

# or

npm install q-theme-mixin
```

# Uninstall
To remove this mix-in from your Quasar application, run the following (in your Quasar app folder):

```bash
yarn remove q-theme-mixin

# or

npm remove q-theme-mixin
```

# Examples
Examples with code can be found [here](https://hawkeye64.github.io/q-theme-mixin/examples).

# Demo Project (source)
Source for this application can be found [here](https://github.com/hawkeye64/q-theme-mixin/tree/master/demo).

# Setup
```bash
$ cd ui

$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev
```

# Building package
```bash
$ yarn build
```

# Building Demo
```bash
# first time prep
$ cd ui
$ yarn link
$ cd ../demo
$ yarn link "q-mixin-mixin"

# for interactive - browser opens automatically
$ quasar dev

# for build - goes to docs folder
$ yarn build-demo
```

# Code Usage

It is important to note that this mixin is intended to be used with Vue **render** functions and not in SFC (single file components). It does not have a render function of its own.

## As a Mixin

```js
import Vue from 'vue'
import { QThemeMixin } from 'q-theme-mixin'

export default Vue.extend({
  name: 'my-component',

  mixins: [QThemeMixin], // <- notice use as a Vue mixin
...
```
