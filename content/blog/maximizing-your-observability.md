---
path: /maximizing-your-observability
date: 2023-02-28T00:00:00.000Z
title: Maximizing Your Observability 
description: |
 Observability can do more than just tell us if our "stuff is working." It can also be used as a   tool to help us understand what features to build or bugs to work on, or even expose tell us the next thing we need to start tracking in our metrics.
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

Do you know if your code is working in production?

If you can't answer that question with a confident "Yes, it is" or "No, it's not," your software system isn't complete. 

In today's complex software landscape, we need to know whether our code is working correctly. And we need to know quickly to be able to have [3 or 4 nines (or more!) availability](https://en.wikipedia.org/wiki/High_availability#%22Nines%22).

And observability tools and techniques are how you get there. [Observability](https://dangoslen.me/blog/whats-the-point-to-observability-anyway/) has become the term used throughout the industry to encapsulate logs, captured errors, metrics, alerting, and other reporting metrics to _observe_ what our systems are doing.

But observability doesn't just stop at being a grab-bag of tools to trigger Pagerduty when something is wrong.

Instead, we can harness these techniques to help us build better software vs. constantly scrambling to put out fires. When used correctly, your observability dashboards and systems can tell you where to spend your resources for the next iteration, teach you how your system is _actually_ operating, and even be a place to test ideas quickly to influence the product roadmap.

Here are some ways Observability can serve your team:

## Show You Where to Optimize

Have you heard the quote from Donald Knuth about [premature optimization](https://wiki.c2.com/?PrematureOptimization)?

> premature optimization is the root of all evil

The idea is that we as engineers will often spend too much time trying to optimize parts of our systems that either don't matter or will have only a negligible impact on performance across the system to be worth the investment.

But how many times have you, as an engineer, been in a room or reading a doc about a new feature that "has to be super optimized?" I have—several times.

And what usually happens is the engineers (who are intelligent, capable, etc.) start doing a lot of _thinking_. They'll begin working their way up and down the system, attempting to spot the bottlenecks of the system and design solutions around them as they go.

Nothing is wrong with this exercise except that we don't know if those bottlenecks are real.

To be fair, sometimes we _do_ know where the bottlenecks are (based on some other data about the system). But often, we have no idea and are merely making educated guesses about how to optimize the system. 

And while making an educated guess is good, we can often build a more complex system than we need.

Instead of building the complex system first, we should aim to create a simple system that we can measure. From there, we can make small tweaks or perform experiments to learn where our system needs to be optimized. Using techniques like Service Level Agreements/Objectives (SLAs and SLOs), you can even decide when you _don't_ need to optimize anymore - which is very powerful.

## Teach You About the System

Have you ever written code that you were sure would do one thing, and then it did something very different in production? 

Maybe a race condition happened you didn't expect, or some of your assumptions (or even documented behaviors!) of a dependent system were incorrect. Or your working mental model was slightly wrong. I've experienced all of them.

In either case, you _want_ to understand these differences or edge cases as soon as possible. Unfortunately, many of these unexpected behaviors occur at scale, so running your code only on your laptop is likely insufficient. You need to run your code in a production-like (or even production!) environment and measure, log, track, etc., what your code does.

Logs and tracing are beneficial here. Your logs should tell a clear and compelling story of what happens when processing a request, making it easy to see what happenned. Traces will show you the exact path of your system when a request is encountered, showing you both bottlenecks and the full call-stack (and potentially the web of complexity in your architecture!).

At scale, you'll see if logs are now in a different order than you would expect or that suddenly, data expected (assumed?) to be present is missing. Or perhaps you start to notice that logs take a long time to show up in your tooling.. with odd gaps in between (hint: you might be writing _too_ many logs or have the wrong log configuration setup in this scenario).

Whatever issue or oddity you find, pay attention to it. Use anomalies to fuel you to learn about your system, the frameworks you use, the cluster you are running in, and even your observability tool. 

I've never regretted drilling down into a seemingly "one-off" anomaly because I always gain a deeper understanding of the system, yet I have regretted overlooking it.

## Help Your Build Your Product

This one might be the most surprising. How can metrics, traces, real-time user metrics, etc., help us build our products?

These tools help us build our products because they are the truest sense of what our users and systems are doing today. This insight can help us make decisions about where to invest our time and effort for the product.

A good example of this at Policygenius was during a revamp of our quoting process. We knew from our metrics that users wouldn't wait more than ninety seconds or so when requesting quotes. But we _also_ knew from our metrics that we could only improve the time for a single quote from a carrier by a small amount.

We used these two data points to inform our decision to work towards requesting quotes concurrently. We were able to build a model in which we could show customers the quotes that had completed within the ninety-second timeframe without bothering too much on the slowest carriers. _Note: Policygenius agents could still tell customers about those latent quotes later in the buying process, so we would still give customers all the final information they needed to make an educated decision._

Being able to request quotes concurrently was a big success for our product. While you could argue we should have done that to begin with, having real data that _showed_ us the limitations of our current product helped make the decision to do a re-design.

## Reveal Gaps You Need to Close

Lastly, good observability can help illuminate the things you _aren't_ tracking. 

Sure, you won't actually see those data points - but if you look at your observability enough, you will start to identify places you wish you had more information. These missing points will be especially pronounced if you receive customer reports about elevated errors, yet you never get alerted to those errors or see them in your charts. Something is happening that you aren't seeing it.

This gap happened to me way back at Bandwidth. We were working on building a new service for toll-free routing. Toll-free routing is complex, and we wanted to make sure we understood the inner workings of our service. We measured the response times, database times, etc., to see how things were looking (see item one in this post!).

After getting our initial app up and running, we started to notice in our load testing that our response times were higher than we anticipated. The database queries weren't taking that long, though, and some of our other metrics around actually processing the data from the database weren't taking too long either. We were baffled where the wait was. 

We decided to add some timers to a few more methods that we _thought_ were inconsequential. Lo and behold - our data (a JSON blob) was taking far too long to deserialize! Equipped with this metric, we were then able to perform additional experiments to get the deserialization time down so that we could meet our SLOs. _Note: If you can use tracing, it is **much** easier than we did here, and I highly recommend it!_

In this case, the initial data we had was insufficient to solve our problem. But by having a good baseline set of metrics, we could spot the gaps and learn what we needed to tackle next.

---

Of course, there are many other ways to maximize your observability tooling beyond what I've listed here. The quest for monitoring and observing our software never ends.

But I do know that by using some of these techniques, you can leverage and maximize what you have to make better decisions for you, your team, and your product.

Happy coding!


