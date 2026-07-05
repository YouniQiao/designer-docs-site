# OnTabsGestureSwipeCallback

```TypeScript
declare type OnTabsGestureSwipeCallback = (index: number, extraInfo: TabsAnimationEvent) => void
```

在页面跟手滑动过程中，逐帧触发的回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 当前显示元素的索引，索引从0开始。 取值范围：[0, 索引值-1] |
| extraInfo | TabsAnimationEvent | Yes | 动画相关信息，只返回主轴方向上当前显示元素相对于Tabs起始位置的位移。 |

