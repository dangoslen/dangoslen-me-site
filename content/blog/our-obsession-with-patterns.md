---
path: /our-obsession-with-patterns
date: 2021-02-27T14:53:06.103Z
title: Our Over Obsession With Patterns
description: Why I think we use patterns too much as the solution to all
  problems rather than what they were designed for.
---


![Patterns in King's Cross London](../assets/clem-onojeghuo-t7gi_cyrkdg-unsplash.jpg)

<center>

<i>

Photo by [Clem Onojeghuo](https://unsplash.com/@clemono?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/geometry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</i>

</center>


Learning patterns have become a core aspect for many people on their journey to becoming software engineers. Articles and articles have been written about patterns and how to apply them. Courses, youtube videos, and GitHub repos all exist to help engineers master the power of patterns. I've even [written about patterns before](https://bit.ly/3mzVuYW) myself.

As a senior engineer, however, I've started to wonder if we went in the wrong direction with patterns. 

The more code I write, the more I use the same patterns and the less I care about the others. I don't memorize them or even have a page bookmarked to look them up quickly. I certainly don't go attempting to use a pattern just because it is in a book or article. 

I think we are over-obsessed with software patterns. And I don't think we should be.

## The Wrong Direction

One of the reasons engineers have become obsessed with patterns is because patterns offer solutions. The idea goes "If I can learn every pattern, then I write any software and solve any problem". That thinking is kinda like "If I had everything in the world, then I would be happy."

Sadly, neither are true.

The reason is the direction is wrong. **The best software engineers don't focus on memorizing existing solutions, they focus on solving new problems in the best way possible**. The happiest people in the world aren't those that focus on wealth or money or possessions. The happiest people in the world are those that have immense clarity about what they love and they focus on that.

Don't get me wrong - learning about patterns **is** helpful. Knowing them will give you more tools in the proverbial toolbox that you can reach for at any point in time (more on tools later). But just because you have a hefty toolbox doesn't mean you know the craft of writing software.

## Patterns Can Actually Be Really Limiting

Patterns can provide incredible flexibility and evolvability within your codebase, but only if your codebase is of the right type. Object-oriented languages and statically-typed languages of course do well with patterns. Function programming and dynamically-typed languages tend to not benefit as much. This is especially true for languages such as Haskell, lisp, or even prolog. 

I mention this because most engineers can program in more than one language and the type of language used on a project is based on the problem space. Yes, you could write a Java application to send a simple HTTP call to set up data for a test. Or you could write a bash script. Applying patterns in a bash script isn't the same as Java. And you don't *need* a pattern anyhow to send a simple HTTP request.

If you learn patterns because you think knowing patterns will magically help you write any software in any language to solve any problem, think again.

## Patterns Are Tools. Not multi-tools.

I've found that while patterns are useful to solve the problem they are meant to solve when applied before that problem actually exists, it only creates confusion. Engineers take the patterns they have learned and attempt to apply them anywhere and everywhere. They treat them like a multi-tool that can "solve anything".

Have you ever actually used a multi-tool? They are bulky. They are really heavy. And they rarely can do all 2,897 functions promised by the attendant at your local outdoor store.

Tools on the other hand tend to be much different. They have one, maybe two extremely specific use cases for which they are designed to solve. You wouldn't use a screwdriver to drive a nail and you wouldn't use a sander to cut a board in half. Even within a tool like a socket wrench, there are different sizes for different needs. 

We should think about patterns like tools. They have specific use cases that they were specifically designed to solve. Trying to use them to solve different problems isn't going to solve anything. When used correctly they will improve your ability to implement the solution you have in your head. Used poorly, and you'll be spending extra hours fighting against yourself.

![Wacky Shack Fun House](../assets/wacky_shack_fun_house_-_panoramio_-2-.jpg)

## Patterns Can Lead to Over-Engineering. Fast.

Have you ever worked in an old, crufty codebase? You know the ones I'm talking about. Where classes are 10000 lines long, functions take 7 different boolean arguments, and some comments say "Please don't touch this code!". I have and it isn't fun.

But have you ever worked an over-engineered codebase? It feels really clean and concise. Small classes, small functions, etc. But it feels like a smoke and mirrors game. Where the crufty codebase felt like trying to untangle a massive knot of wires, an over-engineered codebase feels like trying to make it through one of those fun houses at the fair - it's all smoke and mirrors, and you constantly question what things are real.

What leads to these over-engineered codebases is often the overuse of patterns. Even when the right pattern is used for the right "problem", simpler code would have been plenty sufficient. I'm a big fan of writing simple code before anything else as I believe the simpler a codebase is, the easier it is to build upon. 

And keeping things simple is actually not that easy. It takes constant refactoring, thinking, and tinkering. Patterns can quickly create complexity if not used judiciously. 

- - -

I'm still a big fan of patterns and using them where appropriate. This article is simply a caution that patterns don't solve all your coding problems - they only solve the ones they were designed to solve. Think critically before applying them and always - ALWAYS - [start simple](https://bit.ly/3sbLjLk).

Happy coding!