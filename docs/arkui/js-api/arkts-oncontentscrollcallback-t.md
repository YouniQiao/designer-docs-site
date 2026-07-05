# OnContentScrollCallback

```TypeScript
declare type OnContentScrollCallback = (totalOffsetX: number, totalOffsetY: number) => void
```

文本内容滚动回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| totalOffsetX | number | Yes | 文本在内容区的横坐标偏移，单位px。 |
| totalOffsetY | number | Yes | 文本在内容区的纵坐标偏移，单位px。 |

