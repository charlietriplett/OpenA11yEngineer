---
layout: entry
title:  "Skip link"
categories: html
order: 1

keyboard:
  skip-links: |
    Focus moves directly to the landmark
  tab: |
    Links and buttons within the landmark are focusable
      
mobile:
  swipe: |
    Focus moves within landmark

screenreader:
  name:  |
    Describes which landmark it's targeting
  role:  |
    Identifies itself as a link
  group: |
    Typically the first elements in the page
  state: |
    n/a
---

## Code examples

This website contains working skip links. Try them out.


## Developer notes

### Group

- Should be the first elements in the page

### Focus

- Landmarks san be targeted with a skip link, but isn't focusable with the tab key
- Use `tabindex="-1"` to make the main targetable with a skip link.


