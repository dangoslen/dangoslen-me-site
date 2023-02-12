---
path: /pair-reviewing
date: 2022-11-03T00:00:00.000Z
title: Pair Reviewing
description: Pair programming is a fantastic tool to improve code and share knowledge. Pair reviewing can be just as beneficial.
keywords:
  - pair reviewing
  - code reviewing
  - pair programming
tags:
  - code reviews
  - pair programming
  - teams
image: "../assets/ato-2022.jpeg"
---

<center>

![All things open banner in a a large conference room](../assets/ato-2022.jpeg)

<i> 

Photo by me
  
</i>


</center>

Code reviews can be daunting. Whether they happen [async via pull requests] or during a pairing session, whenever you ask for technical feedback, it can be a bit frightening.

But the same can go for the person on the other side. Reviewing code can be tricky if you've never done it before. Do I comment on everything? What if there might be a better implementation? How do I not come across harsh or mean?

While I've done a lot of writing on [how to review code](how to give feedback), a colleague the other idea I hadn't considered before: review code together.

We spent the next 30 minutes or so reviewing code together - and it was a blast! I had so much fun and I think my colleague learned a lot too. It seemed worth sharing.

Today I want to walk through what we did (hint: we reviewed code) and some of the immediate benefits realized. I'll also compare this to pair programming and why I think there is value in not just pair programming but pair reviewing.

## What We Did

We started things out very similiar to a pair programming session. One person shared their screen and acted as a driver of sorts. The other (me) followed along thinking a bit more about the whole of the code being reviewed and the problem is was trying to solve.

In many ways we were acting as co-detectives asking questions about the code. Is it solving the right problem? Does that make sense to you? How could we make this better? Is there any other alternatives?

I found that asking these questions out loud had the same effect as doing a pair programming session. It forces each person to pause to actually articulate an answer, which in turn requires a bit more thoughtfulness than keeping an idea in your own head. We had good conversations about pros and cons of the code we saw and could reason about it together. We'd review a section of code, ask questions, and worked together to leave feedback.

We also made sure to timebox our review; we didn't both need to co-review every line. We focused our time and attention to the places that at first didn't make sense, pushing for clarity and understanding. It was only ~30 minutes of time working together in total. 

The end result was we both had a better understanding of a pull request and we left better feedback than if we had been working apart.

## The Benefits

I was surprised how beneficial this was to my team (and myself!). Let's go over a few of them.

### Learning How to Read Code

What I found interesting here was how different my teammate and I read the code in the review. I've learned to read the entire review before leaving feedback. I might leave notes as a review comment to myself (which don't get sent to the author until explcitly sending all of the review comments) along the way, but I often answer my own questions as I read more code.

My teammate wanted to really focus on understanding the first file they saw - which actually lead to somre really good immediate questions about the code that was changing. What I noticed though, is there was a lot more jumping around the code as we searched for more information for the first function we saw.

In both strategies, however, there is a need to know how to read code. Reading code might sound too basic of an activity to be considered a skill, but there really is a skill to it. You need to understand the way the language works, where a programmer might make a mistake (and infer what they meant to do - which is difficult), and consider the implictations of a line change to the overall system. It really is a skill!

By doing a pair review session, I was able to help coach my teammate on how to read code under review. How to form a mental model of what the code does and how the changes affect that model. How to ask questions that lead to the right places to leave feedback (i.e. - if a method is missing a param, which place is wrong? The method or the caller?).

We read code many more times than we write it - so learning to read it well is a neccesary skill to develop.

### Learning How to Give Feedback

In a traditional programming model, one person would be writing code, but in this case they were giving feedback. And giving feedback is pretty complicated! 

This is where I think a lot of the real skill development happenned. How do you give feedback in a constructive way? How do you give feedback in a way that protects youself from making an incorrect statement? How do ask questions to encourage collaboration instead of hostility? It's a tricky business.

Working together, my teammate and I were able to formulate constructive feedback. In many places this is where having a second reviewer was really helpful (and the closest to pair programming). One person would ask a question - "Is this function being used right?" - and the other would look up language docs to answer the question. This helped us either realize it was all being used correctly, or we had clear supporting evidence for when it wasn't being used correctly. 

It also helped us to run feedback comments by each other quickly, which acted as a brief gut-check. "How does this sound to you?" often lead us being able to consider the author's perspective better, which lead to better overall feedback.

### Learning About Patterns (w/o the Stress of Implementing Them)

One of the aspects of pair programming that I've always a hard time with is the pressure. There can oftentimes be intense pressure to code quickly as someone is watching you, a feeling many would classify as less than helpful. 

With pair reviewing, I was able to discuss patterns or ideas that could be useful for the code overall without my teammate feeling like the had to implement those ideas right then and there. It allowed us to dicuss the benefits of the ideas outside of deciding if we needed to pivot and start coding it.

This shift sounds subtle, but I found it incredibly helpful. It allows learning to happen in a stress-free environment, which improves total learning outcomes since [stress impairs memory function and learning](http://brainrules.net/stress/). In the same way you wouldn't want to have to learn how to ride a bike the first time you went mountain-biking, you likely don't want to need to learn a new pattern the moment you have to use it.

In our pair review session, we discussed a few different patterns that could help the code. We did a few experiments with how and why they would work, and read up on them through a few blogs, darticles, etc. We decided to focus on only one or two and left feedback about how those patterns could help the code for the author (complete with evidence!).

The last cool benefit of this was the impact. Not only did the teammate I was reviewing with learn a new idea, but the author learned about it too since we left feedback about the pattern for them. This means that our pair session was actually a force multiplier - two people were learning about a new idea than just one. 

Pretty cool in my opinion.

## What About Pair Programming?

Many readers might be getting this far and thinking: "Why not just do pair programming first?" I think that is a good intuition: pair programming would likely be faster here. However, in this case, code reviews are a part of my team's practice (and many other teams in the software industry). So while it is good to ask if pairing would have been better, it's still missing the context that not everyone will be able to "just pair" instead of going through pull requests.

To be clear, I'm a big fan of pair programming, but I've also found that even the best pair programming practice still has a few shortcomings. My take is that teams should be able to [utilize both pairing and async reviews](https://mergeboard.com/blog/7-pair-programming-code-reviews/) when required. Adding tools to your toolbox is always a good thing. So instead of insisting "all code must be written in a pairing session," helping everyone learn code reviewing skills is a net benefit.

Plus, any skills learned from reviewing code asyncronously will translate to pairing as well. Learning to read code well, formulating thoughtful fedback, and asking good questions are fantastic skills in any context. Let's not negative all these benefits simply because it wasn't the optimal code creation strategy.

---

