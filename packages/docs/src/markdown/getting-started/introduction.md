---
title: Introduction
desc: What is QOverlay
keys: Getting Started
related:
  - /getting-started/installation-types
  - /developing/using-qoverlay
---

## What is QOverlay

QOverlay is a Quasar component package for temporarily blocking interaction while work completes.
It can cover the full viewport or wrap one component, making it useful for loading states,
confirmation handoffs, and short asynchronous transitions.

Use it when a spinner alone is not enough context, but a full dialog would be too heavy. The overlay
keeps the blocked area obvious while leaving room for a message, progress indicator, or recovery
action in the `body` slot.

## Modes

- Fullscreen mode covers the page when no default slot is provided.
- Component mode wraps a card, form, table, or panel when a default slot is provided.
- The `body` slot renders visible content such as spinners, buttons, and status text.

The background color, opacity, z-index, cursor, and scroll locking behavior are configurable.
