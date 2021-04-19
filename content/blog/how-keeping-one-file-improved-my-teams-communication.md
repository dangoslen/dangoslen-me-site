---
path: /one-file-improved-my-teams-communication
date: 2021-04-29T00:00:00.000Z
title: One File Improved My Team's Communication
description: How Maintaining one simple file in our repository improved how my team communicated about the software we built.
tags: ["team","changelogs","software development lifecycle"]
---

Communication is hard. We all know that.

What makes communication even harder is when we use terms that by definition are relative something else. This especially pronounced with temporal things around scheduling or "new"/"old".

Let me illustrate with an example conversation:

_On a Sunday morning..._
Jennifer: "Hey! Want to get lunch next week?"
Samantha: "Sure! I'm free tomorrow!"
Jennifer: "I can't tomorrow - I meant next week not this week..."

While the above conversation is made up, I'm sure you have had a similiar situation happen to you. You and a friend or coworker different definitions of what "next week" is relative to the current day.

A few years ago, I discovered a similiar problem in the software space. Our team was waisting time and energy in meetings trying to settle on the relative definition of a few things. It was causing frustration and confusion - so much so that we had to levelset on this topic in almost every Daily Scrum meeting! 

What was the problem? Versions!

Today I want to share with you a little more about this problem and how keeping one file in our software repository can help your team solve it.

## The Problem

I noticed this problem a few years ago. Our team was trying to sort out the features in the next version of our software. We knew that the work was almost complete, and we wanted to tell our product owner what was going to be in the upcoming version.

But then a bug was found. One that we needed to address. We needed to get a hotfix out pronto. We worked quickly and squased the bug quickly and had a new version ready to go.

In doing so, our definition of **next** version had changed! And our team only referred to versions as "next" version or "previous" version. Or "the one after that" in some cases :upside_down_face:

The reason we sufferred from this was because our versions were not _predictable_. Even once we finished a version, we couldn't tell anyone what that next version was until after all of the tests had run and the version was "created". 

By created I mean that an identifier had been created to identify the version. Many GitOps or DevOps teams will either tag the repository, a Docker image, or a jar with the identifier for a version. 

In our case, our team was using a combination of a the date and the git hash of the commit that started a CI build to create the version. While simple and elegant in a way, it meant we could never know the next version of our software.

## More Problems

The first problem is simple to solve: use a predictable version number.

## Version, Releases, or Deployments?



## Relative Things are Hard(er)



 



Happy coding!