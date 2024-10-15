---
path: /stop-predicting-the-future-of-your-code
date: 2019-11-01
title: Stop Predicting the Future of Your Code
description: Why our instinct to build for the future is often wrong. Very wrong.
keywords:
  - software engineering
  - software design
  - software engineering abstractions
tags:
  - software design
image: "../assets/1_68fPZL6QCXC19wgqi32-MA.jpeg" 
---

<center>

![](../assets/1_68fPZL6QCXC19wgqi32-MA.jpeg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@loic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Djim Loic</a> on <a href="https://unsplash.com/s/photos/time?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>

</span>

</center>

If I could give any advice to any software engineer — especially ones working on a brand-new project — it would be this: just write the simplest code to get it working.

That’s it.

Why is that the most important piece of advice I would give? Because all developers know the pain of old crufty code. Of abstractions that are wrong. of classes so complex that everyone is afraid to read (let alone change!) them.

Instead, I would tell developers to write the simplest code possible to get something working. Even if that includes duplicated code, I bet overtime that duplicated code will be easier to maintain than an overly complicated abstraction.

[Sandie Metz](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction) is one of the first (that I know of) to talk about this idea. She stated it several years ago like this:

duplication is far cheaper than the wrong abstraction

At first, all of the academics turned up their noses. Don’t we teach that duplicated code is bad? Shouldn’t developers write a function once and reuse it everytime? They didn’t like the idea one bit.

Industry leaders, however, all seem to agree with Sandie. [Martin Fowler](https://martinfowler.com/) talks about the need for [preparatory refactoring](https://martinfowler.com/articles/preparatory-refactoring-example.html) before making an actual change — acknowledging that abstractions change. [Kent C. Dodds](https://kentcdodds.com/) talks about the idea of a [avoiding hasty abstractions](https://kentcdodds.com/blog/aha-programming) — when it was wrong to start. All of these thought leaders are seeing the problem that comes from dealing with abstractions that are wrong or cumbersome.

What I wish to contribute to the conversation is the title of this article. In my experience, we build wrong or hasty abstractions because we are **trying to predict the future**.

## An Admirable Goal

Our intentions are good though. We have an admirable set of goals we are thinking of when we try to hard to predict the future. We want to build a clean, crisp codebase. We want it to be flexible and maintainable. We want to be able to add a new feature in a data-driven way or via simple code changes as they are needed. The conclusion then is to build a framework or system that encapsulates all of that future feature work so that we can build it fast.

Maybe your thinking goes something like this: “If I think really critically about how the architecture will be used a year from now, it will be more easier to build the features we need in the future! I can save us time tomorrow by investing in good abstractions today.”

I’ve been that developer. I’ve made that promise. And I’ve never delivered on it like I wanted.

I’ve built abstractions and written code that made it hard to do simple things in the future. I’ve had to explain why my code made it hard for others to write what seemed like simple features. So much wasted time explaining history and reasoning and _blah, blah, blah_. I never got the future right and it cost our team productivity.

## Predicting The Future Is Hard

Of all the things humans are bad at, we are bad at predicting the future. We underestimate how long things will take almost all the time. We have all sorts of biases with how we view the future. To make it worse, we then look back on the past and re-work it to trick ourselves that we could have made better decisions. “If only we would have known…” and then put all our energy into repeating the pattern.

And most of us know this happens. We know we can’t predict what relationships, careers, or health will look like in a year. Instead we choose to focus on making the best decisions with the information we have now.

So why does our behavior change with our code? I don’t have all the answers, but I can tell you part of it for me is simple: I think I am a better engineer than I am. **Its pride**. I want to show off what I know. I want my teammates to say “Good gosh that is great code!” when I open a PR.

When I care more about writing simple and maintainable code for the sake of my current and future team rather than trying to show of, my impulse to predict the future goes down. I start focusing much more on the problem at hand. I also start getting feedback earlier on and collaborating more. All of which leads to better solutions.

## The Future Might Never Even Happen

No I don’t mean that you could die before the project finishes (though that could happen).

What I mean is that your project might die. It might get yanked since its too expensive. There might have been a business goal that changed and the project doesn’t align with that strategy. A better tool might have come along before you finished building yours. These things happen all the time.

With that in mind, why spend time agonizing about the future? Write the code that gets something working first.

Am I saying don’t write thoughtful code? No. Am I saying write long lists of “if else blocks” instead of creating meaningful classes? Of course not.

What am saying is to focus on the problem at hand first and write just enough code to get it done. That way you at least have something working. You can always iterate from something working better than something that isn’t. The chances of introducing complexity then is less.

## How To Stop Predicting the Future

I wish I had a silver bullet for you. Like many things, however, there isn’t one. Experience has to teach you the things that are you get preoccupied about and learn to ignore the right ones. You need to learn the things that create unnecessary complexity vs the things that are necessary to solve the problem right now.

The only piece of wisdom I will offer here is this: early feedback from your peers. Code reviews, pair programming, collaboration, etc. are all wonderful tools. Use them early and often to gain feedback about the code you are writing.

The reason this has worked in my career is because it goes back to pride. When I ask for feedback early, I’m asking for help. I’m letting the rest of my team contribute an idea. And whenever I have started with humility, I’ve almost always built a better codebase.

---

Stop predicting the future! Focus on the current problem and solve it as simply as you can. Tomorrow has enough problems of its own.

Happy coding!