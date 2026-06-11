# QOverlay

[![UI package](https://img.shields.io/npm/v/@quasar/quasar-ui-qoverlay?label=@quasar/quasar-ui-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-ui-qoverlay)
[![App Extension](https://img.shields.io/npm/v/@quasar/quasar-app-extension-qoverlay?label=@quasar/quasar-app-extension-qoverlay)](https://www.npmjs.com/package/@quasar/quasar-app-extension-qoverlay)

QOverlay provides fullscreen and component-scoped overlays for Vue and Quasar applications.

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

<!-- Trigger a Netlify branch redeploy without changing the rendered README. -->
