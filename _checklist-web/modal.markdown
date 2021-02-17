---
layout: entry
title:  "Modal Dialog"
categories: main

keyboard:
  tab: |
    Focus visibly moves within the dialog, starting with the dialog element itself and doesn't enter the rest of the page.
  escape: |
    The dialog closes and returns focus to the button that launched it
  space: |
    Any buttons are activated
  enter: |
    Any buttons or links are activated
  
name:  |
  The dialog describes its purpose or title
role:  |
  Identifies itself as a modal or dialog
group: |
  When closed, focus returns to the launch button
state: |
  When open, other content is inert
      
mobile:
  swipe: |
    Focus moves within the dialog and doesn't enter the rest of the page.
  doubletap: |
    This typically activates most elements.

---

## Code examples

### Use semantic HTML where possible

Browser support for `<dialog>` is still incomplete.

{% highlight html %}
<dialog aria-modal="true" aria-labelledby="title">
  <button type="reset">
    <span class="hidden">Close</span>
  </button>
  <h2 id="title">
    Do you accept the terms and conditions?
  </h2>
  <p>Acceptance is required</p>
  <button type="submit">
    I accept
  </button>
</dialog>
{% endhighlight %}

## Developer notes

### Name
- The modal window has a descriptive value from either:
  - `aria-label="Modal title"` or
  - `aria-labelledby="heading-id"` pointing to an `<h2>` as a title    

### Role
- For custom elements, use `role="dialog"`

### Group
- Upon closing, focus should return to the element that launched the dialog

### State
- Use `aria-modal="true"` to indicate content beneath the modal is inert.

### Focus
- Focus must be visible
- Upon closing, focus should return to the element that launched the dialog


