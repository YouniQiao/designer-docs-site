# OnTabsContentWillChangeCallback

```TypeScript
declare type OnTabsContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean
```

自定义Tabs页面切换拦截事件能力，新页面即将显示时触发的回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| currentIndex | number | Yes | 当前显示页面的index索引，索引从0开始计算。 |
| comingIndex | number | Yes | 将要显示的新页面的index索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当回调函数handler的返回值为true时，Tabs可以切换到新页面。 当回调函数handler的返回值为false时，Tabs无法切换到新页面，仍然显示原来页面内容。 |

