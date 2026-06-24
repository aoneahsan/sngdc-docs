---
title: Theme Customizer
description: SNGDC's user-facing theme customizer — appearance, accent color, radius, scaling, text size, and panel background, persisted locally and synced across devices.
keywords: [SNGDC theme, dark mode, theme customizer, appearance, accent color, accessibility]
sidebar_position: 3
---

# Theme Customizer

SNGDC ships a full theme customizer available to every user, signed in or not. It is opened from a palette icon in the header and lets a person tune the app's appearance through card-based selectors rather than dropdowns. The choices persist, and for signed-in users they follow the account across devices.

## What you can customize

The customizer exposes six controls. **Appearance** switches between light, dark, and system, where system follows the operating-system preference live. **Accent color** offers nine brand-aligned accents. **Border radius** ranges from square to fully rounded. **UI scaling** adjusts overall size from ninety to one hundred ten percent. **Body text** size has small, medium, and large options. And **panel background** chooses between solid and translucent surfaces. Each control is a set of visual cards that preview the effect, so a choice is made by recognition rather than by reading a label.

## How preferences persist

Persistence is two-layered. For an unauthenticated visitor, preferences are stored through Capacitor Preferences — which is `localStorage` under the hood on the web and native key-value storage on a phone — so the next visit on the same device restores the look. For a signed-in user, preferences are also synced to their Firestore `users/{uid}.preferences` document. On sign-in the app pulls the remote preferences and they win over local ones; on each change the app writes locally and pushes to Firestore on a short debounce, so rapid adjustments do not flood the database. The same user on a different device sees the same theme.

## The boot loader prevents a flash of the wrong theme

On a hard reload, an app that renders before its theme hydrates flashes the default appearance and then snaps to the user's choice. SNGDC avoids this with a full-page boot loader that holds the app until two things are ready: the theme store has hydrated and authentication has emitted its first state. The loader shows the logo, a spinner, and a rotating line of copy — quotes, tips, safety reminders, and fun facts — that fades between messages so the wait feels alive. Users who prefer reduced motion get a static loader.

## Accessibility

The customizer and the themes it produces respect accessibility throughout. Controls are keyboard-navigable Radix primitives, the boot loader exposes a status role, and every theme keeps text legible against its surface in both light and dark mode. Reduced-motion preferences disable the loader rotation and in-app transitions.

## FAQ

### Can I change the theme without signing in?
Yes. The customizer works for everyone, and your choices are saved locally so they persist on the same device.

### Will my theme follow me to another device?
If you are signed in, yes. Preferences sync to your account, and signing in on another device pulls them down.

### Why is there a loading screen on reload?
To prevent a flash of the wrong theme. The app waits until the theme and authentication are both ready before it renders, which avoids rendering in light mode and then jumping to your dark preference.

### Does the customizer respect reduced motion?
Yes. The boot-loader rotation and in-app transitions are disabled when your device requests reduced motion.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
