# EventType

```TypeScript
type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' | 
  'announceForAccessibilityNotInterrupt' | 'scrolling' | 'pageActive' | 'notificationUpdate' | 'focusInvisible'
```

Accessibility event types.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-accessibility-type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' | 
  'announceForAccessibilityNotInterrupt' | 'scrolling' | 'pageActive' | 'notificationUpdate' | 'focusInvisible'--><!--Device-accessibility-type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' | 
  'announceForAccessibilityNotInterrupt' | 'scrolling' | 'pageActive' | 'notificationUpdate' | 'focusInvisible'-End-->

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

| Type | Description |
| --- | --- |
| 'accessibilityFocus' | Event indicating that the accessibility focus is obtained. |
| 'accessibilityFocusClear' | Event indicating that the accessibility focus is cleared. |
| 'click' | Event of clicking a component. |
| 'longClick' | Event indicating that the component is long pressed. |
| 'focus' | Event indicating that the component obtains the focus. Not supported currently. |
| 'select' | Event of selecting a component. |
| 'hoverEnter' | Event indicating that the hover enters a component. |
| 'hoverExit' | Event indicating that the hover exits a component. |
| 'textUpdate' | Event indicating that the component text has been updated. |
| 'textSelectionUpdate' | Event indicating that the selected text has been updated. Not supportedcurrently. |
| 'scroll' | Event of the scroll view. |
| 'requestFocusForAccessibility' | Event of the auto-focusing. [since 12] |
| 'announceForAccessibility' | Event of the auto-broadcasting. [since 12] |
| 'requestFocusForAccessibilityNotInterrupt' | Event of the auto-focusing withoutinterruption. [since 18] |
| 'announceForAccessibilityNotInterrupt' | Event of the auto-broadcasting withoutinterruption. [since 18] |
| 'scrolling' | Event indicating that an item is scrolled out of the screen in the scrollingview. [since 18] |
| 'pageActive' | Event indicating that a page changes. The value is fixed at **'pageActive'**. [since 23] |
| 'notificationUpdate' | Event indicating that a notification changes. The value is fixed at**'notificationUpdate'**. [since 26.0.0] |
| 'focusInvisible' | [since 26.0.0] |

