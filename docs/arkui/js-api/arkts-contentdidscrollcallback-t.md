# ContentDidScrollCallback

```TypeScript
declare type ContentDidScrollCallback = (selectedIndex: number, index: number, position: number, mainAxisLength: number) => void
```

Swiper滑动时触发的回调，参数可参考[SwiperContentTransitionProxy](arkts-swipercontenttransitionproxy-i.md#SwiperContentTransitionProxy)中的说明。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectedIndex | number | Yes | 当前选中页面的索引。 |
| index | number | Yes | 视窗内页面的索引。 |
| position | number | Yes | 视窗内页面的索引。 |
| mainAxisLength | number | Yes | 视窗内页面的索引。 |

