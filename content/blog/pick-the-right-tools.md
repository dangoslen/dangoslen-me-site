---
path: /picking-the-right-tools
date: 2024-02-24T15:47:00
title: "Picking the Right Tools"
description: "What I've learned about picking the right tools in software from watching Alone"
keywords:
  - software tools
  - software first principles
  - picking the right software tools
  - buy vs. build
tags:
  - software engineering
  - tools
image: "../assets/hunter-haley-wEJK4q_YlNQ-unsplash.jpg" 
---

<center>

![](../assets/hunter-haley-wEJK4q_YlNQ-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@hnhmarketing?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Hunter Haley</a> on <a href="https://unsplash.com/photos/photo-of-brown-carpentry-tool-kit-wEJK4q_YlNQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

Could you survive out in the wilderness on your own? No food provided. In the middle of nowhere. Just yourself and a few sets of tools. Would you make it? I know I wouldn't.

It's the premise of the aptly named show [_Alone_](https://en.wikipedia.org/wiki/Alone_(TV_series)). You might have heard of it.

I've only recently discovered the show, but I must say: it's thrilling. From celebrating when adventurers face their fears and push through pain to feeling their anxiety and stress (if only a fraction of it) when seeing a bear or other predator nearby. 

And as I've watched the show, I've thought a lot about the tools each contestant brings. As an engineer, I wondered how each contestant picked their gear and clothes. Did they make a list of possible items and compare their utility with an algorithm (knapsack problem, anyone?), or did they copy other contestants' lists from prior seasons? Did they select their top fifteen tools, take a short trip, and calculate how often each was used before selecting their allowed ten items?

We find ourselves in similar, but not life-threatening situations in software. Tools, frameworks, vendors, etc., abound in our quest to build great products for our customers. While these tools can refer to a massive universe of software to help you and your team create great software, today, I want to focus on tools required at the organizational level. Or, put another way, tools that help whole teams accomplish their collective mission.

Many questions emerge around this topic: How do you pick these tools on a budget? When does it make sense to buy vs. build? What do you do when you find yourself "stuck" with the tools you've chosen so far (dreaded vendor lock-in)?

Many organizations would like to have concrete answers to these questions. The truth, though, is it's all contextual to your situation. However, there are some first principles to consider when selecting and evaluating your toolset to reason from. Here are a few I've been thinking through.

## Availability

While it might sound silly, some tools will simply not be available for you to use. Some of this might be because the tools aren't or won't be approved by your organization. Other times, it might be available, but it may be too costly, given your budget constraints. It could also be no one has built the tool you are looking for (yet).

Be careful that you don't spend too much time digging or searching for the "perfect" tool or attempting to pitch one to your team. These are important skills, but remember your profession: you write software! Don't be afraid to write some code to help shim a specific need for your team if the tools aren't available or are bad fits.

## Manageability

Additionally, is the tool easy to manage or configure? Many SaaS tools have good experiences, but what if you purchase a licensed desktop application (such as JetBrains IDEs or Docker Desktop)? You must ensure the tool has proper access management, metrics, and reporting.

Several tools also have an additional factor around managed services vs. run-it-yourself versions. Instead of installing, deploying, managing, and upgrading software tools on your own, many companies offer pay-to-run tools for you. Examples include common tools such as Kafka or OpenAPI specs. You could pay Confluent to run Kafka for you and pay SmartBear to host your OpenAPI docs on your behalf. Each approach has benefits, drawbacks, and cost implications.

## Benefits

Part of evaluating a tool also comes down to whether the tool provides the right benefits. There are tools you could purchase that give only a marginal benefit to your team than what they have today, while others might provide a meaningful difference. Another way to say this is, "Are you going to get enough [bang for your buck?](https://en.wikipedia.org/wiki/Bang_for_the_buck)"

This also brings up the buy vs. build conversation. Most software teams are constrained in their time. As such, it makes sense, generally, to identify the appropriate [core vx. context](https://blog.while-true-do.io/devops-core-and-context-work/) parts of your business. According to this framework, companies should focus on building core competencies (your strategic advantage) while opting to purchase context (everything else). It's important to note that each company has a different core and context. Feature flags are the context for many companies, but they are core for Optimizely, LaunchDarkly, etc.

## Necessity

It's important to consider if a tool is essential to the success of your organization. Feature flags, for example, are really effective tools, but I know of many successful teams that have never used them or rolled a thin enough version of them. They never needed to purchase a tool. Other common use cases are things like hosted Vault solutions. Maybe you need Vault, or perhaps you just need `chamber` and SSM.

In contrast, some tools will always be necessary (as either core or context). A great example is billing and payment processing. Companies need a way to collect and manage payments regardless of what they sell. It's just about choosing _which_ tool to use rather than if you need it. Every company needs to find a way to get paid, just like every participant on Alone needs a sleeping bag (and, yes, as of Season 9, they all opted to use a sleeping bag vs. a blanket).

## Flexibility

There are many tools out there that are very - very - specific to solving one thing, but there are other tools that can be morphed and re-used in creative ways beyond their original design. _Alone_ contestants are great at this, using trapping wire as fasteners or using deconstructed paracord for gill nets. These tools prove to be flexible in the utility.

Similarly, when you have a constrained budget, you might need to find creative ways to leverage the tools you already have at your disposal. An example from my own experience is that some feature flag services are really just glorified key/value pair databases with an easy-to-use UI. I've leveraged this idea to help manage a long-running migration (that took place over several days) rather than opting to write my own SQL scripts to update values. It worked great.

Another issue related to flexibility is your ability to walk away from a tool. Choose tools with options to migrate away from it if you need to. While many tools boast of their ability to "scale with you," it is often the case that many tools are the wrong tools once you reach a certain threshold of scale. Be thoughtful about which tools you make strategic investments in and avoid vendor lock-in. 

---

The tools we choose are important in our efforts to build amazing software. We have to be deliberate in our decision-making, recognizing there are trade-offs to be made and constraints to what we have available. When evaluating or pitching bringing in a new toolset to your team, make sure you spend the time identifying the problems you want to solve and which tools are going to be the right ones for you.

Happy coding!

_By the way, if you were thinking about _Alone_ and finding out what the best items to bring would be if you decide to compete, someone has [already done some great work](https://theprepared.com/blog/alone-winner-gear-analysis/) to tell you the perfect set of items to bring along 😃_
