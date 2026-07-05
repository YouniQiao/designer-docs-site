# OnTabsAnimationEndCallback

```TypeScript
declare type OnTabsAnimationEndCallback = (index: number, extraInfo: TabsAnimationEvent) => void
```

切换动画结束时触发的回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 当前显示元素的索引，索引从0开始。 |
| extraInfo | TabsAnimationEvent | Yes | 动画相关信息，只返回主轴方向上当前显示元素相对于Tabs起始位置的位移。 |

