---
path: /writing-software-is-like-growing-a-garden
date: 2021-04-20T13:00:00.000Z
title: Writing Software Is Like Growing a Garden
description: Gardens won't grow if neglected, and neither will your software.
tags:
  - software development lifecycle
  - programming
  - software engineering
---

![](../assets/gryffyn-m-BUYiKuAZw0w-unsplash.jpg "flowers reaching to the sun")

<center>

<i>

Photo by [gryffyn m](https://unsplash.com/@botanicalnature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/garden-lush?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
</i>

</center>

There are many - _many_ - analogies to writing software. 

Building a building. Creating a city. Trying to change the tires of a car while driving.

None are perfect, but they each help convey an idea about the complex work that is writing software. There are many factors to consider, an ever-changing set of requirements, and needs to be met. Plus, once you build software, you usually don't demo it and start over - even though sometimes that is the **only** thing you can do.

I want to add another analogy: growing a garden. 

## Gardening Newb

Full disclosure, I'm new to gardening. I don't have rows and rows of flowers of every color. I don't have planter boxes with fresh veggies surrounding my house. I'm still learning how to properly keep the grass in my yard and get the weeds out of where I want to have a garden. 

But I'm learning so much. And every time I am learning something new, I try to connect it to things I know already.

And as I was out weeding (and weeding, and weeding...), a thought struck me: I need to be weeding my code. Let me share some quick context first.

## Bugs, Weeds, and Technical Debt

Let me share some quick context first. We talk a lot about bugs and [technical debt](https://www.productplan.com/glossary/technical-debt/) in software. Bugs are anything with our code that is actively causing problems. No one would argue that we shouldn't address bugs; we should catch them as early as possible in the development process.

Technical debt, however, is different.  Many devs can't even agree on what we mean by technical debt. Some think technical debt is an intentional decision that operates as, well, debt: the team chooses to take on _debt_ that will be repaid later in order to finish something (usually a feature) sooner. A team might decide to ignore upgrading dependencies until a feature is complete, for example. Or they might choose to ignore an edge case that complicates code and tackle it later. In either case, technical debt here is a decision to get something done faster at the expense of doing it later when it might be more difficult to do.

Other teams use technical debt as "anything we need to fix that isn't a bug yet." Some teams might expand it to "whatever we want to work on that isn't product work." I've never liked these definitions of technical debt myself ([neither does Uncle Bob](https://sites.google.com/site/unclebobconsultingllc/a-mess-is-not-a-technical-debt)), but I've wrestled with what else to call it. What do you call something that grows on its own, can take over a space, and eventually can strangle whatever is around it?

Weeds. 

I made that connection after a few days of weeding like I was sharing above. "I need to be weeding my code," I thought. And so I started thinking of writing software as growing a garden.

## Software is a Garden

If software is a garden, then let's say that our features are the plants in our garden. Whether fresh veggies, flowers, or trees, we want them to grow strong and become strong. To do that, we need to care for it routinely. From time to time, we might prune them to help them grow, or we might remove them entirely because we have other plants we have decided would work better. This is akin to how we might manage features we build in our software. 

If not properly cared for, our plants will die. Plants might be eaten by bugs, strangled by weeds, or stomped on by animals. Or perhaps they simply didn't get enough water or sunlight.

Our software has all of the same problems. We have bugs that slowly eat away at our features and keep our customers away. We might have security vulnerabilities that we missed and have no fence to protect against an attacker totally taking over our system. We might forget to apply regular maintenance and monitoring to one day wake up to a failing system. Seemingly harmless hacks or duplicated code eventually grow to strangle our ability to create new features. Or worse, our messy code grows so big that we are afraid that we will inadvertently damage our features in the process if we change it.

## Software Engineers are Gardeners

If software is a garden, then software engineers are gardeners. A gardener must make sure the garden grows as they want. It is their responsibility to implement preventative measures to keep bugs away by spraying a pesticide. Fences might be installed to keep animals out. A gardener might create a daily schedule to make sure they water each plant, prune each plant, or till the soil with fertilizer. To deal with weeds, a gardener needs to go out and pull them up by the roots; simple cutting won't work. 

In our software, we need to have tests to make sure bugs aren't creeping into our software. We need to run regular security audits and update our dependencies to mitigate security risks. We need to make sure we monitor our software and make maintenance of our systems easy so that we aren't caught off guard by a system failure. We need to be rigorous to eliminate the weeds in our code that will eventually stifle our efforts to write new features, fix problems, and maintain our code over time.

![](../assets/ivan-aleksic-kw7gVHhc-cI-unsplash.jpeg "Weeds")

<center>

<i>

Photo by [Ivan Aleksic](https://unsplash.com/@ivalex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/weeds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  

</i>

</center>

## Debt vs. Weeds

I like to think of code weeds as different than technical debt. Like I mentioned earlier, technical debt is a decision made to finish a feature sooner, knowing full well that something will need to be repaid later. A weed is something that is inevitable. Weeds simply appear and grow without warning. No one plants a weed. No one wants them to grow. But they are unavoidable.

Every programmer with more than a few years of experience can identify with the following story. One day while coding, they come across a function or class that doesn't make sense. Perplexed, they think, "who wrote that, and why did they write it that way?" They open git blame and realize they were the author. 

I share that because most code will grow weeds. The best code I've ever written needed to be refactored later on. It isn't because the code was bad (that is another problem), but because most code overtime needs to adapt to the changing requirements and responsibilities of the system it powers. 

This is different than technical debt. This is part of writing good software. You have to pull up the weeds.

---

I hope this analogy helps you in your journey of writing great code and great systems. It takes diligence and willingness to roll up your sleeves, put on some gloves, and start pulling up the weeds in your code. But having a healthy garden where your features thrive is worth it.

Happy coding!

_p.s. - if you enjoyed this post, you might enjoy some of my other posts on software engineering! Thanks for reading!_ 😁

* #### [On Building Abstractions Too Soon](/blog/building-abstractions-too-soon)
* #### [Signs You Should Refactor Your Code](/blog/when-should-you-should-refactor-your-code)
* #### [Why Simple Code is Better Than Reusable Code](/blog/why-simple-code-better-than-reusable-code)