---
title: Admin Overview
description: The SNGDC operations back office — what it covers and the permission model that gates every action.
keywords: [SNGDC admin, operations, back office, RBAC, permissions]
sidebar_position: 1
---

# Admin Overview

The admin area is the operations back office. It is reached at `/admin` and is gated twice: first by Firebase Authentication (you must be signed in) and then by a role check (your role must grant the relevant permission). Everything an operator can do flows from a single permission matrix, so understanding that model explains the whole back office.

## What the back office covers

The admin area groups operational work into a handful of sections. Operators manage **users** and their roles, the **societies** SNGDC serves and the **customers** within them, **billing** records, **advertising** placements, and **analytics**. A dedicated **Content Studio** edits every section of the public website. Each section maps to a route under `/admin` and to a resource in the permission matrix.

## The permission model in brief

Access is role-based. There are five roles — `viewer`, `editor`, `creator`, `manager`, and `admin` — and a set of resources such as `users`, `societies`, `customers`, `bills`, `analytics`, `content`, and the content-management resources behind the studio. Each resource supports a set of actions: `list`, `read`, `create`, `update`, `delete`, and `assign`. A permission is the pair of a resource and an action, written `resource:action`, for example `users:create` or `bills:update`.

Routes are protected with a permission guard, and individual buttons and controls are wrapped so they only render for users who hold the matching permission. An operator never sees an action they cannot perform. The [RBAC & Users](./rbac-and-users.md) page lists what each role can do.

## There is no UI to edit roles

The role-to-permission mapping is defined in code and seeded, not editable through a screen. This is intentional: the permission matrix is a security boundary, and keeping it in source control means changes are reviewed and deployed rather than toggled live. Administrators assign a role to a user when they create or manage that user; they do not redefine what a role means from inside the app.

## FAQ

### Who can access the admin area?
Only signed-in users whose role grants admin permissions. A `viewer` can read where reading is allowed; creating, updating, and deleting require higher roles.

### Can I change what a role is allowed to do?
Not from the interface. The role-to-permission matrix lives in code and is changed by a deploy, which keeps it under review.

### How are buttons hidden from users who lack permission?
Controls are wrapped in a permission check, so an operator only sees actions their role permits. Route-level guards also block direct navigation.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
