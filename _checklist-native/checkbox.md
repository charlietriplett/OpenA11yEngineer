---
layout: entry
title:  "Checkbox"
categories: controls

keyboard:
  tab and arrow keys: |
      Focus visibly moves to the checkbox
  spacebar: |
      Selects the checkbox on iOS and Android
  enter: |
      Selects the checkbox on Android
        
mobile:
  swipe: |
      Focus moves to the element, expresses its state
  doubletap: |
     Toggles the checkbox state

screenreader:
  name:  |
      Purpose is clear and matches any visible label
  role:  |
      Identifies itself as a checkbox and button in iOS and radio button in Android
  group: |
      Visble label is grouped or associated with the checkbox in a single swipe
  state: |
      Expresses its state (disabled/dimmed, iOS: selected.  Android: checked/not checked)
---



### **Developer Notes**

-   A checkbox lets the user choose between two opposite states, actions or values
    
-   You should use a native element rather than a custom element because it will announce the correct built-in screen reader announcements without additional development effort
    
-   A checkbox should never do anything but toggle between checked and unchecked. It should never automatically navigate the user to another field or screen
    
### Name

- Name describes purpose while focus is in/on the control

- **iOS Tips**
	- Set a label in Interface Builder in the Identity Inspector
	- Group visible text label and the control in the same view container: `accessibilityFrameInContainerSpace`
	- `setTitle( )` method
	- If no visible label, use `accessibilityLabel` on control
	- `Hint` is used only if the results of interacting with it are not obvious from the control's label
	- Match visible label, if any
	- To hide labels from VoiceOver announcements, uncheck the Accessibility Enabled checkbox in the Identity Inspector or use `isAccessibilityElement=false`
	- If hiding visible label, use accessibilityLabel on control
- **Android Tips**  
	- `android:text` XML attribute
	- Optional: use `contentDescription` for a more descriptive name, depending on type of view and for elements without a visible label
	- `contentDescription` overrides `android:text`  
	- Use `labelFor` attribute to connect the visible label to the control

### Role

- **iOS Tips**
	- Standard NSSwitchButton
	- Announce as "button" or "checkbox"
- **Android Tips**
	- CheckBox Class
	- Announced as "checkbox"
	- "double tap to activate" or "double tap to toggle" expected announcements

### Groupings

- Group visible label with checkbox (if label is visible)

- **iOS Tips**
	- `accessibilityFrame
	- `accessibilityFrameInContainerSpace`
	- GroupView
	- Only the container class is an accessible element `isAccessibilityElement=true` and announces all elements in one announcement  This makes child elements no longer accessible by screen reader 
- **Android Tips**
	- ViewGroup
	- Set the container object's `android:screenReaderFocusable` attribute to true, and each inner object's `android:focusable` attribute to false. In doing so, accessibility services can present the inner elements' `contentDescription` or names, one after the other, in a single announcement

### State

- States can be selected, dimmed/disabled, checked/unchecked

- **iOS Tips**  
	- Active: `isEnabled property`
	- Disabled: `UIAccessibilityTraitNotEnabled`
	- disabled/dimmed
	- checked/not checked: `isChecked`   
	- Announcement: dimmed, checked/not checked 
        
- **Android Tips**
	- Active: `android:enabled=true`
	- Disabled: `android:enabled=false`
	- checked/not checked: `isChecked`, `setChecked`
	- Announcement: disabled, checked/not checked

### Focus

- Only manage focus when needed. Primarily, let the device manage default focus order  
- Consider how focus should be managed between child elements and their parent views or containers

- **iOS Tips**
	- `accessibilityElementIsFocused`  
	- `isAccessibilityElement` makes the element visible or not to the Accessibility API
	- `accessibilityElementsHidden` indicates that the children elements of the target element are visible or not to the Accessibility API
	- `accessibilityViewIsModal` contains the screen reader focus inside the Modal
	- To move screen reader focus to newly revealed content: `UIAccessibilityLayoutChangedNotification`
	- To NOT move focus, but dynamically announce new content: `UIAccessibilityAnnouncementNotification`
- **Android Tips**
	- `importantForAccessibility` makes the element visible to the Accessibility API
	- `android:focusable`
	- `android=clickable`
	- Implement an `onClick( )` event handler for keyboard, not `onTouch( )`
	- `nextFocusDown`
	- `nextFocusUp`
	- `nextFocusRight`
	- `nextFocusLeft`
	- `accessibilityTraversalBefore` (or after)
	- To move screen reader focus to newly revealed content: `Type_View_Focused`
	- To NOT move focus, but dynamically announce new content: `accessibilityLiveRegion`(set to polite or assertive)
	- To hide controls: `Important_For_Accessibility_false`
