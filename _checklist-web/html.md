---
layout: entry
title:  "Web page HTML"
categories: html

keyboard:
  tab: |
    Enters the page and focuses only interactive elements
  cntrl +/-: |
    Zooms in/out of the page

mobile:
  swipe: |
    Focus moves within page
  pinch: |
    Page zooms in/out

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
  <title>Page title - Site name</title>
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
This semantic HTML contains all accessibility features by default.

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

### Avoid custom elements
This custom main element requires extra attributes.

{% highlight html %}
<div role="main"> 
  <h1>About our company</h1>
  <p>The main content of the page belongs here.</p>
</div>
{% endhighlight %}
