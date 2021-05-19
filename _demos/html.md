---
layout: demo
title: A simple HTML webpage
---

## How do screenreaders work?

Screenreader applications describe the content, name and state of elements on a web page, allowing someone to use the page without seeing it.

## Interactions

There are 3 common ways screenreaders interact with the page.

### Browse mode

Screenreaders can simply read the entire page item by item.

### Keyboard shortcuts

Screenreaders can use keyboard shortcuts. For example, you can skip from heading to heading.

### List view

Screenreaders can gather some types of content (like headings or links) into a single list to choose from.

## Forms

Forms consist of interactive controls and inputs that express their name, role and state.

{::nomarkdown}
<form>
{:/}

{::nomarkdown}
{% include /examples/input-radio.html %}
{:/}

{::nomarkdown}
{% include /examples/input-checkbox.html %}
{:/}

{::nomarkdown}
{% include /examples/input-text.html %}
{:/}

{::nomarkdown}
{% include /examples/button.html %}
{:/}

{::nomarkdown}
</form>
{:/}