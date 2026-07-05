# GetItemMainSizeByIndex

```TypeScript
declare type GetItemMainSizeByIndex = (index: number) => number
```

根据index获取指定Item的主轴大小。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | FlowItem在WaterFlow中的索引。 取值范围：[0, 子节点总数-1] |

**Return value:**

| Type | Description |
| --- | --- |
| number | 指定index的FlowItem的主轴大小，纵向瀑布流时为高度，横向瀑布流时为宽度，单位vp。 |

