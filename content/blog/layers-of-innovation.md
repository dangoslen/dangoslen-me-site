---
path: /layers-of-innovation
date: 2024-09-15T14:14:30
title: Layers of Innovation
description: Being innovative isn't about being "really" smart but rather really perceptive
keywords:
  - how to be an innovator
  - innovating as a software engineer
  - software innovation guide
  - how to innovate in software
tags:
  - career
  - innovating
image: "../assets/clint-patterson-PPfAUR-jAis-unsplash.jpg" 
---

<center>

![](../assets/clint-patterson-PPfAUR-jAis-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@cbpsc1?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Clint Patterson</a> on <a href="https://unsplash.com/photos/sliced-cake-on-blue-ceramic-plate-PPfAUR-jAis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

</i>

</span>

</center>

Software companies love to talk about innovation. Whether they are building a product that will "revolutionize the way teams do X" or will "disrupt the market", there is real value in convincing investors your company is doing something unique and innovative.

You'll also here this idea in regards to job postings or how to grow in your career. You need to be innovating, challenging the status quo, and bringing new ideas to your teams in order to get to the next level.

But, we've also heard the tried and true adage "Don't reinvent the wheel" or "don't forget the basics". 

How can you as an engineer reconcile these two ideas as your chart a course for growth in your career? 

In my experience, this comes down to learning that innovation is just like many software architectures: it's built in layers. 

## Layers of Innovation

What I mean by layers of innovation is that there are different "forms" of innovating in software. 

You could be building a new product that changes the way teams communicate, but built on a (now conventional) Cloud architecture. Or you could be re-building an existing application by moving it to the Cloud to save in cost via Lambdas or other pay-as-you-go services.

You could also be working on an internal platform or foundations team with the goal of building technology to make the rest of your engineering group more effective. You are innovating by finding the new and high-leverage abstractions that your specific teams needs.

In each of these cases, being innovative means different things. You must consider your [audience](http://localhost:8000/blog/know-your-audience/) or stakeholders that you are attempting to innovate for. If your are trying to build an innovative product, you need to really understand your customers. If you are building something to improve efficiency, you had better understand who or what you are trying to make more efficient. 

Being innovative isn't as tried to your capability to think about incredibly hard problems, but more on your ability to re-think through the existing problems faced by your audience and uncover novel solutions.

With this in mind, consider the different types of "levels" at which you could innovate. I tend to think of these groups in four large categories (with _lots_ of room for sub-categories within each):

* **Computing General**: this group is things like core processing improvements, quantum computing, or building novel new data structures or algorithms. Innovations at this layer benefit the entire computing computing industry. Most of this is research from PhDs through universities or corporations with internal research groups.
* **Computing Domains**: this group includes things like new database technology, new or improve protocols for system interoperability, etc. Innovations at this layer tend to benefit mostly software companies, and is why a lot of these improvements come through working groups made up of engineers across various organizations.
* **Internal User & Platform**: this group includes things like building better tooling, improving the management of machines, or streamlining the deployment process for engineers. Innovations at this layer mostly benefit other software _engineers_ as they have better, cheaper, faster tools to with which to build their product.
* **External User and Product**: this group includes things like better communication tooling for an organization, a faster way to purchase insurance, or even better tools for software engineers to manage their users. Innovation at this level is focused on creating revenue via external user; they are attempting to get someone to use or purchase their software.

![](../assets/innovation-layers.png)


## Don't Forget the Basics

Ok - so now we've talked about innovation and different ways to group or think about being an innovator.

How do you reconcile being an innovator (something that seems really important to grow as an engineer) with "not reinventing the wheel?" (which also seems important)?

My perspective is this: the idea of not re-inventing the wheel has less to do with not building a new wheel, and more so on not forgetting the lessons and outcomes of prior innovation. It also depends on your goal: are you trying to sell things that use wheels are you selling wheels themselves? Put another way, it depends on what layer you are working on.

As an example, You probably don't want to invent your own secure hashing implementation at your company for hashing a password - unless perhaps you are a security researcher working at a user management company. It also probably doesn't make sense to build a new transport layer protocol - unless you happen to be at Google where the difference between TCP and QUIC is substantial latency and cost across your entire application space.

But even here, many innovations still build upon core computing fundamentals and simply look at them from a different angle. A favorite of mine is Apache Kafka. While there is much more to it than this, one of Kafka's core ideas was using a stream rather than a queue. It sounds subtle, but the impact is gigantic. By keeping an offset pointer to where a consumer is in a stream rather than simply reading from the front of a queue, Kafka can now enable multiple consumers to read the same message. 

Another is from the (likely now obsolete) [Haystack architecture](https://engineering.fb.com/2009/04/30/core-infra/needle-in-a-haystack-efficient-storage-of-billions-of-photos/) used at Facebook. One of the ways Haystack works is to store multiple photos into a single file. There is some management that comes into play here to read the right photo and quickly populate indexes, but at it's core, these engineers understood that keeping a single file open vs. opening, reading, and closing multiple files had an performance improvement since they can easily seek to any position in the file if it's open. 

In both of these cases, these innovations (I'd place Kafka on the Computing Domain since it involved a new protocol and Haystack at the Internal User and Platform since it was mainly for performance improvements internally to Facebook) were based on understanding "the basics" of how computers worked and bringing a new question to existing paradigms: what if we had one large file instead of many? What if we don't delete a message in the queue? 

Asking these sorts of questions framed around computing fundamentals can lead to incredible innovation.

## Standing on the Shoulder of (Kinda-standard) Standards

With all this in mind, I'd like to share my own recent experience with innovating at the Internal User and Platform layer.

At Vouch, we make significant use of the [Inbox Pattern](https://en.wikipedia.org/wiki/Inbox_and_outbox_pattern) within Event-Driven Architecture. So much so that we've built our own abstractions and tools to make it easy for any new application to use the Inbox Pattern with a few lines of code. 

But one of the gaps we had was around searching for a message in the Inbox. We didn't have an easy way to search for messages unless we opened up a connection to the datastore an app was using. WHile not a terrible experience for one application, it was difficult if you wanted to search across several quickly. What we really wanted was a REST endpoint to query and find records through.

Thankfully, thanks to NestJS, building an auto-mounted controller was pretty straightforward. Not a lot of innovation there.

But where things got interesting was filtering. Messages often have different shapes and data, so building a reusable set of filter params would be a bit difficult. But thankfully we realized we were storing our messages in JSON - and that meant we could use [JSON Paths](https://en.wikipedia.org/wiki/JSONPath)! I won't cover all of JSON Paths here, but just know JSON Paths are a "standard" (yet not so standard once you get into the details) way of extracting and filtering JSON data.

We also realized that we had built an abstract class that represented our datastore for records and that meant we could build into our datastore the ability to apply a JSON Path supplied to the controller without applications having to do that work themselves. Since the majority of our applications used the same database, we could essentially give this capability to _every_ app for free! All that apps needed to do was init the abstract datastore class and pass it via NestJS dependency injection to the auto-mounted controller.

If you are thinking: "yes, this is pretty basic stuff...", you are absolutely right!. We didn't build anything "new" here: dependency injection has been around for a while, JSON Paths have been too, and SQL as well. How is this innovating?

In my humble view, this was innovative because it enabled our internal teams to now search for arbitrary messages using a mostly standard syntax in a query param without having to jump across database connections or remember SQL syntax. They only needed to remember some basic JSON Path expressions (which our team has for other reasons gone all-in on recently). Innovation didn't come from building something shiny and new by build standing on the shoulders of (kinda-standard) standards and tools that are readily available for use.

We took a look at the problems of our audience (other engineers) and asked a simply question: what if you could search using a JSON filter?

And now teams have faster tools in their toolbelt for building and debugging our software.

---

The quick summary here is to remind you that innovating as an engineer doesn't require extremely deep technical stills. Instead, it requires paying close attention to the problems your users face and asking the seemingly silly questions that no one has thought to ask before. It's about being perceptive more than about being "smart."

To be fair, you likely _will_ encounter a problem that requires gaining new skills to solve and innovate for. That is great! When you find it, go get the skills you need to solve it.

But I also bet you'll encounter many problems that make use of software fundamentals in a slightly novel way than you might have thought about them. So don't throw them out - get really good at them.

Happy coding!
