# Action

```TypeScript
type Action = 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
  'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
  'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' |
  'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common' | 'injectAction' | 'executeCustomAction'
```

Target actions supported by the application. The target actions for which parameters need to be set have been
specified in the description of the following table.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

| Type | Description |
| --- | --- |
| 'accessibilityFocus' | Obtain an accessibility focus. |
| 'clearAccessibilityFocus' | Clear an accessibility focus. |
| 'focus' | Obtain a focus. |
| 'clearFocus' | Clear a focus. |
| 'clearSelection' | Clear selection. Not supported yet. |
| 'click' | Click. |
| 'longClick' | Long press. |
| 'cut' | Cut. |
| 'copy' | Copy. |
| 'paste' | Paste. |
| 'select' | Select. |
| 'setText' | Set text. You need to set the **setText** parameter. |
| 'delete' | Delete. Not supported yet. |
| 'scrollForward' | Scroll forward. |
| 'scrollBackward' | Scroll backward. |
| 'setSelection' | Select. You need to set the **selectTextBegin**, **selectTextEnd** and**selectTextInForWard** parameters. |
| 'setCursorPosition' | Set cursor location. You need to set the **offset** parameter. [since 12] |
| 'home' | Return to the home screen. [since 12] |
| 'back' | Return to the previous screen. [since 12] |
| 'recentTask' | Open a recent task. [since 12] |
| 'notificationCenter' | Open the notification bar. [since 12] |
| 'controlCenter' | Open the control center. [since 12] |
| 'common' | Common actions used in auto-focusing and auto-broadcasting. [since 12] |
| 'injectAction' | Injection action. The **injectActionType** parameter must be set. [since 26.0.0] |
| 'executeCustomAction' | [since 26.0.0] |

