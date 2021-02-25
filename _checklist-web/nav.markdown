---
layout: entry
title:  "Nav menu"
categories: nav footer
order: 0

name:  |
  Can have a heading if there are multiple navigation elements
role:  |
  Discoverable by screen reader as navigation landmark
group: |
  n/a
state: |
  n/a

keyboard:
  skip-links: |
    Focus moves directly to the nav element
  tab: |
    Focus moves to Links and buttons within the nav
        
mobile:
  swipe: |
      Focus moves within the nav
  doubletap: |
      This typically activates most elements

---

## Code examples

### Use semantic HTML
This semantic HTML contains all accessibility features by default.

{% highlight html %}
{% include /examples/nav.html %}
{% endhighlight %}

{::nomarkdown}
{% include /examples/nav.html %}
{:/}


### Avoid custom elements
This custom navigation requires extra attributes.

{% highlight html %}
<div role="navigation">
  <ul>
    <li><a href="/">Website name</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
  <ul/>
</div>
{% endhighlight %}

### Multiple navigation elements

{% highlight html %}
<nav tabindex="-1" id="nav" aria-label="Main">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/contact/">Contact</a></li>
  <ul/>
</nav>

<h2 id="cat-heading">Categories</h2>
<nav id="cat-nav" aria-labelledby="#cat-heading">
  <ul>
    <li><a href="/alpha/">Alpha</a></li>
    <li><a href="/bravo/">Bravo</a></li>
    <li><a href="/charlie/">Charlie</a></li>
  <ul/>
</nav>
{% endhighlight %}


## Developer notes

### Name
- If there are multiple `<nav>` elements (site menu, pagination, categories) it may be helpful to name them
  - Use `aria-label="Menu name"` when there is not a visible nav title.
  - `aria-describedby="menu-name-id"` can be used when the nav title is a visible heading.
  
### Role

- Identifies itself as navigation
- **DO NOT** add menu or option roles with arrow key event listeners unless you're building an actual application like Gmail.

### Focus

- When skip links are used, add `tabindex="-1"` so that focus can move to the `nav` element, (not just bring it into view).


