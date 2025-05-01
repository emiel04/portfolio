---
title: "Baserow: An Open-Source Take on No-Code Databases | Howest Tech & Meet Recap"
description: "Recap of a Howest Tech and Meet session introducing the open-source no-code/low-code database platform, Baserow, and reflections on the potential of these tools."
pubDate: "Oct 22 2024"
heroImage: "/baserow.webp"
tags: ["Baserow", "No-Code", "Low-Code", "Open Source", "Database", "Howest"]
---

## Baserow Tech and Meet at Howest

Recently, I attended an insightful Tech and Meet session at Howest featuring a guest speaker who, interestingly enough, was a Howest alumnus from quite some time back! The focus of the evening was **Baserow**, an open-source tool carving its niche in the rapidly expanding world of no-code and low-code platforms.

## The Rise of No-Code/Low-Code

The speaker started by setting the stage, defining **no-code** as software design systems primarily aimed at non-technical users, while **low-code** platforms aim to accelerate development for those who *can* code.

These tools are booming for several reasons:

* They significantly **decrease the technical skill gap**, empowering more people to build applications or automate processes.
* For technical people, they offer a way to create **quick proofs-of-concepts** or internal tools without extensive development time.
* It's a massive market, reportedly valued at **$187 billion**, with popular examples including WordPress, Wix, Glide, and automation tools like n8n.

However, the speaker also highlighted common drawbacks found in many no-code/low-code solutions:

* **Scalability issues:** Many platforms struggle as complexity or user load increases.
* **Closed Source:** Limits customization, integration, and control.
* **API Access:** Often limited or comes at a high cost.
* **Data Ownership:** Using SaaS platforms can mean you don't truly own or control your data, leading to vendor lock-in.

## Introducing Baserow: An Open-Source Alternative

This is where **Baserow** ([https://baserow.io](https://baserow.io)) enters the picture. As an **open-source** platform, it immediately addresses some of the core concerns mentioned above, particularly around data ownership and flexibility.

### What is Baserow?

Baserow primarily focuses on the **database layer**, differentiating itself from tools focused purely on website design or complex automation workflows. Key aspects include:

* **Spreadsheet-like UI:** It provides a familiar and intuitive interface for structuring data, similar to tools like Airtable.
* **Structured Data:** It's built for creating robust, relational databases.
* **Self-Hosting:** You typically run your own Baserow instance using **Docker**, giving you full control over your environment and data.
* **Use Cases:** Users leverage Baserow to build:
    * Product roadmaps
    * CRM systems
    * Back-end databases for web or mobile applications
    * Centralized data repositories

### Technical Setup and Features

Getting started involves setting up an instance, often via Docker. Within Baserow:

* You organize work into **Workspaces**.
* Workspaces contain **Databases** and potentially other applications.
* Databases contain **Tables**, where you define fields and relationships.
* You can **link fields** across tables to create relational structures.
* **API Access:** A major plus is that Baserow automatically generates API documentation (like OpenAPI specs) for your databases, making it easy to integrate with other applications.
* **App Builder:** They have also introduced a no-code application builder, extending its capabilities beyond just the database.

While Baserow excels at the database and UI layer, complex automation is often handled by integrating with dedicated tools like **n8n** via REST API calls.

## Personal Reflection: Overcoming No-Code Skepticism

Initially, I admit I was skeptical. My perception of "no-code" was that it couldn't be genuinely useful for anything beyond the very basic. However, seeing the structured approach of Baserow, its focus on the database layer, its open-source nature, and the automatic API generation really impressed me.

It made me rethink the potential of these tools, not just for non-technical users, but also for developers looking for rapid backend setup or internal tool development. I was immediately brainstorming potential use cases. It was a valuable lesson in keeping an open mind about evolving technologies.

The evening wrapped up nicely with a chance to chat with peers and enjoy a drink in a relaxed setting.

![Networking after the talk.](/drankje.webp)

Baserow presents a compelling option in the no-code space, particularly for those who value data ownership, flexibility, and API accessibility. Definitely worth checking out if you're exploring database or internal tool solutions!