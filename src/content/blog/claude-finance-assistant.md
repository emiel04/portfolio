---
title: "I made Claude my (free) personal finance assistant"
description: "How I self-hosted Firefly III, connected my bank account for free through PSD2, and gave Claude safe access to write weekly and monthly budget reports for me."
pubDate: "2026-09-26"
heroImage: "/firefly-iii.webp"
tags:
  [
    "Firefly III",
    "Self-Hosting",
    "Personal Finance",
    "PSD2",
    "Claude",
    "MCP",
    "Coolify",
    "Docker",
    "Personal Project",
  ]
---

My girlfriend's bank app automatically puts all her spending into categories. You open the app and you see where your money went: groceries, eating out, shopping. My bank, Argenta, doesn't really do that. So I wanted something like it for myself: automatic budgeting reports, without ever exporting anything by hand.

I had two rules:

- **It has to be free.** I don't want to pay every month just to see my own spending.
- **No risks.** Nothing should be able to move my money, and I'm not giving an AI the login of my broker.

## How is this even free? PSD2

My first question was how an app can read my bank account without me exporting files. The answer is **PSD2**, an EU law for open banking. Banks in the EU have to let licensed apps read your account, if you give permission.

**Enable Banking** is one of those licensed providers, and it has a free "restricted production" mode for personal use. You get real bank data, but only for accounts you link yourself. Perfect for this.

For the app itself I had to choose between **Firefly III** and **Actual Budget**. Both are open source, you host them yourself, and both can work with Enable Banking. I went with Firefly III because the Enable Banking support in Actual Budget was still more experimental, and I thought Firefly III would work better with Claude later on.

When I set up Enable Banking, the first thing I asked was "is this readonly?". And yes, PSD2 access is read-only. To make a payment you still need itsme or the card reader, so this setup can't touch my money. One small surprise: only my current account showed up, because Argenta doesn't share savings accounts through PSD2.

DEGIRO only has unofficial APIs that need your login, so that one was out on purpose.

## Getting my bank data in

I already have a Ubuntu cloud server with **Coolify**, which I also use for game servers. Coolify has a template for Firefly III, so that part was quick. The importer and a small cron container I added to the Docker Compose file by hand.

Then came the first real problems, which felt a bit like boss fights.

**Boss 1:** When I picked "Belgium" in the importer, I got a 500 error. The logs said OpenSSL was unable to validate the key. The docs say to paste the private key on one line with `\n` in it, but that broke in Coolify. The fix was to paste only the base64 part of the key, without the first and last line. The importer adds those back by itself.

**Boss 2:** After that, the Enable Banking option was just missing. The importer thought it was running on plain HTTP, because it sits behind a proxy that handles HTTPS. The fix was one environment variable, `EXPECT_SECURE_URL=true`, which I found in a GitHub discussion.

## The 50 transaction wall

The first import worked, but it only brought in exactly **50 transactions**. The oldest one was from the middle of August.

At first I thought it was a known bug in Firefly, but I was already on the version with the fix. The logs showed that Enable Banking only gives about 50 transactions per fetch for Argenta. That's fine for daily updates, but not for my full history.

So the history had to be done by hand. But the Argenta Excel export has its own trap: it gives a maximum of 250 rows, and it keeps the newest ones. So I made around 10 exports, each with its own start and end date, and merged them into one CSV file. After fixing a few opening balances, and making sure money I send to DEGIRO counts as a transfer instead of spending, all my balances finally matched.

Luckily all of this only had to be done once. For new transactions, a small container now calls the importer every morning at 08:00 and fetches the last 7 days.

## Giving Claude the keys

Now the fun part: letting Claude read my finances with **MCP** (Model Context Protocol). There is a community MCP server called **fireflyiii-mcp**.

It didn't have many GitHub stars, so before connecting anything I had the code checked: only 2 dependencies, no audit findings, it only talks to my own Firefly, and it uses OAuth with PKCE without storing any tokens. I also pinned it to one version, so it can't change without me knowing.

I gave it access to everything. It can't touch my bank anyway, it can only read and organise the data in Firefly. There is one rule: it can never delete anything, and it has to ask me before big changes.

## Teaching it where my money goes

This was the part I wanted from the start. I went through the shops in my history one by one and decided where they belong. Most rules are simple, like "megekko" for online shopping, or the sandwich shop near work for work lunch. When I get frituur or something from the deli on Friday, that's also work lunch.

My favourite rule: Bon'ap under €6 is work lunch, €6 or more is groceries.

In the end I had 14 categories and 28 rules, applied to 8 years of history. About 64% of my spending now gets a category automatically, and most of the rest are payments to people.

A small quirk: Firefly removes spaces at the end of a keyword. I wanted "spar " with a space so it wouldn't match inside other words, but it became "spar", which also matches "despar". Luckily every match in my history was still correct.

And my biggest category since 2018? Online shopping. Not sure I wanted to know that.

## Weekly and monthly reports

Every Monday and on the 1st of each month, a scheduled task now writes a report and sends it to my phone and my e-mail.

Here I noticed that the data alone isn't enough. Some of my regular payments look strange if you don't know the story behind them, so the AI would flag them as "unexplained" every single month. So I added a bit of personal context to both reports, and now they only point out things that are actually new.

On top of that, the reports keep the sorting up to date. The weekly one suggests keywords for shops without a category, and the monthly one adds the obvious ones to the rules itself. So every month a bit more gets sorted automatically.

## The first real question

When everything was done, I asked my first real question: "which subscriptions do I have right now?"

Claude searched my transactions and found my phone subscription, a Spotify account I share with a friend, and... **its own Claude subscription**. The AI found itself in my bank data. Very meta.

## What I learned

- **PSD2 makes this free in the EU.** With Enable Banking and Firefly III you can sync your bank for €0, and it's read-only, so nothing can move your money.
- **Keep AI away from logins you care about.** DEGIRO is not connected, and there are no broker passwords anywhere in the setup.
- **Context matters more than data.** A payment means nothing until you know what it's for.
- **Most of the work is in the small problems.** The key format and the HTTPS detection were both one-line fixes, but finding them took an hour each.
- **Check community plugins before you give them your data.** Not many stars doesn't mean unsafe, but you have to look.

## Where it is now

The bank import runs every morning, and I get a weekly and monthly report without doing anything. The only manual part is updating my DEGIRO and savings balances once a month.

For a Friday evening project that costs €0 per month, I'm really happy with it. And I finally have automatic categories, just like my girlfriend's app!
