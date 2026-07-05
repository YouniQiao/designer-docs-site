# OnGetStartIndexByIndexCallback

```TypeScript
declare type OnGetStartIndexByIndexCallback = (targetIndex: int) => StartLineInfo
```

根据指定的目标索引，计算Grid滚动到该位置时页面内对应的起始行，用于支持[scrollToIndex](arkts-scroller-c.md#scrollToIndex)等操作。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| targetIndex | int | Yes | 要滚动到的目标GridItem的索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| StartLineInfo | 用于记录Grid页面内起始行的位置信息。  @systemapi  @stagemodelonly |

