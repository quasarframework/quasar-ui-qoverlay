---
title: Introduction
desc: What is QOverlay
keys: Getting Started
related:
  - /getting-started/installation-types
  - /developing/using-qoverlay
---

## What is QOverlay

QOverlay is a Quasar component package for building compact wheel-style inputs. It includes
string, time, date, date-time, and range overlays that feel at home inside forms, dialogs, and
dense control panels.

Use it when a native select, date picker, or time input is too blunt for the interaction you want.
The overlays keep the current value centered, make nearby values visible, and support keyboard-like
previous/next controls without requiring a full calendar or menu overlay.

## Components

- `QOverlay` chooses the right overlay from its `view` prop.
- `QStringOverlay` scrolls through a fixed list of string options.
- `QTimeOverlay` and `QTimeRangeOverlay` handle time values and time ranges.
- `QDateOverlay`, `QDateTimeOverlay`, and `QDateRangeOverlay` handle date-focused values.

Each component can be styled with Quasar palette colors, dense mode, disabled items, intervals, and
range validation options.
