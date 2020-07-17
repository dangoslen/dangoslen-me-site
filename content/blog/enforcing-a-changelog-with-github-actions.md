---
path: /enforcing-a-changelog-with-github-actions
date: 2020-07-15T23:20:37.905Z
title: Enforcing a Changelog with GitHub Actions
description: How to keep your team's changelog up to date.
---

For the better part of last year, my team was having trouble with what seemed like a trivial problem. 

We needed to publish release notes for our releases to stakeholders.

I'm sure many of you have similar requirements. You have users (internal or external) and you would like to publish something that makes it easier for your users to understand the new release. Are there any new features? Any fixed issues? What about performance improvements? These are all things to consider to publish into your release notes.

For our team, we had mainly technical internal stakeholders, which solved (at least partially) some of the problems other teams might face.

But what we found was becoming difficult was not writing the notes for a change. What was difficult **remembering** to write them down! 

We would go a few weeks forgetting to write our release notes for a change, and then release time came. It would be a scramble to remember what work we had done in that release and attempt to write meaningful notes for each. Inevitably, we would miss things, causing delays in our handoffs to teams. If you have read much of my blog - or just software literature in general - you know that handoffs are an absolute bottleneck for your process.

## What To Do?
We took a step back and realized there must be a better way. We praticed the art of kaizen 