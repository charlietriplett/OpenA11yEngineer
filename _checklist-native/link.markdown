---
layout: entry
title:  "Link"
categories: navigation

name:  |
    Purpose is clear
role:  |
    Identifies itself as a link
group: |
    None
state: |
    None
focus: |
    Visibly focusable
device:
    tab: |
        Focus
    enter: |
        Activate
    mobile: |
        Swipe to focus | double tap to activate
---

## Code examples

### Semantic HTML link
This native link contains all accessibility features by default.

{% highlight html %}

<a href="https://www.a11yengineer.com">
    Accessibility success criteria checklist
</a>

{% endhighlight %}

### Custom element
This custom link requires extra work and event listeners.

{% highlight html %}
<custom-meaningless-element role="link" tabindex="0">
    Accessibility success criteria checklist
</custom-meaningless-element>

{% endhighlight %}

## Expanded notes

- ### Name
    - Inner text should describe the purpose of the link.
    - `aria-label="Link purpose"` can also be used (as a last resort)
- ### Role
    - Native link identifies as link by default
    - Use `role="link"` for custom elements
- ### Group
    - Native links require `href="/some-url/"` to be focusable
- ### State
    - None
- ### Focus
    - Focus must be visible
    - Custom elements need `tabindex="0"` to be focusable
- ### Device
    - Native elements require no keyboard listeners
    - Custom elements will require extra work