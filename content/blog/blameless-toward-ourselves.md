---
path: /blameless-toward-ourselves
date: 2024-08-19T20:06:00
title: Blameless Toward Ourselves
description: We have to extend a blameless culture not just to others, but towards ourselves.
keywords:
  - blameless culture software
  - psychological safety software
  - don't blame yourself
tags:
  - career
  - team-driven development
image: "../assets/piotr-chrobot-M0WbGFRTXqU-unsplash.jpg" 
---

<center>

![](../assets/piotr-chrobot-M0WbGFRTXqU-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@chrumo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Piotr Chrobot</a> on <a href="https://unsplash.com/photos/red-fire-extinguisher-on-green-wall-M0WbGFRTXqU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

Blamelessness has been a big focus amongst engineering organizations for a few years (at least from my view). From books to blogs (including [my own articles](https://dangoslen.me/blog/whats-the-point-of-blameless-postmortems/)) and even whole [software products](https://www.blameless.com/), we've seen a rise towards engineering teams trying to create a psychologically safe environment where failure leads to learning instead of firing.

But in this (I think healthy) push for such an environment, one relationship within a blameless culture is often overlooked:

The one you have with yourself.

## The Hardest Person Not to Blame

I know this because I am not so good at being blameless toward myself when code or a system I worked on breaks. 

Just this past week, I returned from vacation to see a thread about an issue in one of our services. Something was causing authentication requests to take way too long. I scrolled through the thread to catch up on the issue. 

After a few messages, it was clear: something was taking far too long in some code I had written. My face turned white as I realized my code had nearly caused a production outage!

My team was great and had already devised a much better solution by the time I logged back on from my break. I was grateful to see they had identified and rectified the situation so quickly. Crisis averted.

But I was still bummed. I was disappointed, almost to the point of shame. Every chance I got, I kept apologizing repeatedly for my mistake. I was trying to practice extreme ownership, but I had shifted from being accountable to self-deprecating.

## Accepting Our Errors

A former colleague of mine, James Socol, writes about this [tendency to cast blame on yourself](https://www.coffeeonthekeyboard.com/advanced-blamelessness-is-owning-mistakes-without-fear/.) saying

> It's hard to accept that we make mistakes—which we do, because we're human, at a fairly predictable rate. It's even harder to accept that we do, and we will continue to. 

We would all like to think we can get away without ever making a coding mistake or other errors in our daily work. But the truth is that we can't avoid making them.

The key, then, isn't to try harder, nor is it to accept complete failures. 

Instead, we have to think differently: how can we create systems and processes that can overcome our propensity for error? How can we build the correct checks and balances into our development lifecycle? As James puts it:

> Once we can accept that, however, it becomes obvious that we need to build systems—software, processes, whatever—that assume operator errors will happen

## Blame, Fault, and Responsibility

James' perspective helps us reorient what we mean when we talk about blamelessness and fault. It isn't about finding out who made the mistake but what gap in the system allowed it to be made. 

It also helps reframe fault. We can think of fault as "whose fault is this?" or "a fault in the system." We aren't looking for someone to blame or someone to pin fault on; we are looking for errors in the system that collectively resulted in a larger failure. 

This reframing also helps when it comes to addressing a failure: how do we fix it? 

We need to take responsibility, yes, but not necessarily for what went wrong. We should be taking responsibility for rigorously finding out what went wrong in the system and for identifying action steps to prevent it as best we can in the future. This isn't a moment to be overly critical or blame oneself (like I was doing last week), but to be forward-looking and focus on learning. 

---

All this is to say: be kind to yourself. We all make mistakes and system-wide failures don't happen due to one persons' misstep. After we accept our part in an outage or issue, we also need to accept whatever happened _exclusively_ our fault and set our sights on learning and moving forward.

If a blameless culture is to begin with us, we must begin by being blameless toward ourselves, too.



