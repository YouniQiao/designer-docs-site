# MenuCallback

```TypeScript
declare type MenuCallback = (start: number, end: number) => void
```

自定义选择菜单显示或隐藏时触发的回调事件。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | 选中内容的起始位置。 |
| end | number | Yes | 选中内容的终止位置。 |

