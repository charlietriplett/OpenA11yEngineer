---
layout: entry
title:  "Picker / Spinner / Dropdown"
categories: controls

keyboard:
  tab and arrow keys: |
      Focus visibly moves to the radio button
  spacebar: |
      Selects the radio button on iOS and Android
  enter: |
      Selects the radio button on Android
        
mobile:
  swipe: |
      Focus moves to the element, expresses its state
  doubletap: |
     Toggles the radio button state

screenreader:
  name:  |
      Purpose is clear and matches any visible label
  role:  |
      Identifies itself as a button in iOS and radio button in Android
  group: |
      Visible label is grouped or associated with the radio button in a single swipe
  state: |
      Expresses its state (disabled/dimmed, iOS: checked/not checked.  Android: checked/not checked)
---