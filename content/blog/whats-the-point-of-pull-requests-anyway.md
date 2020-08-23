---
path: /whats-the-point-of-pull-requests-anyway
date: 2020-08-19T20:07:13.491Z
title: What's the Point of Pull Requests Anyway?
description: Why you should use pull requests to merge changes in your
  repository. Even for personal ones.
---
If you are a beginner in the world of `git` and hosted `git` platforms like GitHub or GitLab, you have probably heard the term "pull request" or "merge request" before. You also probably don't fully understand what value they bring to your team and why they are used so often in teams.

*Sidenote: I'll be using the term "pull request
 in this article, but its effectively the same as a "merge request" in GitLab*

Pull requests are actually an extremely useful tool that helps teams build and share software. They do have a bit of a learning curve though, but I believe its worth it. My goal is this article is to help you get familiar with pull requests and how they fit into the flow of building software.

What is a Pull Request?
A pull request is really just a request to pull/integrate changes from one branch to another. It might be from a branch with a single commit from just one developer, or a branch with multiple authors and multiple commits. In most cases, a pull request is used to integrate a new feature or bug fix into the main branch of the project.

A pull request also includes a short description of the changes and why they are being made. There is usually a discussion amongst the author of the pull request and a set of reviewers. Reviewers are just other developers that have worked on the project and can provide feedback on the changes. In open-source projects, these reviewers will typically be core contributors or maintainers. In other cases, like your team at work, the reviewers will typically be senior engineers or teammates. 

Here is an image of a very simple pull request in GitHub with a simple description referencing an issue.

![GitHub pull request example](../assets/screen-shot-2020-08-23-at-6.48.54-pm.png "GitHub pull request example")

How do They Help?
Now that we hav
https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project

Pull requests are the epicenter of modern development.

This is where most continuous integration happens. Where code reviews happen. Where static analysis, performance testing, and other forms of metrics about your code are reported.

This is also where most learning happens! This is where collaboration amongst developers, product owners, and designers can take place.