---
path: relearning-ansible-from-scrath
date: 2021-03-25T21:23:45.226Z
title: Re-learning Ansible From Scratch
description: Why I stopped, why I'm starting again, and what I'm learning.
---
For several years, all I heard about was [Ansible](ansible.com). It was going to solve every one of your deployment problems. It was going to make life easier. It was going to take us to Mars.

But after a short while, Ansible seemed to fall flat. As the [infrastructure-as-code](https://en.wikipedia.org/wiki/Infrastructure_as_code) movement grew and the immutable infrastructure alongside it, other tools seemed to overtake Ansible. I stopped learning it at this point since I started work on Kubernetes-based applications, which fully embraced immutable infrastructure.

Recently, however, I've been doing some work on more traditional virtual machines that we need to maintain rather than a cloud-native approach. To manage our fleet of 20+ VMs (in one environment!), we turned to Ansible. We use Ansible to perform configuration management of all of our VMs and run ad-hoc commands for debugging our system or recovering from a failure.

Since I've been re-learning Ansible, I thought it would be helpful to give some insights into what it is, what its components are, and a few gotchas I've encountered. I won't get into all the nitty-gritty since Ansible gets complicated FAST. However, since Ansible does get so complicated so fast, it can be tricky to review. I'll leave you with some tips on how to code review your Ansible for success and maintainability in the long term.

## What is Ansible?

Ansible is essentially a provisioning and configuration management tool. You write *mostly* declarative .yml files to specify the desired state of a machine. The idea is that instead of having to write code to handle various pre-existing states of the machine ("Does this file exist?"), you simply say (aka *declare*) the desired state you want the machine to be in. This idea is usually referred to as a \[desired state model].

Ansible is *mostly* declarative. What I mean is that Ansible strives to be as declarative as possible and hide the specific commands performed by the user, but it violates that principle sometimes. For instance, Ansible also has the ability to perform loops, concatenate lists, and do mappings between various data-structures. You can even run snippets of python code as [filters](https://docs.ansible.com/ansible/2.3/playbooks_filters.html) to do more complex commands/transformations.

## How Does it Work?

I'll keep this brief since a full explanation could get very long and very complicated.

Ansible works by essentially creating ssh connections to a set of target hosts, copying python code to those machines, and executing that python on those machines to make changes to the system. [Micheal DeHaan](https://twitter.com/laserllama) (the creator) called it "ssh in a loop."

Ansible is also **stateless**. What that means is that Ansible reads the current state of a machine while it is being run and makes the changes required to move it into the desired state. While this is great in many ways and allows you to start controlling a target machine almost instantly, it also leads to odd problems. For example, if at one point you needed a file to be created on the machine, but you don't need it anymore, Ansible won't auto-cleanup that file for you - you would need to write a specific Ansible configuration to remove it.

## How Do You Use It?

With Ansible, you typically have the following components:

* **Inventory** - a collection of machines/hosts you want to control/configure. You can group them into hierarchies with children, etc. You can also target multiple groups using various patterns and limit commands.
* **Modules** - modules are essentially abstractions to controlling a target host. Think of them as an API layer provided by Ansible for all the things you would want to do on a host. You use various modules to interact with different parts of the hosts you are changing. Modules tend to be aligned with either a specific machine sub-system (files, packages, networking), commonly used packages (systemctl), but also exist for cloud providers or specific vendor-related needs.
* **Tasks** - tasks are single invocations of a module. They tend to be extremely small and make incremental changes. Think of a task as interacting with a specific API for the host you are targeting. Tasks utilize modules to accomplish this interaction
* **Roles** - roles are effectively a grouping of tasks. In many Ansible projects, you will have playbooks that invoke a series of plays as roles with specific vars (see vars below). Roles tend to be thought of as the core building block for Ansible as they can allow someone to group all the tasks needed for a specific desired state. For example, installing and starting a database onto a host.
* **Playbooks** - a collection of "plays" that you run against a set of hosts. Plays tend to be specific groups of roles or tasks that wholistically apply one logical change.
* **Vars** - variables that are used dynamically in plays at runtime to configure the machines in your inventory. Vars get complicated fast, so knowing variable precedence is important.

## What is Ansible Good At? Where Does it Fall Short?

Ansible is extremely good at the desired state model described above: make this machine have this state. This can be a great use case for creating or provisioning new machines or managing existing machines.

Ansible is also very good at making common commands you might need for debugging accessible and re-usable. Instead of logging into 20+ machines to search for a log entry or see if a service is up, you can target all the hosts using a playbook or ad-hoc command to look on all machines and report back.

The place Ansible falls short is really *orchestration*. Orchestration is the process of controlling how a fleet of machines is all updated to accomplish a larger goal. This is in contrast to controlling a single machine. A trivial but common example of orchestration is updating each machine in a specific order. This can be done in Ansible, but it usually requires running playbooks limited to specific hosts.

The other large issue with Ansible that I have found is it can easily feel like "cobwebs" or "spaghetti." Vars can come from seemingly anywhere and be overridden at every level according to Ansible's [var precedence rules](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#variable-precedence-where-should-i-put-a-variable). As the complexity of an environment grows, the complexity of the vars needed also grows. While powerful and flexible, I have spent hours frustrated with Ansible when a var I thought had a specific value got overridden in a place I didn't think would apply.

## What To Pay Attention To When Reviewing Ansible

With all of these pitfalls, it can be difficult to review Ansible code changes effectively. I've found that a few things can help.

* **Var Precedence** - I've mentioned this several times already, but [variable precedence](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#variable-precedence-where-should-i-put-a-variable) is such a crucial thing to understand in Ansible. If you understand this poorly, you will spend hours at the keyboard not understanding why that value keeps changing on you.
* **Host Group Organization** - you use host groups to target the hosts you want specific plays and tasks to run on. You should know how they are organized! If you see changes that make it confusing to identify which host(s) a play will run on, speak up! When you can't understand how your host groups are organized, all the rest of your Ansible setup is useless.
* **Var Names** - variable names come up in almost all forms of code reviews, but in Ansible, this is especially true. Vars in Ansible are set to either global scope, play scope, or host scope, but you will quickly discover that variables get referenced all over the play, and it can be hard to keep track. My recommendation is to name vars with specific intention and keep them as close to a host or play context as possible. Prefixing vars from your vault with \`vault_\` is also a pattern I have used with a lot of success.

This is just a short glimpse into the world of Ansible. I know it wasn't an in-depth tutorial on how to use Ansible, but I hope some general guidelines and principles help you as you start to use it!

Happy coding (yaml-writing?)!