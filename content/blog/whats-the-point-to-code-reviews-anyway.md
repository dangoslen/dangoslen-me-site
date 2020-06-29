---
path: /whats-the-point-to-code-reviews-anyway
date: 2020-06-29T00:04:01.290Z
title: What's the Point to Code Reviews Anyway?
description: "Hint: it's not bugs."
---

Code reviews have become a vital part of the modern software development process. Its always been important, but with the growth of git and online tools that facilitate easy pull-request viewing and integrated comments, it has only grown and grown.

But, why should software engineers even participate in code reviews? What is the point? When someone assigns you a code review, why should you bother to look? After all, your time reviewing code is time not spent writing your own code or automating the coffee pot with a Rasberry PI and a Staples Easy button.

I don’t want to focus on the benefits of code review or the etiquette around them. Those things are pretty well documented and talked about. But these benefits are not the point of a code review, they are just the positive side-effects. Just like the benefits of working out regularly includes having more energy, feeling better, and looking better. 

But the point of your workout regiment is actually to be healthy.

With that in mind, here a few things that I think are not the point of code reviews.

## It's Not About Bugs!
Seriously, its not. Many articles support this claim. To be plain and simple though, iff the primary point of a code review was looking for bugs, you would [never stop looking](https://research.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html). 

Should you comment if you spot one? Yes. Should you ask for an additional unit test if you think there is a missing test case? Absolutely. But you reading and browsing through someone else’s code via a web browser isn’t likely going to uncover the big thing they missed. There are bugs that have stayed around literally years before they were found — it's just part of the game.

## Its Not About Formatting / Consistency / Standards
The number of wars started within teams over formatting in code reviews is silly. Pick a standard, use a linter, and move on. Have the war before the you open a code review in the first place. If you find something hard to read should you mention something? You probably should. Should you carefully scrutinize every single variable name? Maybe not.

## Its Not About Saving Time or Money
Not in the short-term for sure, and not in the long-term. Sure, good code reviews will save your team time overall; that seems to be well proven. But its still not the point.

## The Point of Code Review is Building Knowledge
When you don’t understand something initially, you ask questions and clarify requirements. You poke at code that looks a little off and you ask about variable names, methods, patterns, etc. that didn’t make sense. And in mean time you probably uncovered a bug.

When you have the perspective to gain knowledge, it means you will learn things you didn’t know before. It means the junior devs learn from senior devs; it also means that senior devs learn from the junior. Everyone should come away learning something they didn’t know before the review the started that makes both the reviewee and reviewer better engineers.

When you have the perspective to gain knowledge, it means you could read it before you approved it. It means the code and documentation is likely consistent and has agreed upon standards for names, formatting, etc. It means you could likely maintain it. I means you could probably change it. All of those things mean your team is better positioned to distribute stories or bugs as they come through the backlog, saving time and money.

## Knowledge is Power; Code Reviews are a GREAT Avenue to Spread It

If you and your team approach code reviews this way, you will naturally hit all of the great benefits of the code review process. Your team will have more knowledge and a better understanding of the system, how that systems works internally, and how to write better code along the way — which is what most of us want to anyhow.

Happy reviewing!