# QOverlay

[![UI package](https://img.shields.io/npm/v/@quasar/quasar-ui-qoverlay?label=@quasar/quasar-ui-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)
[![App Extension](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qoverlay?label=@quasar/quasar-app-extension-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-app-extension-qoverlay)
[![Netlify Status](https://api.netlify.com/api/v1/badges/08330ffc-f956-4de1-8680-f4cda36974c7/deploy-status)](https://app.netlify.com/projects/qoverlay/deploys)

<span class="badge-github-sponsors"><a href="https://github.com/sponsors/hawkeye64" title="Sponsor this project on GitHub"><img src="https://img.shields.io/badge/github-sponsors-ea4aaa.svg?logo=githubsponsors&logoColor=white" alt="GitHub Sponsors button" /></a></span>
<span class="badge-paypal"><a href="https://paypal.me/hawkeye64" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

[![Discord](https://img.shields.io/badge/discord-join%20server-738ADB?style=for-the-badge&logo=discord&logoColor=738ADB)](https://chat.quasar.dev)
[![X](https://img.shields.io/badge/follow-@jgalbraith64-1DA1F2?style=for-the-badge&logo=x&logoColor=1DA1F2)](https://twitter.com/jgalbraith64)

QOverlay provides fullscreen and component-scoped overlays for Vue and Quasar applications.

[Live Q-Press documentation site](https://qoverlay.netlify.app/)

## QOverlay v3.0.0 Release Candidate

QOverlay v3 prepares the project for Quasar CLI Vite 3. The app extension is Vite-only, requires `@quasar/app-vite` >=3.0.0-rc.5, and no longer supports webpack-based Quasar apps.

# Structure

This is a pnpm workspace mono-repo. You cannot use npm for building.

- [/ui](packages/ui) - standalone npm package (go here for more information)
- [/app-extension](packages/app-extension) - Quasar app extension
- [/docs](packages/docs) - Q-Press documentation site with docs, demos, and examples
- [live demo](https://qoverlay.netlify.app/) - **live Q-Press docs, demos, and examples**

## Install

```bash
pnpm add @quasar/quasar-ui-qoverlay
# or
bun add @quasar/quasar-ui-qoverlay
# or
yarn add @quasar/quasar-ui-qoverlay
# or
npm install @quasar/quasar-ui-qoverlay
# or, in a Quasar CLI project
quasar ext add @quasar/qoverlay
```

## Development

```bash
pnpm install
pnpm verify
pnpm --filter docs dev
```

## Support

If QOverlay is useful in your workflow and you want to support ongoing maintenance:

- GitHub Sponsors: https://github.com/sponsors/hawkeye64
- PayPal: https://paypal.me/hawkeye64

## License

MIT (c) Jeff Galbraith <jeff@quasar.dev>
