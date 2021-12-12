---
path: /my-top-takeaways-from-team-topologies
date: 2021-12-07T00:00:00.000Z
title: My Top Takeaways from Team Topologies
description: The most important things I learned from the popular book and how I'm trying to apply them.
tags:
  - teamworks
  - software engineering
  - collaboration
image: /assets/cas-holmes-PwyApMZFyx4-unsplash.jpeg

---

<center>

!["growing sapling"](../assets/cas-holmes-PwyApMZFyx4-unsplash.jpeg)

<i> 

Photo by <a href="https://unsplash.com/@cas1111?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cas Holmes</a> on <a href="https://unsplash.com/s/photos/formation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    
</i>

</center>

I've played team sports my whole life, and I learned the unique power and ability a team can take on early on. I've seen how a great team can elevate each team member to achieve better results than if alone. Being a part of a team is something everyone should be a part of.

In many contexts, the structure and identity of a team are relatively easy to understand. In sports, a team has a clear mission - win games. A band has a clear mission of creating incredible music. The structure of such teams is also usually pretty simple - a captain or band-leader is primarily held responsible for setting the team's tone, vision, and direction. Other team members still work together around a common goal with well-defined roles within the team. Forming a team is easier when you know the roles.

In software and other business contexts, though, things can get murky. We know teams are good, but we don't know what a great team should look like. The mission and structure can get complicated - should this team be building that? Do we need to hire a database administrator for a team or hire one to support multiple teams? Is a manager a tech lead? And when mission and structure are lacking, the team itself can begin to suffer.

[Team Topologies](https://www.amazon.com/dp/1942788819/ref=cm_sw_r_tw_dp_HNAAY7T48G4ZAHAQ1644) is a book targeted to help fix this problem. Written by Manuel Pais and Matthew Skelton, the book captures their insight into the world's top software organizations. Focusing on teams that have undergone various DevOps and Agile transformations, the authors provide an inside scoop onto the secret sauce for these companies. While being a little dense and academic, the book still provides direct actions for organizations trying to make changes to increase their productivity.

Let's dig into their findings.

## The Big Idea

The core driving idea of Team Topologies is (unsurprisingly) that software organizations need to focus on how their teams interact with each other to improve.

Sounds underwhelming, right?

That was my initial reaction as well. However, the book does a great job of identifying why this component can be so critical. It helps identify that no two teams are created equal and that they, therefore, have different goals. The book suggests [four core team types](https://teamtopologies.com/key-concepts) that an organization should consider and how each of those teams should interact with each.

I won't get into each in this article as you can [see them summarized easily](https://danlebrero.com/2021/01/20/team-topologies-summary/). Instead, I want to focus on the underpinning concepts that can help your team(s) start to discover what type they are and how they should begin interacting with other teams.

### Create a Team API

Software engineers know all about APIs. An API defines a responsibility boundary between different systems and a contract used to enforce those responsibilities. This is similar to how a legal contract is written between two parties. The contract defines the responsibilities of each party and consequences of breaking those responsibilities.

Teams also should have such an API. Teams should have defined boundaries (often referred to as domains) that they own. As such, teams need to know how to interact when a system or a design requires collaboration across domains. Hence, an API should be defined to help establish the "what is yours" and "what is ours."

A team API should likely include
* the team's mission
* how to contact them
* a definition of the domain they own
* the preferred way to collaborate with that team

Don't pretend this will be easy. In many organizations, lines have become blurry over years and years of shared code (we'll address this next), constant collaboration, and even bad software design. Teams might even have to collaborate with one another to agree on domains ("you own that - not us"). Many teams might have never even thought about their core mission - they've just been writing code according to the product specs from their product owner without giving a second thought. All this to say, creating a team API will take a good amount of effort.

### Define Code Ownership

Along with domain ownership and boundaries, the code within an organization needs the same rigor. Every repository or module needs clear and explicit owners. Without such ownership, code can be neglected and left to rot. Or, when a bug is discovered in a system, no one can agree on who should fix it, which does nothing more than waste precious time to fix an issue.

Ownership doesn't mean that only one team can contribute to a codebase. Hardly. A good software organization should allow any software engineer to contribute to any project as long as it has the approval of the owners of that code, which can help alleviate bottlenecks. An engineer who uses a module or service provided by a different team can make the necessary changes to finish their work instead of waiting for another team's availability. The owning team, of course, needs to participate in code reviews or other approval processes required, but this is often much less time than writing the code itself.

However, without oversight from a clear team of owners, such changes would likely lead to confusing and fractured codebases that are hard to maintain over time. Such "shared-source" models sound great at first but can slow any high-performing team down to halt even if the initial first few interactions seem to show a decreased cycle time for some product initiatives. Be really careful about this model.
In short, just like domain boundaries and ownership, code needs the exact same treatment. Take an inventory of codebases that teams' interact with identify the owners. If there is a disagreement, work together and appoint an owner as clearly as possible. Keep revisiting the codebase based on who makes the most contributions or has a clear vision for the code. And remember: you can change the owner in the future if needed.


### All Teams are Aligned

Lastly, each team within the organization needs to align their priorities to a workstream. No matter the concrete team type, they all need to be aligned to a specific workstream within the organization. This priority enables all teams to work with the flow of change within the organization rather than against it.

Finding this alignment is, unfortunately, simple but not easy. The book recommends a few ways to gain this alignment, all based on the teams operating within the organization.

First, and simplest, is that a work steams need to be defined. What are we building here? Why? How many products should we have, and how will we organize them? Compare the current product offerings and make some critical decisions about how work should flow within your organization.

Second, platform, subsystem, and enabling teams (aka supporting teams) should gather their requirements from the stream-aligned teams. This allows the work to flow from the root source of customer needs properly. i.e., if a stream-aligned team says, "we need a better and simpler way to monitor our applications," the proper supporting teams can then take that requirement, perform additional discovery, and help those teams find the right solution. Otherwise, they might be working on the wrong thing.

## Wrapping Up

There you have it—my top takeaways from Team Topologies. There is much more to cover from the book, but these key things to me are the core things you can start thinking about with your team to level up tomorrow. Even if the rest of the organization isn't on board, if your team can define their API, identify domain boundaries, and gather their work according to a workstream, many other conversations can occur.
Happy coding!

_p.s. I know a big part of Team Topologies is all about [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law). And it is indeed. However, focusing on Conway's law might be premature. The reason is that leaders might see a poor architecture and decide to change it via the inverse Conway maneuver (using Conway's law to design your system). The problem is that there is often a large disconnect between a leader's perception of what is happening in the organization vs. the team's perception. Therefore, before an organization can start talking about how to re-design their architecture with Conway's law, I believe they first need to understand how their teams are currently operating. And no one else except the team is prepared to speak about how they operate._