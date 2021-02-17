---
layout: entry
title:  "Expander accordion"
categories: main

keyboard:
  tab: |
    Focus visibly moves to the expander.
  spacebar: |
    Toggles the expander.
  enter: |
    Toggles the expander.

name:  |
  Purpose is clear
role:  |
  Identifies as a button or details
group: |
  n/a
state: |
  Expresses its state (expanded/collapsed)
          
mobile:
  swipe: |
    Focus moves to the element, expresses its state (expanded/collapsed)
  doubletap: |
    Toggles the expander

---


## Code examples

### Use semantic HTML
This semantic HTML contains all accessibility features by default with no scripting required.

{% highlight html %}
<details>
  <summary>
    See full terms
  </summary>
  Content goes here
</details>
{% endhighlight %}

### Use semantic HTML where possible
This custom expander requires scripting.

{% highlight html %}
<button aria-expanded="false">
  See full terms
</button>
<div class="hidden">
  Content goes here
</div>
{% endhighlight %}

## Developer notes

### Name
- Inner text should describe the purpose

### Role
- `<details>` identifies as details
- Native button identifies as button by default
- Use `role="button"` for custom elements

### Group
- You *can* use `aria-controls="popupId"`, but it is not well supported

### State
- Menus or expanders use `aria-expanded="true/false"` 

### Focus
- Focus must be visible

