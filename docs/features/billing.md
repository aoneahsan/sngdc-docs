---
title: Billing
description: How customers view bills and statements in SNGDC, and how operators manage billing records.
keywords: [SNGDC billing, gas bills, statements, Firestore bills collection]
sidebar_position: 1
---

# Billing

The billing pages present a customer's statements. SNGDC shows bills; it does not collect payments inside the app. Statements are read from the Firestore `bills` collection, where each record links to the customer it belongs to and carries the amounts, dates, and status that the bills page renders.

## The customer view

A signed-in customer opens `/dashboard/bills` to see their billing history. Each bill displays its billing period, the amount, and its status, and the list is ordered so the most recent statement appears first. Because the data is structured rather than a PDF blob, the page can present totals and status badges directly, and a customer can drill into an individual statement for the detail.

Bills can be downloaded or shared from the app where a statement document is available; downloads route through Capacitor's filesystem on native builds and a standard browser download on the web, and sharing follows the app's web-versus-native share contract — an in-app share modal on the web and the operating-system share sheet on a phone.

## The operator view

Operators manage billing from the admin back office at `/admin/billing`, guarded by the `bills` permission family. From there an operator with sufficient role can list, read, create, and update billing records against the same `bills` collection. The permission matrix decides who can do what: a `viewer` only reads, an `editor` can create and update, and an `admin` or `manager` has the full set.

## Privacy of billing data

Billing figures are treated as personal information. The app never writes account numbers, billing totals, or other identifying billing details into logs, analytics events, or error reports — those values are redacted before any telemetry leaves the device. Bills are visible only to the customer they belong to and to operators whose role grants the `bills` permission, enforced by Firestore security rules.

## FAQ

### Can I pay my bill inside the app?
No. The current build presents statements for viewing and download. There is no in-app payment processing, and the app declares no financial features.

### Where does my billing data come from?
Each statement is a record in the Firestore `bills` collection, linked to your customer account. The bills page reads those records directly.

### Who can see my bills?
Only you, and operators whose assigned role includes the `bills` permission. Security rules enforce this at the database level, not just in the interface.

### Can I download a statement?
Yes, where a statement document exists. On a phone the download is saved through the native filesystem; on the web it is a normal browser download.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
