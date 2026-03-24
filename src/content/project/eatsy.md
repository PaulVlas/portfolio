---
title: "Eatsy"
description: "An Android app paired with an Arduino to help children with spastic cerebral palsy practice independent eating, using Bluetooth and NFC to bridge the hardware and software."
date: "2020-10"
heroImage: "/src/assets/eatsy.jpg"
tags: ["Android", "Java", "Kotlin", "Bluetooth", "Arduino", "NFC", "Scrum"]
link: "https://youtu.be/nEICsZwfDBY"
linkText: "Video"
---

## What I Built

A game where children with spastic cerebral palsy practice eating movements using a spoon fitted with an NFC chip. The Arduino detects which chip is near the scanner and reports back to an Android app over Bluetooth, which tracks progress and keeps kids engaged.

The hardware side was an Arduino with an NFC reader. The software side was a native Android app (Java/Kotlin) that handled the Bluetooth connection and the game logic.

## What I Learned

- **Android + Bluetooth:** Pairing and maintaining a Bluetooth connection between a phone and a microcontroller has more edge cases than you'd expect: connection drops, re-pairing flows, latency.
- **Arduino + NFC:** Wiring up and programming an NFC scanner wasn't something I'd done before. Getting reliable reads from specific chips took some trial and error.
- **Building for real users:** Designing for children with motor difficulties forced me to think about interaction differently. Things that seem obviously usable aren't.
- **Scrum in practice:** Daily standups and sprint reviews with a dedicated scrum master. Slower than just hacking, but the structure helped with a team of mixed experience levels.

## Abstract

Assistive technology for children with spastic cerebral palsy is often expensive, clinical, and not very engaging. This project built something that feels like a game while serving a real therapeutic purpose: practicing the motor movements involved in eating independently.

## Links

- [Project Report](https://p4ul.nl/content/eatsy-report.pdf)
- [Project video](https://youtu.be/nEICsZwfDBY)
