---
path: /patience-in-software-engineering
date: 2024-12-08T19:50:21
title: Patience in Software Engineering
description: Why being willing to wait and avoiding hasty decisions leads to better software.
keywords:
  - patient software engineer
  - practice patience as an engineer
  - being a patient developer
tags:
  - team-driven development
  - career
  - software design
  - code reviews
image: "../assets/kwan-fung-y4iF0-lGh6g-unsplash.jpg" 
---

<center>

![](../assets/kwan-fung-y4iF0-lGh6g-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@kwan_fvng?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">kwan fung</a> on <a href="https://unsplash.com/photos/man-wearing-black-backpack-y4iF0-lGh6g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

Hosting bonfire nights at my home is one of my favorite things.

I set up a small fire pit (so not really a bonfire after all) when we first moved in many years ago and have since hosted probably close to two to three dozen of these nights. I'll crank up the fire, setup the chairs, and one-by-one people trickle in and out. In summer we'll have cold drinks in a cooler and in the winter warm cocoa or cider.

Hosting these events (along with a love for camping) has helped me get good at building fires. I might not be ready to tackle [Alone](https://dangoslen.me/blog/pick-the-right-tools/), but I'm a pretty decent fire builder.

And one key to building a great fire is patience. 

You can't build a fire by holding a small lighter or match to a huge log and expect it to be roaring a few minutes later. You also can't rush an already burning fire and dump everything all at once or you'll smoother it. 

No, to build a good fire, you need to practice setting up your wood, taking time to get the right kindling, watching where the hotspots are (or aren't) and adjusting accordingly. You'll build a fire _faster_ by being slow and patient rather than hopelessly trying to light a log with flint and steel.  

The software industry, sadly, has forgotten patience. We want to ship things _too_ quickly, make large assumptions about our users and their needs, and force paradigms that are poor at best and broken at worse.

We need to embrace one particular definition of being patient that I like, and it's this:

> not being hasty or impetuous

A codebase full of hasty decisions is a bad codebase indeed.

Here are some ways in which software engineers can practice patience in their craft (beyond being patience with one another, which is valuable in it's own right).

## Code Reviews

Many engineers see code reviews as a hassle, and therefore do anything they can to get it off their plate. And while I don't have anything against engineers working to reduce lead or cycle time of a code review, when the reviewer is unwilling to spend an appropriate amount of time reviewing, the entire process suffers. Code will rot over time, incorrect suggestions or claims will be made, and the opportunity for [learning is diminished](https://dangoslen.me/blog/whats-the-point-to-code-reviews-anyway/). 

Speaking from personal experience here, anytime I've left comments on a pull request that were made hastily (without double-checking a function or looking up evidence), I've made an incorrect suggestions and had to eat my words later. Having the patience and discipline to double-check documentation or re-read always has a net positive effect.

It's true for the other side as well. When authors are too quick to ignore or scoff at a suggestion made by a team member, trust is broken, bitterness and brew, and the code is likely to decay. I'm not saying an author needs to accept every suggestion or even comment back on every item, but an author _should_ respond to the majority of comments and giving reasons why they are choosing to accept it or not. 

One last tip before moving on: avoid the common "I'll do it in another pull requests" excuse. If someone leaves good feedback on your code and it's reasonable to implement, why not do it now? I've seen far too many bugs make it to production because an engineer convinced another they would do something later, and because of fear of conflict it got approved, to find out the work never got done in the first place.

## Software Design

Rushed or hasty software design often has terrible long-term consequences. Ever had a "simple feature" to add to a system to find it surprisingly complicated to accomplish(like in [this hilarious sketch](https://www.youtube.com/watch?v=y8OnoxKotPQ))? It was likely caused by either a lack of domain knowledge or lack of patience in learning that domain before shipping (and likely a little bit of both). We create abstractions that don't match the real world, tightly couple concepts that should be separated, and or create [abstraction inversions](https://en.wikipedia.org/wiki/Abstraction_inversion) that leave you wondering "why?". 

The sad bit is that often we _think_ our push for getting these abstractions or ideas in as soon as possible will save time in the end. And look: I get the goal. Finding leverage through re-usable components and shared tooling will help your teams ship faster. 

The issue isn't the end goal, but the path taken to get there. Instead of [hasty abstractions](https://dangoslen.me/blog/why-simple-code-is-better-than-reusable-code/) or settling at the first concept that "works", practice patience and let the code teach you. Start with simple concepts, flexible components and allow the right components to emerge over time. You'll end up with a much better set of components taking this path than if you had accepted the first attempt.

A good way to think about this that has helped me is to think about how complexity happens. Complexity is really hard to remove, but really easy to add. By trying to defer adding complexity too soon, you likely save yourself the trouble of having to remove it later. To be fair, you'll never get it all right and still build too much complexity too soon. But better to have a few missteps than constantly having to fight your codebase.

---

These are just two areas in which I've seen patience overtime speed up the development process rather than slow it down. Being willing to slow down, thinking critically and carefully, and waiting before pushing an idea can help your code grow naturally vs. having to untangle a mess each time you need to implement something.

As the saying goes "Slow is smooth; smooth is fast."

Happy coding!

