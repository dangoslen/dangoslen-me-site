---
path: /ato-recap-2022
date: 2022-11-19T00:00:00.000Z
title: Be Willing to Change You Mind
description: Changing your mind isn't always bad thing. Nor is it a sign of weakness. It might even be a sign of strength.
tags:
  - conferences
  - OSS
  - all things open
image: "../assets/ato-2022.jpeg"
---

<center>

![All things open banner in a a large conference room](../assets/ato-2022.jpeg)

<i> 

Photo by me
  
</i>


</center>

I was listening to a podcast not too long ago. The guest on the show was an author who had recently unpublished a book of theirs citing it has caused more damage than good. They had come to realize their stance on an issue was wrong.

The host said something I found profound. "You changed your mind!" she exclaimed. "Do you know how rare that is today?"

It's true. As humans, We often are unwilling to change our minds on a lot of things. We get entrenched in our opinions often without being open or willing to listen to another perspective.

Unfortnately, software engineers are probably some of the least likely people to change their minds. I know - I've been one of them. We've been taught to think so critically and deeply about complex ideas that once we come to our conclusions it is hard to shift them. 

However, growth and learning is often predicated on being willing to change - or at least morph - our understanding of the world. If we aren't willing to change how we think, we will never learn.

### Why Don't We Change Our Minds?

If changing our minds is foundational to learning and growth, we are we so resistent to it? 

My hunch is that changing your mind often feels like admitting were aren't good enough. Putting our own idea down to prefer someone else's idea feels embarrasing somehow. We start to think can't cut it as an engineer. It's imposter syndrome all over again.

Another concern is that of strength or leadership. We are afraid that if we admit we were wrong about something that we are a bad leader. Or perhaps we fall prey to the sunk cost fallacy touting that "we've already come this far." Leaders are often more willing to ruin their culture and credibility rather than admit they were wrong about something and course correct.

These are legitimate concerns to be fair. It isn't easy to admit being wrong or to be willing to take a fresh perspective on something. To learn, though, we have to be willing to do so.

### Good, Better, and Best

In software, though, This isn't often the case (more on that later), but it sure see

Most of the time, though, this isn't the case. Instead of being wrong or right, ideas and solutions are on a spectrum more akin to good, better, and best. 

There are, of course, facts and details about how to write code that are right or wrong.


Software engineering has long touted the phrase "Strong opinions loosely held" 

Sometimes we don't want to change our minds because we don't actually want to learn. We say we want to be lifelong learners but in reality we just want to skip the learning and just have the knowledge. We want to be experts without putting in the time.

## Keynotes

### Scott Hanselmann

> You only have a finite set of keystrokes left
>
> -- Scott Hanselmann

[Scott Hanselmann](https://twitter.com/shanselman) gave a really lighthearted and fun discussion on how to [tell your story and share your experience](https://2022.allthingsopen.org/sessions/mentorship-sponsorship-and-storytelling-building-the-next-generation-of-technologists/). He talked about the difference between mentorship and sponsorship, something I've been trying to gain more of an understanding of recently. A big thing for me here was bringing others along to things they usually wouldn't be part of.

I appreciated his push to "share your story anywhere with a URL." His point is you can reach more people by sharing over a blog, Twitter, or GitHub vs. only over email or one-off conversations. I'm glad I've already picked up this habit (i.e., this blog). Still, it is a good reminder of _why_ I have this blog: I'm trying to share my story and experience with others to help them on their journey.

### Jason Lengstrof

[Jason Lengstrof](https://twitter.com/jlengstorf) might be one of the best presenters in the software industry. Yes, I just told you ATO was my first complete tech conference. Still, I've seen many other presentations over the years - whether recordings, virtual events, or smaller scoped tech talks - and Jason has a skill here.

In his talk, [Wandering vs. Seeking](https://2022.allthingsopen.org/sessions/seeking-vs-wandering-how-curiosity-play-and-wasted-time-lead-to-healthier-more-successful-careers/), he encouraged engineers to have the proper balance of hard work towards a goal (seeking) vs. time to relax, play, and dabble (wandering). His own story shows how being willing to find the adjacent possibilities from your current work requires a  willingness to explore and focus (at least for a time) on something you enjoy. He also reminded us that sunk cost fallacy is a thing and pivoting is ok - especially since any skill gained is valuable in its own right.

## Talks and Breakouts

### Releases Galore

I'm a _huge_ fan of release notes and automating them for projects. Many automation discussions these days focus on automating running software or deploying software. However, we can also automate processes for our teams and remove toil. I've even built a (small) [GitHub Action](https://dangoslen.me/blog/enforcing-a-changelog-with-github-actions/) to help here!

[Michelle Manning](https://twitter.com/mishmanners/) from GitHub gave a talk sharing the [importance of release notes for software projects](https://2022.allthingsopen.org/sessions/release-radar-how-and-why-you-should-do-releases-for-your-open-source-project/). She especially highlighted how GitHub has been doing a ton of research and improvements to make creating releases easier and more accessible for OSS maintainers, which is really cool.

A big takeaway for me was what makes good release notes. I'm planning on bringing these to my own teams too. In particular, their research highlighted that good release notes have these elements:
- **a why** - tell users why you are releasing a new release
- **a summary** - give a summary before breaking down the details
- **conventions** - use a versioning strategy like [semantic versioning](https://semver.org) and how you do your release notes like [keep-a-changelog](https://keepachangelog.com/)
- **easy navigation** - inlcude links from the release notes to issues, pull requests, or external materials
- **contributors** - recognize those that contributed to the release

Check out the [resources from her talk](https://github.com/mishmanners/TalksandEvents/blob/main/Talks/ReleaseRadarAllThingsOpen2022.md) if you want to help your own projects start releasing better!

### Rules Engines and ML

Rules engines and expert systems are a form of technology I have yet to be able to build or use, but I see the need for them in some upcoming work I have. I was happy to see a talk from Capital One discussing how they have [built a rules engine and combined it with machine learning](https://2022.allthingsopen.org/sessions/combine-the-strengths-of-an-open-source-rules-engine-and-machine-learning-platform-to-power-decisioning/) to make decisions. 

While the talk was a 10,000-foot view, presenters [Andrew Bonham](https://2022.allthingsopen.org/speakers/andrew-bonham/) and [Thiaga Manian](https://2022.allthingsopen.org/speakers/thiaga-manian/) did an excellent job of discussing a lot of the tools they use @ Capone, including [Drools](https://www.drools.org/), [kogito](https://kogito.kie.org/), and [H20](https://h2o.ai/). I appreciated that they discussed some of the more difficult parts of a rules engine system, like monitoring, rule verification, rule conflicts, etc. Building a rules engine isn't the hard part. _Managing_ it is. 

I'm excited to reference my notes as I bring the idea of rules engines to my teams. _Sorry for just my notes! They didn't share any slides._

### Content Creation

News flash: content creation is exploding. This isn't a surprise to anyone on the Internet, though.

But while many people are focusing on TikTok dance videos or cash giveaways on YouTube, there is a thriving community of developer teachers helping engineers and those trying to break into tech learn new skills. [James Q Quick](https://twitter.com/jamesqquick) is one of those creators (who just became a full-time content creator this year! - congrats!).

In his talk, James shared his story of building content and how it took _years_ to see a real payoff. But he kept pushing and creating. After following accounts that sometimes make content creation seem simple and easy, it was great hearing him transparently show his numbers and progress over time.

My big takeaway from his talk was that words on a resume are just words on a resume, but building a brand through content _shows_ who you are and what you can do. I even saw this happen last year when the hiring manager for my current role referenced my blog! Like Scott mentioned in his talk, creating content and sharing your story is powerful, even if you have yet to become a full-time content creator.

### Hiring is Broken

Everyone in tech laments the interview process. But no one seems to have a better idea or provide steps to improve our current strategy.

NC State (go Wolfpack!) professor and Microsoft researcher [Chris Parnin](https://twitter.com/chrisparnin) talked about the scientific reasons why tech [hiring is broken](https://bit.ly/hiring-is-broken) and some insights into what we can do to fix it.

In particular, Chris walked us through how tech interviews look eerily similar to the [Trier Social Stress Test](https://en.wikipedia.org/wiki/Trier_social_stress_test), which is "used to reliably induce stress in human [...] participants." In effect, we've actually turned our interview process into examining how well someone can mitigate or cope with a stressful situation rather than if they can problem solve or code.

Some of the steps he suggested taking include
- giving interviewers a chance to solve problems alone or at least have some time to think privately (i.e., not being probed with questions from interviewers)
- framing the interviewer as a colleague or collaborator rather than a judge 
- ask _real_ problems that would be seen on the job rather than toy problems

I'm excited to bring these back to my team and our hiring process!

---

So much great stuff! I can't write about _every_ talk I went to in-depth or every resource I found, but I'll drop a link for a few additional things worth mentioning.

Hope to see you at ATO next year!

Happy coding!

- [All In Program](https://allinopensource.org/) - a program to promote and build better inclusion for everyone in OSS
- [A GitHub Action](https://github.com/mtfoley/pr-compliance-action) for Helping PRs get merged and conform to OSS or repo standards
