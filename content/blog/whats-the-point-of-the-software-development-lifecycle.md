---
path: /whats-the-point-of-the-software-development-lifecycle
date: 2021-10-12T00:00:00.000Z
title: What's the Point of the Software Development Lifecycle Anyway?
description: The importance of a guide for how you build software.
keywords:
  - SDLC
  - how to use the software development lifecycle
tags:
  - software development lifecycle
  - software engineering
  - what's the point
image: "../assets/annie-spratt-kZO9xqmO_TA-unsplash.jpeg"
---

<center>

![](../assets/annie-spratt-kZO9xqmO_TA-unsplash.jpeg)

<i>

Photo by <a href="https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Annie Spratt</a> on <a href="https://unsplash.com/s/visual/9fb65126-dee1-436b-94e4-b28f7181ef6f?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>

</center>

Let's start today's post with a quick "day-in-the-life" story.

<i>

It's a Tuesday morning. After logging into Slack, I see that there are several pull requests to review. And while I enjoy reviewing code, sometimes I'd prefer writing my own code. But since our team requires two reviews from team members before any code can get merged.

During standup later that day, a few teammates show a demo of a feature they have been developing. The demo is good overall, but one small detail starts a discussion: should the feature work this way or that? We eventually agree and decide there is a little more coding to do before calling the work done.

Later in the day, I start to prepare for our weekly deployment. While prepping the release, I make sure to properly log our change in our tracking system and provide our deployment and rollback methods. I also include links to the version and the automated build that created the version artifacts. All of this helps our change management team to approval our change quickly.

</i>

Ok - why tell you this story? This story illustrates an example of a [software development lifecycle](https://www.techopedia.com/definition/22193/software-development-life-cycle-sdlc) at work. If you have never heard of a software development lifecycle (SDLC), then you have come to the right post. We are talking all about the SDLC and the implications it has for the software teams build.

## What is a Software Development Lifecycle Anyway?

A software development lifecycle is simply a list of processes and tools that a team (or organization) follows to develop software products. Pretty simple, right? 

I think the term lifecycle is essential here. While software isn't a living thing, it exhibits many of the characteristics of a living thing: software grows and develops, responds to its environment, consumes energy, and might even exhibit forms of homeostasis (load-shedding) and reproduction (scaling). 

It also means that, like any living thing, there might be parts of our software that is unhealthy or dying. Our software might be reaching end-of-life which might change how we monitor/maintain it. We might have bugs or performances issues in our software that we must tend to. And, of course, we have new features that our users - or even ourselves - want. 

Much like how a garden has a lifecycle tied to seasons and the plants within it, so our software has a lifecycle too. We have to understand what our software should do, how to build it, how to care for it properly.

## A Guide for How to Build Software

At its most basic form, the SDLC is simply a guide for how to build our software. These rules can be extremely specific or vague based on the scope of the policy and the group that must comply with it. For example, a lifecycle policy might say, "No developer should be able to write code and deploy it to production on their own." (more on why this might be a rule later). It could also say, "Any bug found in production must be logged, categorized, and prioritized within 24 hours."

Many articles might say the SDLC is just a methodology - waterfall, agile, etc. - however, the SDLC is much more than that. It _might_ specify agile vs. waterfall, but it might not. Or it might layout additional security practices to meet or where source code must be stored. There are many other things too, but this is just to show the SDLC isn't only about methodology statement.

Each development lifecycle policy will be different at each organization. At a high level, they will likely address _at least_ the following questions:

* How are requirements for work gathered? (requirements analysis, planning) 
* What do we need to build to meet those requirements? (planning, design) 
* Who does the work? (roles and responsibilities, planning)
* How does the team complete the work brought to them? (methodology)
* When is the work done? (testing, definition of done)
* How does the team deploy finished work into production? (deploying change control) 

These questions help the organization determine at a high level how they want to develop software. But, as you might notice, a lot of these guidelines refer to "the team." Here is why.

## The Team Has a Say

In many software organizations, teams make many decisions about how they operate. Lifecycles are often built with this in mind, as we discussed earlier. A common way most teams make some of their own rules is called the [definition of done](https://www.scrum.org/resources/blog/done-understanding-definition-done). The definition of done helps individuals and teams know when they have completed a chunk of work. 

Often, this will include answers to questions like:

* How do we know the work has met the requirements? (demos, owner acceptance criteria)
* Where is code stored? (Github, on-premise)
* How does the team test their software? (CI/CD, testing tools)
* How does the team do telemetry or observability? (logging, metrics, alerting)
* How does the team do peer reviews? (how many? who?)

A team will often have a pretty simple definition of done to start with. You can get take a look a the [Agile Alliance guide](https://www.agilealliance.org/glossary/definition-of-done/). As your team's responsibilities or members change, be prepared to modify your definition of done to accommodate. Like everything else in the Agile world, expect to make incremental changes to your definition of done.

One important note before moving on, though: your team's definition of done _should generally not_ conflict with the overall SDLC for your organization. If your organization says that all code shall be stored in GitHub, your definition of done shouldn't say to store code in an SVN somewhere. If there is something your team thinks needs to diverge from the SDLC for some reason, remember that it is mostly a guide. You can likely work with your team lead or manager to get an exception. But just be prepared to have good hard evidence for why you need to diverge.

## A Compliance Tool

In many organizations, one of the biggest reasons for having a written-down SDLC is compliance. I won't get into the nitty-gritty details here. Just know that when a public company is making money from the software they write, they have a series of regulations they must comply with. Having an SDLC allows businesses to say "This is how we write software" to auditors.

Of course, the business now needs to turn around and show that they follow their own policy. In many cases, the core concerns are around information security (InfoSec) to make sure sensitive data is being handled properly, security is being properly considered, and that a rogue developer can't divert fractions of pennies into their own bank accounts (thanks _Officespace_) by having too much access.

Because of these reasons, many organizations add the term Secure to the SDLC. This, of course, makes the term Secure Software Development Lifecycle (aka SSDLC). I much prefer SDLC personally - but in most organizations, they will mean the same thing.

## What's the Point?

As we have seen, the SDLC serves many different purposes based on the stakeholder interacting with it. A product owner might learn about when and how their product is deployed. An engineer might learn about how the day-to-day act of writing code, testing it and getting it reviewed happens. Teams can use it to influence their definition of done to clarify when work is ready to be released. And information security stakeholders can use it to help keep the company compliant with industry regulations. 

To summarize all of this into one sentence: _the whole point of an SDLC is to create a guide for how software work gets done within an organization_. And like most good guides, they are worth following. 

Happy coding!
