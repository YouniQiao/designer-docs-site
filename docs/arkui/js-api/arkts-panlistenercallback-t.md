# PanListenerCallback

```TypeScript
declare type PanListenerCallback = (event: GestureEvent, current: GestureRecognizer, node?: FrameNode) => void
```

Pan手势事件监听函数类型。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | GestureEvent | Yes | 触发事件监听的手势事件的相关信息。 |
| current | GestureRecognizer | Yes | 触发事件监听的手势识别器的相关信息。 |
| node | FrameNode | no |  |

