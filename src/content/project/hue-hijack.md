---
title: "Hue Hijack"
description: "Reverse-engineered the Philips Hue control protocol, found security vulnerabilities, and built a React + Express.js tool to simulate the attacks in a lab environment."
date: "2021-06"
heroImage: "/src/assets/hue-hijack.jpg"
tags: ["React", "MUI", "Express.js", "API", "Security"]
link: "https://github.com/RinseV/hue-hijack"
linkText: "Github"
---

## What I Built

The Philips Hue Bridge talks to your lights over a local network using an HTTP-based API, and it turns out it doesn't take much to abuse it. I reverse-engineered the control protocol, identified attack vectors, and built a web interface to simulate them in a controlled environment.

The frontend is React, the backend is Express.js acting as a proxy to the Bridge, and everything is documented in the report below.

## What I Learned

- How the Hue Bridge works internally: the pairing flow, API endpoints, and what's actually authenticated
- Why local-network IoT devices are hard to secure (convenience almost always wins over security)
- How to document a security finding clearly for both technical and non-technical readers

## Abstract

The Philips Hue lamp is one of the most popular smart home devices around, but most users have no idea what's happening on their local network when they change a light's color. This project looks at the protocol between the Hue app and the Bridge, identifies weaknesses, and proposes mitigations.

## Links

- [Github Repository](https://github.com/RinseV/hue-hijack)
- [Project Report](https://p4ul.nl/content/hue-hijack-report.pdf)
- [Project video](https://www.youtube.com/watch?v=9GdWuC-OoZU)
