---
path: /versions-releases-deployments-oh-my
date: 2021-05-15T18:50:43.656Z
title: Version, Releases, and Deployments! Oh My!
description: Software is full of overloaded terms. Let's clarify what we mean by
  a few of them.
keywords:
tags:
  - software development lifecycle
  - software engineering
  - changelogs
image: "../assets/john-moeses-bauan-WG1HNF8PGHo-unsplash.jpeg"
---

![](../assets/john-moeses-bauan-WG1HNF8PGHo-unsplash.jpeg)

<center>

<i>

Photo by <a href="https://unsplash.com/@johnmoeses?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Moeses Bauan</a> on <a href="https://unsplash.com/s/photos/film?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>

</center>


Like most complex work, the software industry is full of overloaded or ambiguous terminology. Teams or companies can often create unique definitions of their own for terms like service, integration test, or even quality assurance to match how their teams work.

That is all well and fine as long as the teams agree on the definition and work hard to make sure each definition is easily discoverable. I.e., new team members should be able to find and learn these new definitions (and challenge them too!) so that the team stays in sync.      

Sadly, this is hard to do. Every person has a unique perspective based on their experience that they bring with them. Even with properly defined ideas, those ideas are often misunderstood.

But there are a few concepts that I think get misunderstood too often. Today, I want to discuss a handful of them. Namely, the ideas are versions, releases, and deployments. 

These ideas get misunderstood because they are treated as synonyms. Teams will use a release one week and deploy another without realizing it. Some tools use version, and another tool use release to refer to the same thing. GitHub has Releases, while Jira has versions.

No wonder we get confused!

I want to share my perspective on what these terms mean for software teams and when to use each. 

Let's dive in!

## What is a Version?

A version is straightforward in practice but hard to explain. A version is essentially a unique "form" of something. The something - in our case software - starts in one form, is changed over time, and at some point, there are enough changes that we declare a new version. 

For example, when writing a paper, you likely don't send in a paper the moment you finish writing it. You probably created a rough draft, then went through a few rounds of editing. Each round of editing yielded a new version.

The same is true for software. Instead of a paper, though, it's code. We take our code in one form, change it, and at some point decide we've been enough good changes that we declare a new version. We often call this cutting a version. It might be a new feature, a bug fix, refactor, or any other change. Usually, it is a combination of many such changes. 

#### Cut a Version?
Why do we call it "cut" a version? Sometimes called cutting a release - but we will talk about releases in a little bit.

I don't know if there is a 100% correct answer, but if you think about another media, it might click: movies. 

In movies, you often hear about the "extended cut" or the "director's cut." In the early days of filmmaking, a film would literally be [cut and spliced together](https://en.wikipedia.org/wiki/Cut_(transition)) to produce a final _version_ of the film (see! version!). Pretty cool!

Often a version in software concretely becomes a git tag where the tag value is a number or short string. Semantic versioning is a great strategy that is widely adopted, but some teams have used names or even used the date on which the version gets cut. I highly suggest using semantic versioning but do what works for you.

## What is a Release?

People often don't get too mixed up with a version. But release - release does. 

What is a release? Is release just a synonym for version? Does one release something, or is a release _the_ something?

Let's go back to talking about movies. Let's say you have been working on making a great film. You've been working hard at editing the last scene and finally have a version cut you want people to see. For people to see it, you have to _release_ it. 

You could keep the film all to yourself, though, and you would still have a version. People simply wouldn't know about it.

Releasing, then, is the process of announcing and making visible a cut version. 

I think this is similar to a release in software. In reality, we are creating versions all the time - and so are others! Every git commit is essentially a version. 

But we often don't tell others about every version. Most of your customers don't want to know about every small change made to your code. Instead, we tend to bundle several changes together to build a version we plan to release. Once this planned version is cut, we release that version.


This also brings me to the last point of deployments. I believe you also deploy aversions. You don't deploy a release, despite what Jira says. Let's dig into that.

## What is a Deployment?

Deployment is the process of making a specific version usable. For a movie, if someone released a movie they had made, but you couldn't see it anywhere, it wouldn't really be that all interesting. It needs to be sent to theaters or uploaded to streaming services for you to see it. 

In software, we usually mean either pushing a version into a production environment for customers to use or pushing our version into a public repository to be downloaded by customers for their use. In either case, a deployment of some kind is required for our customers to use our software.

A common example is a software library or package. A development team builds a version, deploys it to a repository to be downloaded, and then releases that version to other software teams. Without the version being deployed, the release would be useless. This is also the same for things like databases or other programs you might download and install yourself. Let's call this type of software _customer-managed software_.

Of course, not all teams build this kind of software. Another common form is that of hosted or managed software solutions. Think of the SaaS trend that is eating the world today. Customers don't install anything on their machines - they simply use a web browser to access the software via HTTP. Let's call this type _team-managed software_.

To talk about what deployments mean for team-managed software, though, we need to talk about features. 

### Software Releases vs. Feature Releases
In the previous section, we discussed that a team deploys a version and not a release. In this case, we have been discussing a software release. But there is another idea prevalent to team-managed software called _feature releases_. From the [DevOps handbook](https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1621904088&sr=8-1):

> Release is when we make a feature (or set of features) available to all our customers or a segment of customers. 

Is this in conflict with a software release?

I don't think so. To explain, we need to go into a little bit of depth about the intention behind this idea - which aims to create stability for managed software teams.

This feature release idea is to move from giant versions being deployed infrequently towards smaller, more manageable versions being deployed all the time. The pattern helps teams avoid "all or nothing" deployments, which are notorious for causing problems for teams.

To make versions smaller, teams now need to build features incrementally across several versions. Teams might write [latent code](https://www.infoq.com/articles/continuous-delivery-coding-patterns/) shipped over several versions but won't be executed until a feature is complete and enabled. This means teams now need a new way to enable the features. A few ways of doing this include feature flags and environment-based enablement.

When teams implement this pattern well, they can test the impact of a feature on their software by turning on the feature and turning it off if they observer negative impacts. The full version does not need to be rolled back if things go wrong. Only turning some features off is a tremendous advantage as the version might have other features or fixes that would be valuable to customers. 

Lastly, this pattern gives power to product owners to release features to customers when ready.

Suffice it to say, this idea of "deploying versions and releasing features" works. It works [really well](https://launchdarkly.com/blog/what-are-feature-flags/#:~:text=A%20feature%20flag%20is%20a,full%20lifecycle%20of%20a%20feature.) actually.

Coming back to the present topic, though, you need to know that now we have two different types of releases—one for software and one for features.

* **Software Release** - a software release is really about announcing or making available a specific software version. For customer-managed software, this likely comes _after_ the version has been deployed. In the context of team-managed software, releasing happens _before_ the version has been deployed to a production environment.

* **Feature Release** - feature releases may or may not be associated with a specific software version; they are separate from a software release. Features may be built over the course of several versions, and therefore several deployments. Releasing the feature may also be controlled via feature flags or other methods to enable those features when a product determines the feature is ready.

## Putting It All Together

I know this is all confusing. To help put all of these pieces together, let's look at some diagrams. 

Here we see a development lifecycle for a version for customer-managed software (libraries, exec, etc). 

![](../assets/customer-managed.png)

For a managed software product, the flow changes a little bit.

![](../assets/team-managed.png)

---

In summary, I always think about the following key points

* A software version is really a unique form of a software product. 
* When a software product has undergone enough valuable changes that the team believes it is ready for customers to use, they release that version
* If you are building a software product the customer downloads and installs on their own machine, you likely deploy your software before releasing it
* If you are building a managed software product your customer accesses on your machines, you likely create a release before deploying it
* If you a building a managed software product, your customers don't care about software releases as much as they care about feature releases - which are different but related to the software versions your release and deploy

Whew! That was a lot!

If you made it all the way through - go grab a snack! And coffee! And pat yourself on the back! 

And in the meantime, reach out if you disagree or want to discuss this more. I really enjoy talking about this and I know I have a lot to learn.

Happy coding!