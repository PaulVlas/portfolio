---
title: "TestING Advisor"
description: "A collaboration between ING and TU/e: an assessment tool that helps software teams evaluate their testing maturity against ING's internal model and get concrete advice on where to improve."
date: "2022-07"
heroImage: "/src/assets/testing-advisor.jpg"
tags: ["React", "MUI", "Nestjs", "Prisma", "SQL", "CI/CD", "Scrum", "Testing"]
---

## What I Built

A web platform where software teams can assess their testing practices against ING's Test Maturity Model (iTMM) and get targeted recommendations. I focused on the backend (NestJS + Prisma + PostgreSQL) and set up the full CI/CD pipeline.

## What I Learned

- **CI/CD at team scale:** Setting up a pipeline for a larger group means thinking about more than just builds. I added static analysis (DeepScan), automatic dependency updates (Renovate), and coverage tracking (Codecov + GitHub Actions).
- **Formal documentation:** First time writing things like an Acceptance Test Plan and a User Requirements Document. More useful than I expected.
- **Code coverage discipline:** We kept coverage above 80% throughout. It caught real bugs that would have slipped through otherwise.
- **Scrum in a large group:** Daily standups and structured code reviews kept the team aligned, but also slowed things down in ways that were instructive.

## Abstract

The TestING Advisor is built on ING's existing Test Maturity Model, giving teams a structured way to see where they stand and what to work on next. The frontend is React; the backend is NestJS with Prisma for database access.

As the most experienced person on the team with the tech stack, I spent a lot of time reviewing frontend PRs and helping others get unstuck, which turned out to be as valuable as the technical work itself.
