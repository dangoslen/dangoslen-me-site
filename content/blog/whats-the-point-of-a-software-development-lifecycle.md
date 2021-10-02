---
path: /whats-the-point-of-a-sofware-development-lifecycle
date: 2021-10-04T04:00:00.000Z
title: What's the Point of a Software Development Lifecycle Anyway?
description: The reasons why having a software development lifecycle will help your team.
tags:
  - software development lifecycle
  - software engineering
  - what's the point
image: https://miro.medium.com/max/1000/1*w_LF-WitILhyNNCkVCm99Q.jpeg

---

![](https://miro.medium.com/max/1000/1*w_LF-WitILhyNNCkVCm99Q.jpeg) *Image by Ken Suarez on Unsplash*

Let's start today's post with a quick "day-in-the-life" story.

<i>

It's a Tuesday morning. After logging into Slack, I see that there are several pull requests to review. And while I enjoy reviewing code, sometimes I'd rather write my own code. But since our team requires two reviews from team members before any code can get merged.

During standup later that day, we see a demo of a feature a few teammates have been working on. The demo is good overall, but one small detail starts a disussion: should the feature work this way or that? We come to an agreement and decide there is a little more coding to do before calling the work done.

Later in the day, I start to prepare for our weekly deployment. While prepping the release, we make sure to properly log our change in our tracking system and provide our deployment method and rollback method. We also make sure to include links to the version and the automated build that created the version artifacts. All of this helps our change management team to approval our change quickly.

</i>

Ok - why tell you this story? This story illustrates an example of a [software development lifecycle](https://www.techopedia.com/definition/22193/software-development-life-cycle-sdlc) at work. If you have never heard of a software development lifecycle (SDLC), then you have come to the right post. We are talking all about the SDLC and the implications it has for the software teams develop.

## What is a Software Development Lifecycle Anyway?

A software development lifecycle is simply a list of processes and tools that a team (or organization) follows in order to develop software products. Pretty simply right? 

I think the term lifecycle is extremely important to pay attention to. While software isn't a living thing, it exhibits many of charatersitics of a living thing: software grows and develops, responds to it's environment, consumes energy, and might even exhibit forms of homeostatis (load-shedding) and reproduction (scaling). 

It also means that, like any living thing, there might be parts of our software that is unhealthy or dying. Our software might be reaching end-of-life (a real term) and we might have different ways of monitoring/maintaining dying software than software actively growing. We also might have parts of our software that are unhelathy (bugs, performance issues) that we must tend to in certain ways to make sure we care for our software correctly.

Much like how a garden has a lifecycle based on the season, the lifecycles of plants within it, and the goals of the garde, so our software has a lifecycle too.

## A Guide for How to Build Software

At its most basic form, the SDLC is simply a guide for how to build our software. These rules can be extremely specific, or extremely vague based on the scope of the lifecycle and the group that must comply with it. For example, a lifecycle might say "No developer should be able to write code and deploy it to production on their own." (more on why this might be a rule later). It could also say "Any bug found in production must be logged, categorized, and priotized within 24 hours."

Many articles might say the SDLC is really just a methodology - waterfall, agile, etc. However, that the SDLC is much more than that. It _might_ specifiy agile vs waterfall, but it might not. It might leave that up to teams. Or it might layout additional security practices to meet or where source-code must be stored. It isn't just a methodology statement.

Each development lifecycle policy will be different at each organization. At a high-level, they will likely address _at least_ the following questions:

* How does requirements for work get gathered? (requirements anaylsis, planning) 
* What do we need to build to meet those requirements? (planning, design) 
* Who does the work go to? (roles and responsibilites, planning)
* How does the team complete the work brought to them? (methodolgy)
* How does the team knows the work is finished? (testing, definition of done)
* How does the team deploy finished work into production? (deployming change control) 

These questions help the organization determine at a high-level how they want to develop software. But, as you might notice, a lot of these guidelines refer to "the team". Here is why.

## The Team Has a Say

In many software organizations, teams are left to make a lot of decisions about how they get the work brought to them finished. In part, most teams will define this in their [definition of done](https://www.scrum.org/resources/blog/done-understanding-definition-done). The definition of done simply helps individuals and teams know when they have completed a chunk of work. 

Often, this will include answers to questions like:

* How do we know the work has met the requirements? (demos, owner acceptance criteria)
* Where is code stored? (github, on-premise)
* How does the team test their software? (CI/CD, testing tools)
* How does the team do telemetry or observability? (logging, metrics, alerting)
* How does the team do peer reviews? (how many? who?)

A team will often have a pretty simple definition of done to start out with. You can get take a look a the [Agile Alliance guide](https://www.agilealliance.org/glossary/definition-of-done/). As your team's responsibilities or members change, be prepared to modify you definition of done to accomodate. Just like everything else in the Agile world, expect to make incremental changes to your definition of done.

One important note before moving on though: your team's definition of done generally _should not_ conflict with the overal SDLC for your organization. ie - if you organization says that all code will be stored in GitHub, your definition of done shouldn't have that your code will be stored in SVN somewhere. If there is something your team really thinks needs to diverge from the SDLC for some reason, remember that is mostly a guide. You can likely work with your team lead or manager to get an exception. But just be prepared to have a lot of hard evidence for why you need to diverge.

## A Compliance Tool

In many organizations, one of the biggest reason for having a written down SDLC is for compliance reasons. I won't get into the nitty-gritty details here. Just know that when a public company is making money from software they write, they have a series of regulations they must comply with. Having an SDLC allows businesses to say "This is how we write software" to auditors.

Of course, the business now needs to turn around and show that they follow their own policy. In many cases, the core concerns are around information security (InfoSec) to make sure sensitive data is being handled properly, security is being properly considered, and that rogue developers can't just state taking fractions of pennies into their own bank accounts (thanks _Officespace_).

Because of these reasons, many organizations actually add the term Secure to the SDLC. This of course makes the term Secure Software Development Lifecycle (aka SSDLC). I much prefer SDLC personally - but in most organizations they will mean the same thing.

## What's the Point?

As we have seen, the SDLC serves many different purposes based on the stakeholder interacting with it. A product owner might learn about when and how their product can be deployed. An engineer might learn about how the day-to-day act of writing code, testing it, and getting it reviewed happens. Teams can use it to influence their own definition of done to make it clear when work is ready to be released. And information security stakeholders can use it to help keep the company compliant with industry regulations. 

To summarize all of this into one sentence - _the whole point of an SDLC is to create a guide for how software work gets done within an organization_. And like most good guides, they are worth following. 


Happy coding!