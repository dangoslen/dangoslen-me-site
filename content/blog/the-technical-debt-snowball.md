---
path: /the-technical-debt-snowball
date: 2022-04-14T04:00:00.000Z
title: The Technical Debt Snowball
description: Paying down debt via small wins can create a huge impact.
tags: 
  - programming
  - career
  - tech debt
  - technical leadership
image: /assets/pauline-bernfeld-16l2ezZQ_Yw-unsplash.jpeg

---
<center>

!["Boy with huge snowball falling over it"](../assets/pauline-bernfeld-16l2ezZQ_Yw-unsplash.jpeg)

<i>Photo by <a href="https://unsplash.com/@pizbern?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pauline Bernfeld</a> on <a href="https://unsplash.com/s/photos/snowball?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i>

<br/>

</center>

[Technical debt](https://www.productplan.com/glossary/technical-debt/). Many software engineers will be familiar with this term and the constant arguments about its definition.

A popular analogy of technical debt is personal financial debt. People often take out loans on large purchases to allow them to make the purchase much sooner. 

For example, buyers often take a loan instead of paying the total cost in cash when purchasing a home. They often bring a 10 - 15% down payment and pay the rest off over 15 - 30 years. The buyer can get the house today vs. waiting 15 - 30 years to save up a huge mountain of cash.

But there is a trade. Loans often come with interest. The interest is like a "fee" for the lender giving money for the purchase. The buyer, then, will ultimately pay more than the home's original sale price. The lower the interest rate, the closer the total loan repayment is to the purchase price (low-interest rates are also partially responsible for how crazy the real estate market has been recently as everyone wants to buy a home when rates are low).

Technical debt in software has similar properties: a software team is willing to take a loan on effort, time, and even completeness to deliver something faster to their customers. If the team can complete a sufficient set of the required functionality to release a new feature by the end of the week vs. waiting two months for it to be fully complete, the team might choose to release it at the end of the week. They take a "loan" to complete the rest of the functionality as soon as the core functionality is released.

But technical debt loans have interest too. And since the loan is in effort and time, the total effort the team will pay to develop the feature set (or even maintain the work already released) will be greater than if they had waited the initial two weeks. But, it's up to the team and the product owner to determine if saving development time now is worth it to reap the benefits of getting to market faster. It often is.

_Side note: this is all based on the **intentional** decision to incur technical debt. It **does not** include general cruft or poor engineering._

## Too Much Debt

What happens, however, if you take out too much debt? Is that even possible in a software project? 

Just like personal finance, the answer is yes. And even worse - there isn't a loan officer to approve your loan. Teams can run up their debt as fast and as large as possible.

But there are consequences.

If someone has too much personal debt, they eventually lose their house or car, and they might even have to declare bankruptcy. Too much debt becomes a burden that weighs them down and keeps them from moving forward.

In software, this looks like never shipping features, constant bugs creating frustrated customers, and excess maintenance costs that cause developers to leave. Bankruptcy for a software team looks like a lot burnout.

As engineers, we have to be vigilant about tracking, paying down, and using technical debt strategically. For many teams, this likely starts with admitting there is a good chunk of debt to pay down. 

And it feels daunting.

I want to talk about how my team over at [Policygenius](www.policygenius.com)([we're hiring!](https://grnh.se/0ebea2c41us)) has been approaching some of our technical debt using the famous [debt snowball](https://www.nerdwallet.com/article/finance/what-is-a-debt-snowball) technique. We've been using the snowball to help us pay down debt faster than we thought we could be focusing on small wins rather than trying to re-build and refactor whole components at once. 

Let's jump in!

## The Debt Snowball

The Debt Snowball is essentially a debt repayment strategy where you list debts smallest to largest and tackle the smallest debts first. This process has been made famous by [Dave Ramsey](https://www.ramseysolutions.com/dave-ramsey-7-baby-steps) - a money guru who has built his whole brand on getting rid of debt. 

Once you have an ordered list of your debts, you pay minimum payments on the largest debts while throwing all extra money at the smallest ones. Once the first one is paid off, you apply _all_ the money you had been paying on the smallest debt towards the next one. And the next one. 

This creates _momentum_ - much like how a snowball as it travels down a mountain. It gets bigger and faster with every new piece of snow it accumulates on its surface until it looks more like a boulder tumbling down. When it comes time to pay off the largest debt, there is such momentum and _motivation_ that you'll pay it off in no time.

<center>

!["snowball rolling down hill"](../assets/1_AtpiyBgwQWP1mDyizzKvbg.png)<i><a href="https://medium.com/@derreckstratton/the-snowball-effect-646d4fe7167a">https://medium.com/@derreckstratton/the-snowball-effect-646d4fe7167a</a></i>

<br/>

</center>

---

## Applying this to Technical Debt

Applying these principles to software engineering is more-or-less the same. Following the steps again, we need to

1. Track and list our technical debt from smallest to largest
2. Make "minimum payments" on the largest debts 
3. Pay extra on the smallest debt first

Let's dig into them each one-by-one

### Track and List Your Debt

In many ways, this is the hardest part. Tracking technical debt can be difficult, and ordering it even more. In an ideal world, we would write a task or development work item to track that new debt is being taken out. We can decide what to do with it later.

However, as every software engineer knows, we don't always know we are taking out debt when making a decision, and we realize it only later. 

What to do?

This is where the vagueness of "technical debt" can help. Instead of focusing on the exact moment when new debt was taken out, we need to empower our team to write tasks to address any technical debt they _experience_ when developing software. We'll find an easy way to tag or categorize these tasks as technical debt to they can easily be identified in our backlog.

Next, we have to order our debt. It can be hard to quantify our debt into a quantitative value at this stage. Instead, let's focus on what items our team thinks are both a) achievable in our next iteration and b) what the team believes is the next most important piece of debt to pay down.

While it might not be the same as smallest to largest ordering, you will at least have something small enough that you can repay down and will improve your coding experience at the end of the iteration.

### Make Minimum Payments

Making minimum payments is akin to "keeping the lights on." For example, you can't ignore a bug causing daily headaches for your customers because [your team is too afraid to change code](https://agileotter.blogspot.com/2009/01/fear-of-changing-code.html). You have to pay the debt and do the best you can to fix the bug or at least make it less painful (more on this in a bit). You might not be able to do the big refactor you want to do, but perhaps you can change one or two things to make it better.

Another example of this might be dependencies. You know you are a major version behind, but you can still - and should - try to keep up with minor or patch versions as best as you can. You mitigate security vulnerabilities by making the minimum payment here, even though you can't fully upgrade to the latest version without additional effort.

### Paying Extra

In the first step, we discussed identifying the smallest debt that is achievable and beneficial to work on. 

But there is a subtle catch: you need time to work on it.

While the step says to "pay extra," many software teams, in practice, need to start with protecting their time and effort. This makes sense; if time and effort are the unit of measurement for technical debt, you pay with time and effort. If your team allocates all its time towards product work, you can't give any time towards your technical debt outside of the minimum payments you make doing product work.

A great way to do this is to never fully allocate your team's capacity towards product work when planning your next iteration. Reserve 10-20% of your team's capacity (which _should_ translate into time and effort) to work on technical debt or innovative projects. 

Each team will do this subtly different, so we won't focus too much on how individual teams protect that time. The key is making sure that it **is** protected so you can pay off the debt.

## How It Has Helped Our Team

With all of that back-story, I want to share how our team has been using the technical debt snowball to pay down debt and over-achieve our iteration goals over the last several months.

First, we protect our time. We keep good metrics about our team's capacity and only allocate 80% of our capacity towards product work. We work together to allocate the remaining 20% and decide what other work we want to bring in. It might be a bug, a refactor, or thinking about a new problem. A lot of our effort gets used to pay down technical debt here.

Second, we make sure to keep our technical debt tasks small. Like _really_ small. They aren't "Re-do our address data model from the ground up." They are more often "Stop using this function and use this other one instead." While it can sometimes feel a little too prescriptive, we've embraced that it helps the whole team see the value and the amount of debt we are paying down.

Third, we embrace that we don't need an isolated technical debt story to pay down technical debt. If we realize that a piece of product work will be best suited for some additional debt repayment, we size that story appropriately. We use story points for estimating, so we usually bump a story to the next story point increment to account for the additional time and effort.

Fourth, for large pieces of technical debt - we make them smaller. While loan consolidation works in personal finance, smaller debts work better in software since you can pay them off faster. This often means taking something like "refactor these event processors" into "refactor _this_ event processor." While it may seem like hand-waving, it has helped our team move faster without breaking things.

Last, we do our best to identify technical debt early. When reviewing upcoming work, if we think we need to make a strategic decision and take out more debt, we discuss why, build consensus and write stories to address our debt soon after we take it out. This helps us have an accurate view of our debt.

The result of these practices is that our team is gaining momentum by achieving the wins of paying down small tech debt quickly. Our codebase becomes easier to work in when we do so, making it easier to tackle the next debt; the snowball keeps growing. 

We've outperformed our velocity (and work items completed) over the past two sprints with no sign of slowing down. And while velocity **is not** a perfect measure of performance, if our team is completing more work during an iteration and we all feel energized by the work we are doing, which is a tough sentiment of performance to beat.

## When the Repayment Period is Up

There is one issue with technical debt that is a little different than financial debt. In financial debt, the lender doesn't often call a loan due. It _can_ happen, but not usually.

With technical debt, however, this is common. A particular feature might be blocked on some debt you've had for a few years. If the product owner is convinced that now is the time to build it for the business, the debt is essentially due. 

Another scenario is that a bug that used to be intermittent becomes common after changes to another feature are made. Or perhaps changes of scale means that the bug happens all the time and consumes a lot of engineering time and effort. The debt is due now. You need to pay it, or your team will go bankrupt on its time and effort - burnout.

When technical debt is suddenly due, the best course of action is to pay it down. Don't ignore it or try to brush it under the rug. You might be able to "negotiate" the amount to be less by relaxing a constraint or requirement, but don't take out a new loan to pay the old. Pay it off and move on.

---

This idea of technical debt being akin to financial debt might be a little hard to get through. I'll admit it's a forced analogy in some ways, but a helpful one too. 

The key takeaway from this article really isn't merely about debt but the patterns required to build great software. 

As engineers and engineering teams, we want to prefer focused, small changes that enable quick iteration and learning over long, arduous, and seemingly impossible goals. It just so happens that the Debt Snowball method aligns with these ideas well. 

Don't try to pay off your biggest tech debt in some grand battle to "win the coding war." Or to "make everything right." It will never happen (and if you did, you would never touch that code again).

Instead, focus on paying down what you can during your next iteration. Prioritize small wins that have an impact. You'll gain momentum, pay off tons of debt, and find your team performing incredibly well.

Happy coding :)
