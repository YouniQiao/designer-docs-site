# OnVisibleIndexesChangeCallback

```TypeScript
declare type OnVisibleIndexesChangeCallback = (start: number, end: number) => void
```

Defines the callback type used in OnVisibleIndexesChange.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-unnamed-declare type OnVisibleIndexesChangeCallback = (start: int, end: int) => void--><!--Device-unnamed-declare type OnVisibleIndexesChangeCallback = (start: int, end: int) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | int | Yes | the first index in visible content. |
| end | int | Yes | the last index in visible content. |

