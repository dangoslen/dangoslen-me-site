---
path: /how-to-introduce-kaizen-to-your-team
date: 2020-06-06T01:02:27.200Z
title: How to Introduce Kaizen to Your Team
description: Convincing your team to embrace continuous improvement.
tags: 
  - devops
  - kaizen
  - teams
  - growth
---
![small child looking at daunting steps](../assets/1_oyeeax1t-pdzp-hel9cxvq.jpeg "Photo by Jukan Tateisi on Unsplash")

I first heard the term kaizen in the popular book *[The Phoenix Project](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592)*. In the book, we learn about how a recently promoted IT manager is trying to solve all of the problems in his organization. The problems seem intractable, but never the less he persists.

One of the biggest realizations of this character is that without making continuous improvement, things deteriorate. The law of entropy always wins. Additionally, the character in the book realizes that one person can’t merely mandate change, and it happens overnight. He realizes that big-bang rewrites, accusations from team to team, or mandates “from above” won’t fix his IT problems.

Instead, small, consistent, daily improvements will result in better outcomes in the long run. Change happens little by little over time. His teams need to be constantly identifying and solving issues, bugs, and shortcomings.\
How does a team go about accomplishing that? What is a useful framework for doing so?

## [](https://dev.to/dangoslen/how-to-introduce-kaizen-to-your-team-355d#enter-kaizen)Enter Kaizen

Kaizen is a Japenese word that has come to encapsulate the idea of “continuous improvement.” Formally, its actual definition is simply “improvement.” It was made into a business concept after Toyota took this idea as a way to improve their manufacturing lines. You can read all about the history [here](https://www.kanbanchi.com/what-is-kaizen).

I don’t want to re-define kaizen or go into all of the benefits of it in this article. There have been MANY [books](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592) and[ articles](https://simpleprogrammer.com/kaizen-developers/) written for that.

Instead, I want to help you come up with a plan for introducing some of these ideas to your team. In particular, how to go about introducing a framework of identifying and solving problems like our IT manager in the book did. You don’t need a perfect roadmap or a big presentation. You just need to start with a few things.

## [](https://dev.to/dangoslen/how-to-introduce-kaizen-to-your-team-355d#go-to-the-source)Go to the Source

When problems arise, it becomes easy to hear it from someone else. A deployment went wrong last night, but no one knows whose and what went wrong. Directors ask managers, who ask team leads, who ask developers to eventually find someone involved. Along the way, everyone changes the question slightly on the way down. The answer varies slightly on the way up.

Instead, you need to go to the source. Did a deployment go wrong? Talk to the engineer doing the deployment. Is performance suffering? Where are your metrics to show it? Is a team taking too long to develop? Ask the team what is slowing them down. Ironically, I bet in many organizations team’s don’t even know they are slow — but their manager probably does.

To combat this problem, teams need two things: **visibility** and **reflection**.

First, teams need visibility into what is going on so that everyone is on the same page. Deployments need to be monitored and scheduled. Applications need logs and metrics monitoring. Processes need transparent tracking — and it needs to be accessible to everyone on the teams. Your first problem might simply be, “We don’t have visibility into what is going wrong here.”

Second, once problems are visible, teams to regularly reflect and evaluate the problems they are experiencing. Agile teams tend to do this during retrospectives that are scheduled in alignment with their typical development cadence. Other teams have weekly syncs to discuss problems.

An excellent way to start this process is to introduce a retrospective. Start with a monthly cadence since this is usually enough time for teams to implement and track changes between each session. If you have never held a retrospective, I suggest checking [this article out](https://www.thoughtworks.com/insights/blog/5-things-you-need-know-facilitate-retrospective) (great discussion in the comments!).

## [](https://dev.to/dangoslen/how-to-introduce-kaizen-to-your-team-355d#identify-solutions)Identify Solutions

Once you have identified your problem and evaluated the problem, you need to brainstorm how to tackle it. Some will have nice and easy solutions; others will likely require a lot of critical thinking.

You might need to have a brainstorming session with your team, or you might need just to write up an idea and ask for feedback. It just depends on the dynamics of your team.

For the larger problems needing more extensive solutions, start by laying out a vision for where you want to go. Don’t just settle for “get better.” If your team currently doesn’t have monitoring at all, maybe a single “vision sentence” like the following can help:

> We want to have active monitoring and alarming such that our team is notified of a problem before other teams are aware. We want these alarms to have clear indicators of what is going wrong and where.

What I have found helpful is to always come up with at least one idea to present to your team. This keeps you from having analysis paralysis and gives your team something concrete to evaluate.

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--RaodFtbX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qpekjlzgft6q3kq270rb.jpeg)](https://res.cloudinary.com/practicaldev/image/fetch/s--RaodFtbX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/qpekjlzgft6q3kq270rb.jpeg)

Photo by [Lefteris kallergis](https://unsplash.com/@lefterisk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/step?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

## [](https://dev.to/dangoslen/how-to-introduce-kaizen-to-your-team-355d#identify-the-smallest-meaningful-step-to-improve)Identify the Smallest Meaningful Step To Improve

You’ve now identified a problem to fix and have a solution in mind. Great! Now is the hard part: determine the smallest meaningful step to move towards that solution.

Most of your problems can’t be fixed quickly and in one big step. If you are attempting to improve how your team deploys software, for instance, there are many, many things to do to realize your solution. What you need to do is walk your solution backward, asking, “what do we need to do that?” Keep repeating this until you recognize the next step to take from where you are now.

Ideally, this is a step you can take immediately. Creating a group or team in GitHub; writing documentation; creating a Postman collection, etc. The point here is that if you can take action right now, then it’s improving your team right now as well.

## [](https://dev.to/dangoslen/how-to-introduce-kaizen-to-your-team-355d#go-to-the-source-again)Go to the Source Again

From here, you repeat the steps over again. Go to the source to identify problems. Brainstorm solutions to those problems, laying out a vision for achieving them. Identify the smallest meaningful next step towards that achieving that vision and take action.

You will find that your original vision will shift — that is good! As you continue going back to the source, if you are making improvements, the problem itself will shift slightly.

I like to think of this as cleaning up a messy room. You might identify a pile of clothes you need to pick up and tackle that first, with your goal to get all of your clothes clean and put away. However, you discover under the clothes pile that someone accidentally knocked over a plant, and there is dirt all over the floor. The dirt might now be the immediate thing to tackle.\
Kaizen is a powerful mental framework and guide for how to improve as a team. I’ve barely scratched the surface here, but I hope it can help you understand how to start using it on your team.

Happy coding!