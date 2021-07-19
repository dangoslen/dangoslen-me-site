---
path: /three-ways-to-reduce-chaos
date: 2021-07-29T00:00:00.000Z
title: Three Ways to Reduce Chaos on Your Team
description: Software development can be chaotic and full of frustrating situations. Here are some ways to reduce the unneccesary chaos.
tags:
  - software engineering
  - software development lifecycle
---

![](../assets/alina-grubnyak-ZiQkhI7417A-unsplash.jpg)

<center>

<i>

Photo by <a href="https://unsplash.com/@alinnnaaaa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alina Grubnyak</a> on <a href="https://unsplash.com/s/photos/complex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>

</center>



The software industry is chaotic. 

To the gurus that might say "follow steps a, b, and c and you'll achieve a zen-like world where everything is always easy" I would politely node, grin (an impish one), and disagree with them. 

Even the best team's in the world deal with chaos. In fact, it isn't they abscence of chaos that makes them great. It is how they _respond_ and _adapt_ to chaos that makes them great.

But I'm ahead of myself. Let's back up.

The software industry is chaotic. It can be hard to know who is working on what, when, and why. It can be difficult to know what changes are in a version, what version is in production, and when the next deployment is (though automation can help in all of these cases).

And while I don't have all the answers to (I'm not a guru), I do know that there are tools that can help us reduce some of the unneccesary chaos. Each one of these tools are ones used by team's I work on and they have helped us a lot.

### Changelogs

Changelogs are exactly what they sound like - a log of noteable changes made in a software project. While it seems silly that keeping a simple markdown file would make such a difference, it does.

When you keep a changelog you are really committing to keeping an accurate record of history. If that still doesn't sound useful, think of the many "when did that change go out?" or "who worked on that story?" questions that arise in your everyday work. If you had a perfectly kept log of the history of a project, it would be easier to answer those questions. A changlog helps teams do just that.

Of course, changelogs aren't perfect. They have maintenance costs associated with keeping it up to date, and overtime that can grow to be large. In my experience, they pros outweigh the cons.

_If you are interested in keeping a changelog, check out the tools and articles I've already written on this topic!_

### Designated On-Call and Interuppt

Part of the regular day-to-day chaos of software development is that software breaks. When it does, it usually needs to be repaired or fixed as soon as possible.

Aside from software breaking there can also be regular interupts that your team needs to pay attention to. Another team has a question about part of the system you built. A customer ticket needs addressing. Someone needs to push the deployment button.

In both of these cases, the result is the same: distraction and disruption. 

What I've found helpful on teams is to designate an on-call/interupt person at all times. Whether it's deploying an application, being the on-call support, or answering customer tickets, they are the first person to take those tasks on. The role gets assigned to different members of the team on a schedule (or a rotation) since it can be a lot on someone. 

The result I've experienced has two major pros.

First, because everyone shares the roles of being on-call or support, everyone gets extremely comfortable with those tasks. Better yet, it forces everyone on the team to understand the good _and_ bad parts in those operations - which means everyone has motivation to make it better. If there is only one person (say an SRE) on the team, it can be hard for the team to understand what needs to change in the code, deployments, etc. to make it easier to manage and support.

Second, it allows those not on-call to focus. By having a the on-call/interupt person handling incoming requests and disruptions, the rest of the team can focus on writing code or doing their "typical" work. 

_One quick word of caution: the on-call/interupt person isn't - and shouldn't - be expected to handle every incoming disruption! The rest of the team can and needs to help if many requests come in. Most of the time, however, only a few will come in at a time and can be handled by the designated team member._

### Regular Deployments

If you've been following the latest trends in software engineer of the past ten years, this isn't a surprise. The industry has discovered that by making smaller, more regular deployments, teams can achieve high stability in their software. The conventional wisdom before 2010 was to touch production as little as possible - if it works don't fix it right?

My own experience is that regular deployments does indeed bring higher stability to your software. Not because doing a deployment is any less risky, but because it forces teams to build automation to handle the risk in a much better way. Things like smoke tests, blue/green deploys, automated rollbacks, etc. 

It won't be easy. Being able to have automated deployments to production requires disciplined, focused thinking and development. But it **will** be worth it!

If you want more, take a look at [The DevOps Handbook](https://www.amazon.com/dp/1942788002/ref=cm_sw_r_tw_dp_DM172Z4HB3RAGBEM2E1Q?_encoding=UTF8&psc=1) and my own post on [whats the point of CI anyway?](https://dangoslen.me/blog/whats-the-point-of-ci-anyway/)

- - -

