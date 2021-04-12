---
layout: entry
title:  "Hint, help, or error"
categories: form

keyboard:
  tab: |
    The input comes into focus
      
mobile:
  swipe: |
    The input's name is read, then the hint text
    
screenreader:
  name:  |
    The input's name is read, then the hint text
  role:  |
    n/a
  group: |
    The hint should be read after the primary name
  state: |
    n/a
---

## Code examples

### Use semantic HTML
This semantic HTML contains all accessibility features by default.

{% highlight html %}
{% include /examples/hint-help-error.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/hint-help-error.html %}
{:/}


## Developer notes

### Name
- Inner text describes the hint

### Role
- May have `role="alert"` if serving as an input error message

### Group
- Use `aria-describedby="hint-id` to associate an input with a hint.

### Focus
- Hints should not receive focus

