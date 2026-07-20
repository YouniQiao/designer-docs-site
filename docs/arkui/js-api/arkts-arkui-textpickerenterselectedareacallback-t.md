# TextPickerEnterSelectedAreaCallback

```TypeScript
declare type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: number | number[]) => void
```

Defines the **onEnterSelectedArea** event callback signature.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-unnamed-declare type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: number | number[]) => void--><!--Device-unnamed-declare type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: number | number[]) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| string[] | Yes | Text of the selected item. Use the array type for multi-column pickers.<br>**NOTE**<br>The return value is a text value for text or mixed content, and an empty string for image-onlycontent. |
| index | number \| number[] | Yes | Index of the selected item. The index is zero-based. Use the array type formulti-column pickers. |

