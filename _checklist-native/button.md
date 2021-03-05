---
layout: entry
title:  "Button"
categories: controls
order: 1

keyboard:
  tab: |
    Focus visibly moves to the button.
  spacebar: |
    Activates the button.
  enter: |
    Activates the button.

name:  |
  Purpose is clear
role:  |
  Identifies as a button
group: |
  Indicates it has popup for modals, listbox, or menus
state: |
  Expresses its state (pressed, expanded, disabled)
          
mobile:
  swipe: |
    Focus moves to the element, expresses its state
  doubletap: |
    Activates the button

---


## Code examples

### Use semantic HTML
This semantic HTML contains all accessibility features by default.


{% highlight html %}
{% include /examples/button.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/button.html %}
{:/}

### Avoid custom elements
This custom button requires extra attributes and event listeners.

{% highlight html %}
<div role="button" tabindex="0">
  Continue
</div>
{% endhighlight %}

As a last resort, `aria-label` can be used.

{% highlight html %}
<div role="button" tabindex="0" aria-label="Continue">
  <!-- icon or whatever -->
</div>
{% endhighlight %}


## Developer notes

### Name
- Inner text should describe the purpose of the button.
- `aria-label="Button purpose"` can also be used (as a last resort)

### Role
- Native button identifies as button by default
- Use `role="button"` for custom elements

### Group
- Use `aria-haspopup="true"` for menu, listbox or modal
- `aria-controls="popupId"` is not well supported

### State
- Toggle buttons `aria-pressed="true/false"`
- Menus or expanders use `aria-expanded="true/false"` 
- Use the `disabled` state for inactive buttons 
- Use `aria-disabled="true/false"` state for inactive custom elements 

### Focus
- Focus must be visible
- Custom elements need `tabindex="0"` to be focusable

