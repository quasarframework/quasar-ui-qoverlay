---
title: Using QOverlay
desc: How to use QOverlay
keys: developing
examples: QOverlay
---

QOverlay provides a lightweight way to block interaction while a task is running. It can cover the
whole viewport or wrap a single component so the rest of the page remains usable.

## API

<script import>
import QOverlayApi from '@quasar/quasar-ui-qoverlay/dist/api/QOverlay.json'
</script>

<MarkdownApi :api="QOverlayApi" name="QOverlay"/>

## Fullscreen Overlay

Use fullscreen mode when a task should temporarily block the entire page. Leave the default slot
empty and place visible content in the `body` slot.

The live docs preview scopes the overlay to a contained app surface so it does not block the docs
page itself.

<MarkdownExample title="Fullscreen Overlay" file="Fullscreen"/>

## Component Overlay

Wrap a card, form, table, or panel with `QOverlay` when only that surface should be blocked.

<MarkdownExample title="Component Overlay" file="Component"/>

## Background Color

Tune the visual weight with `background-color` and `opacity`.

<MarkdownExample title="Background Color" file="BackgroundColor"/>

## Button With Menu

QOverlay also works well as a short-lived transition while remote data loads before revealing
follow-up UI.

<MarkdownExample title="Button With Menu" file="ButtonWithMenu"/>

## Menu Backdrop

Add a separate backdrop overlay while a menu is open, without moving the `QMenu` away from its
trigger button.

<MarkdownExample title="Menu Backdrop" file="MenuBackdrop"/>
