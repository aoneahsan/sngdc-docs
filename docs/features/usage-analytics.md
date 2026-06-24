---
title: Usage Analytics
description: How SNGDC visualizes gas consumption with hand-built D3 charts on the customer usage page.
keywords: [SNGDC usage, consumption analytics, D3 charts, gas usage]
sidebar_position: 2
---

# Usage Analytics

The usage page at `/dashboard/usage` turns a customer's consumption history into charts. Every visualization is built directly with D3 rather than a charting wrapper. That choice is deliberate and applies across the whole project: D3 gives full control over scales, axes, tooltips, and transitions, and it avoids pulling in a heavier abstraction that would constrain the look.

## Why D3 and not a chart library

A chart library trades control for convenience. SNGDC needs charts that match the app's theme tokens — the same cyan accent, the same dark-mode treatment, the same typography — and that respond to the user's accent-color and text-size preferences. Hand-built D3 components read those tokens directly and redraw against them, so a usage chart looks native to the app in both light and dark mode. The project standard forbids Recharts, Chart.js, ApexCharts, Victory, and Nivo for exactly this reason.

## What the charts show

The usage analytics present consumption over time so a customer can see how their gas use trends across billing periods. The data is structured per customer, and the charts derive their domains from that data so an account with a short history and an account with years of records both render sensibly. Because the rendering is custom, the charts can highlight specific periods, annotate notable changes, and animate transitions without fighting a library's defaults.

## Accessibility and responsiveness

The charts honor the same responsiveness rules as the rest of the app: they resize from a 320-pixel phone to a full-HD monitor without overflow, and they respect the user's reduced-motion preference by disabling transitions when the operating system asks for it. Color is never the only signal — labels and values accompany the visual encoding so the information survives for users who cannot distinguish the palette.

## FAQ

### What does the usage page measure?
It visualizes gas consumption recorded against your account over time. The current build models this data rather than reading from live meter hardware, which is a separate, vendor-dependent integration.

### Why are the charts styled to match the rest of the app?
Because they are built with D3 against the app's own theme tokens. They pick up your accent color, text size, and light or dark mode automatically.

### Will the charts work on my phone?
Yes. They are responsive from small phones up and adapt their layout to the available width, and they reduce animation when your device requests reduced motion.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
