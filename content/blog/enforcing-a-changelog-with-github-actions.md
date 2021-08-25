---
path: /enforcing-a-changelog-with-github-actions
date: 2020-07-15T00:00:00.000Z
title: Enforcing a Changelog with GitHub Actions
description: How to keep your team's changelog up to date.
tags: 
  - github actions
  - changelogs
  - devops
image: /assets/logan-weaver-_-aqiq8y_sy-unsplash.jpg
---

![](../assets/logan-weaver-_-aqiq8y_sy-unsplash.jpg "Photo by LOGAN WEAVER on Unsplash")

For the better part of last year, my team was having trouble with what seemed like a trivial problem. 

We needed to publish [release notes](https://en.wikipedia.org/wiki/Release_notes) for our releases to stakeholders.

I'm sure many of you have similar requirements. You have users (internal or external) and you would like to publish something that makes it easier for your users to understand the new release. Are there any new features? Any fixed issues? What about performance improvements? These are all things to consider to publish into your release notes.

For our team, we had mainly technical internal stakeholders, which solved (at least partially) some of the problems other teams might face.

But what we found was becoming difficult was not writing the notes for a change. What was difficult **remembering** to write them down! 

We would go a few weeks forgetting to write our release notes for a change, and then release time came. It would be a scramble to remember what work we had done in that release and attempt to write meaningful notes for each. Inevitably, we would miss things, causing delays in our handoffs to teams. If you have read much of my blog - or just software literature in general - you know that handoffs are an absolute bottleneck for your process.

## What To Do?

We took a step back and realized there must be a better way. We practiced the art of [kaizen](https://dangoslen.me/blog/how-to-introduce-kaizen-to-your-team/) and kept asking what the source of our problem was. What were we missing that would allow us to take one simple step forward?

The answer was simple: we needed to make sure that every developer added the release notes for their change when they made their change.

So the next question then: how do you make sure it happens? 

## A Rule is Only a Rule if You Have a Way to Enforce It

The answer was really staring at us in the face. How did we enforce passing builds? We had automated test cases that ran on pull requests and on merges to our mainline. How did we enforce code quality? We have static analysis tools setup to run on our pull requests.

So in order to ensure each developer writes release notes for their changes, we need to create some kind of automation on each pull request. If we just did that one action, we would be able to have release notes ready and waiting for us whenever it was time to release!

So, I decided to build it as a GitHub action. 

<h3><p align="center">💪 I call it the <a href="https://github.com/dangoslen/changelog-enforcer/">changelog enforcer!</a> 💪</p></h3>

The Changelog Enforcer is exactly as it sounds - it verifies that a change has been made to a common changelog file on every pull request. You can even skip the enforcement on pull requests that are making changes that don't worry an update - but it must of course be agreed upon by the author and the reviewer.

What it doesn't do (yet) is validate that the format of the changelog is correct. This is something possible in the future and will likely be a toggleable feature since not everyone will want the same format, though I highly suggest looking at [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) for more information on changelogs.

Check out the project and let me know what you think! Setting it up is easy - just use the [usage](https://github.com/dangoslen/changelog-enforcer#usage) section of the repo for a sample `workflow.yaml`

Happy coding!