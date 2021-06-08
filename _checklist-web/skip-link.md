---
layout: entry
title:  "Skip link"
categories: html
order: 1

keyboard:
  tab: |
    Focus moves to the skip link
  enter: |
    Activates the link, focus/tabindex moves directly to the landmark
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

{% highlight html %}
{% include /examples/main.html %}
{% endhighlight %}

{::nomarkdown}
<example>
{% include /examples/main.html %}
</example>
{:/}



## Developer notes

### Group

- Skip links should be the first elements in the page

### Focus

- Landmarks and other elements can be targeted with a skip link, but aren't individually focusable with the tab key
- Use `tabindex="-1"` to make the main targetable with a skip link.


