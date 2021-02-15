---
layout: entry
title:  "Button"
categories: controls

name:  |
    Purpose is clear
role:  |
    Identifies itself as a button
group: |
    Indicates it has popup for modals, listbox, or menus
state: |
    Expresses its state (pressed, expanded, disabled)
focus: |
        Visibly focusable
keyboard:
    tab: |
        Focus moves to the button
    enter: |
        Activate
    spacebar: |
        Activate
mobile:
    swipe: |
        Focus
    doubletap: |
        Activate
---

## Code examples

### Semantic HTML button
This native button contains all accessibility features by default.

{% highlight html %}

<button>
    Continue
</button>

{% endhighlight %}

### Custom elements
This custom button requires extra work and event listeners.

{% highlight html %}
<custom-meaningless-element role="button" tabindex="0">
    Continue
</custom-meaningless-element>

{% endhighlight %}

## Expanded notes

- ### Name
    - Inner text should describe the purpose of the button.
    - `aria-label="Button purpose"` can also be used (as a last resort)
- ### Role
    - Native button identifies as button by default
    - Use `role="button"` for custom elements
- ### Group
    - Use `aria-haspopup="true"` for menu, listbox or modal
    - `aria-controls="popupId"` is not well supported
- ### State
    - Toggle buttons `aria-pressed="true/false"`
    - Menus or expanders use `aria-expanded="true/false"` 
    - Use the `disabled` state for inactive buttons 
    - Use `aria-disabled="true/false"` state for inactive custom elements 
- ### Focus
    - Focus must be visible
    - Custom elements need `tabindex="0"` to be focusable
- ### Device
    - Native elements require no keyboard listeners
    - Custom elements will require extra work
