---
path: /top-four-patterns-for-simple-code
date: 2019-10-19T04:00:00.000Z
title: My Top Four Patterns for Writing Simple Code
description: Writing simple code is hard. Here are some patterns to help!
keywords:
  - software patterns
  - best software patterns
  - patterns code
  - software design
tags: 
  - software patterns
  - software design
  - coding
image: "../assets/1_s-smr49rffj0kibfsz98fa.jpeg"
---

<center>

![young child building with LEGO](../assets/1_s-smr49rffj0kibfsz98fa.jpeg)

<p align="center"><i><a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/building-blocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i></p>

</center>

When it comes to writing code, I aim to write simple code. What Bob Martin calls clean code. What others refer to as readable or maintainable. In many, ways, they all refer to the same thing.

But it’s **hard**!

Writing simple code requires thoughtfulness. It requires several rounds of refactors until the code is just right. It usually involves peer review or pair-programming.

But there are a few patterns I have found in my career that have helped me write simple code. Not necessarily faster or easier, but simpler. These are the patterns I turn to when I have a new problem in front of me and they almost always make something complicated a little simpler.

#### About Patterns

As a quick intro, when I speak of patterns, I’m generally referring to the set of [OOP patterns](https://en.wikipedia.org/wiki/Software_design_pattern) that you might have heard about. I know OOP is in many ways falling out of style — but some of these patterns are still applicable regardless of the paradigm you prefer. Each of them prefers simple composition over inheritance, which is the very thing most people hate about OOP anyways.

Most of the patterns I refer to here are taken from the seminal Gang of Four book: [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns). I will only be presenting a brief introduction to each pattern, so I highly encourage you to follow the links provided to read up them in more detail.

#### Pattern 1: Abstract Factory

[Factories](https://en.wikipedia.org/wiki/Factory_%28object-oriented_programming%29) are essentially an object whose only job is to generate other objects. Factories can come in different ways, but the abstract factory pattern is the most powerful in my opinion.

The [abstract factory](https://en.wikipedia.org/wiki/Abstract_factory_pattern) allows you to not only change the generated or built object at runtime, but you could also potentially change the factory at runtime as well. While that might sound trippy, it works really well for inversion of control frameworks like Spring or Unity.

From a code perspective, is usually looks a bit like:

```java
interface Factory<T> {
    T build(Metadata d);
}
 
class ClientFactory implements Factory<Client> {
    Client build(Metadata d) {
        // Build actual object and return      
    }
}
```

I try to use abstract factories whenever I need to build a concrete object that matches a simple interface based on configuration and I don’t want every other class using that object to know what changed. Yes, that was a long sentence. The core ideas though are the same classical ideas with other software engineering principles: information hiding, classes that do one thing, and small interfaces. To be more direct, abstract factories help keep the tediousness of building an object hidden away.

#### Pattern 2: Delegator

I’m sure we have all been working on some project (code or not) where instead of doing some aspect of the work ourselves, we decide to delegate that work to someone else. This usually happens the further “up” you are on the project — ie a project coordinator might delegate work to a set of assistant coordinators who delegate work to volunteer leaders, etc. etc.

The [delegator](https://en.wikipedia.org/wiki/Delegation_pattern) pattern in code is the exact same: higher-order classes ask lower-level classes to do the work for them. This helps the higher-order class stay simpler and know less about the structures underneath it.

From a code perspective, it looks a bit like:

```java
interface Validator {
    
    bool validate(Object o);
}

class ValidatorHelper implements Validator {
    Set<Validator> delegates;
    
    bool validate(Object o) { 
        for (Validator v : delegates) { 
            if (!v.validate(o)) return false;
        }
        return true;
    }
}

class RestController {
    ValidationHelper helper;
    
    Response addObject(Object o) {
        if (helper.validate(o)) {
            return ErrorResponse
        }
        // Normal processing
    }
}
```

I find the use of delegators to be useful for things like validation, sorting, normalizing, etc. Common things that will likely be specific to a particular form of data, but classes that make decisions about that data might not need to know the full intricacies of the delegated work. It just needs to know the work got done.

#### Pattern 3: Builder / Named Params

Of all of the patterns that have changed how I write code, the [builder pattern](https://en.wikipedia.org/wiki/Builder_pattern) is my top one. I write every one of my DTO (data transfer objects) with a builder from the outset. Builders make for flexible and extensible code without that much work in reality, and they have the benefit of immutability if you want it!

Other languages might not have (or even need) the builder pattern because they have named parameters in their constructors with sane default values. In essence, it’s the same thing: only declare the things you wish to be set to a specific value and don’t worry about the rest.

In code, it will look something like this:

```java
class Dto {
    private String s;
    private int i;

    private Dto(String s, int i) {
        this.s = s;
        this.i = i;
    } 
    
    public static DtoBuilder builder() {
        return new DtoBuilder();
    }
    
    public static class DtoBuilder {  
        private String s = "some default string";
        private int i = 0;

        public DtoBuilder withString(String s) {
            this.s = s;
            return this;
        }

        public DtoBuilder withInt(int it) {
            this.i = i;
            return this;
        }

        public Dto build() {
            return new Dto(s, i);
        }
    }
}
```

*Note: In java, we use [Lombok](https://projectlombok.org/) to do all the tedious coding as well.*

The reason this pattern has made my code so simple is because when **all** of your objects use a builder, making a new one is automatic. In our codebases at Bandwidth, we always add a static factory method to the class we want to build to return the builder. From there, we simply follow the chain of the fluent API, pass in your variables, and then type `.build()`. Done. You don’t spend time looking at constructors. You don’t spend time even looking at the builder code. It’s just there and you use it while writing. With modern IDEs, the auto-completion literally tells you what variables you can set. Easy.

#### Pattern 4: Enricher

This pattern isn’t in the G-o-4 book, but it’s most closely related to the chain of responsibility and the template method. In this pattern, each “chain” enriches or augments an object and returns that enriched object back to the caller. It could do this for every enricher in the chain, or a chain could decide to skip the rest of the chain if needed.

You might be thinking that you are breaking the rules about side-effects in function from Clean Code. My reasoning for it *not* breaking those principles is because the enricher **must** return the enriched object to the caller, so in many ways, it’s declaring the object might change. For all the caller knows, it might be a new object (especially in the case of immutable constraints).

```java
interface Enricher<T> {

    T enrich(T thing);

}

class HeadersEnricher implements Enricher<Headers> {
 
    Headers enrich(Headers headers) {
        headers.add("x-header", "something");
        return headers;
    }
}
```

Where I particularly find this useful is when you need to, well, enrich an object with new state. For instance, if you have an object coming from a Kafka stream that needs to have some data added to before you store it in a data warehouse, the enricher pattern could work well.

---

Those are just some of my favorite go-to patterns for writing simple code. It’s not an exhaustive list by any means, but I use these patterns every day to solve coding problems. Just some more tools to add to your coding tool belt.

Happy coding!