---
layout: ../../layouts/ProjectLayout.astro
author: NotNullDev
title: Your self made deployment and monitoring stack
date: 12.11.2022
slug: own-cd-pipeline
tags:
  - CI/CD
  - monitoring
  - Pocketbase
  - Go
  - NextJS
  - Docker
  - Docker compose
description: |
  Haven't you ever thought how to create your own simple CI/CD or monitoring stack?
  Is it really so hard that you should use 3rd party service?

---

## Introduction

Lets try to prepare plan for our application.
Our goals:
- web UI with statistics from docker containers (simple docker stats should be enough)
- execute command in the os from the ui
- webhook for git repository
- statistics from the os itself:
  os uptime, cpu usage, memory usage, disk usage, network usage
- log aggregation with filtering by container name


## Tools and technologies
1. NextJS - for our web UI
2. Pocketbase - as our backend for the server serving web ui
3. Go - as the agent - with Echo Framework
4. Docker - for our containers
5. Docker compose - for our containers orchestration

![haha](/logs.png)

