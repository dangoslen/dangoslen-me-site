---
path: /addressing-code-review-anxiety
date: 2024-10-27T13:33:32
title: Addressing Code Review Anxiety is a Team Effort
description: Code review anxiety is real; we all have a part to play in addressing and minimizing it on our teams
keywords:
  - code review anxiety
  - addressing code review anxiety
  - dealing with code review anxiety 
tags:
  - code reviews
  - team-driven development
image: "../assets/natalie-pedigo-wJK9eTiEZHY-unsplash.jpeg" 
---

<center>

![](../assets/claudio-schwarz-phFhMqmWrlU-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@purzlbaum?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Claudio Schwarz</a> on <a href="https://unsplash.com/photos/black-and-brown-long-coated-small-dog-on-brown-wooden-bench-phFhMqmWrlU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  

</i>

</span>

</center>

I came across a [wonderful talk](https://www.youtube.com/watch?v=RHopPN6_NfQ) this past week from [Carol Lee, PhD](https://www.linkedin.com/in/carol-lee-phd) from the past LeadDev conference. 

Her talk was centered around some important research she and a fellow scientist, [Kristen Foster-Marks](https://www.linkedin.com/in/kristenfostermarks), conducted about how developers experience code review anxiety.

The TL;DR is that code review anxiety exists among engineers of all levels, and we must develop proper skills to manage it effectively.

They even created a [_free_ online workbook](https://developer-success-lab.gitbook.io/code-review-anxiety-workbook-1) to help developers! There are both scientific explanations for the phenomenon of code review anxiety and practical steps you, as an engineer, can take to improve your relationship with it. It really is a great tool.

As someone who cares deeply about helping developers improve their skills and experience with code reviews, I was really excited about this tool. Much of the research resonates with my own [experiences and observations](https://dangoslen.me/tags/code-reviews) about how individual developers can improve the outcomes of their code reviews.

Today, though, I want to zoom out and ask a subtly different question: if code review anxiety is common, what can _teams_ (not just individuals) due to help their entire team thrive in their code review practice?

## Anxiety Can Be Amplified (or Mitigated!) Based on the Team's Culture

As the research suggests, code review anxiety is felt by many more developers than only early-career developers or first-time open-source contributors. This means that anyone on your team might be experiencing that small pit-in-the-stomach feeling of dread or fear before opening or reviewing a pull request.

But I also know from my own experience and the experiences of others that our anxiety can be amplified (or mitigated!) many more times, depending on who is on the other side of the review. For most developers, the majority of their pull requests will have the same set of people on the other side: their immediate teammates.

I share a story in [Code Review Champion](https://dangoslen.me/book) of a time when code reviews were particularly contentious on a certain team. There were a number of circumstances that lead to it (we'll get into them a bit later), but I remember the nerves I would get before opening or leaving a review as if it were just yesterday. The tension wasn't just emotional or mental, but physiological as well.

Thankfully, our team was able to course correct this problem after a several retrospectives and a desire to improve it. I'll share the exact ways in the next few sections, but for now I wanted to make it clear: you team isn't "stuck" with a bad code review experience. If you are willing to, you can improve this experience for everyone on the team.

## Safety First

At the core of our anxiety around code reviews are a few questions: Am I safe? Are my contributions valued? Am I doing a good job?

Let's focus on that first question, "Am I safe?" for a minute. We are constantly asking this question in our lives, observing our surroundings, looking for threats, and concluding whether we are or are not safe in our current environment.

We don't do this just in our physical environment but also in our work environments and relationships. We constantly evaluate whether a person or group of people is safe to be around. When we feel safe with a group of people, we are more physiologically relaxed, willing to take more risks, and often more open to receiving feedback as well (since we've already established that the feedback is from people we trust vs. threats).

This isn't just me shooting the breeze; it's part of important research from the [Google Re:Work](https://rework.withgoogle.com/en/guides/understanding-team-effectiveness#identify-dynamics-of-effective-teams) initiative. A core learning from Google's research was that a team's effectiveness had less to do with _who_ was on a team and more with _how_ that team functioned. Google found that psychological safety was one of the most critical aspects that predicted a team's effectiveness.

The effect of safety on team effectiveness is part of why open-source communities work so hard to foster a sense of belonging and safety. Because they don't work immediately on the same team and anyone can contribute, they have to work really hard to make people feel welcome and safe and know where to start. GitHub has a great set of [resources](https://docs.github.com/en/communities) on this to help maintainers foster the right environment for contributors.

The takeaway from this idea for code review anxiety is that we need to ask, "Does our team make people feel safe?" If not, you are likely amplifying the anxiety that already exists. If you do have a team in which people feel safe, you are helping to dampen or mitigate the same anxiety. 

Building psychological safety doesn't happen overnight. It takes time to build trust amongst teams, but it is possible. I won't dive into how in this article as there are many resources, including my own, on how to do so. 

But to suffice it to say, part of your job (regardless of your role on your team) is to help build trust and safety. Every action you take can either a [deposit in the trust bank](https://www.coffeeonthekeyboard.com/distributed-teams-need-face-time/#:~:text=We%20make%20deposits,human%20behind%20them.) or a withdrawal. Aim to make as many deposits as you can. Treating people with respect, supplying supporting evidence for your views, and asking kind questions during code reviews are all ways to make such deposits. The best part is that they magically compound over time, too!

## Physical Environments Matter Too

If you had read the last paragraph, you might have concluded that psychological safety was the only kind that mattered. But that would be simply untrue.

Physical safety is incredibly important to a software engineer. We might think it doesn't matter since we do all of our work in digital landscapes created by typing on keyboards, but the truth is that our physical world profoundly affects how safe we feel psychologically. 

Let's revisit the story from earlier about my team struggling with code reviews. Not only did we have low trust and a lack of physiological safety, but we also had very poor physical safety. To be clear, we weren't in the basement of a building with no light and mold spores on the ceiling (though if you are, no wonder you feel anxious all the time!). 

In our case, we were way too close in proximity. A sequence had to be followed for each of us to get to our desks properly, and once we were in, no one could move without bumping one another to get up for a break. It was a whole thing. To make matters worse, our desks were tiny, and we often couldn't fit more than our laptop and a cup of coffee. 

While OHSA might not have issued a warning for our workspace, this space causing so much tension within our team. It is tough to open a pull request without anxiety when you can see your teammate's screens getting the notification within arms reach! Part of what helped our team was physically changing spaces to a new area (in which we could get in and out of our desks without ceremony). If your team shares a work environment, make sure it is appropriately comfortable and safe.

_For those who work remotely, this applies to you, too! If you do all your work hunched over a laptop on an uncomfortable chair and avoid screentime breaks, you are already prone to [stress and anxiety](https://www.npr.org/2023/10/24/1200611637/how-posture-and-movement-impact-our-mood#:~:text=%22There's%20a%20clear%20link%20between,that%20is%20involved%20in%20stress.%22&text=When%20we're%20hunched%20over,drained%2C%20stressed%2C%20or%20anxious). Pay attention to your physical space and encourage your team to pay attention to theirs too._

## Code Review Conventions and Norms

After creating safety and trust, one key that I have found helps teams really supercharge their code review practice is agreeing on certain norms and conventions for how the team will review one another's code. Norms and conventions allow teams to stop revisiting over and over "How do we do this?" and start focusing on "How do we get better at this?"

If you aren't sure what these might be, here are some suggestions

* Have each team member establish one or two times when they plan to prioritize code reviews. The whole team doesn't have to share the same times (especially for a distributed team crossing timezones), but having each person communicate when they expect to look at reviews is a great tool. I've found that the first thing in the morning and right after lunch are good slots. 

* Adopt consistent language to communicate feedback during reviews. By establishing what types of language, questions, etc. are acceptable, reviewers and authors can use that language rather than wondering every time, "Will this come across well?" [Conventional comments](https://conventionalcomments.org/) is a great place to start. 

* Another one that is so easy to do is finally pick a code style and enforce it outside of human intervention. Too many authors get hounded for style by reviewers which does nothing but increase the anxiety and annoyance in the author ("How many nits will I get this round?"). Cut these comments off from the start and have little robots (your CI/CD servers) check your style instead.

The last norm worth mentioning here is time. It's important to establish an acceptable waiting time and review time. By establishing this as a norm, you help prevent developers from assuming their teammates are ignoring them when a review takes a little too long and also empower someone to say, "Hey, I could use some eyes on this one! Thanks!"

--- 

All this to say, code review anxiety is real and not going away. But we can leverage our teams to reduce that anxiety if we choose to.

Happy coding (and reviewing)!