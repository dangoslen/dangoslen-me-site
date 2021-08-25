---
path: /three-ways-to-reduce-chaos
date: 2021-07-29T00:00:00.000Z
title: Three Ways to Reduce Chaos on Your Team
description: Software development can be chaotic and full of frustrating situations. Here are some ways to reduce the unneccesary chaos.
tags:
  - software engineering
  - software development lifecycle
  - changelogs
image: /assets/alina-grubnyak-ZiQkhI7417A-unsplash.jpg
---

![](../assets/alina-grubnyak-ZiQkhI7417A-unsplash.jpg)

<center>

<i>

Photo by <a href="https://unsplash.com/@alinnnaaaa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alina Grubnyak</a> on <a href="https://unsplash.com/s/photos/complex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>

</center>

The software industry is chaotic. 

To the gurus that might say, "follow steps a, b, and c, and you'll achieve a zen-like world where everything is always easy," I would node, grin (an impish one), and politely disagree with them. 

Even the best team's in the world deal with chaos. It isn't the absence of chaos that makes them great but how they _respond_ and _adapt_ to it. They find ways to wrangle the chaos into something manageable rather than running away from it.

But what is the chaos I'm talking about?

Chaos is trying to keeping straight who is working on what, when, and why. It is not knowing what changes are in a software version, what version is in production, and when the next deployment is (though automation can help in all of these cases). Chaos is drowning in meetings, support tickets, and coordinating all of the communication around each, unable to get work accomplished.

And while I don't have all the answers, I do know tools that can help reduce some of this unnecessary chaos. I want to share three tools my teams use to help. We've been using these tools for a while and have seen great results.

Let's dive in!

### Changelogs

Changelogs are exactly what they sound like - a log of notable changes made in a software project. While it seems silly that keeping a simple log file would make such a difference, it does.

When you keep a changelog, you are committing to keeping an accurate record of history. If that doesn't sound useful, think of the many questions often asked of a software team. "When did that change go out?" or "who worked on that story?" I'll wager these questions inevitably arise in your work every day. If you had an ideally kept log of the history of a project, it would be easier to answer those questions. A changelog helps teams do just that.

Of course, changelogs aren't perfect. They have maintenance costs associated with keeping them up to date, which can get burdensome. In my experience, however, the pros outweigh the cons.

_If you are interested in keeping a changelog, check out the [tools](https://github.com/dangoslen/changelog-enforcer) and [articles](https://dangoslen.me/tags/changelogs) I've already written on this topic!_

### Designated On-Call and Interrupt

Part of the regular day-to-day chaos of software development is that software breaks. When it does, it usually needs to be repaired or fixed as soon as possible.

Aside from software breaking, there can also be regular interruptions that need attention. Another team has a question about part of the system you built. Tickets from customers need addressing. Someone needs to push the deployment button (or you could automate it!).

In both of these cases, the result is the same: distraction and disruption. 

What I've found helpful is to have a designated on-call/interrupt person at all times. Whether deploying an application, being the on-call support, or answering customer tickets, they are the first to tackle those tasks. The role gets assigned to different team members on a schedule (or a rotation) since it can be a lot on someone. 

In my experience, this has two major benefits.

1. First, because everyone shares the roles of being on-call or support, everyone gets extremely comfortable with those tasks. Better yet, it forces everyone on the team to understand the good _and_ bad parts of those operations - which means everyone has the motivation to make it better. If only one person (say an SRE) is on the team, it can be difficult for the team to understand what needs to change in the code, deployments, etc., to make it easier to manage and support.

2. Second, it allows those not on-call to focus. By having the on-call/interrupt person handling incoming requests and disruptions, the rest of the team can focus on writing code or doing their "typical" work. They can protect their most valuable asset - time.

_One quick word of caution: the on-call/interrupt person isn't - and shouldn't - be expected to handle every incoming disruption! The rest of the team can and needs to help if many requests come in. Most of the time, however, only a few will come in at a time and can be handled by the designated team member._

### Regular Deployments

If you've been following the latest trends in software engineering over the past ten years, this isn't a surprise. The industry has discovered that teams can achieve high stability in their software by making smaller, more regular deployments. The conventional wisdom before 2010 was to touch production as little as possible - if it works, don't fix it.

My own experience is that frequent deployments do indeed bring higher stability to your software. Not because deploying mediocre software every day suddenly makes it better. And not because it is any less risky. The stability of your software increases with more frequent deployments is because it forces teams to build automation to handle the risk much better, and it forces versions to be smaller. 

It won't be easy. Being able to have automated deployments to production requires disciplined, focused thinking and development. But it **will** be worth it!

If you want to learn about this topic, take a look at [The DevOps Handbook](https://www.amazon.com/dp/1942788002/ref=cm_sw_r_tw_dp_DM172Z4HB3RAGBEM2E1Q?_encoding=UTF8&psc=1) and my own post on [what's the point of CI anyway?](https://dangoslen.me/blog/whats-the-point-of-ci-anyway/)!

- - -

Working as a software engineer will likely never be a zen-like experience where every requirement, software component, and timeline work in perfect harmony. There will always be bugs to fix, customers to serve, and complexity to navigate.

But we can help reduce the chaos! By protecting our time and energy through investing in automation, documenting as we go, and finding ways to focus, we can control the mess instead of letting it control us. 

The tools I've shared here have made a major positive impact on how my team works, and I hope they can help your team too!

Happy coding!

