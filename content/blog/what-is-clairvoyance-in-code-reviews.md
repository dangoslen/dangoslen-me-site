---
path: /what-is-clairvoyance-in-code-reviews
date: 2024-10-13T15:26:17
title: What is Clairvoyance in Code Reviews?
description: Learning how to predict if a code change is going to be good or bad down the road oddly doesn't require a lot of prediction about the future.
keywords:
  - code reviews
  - code review best practices
  - human code reviews vs. ai code reviews
  - how to be a great code reviewer?
tags:
  - code reviews
  - team-driven developer
image: "../assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg" 
---

<center>

![](../assets/greg-rakozy-oMpAz-DN-9I-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@grakozy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Greg Rakozy</a> on <a href="https://unsplash.com/photos/silhouette-photography-of-person-oMpAz-DN-9I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

A few weeks ago, I co-authored an article with some friends at [Greptile](https://www.greptile.com/) about [AI vs. human code reviews](https://www.greptile.com/blog/ai-vs-human-code). It was a blast working with Greptile's co-founder, [Daksh](https://www.linkedin.com/in/dakshg/), on the article, as he brings an insider perspective about the new AI technology helping software developers become increasingly effective at their craft.

One of our key points was around something that was likely unexpected to a reader: the idea of clairvoyance. In our article, we claimed

> With enough experience, some engineers can predict a change being painful 6 months down the line in a way that isn't clear yet to most people.

And while the concept of clairvoyance goes beyond simple predictions about what will happen within a codebase, some of the readers of this blog might have raised an eyebrow. "Dan, haven't you always advocated for _not_ trying to predict too much about the code review?" 

You'd be right to think so. I've authored many [articles](https://dangoslen.me/blog/on-building-abstractions-too-soon/) on this topic, including one literally titled ["Stop Predicting the Future of Your Code"](https://dangoslen.me/blog/stop-predicting-the-future-of-your-code/)

In today's article, I want to reconcile this contradiction. I'll explain a bit more about what I mean by being clairvoyant as an engineer regarding code and why the most clairvoyant engineers are often those advocating for the simplest code to complete the task at hand.

## What is Clairvoyance in Code?

The word [clairvoyance](https://en.wikipedia.org/wiki/Clairvoyance) isn't likely in your daily vocabulary. It refers to someone's supernatural ability to view or perceive information not immediately available via their natural senses. It is often used to speak of someone's ability to predict or see future events, but it can apply beyond that.

When talking about clairvoyance in relation to code, we are really discussing an engineer's ability to sense or intuit whether a proposed code change will have a positive or negative impact on the codebase. A skilled engineer can think beyond just the immediate impact of a change and consider the effects six months, a year, or more down the road. 

For example, an engineer might notice a proposed set of code changes. After looking at it a few times, they might notice that while it follows SOLID principles and has good unit tests, the proposed code changes will be a bit too complex given the use case. They might be able to "see" how maintenance on a block of the code will be difficult given its importance to the rest of the system. 

In another case, an engineer might advocate for breaking apart tightly coupled components or shared state, even if the initial use case is relatively simple. Experience has taught them to recognize that shared state is always a bad idea, even if the initial implementation _seems_ simpler. 

With these two examples, the idea of clairvoyance shifts a bit from an oracle predicting the future of the code to that of a chess grandmaster. Chess grandmasters have built such a deep [intuition](https://premierchess.com/chess-pedagogy/the-artistry-of-chess-how-intuition-shapes-the-game) of how to play that they can sense what is happening on the board. 

Software engineers are no different. Given enough experience and focus on the craft of writing software, an engineer can sense when code will improve or hinder the codebase overall.

## Too Much Prediction Leads to Hasty Abstractions

Now that we've reframed what we mean by clairvoyance, what is the issue with predicting the future of your code?

Attempting to predict what your code needs to do or how it needs to evolve in the future often leads to trapdoors. We start attempting to solve tomorrow's problems today, even though we know very little about what those problems are (even if we think we know them!). We begin building components with limited context, building hasty or forced abstractions.

Hasty or forced abstractions are ones we all hate to work with in our code. These classes or functions assume too much (or too little!) about their context and require all types of overrides or workarounds to do what seems basic. I've written about them at length in a [previous article](https://dangoslen.me/blog/on-building-abstractions-too-soon/).

The takeaway I hope to leave you with today is that prediction !== clairvoyance concerning how we review code. We aren't trying to predict what the code will need to do or how it will change in the future. We are looking for that extra "spidey sense" that any particular code change will lead to good or bad outcomes over time.

The engineers who are good at this are also the engineers who usually apply a bit of patience during code reviews. They aren't trying to see if the code is just correct, they are trying to see if the code _feels_ right. They look past the business logic, the abstractions, and the linters and are looking to get a sense of if the code is something they can maintain not just today but tomorrow as well.

## Simple, Easy to Change Code Usually Has the Best Chance of Success

The next question is simple: how do we build clairvoyance as a skill to apply? How can we tell if the code will be an improvement or not? While heuristics can often be damaging guides for decision-making, when it comes to code, one that I've championed for a while is this: stick with the simplest code that gets the job done. 

I've seen time and time again that simple, easy-to-change code allows teams to more nimbly adjust it over time to changing business needs than code that tried to "get it right" on the first iteration. 

That isn't to say you shouldn't design with an eye for the future. You need to be aware of trap doors or situations where you are painted into a corner.

For the most part, these issues focus much more on data design (things like databases or API schemas) than the code itself. You need to be much more thoughtful in your data design than in the internal code separation, but even with data design, starting simple is usually better.

What I'm trying to advocate for here is the idea of emergent design. Instead of attempting to define and understand every aspect of systems upfront, we accept that we _don't_ know everything. We build intentionally for what we do know and attempt to codify new information as we learn it. If you've read Domain-Driven Design, this will be very familiar to you. 

As we learn more information, the right abstractions and components are thought to _emerge_ or reveal themselves to you rather than trying to think really hard about it all upfront. The result is a very elegant and crisp codebase vs. one that fights you at every turn.

---

I hope this brief article can help reconcile the seemingly contradictory ideas of human reviewers being clairvoyant while also encouraging reviewers to be cautious in predicting the future of their code. 

While they seem at odds, they actually harmonize quite nicely: it's all about sticking to the basics and avoiding the pull towards complexity when you have little context of what the system will do over time. 

Happy coding!





