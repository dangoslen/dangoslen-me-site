---
path: relearning-ansible-from-scrath
date: 2020-09-21T21:23:45.226Z
title: (Re)Learning Ansible From Scratch
description: Why I stopped, why I'm starting again, and what I'm learning.
---
For several years, all I heard about was Ansible. It was going to solve every one of your [infasctructure as code] problems so that you could embrace DevOps.

But after several years, Ansible fell flat to an extent. Team's I worked on weren't using it as much in favor for Kubernetes resources, Cloud Formation, and other tools. Terraform especially has been on the up-and-up recently.

However, I've started needing to re-learn Ansible from the ground up. I switched teams and we have a mini-fleet of VMs to manage and care for (yes-the [cattle model] for infastructure). I want to share with you some Ansible basics that have helped me get re-acounted with Ansible that can hopefully help you.

## What is Ansible?
Ansible is essentially a provisioning and management tool. You write _mostly_ declarative `.yml` files to specify the desired state of a machine. The idea is that instead of having to write code to handle various pre-existing states of the machine ("Does this file exist?"), you simply say (aka declare) the desired state you want the machine to be in. This idea can be summed as a desired state model.

With Ansible, you typically have the following components:
* **Inventory** - a collection of machines/hosts you want to configure. You can use things like tags to group them how you need.
* **Playbooks** - a collection of configuration "plays" or commands to configure the machines in your inventory. A playbook usually has a specific desired state in mind.
* **Vars** - variables that are used dynamically in plays at runtime to configure the machines in your inventory. Vars get complicated fast, so knowing variable precedence is important.

## What is Ansible Good and Bad At?
Ansible is extremely good at the desired state model described above: make this machine have this state. For creating or provisioning new machines, or managing existing machines, this can be a great use case.

The place Ansible falls short is really orchestration. Orchestration is used to describe not just the provisioning of a single machine, but how a fleet of machines are all updated to accomplish a larger goal. An example of orchestration is updating each machine in a specific order. This can be done in Ansible, but it usually requires running playbooks limited to specific hosts. 

The other large issue with Ansible that I have found is it can easily feel like "cobwebs" or "spagethhi". Vars can come from seemingly anywhere and be overriden at every level. As the complexity of an environment grows, the complexity of the vars needed also grows. 
