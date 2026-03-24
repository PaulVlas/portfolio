---
title: "Fairground OpenGL"
description: "A computer graphics assignment turned into a full virtual fairground: animated rides, Bezier-curve paths, fragment shaders, and both flying and first-person cameras."
date: "2020-10"
heroImage: "/src/assets/opengl.jpg"
tags: ["Java", "OpenGL", "Maven", "Shaders", "Bezier"]
---

## What I Built

A 3D fairground rendered in OpenGL (Java), built up through a series of increasingly complex exercises. By the end it had animated rides, a winding path made from cubic Bezier curves, textured surfaces, light poles with a toggleable night mode, and two camera modes (flying and first-person).

## What I Learned

- **OpenGL fundamentals:** Scene management, geometric object rendering, the matrix stack. The kind of low-level graphics knowledge that most frameworks hide from you.
- **Fragment shaders:** Writing GLSL to control surface properties directly. Much more flexible than fixed-function lighting.
- **Bezier curves in practice:** Implementing a texture-mapped path along a cubic Bezier curve required thinking carefully about parameterization and arc length.
- **Camera systems:** A flying camera and a first-person camera have surprisingly different implementations and feel very different to use.

## Abstract

This was a university computer graphics assignment structured around incremental exercises. Starting from a basic scene, each stage added new concepts: geometry, animation, lighting, shaders, and curve-based geometry. The end result is a small but reasonably complete virtual environment.

_Code available upon request_
