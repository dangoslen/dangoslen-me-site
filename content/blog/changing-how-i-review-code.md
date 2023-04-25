---
path: /changing-how-i-review-code
date: 2021-06-10T00:00:00.000Z
title: I'm Changing How I Review Code
description: There is more to code reviewing the writing comments on the internet.
keywords:
  - how to review code
  - tips for reviewing code
tags:
  - code reviews
  - software engineering
image: "../assets/francesco-gallarotti-ruQHpukrN7c-unsplash.jpeg"
---

<center>

!["growing sapling"](../assets/francesco-gallarotti-ruQHpukrN7c-unsplash.jpeg)

<i> 

Photo by <a href="https://unsplash.com/@gallarotti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Francesco Gallarotti</a> on <a href="https://unsplash.com/s/photos/prune?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
</i>

</center>

I'm a big advocate for code reviews. I've written about my experiences reviewing code, including lists of dos and don'ts, [how to survive your first code review](https://dangoslen.me/blog/surviving-your-first-code-review/), and [why we should review code at all](https://dangoslen.me/blog/whats-the-point-to-code-reviews-anyway/).

My views have been mainly shaped by my experience with a particular kind of code review - the pull request. Like many devs, I've grown accustomed to the pull request model to help facilitate reviews. While it isn't perfect, I've always found it to be a great tool and overall an improvement to formal code review processes or reviews over email.

Recently, though, I've been seeing thoughts expressing a different sentiment. Many devs are starting to become frustrated with the [pull request model](https://jessitron.com/2021/03/27/those-pesky-pull-request-reviews/). There is a sense that pull requests actually might make it _too_ easy to comment on a line of code. This ease might be leading to the conflicts and hyper-zealous commenting that frustrates many in our industry. 

Another common critique is that the pull requests encourage reviewers to only look at the code. They never even pull down the changes they are reviewing! To be completely transparent, I'm guilty of that myself.

After reading the article and seeing some related ideas via Twitter, I wondered: are there better ways that I could review code? What could I do differently? 

After asking, I've decided to start making some changes in how I review code. They've been helping me recently, so I think they could help you and your team as well.

## Commenting on Code vs. Collaborating on Code

One of the top thoughts that made me start questioning how I review code comes from the [article above](https://jessitron.com/2021/03/27/those-pesky-pull-request-reviews/):

> Pull requests are an improvement on working alone. But not on working together. 

That struck a chord. Indeed, pull requests _aren't_ the primary way to collaborate with people after all.

Collaborating on code is vital to a team's ability to maintain a codebase. If a single member of a team is left to write an entire codebase without working with other team members, there is a high probability that the rest of the team won't be able to contribute to it after a while. Worse, if left alone, a single team member might even get things wrong or be unable to solve a problem. Therefore, collaborating early and often is a good idea.

The next question that arises is this: how _does_ a team collaborate on code? Further, can a team collaborate too early? Too often? 

Many teams seem to have concluded that a pull request is a great place to have collaboration. I don't think they are wrong. First, a team member feels ready to share a version of their code with the rest of the team for direct feedback. Then, like an author writing a book, they submit it for a first review to get feedback. The rest act as editors, ready to help get the draft ready to print.

There isn't anything wrong with teams seeing pull requests as a place for collaborating. The problem is when teams think collaboration is _restricted_ only to the code review process. 

Teams should be working together on problems, ideas, and code well before code is submitted for review. Mentors should be advising mentees, peers should be offering help to each other, and pair programming or debugging sessions should be routine. If an author were to send the first draft to their editor without disclosing what the book is about, it would make it harder for the editor. The editor now has more they need to understand to give useful feedback. As a result, the publication date is likely to get pushed later than anticipated.

Genuine collaboration is more than just leaving a comment or a suggestion. It's discussing alternative solutions, prodding at requirements, and having real-time feedback loops with your team.

I will be working towards making this form of collaboration more common within my team. I'm hoping to move us beyond collaboration via comments and get back to real-time collaboration.

## Run. The. Code.

Commenting on and rejecting a pull request without ever running or stepping through the changes made sounds silly when said directly. But many developers - including me! - do this all the time.

As engineers, we shouldn't evaluate code only by how "clean" it is or how wonderfully abstracted it is. Instead, we still need to measure code by how well it does what it is supposed to do - deliver some value when it runs. 

To drive this point home, when was the last time you looked at Google's source code for Google Search? If you did see it, would it change how well you think it works as a product? Probably not.

I'm not trying to be hyper-reductionistic here. The quality of code does matter! It should be clean, crisp, mutable, etc. 

But part of what makes that code good is how well it solves a problem. Does it do what it needs to do to meet requirements? Will the end product be better? At the least, all code needs to make the end product better.

What is the best way to see if the code makes the product better? You have to run it. Treat a pull request as a chance to do a mini-demo of the added or fixed functionality. Use it. Poke at it. Heck, even _test_ it yourself! 

I've been incredibly guilty about this. I tend to trust our automation that the code changes produced the desired behavior changes without observing the behavior myself! I want to start changing this and running code more frequently.

## More Navigating and Less Backseat Driving

When a problem (or even a difference of opinion) is spotted in code, it can be easy for a reviewer to recommend a concrete change right then and there. For example, they might include a block of code in their comment or add a GitHub suggestion of their improved implementation. They might even include citations and links.

And they do this for every issue they see.

While there are times adding such comments can be appropriate, it often can feel like the reviewer is attempting to take control. They are dictating what the code _should_ be rather than providing feedback on the written code. The reviewer is giving directions as if they were a backseat driver. And no one likes backseat drivers.

Great code reviewers know the difference between being a backseat driver and being a navigator. Both give directions, but one has the destination in mind while the other is trying to control the driver. A navigator knows multiple ways to reach a destination, but a backseat driver complains when the driver takes Martin Street instead of Hampton street - it could have saved one whole minute!

What does a navigator look like in a code review? Instead of focusing on how to change the code, they are focused on why the code needs changing. They care more about the final outcome rather than the concrete classes that are written. The navigator is primarily focused on understanding where they need to go and to help them get there.

I want to be more of a navigator. Not every single detail needs commenting, and not every difference of opinion needs to be shared. I want to review code in such a way that I'm helping rather than controlling.

---


The goal of all of this is really more than becoming a better code reviewer. It's about becoming a better teammate. Knowledge work isn't just an individual grinding away on an intense thought or task anymore. Knowledge work - or at least meaningful knowledge work - tends to be accomplished by teams.

And I want to be a great teammate. 