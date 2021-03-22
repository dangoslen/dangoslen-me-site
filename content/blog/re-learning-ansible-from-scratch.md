---
path: relearning-ansible-from-scrath
date: 2021-03-25T21:23:45.226Z
title: Re-learning Ansible From Scratch
description: Why I stopped, why I'm starting again, and what I'm learning.
---
For several years, all I heard about was Ansible. It was going to solve every one of your deployment problems. It was going to make life easier. It was going to take us to Mars.

But after a short while, Ansible seemed to fall flat. As the [infastructure 
as code] movement grew and the immutable infrastructure alongside of it, other tools seemed to overtake Ansible. I stopped learning it at this point as since I the systems I was working on were running on kubernetes and embraced the immutable infrastructure movement.

Recently, however, I've been doing some work on more traditional virtual machines that we need to maintain rather than a cloud-native approach. In order to manage our fleet of 20+ VMs (in one environment!), we turned to Ansible. We use Ansible to perform configuration management of all of our VMs, as well as running ad-hoc commands for debugging our system or recovering from a failure.

Since I've been re-learning Ansible, I thought it would be helpful to give some insights into what it is, what its components are, and how to use it effectively. I won't get into all the nitty-gritty since Ansible gets complicated FAST. However, since Ansible does get so complicated so fast, it can be tricky to review. I'll leave you with some tips on how to code review your Ansible for success in the long term. 

## What is Ansible?
Ansible is essentially a provisioning and configuration management tool. You write _mostly_ declarative `.yml` files to specify the desired state of a machine. The idea is that instead of having to write code to handle various pre-existing states of the machine ("Does this file exist?"), you simply say (aka *declare*) the desired state you want the machine to be in. This idea is usually referred to as a [desired state model].

Ansible is _mostly_ declarative. What I mean is that Ansible strives to be as declarative as possible and hide the specific commands performed from the user, but it violates that principle sometimes. For instance, Ansible also has the ability to do loops, concatenate lists, and do mappings between various data-structures. You can even run snippets of python code as [filters]() to do more complex commands/transformations. 

## How Does it Work?
I'll keep this brief since a full explanation could get very long and very complicated. 

Ansible works by essentially creating ssh connections to a set of target hosts, copying python code to those machines, and executing that python on those machines to make changes to the system. Micheal DeHaan (the creator) called it "ssh in a loop". 

Ansible is also stateless. What that means is that Ansible reads the current state of a machine while it is being run and makes the changes required to move it into the desired state. While this is great in many ways and allows you to start controlling a target machine almost instantly, it also leads to odd problems. For example, if at one point you needed a file to be created on the machine, but you don't need it anymore, Ansible won't auto-cleanup that file for you - you would need to write a specific Ansible configuration to remove it.

## How Do You Use It?
With Ansible, you typically have the following components:
* **Inventory** - a collection of machines/hosts you want to control/configure. You can group them into hierarchies with children, etc. You can also target multiple groups using various patterns and limit commands. 

* **Modules** - modules are essentially abstractions to controlling a target host. Think of them as a API layer provided by Ansible for all the things you would want to do on a host. You use various modules to interact with different parts of the hosts you are changing. Modules tend to be aligned with either a specific machine sub-system (files, packages, networking), commonly used packages (systemctl), but also exist for cloud providers or specific vendor-related needs. 

* **Tasks** - tasks are single invocations of a module. They tend to be extremely small and make incremental changes. Think of a task as interacting with a specific API for the host you are targeting. Tasks utilize modules to accomplish this interaction 

* **Roles** - roles are effectively a grouping of tasks. In many Ansible projects, you will have playbooks that invoke a series of plays as roles with specific vars (see [vars]() below). Roles tend to be thought of as the core building block for  Ansible as they can allow someone to group all the tasks needed for a specific desired state. For example, installing and starting a database onto a host.

* **Playbooks** - a collection of "plays" that you run against a set of hosts. Plays tend to be specific groups of roles or tasks that wholistically apply one logical change.

* **Vars** - variables that are used dynamically in plays at runtime to configure the machines in your inventory. Vars get complicated fast, so knowing variable precedence is important.
 
## What is Ansible Good At? Where Does it Fall Short?
Ansible is extremely good at the desired state model described above: make this machine have this state. For creating or provisioning new machines, or managing existing machines, this can be a great use case.

Ansible is also very good at making common commands you might need for debugging accessible and re-usable. Instead of logging into 20+ machines to search for a log entry or to see if a service is up, you can target all the hosts using a playbook or ad-hoc command to look on all machines and report back.

The place Ansible falls short is really _orchestration_. Orchestration is used to describe not just the state of a single machine, but how a fleet of machines are all updated to accomplish a larger goal. An example of orchestration is updating each machine in a specific order. This can be done in Ansible, but it usually requires running playbooks limited to specific hosts. 

The other large issue with Ansible that I have found is it can easily feel like "cobwebs" or "spagetti". Vars can come from seemingly anywhere and be overridden at every level according to Ansible's [var precendence rules](). As the complexity of an environment grows, the complexity of the vars needed also grows. While powerful and flexible, most times that I have bashed my head with Ansible is when a var I thought had a specific value gets overridden in a place I didn't think would apply.

## What To Pay Attention To When Reviewing Ansible
With all of these pitfalls, it can be difficult to effectively review Ansible code changes. I've found that a few things can help.

* **Var Precedence** - I've mentioned this several times already, but it is the most crucial thing to understand in Ansible. If you understand this poorly, you will spend hours at the keyboard not understanding why that value keeps chaging on you.

* **Understand Which Host is Running a Task** - a playbook can target several different host groups for different roles or tasks. Always pay close attention to how these

* **Know Thy Host Groups** - 

* **Be Pedantic About Var Names** - 