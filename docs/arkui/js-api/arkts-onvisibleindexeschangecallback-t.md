# OnVisibleIndexesChangeCallback

```TypeScript
declare type OnVisibleIndexesChangeCallback = (start: int, end: int) => void
```

定义onScrollIndex的回调类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | int | Yes | 可见区域的第一个索引号。 |
| end | int | Yes | 可见区域的最后一个索引号。 |

