---
path: /technical-debt-snowball
date: 2022-04-07T04:00:00.000Z
title: Technical Debt Snowball
description: Paying down debt via small wins can create a huge impact.
tags: 
  - programming
  - career
image: /assets/1_ndvpxhffgu1hoz2cbssmuw.jpeg
---

[Technical debt](https://www.productplan.com/glossary/technical-debt/). Most software engineers will be familiar with this term and the constant arguments over what it means. 

A popular analogy or definition of technical debt is much like borrowing financial debt in the marketplace. When you buy a house, instead of saving up cash, you pay 10% down today and will pay the rest of 15 - 30 years. You also usually have an interest rate against your loan which is sorta the "fee" for taking out debt. The interest rate essentially gurantees that you will ultimately pay more than the sale price of the home you bought, but again - you bought it sooner.

Technical debt in software has similiar properties. You are taking a loan on effort, completeness, and even time itself to deliver something faster to your customers. But that loan of effort, completeness, and time has an interest rate too. What this means is that your total effort to finish your (or just maintain) your software will be greater than if you had done it to start with.

_Side note: this all is based on the **intentional** decision to take a shortcut or ignore an edge case. It **does not** include general cruft or poor engineering._

## Too Much Debt

What happens, however, if you take out too much debt? Is that even possible in a software project? 

Just like personal finance, the answer is yes. And even worse - there isn't a loan officer to approve your loan. You can run up the debt as fast and as large as you can.

But there are consequences.

If someone has too much debt, they eventually will lose their house, car, or have to declare bankruptcy. In software this looks like never shipping features, bugs creating frustrated customers, excess maintainces costs that cause developers to leave and ultimately having to start-over.

As engineers, then, we have to be vigilant about tracking, paying down, and using technical debt strategically. For most of our teams, this likely starts with realizing there is a lot of debt to pay down. And it feels daunting.

I want to talk about how my team over at [Policygenius]()([we're hiring!]()) has been approaching some of our technical debt using the famous [debt snowball]() technique. We've been using the snowball to help us pay down debt faster than we thought we could be focusing on small wins rather than trying to re-build and refactor whole components at once. 

Let's jump in!

## The Debt Snowball

The Debt Snowball is essentially a debt repayment stategy where you list debts smallest to largest and tackle the smallest debts first. It's been made famous by [Dave Ramsey]() - a money guru who has built his whole brand on getting rid of debt. 

Once you have a ordered list of your debts, you pay minimum payments on the largest debts, while throwing all extra money at the smallest debts. Once you pay off the first one, you apply _all_ the money you had been paying on the smallest debt towards the next one. And the next one. 

What happens is you create _momentum_ - much like a snowball as it travels down a mountain. It gets bigger and faster with every new piece of snow it accumulates on its surface until it looks more like a boulder tumbling down the mountain. When it comes time to pay off your largest debt, you will have so much momentum and _motiviation_ that you'll pay it off in no time.

## Applying this to Technical Debt

Applying these principles to software engineering is more-or-less the same. Following the steps again, we need to
1. Track and list your technical debt smallest to largest
2. Make "minimum payments" on the largest debts 
3. Pay extra on the smallest debt first

Let's dig into them each one-by-one

### Track and List Your Debt

In many ways, this is the hardest part. Tracking technical debt can be difficult and ordering it even more. In an ideal world, you would write a task or development work item to track that new debt is being taken out and you can come back to it later. 

However, as every software engineer knows, you don't always know you taking out debt when making a decision and only realize it later. What to do?

This is where the vagueness of "technical debt" can actually help. Instead of focusing on the exact moment a decision was made to take on more debt, empower your team to write tasks to address the techncial debt they _experience_ when building in your codebase. Find a way to tag or categorize these tasks as your technical debt.

When it comes to listing your debt smallest to largest, what I'd encourage you to do is actually just focus on what items your team thinks is both a) achievable in your next iteration and b) what everyone thinks is worth spending energy on.

While it might not be the exact same as as smallest to largest ordering, you will at least have something small enough that you can repay down and will improve your coding experience at the end of the iteration.

### Make Minimum Payments

Making minimum payments is akin to "keeping the lights on." For example, you can't just decide not to change any code in a "forbidden module" if you have a bug that is causing daily headaches for you customers. You have to pay the debt and do the best you can to fix the bug or at least make it less painful (more on this in a bit). You might not be able to do the big refactor you want to do, but perhaps you can change one or two things to make it better.

Another example of this might be dependencies. You know you are a major version behind, but you can still - and should - try to keep up with minor or patch versions as best as you can. By doing the minimum payment here, you at least mitigate security vulnerabilities (the process of making dependency management quick and painless itself will also prove helpful!).

### Paying Extra

In the first step, we talked about identifying the smallest debt that is achievable and beneficial to work on. 

But there is a subtle catch: you need time to work on it.

While the step says to "pay extra", for many software teams this looks more like protecting time and effort. If your team is fully allocated towards product work, you can't give any time towards your technical debt outside of the minimum payments you make doing product work.

A great way to do this is to never fully allocate your team's capacity towards product work when planning your next iteration. Reserve 10-20% of your team's capacity (which _should_ translate into time and effort) to work on things like technical debt or innovative projects. 

Each team will do this subtely differently, so we won't get too much in the weeds on how to actually protect that time. The key is making sure that it **is** protected so you can pay off the dbet.

## How It Has Helped Our Team

With all of that back-story, I want to share how our team has been using the technical debt snowball to pay down debt and over-achieve our iteration goals over the last several months.

First, we allows alot only 80% of our time to product work. We have some really good metrics and tools to help us understand our team's capacity, and simply only pull-in 80% of our total capacity. We add stories we all decide is worth our remaning 20% time.

Second, we make sure to keep our technical debt tasks small. Like _really_ small. They aren't "Re-do our address data model from the ground up." They are more often "Stop using this function and use this other one instead." While it can sometimes feel a little too-prescriptive, we've embraced that it helps all see the value and the amount of debt we are paying down.

Third, we embrace that we don't need an isolated technical debt story to pay down technical debt. If we realize that a piece of product work will be best suited for some additional debt repayment, we size that story apprioripately. We use story points for estimating, so we usually just bump a story to the next largest story point increment to account for the additional time and effort.

Fourth, for large pieces of technical debt - we make them smaller. While loan consolidation works in personal finance, smaller debts tend to work better in software since you can pay them off faster. This often means taking something like "refactor these event processors" into "refactor _this_ event processor." While it may seem like hand-waving, it has helped our team move faster without breaking things.

Last, we do our best to identify technical debt early. When reviewing upcoming work, if we think we need to make a strategic decision and take out more debt, we discuss why, build consensus and write stories to address our debt as soon after the decision is made. This helps us have an accurate view of our debt.

The result of all of these practices is our team is gaining momentum by achieving the wins of paying down small tech debt extremely quickly. When we do so, our codebase becomes easier to work in, making it easier to tackle the next debt; the snowball keeps growing. The result is we've outperformed our velocity (and work items completed) over the past two sprints. And while velocity **is not** a perfect measure of performance, if our team is completing more work during an iteration and we all feel energized by the work we are doing, that is a hard sentiment of performance to beat.

## When the Repayment Period is Up

There is one issue with technical debt that is a little different than financial debt. In financial debt, the lender doesn't often call a loan due. It _can_ happen, but not normally.

With technical debt, however, this is common. A certain feature might be blocked on some debt you've had for a few years. If the product owner is convinvced now is the time to build it for the business, the debt is essentially due. 

Another scenario is that a bug that used to be intermittent becomes common after changes to another feature are made or that scale simply means that the bug happens all the time and consumes a lot of engineering time and effort. The debt is due or your team will go bankrupt on it's time and effort - burnout.

When technical debt is suddently due, the best course of action is to simply pay it down. You might be able to "negotiate" the amount to be less by relaxing a constraint or requirement, but don't take out a new loan to pay the old. Pay it off and move on.

---

This idea of technical debt and finanical debt being so related might be a little hard to get through. It's a forced analogy in some ways, but a helpful one in others. Depending on your experience and personal views on technical debt, it might have made sense or you might have felt like pulling your hair. 

In either case, the key takeaway from this article has little to do with debt of any kind and more to do with how to build great software. As engineers and engineering teams, we want to prefer focused, small changes that enable quick iteration and learning over long, ardious, and seemingly impossible goals. It just so happens the Debt Snowball method aligns to these ideas well. 

Don't try to pay off your biggest tech debt first and focus on paying down what you can during your next iteration. You'll gain momentum, pay off tons of debt, and find your team performing incredibly well.

Happy coding :)
