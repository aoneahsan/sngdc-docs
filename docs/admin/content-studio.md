---
title: Content Studio
description: The SNGDC Content Studio lets operators edit every section of the public website — hero slides, services, team, portfolio, jobs, FAQs, offices, certifications, announcements, and site settings.
keywords: [SNGDC content studio, CMS, content management, hero slides, FAQs, site settings]
sidebar_position: 4
---

# Content Studio

The Content Studio is the content-management surface at `/admin/content`. It lets operators edit the public company website without touching code or waiting for a deploy. Each section of the public site maps to a studio section and to a Firestore collection, so an edit in the studio changes what visitors see.

## What you can edit

The studio covers the full public surface. Operators manage **hero slides** for the home page, the **services** the company offers, the **team** roster, the **portfolio** of projects, **job postings** for the careers page, **FAQs**, **offices** and their contact details, **certifications**, **announcements**, and the **home sections** that compose the landing page. There is also a **site settings** section for global values and a **messages** section that collects what visitors submit through the public contact form.

Each section is a managed list with consistent create, read, update, and delete behavior, governed by its own permission resource — `heroSlides`, `serviceOfferings`, `team`, `portfolio`, `jobPostings`, `offices`, `certifications`, `siteContent`, and `messages`. An operator's role decides which of those actions they can perform in each section.

## Rich text without raw HTML

Sections that need formatted copy use a TipTap editor. Rich text is stored as structured JSON, not raw HTML, and rendered back through a matching viewer. Storing structured content rather than HTML keeps the data safe to render — there is no untrusted markup injected into the page — and lets the same content render consistently on the web and inside the native app.

## Images and documents

Where a section includes imagery — a hero slide, a team photo, a portfolio shot — the upload goes to FilesHub with public visibility, and the Firestore record stores the file reference. Every upload field carries an info affordance that explains, before the operator picks a file, what the image is for and the recommended type, size, and dimensions, so the right asset is uploaded the first time.

## Seeding starter content

The app includes a content-seed service that can populate the studio's collections with a baseline set of records, and clear them, for setting up a fresh environment. This is an operator convenience for bootstrapping, not something a customer ever sees.

## FAQ

### Do content changes require a deploy?
No. The studio writes to Firestore, and the public site reads from Firestore, so an edit is live without a rebuild.

### How is formatted text stored?
As structured TipTap JSON, not raw HTML. It is rendered through a matching viewer, which keeps the output safe and consistent across web and native.

### Where do images uploaded in the studio go?
To FilesHub with public visibility. The Firestore record holds a reference to the file rather than the file itself.

### What is the messages section?
It collects submissions from the public contact form so operators can review and respond to visitor inquiries from the back office.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
