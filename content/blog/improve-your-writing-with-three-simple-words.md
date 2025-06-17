---
path: /improve-your-writing-with-three-simple-words
date: 2025-06-17T09:36:30
title: Improve Your Writing with Three Simple Words
description: When writing technical documents, having specific words to indicate requirements is just as important as the requirements themselves. Enter RFC 2119
keywords:
  - how to use RFC 2119
  - technical writing tips
  - how to incorporate RFC 2119 into my technical writing
  - MUST, SHOULD, MAY technical writing
tags:
  - team-driven development
  - technical writing
  - what's the point
image: "../assets/damien-dufour-us83_MQnnWc-unsplash.jpg" 
---

<center>

![](../assets/damien-dufour-us83_MQnnWc-unsplash.jpg)

<span class="credit">

<i> 
    
Photo by <a href="https://unsplash.com/@damiendufourphotographie?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Damien Dufour</a> on <a href="https://unsplash.com/photos/green-grass-field-near-body-of-water-during-daytime-us83_MQnnWc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      
</i>

</span>

</center>

Imagine reading a technical design document or [RFC](https://en.wikipedia.org/wiki/Request_for_Comments). As you read, you notice that the language in the document is a bit confusing. For example:

> Requests likely need to be authorized using standard HTTP auth mechanisms

What does this "requirement" mean? Are we using "standard" `Authorization` headers with bse64 encoded usernames and passwords? I don't see a mention of HTTPS. And I also don't know what "likely" is meant to convey...

The author of the document isn't trying to be confusing, but they lack practices and tools to help make their document effective.

A key tool that I have repeatedly turned to for help with my technical writing is [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119). It's a short one (go read it!) that provides a prescriptive set of terms and writing style to help make requirements and details clear.

I hope to convince you by the end of this article that it's worth adopting in your own writing, too.

## The Language of Requirements

RFC 2119 is really focused on one idea: giving a common language for describing requirements that are clear and enforceable. 

The RFC focuses on three categories of technical writing: requirements, recommendations, and optional features.

Here's the breakdown:

- **MUST** / **REQUIRED** / **SHALL**  
 🚨 Non-negotiable. Skipping this breaks the spec.

- **SHOULD** / **RECOMMENDED**  
 ✅ Strong advice. You can skip it, but only if you've got a good reason—and document it.

- **MAY** / **OPTIONAL**  
 🌀 Totally up to the implementer. No pressure either way.

- **NOT**
 🚫 The NOT keyword is used to conjunction with MUST or SHOULD language to describe behaviors that are prohibited or are a strong recommendation to avoid.

This kind of structure might seem intense - and you would be right. As the RFC describes, these terms MUST be used only when necessary to convey behaviors of the system and not fine-grained implementation specifics. Don't overwhelm your team with a keyword in every other sentence or in places they don't apply.

When used properly, however, the benefit of these terms gives your readers—your teammates, future you, open-source users—a powerful map to navigate your ideas.

Returning to our original example, our authorization requirements could read something like 

> - All HTTP requirements MUST be authorized using a [Basic Authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication#basic_authentication_scheme) header. 
> - All requests MUST be sent using HTTPS to encrypt traffic using


---

## When to Use

If you are thinking, "I don't write IETF RFCs, so this doesn't really apply to me", I'd nudge you to reconsider. You can use these terms in all sorts of documents within your work:

- Design documents or [ADRs](https://adr.github.io/)
- API interface descriptions  
- System architecture notes  
- Code comments (ideally linking to related design documents)

Once your team gets used to it, it speeds up conversations as well. You can begin asking questions such as "Was that a MUST or a SHOULD?" or "Perhaps we need to upgrade this SHOULD to a MUST?". Not only is the document itself clear, but the conversations about it are clearer as well.

Another advantage is that by using language from this RFC, you get to point to the RFC for why you are using these terms in the first place. You aren't coming up with terms out of thin air to try to communicate your intentions. You get to borrow" ideas used throughout the IETF across their technical writing. 

This can speed up your writing time while also acting as a hedge from people wondering why you choose to write "MUST" vs. "a requirement of the system" (and thinking you might be too "loud" in your document).

---

## Tips for Using It in the Real World

If you're going to bring RFC 2119 into your writing, here are some tips I've found helpful:

- 📎 Add a short note: _"This doc uses terminology from RFC 2119"_ at the top of your spec [^1].
- ✍️ Use keywords consistently—but sparingly. Not every sentence needs a MUST.
- 🔍 During reviews, ask, "Is this clearly a SHOULD or a MUST?" It can surface assumptions quickly.
- 💬 Bonus points: use it in Slack when discussing changes.

You might get some pushback or questions regarding this language initially. That's ok! 

Practice patience and humility, teaching your team why you are using this RFC and helping people learn to read it effectively. Some teams I've worked on have even had workshops on reading RFCs that were remarkably helpful. 

---

## TL;DR

Using RFC 2119 terms—like **MUST**, **SHOULD**, and **MAY**—makes your technical writing clearer, more actionable, and easier to align on. It's a small habit that can have a big impact on collaboration.

Happy coding (and writing)!

[^1]: Even better if you put this in a RFC or design document template!

