---
title: Tech Stack
description: The architecture of the SNGDC app — React 19, Vite, Capacitor 8, Radix UI, Tailwind, Firebase, Zustand, react-hook-form, Zod, D3, and TipTap.
keywords: [SNGDC tech stack, React 19, Capacitor, Firebase, Zustand, Vite, Radix UI, Tailwind]
sidebar_position: 1
---

# Tech Stack

SNGDC is a single React codebase that ships to the web and to native Android and iOS. This page describes the libraries it uses and the architectural decisions behind them.

## Frontend

The interface is React 19 with TypeScript, bundled by Vite with the React Compiler enabled. The compiler memoizes components automatically, which removes a class of manual `useMemo` and `useCallback` work. UI is composed from Radix UI primitives styled with Tailwind CSS 4, so every interactive control — dialogs, dropdowns, tabs, tooltips, switches — is accessible and theme-aware by default rather than a hand-rolled `div`. Animations use framer-motion where motion adds clarity, always honoring the reduced-motion preference.

State is split by concern. Global client state lives in Zustand stores — notably the auth store and the theme store — while server state is read directly from Firestore. Forms are built with react-hook-form and validated with Zod through the `@hookform/resolvers` bridge; the project standard requires this combination for every form, and shared form-field components give each input a consistent contract.

Routing is handled by React Router, with route guards that gate the dashboard and admin areas behind authentication and the permission matrix. User-visible view state — open dialogs, active tabs, filters, selected entities, search — is reflected in the URL so a reload restores the same screen.

## Backend and data

The backend is Firebase: Authentication for sign-in and Cloud Firestore for data. There are no server functions and no Firebase Storage. Writes happen directly from the client and are authorized by Firestore security rules, which keeps running cost at zero while preserving role-based access control on the server side. File uploads route through FilesHub with public visibility rather than Firebase Storage.

Charts are built with D3 directly rather than a charting wrapper, so visualizations match the app's theme tokens. Rich text is edited and stored with TipTap as structured JSON, never raw HTML. Errors are reported to Sentry, and product analytics flow to Firebase Analytics, Amplitude, and Microsoft Clarity through a centralized service, each provider activating only when its key is present.

## Native layer

Capacitor 8 wraps the web build into native Android and iOS apps and exposes device capabilities through plugins: camera and filesystem for documents, geolocation for the location field, push and local notifications, share, haptics, network detection, preferences for local storage, app shortcuts, in-app updates, and the Capawesome edge-to-edge support that keeps content clear of the system bars. Client-side storage uses Capacitor Preferences rather than the browser's `localStorage`.

## Engineering standards

Two standards are worth calling out because they shape the whole codebase. All log output goes through a centralized logger, and direct `console.*` calls are banned and enforced by ESLint, so log verbosity is controlled by a single switch. And every value that could be a secret is read from an environment variable rather than hard-coded, with `.env.example` kept in sync with the keys the code actually uses.

## FAQ

### Why Firebase without server functions?
Direct client writes guarded by Firestore security rules cover the app's needs without paid compute. Authorization lives in the rules, so the server-side boundary holds without a function layer.

### Why D3 instead of a chart library?
For full control over how charts look and behave so they match the app's theme tokens and respond to the user's appearance preferences.

### Where do uploads and secrets live?
Uploads go to FilesHub with public visibility, not Firebase Storage. Secrets come from environment variables, never hard-coded, with `.env.example` tracking the required keys.

### Is this the same code on web and mobile?
Yes. One React codebase builds to the web and, through Capacitor, to native Android and iOS, with platform-specific behavior guarded at the call site.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
