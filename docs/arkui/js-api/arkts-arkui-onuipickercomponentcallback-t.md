# OnUIPickerComponentCallback

```TypeScript
declare type OnUIPickerComponentCallback = (selectedIndex: number) => void
```

Defines the callback types for the [onChange](UIPickerComponentAttribute#onChange) and [onScrollStop](UIPickerComponentAttribute#onScrollStop) events.

Value range: an integer in the range of [0, Number of child components – 1].

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-unnamed-declare type OnUIPickerComponentCallback = (selectedIndex: number) => void--><!--Device-unnamed-declare type OnUIPickerComponentCallback = (selectedIndex: number) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectedIndex | number | Yes | Index of the selected item. |

