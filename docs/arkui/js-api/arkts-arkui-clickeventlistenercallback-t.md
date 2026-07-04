# ClickEventListenerCallback

```TypeScript
declare type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void
```

Defines the callback type for listening for click events in **UIObserver**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ClickEvent | Yes | Information about the click event that triggers the callback. |
| node | FrameNode | No | Component bound to the click event. |

