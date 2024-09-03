---
path: /pair-reviewing
date: 2023-02-15T00:00:00.000Z
title: Pair Reviewing
description: Pair programming is a fantastic tool to improve code and share knowledge. Pair reviewing can be just as beneficial and I think you should give it a try.
keywords:
  - pair reviewing
  - code reviewing
  - pair programming
  - how to review code
  - how to leave a code review
tags:
  - code reviews
  - pair programming
  - team-driven development
image: "../assets/john-schnobrich-FlPc9_VocJ4-unsplash.jpeg"
---

<center>

![Two people pointing and looking at a shared sceen](../assets/john-schnobrich-FlPc9_VocJ4-unsplash.jpeg)

<i> 

Photo by <a href="https://unsplash.com/@johnschno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Schnobrich</a> on <a href="https://unsplash.com/photos/FlPc9_VocJ4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  
</i>

</center>

Code reviews can be daunting. Whether they happen [async via pull requests](https://dangoslen.me/blog/the-four-types-of-code-reviews/) or during a pairing session, whenever you ask for technical feedback, it can be frightening.

But the same can go for the person on the other side. Reviewing code can be tricky if you've never done it before. Do I comment on everything? What if there might be a better implementation? How do I not come across as harsh or mean?

While I've done a lot of writing on [how to review code](https://dangoslen.me/blog/whats-the-point-to-code-reviews-anyway/), a colleague of mine had an idea I hadn't considered before: reviewing code together.

We set up a time and spent around 30 minutes reviewing code together via a pull request - and it was a blast! I'm calling it "pair reviewing."

I had so much fun - and my colleague learned a lot, too - that it seemed worth sharing.

Today I want to walk through how we reviewed code together and some of the immediate benefits realized. I'll also compare this to pair programming and explain why pair reviewing has a unique value worth considering.

## What We Did

We started things out very similar to a pair programming session. One person shared their screen and acted as a driver of sorts. The other (me) followed along and acted more like a navigator, thinking more about the larger picture of the code under review and the problem it was trying to solve.

In many ways, we acted as co-detectives asking questions about the code. Is it solving the right problem? Does that make sense to you? How could we make this better? Are there any other alternatives?

I found that asking these questions out loud had the same effect as doing a pair programming session. It forces each person to pause and actually articulate an answer, which in turn requires a bit more thoughtfulness than keeping an idea in your head. We had good conversations about the pros and cons of the code we saw and could reason about it together. We'd review a section of code, ask questions, and work together to leave feedback.

We also made sure to timebox our review; we didn't need to co-review every line. We focused our time and attention on the places that initially didn't make sense, pushing for clarity and understanding. It was only ~30 minutes working together in total. 

The result was we both had a better understanding of a pull request, and we left better feedback than if we had been working apart.

## The Benefits

I was surprised by how beneficial this was to my team (and myself!). Let's go over a few of those them.

### Learning How to Read Code

What I found interesting here was how different my teammate and I read the code in the review. I've learned to read the entire review before leaving feedback. I might leave notes as a review comment to myself (which only gets sent to the author once explicitly sending all of the review comments) along the way, but I often answer my own questions as I read more code.

My teammate wanted to focus on understanding the first file they saw, which led to some excellent questions about the code that was changing. However, I noticed a lot more jumping around the code as we searched for more information for the first function we saw. I coached my teammate about the importance of reading all of the code first before starting to drill down into details.

In both strategies, however, there is a need to know how to read code. Reading code might sound too basic of an activity to be considered a skill, but there is a lot to get right! You need to understand how the language works, where a programmer might make a mistake (and infer what they meant to do - which is difficult), and consider the implications of a line change to the overall system. It really is a skill!

By doing a pair review session, I was able to help coach my teammate on how to read the code under review. We discussed the importance of developing a mental model of what the code does and how the changes affect that model. We thought about how to ask questions that lead to the right feedback (i.e., if a method is missing a param, which place is wrong? The method or the caller?).

We read code more often than we write it - so learning to read it well is a necessary skill to develop.

### Learning How to Give Feedback

In a traditional pair programming model, the pair would be writing code. In pair reviewing, we were writing feedback. And delivering good feedback is pretty complicated! 

Working together to provide good feedback was where a lot of the skill development happened. How do you give helpful, constructive feedback? How do you give feedback in a way that protects yourself from making an incorrect statement? How do you ask questions to encourage collaboration instead of hostility? It's a tricky business.

This is where having a second reviewer was helpful (and the closest to pair programming). One person would ask a question - "Is this function being used right?" - and the other would look up language docs to answer that question. This helped us either realize it _was_ being used correctly or we had clear supporting evidence for when it wasn't. My teammate and I were able to formulate constructive feedback to leave for the author that was better than if we had given it alone. 

It also helped us run feedback comments by each other quickly, which acted as a brief gut check before writing something down. Asking each other, "How does this sound to you?" often helped us consider the author's perspective better, which led to better overall feedback.

### Learning About Patterns (w/o the Stress of Implementing Them)

One of the aspects of pair programming that I've always had a hard time with is the pressure. There can frequently be a perception of pressure to code quickly while someone is watching you, a feeling many would classify as less than helpful. 

With pair reviewing, I could discuss patterns or ideas that could be useful for the code without my teammate feeling like they had to implement those ideas right then and there. It allowed us to discuss the benefits of the ideas outside of deciding if we needed to pivot and start coding them up.

This shift sounds subtle, but I found it incredibly helpful. It allows learning to happen in a stress-free environment, which improves total learning outcomes since [stress impairs memory function and learning](http://brainrules.net/stress/). You wouldn't want to learn how to ride a bike the first time you went mountain biking; you likely don't want to learn a new pattern the moment you have to implement it.

In our pair review session, we discussed some patterns that could help the code. We did a few experiments with how and why they would work and read up on them through a few blogs, articles, etc. We decided to focus on only one or two and left feedback about how those patterns could help the code for the author (complete with evidence!).

The last cool benefit of this was the impact. Not only did the teammate I was reviewing with learn a new idea, but so did the author since we left feedback about the pattern for them. This means that our pair session was actually a force multiplier - two people were learning about a new idea than just one. 

Pretty cool, huh?

## What About Pair Programming?

Many readers might be getting this far and thinking: "Why not just do pair programming first?" That is a good intuition: pair programming would likely be faster overall. 

However, in this case, code reviews are a part of my team's practice (and many other teams in the software industry). So while it is good to ask if pairing would have been better, it's still missing the context that not everyone will be able to "just pair" instead of going through pull requests.

To be clear, I'm a big fan of pair programming, but I've also found that even the best pair programming practice still has a few shortcomings. My take is that teams should be able to [utilize both pairing and async reviews](https://mergeboard.com/blog/7-pair-programming-code-reviews/) when required. Adding tools to your toolbox is always a good thing. So instead of insisting "all code must be written in a pairing session," helping everyone learn code reviewing skills is a net benefit.

Plus, any skills learned from reviewing code asynchronously will translate to pairing as well. Learning to read code well, formulating thoughtful feedback, and asking good questions are fantastic skills in any context. Let's not negative all these benefits simply because it wasn't the optimal code creation strategy.

---

The point of this article isn't to start booking pair reviewing sessions. The point is that pair reviewing can be a tool to help junior devs learn how to read code, give thoughtful feedback, and become a better reviewers. 

If you are a senior dev, ask a dev that might be intimidated by code reviewing if they want to see what you do. If you are a junior dev looking to excel, ask a senior dev you respect if you can join them during a review. 

As mentioned earlier, if you do have the option to do pair programming directly vs. only async reviews - take it! But this can be another tool in your toolbox to help everyone on your team write better code and spot issues early (regardless of the context). 

If pair programming makes devs better programmers, pair reviewing can help programmers be better reviewers.

Happy coding!