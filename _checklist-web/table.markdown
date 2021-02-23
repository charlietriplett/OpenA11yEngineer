---
layout: entry
title:  "Table"
categories: main

keyboard:
  tab: |
    Focus visibly moves to the expander.
  arrow-keys: |
    Move from cell to cell

name:  |
  Table has a caption or a heading to describe its purpose
role:  |
  Identifies as a table
group: |
  Columns and rows are identified
state: |
  n/a
          
mobile:
  swipe: |
    Moves from cell to cell


---


## Code examples

### Use semantic HTML
This semantic HTML contains all accessibility features by default. 

Optional: The table is wrapped in a `<figure>` to indicate author and source.

{% highlight html %}
{% include /examples/figure.html %}
{% endhighlight %}
{% include /examples/figure.html %}

### Don't use custom elements

{% highlight html %}
<h3 id="table-header">Nato alphabet</h3>
<div role="table">
  
</div>
{% endhighlight %}

## Developer notes

### Name

### Role

### Group

### State

### Focus

