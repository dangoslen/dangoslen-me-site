---
path: /the-point-to-observability
date: 2022-10-17T00:00:00.000Z
title: What's the Point to Observability Anyway
description: Observability is more than metrics and cool dashboards. It is a fundamental shift in how you write software.
keywords:
  - what is observability
  - what is observability in engineering
tags:
  - what's the point
  - software engineering
  - team driven development
  - observability
image: "../assets/markus-winkler-cS2eQHB7wE4-unsplash.jpeg"
---

<center>

!["investigation report"](../assets/markus-winkler-cS2eQHB7wE4-unsplash.jpeg)

<i> 

Photo by <a href="https://unsplash.com/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> on <a href="https://unsplash.com/s/photos/detective?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>

</center>

Last week my team had a huge win: we recovered quickly from a bug in production. 🎉

At first, that doesn't sound like a win. "You let a bug get through to production? How is that a win?!"

I agree that bugs in production aren't great. But let's put that aside for this article and focus on what happened once the bug made it into production. First, we detected the bug within minutes of our deployment and rolled back our deployment shortly after. Second, we responded quickly. All said it was ~15 minutes between when the bug was deployed and when the rollback took it away. Lastly, we had a fix ready the next morning and deployed it without issue. If you follow any of the thought leadership around DevOps and DORA metrics, you'd likely consider this a win too.

Our ability to detect and recover from this bug required a handful of best-practice investments we've made over the past several years, including automated testing, continuous deployments, and feature flagging. But there is another best practice and capability that I want to talk about today: observability.

Without good observability tooling, we would have never detected the bug, never been able to respond to it as a team, and we would have never been able to prove we recovered.

I want to talk today about why observability is so essential. When done correctly, I firmly believe that a focus on observability acts as a multiplier for a team's effectiveness and overall ability. I've seen it on several teams I've worked on, including my current one.

Let's see why.

## What is Observability?

Observability (or "olly" for short) is a new push in the software engineering industry that encompasses anything you use to observe your software—logging, metrics, alerting, and tracing all fall under this umbrella. 

These ideas used to be related but still distinct and houses in isolated services. For example, logging would happen via files on a mounted volume of a server and rotate once they reach a specific size or age. Metrics would happen via a different tool, and alerts might only occur on a handful of metrics like CPU, disk size, etc. While helpful in their own right, it would be difficult for developers or operators of software services to understand in one dashboard what an application was doing and how it had been performing.

With the move to cloud-native technologies and container images, in particular, we've seen new tools that allow applications to write logs, record metrics, and create alerts via an all-in-one platform with a seamless ability to move from logs, to traces, to metrics, etc. DataDog, Honeycomb, and New Relic are some of the most prominent players in this space.

Coupling these tools with the move towards DevOps teams (where developers operate their software as opposed to a separate team), there has been a shift for developers to think about observability for every feature and bug fix. It's a mindset shift. 

## A Mindset Shift

The mindset shift when considering observability is that developers start thinking about production more often. Instead of only writing unit tests - which should still happen!! - developers start thinking about
how they will know a feature or fix is working as expected. Developers ask, "How will we know this is working in production?" or, even better, "How will we know this _isn't_ working in production?"

These questions start helping developers write code that tells a clear narrative or story about what is happening in an application from the logs and metrics it emits. In the same way that clean code promotes [code that reads like a story](https://www.goodreads.com/quotes/7029841-clean-code-is-simple-and-direct-clean-code-reads-like#:~:text=Clean%20code%20reads%20like%20well,Grady%20Booch%20author%20of%20Object), our logs and metrics should do the same.

Telling a compelling story also includes having clear signals or thresholds for when an application _isn't_ working as expected (why the second question from earlier is so important). If the latency of an application should typically be < 100 ms and the latency over the last minute has been > 90 ms, that likely indicates a warning to the team, and they need to start paying attention. If the latency is > 100 ms, the team _must_ respond and actively understand what is happening to the application.

## What Observability Enables

Observability that tells a clear story enables incredible abilities for a software team. 

First, teams can build trustworthy monitors and alerts because the applications have clear success, warning, and error signals. No more "boy-who-cried-wolf." When a team can trust their monitoring and alerting _will_ alert them when something is wrong, it also means they can have a reasonable trust that things are working normally if no alerts are happening. This means developers don't need to be up-tight or anxious about their software running in production. This is exactly what allowed our team to detect and rollback a bug within ~15 minutes that I shared at the beginning of the article.

Secondly, the development team now has more ability to experiment and optimize their code. Tracing can quickly point out the longest single span within a trace, and if that span correlates (roughly) to method calls, the team can pinpoint the slowest method and begin to think about optimizing it. Even better, once the team has a handful of theories and ideas to implement an optimization, they can deploy an implementation and measure how well it works. 

I remember doing this for a feature a handful of years ago. We had built a parser to read a rather large decision tree structure into memory, and we noticed that parsing was taking longer than we anticipated. Instead of spending weeks trying to find the best way to optimize our code, we devised some ideas and deployed an implementation of each idea over a week, measuring each one with the same datasets. After examining the results, we realized that while we could make marginal improvements, none of our ideas would give us the boost we needed. We started to re-think, "If we can't improve the parser all that much, can we change the shape of the data? Can we cache anything? Can we ignore parts of the tree entirely?" We then did the same thing and, within another week, had built a new of re-structuring our data that made it faster for us to read and parse. Without clear metrics and tracing for that application, it would have been much harder to experiment and learn.

Lastly, good observability gives you confidence that was is happening in your application is what _is actually happening_ in your application. I know that sounds rudimentary, but you'd be surprised how many times an error occurs in a system, and there is no log, stack trace, or metrics indicating what happened. Teams will hypothesize for days about what could have gone wrong, but if you don't have a written record, it's all a guessing game. If you want to debug an issue properly, you need good observability.

---

To wrap up this post, I want to reinforce what the point of observability is. It isn't about numbers and dashboards; it's about your team's ability to understand and respond to how your software is acting in a production environment. Knowing what your software is doing and trusting that you'll be alerted when something is wrong gives you and your team confidence as you continue to build your product. It's a great feeling as an engineer.

Implementing good observability is longer than we can discuss in a single article, especially since every tool is different. At the outset, focus on learning what good logging looks like, study the different types of metrics (and when to use them), and read up on distributed tracing. Alerting can usually be a pretty fast follow once you learn the basics. 

Good observability practices usually aren't linear in their benefits, either. Unfortunately, it will take several rounds of building the "foundation" - integrating libraries, building useful dashboards, identifying the right alert criteria, etc. - before you'll feel your application is being monitored appropriately. 

But like a tree, the best time to start was twenty years ago; the next best time is today.

Happy coding!



