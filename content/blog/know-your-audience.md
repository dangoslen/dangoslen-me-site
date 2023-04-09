---
path: /know-your-audience
date: 2023-03-25T17:59:41
title: Know Your Audience
description: 
keywords:
  - keyword
tags:
  - tag
image: "../assets/natalie-pedigo-wJK9eTiEZHY-unsplash.jpeg" 
---

<center>

![](../assets/claudio-schwarz-_wDZkpybAfY-unsplash.jpeg)

<i> 
    
Photo by <a href="https://unsplash.com/@purzlbaum?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Claudio Schwarz</a> on <a href="https://unsplash.com/photos/_wDZkpybAfY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>


</center>

# Knowing Your Audience

One of my favorite quotes from [The Pragmatic Programmer](https://amzn.to/3GuXI71) has nothing to do with programming, and it has to do with communication. They write:

> If you can't clearly communicate your idea, it might as well not exist

In many ways, communication is the crux of the software engineer. Software is tricky to grasp, and communicating our ideas about software is even more challenging. It's a complex task, and it's why we've built up vocabulary around [patterns](https://dangoslen.me/blog/our-obsession-with-patterns/) and architecture.

Another aspect of communication often overlooked is who you are presenting to. You can rarely present an idea identically to every type of audience. Your product owner differs from your teammates and your manager, etc., and you must adjust accordingly.

I'm still learning how to present my ideas well and listen to my audience (this blog is a real-time example of my attempts to do so 😂), but I want to tell you how I try to think about how to think through presenting my ideas to various audiences.

Here are three axes around your audience that can help you tailor your presentations to match the audience. 

## Technical Experience

The technical experience axis is what many engineers think of first. "Is my audience technical like me or not?" This is a great question to consider.

The more technically similar it is to you, the more you can get away with using the jargon of your skillsets. Engineers know about garbage collection. They understand if you said, "Our garbage collections are taking too long sometimes, leading to our service being unavailable." On the other hand, mention garbage collection to a marketer, and they might picture a literal garbage truck. 

The further away from technical skills your audience becomes, the more you need to encapsulate (a technical term!) those technical details. The marketer from earlier trying to promote your product might not understand garbage collection, but they will know that customers want reliable services in the marketplace. Any idea you have to reduce garbage collection times should then be discussed as an idea to increase reliability—the same idea goes for a product owner.

It isn't always possible to hide all of the technical details. Sometimes the details around a tricky bug or outage need to be discussed. In these cases, do your best to explain those details at a high level without talking about specific code paths or services, etc. The less you can discuss the nitty gritty and focus on product implications or business outcomes, the better.

It's also important to note that even within your engineering organization, there is a vast range of experience and knowledge. Even when presenting an idea to other engineers, they might have never heard of a particular pattern, concept, or strategy your are discussing. Be prepared to explain them briefly if asked. Avoid the dangerous assumption that "every engineer knows that."

## Role

Another consideration of your audience is their roles. Are you presenting to higher-up engineers within your tech org? Are you communicating an idea to someone in operations? Are people in your audience managers or directors? Each of these roles has different goals and therefore is looking for different things from your communication with them.

As best as you can, think about what each role brings to the organization to make it run smoothly. Each position exists for a specific reason, and the more you can understand what the reason is, the more you can tailor your communication structures toward that role.

Let's go to our example about garbage collection and service reliability. Your engineering manager might want to focus on how to help resource you to make it happen. Your fellow engineers might want to know more specifics to start brainstorming solutions. Your product owner might want to know how frequently it happens to understand the impact to product timeline. Your CTO might not care that much - unless it's the source of outages, measurable instability, or developer dissatisfaction.

To make things even more difficult, your audience will likely be a mix of these roles. It's common to have your teammates, a product owner, your manager, and potentially a director all in attendenace to hera a great idea. If you can, tailor your communication toward the primary audience members you expect to have, especially if they are for leadership roles.

![](https://media.tenor.com/_c8RgO7aX7MAAAAC/zach-galifianakis-dfx.gif)

## Team Proximity

The last axis to consider is team proximity. 

No one understands the issues and needs of your team and builds better than its members. This means that in the same way, you can get away with talking about specifics of your teams day-to-day when talking with your team. 

But outside of your team, you must provide context for what matters and what doesn't. Even with your engineering organization, your team might be dealing with a data model that hinders your team that is hard to explain to other teams. If you state that the data model is a problem, the next question is likely to be, "What about the data model is hindering you?" or "How much is it hindering you?" As you move further from your immediate teammates, you will need to provide answers to such questions. 

But answering all of these questions is challenging. You must consider the previous axes of technical experience and role and what the meeting is about (a product brief, a working group, a quarter review with eng. leadership, etc.). You need to find the balance between too much and too little information. And it's hard to do.

A good rule of thumb for these answers is to go back to talking about high-level implications and business outcomes rather than nitty-gritty. Even when explaining a technical conundrum to another team (like the data model), focus on the _effects_ of the problem on your team. Or explain what the _benefits_ are (or will be) of your solution.

Ideally, you anticipate these questions and include them in your presentation materials. This gives you extra time to consider all of the factors involved. You can tweak and refine your wording, order, and details several times.

---


## Communication Is Difficult

If you've stayed with me this far (hi, BTW!), you can see this is a tough road with a lot of considerations. From audience roles, experience, proximity, and even size, there is a lot to factor in.

I tend to think of all of these factors as they relate to each other as a cone. At the bottom, we see technical experience, and while it plays a vital role in how you communicate, you still have a lot of room to explore how to best share an idea with those in the room. The further your audience moves away from your team and in leadership, however, the less "surface area" you have to walk around in. You have to be much more "on point" when presenting to those groups.

---

I'll leave you with one last tip that has never failed me when I think about it properly:

**Shorter is better**

If you can communicate complicated succinctly and clearer, you will be ahead of the curve. Adding more words to clear up a confusing paragraph will not help; it will only increase the confusion.

I'm not saying send memos or write RFCs that don't have meaningful details or evidence to support your ideas. But you should remove any and every non-essential word that you can. You should use the same terms throughout your communication for your ideas vs. redefining them in subtly different ways. You should make sure the high-level goals are clear and the details put into appriopriate sections for those that case.

Being good at communicating in this way is learning the art of editing. You write your heart out, then remove the cruft and cobwebs, considering how to benefit your audience with each word. 

All of this will take time and effort. It's tedious and challenging. It won't happen overnight, but the results if you stick with it are worth it.

Happy coding!