---
title: "yaml"
date: 2021-03-02T11:46:30-06:00
draft: false
---

# YAML Ain't Markup Language

![YAML](images/yaml.png "YAML Banner")

## Overview

---

Let's talk a little about YAML. \
__YAML__ is _recursive_ acronyn and __"YAML Ain't Markup Language"__ \
It allows custom data types. It is designed to be unabtrusive and human readable so instead of  ~~`{"keyname": value}`~~ __YAML__ would simply read `keyname: value`.

> "Of all the tuber based object notations YAML is one of my favorites"
-Stuart Marsh

### Advantages

* YAML supports comments and complex data types that JSON does not.
* When integrated with other languages can have security advantages.
* YAML is naturally insensitive to quotation marks and braces, making special characters easier to define, particularly in strings.

#### Example Data

---

Below is an example of __YAML__

```yaml
---
integer: 1
array:
- Stephanie
- Kirbee
- Suzette
- Brietta
- Sean
array of arrays:
- - milk
  - eggs
- - apple
  - pear
array of objects:
- index: 0
  index start at 5: 5
- index: 2
  index start at 5: 7
```

##### Data Types

You can see the data in __YAML__ format but what all types of are utilized?

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

Enjoying learning about? Check out more on the [YAML Wikipedia](https://en.wikipedia.org/wiki/YAML "YAML Wikipedia")

