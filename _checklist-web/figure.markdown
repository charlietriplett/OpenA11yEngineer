---
layout: entry
title:  "Figure: map, chart, table"
categories: main

keyboard:
  tab: |
    Interactive figure controls are focusable
  enter: |
    Activates controls
  spacebar: |
    Activates controls
  
name:  |
  Content is described by a heading, alt text or named on focus; control purpose is clear
role:  |
  Element indicates it is a map, table, or image
group: |
  Alternative method interaction is available.
state: |
  n/a
      
mobile:
  swipe: |
    Focus visibly moves to each control
  doubletap: |
    Activates the control

---

## Code examples

### Provide alternative ways to consume visual content
This semantic HTML contains all accessibility features by default.

{% highlight html %}
<img src="nato-alphabet.jpg" alt="NATO alphabet">
<figure>
  <table>
    <caption>
      NATO Phoenetic Alphabet
    </caption>
    <thead>
      <tr>
        <th scope="row">
          Letter
        </th>
        <th scope="column">
          A
        </th>
        <th scope="column">
          B
        </th>
        <th scope="column">
          C
        </th>
      </tr>
    </thead>
    <tbody>       
      <tr>
        <th scope="row">
          NATO
        </th>
        <td>
          Alpha
        </th>
        <td>
          Bravo
        </td>
        <td>
          Charlie
        </td>
      </tr>
    </tbody>
  </table>
  <figcaption>
    Source: Charlie, 
    <cite>Whiskey Tango Foxtrot, 2016</cite>
  </figcaption>
</figure>
{% endhighlight %}

## Developer notes

### Name
- Use `alt="Figure content"` for images
- Supply a heading for interactive figures or `aria-label="Figure name"` can be used as well.

### Role
- Wrap charts and tables in a `<figure>` element where applicable.
- Include `<figcaption>` to describe the figure
- Use `<cite>` to label sources.

### Group
- Provide alternative ways to consume content
  - Examples:
    - A map of phone coverage areas includes a search function
    - A chart embedded as an image includes a table of the data


