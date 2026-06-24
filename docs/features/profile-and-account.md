---
title: Profile & Account
description: Editing your profile and deleting your account and data in SNGDC.
keywords: [SNGDC profile, account deletion, data deletion, GDPR]
sidebar_position: 5
---

# Profile & Account

The account section under `/account` is where a customer manages their own identity and, if they choose, removes it entirely. It covers profile editing and a self-service account-deletion flow that meets the data-deletion expectations of the app stores and privacy regulations.

## Editing your profile

The profile page lets a customer update their display name, contact phone number, and other personal fields. Phone numbers are entered and stored in E.164 international format using a dedicated phone field so they are unambiguous across regions. Changes are validated with Zod before they are written back to the customer's `users` document in Firestore. Where a profile photo or document upload is involved, the file goes to FilesHub — never Firebase Storage — and is stored with public visibility per the project's file-handling standard.

## Deleting your account

The account-deletion page at `/account/delete` gives a customer a clear, self-service path to remove their account. Deletion removes the Firebase Authentication user and the associated Firestore data for that account, and any of the user's files stored in FilesHub are removed as part of the process. The page explains what is deleted and what the consequences are before the customer confirms, so the action is never a surprise.

Account deletion is also surfaced as a canonical, linkable page so it satisfies store and regulatory requirements for an accessible data-deletion route. The privacy policy points to it, and it matches what the app's Data Safety disclosures describe.

## What data the app holds

A customer's record covers their identity and contact details, their relationship to a society and customer account, their bills, notifications, and support tickets. The [Privacy & Data](../platform/privacy-and-data.md) page describes each category, where it is stored, and how it is protected.

## FAQ

### How do I change my phone number?
Edit it on the profile page. The phone field enforces international E.164 format so the number is stored unambiguously.

### How do I delete my account?
Open `/account/delete` while signed in. The page explains what will be removed, and on confirmation it deletes your authentication record, your Firestore data, and your uploaded files.

### Is account deletion reversible?
No. Deletion is permanent by design, which is why the page describes the consequences before you confirm.

### Where are my uploaded files stored?
Uploads go to FilesHub with public visibility, not Firebase Storage. They are removed when you delete your account.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
