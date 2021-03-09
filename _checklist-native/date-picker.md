---
layout: entry
title:  "Date picker dialog"
categories: form

keyboard:
  tab: |
    Focus visibly moves in date grid table and calendar navigation buttons
  arrow-keys: |
    Focus visibly moves through dates
  spacebar: |
    Activates the date picker buttons and calendar navigation buttons
  enter: |
    Activates the date picker buttons and calendar navigation buttons

name:  |
    Button purpose is clear
role:  |
    Buttons identify as buttons, 
    dialog identifies itself dialog or modal, 
    date grid table may identify itself as table or grid
group: |
    Launch button indicates it has a popup
state: |
    Date buttons express state (pressed, disabled/dimmed)
            
mobile:
    swipe: |
        Focus moves through elements, expresses its state
    doubletap: |
        Activates the element in focus
---

## Developer notes

An accessible date picker will have the following components:
- Launch button
  - Opens the date picker
  - Focus returns to this button on closing the popup dialog
- Date picker popup dialog
  - The dialog itself should be labelled by the month and year with `aria-labelledby="month-year-heading-id"`
  - Use `aria-live="polite"` for the `<dialog>`, `aria-live="polite"` for month/year heading
- Calendar navigation buttons
- Date grid table
  - Use `aria-labelledby="month-year-heading-id"` to label the table
- Date picker buttons
  - Use `aria-selected="true"` to indicate state