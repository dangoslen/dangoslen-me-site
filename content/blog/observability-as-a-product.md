---
path: /maximizing-your-observability
date: 2023-02-28T00:00:00.000Z
title: Maximizing Your Observability 
description: Observability can do more than just tell us if our "stuff is working." It can also be used as a tool to help us understand what features to build or bugs to work on, or even expose tell us the next thing we need to start tracking in our metrics.
keywords:
  - observability patterns
  - building software
  - maximizing your observability
tags:
  - observability
  - software engineering
image: "../assets/luke-chesser-JKUTrJ4vK00-unsplash.jpeg"
---

<center>

![Data Dashboard](../assets/luke-chesser-JKUTrJ4vK00-unsplash.jpeg)

<i> 

Photo by <a href="https://unsplash.com/@lukechesser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luke Chesser</a> on <a href="https://unsplash.com/photos/JKUTrJ4vK00?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

</i>


</center>

Do you know your code is working in production?

If you answered with anything besides a "Yes", your software system isn't complete. 

In today's complex software landscape, we need to know if our code is working properly or not. And we need to know quickly to be able to have [3 or 4 nines (or more!) availability](https://en.wikipedia.org/wiki/High_availability#%22Nines%22).

And observability tools and techniques are how you get there. [Observability]() has become the term used throughout the industry to encapsulate logs, captured errors, metrics, alerting, and other reporting metrics to _observe_ what our systems are doing.

But observability doesn't just stop at being a grabbag of tools to trigger Pagerduty when soemthing is wrong.

Instead, we can harness these techniques to help us build better software vs. constantly scrambling to put out fires. When used properly, your observability dashboards and systems can tell you where to spend your resources for the next iteration, teach you about how your system is _actually_ operating, and even be a place to test ideas quickly to influence the product itself.

Here on some ways observability to serve your team:

## Show You Where to Optimize

Have you heard the quote from Donald Knuth about [premature optimization](https://wiki.c2.com/?PrematureOptimization)?

> premature optimization is the root of all evil

The idea is that we as engineers will often spend too much time trying to optimize parts of our systems that either don't matter or will have such a neglibile impact of performance across the system to be worth the investment.

But how many times have you as an engineer been in a room or reading a doc about a new feature that "has to be really optimized?" I have. Several times.

And what usually happens is the engineers (who are smart, capable, etc.) start doing a lot of _thinking_. They'll start working their way up and down the system attempting to spot the bottlenecks of the system and design solutions around them as they go.

Nothing wrong with this exercise except for one thing: we don't know if those bottlenecks are real or not.

To be fair, sometimes we _do_ know where the bottleneck (based on some other data about the system). But often, we have no idea and we are just making educated guesses about how to optimize the system.

The end result? We often build a much more complex system than we actually needed.

Instead of building the complex system first, we should aim to build a simple system that we can measure. From there, we can make small tweaks or perform experiments to learn where out system needs to be optimized. Using techniques like Service Level Agreements/Objectives (SLAs and SLOs), you can even decide when you _don't_ need to optimize anymre - which is very powerful.

## Teach You About the System

Have you ever written code that you were pretty sure would do one thing, and then in production it did something a bit different? 

Maybe a race condition happenned you didn't expect or some of your assumptions (or even documented behaviors!) of a dependent system were incorrect. Or perhaps your working mental model was slightly wrong. I've experienced all of them.

In either case, you _want_ to understand what these differences or edge cases are as soon as possible. Unforutnately, many of these unexpected behaviors occur at scale, so running your code only on your laptop is likely not sufficient. You need to run your code in a production-like (or even production!) environment and measure, log, track, etc. what you code does.

Logs and tracing are particualry helpful here. Your logs should tell a clear and compelling story of what happens when processing a request. Traces should be able to show you the exact path of your system a request encountered. 

At scale, you'll start to see if logs are now in a different order than you would expect or that suddenly data expected (assumed?) to be present is now missing. Or perhaps you start to notice that logs take a long time to show up in your tooling.. with odd gaps in between (hint: you might be writing _too_ many logs or have the wrong log configuration setup in this scenario).

Whatever the issue or odditiy is pay attention to it. Us this as an opporutnity to learn about your system, the frameworks you use, the cluster you are running in and even your observability tool. I've never regretted drilling down into a seemingly "one-off" anomaly because I always gain a deeper understanding of the system; yet I have regretted overlooking it.

## Help Your Build Your Product

This one might be the most surprinsing. How can things like metrics, traces, real-time user metrics, etc. help us build our products?

These tools help us build our products because they are the truest sense of what our users and our systems are actually doing today. And this insight can help us make decisions about where to invest our time and effort for the product.

A good example of this at Policygenius was during a revamp of our quoting process. We knew from our metrics that users wouldn't wait much longer than about ninety seconds when requesting quotes. But we _also_ knew from our metrics that we couldn't get much faster in getting a single quote from a carrier.

We used these two data points to inform our decision to work towards requesting quotes concurrently. We were able to build a model in which we could show customers the quotes that had completed within the ninety second timeframe without bothering too much on the slowest carriers (note: Policygenius agents could still tell customers about those latent quotes later on in the buying process).

Being able to request quoes concurrently was a big success for our product. And while you could argue we should have done that to begin with, having real data that _showed_ us the limitations of our current product helped make the decision to do a re-design.

## Reveal Gaps You Need to Close

Lastly, good observability can help illuminate the things you _aren't_ tracking. 

Sure you won't actually see those data points - but if you look at your observability enough you will start to identify places you wish you had more information. This will be especially pronounced if you recieve reports from customers about elevated errors, but you never get alerted to those errors or never see them in your charts. Something is happenning that you aren't seeing.



---

I hope these are some great ways to help you learn how to go from merely responding to incidents to using your observability to guide your team's focus and even roadmap.

Happy coding!

---


