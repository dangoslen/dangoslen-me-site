---
path: /building-advanced-software
date: 2025-06-01T19:58:03
title: "Building Advanced Software"
description: "Let's focus on building advanced systems rather than complex ones"
keywords:
  - advanced software
  - building advanced software
  - what is software complexity?
  - how to avoid software complexity
tags:
  - team-driven development
  - software design
image: "../assets/justin-wilkens-Cbk4iF5DbGg-unsplash.jpg" 
---

<center>

![](../assets/justin-wilkens-Cbk4iF5DbGg-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@jlwilkens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Justin Wilkens</a> on <a href="https://unsplash.com/photos/green-trees-on-hill-under-blue-sky-during-daytime-Cbk4iF5DbGg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

A complex system is not the same as a system that delivers advanced functionality.

Complexity within software refers to the characteristics of a software system and its ability to change over time. Meanwhile, functionality refers to the capabilities a software system exposes. 

Many believe these characteristics to be [orthogonal](https://en.wikipedia.org/wiki/Orthogonality#Computer_science), but I hope to convince you otherwise in this article.

In my experience, we often overlook this distinction more than we realize. I've seen engineers brag about how complex their system was as evidence of their skills or their team's capability. 

In reality, we should strive to reduce complexity in our systems as much as possible while allowing them to grow incrementally toward more advanced functionality.

## The Nature of Complexity

As John Ousterhout writes in [_A Philosophy of Software Design_](https://www.amazon.com/dp/1732102201), complexity is

> anything related to the structure of a system that makes it hard to work on the development of that system

He also notes that complexity is rarely tied to a single factor. Rather, it is the accumulation of many small factors that compound over time.

I've always thought of complexity growing much like how kudzu does. As an invasive species, kudzu can grow rapidly and extensively, covering trees, buildings, and even entire sections of forests. Once it has grown, it is often so thick the original structure is unrecognizable. Additionally, the vine will have become so entangled with the tree or structure that removing it alone is nearly impossible. 

This is why Ousterhout is ardent that teams adopt the zero-tolerance attitude toward writing complex software: once it starts, there is no going back.

Much of this is just a refresher to many engineers. What I want to point out in this article is how I've come to see the relationship between complexity and functionality.

## Focusing On Building Advanced Systems

One definition of advanced is "greatly developed beyond an initial stage." This definition perfectly describes what I mean when discussing the development of an advanced software system: developers [^1] will continually add, refine, and (hopefully) remove functionality as the system progresses towards becoming increasingly useful. 

Building an advanced system is often the combination of lots of hard work, experimentation, and learning from your users. It requires the proper balance of creating the right next thing while thinking about what could be built a year or two from now as well.

In this way, building an advanced system has an opposite time dynamic than a complex system. A complex system happens quickly and without intention, while an advanced system requires thoughtful tradeoffs and time.

Consider how the computer itself was developed. While we are in a period of extraordinary growth with the internet and AI, the device you are using to read this article is built on advancements spanning over 150 years of technology. 

## Advanced Systems Require Change 

As noted, building an advanced system won't happen overnight either. It will happen over time through rounds of rethinking and rebuilding.

So, what is the best way to enable your team to build such a system? Well, it hinges on your ability to rethink and rebuild that system. e.g., you want to develop a system with low complexity.

To consider it another way, a complex system has a low probability of evolving into an advanced system. [^2] 

We even see this, again, in how the computer was developed. Many systems reached a certain point but eventually had too many pitfalls and complexities that necessitated rethinking. Aren't you glad we aren't managing vacuum tubes?!

If your software product is already so complex that adding a simple feature requires coordinated deployments across four or five services, how do you expect to deliver more advanced capabilities over time on top of it? 

You'll likely find an interest in scraping the system and [rewriting it from scratch](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/) (again).

---

To quickly summarize, my hope in writing this article is to help you start finding new language to describe the systems you build every day. In an environment where software is naturally growing more interconnected and intertwined, the more we must focus on building understandable systems that we can understand and change over time.

Happy coding!

[^1]: I mean we are often called _developers_ after all.
[^2]: Or at least, without [constant heroics](https://dangoslen.me/blog/on-sustainable-software-development/).