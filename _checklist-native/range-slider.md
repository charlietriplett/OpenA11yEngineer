---
layout: entry
title:  "Range slider"
categories: form

keyboard:
  tab: |
    Focus moves visibly to the input
  arrow-keys: |
    Increase / decrease value one step
  page-up: |
    Increases slider value multiple steps
  page-down: |
    Decreases slider value multiple steps
  home: |
    Sets slider to its minimum value.
  end: |
    Sets slider to its maximum value.

mobile:
  swipe: |
    Focus moves to the input
  iOs-swipe-up: |
    Increase/decrease slider value one step
  android-volume: |
    Increase/decrease slider value one step

screenreader:
  name:  |
    Purpose is clear
  role:  |
    Identifies itself as a range
  group: |
    Label is read with the input
  state: |
    Expresses minimum value, maximum value, and current value
      
---

## Code examples


### Semantic HTML
While there is a native range input, it is difficult to style reliably across browsers.

This is one of the exceedingly rare instances where a custom element makes a lot of sense.

{% highlight html %}
{% include /examples/input-range.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/input-range.html %}
{:/}


### Custom elements

This is a rare instance where custom elements are easier to style reliably across browsers.

{% highlight html %}
<div id="range-label">
  How much cowbell?
</div>
<div class="track">
  <div id="thumb"
       role="slider"
       tabindex="0"
       aria-valuemin="0"
       aria-valuenow="10"
       aria-valuemax="11"
       aria-labelledby="range-label">
  </div>
</div>
{% endhighlight %}

Working example: <https://www.w3.org/TR/wai-aria-practices/examples/slider/slider-1.html>


## Developer notes

### Name
- Include `for="input-id` in each `<label>` label to associate it with the input
- Use `aria-label="Input name"` as a last resort if a `<label>` can't be used
- Don't hide the label on focus

### Role
- Identifies as a text input

### State
- aria-valuemin
- aria-valuemax
- aria-valuenow

### Group
- Include `for="input-id` in each `<label>` label to associate it with the input
- Use `<fieldset>` and `<legend>` to name a group of inputs.

### Focus
- Focus must be visible