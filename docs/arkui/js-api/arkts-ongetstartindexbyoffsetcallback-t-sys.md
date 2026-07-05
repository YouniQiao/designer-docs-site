# OnGetStartIndexByOffsetCallback

```TypeScript
declare type OnGetStartIndexByOffsetCallback = (totalOffset: double) => StartLineInfo
```

根据Grid的总偏移量，计算当前页面起始行的位置，用于快速滑动或反向滑动场景。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| totalOffset | double | Yes | 总滚动偏移量，即Grid当中第一个GridItem的顶部与Grid顶部之间的偏移量。 单位：vp |

**Return value:**

| Type | Description |
| --- | --- |
| StartLineInfo | 用于记录Grid页面内起始行的位置信息。  @systemapi  @stagemodelonly |

