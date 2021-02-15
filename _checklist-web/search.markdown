---
layout: entry
title:  "Search"
categories: nav

keyboard:
    tab: |
        Focus visibly moves within the dialog, starting with the dialog element itself and doesn't enter the rest of the page.
    escape: |
        The dialog closes and returns focus to the button that launched it
    space: |
        Any buttons are activated
    enter: |
        Any buttons or links are activated
    
name:  |
    The dialog describes its purpose or title
role:  |
    Identifies itself as a modal or dialog
group: |
    When closed, focus returns to the launch button
state: |
    The modal isn't be perceivable when closed
        
mobile:
    swipe: |
        Focus moves within the dialog and doesn't enter the rest of the page.
    doubletap: |
        This typically activates most elements.

---


## Developer notes

### Name
- The modal window has a descriptive value from either:
    - `aria-label="Radio input purpose"` or
    - `aria-labelledby="heading-id"` pointing to an `<h2>` as a title    

### Role
- Use `role="dialog"` or
- `aria-modal="true"`

### Group
- Upon closing, focus should return to the element that launched the dialog

### State
- When the modal is closed, it should be set to `display: none` 
- `aria-hidden="true"` can be used to reinforce closed modals

### Focus
- Focus must be visible
- Upon closing, focus should return to the element that launched the dialog


