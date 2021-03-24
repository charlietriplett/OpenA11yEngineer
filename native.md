---
layout: checklist-native
title: Native App Accessibility Checklist
permalink: /native/
---
#**Button**

| ##**Button** |                                                              |
| :----------- | :----------------------------------------------------------- |
| **Name**     | Purpose is clear and matches any visible label               |
| **Role**     | Identifies itself as a button and "double tap to activate" in Android |
| **Grouping** | Visible label (if any) is grouped or associated with the button in a single swipe |
| **State**    | Express its state:  disabled/dimmed                          |
| **Focus**    | Visibly focusable with tab key or arrows \| swipe            |
| **Device**   | Keyboard: Enter, space bar \| Screen reader: Double tap      |

##   

##                               

#**Expanded criteria**

##**Description:**

* A button is a control that executes an action or navigates within the app.

* You should use a native button when at all possible vs a custom element, as it will automatically announce correctly without additional development effort.


* ##**Name** 

  * Names describes purpose while focus is in/on the control

    * iOS Tips

      * Set a label in Interface builder in the Identity Inspector

      * Group visible text label and the control in the same view container: `accessibilityFrameInContainerSpace`

      * `setTitle( ) method`

      * If no visible label, use`accessibilityLabel` on control

      * `Hint` is used only if the results of interacting with it are not obvious from the control's label.

      * Match visible label, if any

      * To hide labels from VoiceOver announcements, uncheck the Accessibility Enabled checkbox in the Identity Inspector or use `isAccessibilityElement=false`

      * If hiding visible label from screen reader, use `accessibilityLabel` on control        

    * Android Tips

      * `android:text` XML attribute

      * Optional: use `contentDescription` for a more descriptive name, depending on type of view and for elements without a visible label.

      * `contentDescription` overrides `android:text` 

      * Use `labelFor` attribute to connect the visible label to the control

        

* ##**Role**

  * Role is automatically announced if a native button is used.  

    * iOS Tips

      * Use Standard UIButton

      * `buttonTrait`
             

    * Android Tips

      * Use Standard button or ImageButton



