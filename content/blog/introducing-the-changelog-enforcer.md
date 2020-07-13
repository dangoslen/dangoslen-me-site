---
path: /introducing-the-changelog-enforcer
date: 2020-07-13T00:25:19.894Z
title: Introducing the Changelog Enforcer
description: Introducing a simple GitHub Action I made to help enforce the
  presence and modification of a changelog for a repo.
---
When I first learned about GitHub Actions, I wasn't all that impressed. "Isn't this all stuff I can do in Jenkins already?" I doubted I would have a good use for them.
I totally got it wrong.
GitHub Actions have become one of my favorite things as of late. I love that most of them are built by individuals or small teams to accomplish one very specific goal and that teams leverage multiple actions to build simple CI/CD pipelines. Developers simply need to coordinate these actions according to a published contract of the action and keep it all in their repository. 
Of course, not all teams want to turn to actions immeditely. Jenkins is still a thing, teams want to run their builds in a private environment, etc.
One use case I found quickly for GitHub action is what I call "meta-checks" about a proposed change to the repository. I don't like adding checks for things like property names, specific files, or that a PR is labeled correctly to my general build pipeline. I want my build pipeline to say "the **software** is good and that's it.
In particular, a problem my team at Bandwidth was having was keeping a proper changelog. 