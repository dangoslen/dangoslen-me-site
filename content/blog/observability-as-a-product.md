---
path: /observability-is-more-than-alerting
date: 2023-02-28T00:00:00.000Z
title: Observability is More Than Alerting
description: Observability can do more than just tell us if our "stuff is working." It can also be used as a tool to help us understand what features to build or bugs to work on, or even expose tell us the next thing we need to start tracking in our metrics.
keywords:
  - observability patterns
  - building software
tags:
  - observability
  - software engineering
image: "../assets/natalie-pedigo-wJK9eTiEZHY-unsplash.jpeg"
---

<center>

![Silhouette of people at sunset on a mountain](../assets/natalie-pedigo-wJK9eTiEZHY-unsplash.jpeg)

<i> 

Photo by <a href="https://unsplash.com/@nataliepedigo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Natalie Pedigo</a> on <a href="https://unsplash.com/photos/wJK9eTiEZHY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  
</i>


</center>

Have you heard the quote from Donald Knuth about [premature optimization](https://wiki.c2.com/?PrematureOptimization)?

> premature optimization is the root of all evil

The idea is that we as engineers will often spend too much time trying to optimize parts of our systems that either don't matter or will have such a neglibile impact of performance across the system to be worth the investment.

But how many times have you as an engineer been in a room or reading a doc about a new feature that "has to be really optimized?" I have. Several times.

And what usually happens is the engineers (who are smart, capable, etc.) start doing a lot of _thinking_. They'll start working their way up and down the system attempting to spot the bottlenecks of the system and design solutions around them as they go.

Nothing wrong with this exercise except for one thing: we don't know if those bottlenecks are real or not.

To be fair, sometimes we _do_ know where the bottleneck (based on some other data about the system). But often, we have no idea and we are just making educated guesses about how to optimize the system.

The end result? We often build a much more complex system than we actually needed.

Today, I want to talk about how to leverage observability as a product more than just an alert system. I'll show you how you can build a simple system that has measured performance, how to inspect your observability to spot the next things you might need to measure or understand, and how to leverage all of the information to tell you what to focus on next.

Let's dive in.


### Build a Simple System

I remember several years ago my team was building this new system and we knew it had to be _fast_. We did what I described above and had put a system in place with a lot of complexity. It was hard to manage.

A new architect joined our team before building a new feature



### Measure, Question, Measure



### Listen to the Data



---

Accomplishing through others is a fundamental shift in how to work. You move from always volunteering to tackle complexity yourself toward offering it up for someone else. It means you hold yourself to a higher standard for others to follow. It means looking for ways to challenge and aid those around you. We should be pursuing the team's goals and not just our own.

This work shift is challenging, and it takes practice and repetition. Once you start practicing this skill, you'll find you can drive for change and improvement far better than if you attempt to attain it all through writing code faster or better.

I know that has been my experience anyway.

Happy coding!

---


