# ArcScrollIndexHandler

```TypeScript
declare type ArcScrollIndexHandler = (start: number, end: number, center: number) => void
```

有子组件划入或划出ArcList显示区域时触发的回调。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | ArcList显示区域内第一个子组件的索引值。 |
| end | number | Yes | ArcList显示区域内最后一个子组件的索引值。 |
| center | number | Yes | ArcList显示区域内中间位置子组件的索引值。 |

