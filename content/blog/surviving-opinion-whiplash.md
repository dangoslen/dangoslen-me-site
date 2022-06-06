---
path: /surviving-opinion-whiplash
date: 2022-05-27T00:00:00.000Z
title: Surviving Opinion Whiplash
description: Everyone has an opinion about how to do anything in the software industry. This is how you can survive the whiplash of running in one direction and then be told to run the opposite direction
tags:
  - software engineering
  - critical thinking
  - leadership
image: /assets/kees-streefkerk-O3g3s-K3xKI-unsplash.jpeg
---

<center>

!["winding road"](../assets/kees-streefkerk-O3g3s-K3xKI-unsplash.jpeg)

<i> 

Photo by <a href="https://unsplash.com/@kees_streefkerk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kees Streefkerk</a> on <a href="https://unsplash.com/s/photos/toss-and-turn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
  
</i>

</center>

Last week I was researching some best practices and conventions. I was trying to learn how other teams name their Kafka topics since I've recently been working on some event broker technology. 

I wasn't looking for anything super concrete - just something to help me start to reason about things. I was confident that a topic like topics would have some consensus about good names and provide a general direction at this point since Kafka has gained wide adoption. 

But I was wrong. What I experienced, sadly, was the opposite.

I read one author who said, "never put a version in your topic name," and another who said, "always put a version." Another author offered a shorthand for specifying the _type_ of event being processed (facts, change data capture, requests, etc.) but never say what actual _thing_ the topic held. Another author said this was foolish; just name it for the event POJO.

It was frustrating. I was able to read between the lines and develop a (suggested) strategy for our team, but I couldn't help but think that if I were trying to learn this for the first time (I've used Kafka before), I would be so confused.

Unfortunately, this is a large (and growing!) problem in our industry. Engineers have realized over the past few years that we can offer our expertise (or at least experience) to the world through blogs and tweets - and even gain a following! Some have good intentions (to be genuinely helpful), and some might not (I hope I don't fall into that latter camp for those reading!). Regardless of intentions, we've created a world where anyone can offer their opinion on an issue without having their credibility, or the longevity of their opinion scrutinized.

As engineers (esp. newer engineers), how can we read through the dissonance and find the guiding principles worth following? How can we survive the whiplash of opinions pulling us in drastically different directions? Can we learn which ideas are worth listening to? 

I think we can.

## Developing Mental Models

We are continuously developing [mental models](https://en.wikipedia.org/wiki/Mental_model) of how the world works. From how our cars work to how to keep ourselves healthy, we can turn our knowledge, feelings, and experiences into a holistic interpretation of how things happen to help us make decisions in the future. As we learn new things or have new experiences, we refine our model to be more accurate about what is happening.

The same is true for computers. When we first learned how to program, we didn't understand all the complexity of how a computer worked. Writing to a file, for instance, is often so well-abstracted that we don't need to know about how the OS handles the file. We know that some signal gets sent to a bus; then a driver for a hard drive (or SSD now!) reads the data on the bus; the driver schedules the disk head to go to a specific location on the drive... and so it goes.

But as we studied computers, we learned that complexity and all of the various "gotchas" along the way. We learned that in the case of writing to a file, an OS might not ever actually write a file to disk! It may just stay in memory for a time. 

We must take this same approach when reading best practices and heuristical guidance from the software industry. We likely don't need to accept one perspective and reject all others; instead, we need to glean helpful understandings from each perspective and add it to our mental model. As our model gets refined, we will be able to navigate the complexity of writing software with more capability.

## Listen to Experience

Especially from those you _actually_ work with. So much nuance can be lost in a post on Stackoverflow asking for help or opinions while your teammates and co-workers are paid (literally) to help the whole organization thrive. 

Ask around your teams for people who have used the technology you are evaluating or have previously had similar problems as you are. If you have a Slack channel for the engineering org., post a question asking for help. Ask your manager if they know anyone at the company worth talking to. This kind of old-school networking is an essential skill worth developing that can help boost your career. Just think - six months from now, when someone has a similar problem as you have currently, guess whom everyone will refer that person to? You. You've built a reputation as a problem-solver, and reputation is worth a lot.

If you genuinely can't find someone in your org. with experience with this new tool, be careful how you do your online searching. It can be easy - too easy - to read the top 2-3 articles returned by Google and accept it as law. Go directly to the technology's website and find their recommended readings, courses, tutorials, etc. If your organization is really looking to adopt new technology and you happen to be the person blazing the trail towards adoption, invest in becoming an _expert_. Dive deep to understand the nuances, problem-space, and common mistakes associated. If you need to pay for a course or other material, ask your manager and make the case that your team doesn't have the expertise right now but that you are willing to gain that expertise instead.

By looking to experience within your organization and building up your own expertise, you can build a strong foundation that can stand up to the whiplash of opinions. Instead of being pulled this way and that, you can instead observe and consider the merits/pitfalls of each.

And when it comes to experience, remember that while time and experience are correlated, they are not casual. [Kent C. Dodds](https://kentcdodds.com/blog/how-to-get-experience-as-a-software-engineer) explains this well in that more problems lead to more experience:

> "Technical Experience" comes from experiencing different situations and then learning from those experiences to improve your response to the same or similar situations in the future. Another way to say "situations" is "problems." Engineers who make the most of their "experience time investment" are the ones who intentionally expose themselves to various software-related problems and then work hard to overcome or find/build solutions to those problems.

Listen to and build your own experience.

## Fundamentals Always Work

Every technology, framework, database, or what-have-you was built on computer science fundamentals. Most significant innovations happen in software, not because of a new data structure or finding a radically new sorting algorithm, but by applying those fundamentals slightly different from before to optimize for a very particular use case. 

[Haystack](https://engineering.fb.com/2009/04/30/core-data/needle-in-a-haystack-efficient-storage-of-billions-of-photos/) is a great example. They used fundamentals of how operating systems handled files to re-think how to store photos and used giant files with an in-memory map of each photo identifier to its offset in the file. This way, they never had more than just one open filehandle. 

The takeaway here is that when you start focusing on fundamentals, you can sift through the noise to find things that align with those fundamentals. You'll be able to spot "too good to be true" claims and hyperbole quickly. When and how to use various tools will become natural as you consider the access patterns, consistency models, and overarching topology of such tools. 

Focusing on fundamentals gives _you_ the ability to _evaluate_ opinions and ideas rather than feeling like they wash over you.

Sadly, many of us lose our fundamentals. We get caught up in a specific problem or product and forget everything else that doesn't relate. It can be easy to have ten years of first-year experience, never tackling novel problems or challenging ourselves. Keep your fundamentals sharp by exposing yourself to new problems (just like we discussed earlier).

---

Don't let the internet tell you too much about what to do. Be thoughtful, engage with those around you, gain experience, and go back to fundamentals.

You'll be able to make decisions rather than decisions being made for you. And that is what leading is all about.

Happy coding!