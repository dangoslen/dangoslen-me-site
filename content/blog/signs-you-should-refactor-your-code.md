---
path: /signs-you-should-refactor-your-code
date: 2020-07-26T18:40:02.980Z
title: Signs You Should Refactor Your Code
description: When is the time to refactor your code? Right now.
---
Have you ever had a moment in your of software career where you needed to make what should have been a simple change, but found it exceedinlgy complicated? For whatever reason, you just couldn't seem to make your change very easily and it hurt your productivity.

Or maybe it was a time when you couldn't understand what caused a production problem while looking at the source. Armed with logs and metrics, you still couldn't understand what code was being executed or where to start.

These are common symptoms of what I tend to refer to as "messy code". It isn't easy to work with, it isn't easy to read, and it certainly isn't easy to add new features too. 

In cases like this, you should consider refactoring the code. Refactoring is taking code that was written in a certain way, changing it to make it easier to work with, while preserving the same behaviors as the original code. My personal definition is

> refactoring is methodically making structural changes to existing code without adding, removing, or breaking functionality in order to more easily add, remove, or modify functionality in the future

## The Value of Refactoring

Refactoring is useful because knowing how to quickly and properly refactor code can help you implement the changes you need to make faster.  

It's akin to knowing a handful of patterns or general algorithmic techniques. When faced with a new problem, most developers will apply these building blocks to the problem to help them solve it easier. Do you need to create different handlers for different even types? Using an abstract factory or flyweight pattern with a map data structure is a good starting spot. Do you need to search through a list of items that are always in sorted order? Using a binary search is what is you want.

Having a set set of refactoring tools in your proverbial coding toolbox means that when you need to perform a refactor, it will simply be easier. When you have a change to make in a module and realize it would be easier to refactor the module first (more on this in a bit), you don't have to spend energy thinking about the "how" to do so. Instead, you quickly refactor the code using your tools, assert the tests pass to ensure you haven't broken existing functionality, and now you are able to implement your new code.

I won't go over the common refactoring patterns in this post - it would be too extensive (though I might post about them in the future!). You find summaries of the ones from Martin Fowler's great book [Refactoring](https://amzn.to/3jFSSqH) over at [refactoring.com](https://refactoring.com/catalog/).

## But How Do You Know When to Refactor Your Code?

This is a great question. While it's tempting to say something trivial like "whenever you need to" or "all the time", I think it is important to realize that there are times it might not be neccesary or worth-while to perform a refactor of your code. 

To be clear, I am an advocate for earlier refactoring than not. Refactoring code is just as reversible as the original code - you changed it anyway, didn't you? All code gets refactored at some point and so [all your refactor changes will be changed too](<>). 

Here are some good guidelines for when to refactor your code:

### 1. You debate in your head about it for more than an hour.

If you have spent more than an hour tinkering with the idea of refactoring a piece of code, your should just do it. 

Why? You have already spent enough time thinking about it to justify it. 

Time-box your effort if you think it might get complicated, and if it doesn't work, no harm no foul. You will have learned a lot about the code in the process, which can help you implement the changes you need to make or help you write a specific story for refactoring it later.

### 2. When a simple change requires changes to more than three distinct components.

If you find yourself having to make what I call "domino effect changes"  where you are updating component after componenent for what should be a simple change, you should refactor your code.

Why? Because this means your components are tightly coupled and tight coupling always makes changes harder.

 

### 3. You had to understand nuances about more than three other components than the component you were changing