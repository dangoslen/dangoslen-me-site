---
path: /how-to-get-software-documentation-right
date: 2022-01-17T01:02:27.200Z
title: How to Get Software Documentation Right
description: What to write down, what to generate, and coming to terms that
  documentation is always out of date.
tags:
  - documentation
  - teams
  - software engineering
image: ../assets/papers-g21f5bc9e0_1920.jpeg
---
<center>

![stack of papers](../assets/papers-g21f5bc9e0_1920.jpeg)
*[https://pixabay.com/photos/papers-projects-documents-3819540](https://pixabay.com/photos/papers-projects-documents-3819540/)*

</center>

I recently joined a new team. An entirely new company actually. I'm now an engineer working for [PolicyGenius](https://grnh.se/0ebea2c41us) - the leading online insurance marketplace (in the US at least). I've enjoyed the change so far; it was well needed.

When joining a new team - and a new company - there are a *lot* of things to learn. Most of that learning starts with loads of things to read, including process documentation, system diagrams, API specifications, and data models for software teams. Then there are even more docs on culture, how to respond to incidents, and decision logs. 

It can be a lot.

As I've been going through the docs of our engineering team, I had a few takeaways about how to do documentation right - and why it is so hard to do so. Today, I want to share my perspectives while still fresh as a recently onboarded engineer.

*And to be clear, I've been blown away by how **good** the documentation at PG (PolicyGenius) has been. I don't think there hasn't been a question I've asked that didn't have an answer with a document, Wiki, or slide presentation to help me understand the answer in more depth.*

## Understand There are Different Kinds of Documentation

And that each needs a different medium or format to be effective. For instance, system diagrams and data models should be captured in a visual format - i.e., boxes and arrows to show relationships and data flow rather than text descriptions. On the other hand, describing expectations for how a team operates and the responsibilities of individual engineers is best done with articulate prose. 

One of the best things I've seen to help with this is a flowchart to help the whole organization agree on what kinds of documentation should live in what kinds of formats. While these decisions are pretty intuitive, they can help remove as many deviations as possible. Better yet, add *where* documents should be and *what tools* to use for each type. Should text-based documents be stored in a Google Doc or a Wiki? Should project folders be under team-specific directories or the root directory? Should we be using diagram tool A or B? In the world of documentation, the more consistent you can be with these sorts of decisions, the easier it will be to discover and subsequently add to your docs. 

## Code is Truth

When describing software systems, we *must* trust the code over the docs. Why? Because the code *is* what your software is doing. There is no way to avoid that. 

This is why engineers can be [pedantic about comments](https://stackoverflow.blog/2021/12/23/best-practices-for-writing-code-comments/). Comments explaining what code is doing can easily get out of date and confuse the next engineer trying to change it (or even understand it). I won't open up the comment wars here, but it is good to be aware that your code serves as a form of documentation for your software - because it *is* your software.

Therefore, part of maintainers' responsibilities is to look at the code when a question is raised about system behavior. When a difference arises between what the documentation says vs. what the code is doing, the team must decide which is incorrect and correct it. Keeping a tight loop here is especially important for public APIs and API specifications (which we will discuss further in a moment). In either case, when a gap is identified, don't be silent. Raise the issue and work to understand what the code is doing and decide which thing - the code or docs  - needs to change.

## Generating Docs is Usually a Good Idea

Given that code is truth, anything we can do to keep our documentation in line with our code is usually a good idea. If you can generate docs *from* your code, you minimize documentation drift as much as possible. Tools like JavaDoc or godoc make it easy to turn comments in code to HTML, text, or even `man` pages for the software. Standards like [yuml](https://yuml.me/) allow teams to store easy-to-change and understand text documents into UML diagrams. 

These tools, coupled with continuous integration and the API-driven web, can allow you to generate documentation from your source with every commit to your code mainline. Just think how great that is! Every time you change a data model, a new ER diagram is generated and stored in your team's Wiki! Such low-friction tools can be a game-changer to how your team operates.

One caveat here is that you also need to consider the difference between a contract/specification and other documentation. You want to drive requirements for your software from specifications and contract definitions, but you also want to have documentation about your software. 

This topic is especially pertinent to the API lifecycle - do you build your documentation from source code since that *is* what your API is doing? Or do you drive documentation from your specification because that is what your API *should* be doing? Opinions vary on this topic, but the one thing to take away here is that specification documents for your software need to be treated differently than documentation about your software.

## Documentation Drift is Unavoidable

The sad truth is that even if we create great processes and automation to keep our documentation up-to-date, the reality is that at some point, something will need to be updated. Some links will be broken. A section will be old and incorrect. Out-of-date documentation might not be true for more static systems, but for the ever-changing world of modern web applications, it will be.

Instead of avoiding this, opt to minimize it and be quick to make changes when you notice something is wrong. Everyone in your organization should have some ability to suggest changes quickly and effectively or have the ability to make changes themselves. Treat your documentation like an Agile product: make it easy to get feedback and make adjustments so that you can respond quickly to changing needs of your growing team. 

- - -

## Documentation is a Tool

After all of this, remember:

* Documentation is a tool for helping your team succeed.
* Effective documentation will tell your team members what you do, how you do it, and - most importantly - why.
* Go to the code when you can - generating anything possible to minimize drift.
* Make the docs easy to change - just like code.

Happy coding!