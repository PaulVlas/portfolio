---
title: "HTM Central"
description: "A Heelwork to Music show entry site. Organisers can host shows and competitors can enter their dogs in the shows."
date: "2025"
heroImage: "/src/assets/htm-central.jpg"
badge: "WIP"
tags:
  [
    "Next.js",
    "React",
    "TailwindCSS",
    "TypeScript",
    "SQL",
    "Postgres",
    "drizzle",
    "Auth0",
    "S3",
  ]
---

## What I'm Building

Heelwork to Music (HTM) is a dog sport where competitors choreograph routines to music. Shows currently run on spreadsheets and email. HTM Central is a purpose-built platform to replace that.

Organisers create shows, add days and classes, and manage entries. Competitors register their dogs and handlers and enter classes. Organizers can post live results during the show.

## Stack

This is a fully Next.js app using server actions for mutations rather than a separate API layer.

- **Next.js with server actions** for both frontend and backend logic
- **Drizzle + PostgreSQL** for type-safe database access
- **Auth0** for authentication and user management
- **S3** for file storage
- **Self-hosted on a VPS** rather than a managed platform

## What I'm Learning

Building a real product for real users is a different challenge to university projects. A few things that have stood out:

- **Self-hosting the full stack:** Rather than deploying to a managed platform, everything runs on a VPS through Coolify with a Docker Compose setup. That includes the Next.js app, the Postgres database, Uptime Kuma for monitoring, and Umami for analytics. It's more work to set up, but you end up owning the whole thing.
- **Server actions in practice:** Colocating mutations with the components that trigger them is convenient, but it requires discipline about where validation and auth checks live.
- **Requirements from real users:** I'm working directly with people in the HTM community to gather requirements and iterate on features. What seems obvious from the outside often isn't how the sport actually works, so that feedback loop has shaped a lot of the design.

## Links

- [Website](https://htm-central.co.uk/)
