---
path: /surviving-your-first-code-review
date: 2020-11-15T13:37:09.505Z
title: Surviving Your First Code Review
description: "It can be difficult when you submit your first pull request and
  your first code review feedback is, well, overwhelming. How do you find the
  right way to address the feedback but also not just cater to every whim of
  your reviewer? "
---
I remember my first code review as a software engineer. I was pretty nervous to open the link in the email saying my code review was complete. I'd never had my code formally reviewed before. In my undergraduate days we just kinda made sure each other's code was "good" - whatever that meant. 

When I entered into my first full-time role, I learned that code reviews were a common part of ensuring code quality. Often done via (pull requests)[], developers were encouraged to provide feedback on how to improve code and validate its correctness before merging code to the mainline. The core intention was to keep a high-quality code base.

Sounds good.

But there is something we all fear: **rejection**. Not being good enough. Code reviews become a place for junior engineers (or any engineers really) to come face to face with that fear. That first time you request a review from the senior engineer on the team can be daunting. 

And let's face it: no one's code is perfect. Your code review **will** have some form of feedback. For junior engineers, this feedback can often be a lot and overwhelming. Comments "Don't do this." or "Change this to use a ternary expression." or "Why?" can easily take a bright-eyed engineer and make them question how they ever got a job in the first place.

My goal for this article is to give you some quick tools to survive that first code review. Let's dive in.

## Give Your Reviewers Some Context
The best way to survive your first code review is to help your reviewers understand what your code is doing. Without the context of what your code is doing, reviewers will have to ask more questions and create their own mental model of what you are doing. This can lead your reviewer to incorrect conclusions and therefore giving incorrect feedback.

The best way to provide context is when you request a review. If you are using pull requests, take the time to give your pull request a proper title and description. If you are using a story or issue tracking system, provide a link in the description as well. If there were tricky spots in the code or places you have a question, add comments before your reviewers take a look as well. 

## Read All of the Feedback Before Making Changes
Once you receive feedback, don't be afraid. Take a few deep breaths, grab a hot beverage, and read through each of the comments provided. Read each of them before going too in-depth on any one of them.

Even if there are a lot, this is helpful for a few reasons. First, you will be able to see which comments are more important than others. This allows you to focus your energy on addressing the most important ones first before spending time addressing small critiques over and over. 

Second, this allows you to see if there is an overall theme amongst all of the feedback. Feedback about readability? Memory-management? Maybe framework specific issues? By understanding the themes of the feedback you have recieved, it allows you to focus on those topics more generally than just blindly making a requested change.

The last reason I think this is important to do is that it allows you to think wholistically before making line-by-line changes. Often in code review feedback, a suggestion about a refactor or function change requires changes in several places. If you were to make each change line-by-line, you would find some comments become obsolete.

## Ask the Reviewers for Clarification When Needed
When a reviewer provides feedback that is ambigous or confusing, ask for claririfcation. If you are confused by their comment, just accepting it at face value can lead to even more confusion. After a few rounds of that, frustration can mount and turn the entire code review sour.

An example of this is say you received a comment saying to overload a function to allow for a different object to be passed as a parameter. But the object they are discussing doesn't seem to be related to the function at all. Instead of blindly accepting that you should create such an overload, ask for clarity - why would that be helpful? Is there something about that object that you don't know about? While trivial, situations like this arise **all** the time in reviews. Fight for clarity as early as possible. 

## Hold Your Ground
Not all feedback is correct. Not all requests for changes are neccesary. Don't simply make changes because a reviewer said so. If you don't think the changes are either correct or needed, say so and ask if the reviewer agrees.

One approach that might is to also review with your team a common set of rules or language about feedback that is a "deal-breaker" and which isn't. For instance, I've worked on teams where we always said an item was a non-blocking piece of feedback in the comments we provided. As a team, this helped us to understand where to focus on changes. This also kept us from getting into useless debates on small issues that didn't matter in the grand scheme of the changes.

As always, though, remember to hold your ground humbly. State why you don't think a change is required and not just that you won't do it. Cite articles, and documentation on why you think so. You are both on the same team after all.

## Choose Some Feedback to Really Work On 

---

## Conclusion



 