---
title: "toml"
date: 2021-03-02T11:46:30-06:00
draft: false
---

# Tom's Obvious, Minimal Language

![TOML](/static/toml.png "TOML Banner")

## Overview

---

Let's talk a little about TOML. \
For those of you familiar with _YAML_, __TOML__ will look similar. \
One noticeable difference is it is designed to map unambiguously to a hash table. It is designed to be unabtrusive and human readable so instead of  ~~`"keyname": value`~~ __TOML__ would simply read `keyname = value`.

> "The next time I need to map unambigously to a hash table I'll defeinitely use TOML"
-Stuart Marsh

### Common Criticisms

* TOML is verbose, it is not DRY and it is syntactically noisy
* TOML's hierarchies are difficult to infer from syntax alone
* Overcomplication: Like YAML, TOML has too many features
  
#### Example TOML Data

Below is an example of __TOML__

```toml
integer = 1
array = [ "Stephanie", "Kirbee", "Suzette", "Brietta", "Sean" ]
"array of arrays" = [ [ "milk", "eggs" ], [ "apple", "pear" ] ]

[["array of objects"]]
index = 0
"id" = 5

[["array of objects"]]
index = 2
"id" = 7
```

##### Data Types

You can see the data in __TOML__ format but what all types of are utilized?

1. Strings
1. Key Value Objects
1. Arrays
1. ~~Boolean~~
1. Integers/Floats

Confused about data types? Here is a key to explain some common types:

| Data Type   | Example Value  |
| ----------- | -----------    |
| Inetger     | `5`            |
| String      | `"Hello"`      |
| Boolean     | `true`         |
| Array       | `["Hi", 1, false]`   |
| Object      | `key: value`         |

---

###### References

Enjoying learning about TOML? Check out more on the [TOML Wikipedia](https://en.wikipedia.org/wiki/TOML "TOML Wikipedia")
