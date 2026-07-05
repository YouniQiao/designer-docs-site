# OnUIPickerComponentCallback

```TypeScript
declare type OnUIPickerComponentCallback = (selectedIndex: number) => void
```

定义[onChange](arkts-uipickercomponentattribute-c.md#onChange)和 [onScrollStop](arkts-uipickercomponentattribute-c.md#onScrollStop)事件的回调类型。 取值范围：[0, 子组件的个数-1]内的整数。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectedIndex | number | Yes | 当前选中项的索引值。 |

