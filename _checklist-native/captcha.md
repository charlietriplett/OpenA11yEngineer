---
layout: entry
title:  "Captcha"
categories: controls


keyboard:
  tab: |
    Focus visibly moves to the captcha
  spacebar: |
    Activates the captcha on iOS and Android
  enter: |
    Activates the button on Android
          
mobile:
  swipe: |
    Focus moves to the interactive elements, expresses its state, if applicable
  doubletap: |
    Activates the button
    
screenreader: 
  name:  |
    Purpose is clear (ex: "Captcha")
  role:  |
    Identifies itself as a button or image button, if interactive
  group: |
    If in a table row, group with other elements (one interactive element per grouping)
  state: |
    Expresses its state (disabled/dimmed)
---

## Developer notes

There are several experiences for Captcha:
- An image in a table row, where the whole table row acts like a button.
- A single interactive element, like an image button
- An audio challenge as an equivalent experience to the image challenge