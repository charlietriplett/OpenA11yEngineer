---
layout: entry
title:  "Number input"
categories: form

keyboard:
  tab: |
    Focus moves visibly to the search text input
  
name:  |
  Purpose is clear
role:  |
  Identifies itself as a input
group: |
  Label is read with the input
state: |
  The input can be required, disabled
      
mobile:
  swipe: |
    Focus moves to the input, number pad appears
---

## Code examples

### Use semantic HTML
This semantic HTML contains all accessibility features by default. Include a search button.

{% highlight html %}
<label for="phone">
  Your phone number
</label>
<input type="text" 
       id="phone"
       aria-describedby="hint" 
       inputmode="numeric"
       pattern="[0-9]*">
<div id="hint">
   573-268-9692
</div>
{% endhighlight %}

## Developer notes

### Name
- Include `for="input-id` in each `<label>` label to associate it with the input
- Use `aria-label="Input name"` as a last resort if a `<label>` can't be used
- Don't hide the label on focus

### Role
- Identifies as a text input


### Group
- Include `for="input-id` in each `<label>` label to associate it with the input
- Use `<fieldset>` and `<legend>` to name a group of inputs.

### Focus
- Focus must be visible