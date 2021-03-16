---
title: "About"
date: 2021-03-02T11:46:30-06:00
draft: false
layout: about
#  Text
description: "This is the description of the page."

# Toggle
type: boolean
name: has_cat
label: Has cat?
description: show section if they have a cat
default: false
hidden: false

# Tags Feild
tags:
    - Snickers
    - Smitereens
    - Squeakers
    - Sneezy

# Text Area
type: textarea
name: "catnames"
label: "Catnames"
description: "please tell me your cat names"
hidden: false
default: ""
config:
  wysiwyg: true
  schema:
    format: markdown

# Date Time
date: 2020-06-08T12:00:00+00:00
publish_date: 2020-06-10T12:00:00+00:00

# Sortable List
names_header: "Stu's list of Cat Names"
catwishlist:
    - "Lion"
    - "Tiger"
    - "Lynx"
    - "bobcat"

# File Upload
type: file
name: banner
label: Banner
description: Provide a banner image for this post
hidden: false
default: "/cat.png"
config:
  maxSize: 2

# type: field_group
# name: authors
# label: Authors
# description: The authors of this post
# hidden: false
# fields:
# - type: text
#   name: name
#   label: Author's Name
#   config:
#     required: true
# - type: textarea
#   name: bio
#   label: Author's Bio
#     config:
#     required: true
---


This is my About page.
