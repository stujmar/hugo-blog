---
title: "json"
date: 2021-03-02T11:46:30-06:00
draft: false
---

# JavaScript Object Notation

![JSON](/json.png "JSON Banner")

## Overview

---

Let's talk a little about JSON. \
For those of you familiar with _Javascript_ objects, JSON or __Javascipt Object Notation__ will look similar. \
One noticeable syntax difference is the object keys are wrapped in double quotes as follows `"keyname": value` so a traditional JS object will not be readable JSON ~~`keyname: value`~~.

> "JSON is very similar to traditional Javascript objects"
-Stuart Marsh

### Common Uses

* JSON format is used for serializing and transmitting structured data over network connection
* It is primarily used to transmit data between a server and web applications.
* Web services and APIs use JSON format to provide public data.

#### Example Data

Below is an example of __JSON__

```json
{
    "integer": 1,
    "array": [
        "Stephanie",
        "Kirbee",
        "Suzette",
        "Brietta",
        "Sean"
    ],
    "array of arrays": [
        [
            "milk",
            "eggs"
        ],
        [
            "apple",
            "pear"
        ]
    ],
    "array of objects": [
        {
            "index": 0,
            "id": 5
        },
        {
            "index": 2,
            "id": 7
        }
    ]
}
```

##### Data Types

You can see the data in JSON format but what all types of data are being utilized?

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

Enjoying learning about JSON? Check out more on the [JSON Wikipedia](https://en.wikipedia.org/wiki/JSON "JSON Wikipedia")