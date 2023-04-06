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

Photo

<i> 
    
Credit

</i>


</center>

# Knowing Your Audience

One of my favorite quotes from The Pragmatic Programmer has nothing to do with programming. It has to do with communication. They write:

> if you can't 

Communication is, in many ways, the crux of the software engineer. Software is a tough thing to grasp and communicating our ideas about software is even harder. It's a complex task and it's why we've built up vocabulary around [patterns]() and archtiecture.

Another aspect of communication as an engineer isn't what the idea is or how you present it, but who you are presenting it to. It is rare that you can present an idea to your product owner in the same way as you do to your teammates or even your manager. And almost certianly not the CTO.

I'm still learning how to present my ideas well (this blog being an example of my own learning journey 😂), but I want to tell you how I try to think about how to think through presenting my ideas to various audiences.

In general I think of three axes that can help you tailor your presentations to match the audience.

## Technical Experience

This is the axis many engineers think of first. "Is my audience technical like me or not?" This is a great question to consider.

The more technically similiar is to you, the more you can get away with using the jargon of your skillsets. Engineers know about garbage collection. They understand if you said "Our garbage collections are taking too long somtimes leading to our service being unavailable." On the other hand, mention garbage collection to a marketer and they might picture a literal garbage truck. 

The further away from technical skills your audience becomes, the more you need to encapsulate (a technical term I know!) those technical details. The marketer from earlier trying to promote your product might not understand garbage collection, but they will know that in the market customers want reliable services. So any idea you have to reduce garbage collection times to increase reliability really should be discussed as an idea to increase reliability. Same for a product owner.

It isn't always possible to hide all of the technical details. Sometimes the  details around a tricky bug or outage need to be discussed. In these cases, do your best to explain those details at a highlevel without talking about specific code paths or services, etc. The less you can discuss the nitty gritty and discuss product implications or business outcomes the better. Do you 

It is also important to note here that even within your eng. organization that there is a vast range of experience and knowledge. Even if you are presenting an idea to other engineers, they might have never heard of a particular pattern, concept, or strategy before. Be prepared to explain them breifly if asked. Avoid the dangerous assumption that "every engineer knows that."

## Role

Another consideration in your audience is role. Are you presenting to higher up engineers within your tech org? Are you communicating an idea to someone in operations? Are people in your audience managers or directors? Each of these roles have different goals and therefore are looking for different things from your communication with them.

As best as you can think about what each role brings to the organization to make it run smoothly. Each role exists for a specific reason and the more you can understand what the reason is, the more you can tailor your communication structures toward that role.

Let's go to our example about garbage collection and service reliability. Your engineering manager might want to focus on how to help resource you to make it happen. Your fellow engineers might want to know more specifics to start brainstorming solutions. Your product owner might want to know how frequent it really happens to see if it will start to impact product timeline. Your CTO might not care that much - unless it's the source of outages and measurable instability.

You often will be presenting to a mix of roles. If you can, try to tailor your communication toward the primary audience members you expect to have, especically if they are for leadership roles.

## Team Proximity

The last axis to consider is team proximity. 

No one understands the issues and needs of your team builds better than it's members. This means that in the same way you can get away with talking about specifics of your teams day-to-day when talking with your team. 

But outside of your team, you have to provide context for what matters and what doesn't. Even with your eng. orgnization, your team might be dealing with a data model that hinders your team that is hard to explain to other teams. If you state that the data model is a problem, the next question is likely to be "what about the data model is hindering you?" or "how much is it hindering you?" As you move further from you immediate teammates, you will need to provide answers to such questions. 

But the answers aren't easy. You have to take into account the previous axes of technical experience and role, twhat the meeting is about (a product brief, a working group, quarter review with eng. leadership, etc.). You need to find the balance between too much or too little information. And it's hard to do.

A good rule of thumb for these answers is to go back to talking about high level implications and business outcomes rather than nitty-gritty. Even when explaining a technical condurum to another team (like the data model), focus on what the _effects_ are of the problem on your team. Or explain what the _benefits_ are (or will be) of a new idea or iniatiave.

Ideally you anticipate these questions so you can put them into your presentation materials. This gives you extra tine to consider all of the factors invovled. You can tweak and refine your wording, order, and details several times.

---


## Communication Is Difficult

If you've stayed with me this far (hi BTW!) you can see this is a complex road with a lot of considerations. From audience roles, experience, proximity and even size, there is a lot to factor in.

I tend to think of all of these factors as they relate to each other as a cone. At the botoom we see technical experience, and while it plays an important role in how you communicate, you still have a lot of room to explore how to best communicate an idea with those in the room. The further your audience moves away from your team and in leadership, however, the less "surface area" you have to walk around in. You have to be much more "on point" when presenting to those groups.

---

I'll leave you with one last tip that has never failed me when I think about it properly:

**Shorter is better**

If you can communicate complicated succiently and clearer, you will be ahead of the curve. Adding more words to clear up a confusing paragraph will not help; it will only increase the confusion.

I'm not saying send memos or write RFCs that don't have meaningful details or evidence to support your ideas. But I am saying that you should remove any and every non-essential word. Use the same terms throughout your communication for your ideas vs. redefining them in subtly different ways. 

Being good at communicating is, in many ways, learning the art of editing. Which is hard, but always yields a better version.

Happy coding!