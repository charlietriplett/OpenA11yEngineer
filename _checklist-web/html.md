---
layout: entry
title:  "Basic web page"
categories: html
order: 0

keyboard:
  tab: |
    Enters the page and visibly focuses only interactive elements
  zoom: |
    Content zooms up to 200%

mobile:
  swipe: |
    Focus moves within page
  pinch: |
    Content zooms up to 200%

screenreader:
  name:  |
    The web page has a unique title
  role:  |
    n/a
  group: |
    Contains discoverable landmarks: header, nav, main and footer landmarks
  state: |
    n/a
---
## Developer notes

### Start simple: validate your code

Use the [HTML validator](https://validator.w3.org/nu/) as the foundation for ensuring your page works for everyone.

## Code examples

### Declare a language

This affects how the screenreader pronunciation..

{% highlight html %}
<html lang="en">
</html>
{% endhighlight %}

### Give your page a unique title

If the URL changes, your page needs a title unique to that page in the experience.

{% highlight html %}
<head>
  <title>Page title</title>
</head>
{% endhighlight %}

### Ensure users can zoom in

{% highlight html %}
<head>
  <meta name="viewport" 
        content="width=device-width, 
        initial-scale=1">
</head>
{% endhighlight %}

### Structure your page with landmarks

Landmarks give structure to the page for the screenreader user to be able to navigate the page by major sections.

Each page should include:

- [Header](/checklist-web/header/)
- [Nav](/checklist-web/nav/)
- [Main](/checklist-web/footer/)
- [Footer](/checklist-web/footer/)

{% highlight html %}
<header>
  <!-- Contains the site title -->
</header>
<nav>
  <!-- Primary navigation menu-->
</nav>
<main> 
  <!-- Main content -->
</main>
<footer>
  <!--  Site map and legal info -->
</footer>
{% endhighlight %}