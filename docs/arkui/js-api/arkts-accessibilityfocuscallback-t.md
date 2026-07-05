# AccessibilityFocusCallback

```TypeScript
declare type AccessibilityFocusCallback = (isFocus: boolean) => void
```

Defines the callback type used in accessibility focus. The value of isFocus indicates whether the current component is focused

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isFocus | boolean | Yes | if component is focused,isFocus will be true. else isFocus is false. |

