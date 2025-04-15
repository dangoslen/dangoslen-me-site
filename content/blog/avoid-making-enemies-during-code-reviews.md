---
path: /avoid-making-enemies-during-code-reviews
date: 2025-04-15T10:05:12
title: Avoid Making Enemies During Code Reviews
description: Conflict isn't bad but enemies certainly are.
keywords:
  - how to avoid making enemies during code reviews
  - how to best review code
  - best ways to perform a code review
  - code review tips
tags:
  - team-driven development
  - code reviews
image: "../assets/1_5YzOyUp5pIiHVAu8OQhGtg.webp" 
---

<center>

![](../assets/1_5YzOyUp5pIiHVAu8OQhGtg.webp)

</center>

As I've shared, I'm a [big fan of code reviews](https://medium.com/@dangoslen/how-to-become-a-code-review-ninja-136345b41199) and their benefits. Code reviews are an important part of the software lifecycle, both automated and person-to-person. 

They can help spread knowledge, act as a conduit for mentoring, find bugs before they make it to production, etc. 

Unfortunately, code reviews also have a tendency to start conflicts and create enemies.

While some conflict can be healthy, when two developers begin to "go at it" in a review, you lose all of the benefits of the review. 

Repeat: all the benefits of a code review will be lost if trust and safety are lost along the way (whether you are the reviewer or the author). 

When those two things are lost, [Google research says](https://www.inc.com/justin-bariso/google-spent-years-studying-effective-teams-this-single-quality-contributed-most-to-their-success.html) teams just won't perform well.

What can we do to help prevent conflicts from escalating into long-drawn-out hostility and animosity?

## Code Reviews Are About Understanding

To start, the whole purpose of a code review is to [increase understanding](https://medium.com/@dangoslen/whats-the-point-to-code-reviews-anyway-e61edbfd2950). As the [2013 International Conference On Software Engineering](https://sback.it/publications/icse2013.pdf) states:

> From interviews, no other code review challenge emerged as clearly as understanding the submitted change. …On the same note, in the code review comments we analyzed, the second most frequent category concerns understanding.

Of course, it is a challenge! Even the best-written code can be hard to understand. Fighting for understanding is paramount for an effective review, rather than focusing on finding a bug or fixing formatting.

When I sign off on a review, I make sure I understand at least the following:
* The goal or intent of code changes being reviewed
* The code changes will actually achieve those goals (e.g., there should be tests!)
* The changes align with the standards of the codebase
* The changes are ones I feel comfortable maintaining 

If everyone on the code review approaches it with a desire to understand and learn, everything else will be easier. If you make it about finding bugs, you will let style things go. If it's about style only, you will miss patterns that aren't quite right. And so on and so on.

## Code Reviews Aren't About Being Right

The other side of the coin to is remember that code reviews isn't about proving you're right. It isn't to show you are smarter or capable than anyone else or the author themselves. If you walk into the review with that mentality, you are almost guaranteed to 1) start a conflict and 2) miss the chance to learn.

You have to be humble.

Humility is for anyone regardless of their field, but anyone involved in high-knowledge work (like software) needs it especially. There is no way for any one person to know everything in the world of software engineering. They may know a lot, but not everything.

As an author, humility looks like being willing to try your reviewer's ideas. If your reviewer leaves some comments about a better pattern or a common pitfall you fell into, don't be afraid to ask for more information before spending time re-writing your code - but also be willing to try their suggestion! I've learned so much from trusting another engineer's judgment in code reviews.

Likewise, as a reviewer, don't focus your comments on how you would have made the same changes. Be curious and ask questions instead. Focus on the most objective aspects as you can (language constructs, framework specifications, etc.) rather than simply throwing opinion after opinion at the review. 

When you leave more subjective feedback — and you should! — be prepared to explain why. Give citations and reasoning up front. Offer examples and snippets. You are trying to persuade rather than coerce.

And when the author kindly questions your opinion, that is the best time to stay humble. Learning is about to happen.

## Know When to Chat Offline

At the end of the day, we all know communication is hard. Communication on the internet is even worse! You don't need a link to figure that out.

When a conversation gets tense, you must know that adding another comment on the pull request will only worsen things. You need to take the conversation offline (as they say) and engage with the other person directly. Ideally, this means a face-to-face discussion, but any form of more direct, synchronous communication can be a good idea.

However, seeing each other's faces is crucial. [Research shows](https://open.buffer.com/trust-remote-team/) that simply seeing others' faces when talking (digitally or IRL) increases one's trust and empathy for them!

Once you get the conversation offline, make sure to establish common ground. If you can, clarify the exact nature of your disagreement or critique. Don't accuse someone of not reading or for being dismissive. I've even found that re-reading through the comments and reading them out loud (yes, out loud!) clarifies a lot on its own [1].

After establishing some common ground, focus on learning and staying humble. Asking questions is the best way to do so: Is there a misunderstanding over a term you have both used in the review? Does someone have a bad experience with a certain pattern from a previous project? Is there context or information you are missing?

Remember, it's still a focus on understanding and learning. You aren't trying to prove a point. You are trying to work together to find the best solution possible given the context, not show anyone who's boss.

---

Of course, there is a lot more (and I might write up a second round later). For more practical tips, I highly recommend this [GitHub gist by Thoughbot](https://github.com/thoughtbot/guides/tree/master/code-review). It's focused on Ruby, but there are great takeaways outside of the language-specific pieces.

At the end of the day, all of the ideas above boil down to one thing: be a good teammate. Work together, seek to understand, and stay humble.

Oh - and don't forget to offer praise for things done well! A little can go a long way.

Happy coding (and reviewing)!

[^1]: it's like Rubber Ducking for code review comments. Read it aloud and slowly, and you'll often realize the intention or tone was much different than you might have originally perceived.

