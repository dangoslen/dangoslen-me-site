---
path: /timeboxing
date: 2025-03-31T20:12:15
title: "Timeboxing: A Key for Staying Productive"
description: Productivity isn't just about getting as much done in a day as you can (aka, efficiency), it's about having the right judgement about what to work, why, and how much effort it might require.
keywords:
  - timeboxing solutions
  - timeboxing as a software engineer
  - how to apply timeboxing to stay productive
tags:
  - career 
  - team-driven developer
image: "../assets/1__dkcBNMJ4je-bK1zycnUCw.webp"
---

<center>

![](../assets/1__dkcBNMJ4je-bK1zycnUCw.webp)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@benchaccounting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bench Accountin</a> on <a href="https://unsplash.com/s/photos/shipping?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>

</span>

</center>

Time is one of our most important assets. We have a finite amount of time during our life on Earth.

The best engineers use this to their advantage. They understand that be being "choosey" with how they spend their time, they can accomplish more than other engineers who might be unfocused or sporadic in how they use their time [^1].

One tool I employ frequently to manage my time (and effort) is timeboxing. Timeboxing is about switching how you work. The definition given by the Agile Alliance is this:

> Rather than allow work to continue until the goal is reached, and evaluating the time taken, the timebox approach consists of stopping work when the time limit is reached and evaluating what was accomplished

I've found this tooling to be especially useful in a few scenarios that I wanted to share with you.

## Refactoring

Refactors are a necessary part of coding. Even the best code will need updates given enough time. It’s the nature of software.

Refactors also tend to become bottomless pits. What felt like a small refactor suddenly has you looking this way and that way with more things to refactor.

It can be like trying to untangle a rope. You might spend all this time working to undo a knot, think you’ve knocked it out, and then you find another one. 

Timeboxing a refactoring can help in two ways:

1) All or nothing: perhaps you say "I'll try refactoring this for an hour. If I am still am in a mess with no way out, I'll abandon it until later." In this way, your timebox kept from continuing to waste precious time on an effort that was going to fail altogether anyway. It's a way of practicing the adage of "fail fast."

2) Incremental commits: another strategy is to say "I'll try refactoring this bit here or there and after an hour I'll commit how far I've gotten." This strategy allows you to make potentially incremental progress on a large problem, but also keep you from spending too much time on something not necessarily important to your project. This approach is a bit dangerous though - don't just "commit what you've got" because your timebox is up! You still need to make sure you are leaving the code better than you found it.

In either case, timeboxing a refactor can be a good way to explore and learn about an area of a code base, filing that information away for later. I've often realized that after a handful of attempts at refactoring a module or class that eventually it "clicks" and then it happens all at once. 

Plus, if you have been following the second strategy, you will still have made incrementally better improvements to the codebase.

## Is It Good Enough?

One common question in every form of craft is this: “Is it good enough?”.

And unfortunately, it is a HARD question to answer.

You could spend nearly _all_ of your time coming up with a better design if you had to. You could review and re-write your documentation every day and still find a better way to communicate an idea if you tried hard enough.

Musicians want to know if that melody is good enough to capture the emotion they want. The painter wonders the same about the colors they used. The novelist is always wondering if a character feels relatable enough…

The gap between “your best” and “good enough” is infinite. You can still do more.

Software has a unique temporal component, though. We get to make changes all the time. Building a software solution is like painting a picture while viewing it as it hangs on the wall and knowing it will be re-painted again in few weeks. Most of the software we write _needs_ to be edited and changed over time and in this way we also have an advantage in that we can ask "is this good enough for right now?"

With that in mind, timeboxing can be a good solution to answer the "is it good enough?" question. Whether it's your own work or the work of someone else you are reviewing, start thinking in terms of "If I had another afternoon on this, would I make a material improvement on what I already have?" Or in the case of reviewing someone else's work, suggest "Maybe spend a few hours trying to improve this bit over here. After that, ship it!" I'll share more on a story around that in just a little bit.

Timeboxing here really forces the issue: is this something worth spending more time on? Sometimes the answer is a resounding yes and other times an emphatic "no." I've saved myself hours of effort and time by _not_ investing more time into a small script or code change in which even another full day of concentrated effort wouldn't have materially improved the final result.

## Experiments

The last place I've found timeboxing useful is experimenting. 

And I don't mean scientific experiments here. What I really mean is something closer to _exploring_ or perhaps micro-experiments. 

One of the best ways to learn about a domain or codebase is to look at it and "poke at it." I'll often look at a new codebase (or section I'm unfamiliar with), and start asking small questions like "And where does that come from?" or "How does that work?" Sometimes I'll even start changing things around just to see what things break when I run the tests (usually a lot!). 

My goal here isn't to perform some big change; it's to to understand how things work today. I'm trying to learn and build a robust mental model of what is going on. I'm trying to make as many connections and pathways across the codebase to see the whole road system and just a single road. 

Sometimes this experimentation might look something like "I wonder how long it would take me to add basic caching?" I'll spend a morning trying to see how far I get and sometimes I'll even surprise myself and get it done! But the key, of course, isn't about getting something accomplished as much as it is about learning. I've also thought many times "I bet I could do that in an hour" to find myself giving up after thirty minutes because it was clear what I wanted to do wasn't the right path to take.

In both cases, I come away learning something useful.

## A Story of Effective Timeboxing

As an example, I was reviewing a pull request from a junior developer. We build a lot of Spring Boot applications, and I saw a way that we could modify some classes to use Spring properties more effectively. He had limited experience with it. When I suggested we re-work it, we had a good conversation. He mentioned that he had a deadline for the work to be done end of the day tomorrow and was nervous about attempting to do a refactor late in the game.

Instead of making a hard yes/no decision, we decided he would spend the rest of the day attempting to do the refactor on a separate branch after he addressed any blocking feedback. It was about 2:00 or so when he stared the refactor. At about 4:30, he decided to call it quits since he was having trouble figuring it out. We agreed to merge the work he had working, and we could walk through the refactor problem the next day.

The next day, we got together reviewed where he had reached the day before. I was able to walk with him through the suggestions I had made. Within an hour, we figured it out together. We opened a pull request that included only this new refactor and had it merged by lunch.

Timeboxing the initial work lead to us a few awesome outcomes:

* Getting the working solution in place. Getting the immediate need completed first allowed us to meet our deadline confidently before trying a ton of re-work.
* Alleviating stress. Timeboxing allowed this junior developer to focus on learning and experimenting rather than worrying about a deadline.
* We still got the re-work done before deployment time! 

We set ourselves up to quickly finish the re-work the next day since it was in a separate git branch. Getting both the initial work and re-work complete before deployment time doesn’t happen every time, but in this case, it did.

--- 

In closing, timeboxing tasks can help you stay productive. Timeboxing can be especially useful for tasks and work that are “good enough for right now” like refactors or general reworking through an idea. Its also true for many other tasks like brainstorming, starting something that seems daunting, or finishing sometime you’ve been neglecting.

