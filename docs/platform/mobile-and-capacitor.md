---
title: Mobile & Capacitor
description: How SNGDC runs as a native Android and iOS app through Capacitor 8 — edge-to-edge system bars, notifications, in-app updates, and native sign-in.
keywords: [SNGDC mobile, Capacitor, Android, iOS, edge-to-edge, push notifications, in-app updates]
sidebar_position: 2
---

# Mobile & Capacitor

The same React app that serves the web becomes a native Android and iOS application through Capacitor 8. This page covers what changes on a phone and how the native build is configured.

## One codebase, three targets

Capacitor wraps the built web assets in a native shell and bridges to device features through plugins. The application logic does not branch on platform except where a capability genuinely differs — Google sign-in, sharing, file downloads — and those branches are decided at the call site with a platform check rather than buried in helpers. The web build never breaks because a native-only plugin is guarded behind that check.

## Edge-to-edge system bars

On Android 15 and later, the system enforces edge-to-edge layout, which can cause content to draw behind the status and navigation bars if insets are mishandled. SNGDC resolves this by making the Capawesome edge-to-edge plugin the single owner of window insets: the core Capacitor system-bars inset handling is disabled in `capacitor.config.ts`, the edge-to-edge plugin paints the bar background from the first frame, and a theme-aware service recolors the bars and flips the icon contrast when the user switches between light and dark mode. The result is content that always sits below the status bar and above the navigation bar, with bars colored to match the app.

## Notifications and updates

Push notifications are delivered through OneSignal on native builds, and the app uses Capacitor local notifications for on-device reminders, with a configured status-bar icon and the cyan accent color. The Capawesome app-update plugin surfaces in-app update prompts so users can update from inside the app, and the app-review plugin can request a store review at an appropriate moment. The badge plugin keeps the app icon's unread count current.

## Native sign-in

Google sign-in on a native build uses the `@codetrix-studio/capacitor-google-auth` plugin to obtain a Google ID token natively, then exchanges it for a Firebase session — the same Firebase user the web popup flow produces. The build must carry the Google web OAuth client id as `serverClientId` for this exchange to succeed.

## Device capabilities in use

The native build draws on camera and filesystem access for document capture and bill downloads, geolocation for the location field, the share sheet for sharing statements, haptics for tactile feedback, network detection for connectivity awareness, app shortcuts for quick actions, and Capacitor Preferences for local key-value storage. Each is an official Capacitor or Capawesome plugin.

## FAQ

### Why was content drawing behind the status bar on Android 15?
Because two components were competing to handle window insets. The fix makes the Capawesome edge-to-edge plugin the sole owner and disables the core system-bars inset handling, so insets are applied once and correctly.

### Is the mobile app a different codebase?
No. It is the same React app wrapped by Capacitor, with platform-specific behavior guarded at the call site.

### How does Google sign-in work on a phone?
The native Google plugin gets an ID token, which the app exchanges for a Firebase session. It lands the same Firebase user as the web flow, so everything downstream is platform-agnostic.

### Can the app prompt users to update?
Yes. The Capawesome app-update plugin presents in-app update prompts on Android, and the app-review plugin can request a store review at a sensible time.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
