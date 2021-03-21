---
layout: entry
title:  "Toast Snackbar"
categories: main form

keyboard:
  tab: |
    Focus visibly moves in logical order to the toast.
  space: |
    Any buttons inside are activated
  enter: |
    Any links inside are activated
  
name:  |
  The element announces its purpose or title
role:  |
  Identifies itself as an alert or status
group: |
  When closed, focus returns to a logical place in the page
state: |
  Toast remains open until closed by user
      
mobile:
  swipe: |
    Focus moves within the toast and doesn't enter the rest of the page.
  doubletap: |
    This typically activates most elements.

---

## Code examples

### Use semantic HTML where possible

Browser support for `<dialog>` is still incomplete. Some browsers require additional scripting.

{% highlight html %}
{% include /examples/modal-dialog.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/modal-dialog.html %}
{:/}

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


