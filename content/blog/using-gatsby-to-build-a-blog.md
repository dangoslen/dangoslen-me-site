---
path: /using-gatsby-to-build-a-blog
date: 2020-05-18T12:47:34.001Z
title: Using Gatsby to Build a Blog
description: Using an SSG as a Backend Engineer
---
I'm a backend developer. 

I used to be a full-stack developer. It's hard to make that sell these days as I haven't done much in the way of moden front-end tools until building this blog. 

I don't tend to use the same technologies that everyone talks about on the Twitterverse or in the Dev.to community. 

It's not because I don't want to. 

Honestly, I'm a little embarrassed that I don't know it all very well. The world of Javascript/Typescript moves **sooo** fast and if you blink you are out of the loop. Not to mention that tools like React have changed the architecture of many websites as well.

But I wanted to learn a little and I had a motivation to change my personal website since it was getting crufty. I decided that I would give my hand a try at one of these static site generator (SSG) things.

I had already dabbled a little with MDX after Kent C. Doods posted about using Netlify and MDX for some of his presentations. I gave that a try and LOVED creating my presentation on Offheap Bloom Filters using it! I figured I would see how it would work for my website. 

Here is how I went about it.

### Choosing the SSG
The first decision was really which SSG to use. There are a number of them out there,  . I gave cursory look at each of them, but ended up picking Gatsby. Why? I would like to say it was a scientific study complete with measures in build time and interviews with developers who had used each.

Ultimately, I just choose the one that when I started was simplest for me to understand. Gatsby just happened the one that "clicked" with me first. This is largely because of this tutorial and the starter theme built by Gatsby themselves.

### Choosing the CMS
This decision was honestly already in the bag. 

I loved my earlier experience with Netlify so much it was the no-brainer option. I enjoyed how quickly I was able to go from a `git` repository to a website without dealing with a server, a confusing configuration file or even a domain. I even transferred my domain, `dangoslen.me` over before I began this re-write and hosted my nearly hand-coded HTML site on Netlify too.

### Building the Thing
Once I had made these decisions, I did what ever developer says to not do: just started coding. I cloned the starter blog repo and started breaking things immediately. 😂

I eventually sat down and did some reading on the basics of Gatsby. I went back to the tutorial from earlier and actually read it instead of just skimming it.

I was also new to GraphQL. I knew about at a very high-level, but had never played with it before. Gatsby's Data Layer tutorial was helpful for me to learn how Gatsby uses GraphQL to render images, return configurations, etc. 

### Deploying and Blogging
Once I had tweaked and changed the site presentation to my liking, deploying was a piece of cake. I simply followed the steps outlined by Netlify CMS on how to deploy a site to Netlify and setup GitHub authentication. _It seems intimidating, but I think you can do it!_

Instead of deploying directly to dangoslen.me, I instead deployed to a sub-domain. This allowed me to work on blogging and make tweaks without impacting my actual site since it was already live.

From here, I started working on posts (like this one!) by just going to `/admin`. I logged in using GitHub and was off to coding. I started bringing over old posts as I could from Medium and updating those to have links back to my site since this is where I want all of my content to live. 

