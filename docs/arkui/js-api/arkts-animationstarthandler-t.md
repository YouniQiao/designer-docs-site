# AnimationStartHandler

```TypeScript
declare type AnimationStartHandler = (index: number, targetIndex: number, event: SwiperAnimationEvent) => void
```

切换动画开始时的回调。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 当前显示元素的索引，动画开始前的index值（不是最终结束动画的index值）。 |
| targetIndex | number | Yes | 切换动画目标元素的索引。 |
| event | SwiperAnimationEvent | Yes | 动画相关信息，包括主轴方向上当前显示元素和目标元素相对ArcSwiper起始位置的位移，以及离手速度。 |

