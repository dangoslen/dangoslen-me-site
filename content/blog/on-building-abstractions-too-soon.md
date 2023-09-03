---
path: /building-abstractions-too-soon
date: 2018-08-14T04:00:00.000Z
title: On Building Abstractions Too Soon
description: Why abstractions are emergent instead of dictated
keywords:
  - software abstractions
  - iterative development
  - abstracting code
  - refactoring code
  - software desgin
tags:
  - software engineering
  - coding
image: "../assets/1_dst6edwapmjfwawjnykeja.jpeg"
---
![Broken down control center](../assets/1_dst6edwapmjfwawjnykeja.jpeg "Photo by Caroline Methot on Unsplash")

Several years ago, I was working on a new feature for a project. This project was incredibly new, as was the feature I was building. Moreover, it was the first among similar features we were building for some of our internal users, so I wanted to set a good foundation for these features.

I remember thinking *sooo* hard about all the object-oriented concepts and patterns I should use. I wanted to build this feature so the team could build the next one faster. 

I deliberated about the best interfaces, looked up the patterns in [books](https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612), drew out the flow of components on whiteboards, etc.  

I was thinking through my abstractions as best I could. I spent some extra time getting it "right," got it through code review and testing, and eventually got it into production.

I gave myself a pat on the back, thinking I had stepped up my coding game.

Fast forward a year. I'm trying to write another related feature for the code I "got right." All I can do is think to myself: this code is absurd. I can't add code easily without another code-breaking. To understand a single function, I have to go up the chain of inheritance to a parent class (and another parent class) to know how it all works. 

The code is a giant mess, and it certainly was not the clean code I had tried to write. 

What happened? 

## The Trap.

I fell into the trap that I could solve tomorrow's problems today. It's something that happens to many mid-level software engineers. When you are a mid-level engineer, you've come a long way from writing the hacky code you did in school but still haven't mastered coding yet - you just *think* you have. You're too quick to pull the proverbial trigger and try climbing a mountain when we still need a guide.

There was a great [article](http://blog.scottlogic.com/2018/02/19/generic-platforms-the-rule-of-three.html) that I spotted about this from Thomas Clarke at Scott Logic. Some might not agree 100% with his "3-strikes rule", but I think the intent is clear: 

> Sometimes, we simply don't know enough about how the code we are writing today will be used tomorrow.

I'll do my best below to expand on Clarke's idea and how abstracting your code too soon will slow you down both in the short and long term.

## Keep it Simple; Especially When You Start.

Have you ever heard of the [KISS](https://en.wikipedia.org/wiki/KISS_principle) principle? It's a way of thinking that prioritizes simplicity and easy maintenance over complexity. Many engineers love the idea and try to stick to it. We all have a good sense of what simple looks like now in the here and now.

Where things go wrong is when we try to predict what will be simple later. We'll say, "Things will be simpler down the road if we build out the right components now." And while that makes perfect sense in a fantasyland where you can anticipate tomorrow's problems with 100% clarity, the problem is we can't predict the future.

This is especially true when working on a new feature on a new project like mine. As you build your product, it could be that you realize the first feature *was* the exception to the rule, or perhaps the business doesn't need that feature after all. Either way, you haven't saved time; you've squandered it.

**I'm not saying to write unclear, undocumented, untested code in a hurry!** 

In fact, I would rather have a component that does one thing, has extensive tests to cover it, easy-to-read documentation, and good names. The less complex a component can be, the better. 

## Your Code Will Change Anyway.

Even if you get those components dead right to start, you will still change them over time. A name might become better. You might recognize a better pattern. You might even add or remove different components depending on other pieces of your codebase. It's all fluid.

With that in mind, don't work tirelessly to get a component to be perfect on the first stab. Maybe 80% is ok. Perhaps you don't start with a parent class for use later (hint: 99% of the time, you shouldn't). You could [start with tests first and write only the code you need to pass those tests](https://en.wikipedia.org/wiki/Test-driven_development). 

The sooner we accept that our code will change, the sooner we will make decisions that prefer writing code that is easy to change. It's going to change or not get touched ever again. Both of them mean you don't need to fret about perfect code.

## Give Up the "Won't Get Time Later" Fear

This fear is what leads engineers into the trap in the first place. The worry that you will never have time to "fix it" after its first implemented because of competing business needs or other bugs.

But, the premise that spending more time now will save you time later is not always true — in many ways, that is why the industry has moved away from Waterfall to Agile. If a requirement wasn't properly discovered in Waterfall, it was very costly. In many ways, building abstractions too soon has the same consequences and starts with the same catalyst: an unknown requirement.

Let iterative development then be iterative! If you have bugs cropping up around code or new features requested, you fix them or change them to meet the business's needs. You will be learning constantly and having the ability to change code quickly leads to speed of development.

You *will* get the time back if your system is easy to change.

---

All this is to say that trying abstract things too soon can cause problems with your code in the future. Start simple, like *really simple*, embrace that your code will change no matter what, and get rid of the fear that you will never have a chance to make it right.

Happy coding!