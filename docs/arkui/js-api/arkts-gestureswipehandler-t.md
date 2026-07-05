# GestureSwipeHandler

```TypeScript
declare type GestureSwipeHandler = (index: number, event: SwiperAnimationEvent) => void
```

在页面跟手滑动过程中，逐帧触发的回调。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 当前显示元素的索引。 |
| event | SwiperAnimationEvent | Yes | 动画相关信息，只返回主轴方向上当前显示元素相对于ArcSwiper起始位置的位移。 |

