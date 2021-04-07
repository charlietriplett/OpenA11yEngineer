---
layout: entry
title:  "Button"
categories: controls
order: 1

keyboard:
  tab: |
    Focus visibly moves to the button.
  spacebar: |
    Activates the button on iOS and Android
  enter: |
    Activates on Android

          
mobile:
  swipe: |
    Focus moves to the element, expresses its state
  doubletap: |
    Activates the button

name:  |
  Purpose is clear and matches visible label
role:  |
  Identifies as a button in iOS and "double tap to activate" in Android
group: |
  Visible label (if any) is grouped with the button in a single swipe
state: |
  Expresses its state (disabled/dimmed)

---


## Developer Notes
### **Description**
* A button is a control that executes an action or navigates within the app.
* You should use a native button when at all possible vs a custom element, as it will automatically announce correctly without additional development effort.
* ### **Name**
  * Names describes purpose while focus is in/on the control
    * iOS Tips
      * Set a label in Interface builder in the Identity Inspector
      * Group visible text label and the control in the same view container: `accessibilityFrameInContainerSpace`
      * `setTitle( ) method`
      * If no visible label, use`accessibilityLabel` on control
      * `Hint` is used only if the results of interacting with it are not obvious from the control's label.
      * Match visible label, if any
      * To hide visible labels from VoiceOver announcements, uncheck the Accessibility Enabled checkbox in the Identity Inspector or use `isAccessibilityElement=false`
      * If hiding visible label from screen reader, use `accessibilityLabel` on control
    * Android Tips
      * `android:text` XML attribute
      * Optional: use `contentDescription` for a more descriptive name, depending on type of view and for elements without a visible label.
      * `contentDescription` overrides `android:text`
      * Use `labelFor` attribute to connect the visible label to the control
* ### **Role**
  * Role is automatically announced if a native button is used.
    * iOS Tips
      * Use Standard UIButton
      * `buttonTrait`
    * Android Tips
      * Use Standard button or ImageButton
* ### **Grouping**
  * Group visible label with button (if applicable)
    * iOS Tips
      - `accessibilityFrame`
      - `accessibilityFrameInContainerSpace`
      - GroupView
      - Only the container class is an accessible element, `isAccessibilityElement=true` and announces all elements in one announcement  This makes child elements no longer accessible by screen reader.
    * Android Tips
      - ViewGroup
      - Set the container object's `android:screenReaderFocusable attribute=true`, and each inner object's `android:focusable attribute=false`. In doing so, accessibility services can present the inner elements' `contentDescriptions` or names, one after the other, in a single announcement.
* ### **State**
  * States can be selected, dimmed/disabled, on/off.
    * iOS Tips
      - Active: `isEnabled property`
      - Disabled: `UIAccessibilityTraitNotEnabled`
      - Announcement: dimmed
    * Android Tips
      - Active: `android:enabled=true`
      - Disabled: `android:enabled=false`
      - Announcement: disabled
* ### **Focus**
  * Only manage focus when needed.  Primarily, let the device manage default focus order
  * Consider how focus should be managed between child elements and their parent views or containers
    * iOS Tips
      - `accessibilityElementIsFocused`
      - `isAccessibilityElement=true`, makes the element visible to the Accessibility API
      - `accessibilityElementsHidden` indicates that the children elements of the target element are visible or not to the Accessibility API
      - `accessibilityViewIsModal` contains the screen reader focus inside the Modal
      - To move screen reader focus to newly revealed content: `UIAccessibilityLayoutChangedNotification`
      - To NOT move focus, but announce new content: `UIAccessibilityAnnouncementNotification`
    * Android Tips
      - `importantForAccessibility` makes the element visible to the Accessibility API
      - `android:focusable=true`
      - `android=clickable=true`
      - Implement an `onClick( )` event handler for keyboard, not `onTouch( )`
      - `nextFocusDown`
      - `nextFocusUp`
      - `nextFocusRight`
      - `nextFocusLeft`
      - `accessibilityTraversalBefore` (or after)
      - To move screen reader focus to newly revealed content: `Type_View_Focused`
      - To NOT move focus, but announce new content: `accessibilityLiveRegion`
        - Polite or Assertive settings
      - To hide controls: `Important_For_Accessibility_false`
* ### **Actions**
  * For external keyboard and screen reader:
    * iOS Tips
      * Screen reader - to activate:  double tap
      * Keyboard - to focus: tab or arrow keys
      * Keyboard - to activate: space bar
    * Android Tips
      * Screen reader - to activate:  double tap
      * Keyboard - to focus: tab or arrow keys
      * Keyboard - to activate: space bar or enter key
