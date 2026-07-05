# HoverCallback

```TypeScript
declare type HoverCallback = (isHover: boolean, event: HoverEvent) => void
```

hover事件的回调类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isHover | boolean | Yes | 是否处于hover状态，true表示处于hover状态，false表示不在hover状态。 |
| event | HoverEvent | Yes | 获取鼠标或手写笔悬浮的位置坐标。 |

