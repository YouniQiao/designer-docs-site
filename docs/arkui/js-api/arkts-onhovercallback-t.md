# OnHoverCallback

```TypeScript
declare type OnHoverCallback = (status: boolean, event: HoverEvent) => void
```

鼠标悬浮触发回调。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | boolean | Yes | 表示鼠标是否悬浮在组件上，鼠标进入组件时为true，离开组件时为false。 |
| event | HoverEvent | Yes | 设置悬浮事件。 |

