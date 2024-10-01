---
path: /inspection-iteration-and-observability
date: 2024-09-29T12:57:08
title: "Inspection, Iteration, and Observability: Three Components for Building Excellent Systems"
description: "No software challenge is unsolvable with these three behaviors"
keywords:
  - iterative development
  - inspection in software development
  - building high-quality software
tags:
  - iterative development
  - observability
  - software-development lifecycle
image: "../assets/tim-mossholder-P59xkC9zLIE-unsplash.jpg" 
---

<center>

![](../assets/tim-mossholder-P59xkC9zLIE-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@timmossholder?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tim Mossholder</a> on <a href="https://unsplash.com/photos/man-in-grey-t-shirt-holding-white-ceramic-plate-P59xkC9zLIE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

If you're a frequent reader of this blog and newsletter, you know I'm a big advocate for two core components for building software:

* [Iterative development](https://dangoslen.me/tags/iterative-development) (constant refactoring, focused deliverables, learning as we go, etc.)
* [Observability](https://dangoslen.me/tags/observability) (define metrics upfront, measure and experiment, signals for success and not just failure, etc.)

I'm a firm believer that by constantly making small changes to our system and seeing the results of those changes within the system through observability, we will build better software over time.

A recent [Tweet/post](https://x.com/rauchg/status/1837210083262091343?t=mKVZAvjEit_L-_s-SIPmGQ&s=31) on X (can we still call these Tweets?) from [Guillermo Rauch](https://x.com/rauchg) summed this up rather well

> Iteration velocity and observability solve all known software engineering problems. No challenge too great, no bug too difficult, when you can ship fast and get visibility.

However, a topic I haven't touched on very much, though it is equally important, is testing.

I'm not going to discuss unit vs. integration tests here, the perils of over-mocking your tests, or whether TDD is the way to go. Those ideas are a dime a dozen.

I'm more concerned about the mindset of testing and how you approach an important design or strategic decision in your software.

## Testing More Than Just Code

When we talk about testing in software, we always jump to tests that focus on the correctness of our code. But there are many other forms of testing and many other artifacts that we need to test.

For example, do we ever test our architecture or design? Or do we copy what everyone else is doing from the internet because "reasons"? Testing, in this case, isn't focused so much on the system's logical correctness but on its ability to scale or meet the changing demands of the business use case. Pressure testing is often the term used for this behavior.

Another example from [Will Larson](https://www.linkedin.com/feed/update/urn:li:activity:7245070655853862913/) goes one level higher. He recommends testing your strategy before going into much further detail about design or implementation details. 

The idea is: Can you quickly try something, learn from it, and have data to inform whether the strategy itself is sound? It sounds a lot like iterative development, doesn't it?

I liked his example from the article:

> A service migration might attempt migrating both a simple component (to test migration tooling) and a highly complex component (to test integration complexity) before moving to a broader rollout.

While this feels like a no-brainer situation, it is all too familiar for engineers to write large proposals or make sweeping statements about "a better way" without actually trying and proving a strategy (I'll share a short anecdote on this exact topic later on). By taking a step back and testing the proposed strategy in a simple and then more complex scenario, the driver of the strategy can quickly validate whether it's sound, lacks proper details, or is a non-starter.

## Inspecting vs. Testing

Another way to think about this idea is to step back from the testing mindset altogether. I prefer thinking about this behavior as inspecting rather than testing.

I prefer this term because it maps a bit more cleanly to other industries. You might have a home inspector who is responsible for verifying your home is safe to live in. We rely on inspectors for restaurant quality and cleanliness to let us know if it is safe or risky to eat at a particular establishment.

In each case, we ask an expert (who has passed a series of tests to assert their credibility) to tell us if the home or restaurant is up to par. These inspectors are often really good at knowing when and where to investigate further on a detail or observation they make and when not to.

I also like this idea in regards to software design or strategy because inspections are generally lighter weight than a comprehensive test suite. When talking about testing code, we tend to think about test completeness via metrics such as code coverage or test coverage, taking care that each critical component has an enumerated test case.

If this were true for a home inspection, it would take a very long time. An inspector would turn into a tester, tearing about walls to verify pipe measurements or electrical connections and applying selective loads to every inch of the floor to ensure every test passed.

Since this is extremely costly (and would require re-building components of the home), inspectors rely on their proven knowledge to identify _risks_ that are completely and obviously out of code or simply identify areas warranting further investigation. _I'm simplifying all of this a bit, but I think the idea still stands_.

## Inspection, Iteration, and Observability

Once an inspector issues their report, they often return to inspect any changes made based on the issues identified. This creates a feedback loop in which important issues can be prioritized, and small or inconsequential issues can be ignored. 

In returning back to the software world, notice the parrellels of the inspection process and how writing great software can work.

* We design some components or parts of a software system to meet a business need 
* We inspect that design through prototyping and relying on our expertise of where to dig deeper
* We implement a portion of these components, instrumenting them with observable metrics, logs, etc.
* We review the Observability, prioritizing fixes or improvements that need to be made
* Iterate 

The "testing" at the code level (or even system level) still happens, of course. We need to validate and verify our code before releasing to production. This condensed version of a software development lifecycle focuses on the higher-level design and strategy is what building great software requires. 

For this cycle to work, you need all three core components: inspection, iteration, and observability. Without inspecting your software design/strategy, you can easily fall through trapdoors. If you don't have good observability, you can't inspect much beyond words on a document or the code itself. And if you can't iterate fast enough, a single issue in your inspection could derail the entire project.

## Neglecting to Inspect
So what happens if you fail to inspect a strategy or big design decision? You get trapped.

To illustrate, I'll share a short story. 

Our team at the time was starting to really embrace micro-services and was running into a common problem with them: everyone was writing the same HTTP client calls over and over. We wanted to try using one of the various client code generator tools from our OpenAPI specs and see how it went. We wired one up, took a look, and thought "Seems possible." So far so good.

However, one engineer decided that we should mandate _all_ services generate these clients after seeing the first one wired up. They wrote all these docs on how to do it, pushed teams to write them, and hailed it as a big success when we had most services "complete" with a generated client.

The problem? We ran so fast that no one actually _used_ it before we built on these generated clients, and they were really ugly (and confusing) to use. We only realized this _after_ we had mandated everyone build clients, so we used them everywhere in the code. This means that teams are unwilling (or don't have the time) to re-generate these clients with the new configuration since it would require updating every client call as well 😔

If we had been more patient (and actually _tested_ or _inspected_ the resulting client and how it "felt" to use it (observation), we could have easily re-generated them with the correct configuration (iteration). Now, we have a mess where no one wants to use them at all.

---

All this to say, I agree with the post from [Guillermo](https://x.com/rauchg) earlier: "No challenge is too big" when you apply these three behaviors in your software development lifecycle. 

Inspect early and often.

Make sure you can (and do!) observe your software.

Iterate frequently.

Happy coding!

