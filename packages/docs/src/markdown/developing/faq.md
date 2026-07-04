---
title: FAQ
desc: Frequently asked questions
keys: developing
---

:::details Q. Do I need to import QOverlay CSS myself?

The App Extension adds the stylesheet for you.

If you install the UI package directly, import the stylesheet in your boot file or app entry:

```ts
import '@quasar/quasar-ui-qoverlay/dist/index.css'
```

Quasar CLI projects can also centralize the stylesheet in `quasar.config.ts`:

```ts
// Note: using ~ tells Quasar the file resides in node_modules
css: [
  "app.scss",
  "~@quasar/quasar-ui-qoverlay/dist/index.css",
],
```

:::

:::details Q. Can I inspect the component API from the Quasar CLI?

Yes. After the App Extension is installed, run:

```bash
quasar describe QOverlay
```

The same generated API is shown on the [Using QOverlay](/developing/using-qoverlay) page.

:::

:::details Q. When should I use QOverlay?

Use QOverlay when part of the UI must be temporarily blocked while an operation completes. It is
especially useful for background saves, refresh actions, permission checks, and short transitions
before opening another piece of UI.

:::

:::details Q. Can I block only one component?

Yes. Put the component in QOverlay's default slot. QOverlay will wrap it and place the overlay over
that component only.

:::

:::details Q. Does QOverlay support dark mode?

Yes. The overlay background uses CSS colors, so you can tune the color and opacity for light or dark
layouts.

:::

:::details Q. How do I render content above the overlay?

Use the `body` slot for content such as a spinner, progress message, or close button.
:::
