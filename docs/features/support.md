---
title: Support
description: How customers raise and track support tickets in SNGDC, and how operators respond.
keywords: [SNGDC support, support tickets, customer service, help]
sidebar_position: 4
---

# Support

The support page at `/dashboard/support` lets a customer raise a request and follow it to resolution. Tickets are stored in Firestore and are visible to the customer who created them and to operators whose role grants the `support` permission.

## Raising a ticket

A customer opens the support page, describes the issue through a validated form, and submits. As with every form in the app, the input is built with react-hook-form and checked against a Zod schema, so required fields and well-formed values are enforced before submission. The ticket is written to Firestore with the customer's identity attached, a subject, the message body, and a status that starts open.

## Tracking and updates

Once submitted, a ticket appears in the customer's support list with its current status. Operators pick up tickets from the back office and update their status as they work, and those updates flow back to the customer's view because both read the same records. This keeps a single source of truth for the conversation rather than scattering it across email threads.

## Where support fits with safety content

Support is for account and service questions. Safety-critical guidance — gas-leak procedures, emergency numbers, outage reporting — is presented as fixed, authoritative copy elsewhere in the app and on the public site, drawn verbatim from the company's source material. The support flow does not replace those emergency channels; for an active safety emergency a customer uses the emergency contact information rather than a support ticket.

## FAQ

### How do I contact support?
Open `/dashboard/support` while signed in, describe your issue, and submit. Your ticket is saved and you can track its status from the same page.

### Can I see the status of my request?
Yes. Each ticket shows its current status, and operator updates appear in your support list because both sides read the same records.

### Is support the right channel for a gas emergency?
No. For an active safety emergency, use the emergency contact information shown in the app and on the public site. Support tickets are for account and service questions.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
