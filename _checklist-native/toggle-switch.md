
---
layout: entry
title:  "Toggle switch"
categories: controls

keyboard:
  tab: |
    Focus visibly moves to the switch
  spacebar: |
    Toggles the switch between states
      
mobile:
  swipe: |
    Focus moves to the element, expresses its state
  doubletap: |
    Element toggles between states.

screenreader:
  name:  |
    Input label and purpose is clear
  role:  |
    Identifies itself as a switch, toggle button or checkbox
  group: |
    Each switch has an associated label
  state: |
    Expresses its state (on/off, checked/unchecked, disabled/dimmed)

---
## Developer Notes

-   Switch or Toggle Button - A switch is a visual toggle between two mutually exclusive states — on and off
-   You should use a native switch rather than a custom element because it will announce the correct built-in screen reader announcements for free.

### Name

Name describes the purpose of the control

- **iOS Options**
	- Set a label in Interface Builder in the Identity Inspector
	-   Group visible text label and the control in the same view container: accessibilityFrameInContainerSpace
	-   setTitle( ) method
	-   If no visible label, use accessibilityLabel on control
	-   Hint is used only if the results of interacting with it are not obvious from the control's label.
	-   Match visible label, if any
	-   To hide labels from VoiceOver announcements, uncheck the Accessibility Enabled checkbox in the Identity Inspector
	-   If hiding visible label, use accessibilityLabel on control
-   **Android Options**  
	-   android:text XML attribute
	-   Optional: use contentDescription for a more descriptive name, depending on type of view and for elements without a visible label.
	-   contentDescription overrides android:text  
	-   Use labelFor attribute to connect the visible label to the control

### Role

-   **iOS**
	-   Standard UISwitchControl
-   **Android**
	-   Standard Switch or Toggle Button

### Groupings

-   Group visible label with switch
-   **iOS**
	-   accessibilityFrame
	-   accessibilityFrameInContainerSpace
	-   GroupView
	-   Only the container class is an accessible element
-   **Android**
	-   ViewGroup
	-   Set the container object's android:screenReaderFocusable attribute to true, and each inner object's android:focusable attribute to false. In doing so, accessibility services can present the inner elements' content descriptions/names, one after the other, in a single announcement

### State

-   **iOS**  
	-   Active: isEnabled property
	-   Disabled: UIAccessibilityTraitNotEnabled
	-   on/off: isOn or setOn
	-   Announcement: on/off  
        
-   **Android**
	-   Active: android:enabled=true
	-   Disabled: android:enabled=false
	-   on/off: isChecked, setChecked, toggle
	-   Announcement: on/off

### Focus

- Only manage focus when needed. Primarily, let the device manage default focus.  
- Consider how focus should be managed between child elements and their parent views.

-   **iOS Options**
	-   accessibilityElementIsFocused  
	-   isAccessibilityElement - Yes, if the element can respond to user input
	-   To move screen reader focus to newly revealed content: UIAccessibilityLayoutChangedNotification
	-   To NOT move focus, but announce new content: UIAccessibilityAnnouncementNotification
-   **Android Options**
	- android:focusable=true
	-   android=clickable=true
	-   Implement an onClick( ) event handler for keyboard, not onTouch( )
	-   nextFocusDown
	-   nextFocusUp
	-   nextFocusRight
	-   nextFocusLeft
	-   accessibilityTraversalBefore (or after)
	-   To move screen reader focus to newly revealed content: Type_View_Focused
	-   To NOT move focus, but announce new content: accessibilityLiveRegion
	-   To hide controls: Important_For _Accessibility_NO

### Actions

-   **iOS**
    -   To toggle: double tap
-   **Android**
    -   To toggle: double tap

