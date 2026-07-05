# GestureEventListenerCallback

```TypeScript
declare type GestureEventListenerCallback = (event: GestureEvent, node?: FrameNode) => void
```

定义了用于在UIObserver中监听手势的回调类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | GestureEvent | Yes | 触发事件监听的手势事件的相关信息。 |
| node | FrameNode | no |  |

