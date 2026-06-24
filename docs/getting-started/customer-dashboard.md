---
title: Customer Dashboard
description: The signed-in customer home in SNGDC — what it shows and how to navigate to bills, usage, notifications, support, and account settings.
keywords: [SNGDC dashboard, customer portal, bills, usage, notifications, support]
sidebar_position: 2
---

# Customer Dashboard

After signing in, a customer lands on the dashboard — the hub for everything account-related. It is served inside the dashboard layout, which is separate from the public-site layout, so the navigation and chrome match an application rather than a marketing page.

## What the dashboard shows

The dashboard summarizes the account at a glance and links into the deeper sections. From here a customer reaches their bills, usage analytics, the notifications feed, support tickets, profile settings, and the account-deletion flow. The exact widgets a customer sees depend on what data exists on their account; the dashboard degrades gracefully when a section has nothing to show yet.

## Navigation and layout

The portal uses a fixed set of routes, each guarded so that only an authenticated user can reach it. The dashboard sits at `/dashboard`, bills at `/dashboard/bills`, usage at `/dashboard/usage`, support at `/dashboard/support`, notifications at `/dashboard/notifications`, and settings at `/dashboard/settings`. Profile and account deletion live under `/account`. An unauthenticated visit to any of these redirects to sign-in.

Navigation state that matters across a refresh — open dialogs, active tabs, selected entities, search terms — is reflected in the URL as query parameters. Reloading the page restores the same view rather than resetting it. On every route change the app scrolls back to the top, unless the destination URL carries a hash anchor.

## Responsive and native behavior

The same dashboard renders on a phone screen and a desktop monitor. Layouts are mobile-first, touch targets meet the 44-pixel minimum, and there is no horizontal scrolling at any width from 320 pixels up. On a native Android or iOS build, the dashboard runs inside Capacitor with edge-to-edge system bars handled so content never hides behind the status or navigation bar.

## FAQ

### Why does my dashboard look different from another customer's?
The dashboard adapts to the data on each account. A customer with no bills yet sees an empty-state prompt instead of a billing summary, for example.

### Does reloading the page lose my place?
No. The app stores view state — which tab is open, which item is selected, any search term — in the URL, so a reload restores the exact same screen.

### Can I use the dashboard offline?
Core navigation and previously loaded data behave reasonably under a flaky connection because Capacitor Preferences caches some state locally, but live data (new bills, fresh notifications) requires a connection to Firestore.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
