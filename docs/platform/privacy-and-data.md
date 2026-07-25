---
title: Privacy & Data
description: What data SNGDC collects and stores, where it lives, how it is protected, and how customers delete it.
keywords: [SNGDC privacy, data safety, account deletion, Firestore, FilesHub, redaction]
sidebar_position: 4
---

# Privacy & Data

This page describes how SNGDC handles data, in plain terms. The authoritative legal text lives on the app's [privacy policy](https://sngdc.aoneahsan.com/privacy) and [terms](https://sngdc.aoneahsan.com/terms) pages; this is the engineering summary.

## What is collected and where it lives

A customer's account holds their identity and contact details, their relationship to a society and customer account, their bills, notifications, and support tickets. Structured records live in Cloud Firestore in collections such as `users`, `societies`, `customers`, `bills`, and `notifications`. Identity documents — a CNIC scan, property papers — and any profile imagery are stored in FilesHub with public visibility, and the Firestore record holds a reference rather than the file itself. The app does not use Firebase Storage.

## How access is controlled

Authentication is required for any personal data. Firestore security rules enforce that a customer can only read their own records and that operators can act only where their role grants the matching permission. The role checks that gate the interface are mirrored in the rules, so the boundary is enforced server-side, not merely hidden in the UI. The super-admin safeguard for `aoneahsan@gmail.com` exists so the system cannot be locked out of its own administration.

## Telemetry never carries personal data

Product analytics flow to Firebase Analytics, Amplitude, and Microsoft Clarity through one centralized service, and errors go to Sentry. A single rule is enforced at that one chokepoint: identifying values — account numbers, meter readings, billing totals, phone numbers — are redacted before any event or error leaves the device. Each analytics and error provider also fails open, activating only when its environment key is configured, so a build without a key sends nothing rather than breaking.

## Permissions on mobile

The native build requests only the permissions it uses, and it requests sensitive ones behind a user action rather than at launch. Notification permission is requested when notifications are set up, and the app works fully if it is declined. Camera and location are used for document capture and the address field respectively, each with a non-permission fallback — manual entry instead of locating, for example. The privacy policy lists each permission with the reason it is needed.

## Deleting your data

A customer can delete their account at any time from `/account/delete`. Deletion removes the Firebase Authentication user, the associated Firestore records, and the customer's files in FilesHub. The page states what will be removed before the customer confirms, and the privacy policy links to this canonical deletion route so it satisfies store and regulatory requirements.

## FAQ

### Where are my identity documents stored?
In FilesHub with public visibility. Firestore stores a reference to the file, not the file's contents, and Firebase Storage is not used.

### Does the app send my personal data to analytics?
No. Identifying values are redacted before any analytics or error event leaves the device, enforced at the single centralized service that emits them.

### Can operators see my data?
Only operators whose role grants the matching permission, and only as the security rules allow. The rules enforce this on the server, not just in the interface.

### How do I delete everything?
Use the account-deletion page. It removes your authentication record, your Firestore data, and your uploaded files, and it explains the consequences before you confirm.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
