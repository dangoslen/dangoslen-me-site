---
path: /one-file-improved-my-teams-communication
date: 2021-05-07T00:00:00.000Z
title: One File Improved My Team's Communication
description: How maintaining one simple file in our repository improved how my team communicated about the software we built.
keywords:
  - changelogs
  - software engineering communication
  - what is the purpose of changelogs
tags:
  - team-driven developer
  - communication
  - software development lifecycle
image: "../assets/photo-nic-co-uk-nic-_IL9n-5Ou6c-unsplash.jpeg"
---

![](../assets/photo-nic-co-uk-nic-_IL9n-5Ou6c-unsplash.jpeg "Camera bringing a bright scene into focus")

<center>

<i>

Photo by <a href="https://unsplash.com/@chiro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">photo-nic.co.uk nic</a> on <a href="https://unsplash.com/s/photos/focus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>

</center>

Communication is hard. We all know that.

What makes communication even harder is when we use terms that have or phrases that might mean different things to different people.  Whenever two or more people are trying to communicate, and everyone brings their own interpretation to the table, it becomes complex. This is especially pronounced with temporal things around scheduling or "new"/"old."

Let me illustrate with an example conversation:

_On a Sunday morning..._
Jennifer: "Hey! Want to get lunch next week?"
Samantha: "Sure! I'm free tomorrow!"
Jennifer: "I can't tomorrow - I meant next week, not this week..."

While the above conversation isn't real,  I'm sure you have had a similar situation happen to you. You and a friend or coworker different definitions of what "next week" is relative to the current day.

A few years ago, I discovered a similar problem in the software space. Our team was wasting time and energy in meetings trying to settle on the relative definition of a few things. It was causing frustration and confusion, forcing our team level set on this topic in almost every Daily Scrum meeting! And, sadly, by the next day, we would have to come back to the table and have the same conversation, explaining the same things again.

What was the problem? Versions!

Today I want to share with you a little more about this problem and how keeping one - yes one! -  file in our software repository can help your team solve it.

_Quick note: the terms release, version, and deployment get confusing in software. For simplicity in this article, when I am only talking about releasing a version of software, I am referring to creating an isolated "point in time" for a software project. This is normally done as a gift tag or a downloaded artifact (or both). I am **not** talking about releasing a version to a customer. That is very different and has its own set of challenges that we won't be discussing today._

## The Problem

I noticed this problem a few years ago. Our team was trying to sort out the features in the next version of our software. We knew that the work was almost complete, and we wanted to tell our product owner what was going to be in the upcoming version.

But then we found a bug. One that we needed to address. We needed to get a hotfix out pronto. We worked quickly and squashed the bug within the day had a new version ready to go.

But there was a subtle issue.

In creating a new version so, our definition of the **next** version had changed! Our team only referred to versions as the "next" version or the "previous" version. Or "the one after that" in some cases 🙃

The reason we suffered from this was that our versions were not _predictable_. We couldn't tell you what the next version would be, even if we had completed all the work we wanted to be in the next version! We used a combination of the git commit hash and that date at which our CI pipeline ran as the version. This meant that we had to wait until the version was created by our CI pipeline to know what it actually was.

## Predictable Versions

The first problem is simple(ish) to solve: use a predictable version. But how do you do that?

There are many ways to achieve this. [Semantic versioning](https://semver.org/  ) is the most common, but even named versions of the "year.release.patch" format can be used too. The point is that you know what the next planned version should be. 

Why does this help? Because now, instead of using phrases like "in the next version..." you start using phrases like "in version 2.3.0 ..." While this seems inconsequential, the truth is it will radically change your communication. When you have a concrete name or label for something, it is simply easier to talk about. 

Another example might be your extended family. I don't have a very large extended family, but I can tell you it is easier to refer to my uncle by his name than "my mother's twin brother." Even using the label "uncle" is more useful. Another might be cousins. Cousin Joe is much easier to refer to than "my father's brother's first son." 

## The Next Problem

After the issue of a predictable version number, there was always another question: what changes went into each version?

This problem is a little more complex, in my opinion. There are a lot of various tools and systems that a team can use to capture the contents of a software version. Nearly every software tracking software system (e.g., Jira, ServiceNow, Asana) has some way to track the concept of a version; Wiki's can be used to capture versions and release notes; even Google Sheets can be used.

What my team found, though, was that none of these solutions worked. 

Why? Because there were all out of sight and out of mind. Even if we all agreed that we should write release notes whenever we finished an item, we never remembered to do it. No matter what we did, we still had a mad scramble to find all of the items completed in a version and publish release notes right before we actually released that version. We would, inevitably then, miss a feature or bugfix from the notes, which created confusion for management and other teams using our software.

## The Solution?

We kept a changelog. That's it.

We created a new file (literally called CHANGELOG.md) and then made sure it was updated with a summary of meaningful changes. We even built a simple GitHub Action called [the changelog enforcer](https://github.com/dangoslen/changelog-enforcer) to guarantee that we updated the file as we went along. We then used this file to generate release notes that we put into a GitHub release whenever we were ready to release a version.

The result? Our team could concretely talk about which version we were creating and what items would be in that version. When the version was released, we simply posted a link to the GitHub Release for the version, complete with release notes drive from the changelog! 👏

Our team experienced better communication, quicker meetings, and better documentation! And we removed "yet another thing to do" for our development team since it was a natural part of development work. 👏 👏

---

Will keeping one file in your repository solve all of your problems? Nope. Not even close! 

But - if keeping a changelog helps solves a few problems, then perhaps you can spend your energy solving the others. If you do decide you want to try this approach, here are some tools that might help!

* ** [Changelog Enforcer](https://github.com/dangoslen/changelog-enforcer)**
* ** [Changelog Reader](https://github.com/mindsers/changelog-reader-action)**
* ** [KeepAChangelog](https://keepachangelog.com) **

Happy coding!