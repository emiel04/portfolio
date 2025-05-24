---
title: "How I Made This Site"
description: "A quick breakdown of the tools and process behind this site, from using Astro and GSAP to deploying updates automatically via Cloudflare Pages."
pubDate: "2025-05-24"
heroImage: "/astro.webp"
tags: [
"Astro",
"GSAP",
"Cloudflare Pages",
"Static Site",
"Blogging",
"Web Development",
"Markdown",
"Personal Project"
]
---

## Behind the Scenes: Building This Blog Site

After writing a few blog posts now, I figured it might be helpful to write a post about this blog itself, how it was built, what tools I used and how easy it is to add new content.

Spoiler: it’s not a complicated setup, and that’s exactly the point.

## The tech stack: Astro + GSAP + Markdown

The site runs on <a href="https://astro.build" target="_blank" rel="noopener noreferrer">Astro</a>, a modern static site generator that focuses on performance and minimal client-side JavaScript. I chose Astro because it’s lightweight, fast, and really developer-friendly.


### Astro for structure

Astro handles the whole site structure: layouts, routing, SEO tags and more. For the blogs, it reads my markdown files from the `src/content/blog` folder where each blog post is just a **Markdown** file with some extra metadata at the top (title, description, date, tags, etc.). 

Once the file is there, Astro automatically adds it to the blog listings. I don’t have to touch a line of layout or routing code. Just write, save, push. It’s fast, predictable, and efficient.

### GSAP for Animation

To bring things to life a little bit, I added some subtle animations using <a href="https://gsap.com" target="_blank" rel="noopener noreferrer">GSAP</a>. For example:
- Fade-ins on scroll
- Smooth scrolling when clicking navigation links
- Animated back button on blog posts

GSAP lets me add smooth, polished animations without cluttering my code or relying on heavy libraries.

## Writing new posts: just Markdown

The best part? Writing a new blog post is as easy as creating a `.md` file with some metadata and Markdown content. That’s it.

Here's what the top of a new post might look like:
```markdown
---
title: "My new post"
description: "What it's about"
pubDate: "2025-05-24"
heroImage: "/cover-image.webp"
tags: ["Tag1", "Tag2"]
---

## My content
```

Then I just write the content like this, using regular Markdown syntax. No CMS, no database, no weird text editors. Everything stays in version control, which makes managing the content feel clean and solid.

## Deployment: GitHub + Cloudflare Pages
Once the post is written, I commit and push it to the GitHub repository. That’s it. No deployment steps.

The site is hosted on <a href="https://pages.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare Pages</a>, which is automatically hooked into GitHub. Every push triggers a build and deploys the updated site, completely for **free**. It even handles CDN caching, so performance is great worldwide.

## No stack is perfect

As much as I love this stack, it's not perfect. A couple of drawbacks:

- **No live editor or CMS**: Everything is done in code. That's fine for me, but for less technical people it would be harder to update the site.
- **Custom features require more work**: while Astro does have useful plugins for common tasks and integrations, unlike platforms like WordPress with vast ready-made plugin ecosystems, adding advanced or dynamic features often means building or integrating functionality yourself. This keeps the site lightweight but can add upfront effort.
- **Static nature limits dynamic features**: real-time interactions like comments, user accounts, or personalized content require external services or more complex setups

None of these are deal-breakers, just things to keep in mind. For a personal site or blog, they’re totally manageable.

## Final thoughts

I didn’t want a bloated setup or something that would become a chore to maintain. This stack gives me:

- **Full control** over layout, content, and design
- **Smooth animations** with minimal effort
- **Simplicity** when writing new blog posts
- **No maintenance headaches** thanks to automatic deployment of static files
- **Free hosting** with excellent performance

I briefly considered using something like WordPress, but that felt way more complex (and less fun) for what I needed. Astro just made sense.

So if you're thinking about making your own site or blog, I highly recommend trying Astro and Cloudflare Pages.  It hits that sweet spot between simplicity, flexibility, and developer happiness.

