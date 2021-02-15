---
layout: entry
title:  "Radio button"
categories: web form input

name:  |
    Input label and purpose is clear
role:  |
    Identifies itself as a radio option
group: |
    Each option has a label and all options are part of a named group.
state: |
    Expresses its state (selected, checked, disabled)

keyboard:
    tab: |
        Focus visibly moves to the checked radio input in the group. If a radio button is not checked, focus moves to the first radio button in the group.
    spacebar: |
        If the radio button with focus is not checked, changes the state to checked.  Otherwise, does nothing.
    arrow-keys: |
        Moves focus to and checks the previous or next radio button in the group
        
mobile:
    swipe: |
        Focus moves to the element, expresses its state
    doubletap: |
        If the radio button with focus is not checked, changes the state to checked. Otherwise, does nothing.

---


## Code examples

### Use semantic HTML
This semantic HTML contains all accessibility features by default.

{% highlight html %}
<fieldset>
  <legend>
    Which is your favorite NATO letter:
  </legend>
  
  <input type="radio" name="nato" id="alpha">
  <label for="alpha">Alpha</label>

  <input type="radio" name="nato" id="bravo">
  <label for="bravo">Bravo</label>

  <input type="radio" name="nato" id="charlie">
  <label for="charlie">Charlie</label>
</fieldset>
{% endhighlight %}

### Avoid custom elements
This custom button requires extra work for roving tabindex and event listeners.

{% highlight html %}
<custom-label id="groupLabel">
    Which is your favorite NATO letter:
</custom-label>
<custom-wrapper role="radiogroup" aria-labelledby="groupLabel">
    <custom-element role="radio" tabindex="-1">
        Alpha
    </custom-element>
    <custom-element role="radio" tabindex="-1">
        Bravo
    </custom-element>
    <custom-element role="radio" tabindex="-1">
        Charlie
    </custom-element>  
</custom-wrapper>
{% endhighlight %}

## Developer notes

### Name
- `label` text should describe the radio input.
- Use `aria-describedby="hint-id"` for hints or additional descriptions
- `aria-label="Radio input purpose"` can also be used (as a last resort)

### Role
- **By default**, semantic HTML radio inputs identify as radio button
- Use `role="radio"` for custom elements

### Group
- Semantic HTML
    - `<fieldset>` should wrap the radio group
    - `<legend>` should describe the group's purpose
    - Each `<label>` must include `for="input-id"` to be associated with its input
- Custom elements
    - Use `role="radiogroup"` to take the palace of fieldset
    - Use `aria-labelledby="label-id"` to associate an element as a label
    - `aria-label="Group purpose"` can also be used if there's no label with an ID

### State
- Semantic HTML
    - `checked` (will be read as "selected" by screen reader)
    - Use the `disabled` state for inactive buttons
- Custom element
    - Use `aria-checked="true/false"` to express state
    - Use `aria-disabled="true"` to declare inactive elements

### Focus
- Focus must be visible
- Custom elements will require keyboard event listeners and roving tabindex
- **DO NOT** put interactive elements inbetween radio inputs.


