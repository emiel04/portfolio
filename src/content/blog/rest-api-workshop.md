---
title: "Giving a workshop about REST api's in my old school"
description: "A look back at the workshop I hosted for students at my former school, where we explored the basics of REST APIs through hands-on coding exercises in Replit."
pubDate: "Nov 7 2024"
heroImage: "/workshop-api.webp"
tags:
  [
    "Workshop",
    "High school",
    "Learning",
    "REST APIs",
    "Education",
    "Howest",
      "JavaScript",

  ]
---

Not long ago, I had the chance to return to my former school, this time, not as a student, but as a guest workshop host. Together with Timo, another student, we led a session introducing one of the core building blocks of web development: **REST APIs**.

I worked with a group of first-year students and designed a hands-on session using Replit, where they could code directly in the browser, no local setup needed. The focus was on teaching the core HTTP methods (GET, POST, PUT, DELETE) through practical, incremental exercises that simulated building a mini backend from scratch.


## Kicking Things Off: JavaScript & REST 101

We started the session with a short presentation to lay the groundwork. We covered the basics of JavaScript and explained what REST APIs are and why they matter. Since most students had only just been introduced to C#, jumping into JavaScript and HTTP concepts was a big step—but it set the stage for what came next.

## Why REST APIs?

Whether you're building a simple app, integrating with external services, or creating a frontend that talks to a backend, REST APIs are everywhere. They’re one of the first big concepts that really make you feel like you're building something real on the web.

Since many of the students had only just started learning basic C#, this topic was definitely ambitious. We knew it would be a stretch, but that was kind of the point. Sometimes, a crash course is the best way to spark curiosity.

## The Setup:

Our biggest technical constraint? No one had Node.js installed locally—and we didn’t want to waste time setting up environments.

So, we used **Replit**. It’s a browser-based coding platform that allowed every student to jump into a working JavaScript project without setup hassle. I prepared a **GitHub starter project** and showed them how to install a small Replit extension to test their APIs directly within the browser.

That way, they could start coding and testing endpoints in just a few clicks.


## The exercises

We only had **two class blocks** (about 50 minutes each), so we had to keep things focused. Here's how we structured the workshop:

The workshop followed a build-up structure:

1. **Start Simple:** Return your name at `/name` using a basic GET route.
2. **Work with Collections:** Return a list of names at `/names`.
3. **Add Interactivity:** Use POST to add names and DELETE to remove them.
4. **Introduce Objects:** Create a profile object (with name and age) and return it.

Each step built on the last, and each one was tied directly to an HTTP method (GET, POST, DELETE) to help make the purpose behind each clear.


## Reflections: A Lot in a Little Time

Looking back, we may have underestimated how much content we packed into those two hours. Teaching JavaScript, REST concepts, and hands-on Express code to students who were still new to programming was definitely a challenge, for us and for them.

Some students picked it up faster than others, but I really hope the slower-paced learners still took something meaningful away. Whether it was the first time they saw an API work or just the excitement of having something running in their browser, that spark of possibility is what we were aiming for.



## A New Perspective on Teaching

Going back to my old school and standing at the front of the classroom gave me a whole new respect for teachers. Trying to balance explanation, troubleshooting, and keeping things moving is *hard*. Doing it in a short, packed session is even harder.

But seeing students light up when their routes worked? That made it all worth it.


## Final Thoughts

If I did this again, I’d probably slow down a little and maybe simplify a few things, but I wouldn’t change the hands-on focus. In the end, building something yourself is the best way to learn how the web works.

It was a fun, challenging experience—and one I’m really glad I got to share with my old school.
