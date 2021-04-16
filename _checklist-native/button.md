---
layout: entry
title:  "Button"
categories: controls


keyboard:
  tab and arrow keys: |
    Focus visibly moves to the button
  spacebar: |
    Activates the button on iOS and Android
  enter: |
    Activates the button on Android

name:  |
  Purpose is clear and matches any visible label
role:  |
  Identifies itself as a button and "double tap to activate" in Android
group: |
  Visible label (if any) is grouped or associated with the button in a single swipe
state: |
  Expresses its state (disabled/dimmed)
          
mobile:
  swipe: |
    Focus moves to the element, expresses its state, if applicable
  doubletap: |
    Activates the button

---


## Developer Notes

- A button is a control that executes an action or navigates within the app
- Use a native button when at all possible vs a custom element, as it will automatically announce the role correctly without additional development effort

### Name

- Name describes purpose while focus is in/on the control
- Best practice is to not include "button" in the name

- **iOS Tips**
	- Set a label in Interface Builder in the Identity Inspector
	- Group visible text label and the control in the same view container: `accessibilityFrameInContainerSpace`
	- `setTitle( )` method
	- If no visible label, use `accessibilityLabel` on control
	- `Hint` is used only if the results of interacting with it are not obvious from the control's label.
	- Match visible label, if any
	- To hide labels from VoiceOver announcements, uncheck the Accessibility Enabled checkbox in the Identity Inspector or use `isAccessibilityElement=false`
	- If hiding visible label, use accessibilityLabel on control
- **Android Tips**  
	- `android:text` XML attribute
	- Optional: use `contentDescription` for a more descriptive name, depending on type of view and for elements without a visible label.
	- `contentDescription` overrides `android:text`  
	- Use `labelFor` attribute to connect the visible label to the control

### Role

- Role is automatically announced if a native button is used

- **iOS Tips**
	- Standard UIButton
	- `buttonTrait`
- **Android Tips**
	- Standard button or Image Button

### Groupings

- Group visible label with button (if label is visible)

- **iOS Tips**
	- `accessibilityFrame
	- `accessibilityFrameInContainerSpace`
	- GroupView
	- Only the container class is an accessible element `isAccessibilityElement=true` and announces all elements in one announcement  This makes child elements no longer accessible by screen reader 
- **Android Tips**
	- ViewGroup
	- Set the container object's `android:screenReaderFocusable` attribute to true, and each inner object's `android:focusable` attribute to false. In doing so, accessibility services can present the inner elements' `contentDescription` or names, one after the other, in a single announcement

### State

- States can be selected, dimmed/disabled, on/off

- **iOS Tips**  
	- Active: `isEnabled property`
	- Disabled: `UIAccessibilityTraitNotEnabled`
	- Announcement: dimmed  
        
- **Android Tips**
	- Active: `android:enabled=true`
	- Disabled: `android:enabled=false`
	- Announcement: disabled

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

### Actions

- For external Bluetooth keyboard and screen reader
- **iOS Tips**
	- Screen reader -to activate: double tap
	- Keyboard - to focus: tab or arrow keys
	- Keyboard - to activate: space bar
- **Android Tips**
	- Screen reader -to activate: double tap
	- Keyboard - to focus: tab or arrow keys
	- Keyboard - to activate: space bar or enter key
