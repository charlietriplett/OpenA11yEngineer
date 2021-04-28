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

### Adding a hint

{% highlight html %}
{% include /examples/hint-help.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/hint-help.html %}
{:/}

### Adding an error


{% highlight html %}
{% include /examples/hint-error.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/hint-error.html %}
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

