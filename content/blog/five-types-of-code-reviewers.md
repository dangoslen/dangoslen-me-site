---
path: /the-five-types-of-code-reviewers
date: 2024-04-30T00:00:00
title: The Five Types of Code Reviewers (and How to Work With Them)
description: Learn how to work with the most common types of code reviewers on your team to maximize your ability to ship code.
keywords:
  - code reviewers
  - code review
  - software code reviewing skills
tags:
  - code reviews
image: "../assets/henning-kesselhut-jHcwBHPQjs8-unsplash.jpg" 
---

<center>

![](../assets/henning-kesselhut-jHcwBHPQjs8-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@hekeko?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Henning Kesselhut</a> on <a href="https://unsplash.com/photos/black-gate-panel-with-black-metal-gate-latch-jHcwBHPQjs8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
</i>

</span>

</center>

A critical part of your success as a software engineer is your ability to get your code to production. You'll never make a significant impact if none of your code runs in production. 

Why? Because that is where business impact is. 

You might be able to make an impact in other ways as your career progresses, but every engineer needs the lessons and wisdom that come from seeing how their code operates and behaves in production.

For many companies, there is a formal [code review process](https://dangoslen.me/blog/whats-the-point-to-code-reviews-anyway/) to prevent engineers from unilaterally merging their changes directly into production. This check exists for a handful of reasons: code maintainability, defect detection, and SOX compliance, to name a few.

If you are on such a team with a mandated code review process, part of your job now includes navigating the code review process to get the approvals and feedback you need to ship quickly. If you can't get past the review, you won't be able to get your code to production (where the impact is).

In this process, you'll soon discover that not all code reviewers and team cultures around code reviews are created equal. Some will be mature processes with high knowledge sharing and respect, while others will range from a culture of apathy to fear and gatekeeping.

Regardless of these cultures, part of your job is learning how to work within each of these cultures to get your code merged. In my experience, there are five main archetypes of code reviewers that you'll encounter in your work. 

Today, I want to share what they are and some strategies you can use to work with each to get your code merged.

## The Slowpoke

The first code reviewer you will encounter is the Slowpoke. Many engineers have had the experience of asking for a review, not getting feedback, repeatedly asking for a review in a Slack channel, and still... crickets. It's frustrating and is one of the core reasons many engineers dislike pull requests: waiting on reviews kills productivity. 

The best way to work with a Slowpoke is simple: don't. If you have the choice of who reviews your code, avoid asking for a review from a Slowpoke whenever possible.

If you do have to ask for their review or they get auto-assigned to your change, one tactic that works well is to message them directly and give them as much context as possible. While this generally is an anti-pattern, it's better than waiting around, escalating to a manager, or sending passive-aggressive messages on the team Slack. Don't bombard them; allow them time to review before reaching out, and only do it periodically. If they continue not responding, escalating to your manager can be an appropriate next step.

## The Rubber Stamper

The second typical code reviewer you will encounter is the Rubber Stamper. The Rubber Stamper is primarily concerned with one thing: getting the review off their plate. They tend to care little about the code under review or share any knowledge they might have with the author. They will usually quickly approve with a terse "LGTM" and be on to the next thing without much thought.

I'm aware that some engineers sometimes feel uncomfortable providing feedback in a review and might default to approving to avoid embarrassment or conflict. I don't include those engineers in this category, however, as those are engineers who want to grow and provide feedback but are not quite sure how to do that yet (_if that is you, by the way, I have a [FREE resource](https://codereviewchecklist.dangoslen.me/) to help!_). In contrast, Rubber Stampers have a consistent pattern of being quick to approve without providing feedback or thought.

Rubber-stampers are not great candidates for review when you have some especially complex logic you want close attention to or want a different perspective on a design. They'll simply click the obligatory box and move on. Avoid asking for them to review critical changes, too. 

There is an upside to this, though. When you have straightforward changes and need to merge something quickly, asking for a Rubber Stamper's review can be a good tactic. Copy changes, well-tested code, or code behind a feature flag might all be candidates. 

Be careful, tough! Many times, we think something is trivial and doesn't need a review, but that is often when something gets overlooked and breaks production.

## The Idealist

The Idealist is an interesting persona during code reviews. They are quick to provide feedback and often do it in a helpful and constructive way. They also tend to be excellent engineers with lots of experience and mastery of their craft.

Where challenges start to emerge is when an Idealist is shooting for Mars when the code just needs to get off the ground. Idealists will often cite evidence for their perspective, including languages, docs, heroes of our industry, and a collection of blogs they've accumulated over the years. All of this knowledge will help you grow as an engineer, but these perspectives can often become pedantic and overwhelming. Idealists will point out all the ways to improve the code and all the things we need to think about today to have a running system in twenty years (never mind that most systems will fundamentally change in the next six months anyway). They can often forget the urgency of shipping certain features.

Working with idealists is often a great experience; just remember to bring them back to Earth at times. A great way to help get your code merged over the finish line with an Idealist is bargaining. Offer to make some of their most important suggestions and ask if you (and they) could other changes could wait until. Offer some of your own perspectives to show you are paying attention and seek to have a dialog. Most idealists are open to thinking and discussing, so use this to your advantage.

One thing to avoid, though, is the classic "I'll clean this up in a future change" move. Idealists have heard it before, and they know it won't happen and will dig heals even more. That isn't to say a refactor later _isn't_ the right move - it often can be - it's about seeking to engage in the conversation vs. feigning interest and making an empty promise.

## The Gatekeeper

Many engineers hope to avoid the dreaded Gatekeeper archetype. Gatekeepers are reviewers who "hold the line" on letting anyone's code get merged without their stamp of approval—and their bar for approval is usually too high. 

Gatekeepers typically have (or at least think they have) mastered the framework or language the team uses and are unafraid of sharing their knowledge. Sadly, instead of sharing knowledge, they pronounce judgment on the code and declare absolutes that can leave the author feeling attacked or ashamed of their work. They often provide feedback through rebuke using phrases like "Don't do this." or "You don't understand how this works." These critiques often lack any real objective citation or evidence for their opinion.

While many Gatekeepers are very senior engineers, it's also possible for Gatekeepers to be young but overly presumptuous about their skills. They might see themselves as the "wiz kid" or the "magician" but still haven't learned that [there is always more to learn](https://dangoslen.me/blog/a-case-for-being-a-humble-engineer/). Either way, they have very high coding chops and think others are always missing the "right way."

Working with a Gatekeeper can be challenging, but the best way to progress isn't by getting aggressive back or making all of their required changes. Instead, respond with humility and evidence. Something like

> Hi, Gatekeeper. Thanks for the feedback. I took a deeper look at this, and I am pretty sure the way I'm using this is correct based on this documentation. Is there something else I'm missing?

Turning a rebuke into a question seeking guidance will quickly steer the question away from emotional responses and back to reasoning. Be curious and try to see what you can learn from them, as frequently, Gatekeepers _do_ have real insight to offer. Oh - and call them by their name and not "Gatekeeper." That won't go over well...

If, even after attempting to redirect the conversation, you find a reviewer unwilling to budge on the most minor details, you'll need to change tactics. If you have a more reasonable engineer who can help find the right tradeoffs, looping them in is a good idea. You could also consider getting reviews from other engineers and dismissing (kindly) the review from the Gatekeeper. 

But once you've identified a Gatekeeper, generally treat them like the Slowpoke and avoid asking for their reviewer if you can.

## The Pragmatist 

The final type of code reviewer is the one we all want to deal with: the Pragmatist. The Pragmatist is an engineer willing to share knowledge and voice their opinions but also understands that we can't let code rot away while we deliberate all day. They know that long wait times kill productivity, but they also understand that code is worth the effort to critique through questions to ensure the whole team feels comfortable supporting and maintaining that code.

The Pragmatist often asks many questions about the code and the reasons for the change (bug? feature? something else). They work alongside the author to find the right tradeoffs in the code and whether now is the right time to address them. They share their experience and knowledge and gladly receive the same back from the author.

The best way to work with a Pragmatist is to engage with them to answer their questions and provide counterpoints where necessary. As mentioned earlier, working with Pragmatic code reviewers will feel relatively easy compared to the others, especially when you want to strike the right balance of urgency, craftsmanship, and learning.

--- 

Like all of these lists on the internet, these are generalities, and your mileage may vary. You'll also learn that no teammate is _always_ one of these types of reviewers either. Don't be quick to put someone in a category based on a handful of reviews. Give them some time and see if behavioral trends emerge after a while.

Another reminder: you don't need every reviewers' approval to merge a change (unless your company policy requires it... can't help you there). If you have two out of three approvals, you are empowered to merge your code. Don't ignore a review, of course. Be kind and present your case as to why you are merging the change and acknowledge their feedback (if they supplied it). But no need to wait for them to give you a green check if you already have the approvals you need.

Last, do your best to be the kind of reviewer others want to review their code. Reciprocity is a powerful force; take advantage of it.

Happy coding!

_P.S. If you want to be like the Pragmatist reviewer and level up your code review skills, check out my book [Code Review Champion](https://dangoslen.me/book)! You'll learn the skills and tactics to become a great reviewer and know how to get your code through reviews quickly._





