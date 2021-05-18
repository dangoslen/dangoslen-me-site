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

But there are a few concepts that I think get misunderstood too often. These ideas are versions, releases, and deployments. 

And they get misunderstood for a lot of the same reasons as other terms - every engineer has different experiences they bring to these ideas. 

However, I think many of these ideas get misunderstood because they get used too interchangably. Teams will use release one week and deploy another without realizing it. Tools will use version and release to refer to the same thing. GitHub uses the term releases but other tools uses versions.

No wonder we get confused!

I want to share with you my perspective on what these terms mean for software teams and when to best use them. Hint - it depends on what you are building! Let's dive in.

## What is a Version?

A version is really simple in practice, but hard to explain. A version is essentially a unique "form" of something. The something - in our case software - starts out in one form, changes are made to it, and at some point we are call the next form "done". In this done state is really when we make it a version.

For example, when writing a paper, you likely don't just send in a paper the second you finish writing it. You likely created a rough draft, then went through a few rounds of editing. Each round of editing yieled a new version.

For software, that is generally our source code. We take our code in one form, change it, and at some point say the changes are done. We then create or cut a new version. It might be a new feature, a bug fix, a refactor, etc. Often, it is a combination of many of those changes. 


#### Side Note
Why do we call it "cut" a version (sometimes called cutting a release - but we will get there)? 

I don't know if there is a 100% correct answer, but if you think about another media it might click: movies. In movies, you often hear about the "extended cut" or the "directors cut". This is because in the early days of filmmaking, film would literally be [cut and spliced together](https://en.wikipedia.org/wiki/Cut_(transition)) to produce a final _version_ of the film (see! version!). Pretty cool!

Often a version in software concretely becomes a git tag where the tag value is a number or short string. Semantic versioning is a great stategy that is widely adopted, but some teams have used names or even used the date on which the version was cut. I highly suggesst using semantic versioning, but do what works for you.

## What is a Release?

People often don't get too mixed up with a version. But release - release does. 

What is a release? Is a release just another term for version? Do I release something, or is a release the something?

Well, sadly, both.

Let's go back to talking about movies. Let's say you have been working on making a great film. You've been working hard at editing the last scene and finally have a version cut you want people to see. For people to see it, you have to _release_ it. A release is the process of really showing and making visible the version you made.

You could keep the film all to yourself though. And you would still have a version. People just don't know about it.

I think this is similiar to a release in software. In fact, we are creating versions all the time - and so are others! But we often don't tell other's about every version. You might not create a release everytime a new commit is pushed to your mainline branch, but you do have a new version (the git hash is a version!). After several user stories have been completed and merged, however, you might release that version.

If you read that last sentence correctly, you likely picked up on that last part: you release a version. I stand behind this wholeheartdly. I also know this might be counter to an idea that is often cited in software: "deploy software and release features". I think that is also 100% true! But - it is used in a very specific sitaution. 

This situation is specific to a strategy often referred to as the feature flag pattern. In this pattern, you have already built a feature into a version, but that feature is not enabled by default or it isn't enabled for a small set of users. At some point, and you "turn on" access to these features over time. It also allows you to turn the feature off if things go wrong, but this is not a post about feature flags ;)

For a feature flag to work, though, a version of that software had to be created with the ability to enable said feature. And you need to know _which_ version has this new feature built into it before you can enable it. To me, this is the process of releasing a version. You say what the version is, what is in it, and what you can do with it. 

This also brings me to the last point of deployments. I believe you also deploy a version. You don't deploy a release, despite what Jira says. Let's dig into that.

## What is a Deployment?

A deployment is the process of making a released version usable. For a SaaS product, this usually means installing your software onto servers that can be accessed over the internet. For a library, it might mean sending a compiled jar file to a repository to be downloaded by others. An application like MySQL might do something similiar.

For a movie, if someone released a movie they had made, but you couldn't see it anywhere, it wouldn't really be that all interesting. It needs to be sent to the theater or uploaded to the streaming service for you to see it. 

Now, backing up, we've said so far that a version is released and a version is deployed. But it might be that you actually deploy a version before you release the version. Remember, releasing a version is 


