---
path: /versions-releases-deployments-oh-my
date: 2021-05-15T18:50:43.656Z
title: Version, Releases, and Deployments! Oh My!
description: Software is full of overloaded terms. Let's clarify what we mean by
  a few of them.
---
Like most complex work, the software industry is full of overloaded or ambigous terminology. Teams or companies can often create their own concepts of terms like service, or integration test, or even quality assurance to match how their teams work.

That is all well and fine as long as the teams agree on the definition and work hard to make sure that definition can be easily found. ie - new team members must be able to learn these new definitions (and challenge them too!) so that the team stays in sync.      

Sadly, this is really hard to do. Every person has a unique perspective based on their experience that they bring with them. Even with properly defined ideas, those ideas can still be misunderstood.

But there are a few concepts that I think get misunderstood too often. Today, I want to discuss a handful of them. Namely, the ideas are versions, releases, and deployments. 

 These ideas get misunderstood because they get used too interchangably. Teams will use release one week and deploy another without realizing it. Tools will use version and release to refer to the same thing. GitHub uses the term releases but other tools uses versions.

No wonder we get confused!

I want to share with you my perspective on what these terms mean for software teams and when to best use them. Hint - it depends on what you are building! Let's dive in.


## What is a Version?

A version is really simple in practice, but hard to explain. A version is essentially a unique "form" of something. The something - in our case software - starts out in one form, changes are made to it, and at some point we are call the next form "done". In this done state is really when we make it a version.

For example, when writing a paper, you likely don't just send in a paper the second you finish writing it. You likely created a rough draft, then went through a few rounds of editing. Each round of editing yieled a new version.

For software, that is generally our source code. We take our code in one form, change it, and at some point say the changes are done. We then create or cut a new version. It might be a new feature, a bug fix, a refactor, etc. Often, it is a combination of many of those changes. 

#### Cut a Version?
Why do we call it "cut" a version (sometimes called cutting a release - but we will get there)? 

I don't know if there is a 100% correct answer, but if you think about another media it might click: movies. In movies, you often hear about the "extended cut" or the "directors cut". This is because in the early days of filmmaking, film would literally be [cut and spliced together](https://en.wikipedia.org/wiki/Cut_(transition)) to produce a final _version_ of the film (see! version!). Pretty cool!

Often a version in software concretely becomes a git tag where the tag value is a number or short string. Semantic versioning is a great stategy that is widely adopted, but some teams have used names or even used the date on which the version was cut. I highly suggesst using semantic versioning, but do what works for you.

## What is a Release?

People often don't get too mixed up with a version. But release - release does. 

What is a release? Is a release just another term for version? Does one release something, or is a release _the_ something?

Let's go back to talking about movies. Let's say you have been working on making a great film. You've been working hard at editing the last scene and finally have a version cut you want people to see. For people to see it, you have to _release_ it. A release is the process of announcing and making visible the version you made.

You could keep the film all to yourself though. And you would still have a version. People just don't wouldn't know about it.

I think this is similiar to a release in software. In fact, we are creating versions all the time - and so are others! But we often don't tell other's about every version. You might not create a release everytime a new commit is pushed to your mainline branch, but you do have a new version (the git hash is a version!). After several user stories have been completed and merged, however, you might release that version.

If you read that last sentence correctly, you likely picked up on that last part: you release a version. But maybe you have heard about the idea of "deploying versions and releasing features. Are these two ideas in conflict?

I don't think so. But to explain why, we need to go into a little bit of depth about the intention behind it as the idea of feature releases is tied to a specific type of software.

This situation is specific to a strategy often referred to as the feature flag pattern. In this pattern, you have already built a feature into a version, but that feature is not enabled by default or is only enabled for a small set of users. At some point, and you turn on or release these features to your users. It also allows you to turn the feature off if things go wrong.

This pattern is aimed at helping teams that manage software-as-a-service products so that they can deploy more frequently with less risk. I won't go into the details of how that happens here, but just know it does work. It works really well actually :)

This also brings me to the last point of deployments. I believe you also deploy a version. You don't deploy a release, despite what Jira says. Let's dig into that.

## What is a Deployment?

A deployment is the process of making a version usable. For a SaaS product, this usually means installing your software onto servers that can be accessed over the internet. For a library, it might mean sending a compiled jar file to a repository to be downloaded by others. An application like MySQL might do something similiar.

For a movie, if someone released a movie they had made, but you couldn't see it anywhere, it wouldn't really be that all interesting. It needs to be sent to the theater or uploaded to the streaming service for you to see it. 

Let's pause for one second though. So far we've said that a version is released and a version is deployed. But it doesn't have to be in that order. Perhaps the deploying the version happens before releasing the version. Remember, releasing a version is really about announcing a particular version. Making it accessible.

This actually happens all the time. A common example is a software library or package. A development team builds a version, deploys it to a repository to be downloaded, and then they release that version to other software teams. Without the version being deployed, the release would be useless. This is also the same for things like databases or other programs you might download and install yourself.

That is all well and good for user opt-in relases, but what about managed services? What about the most common software pattern emerging today of the hosted software-as-a-service model that is eating the world?

To talk about what deployments mean for that, we need to go back to features.

### Software Releases vs Feature Releases

Earlier, we talked about the idea of feature releases. This is the practice of not tying a customer feature to any on particular deployment of software. This is especially useful - if not only useful - in context of doing managed software. A feature release shouldn't be tried to any on specific deployment, though a deployment may be associated with one of the feature releases being planned for customers (i.e. the last piece of the puzzle to get the whole feature working).

Here, I'd like to suggest a simple delination between a software release and feature release to help keep some of these ideas clear.

* **Software Release** - a software release is really about announcing or making available a specific software version. For a library or downloadable exec, this likely comes _after_ the version has been deployed. In the context of a SaaS or managed service, releasing usually happens _before_ the version has been deployed to a production enviroment.

* **Feature Release** - feature releases may or may not be tied to a specific software version, but they are separate from a software release. Features may be built over the course of several versions, and therefore several deployments. Releasing the feature may also be controlled via feature flags or other methods to enable those features when a product determines the feature is ready.

## Putting It All Together

To help put all of these pieces together, let's look at some diagrams. 

Here we see a typical development lifecycle for a version for a software library or package. 


For a managed software product, the flow changes a litte bit.
