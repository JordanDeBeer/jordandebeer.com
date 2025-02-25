---
title: Layers and Primitives in Cloud Services
date: 2023-11-10
draft: true
---
Enterprise platform teams tend to build "services" on top of existing cloud platforms that abstract away certain decisions (networking, security, etc), bake-in enterprise best practices, and generally try to make it easier for internal teams to get started. Providing abstractions is a great way to scale, but you can't hide away the platform you are building on top of.

1: You should be building the lower-level abstractions first and building your higher level offerings on top.  
2: You should be thinking of your "as-a-Service" offering as a **product**.  
3: Instrumenting your product as a CI/CD Pipeline or Click-Ops.  


Say you want to build a platform offering based on Kubernetes to give your developer teams across your enterprise a place where they can run their containers. This makes a lot of sense! Developers in large enterprises typically don't want to think about CNIs or Service Meshes or cluster upgrades. In order to facilitate teams to move quickly, your offering brings value by making sure the hard decisions are abstracted away. The first thing you should build is a tool to rapidly stand up bare-bones clusters for consumption. Even if developers don't want raw Kubernetes you need to build this before you can build high level abstractions. You're going to be building it anyways, but doing it explicitly forces you to think as a _customer_ of your own product once you build the higher level of abstractions on top of it. You don't necessarily have to expose this lower-level offering, but I think you should and encourage you to. It really forces you to build the product more modularly and gives teams more opportunities to choose the right abstraction for their app.

Don't try to abstract away the cloud, provide value-add products/services on top of it.  
Do institute guard rails. In Google Cloud, this is custom org policies or OPA Gatekeeper if you are using KCC.  
Escape hatches / pierceable abstractions.
