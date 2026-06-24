---
title: RBAC & Users
description: The five-role permission matrix in SNGDC — what admin, manager, creator, editor, and viewer can each do, and how users are managed.
keywords: [SNGDC RBAC, roles, permissions, user management, admin, manager, viewer]
sidebar_position: 2
---

# RBAC & Users

SNGDC governs access with role-based access control. Every user holds exactly one of five roles, and that role determines which `resource:action` permissions they have. This page describes each role and how administrators manage users.

## The five roles

The roles, from least to most privileged, behave as follows.

A **viewer** is read-only. It can list and read the data it is allowed to see but cannot create, update, or delete anything. This is the default role assigned to every new account.

An **editor** can create and update business entities and read them, but cannot delete. It is the right role for staff who maintain records day to day without the authority to remove them.

A **creator** can create new entities and read them, but cannot update or delete existing ones. It suits roles that add records — onboarding new customers, for instance — without editing established data.

A **manager** has operational control over the business data: it can act across the operational resources and can list and read users, but it cannot modify user accounts or roles. This separates running operations from administering the system itself.

An **admin** has every permission. Admins manage users and roles, including the `assign` action that grants a role to another user.

## How permissions are structured

A permission is a `resource:action` pair. The resources cover the operational domain — `dashboard`, `users`, `societies`, `customers`, `meters`, `bills`, `analytics`, `content`, `advertising`, `notifications`, and `support` — plus the content-management resources behind the public website: `siteContent`, `heroSlides`, `portfolio`, `team`, `offices`, `certifications`, `serviceOfferings`, `messages`, and `jobPostings`. The actions are `list`, `read`, `create`, `update`, `delete`, and `assign`. The admin role holds the full Cartesian product; the other roles hold curated subsets that match their responsibility.

## Managing users

Administrators manage users from `/admin/users`, guarded by the `users` permission family. When creating a user, an admin chooses the role at creation time. There is no separate screen for editing the permission matrix — assigning a role is how an admin grants capability. The data lives in the Firestore `users` collection, and Firestore security rules enforce the same role checks server-side so the boundary holds even outside the interface.

## The super-admin safeguard

The email `aoneahsan@gmail.com` always resolves to `admin`, regardless of the role stored in Firestore. This is enforced on every sign-in in the auth store and again in the security rules. It is a deliberate bootstrap so the system can never be fully locked out of administration.

## FAQ

### What is the difference between an editor and a creator?
An editor can create and update but not delete. A creator can create and read but not update existing records. They suit different staff responsibilities.

### Can a manager change someone's role?
No. A manager runs operations and can read users, but only an admin can modify users or assign roles.

### Where is the permission matrix defined?
In code, in the RBAC configuration, and it is seeded rather than edited through a screen. Changing it is a deploy, which keeps it reviewed.

### Are the role checks enforced on the server?
Yes. Firestore security rules apply the same role logic, so the boundary is not only in the interface.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
