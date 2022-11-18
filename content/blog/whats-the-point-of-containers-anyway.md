---
path: /whats-the-point-of-containers-anyway
date: 2021-11-07T05:00:00.000Z
title: What's the Point of Containers Anyway?
description: "Containers are becoming more and more popular. Here is my take on why and if your team should to jump on the bandwagon."
keywords:
tags:
  - software engineering
  - devops
  - continuous integration
  - what's the point
image: "../assets/paul-teysen-bukjsECgmeU-unsplash.jpeg"
---

<center>

![](../assets/paul-teysen-bukjsECgmeU-unsplash.jpeg)

<i>

Photo by <a href="https://unsplash.com/@hooverpaul55?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Paul Teysen</a> on <a href="https://unsplash.com/s/photos/shipping-container?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</i>
  

</center>

Have you heard of Docker? Or maybe containers? If you've been in software the past few years, you probably have.

There also might be a chance that you have _no idea_ what these technologies are. Or you might know what they are but have no clue why you would use them. Or worse - you might be at a company going through a "DevOps transformation" being forced to use these technologies, and no one can tell you _why_. 

The fact is that containers are an incredible technology that brings many exciting benefits to development. They introduce some new challenges too. Deciding to go all-in on containers isn't one to be made lightly. You need to understand what containers are, how they work, and if they are right for your team.

Let's dive into some of the details behind containers and what's the point in using them.

## What is a Container?

Containers in software are like a shipping container (hence the name Docker - which we will get to later). They are essentially a "mini-computer" encapsulated into a single file. These files are called images. These images get executed by running them on container engines - also called container runtime engines. A running image is called the container.

To go a bit deeper, a container allows a team to package software assets, dependencies, code runtimes, and other tools into the container image. The result is that instead of having to install those items onto servers individually or via a server management tool (think Ansible, Puppet, Vagrant), a single file controls all of the details about what your application needs to run. This ability to package everything into a single file makes the image _portable_ - one of the top benefits of containers. 

But you might be thinking - doesn't the software need an operating system? How does the application in the image know how to interact with the operating system? These are great questions!

For this article, the answer is that containers take advantage of operating system-level virtualization. The container engine abstracts the specific operations system away but allows system calls from the application to "pass-through" to the OS. While that is simple in theory, many interesting kernel abilities exist to provide proper isolation (keep containers separate from each other) and resource limits (keep containers from hogging all of the resources from themselves) to keep running containers from stomping on each other.

For more details on the internals of how a container works and how the OS works to support it, check out [this zine from Julie Evans](https://wizardzines.com/zines/containers/).

## What is Docker?

So we know what a container is, but we still need a container engine or runtime. Where do you find one of those? 

Enter Docker. Docker was one of the first container engines in the mid-2000s that made running containers simple and feasible. You can easily install it on most computers, and boom - you can start running containers. Many developers started using containers around this time to run things like databases or other software on their computers while developing applications.

If this is the case, why are containers and Docker separate? Well, this is because there are many more engines than Docker. Docker happens to be the most popular. Other companies are have created alternative engines that run within their own eco-systems to avoid paying additional costs to Docker to be the engine.

But this introduced a common issue that happens in software: formatting differences. Each engine had its own format for specifying the specifics about a container, which meant you had to build a container specifically for the engine you were using. Thankfully, companies have moved towards an approved and consistent format to make any container image run on any engine. Having this standard adds to the portability of images, which is a critical feature for containers.

The core takeaway is this: if you are building and running containers, you will likely be using Docker. Get familiar with it :)

## Why Are Containers Popular?

Ok, ok. We've talked about a few details of containers and container engines. But we still haven't answered this question: why are containers so popular? Why is everyone talking about them (and why is my manager telling me to use it even though they don't know why)?

In a nutshell, containers have become popular for three core reasons: 

* Portability
* Economic Scale
* Simplicity

### Portability

Because of the container engine abstraction, containers are highly portable. Instead of downloading an RPM or `.exe`, adding various configuration files, and installing the necessary system packages, you just download and run an image. Yes, you still need to download the container engine, but for the most part, everything is pretty easy after that. 

Even if your company manages its own servers, you can create reasonable contracts that a systems team is responsible for keeping the server up-to-date and with the right container engine. Application teams simply need to build the right type of container, and they can then run it anywhere on your infrastructure.

Additionally, containers have increased portability because many cloud providers offer some form of "containers as a service." Containers find themselves at the center of many parts of the [Cloud Native](https://www.cncf.io/) movement. The ability to tell a cloud provider "here is my container - run it" without worrying about servers is a massive benefit for application developers. 

This serverless mentality, coupled with standardized container image formats, allows application teams to get closer and closer to a true "build it once; run everywhere" paradigm. Focusing on building container images as an application team can be a hedge against vendor lock-in. While migrating between clouds is never easy, it might be easier if you had containers vs. EC2 instances and huge Ansible playbooks.

### Economic Scale

The other reason for the popularization of containers - especially for managers and leadership - is that containers can provide better scale economics. Running containers can allow companies to create a platform that runs containers vs. a fleet of team-specific virtual machines all with different configurations. This platform mentality can actually save money over the long term.

Let's take the example of a company that currently runs its own infrastructure. There is a large probability that application A and application B have different (and even conflicting!) system requirements. This difference in system requirements will likely lead to giving each application separate virtual machines. While that isn't a huge issue for two applications, this can become hard to manage as the organization scales.

But what if application B is small and lightweight? It doesn't need a _whole_ virtual machine to run. It could do with just a few CPU cycles and a little bit of RAM. Containers make this easy. Because the containers have proper isolation from each other, a single container engine could be running a Java EE server and a Node JS server side by side. This could get complicated in a virtual machine world since the system requirements across applications can vary greatly.

### Simplicity

Pigg-backing off of the Portability aspect, running a container is much easier than setting up a virtual machine or installing a service on a computer. This is especially true for local development. Instead of installing `mysql`, `kafka`, or something else, you can just install a container with all of the configuration, dependencies, etc., available. While it wouldn't be appropriate for a production environment, it is quick and easy for a local developer to type `docker run the-app` and have something running.

Additionally, because of the "just run it" mentality of containers, the configuration of most images is also simple. Many images come with pre-baked configuration, with the ability to set additional or necessary environment-specific values via environment variables. 

While this sounds like a no-brainer, many applications before containers would be a slew of nested configuration files in different formats. Containers make this type of configuration simple and it promotes [convention > configuration](https://en.wikipedia.org/wiki/Convention_over_configuration).

## What's the Point?

The point of containers is simple: containers help development teams ship code in a more portable, reproducible, and cost-effective way. That might not sound powerful, but once you work on a team that users containers effectively, you will see that they can indeed be effective tools.  

However, tread carefully. Containers are not a walk in the park. For one thing, where do you put them? How do you version them? How do you debug a running container in production? 

Think critically about why containers would work for you. A starting point might be encouraging your team to use containers for local development tools such as a database, server, or even just an OpenAPI editor. Start trying to use tools like Docker or Podman to run containers locally and get comfortable using them. Nothing would be worse than trying to containerize your whole application if you aren't comfortable running and debugging containers in general.

Also, think in a step-wise fashion. Before throwing out your infrastructure and installing Kubernetes - start with just building an image for your application. Start pushing it up to an internal repository and asking teams that use your application to try running it on their local machines. Get the hang of what it means to build and version your images in lock-step with your existing release strategy. 

If you can do all of that before attempting to run your application in the cloud, you will be in great shape.

Happy coding!

