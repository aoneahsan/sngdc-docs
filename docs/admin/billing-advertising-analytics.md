---
title: Billing, Advertising & Analytics
description: The operational dashboards in the SNGDC back office for billing records, advertising placements, and analytics.
keywords: [SNGDC admin billing, advertising, analytics, operations dashboards]
sidebar_position: 5
---

# Billing, Advertising & Analytics

Beyond user, society, and content management, the back office carries three operational dashboards: billing, advertising, and analytics. Each sits under `/admin` and is gated by its own permission resource.

## Billing administration

The billing dashboard at `/admin/billing` manages the `bills` collection that the customer billing pages read. Operators with the `bills` permission can list, read, create, and update statements. This is the administrative counterpart to the [customer billing view](../features/billing.md): the same records, managed from the operations side. Billing figures remain personal data and are kept out of logs and telemetry.

## Advertising

The advertising dashboard at `/admin/advertising` manages promotional placements surfaced in the app, governed by the `advertising` permission. The app's advertising is first-party — it promotes the company's own services and announcements rather than serving a third-party ad network. That distinction matters for store declarations: because there is no third-party ad SDK reading the advertising identifier, the app's data and advertising disclosures reflect first-party promotion only.

## Analytics

The analytics dashboard at `/admin/analytics` presents operational metrics, guarded by the `analytics` permission. Separately from this dashboard, the app instruments user actions across three product-analytics providers — Firebase Analytics, Amplitude, and Microsoft Clarity — through a centralized analytics service. Those providers fail open: each activates only when its environment key is configured, so a build without a given key simply runs without that provider rather than erroring. Personally identifying values are redacted before any analytics event is sent.

## How telemetry stays private

The centralized analytics service is the single place events are emitted, which makes it straightforward to enforce one rule everywhere: never send personal information. Account numbers, meter readings, billing totals, and phone numbers are redacted before an event leaves the device, so operational analytics measure behavior without exposing customer identity. Errors are reported to Sentry under the same discipline.

## FAQ

### Is the advertising a third-party ad network?
No. The app promotes the company's own services and announcements. There is no third-party ad SDK, which is why the app does not read the advertising identifier for ad targeting.

### Which analytics providers does the app use?
Firebase Analytics, Amplitude, and Microsoft Clarity, wired through one centralized service. Each activates only when its key is configured.

### How is customer privacy protected in analytics?
Identifying values are redacted before any event is sent. The single analytics service enforces this for every event, and errors go to Sentry under the same rule.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
