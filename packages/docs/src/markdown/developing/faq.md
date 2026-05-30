---
title: FAQ
desc: Frequently asked questions
keys: developing
---

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
