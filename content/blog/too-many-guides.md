---
path: /too-many-guides
date: 2024-04-14T15:01:58
title: "Too Many Guides"
description: There are many guides, but no path
keywords:
  - software engineering
  - software engineering documentation
  - software documentation
  - building better documentation
  - how-to write a how-to
tags:
  - team-driven development
  - documentation
image: "../assets/sean-benesh-tYhCTqhdx_8-unsplash.jpg" 
---

<center>

!["A man in a hard hat and harness on a trail"](../assets/sean-benesh-tYhCTqhdx_8-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@seanbenesh?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Sean Benesh</a> on <a href="https://unsplash.com/photos/a-person-wearing-a-helmet-and-harness-tYhCTqhdx_8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

Have you ever wanted to explore a new place? Maybe it's an international destination or a wilderness area you haven't had a chance to visit yet. 

In your preparation for this adventure, you'd likely investigate the possibility of hiring a guide. Maybe it's a tour guide to show you the secrets of a new city, a backpacking expert to safely take you through the backcountry, or a digital "guide" for a park you are visiting.

Whatever the case, guides can deliver a better experience wherever you go.

But there are cases when a guide doesn't make much sense.

Consider, for example, the [Appalachian Trail](https://www.nps.gov/appa/index.htm) (or AT for short). The AT is 2,100+ miles long. It stretches through towns, backcountry, and a section of wilderness 100 miles long.

Yet, no guide is needed. You can navigate the entire trail (a "thru hike") all on your own, and many people do it every year. 

The reason is there is a trail. There is a known path. 

It didn't start that way, of course. Many avid outdoorsmen and women have spent the past several decades making the trail what it is today. The result is that hikers can show up with the right supplies, a basic map, and some grit and chart the trail on their own.

Ok - why am I talking about trails and guides? 

The reason is that I think we often get this a bit backward in software. We rely too much on "guides" and neglect creating the trail, path, or road for other engineers coming along later.

Let me share why.

### A How-To Guide for Everything

Over the past decade of writing software, I've noticed many engineering groups or team have some form of wiki. These wikis range from good to great to just plain useless. 

A common theme across them is that each wiki usually has some form of "How-Tos" page. There are How-To guides to solve anything from common environment setup problems to on-call issues to processes within the team (how to submit a ticket, how to create a database, etc.). They are often written by an engineer who recently struggled with a problem and decided to "pay it forward" and leave a better site for a future engineer who encounters the same problem.

The intention here is good—great even—but it often produces more confusion than help in the long run.

I believe this happens for three core reasons:

1. The root cause is never addressed. If there is an issue with environment setup, can you solve the issue directly instead of writing a guide on how to get around it? If a routine task is complex enough to need a guide, can you simplify the task with code or automation?
2. Guides are often neglected. Because How-Tos are often sought out when we have a problem or need to perform a task, the guide is read infrequently. A good example is an onboarding guide. The onboarding guide is only used when, well, onboarding, so it falls out of date the moment a new hire completes it. If the environment or technology used within the team changes, the first thing a new hire does is "fix the onboarding guide," even though it will likely be wrong in a few months again
3. Guides are often identified to solve a _specific_ problem (How-to Fix "ERROR P022") or narrowly defined process (Hot-To get your SSH key setup). But what happens when an engineer faces a series of problems or needs to complete a set of steps to accomplish a single goal? In this case, the engineer is left to finish the first How-To only to find the next problem/step and then search for another guide, etc. 

The last reason of those three is what I want to focus on for the rest of this article. How can we help an engineer navigate the maze of documentation to accomplish their actual goal (setting up their machine, deploying a new service, building a codebase, etc.)? 

Before telling anyone how to get anywhere, we have to know where we are going and starting from.

We need a map.

<center>

!["An old map of the US"](../assets/ioann-mark-kuznietsov-gtCWBwbZNpM-unsplash.jpg)

<span class="credit">

Photo by <a href="https://unsplash.com/@mrrrk_smith?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ioann-Mark Kuznietsov</a> on <a href="https://unsplash.com/photos/country-map-on-brown-wooden-surface-gtCWBwbZNpM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</span>

</center>

<h3 style="margin-top: 0px;"> The Missing Map </h3>

Without a map, it's hard to understand where you are and where you want to go. 

A map helps us understand, literally, our place in the world. Living in North Carolina, I know I can drive east to the Atlantic in about three hours or west to the Blue Ridge Mtns in around four and a half hours. For the most part, maps (especially with modern GPS systems) make it easy for us to know where we are.

What about the other part: where do we want to go? In some ways, a map falls short here. Looking at a map alone can't help you figure out things like motivation or the benefits of going somewhere. But a map _can_ help you discover places you might have never known about. I've discovered many great trails, road-trip pit stops, and things to do by literally browsing Google Maps. 

The same should be true for our documentation: Can we use our documentation as a tool not just to answer a question but also to discover the next question we might have? Can we use our documentation to figure out where we want to go? It's too much to ask for this article, but it's a goal worth considering for the future.

Okay, so now we know where we are and where we want to go. This is where a map really shines. A map doesn't just contain points of interest, geographic landmarks, and addresses. It contains something so simple that you properly gloss over its significance.

A map contains the set of roads, trails, or ways to get from where you are to where you want to go. You can trace and explore the various paths to find your destination. With smartphones or GPS tools, you don't even need to figure out the directions yourself! By knowing the road systems or trails available, you can basically go anywhere you need to.

But here is the key: the roads or trails need to a) exist and b) be on the map. I remember driving around with my grandparents before any of this existed. They would have HUGE maps to help us get around, but the roads in the local towns would inevitably be different than what the published map indicated. We'd find ourselves pulling to the side of the road to ask someone for directions. These "mini-guides" would help us bridge the gap between what the map could tell us and what we couldn't know.

But what happens when the trail or road doesn't exist at all? Well - it might be time to build it.

### Building a Trail (or Path or Road)

Building a new trail is [no easy task](https://www.backpacker.com/stories/issues/new-trails/heres-what-it-takes-to-build-a-new-trail/). Once you've identified the need for a trail, it requires design, community support, and of course effort to bring it into reality.

Let's return to the AT for a moment. Building the AT took the vision of Benton MacKaye in 1921, volunteers from trail clubs across the south, federal support from the National Park Service, and lots of discussions about where the trail should go. It also requires efforts from a mini-army of volunteers to maintain the grades, shelters, and blazes to help hikers along their journey. 

These same things can be true for building what many call a [paved road](https://medium.com/codex/what-is-a-paved-path-b2294463a3a9) for your organization. A paved road is a way to streamline and (hopefully) automate much of the tedium involved in completing a common set of steps to move a piece of software from development to production. In order for such a road to exist, you need a good design, ensure it has the support and effort of the organization, and ensure it can be maintained into the future.

Beyond the paved road, though, we can apply pieces of trail-building to how we do documentation in general. Instead of writing one-off How-To guides, could you combine them into one "tail" that takes an engineer from start to finish of a goal? You don't even need to re-write the existing guides. You reorganize and link to them from a new structured post specific to the goal rather than the problem. Use tools like labels or tags to create home pages that update automatically with new related information. Create "guideposts" in existing guides that point to other related guides or link up to trails to help engineers navigate the knowledge base.

None of this is particularly easy, but I promise that these investments will benefit you and your team. And the best part: you can start today!

Stop writing guides and start building trails.

Happy coding!
