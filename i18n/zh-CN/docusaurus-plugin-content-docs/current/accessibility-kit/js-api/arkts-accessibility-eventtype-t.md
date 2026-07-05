# EventType

```TypeScript
type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' | 
  'announceForAccessibilityNotInterrupt' | 'scrolling' | 'pageActive' | 'notificationUpdate' | 'focusInvisible'
```

Accessibility event types.

**起始版本：** 7

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

| 类型 | 说明 |
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
| 'textSelectionUpdate' | Event indicating that the selected text has been updated. Not supported  currently. |
| 'scroll' | Event of the scroll view. |
| 'requestFocusForAccessibility' | Event of the auto-focusing. [since 12] |
| 'announceForAccessibility' | Event of the auto-broadcasting. [since 12] |
| 'requestFocusForAccessibilityNotInterrupt' | Event of the auto-focusing without  interruption. [since 18] |
| 'announceForAccessibilityNotInterrupt' | Event of the auto-broadcasting without  interruption. [since 18] |
| 'scrolling' | Event indicating that an item is scrolled out of the screen in the scrolling  view. [since 18] |
| 'pageActive' | Event indicating that a page changes. The value is fixed at 'pageActive'  . [since 23] |
| 'notificationUpdate' | Event indicating that a notification changes. The value is fixed at  'notificationUpdate'. [since 26.0.0] |
| 'focusInvisible' | [since 26.0.0] |

