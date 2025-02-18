---
path: /whats-the-point-to-feature-flags
date: 2025-02-16T20:15:37
title: What's the Point to Feature Flags?
description: Why feature flags can help improve your velocity, reduce your risk, and help you build better software
keywords:
  - software development feature flags
  - how to use feature flags in software
  - feature flag impacts and best practices
  - are feature flags worth it?
tags:
  - what's the point
  - team-driven development
  - software engineering
image: "../assets/natalie-pedigo-wJK9eTiEZHY-unsplash.jpeg" 
---

<center>

![](../assets/vladislav-klapin-YeO44yVTl20-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@lemonvlad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vladislav Klapin</a> on <a href="https://unsplash.com/photos/assorted-flag-YeO44yVTl20?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

The first time I hit the proverbial "deploy button" as a software engineer, I was anything but calm[^1].

While we were confident in our tests, we always feared, "What if something goes wrong?" or "What if we missed a critical test case?" 

This first deployment went fine, but over the past decade, I've had my fair share of botched deployments or the need to rollback quickly. It's not a fun place to be in.

During that time, I've learned a lot about mitigating risks in deployments and the software development process in general. These techniques range from asking better questions during requirements gathering, focusing on incremental development, and utilizing tools like linters and static analysis.

One technique rises to the top for me: feature flags. Feature flags are a tried and true tactic that, when used with discipline, have massive benefits to your development process.

## Feature Flags

Feature flags are effectively a way to change the overall behavior of your software at runtime rather than by modifying the source code and restarting the process. They allow you to enable (or disable) a feature, change an algorithm strategy, and even modify common variables (what would have been environment variables) via a button click rather than deployment.

This means you have more control over what your software is doing in any runtime environment than if you had to make new commits and redeploy your application to change functionality. We'll dive a bit more into some of the use cases in a moment, but consider the implications of having such control, especially in relation to the story I shared above. 

What if you could deploy code with a new feature being "off" and turn it "on" when you were ready? And vice versa, how valuable would it be to disable a new feature causing problems vs. waiting on a deployment? 

These questions get at a core concept of feature flags: separating releases from deployments. While this idea can be a bit difficult to understand at first (e.g., "Isn't deploying code releasing that code?"), the key is really about taking on the proper perspective: are you seeing your product from the view of your users or the view of code running in an environment?

Your users don't often care what version of a codebase your product is running (especially in web applications). What they really care about is what new features or bug fixes are available in your product. Your users care about releases but don't care when you deploy new code. 

With all honesty, this idea was hard for me to grasp when I first encountered it[^2]. But it clicked when a former colleague of mine said aptly: 

> Deployments provide code to machines. Releases provide features to users.

---

## Top Uses Cases for Feature Flags

With that context, here are some top use cases for feature flags I've encountered.

### 1. Increase Velocity and Deployment Independence

One of the biggest pain points in software development is coordinating deployments. Whether you have a microservice architecture, a large monolith, or something in between, an engineer or team often has code to deploy but depends on another team's code _also_ being deployed into the same environment. 

Perhaps you have a new API to deploy, and you need to coordinate the deployment of the service hosting the new API and preventing the consuming services from using it. Maybe an instability was discovered in an already released feature to production, halting any new changes from being deployed until the issue is corrected.

When manual coordination is required to deploy software, you can't independently scale your engineering teams to be as effective as possible. Teams should be able to deploy their code on their preferred cadence without large release trains or complex change management rituals.

Feature flags can help solve this by letting teams deploy their code on their schedule. Engineers can wrap new features inside a flag and enable it only when other dependent components have been tested, deployed, and released. Using feature flags also allows a bad or buggy feature to be disabled without halting the rest of the deployment train (more on that in the next section).

Of course, feature flags won't remove all coordination for new features across your product or organization. Proper communication between teams for critical work and coordination for complicated migrations or changes will always be needed. Feature flags can help, though, in both reducing the coordination required and making the scope of that coordination easier (e.g., turn on a flag vs. merge a feature branch and tell everyone else to wait)

### 2. Reduce the Impact of Failures

Ever shipped a feature that worked fine locally but exploded in production? Yeah, me too.

Feature flags can help mitigate the impact of a bug or error as they give you an "instant rollback" capability that might have been difficult without them. Even if you did have push-button rollback capabilities (which you should, BTW), feature flag disablement can be applied much faster than a re-deployment.

Consider also the example from earlier: if you were to do a full rollback of a deployment, all of the _other_ code contained in that deployment would also be rolled back - including code unrelated to the error that caused the rollback! A full rollback effectively penalizes other teams and engineers from shipping their code and causes headaches and slowdowns in your releases.

Feature flags allow you to control only the features that are causing the error and let other parts of the system stay online as desired. Different teams can keep deploying their independent code and releasing their independent features as needed, avoiding the "stop all deployments" mandate.

Of course, it is possible that the disabled feature depended on other parts of the system, so no one gets a free lunch. You still need to be careful and architect systems with as minimal dependencies as possible and coordinate when necessary.

### 3. Enable Experimentation and Rapid Learning

Want to know if a new design improves conversion rates? Need to test different pricing models? Feature flags let you experiment with real users in real-time as they interact with your system. 

Many feature flag products include experimentation as a first-class feature themselves, allowing you to assign users to groups, gather data about interaction, and draw conclusions about whether a change to a design or even word choice had a positive effect. Companies like Netflix and Amazon rely heavily on feature toggles to refine their UX and optimize engagement (check out the [Netflix Tech Blog on A/B Testing](https://netflixtechblog.com/what-is-an-a-b-test-b08cc1b57962) for a great in-depth guide!).

Apart from engagement and conversion experiments, feature flags can also be useful when experimenting with other parts of the system as well. Attempts to improve response time or memory consumption within a critical algorithm or even garbage collectors can all benefit from experimenting and gaining data.

Suppose you have a hunch for an improved caching algorithm in one of your API services. Instead of having to change the algorithm and load test on your machine (which might require large datasets), you could implement the algorithm with your suggested improvements and wrap the change within a feature flag. You can record when you changed the algorithm and compare the metrics from the system before and after the change using real traffic (or traffic in a lower environment) to determine if that change was good or not before going to production. I've used this exact approach several times to supplement local load tests and have always found it valuable. 

Your ability to gain data and learn without a lot of fuss or coordination is extremely valuable to both your team and the business. There is also a small word of wisdom here: don't try to roll your own feature flags. You are better off paying a service to manage them, especially if experimentation is at the top of your mind.

## One Caution: Flags Can be Tricky to Manage

While all of this sounds great, one of the most challenging parts of feature flags is, well, the feature flags themselves. Feature flags are notorious for creating confusion in a code base over time and leading to questions like "Is this still a feature flag? Is it 'on' in production? "Can it be removed?"

You see, it can be easy to let feature flags live forever. Teams can forget to remove a feature flag once the feature is deemed stable and permanent enough, or it could even be that a flag was created and _never_ used, which only creates more confusion.

Managing feature flags effectively requires additional discipline and precision to a team's work. I've found it important that any effort or story involving a feature flag _not_ be marked "complete" until the feature is deemed stable enough to remove the flag entirely. 

---

Like everything else in my ["What's the point?" series](https://dangoslen.me/whats-the-point), feature flags are a tool with limitations and caveats. When used with discipline and intentionality, they can help keep your team ship code quickly and with better control when (not if) something goes wrong. 

More than that, feature flags can help with a mindset shift around decoupling deployments from releases. This mindset also goes further than just feature flags as well with ideas like [ring deployments](https://learn.microsoft.com/en-us/windows/deployment/update/create-deployment-plan), forked traffic, and even building up a feature within a codebase but not exposing its capabilities until the final step when you publish the API.

Whatever the strategy, learning to separate deploying code to machines and delivering features (or fixes) to users helps you focus on your users, which is always a good thing to focus on.

Happy coding!

[^1]: Our "deploy button" was manually copying `.dll` files from local machines to production! 😅 
[^2]: I didn't learn about feature flags until probably four years into my professional career, which is really a shame. 