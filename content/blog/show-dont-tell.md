---
path: /show-dont-tell
date: 2023-11-07T11:49:50
title: Show Don't Tell
description: A better way to gain buy-in and effect change.
keywords:
  - career
  - how to write great demos in software engineering
  - the value of demos in software engineering
  - leadership
tags:
  - career
  - leadership
image: "../assets/russn_fckr-krV5aS4jDjA-unsplash.jpeg" 
---

<center>

![](../assets/russn_fckr-krV5aS4jDjA-unsplash.jpeg)

<span class="credit">

<i>
    
Photo by <a href="https://unsplash.com/@russn_fckr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">russn</a> on <a href="https://unsplash.com/photos/assorted-color-paints-krV5aS4jDjA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
</i>

</span>

</center>


I used to love show'n'tell as a kid. I was a tinkerer when I was younger and often had fun items to bring to class to show to (impress?) my classmates. I think I brought in a LEGO Mindstorms robot at one point, and I know I brought in a rescued squirrel once, too...

The key to being good at show'n'tell was, of course, the  _show_ portion. If you brought in something really interesting but it _looked_ boring, no amount of "tell" would save you (unless you were a Tony Robbins or something). You had to have something that immediately sparked interest and excitement from your peers.

While most (if not all) professional software engineers are out of grade school, many of us still find ourselves in show'n'tell scenarios. Knowledge shares, tech talks, or even project proposals are all forms of this tradition we learned as kids. We have some ideas or some knowledge that we want to convey to our team in the hopes of sparking excitement and interest. 

Being able to spark excitement and interest amongst our team is a valuable skill to have. This is especially true as we become leaders in our organizations. We become responsible for setting [vision](https://dangoslen.me/blog/the-importance-of-vision/), identifying and [building abstractions](https://dangoslen.me/blog/on-building-abstractions-too-soon/), and helping our teams adopt best practices. 

Many engineers turn to writing documents and having conversations to accomplish these goals. But we neglect the critical ingredient from show'n'tell: the showing. We'll write multi-page docs about our ideas or opinions. We'll talk with devs, managers, and product owners to gain alignment. We might even write pseudocode for an idea.

But in the mix of documents and diagrams, what many people need isn't a lengthy Google doc. They need something to grab their attention and make them sit up in their chair. They need to be shown what the future world could look like.

## Show the Future

One of the modern greats of software engineering, [Kelsey Hightower](https://en.wikipedia.org/wiki/Kelsey_Hightower), is famous for showing people the future.

In an interview with [The Changelog](https://changelog.com/friends/6) this past year, Kelsey described a time when he demoed a working example of using tools like Chef to orchestrate auto-provisioning of machines via a Jira workflow. And while that might not sound exciting today, if you had been an infrastructure engineer who spent essentially wasted time provisioning machines over and over via tickets, you might have jumped out of your chair. As Kelsey describes, his team was immediately _excited_ and willing to help.

What would have happened if Hightower had decided to write an extensive proposal and send it to the team? I imagine a few engineers would have been excited, but I would wager many said, "That _would_ be cool, but we don't have time to work on this, and it seems too complicated." 

Already burdened by the weight of everyday work, the same engineers who jumped at _seeing_ the future are cynical at worst and apathetic at best when reading yet another doc with more work for them. I wouldn't blame them either.

## The Experience of Something Different

One of the core reasons why showing your coworkers the effects or outcomes of an idea works is because it allows others to _experience_ what the future world could be like. There is something tangible right in front of them that they can experience.

To be clear, words _are_ powerful. We are where we are today as a society because of written language and its ability to distribute information. We all still turn to books, blogs (like this one!), magazines, and the like to learn and grow.

But written language is also difficult. As someone who has tried to write a new article at least once a month for the past three to four years, conveying your ideas properly via prose requires mastery and skill. Skills I'm still growing in. If writing were easy, we wouldn't celebrate great works of literature like we do. We have a sense of respect and admiration for those who can communicate with words so effectively.

What does this have to do with anything? 

The difficulty of written language is important to this topic because it forces us to admit that we can always improve out writing. We are never done mastering written communication. There is ambiguity that we should have clarified. Questions we should have answered. Sentences we should have shortened.

This is especially true when attempting to describe a future world that is fundamentally different than the current one we operate in. Whether it's about team process, a codebase, or observability, it requires mastery to properly articulate how different the world could be and convince others to buy in.

## Breaking Mental Models

The other tricky aspect of describing a future world is the mental models of your teammates.

When I was first learning Golang, I struggled a lot with the way interfaces worked. Golang has a very [different type system](https://go.dev/ref/spec#Types) than the Java I was used to at the time, and I couldn't get things to "click." It wasn't until I followed several examples (over and over again!) with code at my fingertips that the paradigm made sense to me.

The problem wasn't that the Golang docs were unclear (their docs are actually quite good, in my opinion). The problem was that I had an entrenched mental model of how types work in Java, and I needed help to map a previous experience to a new one. Once I started _seeing_ and _interacting_ with tangible examples, though, I was able to make the connections.

This short story helps illustrate how interacting with something tangible can help you learn and understand an idea. If you are attempting to describe how a new "thing" could work to someone who has little to no experience with that thing or anything similar to it, they will likely be a little confused. Words themselves can only get you so far. 

This applies to other areas of software engineering as well. From team process to observability to deployments, do your best to offer some tangible and interactive to help illustrate the techniques you are trying to teach. Can you create an example dashboard to demonstrate how to track metrics more effectively? Could you experiment with a new meeting format once you ask the team to commit to it? Could you show a prototype for a new CI/CD tool?

Find some way to help your team break out of their existing mental models to understand something new.

## Keep Using Docs and Diagrams

Before concluding this post, I do want to make clear that you should continue writing docs and putting together diagrams. Every engineer should learn to write clear, succinct, and illustrative technical documents (proposals, designs, diagrams, etc.). I'm not advocating for abandoning these tools at all.

What I am advocating for is adding some tools to your toolbox. Part of being an engineering leader is knowing how to appropriately influence the direction of your team without forcing people (and knowing when to back off an idea, too). Having more tools to help convince your team of an idea or direction will always be beneficial. 

The last thing I'll add about docs and diagrams (especially diagrams) is to ensure they are good. Too many diagrams are cobwebs of boxes and arrows. They lack proper legends, labels, and context, making them hard to read and understand. Add to that a diagram that is out-of-date with an accompanying proposal, and you'll readers won't know what is going on.

A well-crafted and proper diagram, however, can supercharge an idea. A diagram is a picture, after all. They help us something to _see_ rather than just more words. There are also cases in which a diagram is much faster and more effective than a prototype. Architecture and sequence diagrams are great examples, but any well-crafted diagram can help. 

TL;DR - work hard to generate the best docs possible. 

---

None of this is easy. 

Creating a demo or prototype to show your team your ideas will require more effort than putting your opinion in a Slack channel or sending a doc around for review. You'll have to focus on helping the team break out of their mental models and experience something different. 

And while we can't demo like Kelsey, we can take strides to show our team our ideas rather than relying on mere words. We can show them the future.

Happy coding!





