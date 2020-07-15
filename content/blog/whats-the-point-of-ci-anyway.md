---
path: /whats-the-point-of-ci-anyway
date: 2020-07-15T23:10:42.894Z
title: What's the Point of CI Anyway?
description: The reasons why your team should be leveraging continuous integration.
---
![](https://miro.medium.com/max/1000/1*w_LF-WitILhyNNCkVCm99Q.jpeg) *Image by Ken Suarez on Unsplash*

“Tell me about your team’s CI/CD journey!” — some message from a guy on LinkedIn.

“Are you guys leveraging automation via your CI workflows to increase efficiency?” — a fellow engineer at a different company over coffee.

I’m sure you have heard many similar statements over the past few years.  I’ve been overwhelmed at the number of companies and technologies aimed at this “automation” thing. It seems like everyone is just expected to have it figured out. If you don’t, you are doing it wrong.
But maybe you are like me a few years ago and kept wondering: what actually is CI? What are the benefits of it? How do I get started?
My hope for this article is to help explain what CI is, how it helps your team, and why the actual definition is so elusive.

## CI = Continuous Integration (Whatever That Means…)

You probably already knew that CI is just an acronym for continuous integration. Unfortunately, knowing just what the acronym stands for doesn’t likely help you much. Here is the skinny on what continuous integration is:

At its basic level, CI is just a **pattern of development**. In a CI workflow, developers are encouraged to be making frequent commits to a software project. Usually, these frequent commits are smaller changes meant to enable a single feature or fix a single bug. They are also often made against the master or development branch that is used specifically for building the next release. This approach is in contrast to having a developer working for many, many weeks on code before every validating it works with other changes in the project.

What you need to take away is that at its core CI is **not** a tool. It isn’t “automation” or a Jenkins server. It isn’t even automated tests. It is simply the practice of developers making frequent (**continuous**) commits to see how their new changes affect the project once committed (**integrated**) into the project as a whole.

## Preventing Chaos!

As you might imagine, a CI workflow also doesn’t mean accepting more developer changes and hoping for the best. That would lead to chaos! Sure your developers are making changes to the project faster, but the project as a whole would likely fall apart due to poor code, failing tests, etc. This need for quality control isn’t new. Even before CI, software teams still had quality control checklists and tools. These usually were in the form of code reviews, automated test suites, and maybe even static analysis.

However, these tools still required a developer to run them. Some tests might be short, but some might be long and hold a developer’s computer hostage for the night. A developer might be responsible for generating a static analysis report themselves to help them improve their code and hope they remember the secret code word to get the reporting server to work. The best teams might even take things even a bit further, having playbooks or scripts for testing deployments to a staging environment too and just had to hope they didn’t accidentally deploy to production instead… As you can see, the bottleneck isn’t the developer writing code or the quality controls, but the process of executing and enforcing those controls. For a team to adopt an effective CI workflow, they must figure out how to automate all of those controls.

This is why when many people think of CI, they immediately go to automation. Though automation is not CI, automation is what enables a CI workflow. It’s the nuts and bolts of how you enforce the controls and checks discussed above.

So how does a team do all of that?

## Enter Tooling

On their own, most teams can’t effectively worry about all of the concerns and write code for their project domain; it’s simply too much to code and keep track of. Its this problem that leads teams to turn to specialized tools to enable them to address the concerns above and create a CI workflow.

Many people refer to this tooling as “CI servers” or “build servers.” At their core, these tools are simply specialized software tools that enable teams to adopt a CI development workflow. This is likely what many people think of when they first hear CI. Jenkins, CircleCI, Travis, etc. are all great examples of these tools.

## What Do CI Tools Do?

In short, CI tools like the ones listed above take the burden of automating and managing the necessary controls you need for your project. The building, testing, deploying, etc. of your software can all usually be achieved by picking one to two tools if chosen wisely. Here are the top three things of using one of these tools

### 1. Source-Control Integration or “Automation”

The biggest benefit of CI tools is that they often “hook” into your development lifecycle to execute the controls you’ve defined. This ability is the automation discussed above and is what most people think of when they think about CI.

Almost every modern git-hosting platform provides an easy way to send or publish events to CI tools so that your team isn’t sitting there typing a build command every time. A developer just opens a pull request, and a few minutes later, a status check says pass or fails from a build executed on the CI server.

This ability to effectively integrate automation into common developer behaviors is what enables the continuous aspect of a CI workflow. The CI server is responsible for checking out the entire repository, executing a build, running tests, etc. and a developer just waits for the status. If this happens on every pull request, merge to the mainline, etc. developers can spend their time coding rather than running tests that could potentially take 15–20 minutes.

### 2. A Defined and Consistent Environment

The most important benefit to me is that CI tools will run all of your processes in a defined and consistent environment. This might sound small, but it’s HUGE in reality. For example, have you ever realize just how many “magic” properties need to be set up on a developer’s computer so they can run end-to-end tests? It can be a long, tedious, and frustrating process to get it just right. To make it even worse, when a single developer on a team gets their environment wrong, you don’t know which environments to trust! Is it a broken code or a broken environment that is causing your automated test suite to fail?
Investing time to define and build a consistent environment allows you to have confidence that your software works or that it doesn’t. It also helps you learn quickly if a new property or variable has been defined that hasn’t been set up correctly instead of waiting for it to blow up on another developer’s machine.

### 3. Parallelization

If the goal of a CI workflow should allow developers to be integrating their changes as quickly as possible, we need the ability for developers to be testing their changes at the same time. We need the ability for parallel builds to be happening. This is where the difference between a home-grown tool and a real enterprise tool really starts to show. Most decent developers could figure out how to grab a githook or webhook, run a script on a server that builds and tests the software and be done. But it would likely be limited to a single build at a time.

Enterprise tools have the ability to easily scale as a project scales by configuring additional “replicas” that are the actual build machines with a “master” master that coordinates which build is happening on different build machines. This looks different, of course, from tool to tool. In fact, many new tools obfuscate this from the user completely — build machines are just docker containers or VMs in the cloud waiting for a build to be run on them.

You might be reading and thinking, “Sounds great, but you still haven’t told me what the point of CI is.” Well, here you go:

The whole point of a proper CI workflow is that **it enables faster development by creating confidence that changes made by individual developers are sound**. By creating the necessary processes to automatically test, inspect and give the proverbial “green light” to a set of changes, developers can go back to concerning themselves with what they care most about, which is writing excellent code.

Yes, it will take some thought and time to set it up correctly. You might need to evaluate multiple tools, and you might need to do some experimenting to get it right. There is no “one-size fits all” CI process either — so don’t feel like you must conform to someone else’s just “because.” Just start with identifying the first barrier your team has with integrating changes and pick the best tool to solve that. *Hint: this barrier likely doesn’t need a tool — it’s most likely that you need to start writing automated tests.*

Happy coding!