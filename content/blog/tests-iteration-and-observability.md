---
path: /tests-iteration-and-observability
date: 2024-09-29T12:57:08
title: "Inspection, Iteration, and Observability: Three Components for Building Excellent Systems"
description: 
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

* Iterative development (constant refactoring, focused deliverables, learning as we go, etc.)
* and Observability (define metrics up front, measure and experiment, signals for success and not just failure, etc.)

I'm a firm believer that by making small changes all the time to our system and seeing the results within the system of those changes via observability we will build better software overtime.

A recent Tweet/post on X (can we still call these Tweets?) from [] summed this up rather well

> 

But a topic I haven't touched on recently is tangential but important, and that is testing.

I'm not going to talk about unit vs. integration tests here or the perils of over-mocking your tests, or even if TDD is the way to go. Those ideas are a dime a dozen.

I'm more concerned about the mindset of testing, and how you approach a decision in your software.

## Testing More Than Just Code

When we talk about testing in software, we always jump to tests that focus on the correctness of our code. But there are many other forms of testing and many other artifacts that we need to test.

For example, do we test our architecture or design for our systems? Or do we copy from the internet what everyone else is doing because "reasons"? Testing in this case isn't focused so much on the logical correctness of the system, but on it's ability to scale or meet changing demands of the business use case. Pressure testing is often the term used for this behavior.

Another example from [Will Larson]() is one-level higher. He recommends the idea of testing your strategy before going into much further detail about design or implementation details. The idea: can you quickly try something, learn from it, and have data to inform if the strategy itself is sound?

I liked his example from the article

> A service migration might attempt migrating both a simple component (to test migration tooling) and a highly complex component (to test integration complexity) before moving to a broader rollout.

While this feels like a no-brainer situation, it is all too common for engineers to write large proposals or make sweeping statements about "a better way" without actually trying and proving out a strategy (I'll share a short ancedote on this exact topic later on). By taking a step back and testing the proposed strategy in a simple and then more complex scenario the driver of the strategy can quickly validate their strategy is sound, is missing details, or is plainly a non-starter.

## Inspecting vs. Testing

Another way to think about this idea is to step back from the testing mindset altogether. I prefer thinking about this behavior as inspecting rather than testing.

I prefer this term because it maps a bit more cleanly to other industries. You might have a home inspector who is responsible for verifying your home is safe to live in. We rely on inspectors for restaurant quality and cleanliness to let us know if it is safe or risky to eat at a certain establishment.

In each case, we are asking an expert (who has passed a series of tests to assert their credibility) to tell us if the home or restaurants is up-to-par. These inspectors are often really good at knowing when and where to investigate further on a detail or observation they make, and when not to.

I also like this idea when it comes to software design or strategy because inspections are generally lighter weight than a comprehensive test suite. When talking about testing code, we like to think in regards to completeness through metrics such as code coverage or test coverage, taking care each critical component has an enumerated test case.

If this were true for a home, this would take a very long time. An inspector would turn into a tester, tearing about walls to verify pipe measurements or electrical connections, and applying selective loads to every inch of floor to ensure every test passes.

Since this is extremely costly (and would require re-building components of the home), inspectors rely on their proven knowledge to identify _risks_ that are completely and obviously out of code, or simply identify areas warranting further investigation. _I'm simplifying all of this a bit, but I think the idea still stands_.

## Inspection, Iteration, and Observability

Once an inspector issues their report, they will often return to inspect any changes made based on issues identified. This creates a feedback loop in which important issues can be priotized and small or inconsequntial issues can be ignored. 

In returning back to the software world, notice the parrellels of the inspection process and how writing great software can work.

* We design some components or parts of a software system to meet a business need 
* We inspect that design through prototyping and relying on our expertise of where to dig deeper
* We implement a portion of these components, instrumenting them with observable metrics, logs, etc.
* We review the observability, priotizing fixes or improvements that need to be made
* Iterate 

The "testing" at the code level (or even system level) still happens, of course. We need to validate and verify our code before releasing to production. This condensed version of a software development lifecycle focuses on the higher-level design and strategy is what building great software requires. 

In order for this cycle to work you need all three core components: inspection, iteration, and observabilty. Without inspecting your software design/strategy, you can easily fall through trapdoors. If you don't have observability, you can't inspect much beyond words on a document or the code itself. And if you can't iterate fast enough, a single issue in your inspection could derail the entire project.

---

All this to say, I agree with the post from [] earlier: "no challenge is too big" when you apply these three beahviors in your software development lifecycle. 

Happy coding!

