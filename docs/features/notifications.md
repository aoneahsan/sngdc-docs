---
title: Notifications
description: In-app and push notifications in SNGDC — how the feed works and how OneSignal and local notifications are wired.
keywords: [SNGDC notifications, push notifications, OneSignal, local notifications]
sidebar_position: 3
---

# Notifications

SNGDC keeps customers informed through an in-app notifications feed and, on native builds, system push notifications. The feed lives at `/dashboard/notifications` and reads from the Firestore `notifications` collection, where each record is addressed to a customer and carries a title, body, and timestamp.

## The in-app feed

The notifications page lists a customer's notifications newest-first and marks them read as they are seen. Because the records live in Firestore, the feed stays consistent across a customer's devices: reading a notification on a phone reflects on the web, since both read the same documents. The feed degrades gracefully to an empty state when there is nothing to show.

## Push notifications on native builds

On Android and iOS the app integrates OneSignal for push delivery. OneSignal is initialized from a service module and activates only when its environment key is present, so a build without that key simply runs without push rather than erroring. The native configuration lives in the Android and iOS projects; the JavaScript layer registers the device and associates it with the signed-in user so pushes reach the right account.

The app also uses Capacitor's local notifications for on-device reminders that do not require a server round-trip, with a small status-bar icon and the cyan accent color configured in `capacitor.config.ts`. On a native build the app badge count can be updated through the Capawesome badge plugin.

## Permissions and fallbacks

Push notifications require the customer's permission, requested through the platform's standard prompt rather than at launch. If a customer declines, the in-app feed still works — push is an enhancement, not a dependency. The `POST_NOTIFICATIONS` permission is declared for Android 13 and later, and the app functions fully without it.

## FAQ

### Do I have to enable push notifications?
No. The in-app notifications feed works regardless. Push is an optional enhancement on phones, and the app keeps working if you decline the permission.

### Are my notifications synced across devices?
Yes. The feed reads from Firestore, so reading a notification on one device reflects on the others signed in to the same account.

### What sends the push notifications?
On native builds, OneSignal handles push delivery. It activates only when its key is configured, so the app never breaks if push is not set up for a given build.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
