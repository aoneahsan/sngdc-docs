---
title: Account & Sign-in
description: How to register, sign in with email or Google, and how roles are assigned in the SNGDC app.
keywords: [SNGDC sign in, register, Google sign-in, Firebase Authentication, roles, viewer]
sidebar_position: 1
---

# Account & Sign-in

SNGDC uses Firebase Authentication for every signed-in surface. A visitor can browse the public website without an account, but the customer dashboard and the admin back office require sign-in. Two methods are wired: email and password, and Google.

## Registering

The registration page collects the fields needed to create a Firebase Authentication user and a matching `users/{uid}` document in Firestore. Forms across the app are built with react-hook-form and validated with Zod, so the registration form rejects malformed email addresses and weak passwords before it ever calls Firebase. After the account is created, a profile document is written to the `users` collection with the new user's display name, email, and a default role.

## Signing in with Google

Google sign-in follows the same web-versus-native split used across the wider app. On the web the app calls Firebase's `signInWithPopup` with a `GoogleAuthProvider`. On a native Android or iOS build it uses the `@codetrix-studio/capacitor-google-auth` plugin to obtain a Google ID token natively, then exchanges that token for a Firebase session with `signInWithCredential`. Both paths resolve to the same Firebase user, so the rest of the app never needs to know which platform performed the sign-in.

For the native path to work, the build must carry the Google web OAuth client id as `serverClientId` (configured through `capacitor.config.ts` and the environment). Without it, the native Google button cannot complete the exchange.

## How roles are assigned

Every user has exactly one role. New users are created as `viewer` — the most restricted role — and an administrator upgrades them when appropriate. There is no self-service role change. The five roles, in increasing privilege, are `viewer`, `editor`, `creator`, `manager`, and `admin`; the [RBAC & Users](../admin/rbac-and-users.md) page documents what each can do.

One email is special: `aoneahsan@gmail.com` always resolves to `admin`, enforced both in the auth store on every sign-in and in the Firestore security rules. This is a bootstrap safeguard so the system can never be locked out of its own administration.

## Signing out

Signing out clears the Firebase session and, on native builds, also signs out of the Google plugin so the next sign-in re-prompts for an account. Theme and appearance preferences set while signed in are kept on the device after sign-out, so the app still looks the way the user left it.

## FAQ

### Do I need an account to read the public website?
No. The home, about, services, portfolio, careers, contact, privacy, and terms pages are fully public. An account is only required for the dashboard and admin areas.

### Can I sign in with a phone number?
The current build authenticates with email/password and Google. Phone numbers are collected on the profile in E.164 format for contact purposes, not as a sign-in method.

### Why am I a "viewer" after signing up?
`viewer` is the default role for safety. An administrator assigns a higher role when your responsibilities require it. This prevents new accounts from holding operational permissions by accident.

### What happens to my preferences when I sign out?
Appearance settings (theme, accent color, text size, and more) persist locally on the device, so signing out does not reset the look of the app on that browser or phone.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
