---
path: /five-barriers-to-a-great-developer-experience
date: 2024-01-16T00:00:00.000Z
title: Five Barriers to a Great Developer Experience
description: Whether it's quality or communication, these are five barriers that is keeping your team from having a great developer experience with your codebase.
keywords:
  - developer experience
  - building software teams
tags:
  - software engineering
  - developer experience
image: "../assets/raul-najera-qcA9xgvKkB8-unsplash.jpg"

---

<center>

![](../assets/raul-najera-qcA9xgvKkB8-unsplash.jpg)

<span class="credit">

Photo by <a href="https://unsplash.com/@reinf?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Raúl Nájera</a> on <a href="https://unsplash.com/photos/sidewalk-closed-signage-qcA9xgvKkB8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</span>
  
</center>

[Developer experience](https://dangoslen.me/blog/improving-the-developer-experience/) is something I've been focusing on recently. 

My new role at Vouch (we have [some open positions](https://www.vouch.us/careers) by the way!) has a greater focus on building tools/libraries to help empower other engineers to be effective. We want to make it easy and safe for every engineer to use common patterns across our services. As a coworker recently said, can we help engineers naturally fall into the pit of success?

As I've been focusing on this experience, I've noticed a few things that immediately get in the way of helping devs do that within a codebase. And some of them have less to do with code quality than you might think.

Today, I'm sharing my five obstacles to a great developer experience and a few ways to overcome them. 

Let's dive right in.

## Obstacle One: Troublesome Tests

It's hard to have a great experience in a codebase when tests are
* hard to write or maintain
* hard to run or take too long
* report unreliable results (the dreaded [flaky test](https://circleci.com/blog/reducing-flaky-test-failures/)))

In an ideal world, tests should be simple to write. The ease of your testing is often a good proxy for the quality of your code. Treat your test code like the rest of your code: avoid global scope if you can, stay away from deep inheritance, and prefer simplicity.

Tests should also be simple to run. Use your language's preferred convention (bundle exec rspec, npm test, make test) rather than a custom script. Tests should also run relatively quickly, and if you do have longer running tests, isolate them in a separate group or profile. 

If you find a test that sometimes fails unexpectedly, fix it immediately! There is something about flakey tests that causes them to multiply overnight. Flakey tests are bugs! Don't allow a real bug in production because of an unreliable test. 

Investing your tests is an investment I've never regretted in any codebase. And I promise - if you put in the effort, writing tests can actually be fun :) 

## Obstacle Two: Insufferable Setup.

Sadly, many codebases suffer from setup or environment rot. It's hard to have a great experience in a codebase when setup requires:
* manually configuring dependencies like a local database
* copy/pasting secrets across configurations
* installing what feels like an endless set of system libs - and all of them seem broken or outdated

If a developer has to go through these manual steps to set up their environment or maintain their environment, it is a headache; something is wrong. Either the setup needs to be simplified, or (more likely) it needs some more attention.

A developer should be able to set up a fresh machine within a morning and, ideally, set up a new repository within an hour. Teams should have nearly identical environments (barring preferential toolchains) that minimize drift and configuration agony. 

One comment on this from [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7150645369524088833?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7150645369524088833%2C7150660281625411584%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287150660281625411584%2Curn%3Ali%3Aactivity%3A7150645369524088833%29) was a two-command rule: if you can't set up the codebase to run in two commands, it's too many. I put this into the typical "three strikes; you're out" rule simply because three commands are still very few, and it's easy to remember (for me, at least).

It doesn't have to be so difficult, either. Our industry has created the tools to make all of this automated! From cloud dev environments and dev containers to secret management tools, a lot is available to improve this part of the developer experience.

It just takes some intentionality. 

## Obstacle Three: Lack of Ubiquitous Language

A third barrier to developer experience has less to do with code quality and more to do with communication. 

Our code often changes due to either learning more about a domain or developing a new feature to extend the domain. We need to create what Eric Evans calls "Ubiquitous Language" (from [Domain-Driven Design](https://www.goodreads.com/book/show/179133.Domain_Driven_Design)) about that domain.

And when we don't, it creates confusion.

A developer might read a technical design document or architecture diagram describing a service and the domain it is supposed to own. That dev goes to the code for that service and finds something entirely different from what they expected.

This idea isn't restricted to just documentation, either. The code needs to be consistent with itself around the core ideas from the domain. When it isn't, we find ourselves trying to piece together a puzzle without a picture to reference.

Work to define and continually refine your domain language as best you can. Embrace small refactors that bring clarity, not just functionality.

Over time, the improvements to how to talk about your code, what your code does, and your mental model will start to align. 

When this happens, you'll notice how much faster it is to get to root causes, understand feature requests, and what needs to change in the system for both.

## Obstacle Four: Neverending Nesting

Have you ever worked in a codebase that resembles one of the following?
* Functions that were hundreds of lines long with so many nested `ifs` they took up the whole screen
* Objects with four or five levels of other nested objects - all required in order to build the initial object
* Long inheritance chains where everything calls `super`, and you have to run up the whole chain to understand that `super` does nothing
* Layers and layers of delegates/wrappers that never tell what is actually happening because of the interface. You have to find some class that creates a delegate chain on app startup to find out

What is the common theme in all of these scenarios? Cognitive load and difficult code navigation. They also likely have very brittle interactions (more on that later). 

Deep nesting and inheritance are often signs that the abstractions are off somehow. Our abstractions should match our domain language and help hide/abstract details between modules and components. 

If you're a big fan of the delegate/wrapper and are thinking, "But the delegate pattern is an abstraction!" I agree. I use this pattern a lot myself.

But if you aren't careful, you can find yourself wrapping and re-wrapping delegates such that they feel like Russian dolls: where is the actual end? It often makes things more challenging to understand (TL;DR - use with caution ⚠️).

Avoid deep nesting and aim for small composable pieces instead.

## Obstacle Five: Sorrowful State Management

It's challenging to write code and build upon a codebase when every change has the risk of affecting the entire system.

This is what happens when our codeshares too much state
* We use incorrect scopes, leading to side effects in classes
* We don't encapsulate information – everything is public to everyone
* We mix data from actors, thereby making mutations almost unavoidable

A big lesson for me early on was to separate data and operations. Even better if you can make your data immutable. If your data must change, it has to change via an operation (function!), resulting in a new value. 

Additionally, do your best to keep as little state as possible within your application. Any state you do need, organize it and hide it from external classes as much as possible. External classes only get to access the internal state of a class via a method call.

What is incredible about code that is properly organized this way - using interfaces and methods to communicate rather than sharing state - is refactoring for performance becomes much easier. You can add caching, concurrency, etc. "behind the scenes" since all the callers know about is the API of the method call.

Keep state small and keep it private.

---

These are just a few of the common barriers I've seen to dev experience. There are many others (both general and domain-specific barriers), but I've never seen a codebase succeed that had one of the barriers listed above.

If you've been reading and are still wondering, "Why is developer experience so important anyway?" I'd summarize it this way:

> It's hard to build a product with a great user experience if the code supporting that product has a bad developer experience

In other words, our users' experience is directly correlated with our ability to respond and meet their needs. And we can't do that well if our developer experience makes it hard to do that. 

By making the developer experience an important aspect of our software development, we will inevitably be better positioned to build better software.

Happy coding!