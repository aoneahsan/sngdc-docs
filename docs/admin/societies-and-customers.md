---
title: Societies & Customers
description: How SNGDC operators manage societies and the customer records within them, including identity documents stored in FilesHub.
keywords: [SNGDC societies, customers, customer management, CNIC, FilesHub]
sidebar_position: 3
---

# Societies & Customers

SNGDC organizes its customer base by society. A society is a residential or commercial area the company serves; a customer is an account within a society. Operators manage both from the admin back office, guarded by the `societies` and `customers` permission families.

## Societies

Operators list and manage societies at `/admin/societies`, and open a single society's detail view to see and manage the customers attached to it. The society record carries the information needed to identify and locate the area it represents. Creating, updating, and deleting societies follow the permission matrix: a `creator` can add one, an `editor` can revise it, and removal requires a role with the `delete` action.

## Customers

Within a society, operators manage customer records — the accounts that receive gas service, bills, and notifications. A customer record links to its society and holds the customer's identity and contact details. Customer create and edit flows use the app's shared form fields: validated text, email, and phone inputs, a location field, and file inputs for documents.

The location field is the most capable of these. It offers three ways to set an address — Google Places autocomplete, a "locate me" button backed by Capacitor geolocation, and manual entry — and returns a normalized address regardless of which path the operator used. Autocomplete requires a Google Maps API key; without it the field gracefully hides the autocomplete tab and still offers locate-me and manual entry.

## Where identity documents live

A customer's identity documents — the national identity card (CNIC) scan and property papers — are uploaded to FilesHub, never stored in Firestore and never in Firebase Storage. Uploads use public visibility per the project standard, and the Firestore customer record holds references rather than the file bytes. This keeps Firestore lean and routes binary storage through the dedicated file service.

## URL state in admin dialogs

The create and edit dialogs reflect their state in the URL: opening the create dialog adds `?create=1`, editing a record adds `?edit=<id>`, and adding a customer to a society adds `?addCustomer=1`. Reloading the page restores the open dialog rather than dropping the operator back to the list, so a refresh mid-edit is safe.

## FAQ

### How are customers organized?
By society. Each society groups the customers in an area, and you open a society's detail page to manage its customers.

### Where are CNIC and property documents stored?
In FilesHub with public visibility. The Firestore customer record stores references to those files, not the files themselves.

### Do I need a Google Maps key to add an address?
No. Without a key, the location field hides autocomplete and still supports locate-me and manual entry. With a key, it adds Google Places autocomplete.

### What happens if I reload while editing a customer?
The dialog reopens. The app stores the open dialog and the record id in the URL, so a reload restores your place.

import AuthorCard from '@site/src/components/AuthorCard';

<AuthorCard />
