# ClickEventListenerCallback

```TypeScript
declare type ClickEventListenerCallback = (event: ClickEvent, node?: FrameNode) => void
```

定义了用于在UIObserver中监听点击事件的回调类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ClickEvent | Yes | 触发事件监听的点击事件的相关信息。 |
| node | FrameNode | no |  |

