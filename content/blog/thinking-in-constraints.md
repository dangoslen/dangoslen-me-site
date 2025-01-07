---
path: /thinking-in-constraints
date: 2025-01-05T18:55:25
title: Thinking in Constraints
description: How to apply constraints to problem spaces to solve them more effectively.
keywords:
  - problem-solving
  - constraints in problem solving
  - solving large problems as a software engineer
tags:
  - problem-solving
  - software design
image: "../assets/bournes-senruob-xCwPC-Vmhsg-unsplash.jpg" 
---

<center>

![](../assets/bournes-senruob-xCwPC-Vmhsg-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@0ruofei0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bournes senruoB</a> on <a href="https://unsplash.com/photos/a-green-fence-with-a-red-arrow-on-it-xCwPC-Vmhsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

A common piece of advice given to many engineers is this: "You aren't paid to write code; you are paid to solve problems."

This advice has been an important part of my growth as a software engineer. There are many problems I've encountered that were solved without any code at all (process problems, documentation gaps, etc.) or problems our team solved with very few lines of code that made someone's life easier (making something clickable, for example). There are, of course, problems where a lot of code had to be written top.

As I've encountered more and more problems, I've often found myself having one of two knee-jerk reactions when faced with a new problem: 1) too easy or 2) impossible.

Of course, those reactions are extremes. Most problems lie somewhere in the middle. Additionally, many of the "easy" issues I've encountered have some form of complication, while many of my initial reactions to "impossible" problems had reasonably straightforward implementations.

One of the tools I've used to reorient my knee-jerk reactions is thinking about constraints. 

I don't mean thinking exclusively about [Constraint Satisfaction Problems](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem) (though that can help; more on constraints in a moment), but more about how you think about a problem space.

For example, if you want to improve your CI build times, there are a lot of avenues to pursue that could lead to an improvement. Instead of focusing on _all_ builds, you could start by improving only the slowest builds or the builds for a particular tech stack. In this case, you've made the problem smaller by adding a constraint (only look at certain kinds of builds) to the original problem (look at all builds). 

Today, I want to share a bit of how I think about this when solving problems, and I hope it can help you.

## Adding vs. Relaxing Constraints

Depending on your computer science background, this idea might be more familiar as _relaxing a constraint_ rather than adding an additional one (especially if you are thinking about formal Constraint Satisfaction Problems I mentioned earlier). I use the term adding or constraining a problem in a business context as the problems I receive as a software engineer are often very large and nebulous, and I need to get a grasp on the problem itself before I can start solving it. Adding constraints in this sense reduces the problem space, so I can think about it better.

## Removing (Edge) Cases

As hinted at in the introduction, the first method I use for constraining a problem is to see if there are requirements or use cases you can remove or defer. 

If you can focus on a smaller set of use cases, you can often find traction with a few that are worth exploring.

This is especially true for edge cases. While edge cases are important, I've rarely seen one fit neatly into any solution (hence why it's an edge case). 

If you are just starting discovery on a problem, even if it feels huge and complicated, do your best to find the base case (more on that in a bit) rather than getting hung up on all the edge cases you likely won't be able to satisfy neatly anyway.

That isn't to say you can completely ignore them, either. Keep them in the back of your mind while you focus on the subproblem you've defined. You might find that one potential solution helps move the needle on those other edge cases, nudging you in the right direction.

## Thinking Recursively (Finding the Base Case)

A common tool in algorithmic research and thinking is  [recursion](https://en.wikipedia.org/wiki/Recursion#In_computer_science). The premise of recursion is, "If I can define a large problem as the sequence of smaller problems and solve _those_ problems, I can find a solution to the larger one." 

This type of thinking has been a core underpinning in computer science and applies to searching, sorting, optimizations, etc. 

This thinking can help as we solve business problems as well. 

If we can divide large problems into subproblems with reasonably easy-to-understand base cases (the point at which recursion stops), then we can start solving the larger problem.

Finding the base case for a large problem can be tricky (which is why searching is important; more on that next). But the general way I think about it is asking, "What data or rudimentary capabilities do I need to exist in the system to solve that problem?" Those tools or data sometimes exist, but surprisingly, they are often absent or incomplete. The first step is to figure out those base cases.

A trivial example might be you work for Calendly or Clockwise and you want to optimize your users' schedules. Of course, you would need a reasonably easy way to access their schedules and all of the events on them. Without that information, there isn't anything to optimize!

Sure, that isn't the base case of the optimization problem itself, but it is a base case for the ability to solve the problem, which is what we are after here.

## Searching (Experimenting Quickly)

When attempting to solve a large problem, spending most of your time and energy deep in thought can be tempting.

While you do need to spend a lot of time thinking, it's also important to spend time searching. I don't mean looking around on the floor or scouring the internet for ideas (though those aren't bad ideas—except maybe don't look on the floor 😀). What I mean is applying the concepts used in search algorithms to find a solution. 

In search algorithms, you try to find a sequence of steps or decisions to get from a starting point to a desired endpoint. Many algorithms have a form of "take a step, evaluate, and decide the next step" structure (though they can get much more complicated).

When solving large problems in a business sense, it's a good idea to think in the same way. Instead of trying to build some large solution out of thin air, try experimenting with a few ideas and evaluating where the results of those experiments lead. Hack together an idea to test its viability; pressure test a few key decisions with [tracer bullets](https://wiki.c2.com/?TracerBullets); try changing an API definition and see what that might mean to the rest of the system.

Even when I'm not working on a set problem, I'll often spend a morning every few weeks just tinkering around within a codebase. Sometimes, I don't even have a firm idea of what I'm trying to change; I'm trying to observe and learn about the codebase more than anything. These mini-experiments often lead to surprising improvements or give me information I can use later on.

The key is this: don't just stare at walls thinking. Put your fingers on the keyboard, try a few things, and see where they lead you.

## Thinking Iteratively (Improvements Over Time)

The last key I use to reframe large problems is to remember that the first iteration of a solution won't be the final one. We can almost always improve any given solution or algorithm given enough time. 

Use this as a tool when you design solutions. It's perfectly OK for a solution to start with a few holes you need to fill in later. If you put in a good effort to write a design with holes and admit you need feedback and input to solve them, you'll be surprised how many people chime in with ideas.

When you combine this with the other techniques from this article, you'll realize you can often build only a small portion of a solution to start (and even ship what you complete) and then iteratively review what the next most important aspect is to solve. 

My team at Policygenius did this for a large feature several years ago. Instead of trying to solve for every use case for a feature, we solved the simplest one first and shipped it quickly. We then looked at the next case and realized, "Oh, we need to change some of what we just did." We did that several times over, keeping a tight feedback loop between the team, our product owner, and our users, and what we ended up with was way better than if we had solved it all at once.

As a mentor of mine says, "Great code isn't written; it's rewritten." 

The same goes for problem-solving: great solutions aren't designed; they are re-designed.

--- 

To wrap up, when you face a big and intimidating problem, try not to let your gut reaction take over. Take a breath, review the problem, and consider how to constrain it to make it smaller.

By making the problem smaller, you can use algorithmic thinking, such as iterations and subproblems, to help you build better solutions. 

You'll also likely find incremental value in a solution that you can ship faster. And shipping something valuable faster is almost always a good thing. 

Happy coding!











