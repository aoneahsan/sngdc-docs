---
title: Introduction to SNGDC
description: SNGDC is the web and mobile application for a synthetic natural gas distribution company — a customer portal plus an RBAC operations CMS.
keywords: [SNGDC, synthetic natural gas, SNG, gas distribution app, customer portal, Capacitor, React, Firebase]
slug: /intro
sidebar_position: 1
---

# Introduction to SNGDC

SNGDC is the web and mobile application for a synthetic natural gas (SNG) distribution company operating in Pakistan. It pairs a customer-facing portal — accounts, billing, usage analytics, notifications, and support — with an internal role-based admin and content-management studio that runs the public company website. One codebase ships to the browser and to Android and iOS through Capacitor.

The application is built with React 19, TypeScript, and Vite (with the React Compiler enabled), styled with Radix UI primitives and Tailwind CSS, and backed by Firebase Authentication and Cloud Firestore. File uploads go to FilesHub rather than Firebase Storage, and there are no server functions: every write happens directly from the client against Firestore security rules. That keeps the running cost at zero while still supporting authenticated, role-gated data access.

## What the app actually does

The product has three distinct surfaces, each documented in its own section of this site.

The **public website** presents the company: a home page, about, services, how-we-work, portfolio, investor relations, careers, contact, and the legal pages (privacy and terms). Every word of that surface is editable from the admin Content Studio, so operators change copy without a deploy.

The **customer portal** is the signed-in experience. A customer sees a dashboard, their bills, usage analytics rendered with D3, a notifications feed, support tickets, profile editing, and a self-service account-deletion flow. Access is guarded by Firebase Authentication; signing in is available with email/password or Google.

The **admin and operations back office** is gated by a five-role permission matrix. Operators manage users, societies, customers, billing, advertising, and analytics, and they edit every section of the public website through the Content Studio.

## How to read these docs

If you are a customer, start with [Account & Sign-in](./getting-started/account-and-sign-in.md) and the [Customer Dashboard](./getting-started/customer-dashboard.md), then read the individual feature pages. If you are an operator or administrator, read the [Admin Overview](./admin/overview.md) first — it explains the permission model that governs everything else. If you are an engineer evaluating or extending the app, the [Platform](./platform/tech-stack.md) section describes the stack, the native build, and the data model.

## Honest scope

This documentation describes how the **application** works. It is not a synthetic-natural-gas engineering reference and does not cover the physical distribution network, meter hardware, or regulatory filings. The app does not process in-app payments; billing pages present statements rather than collecting money. The gas-meter integration is intentionally out of scope in the current build (it awaits a vendor API), so any meter-reading content here describes the data model, not a live hardware feed.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
