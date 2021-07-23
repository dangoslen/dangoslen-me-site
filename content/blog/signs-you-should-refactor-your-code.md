---
path: /when-should-you-should-refactor-your-code
date: 2020-07-30T04:00:00.000Z
title: When Should You Refactor Your Code?
description: "The simple answer: it's probably right now."
tags:
  - programming
  - software engineering
  - career
---
![Building being rebuilt with scaffolding ](../assets/hs-spender-ien1wzqg4t0-unsplash.jpg)

*<p align="center">Photo by [HS Spender](https://unsplash.com/@h1sts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/rebuild?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)</p>*

Ever had a moment in your software career where you needed to make a simple change, but found it hard to implement? The code was so fragile you couldn't make your change without breakout myriads of tests? I'm guessing you have.

Or maybe it was a time when you couldn't understand what caused a production problem while looking at the source. You couldn't understand which code was executed or where to start. Logs and metrics couldn't help either.

These are common symptoms of what I tend to refer to as "messy code." It isn't easy to work with, it isn't easy to read, and it certainly isn't easy to add new features too.

In cases like this, you should consider refactoring the code. Refactoring is taking code written in one way, changing its structure and implementation, while preserving the original code's behaviors.

A definition I like to use is this:

> refactoring is methodically making structural changes to existing code without adding, removing, or breaking functionality to easily add, remove, or modify functionality in the future

## The Value of Refactoring

Refactoring is a useful skill to have. Knowing how to properly refactor code can help you when faced with messy code. It allows you to focus more on the changes you need to make for your task data hand.

It's akin to knowing a handful of patterns or general algorithmic techniques. When faced with a new problem, most developers will apply patterns or algorithms they already know to solve new ones. Do you need to create different handlers for different event types? Using an abstract factory or flyweight pattern with a map data structure is a good starting spot. Do you need to search through a list of items that are always in sorted order? Using a binary search is what is you want.

Having a set of refactoring tools in your proverbial coding toolbox when faced with messy cod is the same idea. You can apply general refactoring patterns to the code right in front of you to make refactoring easier. Your energy and effort can stay focused on the actual problem you need to solve, not the refactor to enable it.

I won't go over the common refactoring patterns in this post - it would be too extensive (though I might post about them in the future!). You can find summaries of the ones from Martin Fowler's excellent book [Refactoring](https://amzn.to/3jFSSqH) over at [refactoring.com](https://refactoring.com/catalog/).

## But How Do You Know When to Refactor Your Code?

Great question! It's tempting to say something trivial like "whenever you need to" or "all the time." It is important to realize that there are times it might not be necessary or worthwhile to perform a refactor of your code.

To be clear, I am an advocate for earlier refactoring than not. Refactoring code is, after all, a reversible decision. You changed the original code, what is to keep you from changing it again? All code gets refactored at some point, including your refactors.

Here are some guidelines for when to refactor your code:

### 1. You debate in your head about it for more than an hour.

If you have spent more than an hour tinkering with refactoring a piece of code, you should just do it.

Why? You have already spent enough time thinking about it to justify it.

Time-box your effort if you think it might get complicated, and if it doesn't work, no harm, no foul. If nothing else, you will have learned a lot about the code in the process. That knowledge can still inform the changes you need to make or help you write a specific story for refactoring.

### 2. A simple change requires additional changes to three or more distinct components.

I call this the "domino component" effect. If one component changes, so do another and another. If you find yourself having to make a slew of changes like this, you should refactor your code.

Why? Because this means your components are tightly coupled. Tight coupling tends to make changes harder (see [coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)) for more).

The domino component effect also means that you will make it that much harder for the next person to make changes by forcing your changes into the current paradigm. You are causing your code's maintainability to go down in this scenario; we always want to improve our codebase, not the other way around.

### 3. You had to understand nuances about the hierarchy of the component you were changing.

Whenever you find yourself going up the inheritance tree level after level, you should refactor your code.

Why? Because [deep inheritance is just another form of tight coupling](https://stackoverflow.com/questions/11056943/deep-class-inheritance-hierarchy-bad-idea). It leads to fragile base classes, confusing sub-classes, and over time because challenging to maintain.

Deep inheritance is, unfortunately, one of the hardest problems to refactor. If you have a deep hierarchy, by trying to change a base class or component, you automatically make those changes in all of the sub-classes too. Womp-womp :(

- - -

These are, of course, just guidelines. It's ultimately up to you to decide when to refactor your code. My personal experience is that refactoring early and often is the best approach. Take a look at some code you wrote a few months ago, think of you could make it better, and give it a go! 😀

Happy refactoring!