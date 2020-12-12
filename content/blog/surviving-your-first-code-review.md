---
path: /surviving-your-first-code-review
date: 2020-12-12T13:37:09.505Z
title: Surviving Your First Code Review
description: "It can be difficult when you submit your first pull request and
  your first code review feedback is, well, overwhelming. How do you find the
  right way to address the feedback but also not just cater to every whim of
  your reviewer? "
---
![](../assets/vincent-tom-8yrjq0srdro-unsplash.jpg)

<center><i>

Photo by [Vincent Tom](https://unsplash.com/@vince_t?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/warmth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

</i></center>

I remember my first code review as a software engineer. I was pretty nervous about opening the link in the email saying my code review was complete. I was afraid to look at the feedback.

I'd never had my code formally reviewed before. In my undergraduate days, we just kinda made sure each other's code was "good" - whatever that meant.

When I entered into my first full-time role, I learned that code reviews were a common part of ensuring code quality. Often done via [pull requests](https://dangoslen.me/blog/whats-the-point-of-pull-requests-anyway/), developers were encouraged to provide feedback on how to improve code and validate its correctness before merging code to the mainline. The core intention was to keep a high-quality codebase.
Sounds good.

But there is something we all fear: rejection. We fear not being good enough. Code reviews become a place for junior engineers (or any engineers really) to come face to face with that fear. That first time you request a review from the senior engineer on the team can be daunting.

And let's face it: no one's code is perfect. Your code review will have some form of feedback. Even as a senior engineer, I get regular feedback from my peers about how to improve my code. For junior engineers, the feedback can often be a lot and overwhelming. Comments like "Don't do this." or "Change this to use a ternary expression." or "Why?" can easily take a bright-eyed engineer and make them question how they ever got a job in the first place.

My goal for this article is to give you some quick tools to survive that first code review. Let's dive in.

## Give Your Reviewers Some Context

The best way to survive your first code review is to help your reviewers understand what your code is doing. Without context, reviewers will have to ask more questions and create a mental model of what your code is doing. It can lead your reviewer to incorrect conclusions and therefore giving poor feedback.

The best way to provide context is when you request a review. If you are using pull requests, take the time to give your pull request a proper title and description. If you are using a story or issue tracking system, provide a link in the description tool. If there were tricky spots in the code or places you have a question, add comments before your reviewers take a look. 

All of this helps your reviewer provide the best feedback possible.

## Read All of the Feedback Before Making Changes

Once you receive feedback, don't be afraid. Take a few deep breaths, grab a hot beverage, and read through it all. Read each comment and critique before going too in-depth on any one of them.

Even if there are a lot, this is helpful for a few reasons. First, you will be able to see which comments are more important than others. Once you identify these topics, focus your energy on addressing those first before spending time addressing small critiques over and over.

Second, this allows you to see if there is an overall theme amongst all of the feedback. Feedback about readability? Memory-management? Maybe framework-specific issues? Understanding the themes of the feedback you have received allows you to focus on those topics more generally than just blindly making a requested change.

The last reason I think this is important to do is that it allows you to think wholistically before making line-by-line changes. A common form of feedback in code reviews is the suggestion to refactor a class or function. But this often requires changes in several places. If you were to make each change individually, you would find that your refactor has addressed some of those comments. This makes it harder to understand if a comment is relevant or not taken one-by-one instead of holistically.

## Ask for Clarification

When a reviewer provides feedback that is ambiguous or confusing, ask for clarification. If you are confused by their comment, just accepting it at face value can lead to even more confusion. After a few rounds of that, frustration can mount and turn the entire code review sour.

Let's walk through a common scenario you might encounter. You receive a comment saying to overload a function to allow for a different object to be passed as a parameter. But the object the reviewer is suggesting doesn't seem to be related to the function at all. You don't understand what they are getting at. Instead of blindly accepting their suggestion, ask for clarity. Why would that be helpful? Is there something about that object that you don't know? While trivial, situations like this arise all the time in reviews. Fight for clarity as early as possible.

## Hold Your Ground

Not all feedback is correct. Not all requests for changes are necessary. Don't simply make changes because a reviewer said so. If you don't think the changes are either correct or needed, say so and ask if the reviewer agrees.

One approach that might is to create clear language about the severity of feedback before review time. Within your team, create a standard set of rules or language about feedback to identify blocking and non-blocking feedback. 

For instance, I've worked on teams where we always said an item was a non-blocking piece of feedback in the comments we provided. As a team, this helped us to understand where to focus on changes. This also kept us from getting into useless debates on small issues that didn't matter in the grand scheme of the changes.

As always, though, remember to hold your ground humbly. State why you don't think a change is required and not just that you won't do it. Cite articles and documentation on why you think so. You are both on the same team, after all.

## Choose Specific Feedback to Really Work On

Once the code review is done and everything is merged, you still have some work left. Write down one or two (but no more!) areas where you got feedback to work on. Maybe it was writing better tests. Perhaps it was improving your knowledge of a framework.

Whatever it was, take some time to learn what you need to not repeat the same mistakes as before. I'm not saying you will be perfect. No can be! Repeating the same mistakes over and over means you aren't putting in the effort to grow. Your team gave you specific areas of feedback, pointing out where to focus next. It would be silly if you didn't listen to some of it.

- - -

## Final Thoughts

Use these tools to survive and grow from your first code review. While these tools are helpful, the number one thing that will help you is attitude. Approach your feedback as opportunities to grow and learn. Remember that everyone deals with [imposter syndrome](https://plantae.org/combatting-the-impostor-syndrome-in-academic-science-you-probably-are-as-smart-as-they-think/). Just because you don't know something doesn't mean you can't learn it or that you don't deserve to be there.

A great team will give you feedback to help you. They want you to succeed. They hired you! You can do it.

Happy coding!