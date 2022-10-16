---
path: /the-point-to-observability
date: 2022-10-13T00:00:00.000Z
title: What's the Point to Observability Anyway
description: Observability is more than metrics and cool dashboards. It is a fundamental shift in how you write software.
tags:
  - what's the point
  - software engineering
  - collaboration
image: "../assets/francesco-gallarotti-ruQHpukrN7c-unsplash.jpeg"
---

<center>

!["growing sapling"](../assets/francesco-gallarotti-ruQHpukrN7c-unsplash.jpeg)

<i> 


</i>

</center>

Last week my team had a huge win: we recovered quickly from a bug in production. 🎉

At first that doesn't sound like a win. "You let a bug get through to production? How is that a win?!"

I agree that bugs in production aren't great. But let's put that aside for just a moment. We also detected the bug within minutes of our deployment, and rolled back our deployment shortly after. All said, it was ~15 minutes between the bug being deployed and the rollback taking it away. We had a fix ready the next morning and deployed it again without an issue. If you follow any of the thought leadership around DevOps and DORA metrics, you'd likely consider this a win too.

_Before moving on, we **do** take bugs seriously and aim to keep them out or production. We have a blame-less post-mortem lined up to discuss how to avoid this particular issue._

Our ability to detect and recover from this bug required a handful of best practice investments that we've made over the past year included automated testing, continuous deployments, and feature flagging. But there is another best practice and capability that I want to talk about today: observeability.

Without good observability tooling, we would have never detected the bug, never been able to response to it as a team, and we would have never been able to prove we recovered.

I want to talk today about why observability is so important. I firmly believe that a focus on observability acts as a multiplier for a team's effectiveness and overall abilitiy when done correctly. I've seen it on several team's I've worked on including my current one.

Let's see why.

## What is Observability?

Observability (or `olly` for short) is a new push in the software engineering industry that encompasses anything and everything you use to observe your software. Logging, metrics, alerting, and tracing, all fall under this umbrella. 

These ideas used to be related, but still distinct and houses in isolated services. For example, logging would happen via files on a mounted volume of a server and rotated once they reached a certain size or age. Metrics would happen via a different tool, and alerts might happen only only a handful of metrics like CPU, disk size, etc. While helpful in their own right, it would be difficult for developers or operators of a software service to understand in one single dashboard what an application was doing and how it had been performing.

With the move to cloud-native technologies and container images in particular, we've seen new tools that allow applications to write logs, metrics, and create alerts via an all-in-one platform with seamless ability to move from logs, to traces, to metrics, etc. DataDog, Honeycomb, and New Relic are some of the biggest players in this space.

Coupling these tools with the move towards DevOps teams (where developers run their own software as opposed to a separate team), there has been a shift for developers to think about observability for every feature and bugfix. It's a mindset shift. 

## A Mindset Shift

The mindset shift when considering observability is that developers start thinking about production more often. Instead of only writing unit tests - which should still happen!! - developers start thinking about
how they will know a feature of fix is working as expected. "How will we know this is working in production?" is a great question to ask or, an even better one, "How will we know this _isn't_ working in production?" start being asked.

These questions start helping developers write code in such a way that there is a clear narrative or story about what is happening in an application from the logs and metrics that application emits. In the same way that clean code promotes [code that reads like a story](https://www.goodreads.com/quotes/7029841-clean-code-is-simple-and-direct-clean-code-reads-like#:~:text=Clean%20code%20reads%20like%20well,Grady%20Booch%20author%20of%20Object), our logs and metrics should do the same.

Telling a compelling story when it comes to applications also includes having clear signals or thresholds for when an application _isn't_ working as expected (why the second question from earlier is so important). If the latency of an application should normally by < 100 ms and the latency over the past minute the latency has been > 90 ms, that likely indicates a warning to the team and they need to start paying attention. If the latency > 100 ms, the team _must_ respond and actively understand what is happening to the application.

## What Observability Enables

Observability that tells a clear story enables really incredible abilities for a software team. 

First, because the application(s) they build have clear success, warning, and error signals, teams can build trustworthy monitors and alerting. No more "boy-who-cried-wolf." When a team can trust their monitoring and alerting _will_ alert them when something is wrong, it also means they can have a reasonable trust that if no alerts are happening, things are working normally (unless, of course, the application wasn't properly instrumented or the alerting platform has a problem... but that might be a discussion for another time). This means developers don't need to be up-tight or anxious about their software running in production. This clear signaling is what allowed our team to detect and rollback a bug within ~15 minutes that I shared at the beginning of the article.

Secondly, the development team now has more ability to experiment and optimize their code. Tracing can easily point out the longest single span within a trace, and if that span correlates (roughly) to method calls, the team can pinpoint the slowest method and begin to think about how to optimize it. Even better, once the team has a handful of theories and ideas to implement an optimization, they can deploy an implementation and measure how well it works. 

I remember doing this for a feature a handful of years ago. We had built a parser to read a rather large decision tree structure into memory, and we noticed that parsing was taking longer than we anticipated. Instead of spending weeks trying to find the best way to optimize our code, we came up with some ideas and deployed each one over the course of a week, measuring each one with the same datasets. Upon examining the results, We realized that while we could make marginal improvements, none of them were going to give us the boost we needed. We started to re-think "If we can't improve the parser all that much, can we change the shape of the data? Can we cache anything? Can we ignore parts of the tree entirely?" We then did the same thing and within another week had built a new of re-structuring our data that made it faster for us to read and parse. If we hadn't had clear metrics and tracing for that application, it would have been much harder to experiment and learn.

Lastly, good observability gives you confidence that was is happenning in your application is what _is actually happenning_ in your application. I know that sounds rudiementary, but you'd be surprised how many times an error occurs in a system and there is no log, stacktrace, or metrics indicating what happenned. Teams will hypothisize as to what happenned for days, but if you don't have a written record, it's all a guessing game. If you want to be able to properly debug an issue, you need good observability.

---

To wrap up this post, I want to reinforce what the point of observability is. It isn't about numbers and dashboarsd. It's about your team's ability to understand and respond how your software is acting in a production environment. Being able to have u know what your software is doing and that you'll be alerted when something is wrong gives you and your team confidence as you continue to build your product. It's a great feeling as an engineer.

Implementing good observability is longer than we can discuss in a single article, especially since every tool is different. At the outset, focus on learning what good logging looks like, study the different types of metrics (and when to use them), and read-up on distributed tracing. Alerting can usually come as a pretty fast-follow once you learn the basics. 

Good observability practices usually aren't linear in their benefits either. It will, unforunately, take several rounds of building the "foundation" - integrating libraries, building useful dashboards, identifying the right alert criteria, etc. - before you'll feel your application is properly being monitored. 

But like a tree, the best time to start was twenty years ago; the next best time is today.

Happy coding!



