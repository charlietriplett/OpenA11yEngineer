---
layout: entry
title:  "Listbox select dropdown"
categories: form

keyboard:
  tab: |
    Focus moves visibly to the input
  enter: |
    If the focus is on the button, expands the listbox and places focus on the currently selected option in the list. 
    If focus is in the listbox, collapses the listbox and keeps the currently selected option as the button label.
  arrow-keys: |
    Moves focus to and selects the next option. 
    If the listbox is collapsed, also expands the list.
  escape: |
    If the listbox is displayed, collapses the listbox and moves focus to the button.
  home: |
    If the listbox is displayed, moves focus to and selects the first option.
  end: |
    If the listbox is displayed, moves focus to and selects the last option.e.

name:  |
  Purpose is clear
role:  |
  Identifies itself as a listbox
group: |
  Label is read with the input
state: |
  Indicates when the button is expanded/collapsed, indicates which option is selected
      
mobile:
  swipe: |
    Focus moves to the input, traverses list
  double-tap: |
    Opens listbox, selects option
---

## Code examples


### Use Semantic HTML

This native select contains all the accessibility criteria for free and is styled to look cool.

{% highlight html %}
{% include /examples/input-select.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/input-select.html %}
{:/}

### Custom elements

Custom listboxes are notoriously difficult to make screen reader accessible. 

Even Angular Material documentation says "The native `<select>` offers the best accessibility because it is supported directly by screen-readers."

{% highlight html %}
<div id="listbox-label">
  Choose a NATO Phoenetic Letter
</label>
<button aria-haspopup="listbox"
        aria-labelledby="listbox-label listbox-button"
        id="listbox-button">
        Charlie
</button>
<ul tabindex="-1"
    role="listbox"
    aria-labelledby="listbox-label"
    class="hidden">
  <li id="alpha" role="option">
    Alpha
  </li>
  <li id="bravo" role="option">
    Bravo
  </li>
  <li id="charlie" role="option">
    Charlie
  </li>
</ul>
{% endhighlight %}




## Developer notes

### Name

### Role

### State

### Group

### Focus
- Focus must be visible