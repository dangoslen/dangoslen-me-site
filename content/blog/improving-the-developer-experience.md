---
path: /improving-the-developer-experience
date: 2023-12-19T00:00:00
title: "One Key to Better Software: Improving the Developer Experience"
description: All the software design in the world doesn't matter if devs can't easily and safely contribute code.
keywords:
  - developer experience
  - daily improvement
  - improving developer experience
tags:
  - software engineering
  - kaizen
  - leadership
  - developer experience
image: "../assets/lukasz-szmigiel-2ShvY8Lf6l0-unsplash.jpg" 
---

<center>

![](../assets/lukasz-szmigiel-2ShvY8Lf6l0-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@szmigieldesign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lukasz Szmigiel</a> on <a href="https://unsplash.com/photos/low-light-photo-of-forest-2ShvY8Lf6l0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

The pairing session was not going great. We were trying to get to the bottom of a tricky bug but had no luck. It was frustrating to feel like we weren't making progress.

But the really frustrating thing for me wasn't the lack of progress. It was the reason why we weren't making progress.

During my turn as the observer, I realized that my colleagues could barely get their code to run locally. They hadn't been able to set up a reproducible way to debug the app (in their IDE or otherwise) and had resorted to print lines everywhere in the code. They couldn't rely on their tests because they sometimes failed and failed unpredictably. To make matters worse, they were fighting with a swirling mess of Docker containers and had no less than four terminal windows open, all spewing text across the screen.

We couldn't make progress because we couldn't easily or reliably run or debug the application in isolation. The code was right there and also out of reach.

Now, there is a lot to talk about in that short story. But one of the big things that was clear was that this codebase had suffered from a lack of investment in the developer experience. 

In today's post, I want to talk about how to apply the idea of [Kaizen](https://dangoslen.me/blog/how-to-introduce-kaizen-to-your-team/) and continuously improve your developer experience. I don't have a new path or technique to unveil to show you (plenty of those exist already). Instead, I want to communicate why it is so crucial to make the improvement of daily work the most critical work and a way to get started.

## The Most Important Work

I couldn't stop reading the first time I went through [The Phoenix Project](https://www.goodreads.com/en/book/show/17255186). I think I read the whole book in less than a week (which is fast for a slow reader like myself). There was something so relatable about the characters and the setting. It was so relatable, in fact, that some parts were painful to read.

When I picked up [The Unicorn Project](https://www.goodreads.com/book/show/44333183-the-unicorn-project), I had a similar but even more visceral reaction. The author, [Gene Kim](https://itrevolution.com/author/gene-kim/), had somehow found a way to describe every pain point I had experienced in my development career! I read along and cheered (I think out loud) as Maxine navigated the complexities of code and political land mines with persistence and skill.

These books (among others) have significantly shaped my views on organizational structure, experimentation, and many other developer-related ideas. But the most important thing it shaped was what the most important work as a developer is: improving daily work.

Gene's [Three Ways](https://itrevolution.com/articles/the-three-ways-principles-underpinning-devops/) and [Five Ideals](https://itrevolution.com/articles/five-ideals-of-devops/) explain much of this better than I will. Still, my summary of these ideas and daily improvement is this: any improvement made to contributing code safely and easily to a team's codebase will have compounding benefits over time. 

i.e., if you make a 5% improvement to your ability to contribute code today, your whole team will experience that 5% improvement tomorrow. And that 5% improvement makes it easier to make the next significant improvement in developer experience next week, etc.

Whether the improvement is paying down [technical debt](https://dangoslen.me/blog/the-technical-debt-snowball/) or automating environment setup via `make` or Ansible scripts, they all add up. And relatively quickly. 

## Improved Developer Experience Leads to Better Code

When developers can't contribute code quickly and safely, many things start to happen to the code.
Tests start to be skipped because they are too hard to write
Teams begin to rewrite the same things over and over because there is no good code structure
No one wants to make anything but the most minor changes because they are afraid of what might break
These patterns, over time, lead to a negative spiral. The team can't contribute code quickly or safely, so they don't make improvements. The code continues to rot away as no one actively attempts to make it better or tend to it with care. Now, it's even more challenging than yesterday to make a change.

On the flip side, investing to improve daily work has the opposite effect.
Tests are easy to write because the team has invested energy into writing reliable tests and running them frequently.
Common patterns are identified and abstracted for reusability and efficient coding.
Everyone is confident about making changes as they trust the tests and code will tell them where they might have missed something.

This pattern leads to a virtuous cycle in which it's easier daily to change. This leads to better code, faster product delivery times (the code isn't in the way anymore), and often fewer bugs in production.

But making the code easier to contribute to isn't just a benefit to the code. It's a significant benefit to your team.

## Improved Developer Experience Leads to Better Team Morale

This ability to contribute code quickly and safely is more than just helpful to the code or product delivery speed. It improves your team's morale.

As the [SPACE framework](https://newsletter.pragmaticengineer.com/p/developer-productivity-a-new-framework) and other research have pointed out, developers are most effective when there is joy in their work. Joy is used loosely here to convey a sense that developers _enjoy_ and are _happy_ with their daily work.

And when developers enjoy their work, it's much easier for the team to feel positive and confident about their work, team, and direction.

Consider the unfortunately common situation where a team is tasked with shipping a feature in a codebase that is hard to get running. The tests are brittle, local environment setup is painful, and little documentation exists. The team spends the first few weeks of their project just getting everyone up and running.

As the project progresses and the deadline looms, the difficulty of working in this codebase begins to take its toll. The team becomes frustrated with the code and feels the pressure of the deadline. Before too long, the stress in the team is high and felt by everyone. Developers on the team are more likely to feel disengaged from their work, will have less patience, be distracted easily, and have a more negative attitude. Even the best teams will struggle in these types of stressful moments.

Now imagine how the team might feel if they had been given some time before this project to improve the codebase instead of being so focused on shipping a feature. They might have started fixing the brittle tests, automating environment setup, or simply refactoring coupled sections of the code. Maybe they could have done a little of each. 

In this case, the improvement of daily work would have left the team feeling drastically different. The team would feel more ownership of the codebase, be riding a positive momentum swing, and have an overall higher morale. This morale and positive mindset compounds even more toward improving daily work.

We can transform how our teams operate by improving their ability to write great code.

## How to Make Improvements

If you are convinced this is an important idea, you might already be asking: "But how do I go about improving your daily work?" It's a good question. It's daunting to look at a codebase and figure out how to make any improvements, much less a single one. 

Here are some guidelines that have helped me improve the codebases I've worked in.

### Be Observant

Before you can make any improvement, you first need to find the things that need improvement. While "if it ain't broke, don't fix it" is too strong of a phrase here, it is easy to become _too_ eager in your quest to make a positive impact. Not every class, module, or command needs to be refactored. Not every step needs automating (or at least not right away).

Whatever the case is, you need to identify the right leverage points within the code to exploit. To do this, you need to be an observer. 

Pay attention to how you interact with the code. How do you run tests? How do you see the results of automated tests? Is there a part of the code with a "DO NOT ENTER!" sign on the proverbial door? Are there abstractions that are hard to use and understand?

These are all signals for areas worth consideration for your effort and time. Keep some mental notes (or real notes!) about what you are experiencing, and you'll find the right areas to focus on.

### Reserve Judgment

It's easy to be a critic when you're detached from something. From politics to sports (couch quarterbacks), pronouncing judgment on others is easy to do from a distance.

The same can be true for a codebase. We can start delving into code, see all the flaws that exist, and begin criticizing the code and the developers who contributed. "Why on earth would they do it _that_ way?" we think in our heads.

We must reserve this judgment if we are to make any progress on improving the developer experience within that codebase. This is especially important when [joining a new team](https://dangoslen.me/blog/four-tips-when-joining-a-new-team/). 

Instead of critiquing what we find, we should try to understand what forces and decisions got the code into its current state. Codebases often undergo many transformations as the products they serve change. These changes can sometimes be abrupt or happen too quickly. Teams need to work quickly to make something work. 

These transformations often produce odd "gaps" in the code that have to be bridged or covered up for the code to function. It's like what happens to a house with too many additions too quickly. Rooms feel odd, the layout might not make sense, and there are (literal) gaps and cracks everywhere covered up by caulk or paint. 

Understanding the context can help us remember that while the code might be problematic, it did serve a purpose. Having this mindset will lead us to ask better questions about where the code should be going rather than just ad-hoc changing immediate problems we see. Ironically, ad-hoc and rash code changes like that are often how the code became that way in the first place :)

By reserving our judgment on the cod, we can better understand how to change it towards a better world.

### Start Small

Once you start identifying points of improvement, you'll be eager to dive in. But be cautious. Big refactors and giant rewrites tragically tend to fail. Many times, it's because the change is simply too big. 

Instead, aim to make small improvements. Even adding an `npm` script for a common task can be a small change with big benefits (no more time spent searching Crtl+r through terminal history). It might feel insignificant depending on the size of your problems, but small wins are what create the compounding effect. 

By focusing on small improvements, you also get the ability to blend that work in with your other work. i.e., you won't need special permission to go rebuild something if it will only take you two-three hours to implement. You'll be able to make more improvements this way. Another benefit is that by weaving improvements into your daily work, you'll start to find more and more areas of improvement. You'll only discover that odd API for a class if you are working with the code every day.

Of course, there _will_ be changes that necessitate more thinking, planning, and time. In these cases, do your best to estimate the impact of the improvement you wish to make on your code and the developer experience. You want to have a good answer to "Why this?" and "Why this now?" You might not be able to get a dollar figure or a concrete time estimate, but if you can point to delayed projects, outages, or constant on-call strife, those are good places to start.

### Bring Others Along

Lastly, make sure to bring others along. What I mean by this is to invite them to see [what a future world](https://dangoslen.me/blog/show-dont-tell/) could look like. Involve them in your work and bounce ideas amongst your teammates. Help them see where you could go if everyone got on board.

If you do this right, you'll start to learn about other places to make improvements _and_ receive offers to help make them happen. People love contributing to something they think is meaningful. Find what your team thinks is worth spending time on and work to make it happen.

Of course, not everyone will agree. There are skeptics and cynics on every team. They can present a challenging obstacle to your progress. We don't want to write them off, but we also don't want to let them hinder some great work the team is excited about either.

I am still learning myself, but what I have seen work is a combination of a few things.

First, don't write them off. Please don't ignore them, either. That behavior results in a massive gap and tension within the team that will build and build.

Second, try to find common ground. They may disagree with 80% of your ideas, but if they agree with 20%, focus on how to get that 20% done first. Building inroads in this way allows you to know where each other stands on issues. You can also show here that you'd be willing to help them with any of their ideas where they have common ground as well.

Last, remember you don't necessarily need consensus for every change or improvement. If there is consistently one person who disagrees while the rest of the team is on board - go for it. Don't do this in a spiteful way or in a way that pushes aside someone's views, but don't be too afraid to merge code in either. You can't please everyone all the time.

---

The summary today is clear: work to integrate the improvement of daily work into your daily work. 

It might take some tinkering to get right, and you might have to do some convincing along the way for other devs to pitch in, but it's necessary for teams that want to win.

It's the most important work we can do as devs: help make everyone else a more effective developer.

Happy coding!

