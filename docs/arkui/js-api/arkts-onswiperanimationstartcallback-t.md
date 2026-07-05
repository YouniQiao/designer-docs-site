# OnSwiperAnimationStartCallback

```TypeScript
declare type OnSwiperAnimationStartCallback = (index: number, targetIndex: number, extraInfo: SwiperAnimationEvent) => void
```

切换动画开始时触发的回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 当前显示元素的索引。多列Swiper时，index为最左侧组件的索引。 |
| targetIndex | number | Yes | 切换动画目标元素的索引。 |
| extraInfo | SwiperAnimationEvent | Yes | 动画相关信息，包括主轴方向上当前显示元素和目标元素相对Swiper起始位置的位移，以及离手速度。 |

