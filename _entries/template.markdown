---
layout: entry
title:  "How to use these criteria"
categories: web form input

name:  |
    Purpose is clear
role:  |
    Identifies itself as the thing it is
group: |
    Indicates how it relates to other elements
state: |
    Express its state (checked, selected, disabled)
focus: |
    Visibly focusable
device:
    keyboard: | 
        Tab to focus, Enter or spacebar to activate, Arrow keys select
    tab: | 
        Focus
    enter: | 
        Activate
    spacebar: |
        Activate
    arrow: |
        up/down/left/right navigate selection list
    mobile: |
        Swipe to focus, Double tap to activate
    ios: | 
        Shake to toggle
    android: |
        Keyboard mapping to menu or navigation bar is limited. 
    other: |
        Page up returns to top, Page down returns to bottom
---

## Code examples

### Native HTML button
This semantic button contains all accessibility features by default.

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
