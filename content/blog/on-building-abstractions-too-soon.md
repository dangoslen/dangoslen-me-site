---
path: /building-abstractions-too-soon
date: 2018-08-14T04:00:00.000Z
title: On Building Abstractions Too Soon
description: Why abstractions are emergent instead of dictated
---
![Broken down control center](content/assets/1_dst6edwapmjfwawjnykeja.jpeg "Photo by Caroline Methot on Unsplash")

About a year ago, I was working on a new feature for one of our projects at [Bandwidth](http://bandwidth.com/). It wasn’t just a new feature, it was the first of few a new features we were building for some of our internal users. We were all excited to be working on it, and ready to see what we would build.

I remember thinking *sooo* hard about all the OOP concepts and patterns I would use to create the right interfaces and be able to build the next feature faster than the first. I looked up the patterns in [books](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612), whiteboarded out the flow of components, and thought through my abstractions as best I could. I spent some extra time to get it “right”, got it through code review and testing and eventually got it deployed.

I gave myself a pat on the back thinking I had really stepped up my coding game.

- - -

Fast forward a year. I’m trying to write another related feature for the code I “got right” and I can do is think to myself: this code is stupid.

## The Trap.

I feel into the trap that I could solve tomorrow’s problems today. I think its something that happens to mid-level software engineers like myself (or at least I hope it does..). When you are a mid-level engineer, you’ve come a long way from writing the hacky code you did in school, but still haven’t mastered all the patterns like you would like — you just *think* you have. You’re a little too quick to pull the proverbial trigger and try climbing a mountain when we still need a guide.

There was a great [article](http://blog.scottlogic.com/2018/02/19/generic-platforms-the-rule-of-three.html) about that I spotted about this from Thomas Clarke at Scott Logic. Some might not agree 100% with his “3-strikes rule”, but I think the intent is clear: 

**Sometimes we simply don’t know enough about how the code we are writing today will be used tomorrow.**

I’ll do my best below to expand on Clarke’s idea and how abstracting your code too soon will slow you down both in the short-term and long-term.

## Keep it Simple, Stupid. Especially When You Start.

We all know the [KISS](https://en.wikipedia.org/wiki/KISS_principle) principle and we try to stick to it. Where things go wrong is we say “This will make things simpler down the road if build out the right components now”. And while that makes perfect sense in fantasyland where you can predict tomorrows problems, it's practically dead wrong.

The problem is you still don’t know what lies ahead on that road. Perhaps the first feature you are working on *is* in fact the edge case after all. Perhaps the business doesn’t need that feature after all. In either case, you haven’t saved time; you’ve squandered it.

**I’m not saying to write unclear, undocumented, untested code in a hurry!** 

In fact, I would rather have a component that does the 1 and only 1 thing it needs to do to implement the needed feature and has extensive tests to cover it, easy to read documentation and good names. Just don’t take more time than you really need to.

## Your Code Will Change Anyway.

Even if you get those components dead right to start, you will still likely wind up changing it over time. A name might become better; you might recognize a better pattern; you might even add or remove different components depending on other pieces of your codebase.

With that in mind, don’t work tirelessly to get a component to 98% awesome on the first stab. Maybe 80% is ok; maybe you don’t even start with an interface; maybe you don’t worry about following Design Patterns to a T. Its going to change or not get touched ever again. Both of them mean you don’t need to fret about perfect code.

## Give Up the “Won’t Get Time Later” Fear

This fear is what leads engineers into the trap in the first place. The worry that you will never have time to “fix it” after its first implemented because of competing business needs or other bugs.

But, the premise that spending more time now will save you time later is not always true — in many ways that is why the industry has moved away from Waterfall to Agile. If a requirement wasn’t properly discovered in Waterfall, it was very costly. In many ways, building abstractions too soon has the same consequences and starts with the same catalyst: an unknown requirement.

Let iterative development then be iterative! If you have bugs cropping up around code or new features requested, you fix them or change them to meet the business need. If you don’t because the business decides they aren’t worth it, you really need to change it anyhow. You *will* get the time back *if* your system actually needs to change.

- - -

All this to say that trying abstract things too soon can cause problems with your code in the future. Start simple, like *stupid simple;* embrace that your code will change no matter what; and get rid of the fear that you will never have a chance to make it right.