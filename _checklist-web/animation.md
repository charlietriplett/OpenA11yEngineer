---
layout: entry
title:  "Animation"
categories: main

keyboard:
  tab: |
    Where applicable, focus moves directly to pause / play / hide controls
  spacebar: |
    Activates the control
  enter: |
    Activates the control
  reduced motion settings: |
    Animation is disabled or reduced

screenreader:   
  name:  |
    The content  of the animation may be described
  role:  |
    Identifies itself as an image or figure
  group: |
    n/a
  state: |
    n/a

        
mobile:
  swipe: |
    Description of the animation
  reduced motion settings: |
    Animation is disabled or reduced
    
---

## Code examples

## Allow animations to be disabled with CSS

People with vestibular disorders can be made ill by sweeping animations on screen.

It is important to change or disable animations when device reduce motion settings are activated.

This can be accomplished via CSS media query.

{% highlight css %}
@keyframes bounce {
  0% { transform: scale(1); }
  25% { transform: scale(.9); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes dissolve {
  0% { background-color: green; }
  50% { background-color: darkgreen; }
  100% { background-color: green; }
}

.animation {
  background-color: green;
  animation: bounce 2s linear infinite both;
}

@media (prefers-reduced-motion) {
  .animation {
    animation-name: dissolve;
  }
}
{% endhighlight %}

{% highlight html %}
{% include /examples/animation.html %}
{% endhighlight %}

If your device is set to reduce motion, the animation will softly fade from one color to the next instead of bounce.

{::nomarkdown}
{% include /examples/animation.html %}
{:/}

### Detecting with JS
{% highlight javascript %}
const pref = 
  window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );
{% endhighlight %}



