# TextPickerOptions

Defines the configuration options of the text picker.

**Since:** 8

<!--Device-unnamed-declare interface TextPickerOptions--><!--Device-unnamed-declare interface TextPickerOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columnWidths

```TypeScript
columnWidths?: LengthMetrics[]
```

Custom widths for each column.

Default value: Each column has equal width, calculated by dividing the total component width by the number of columns.

**NOTE**

1. Text truncation occurs when content exceeds column width.2. Invalid values are treated as the default value.3. Individual array elements can be **Undefined** or **Null**, but the entire array cannot be **Undefined[]** or **Null[]**.

**Type:** LengthMetrics[]

**Default:** Each column has equal width, calculated by dividing the total component width by the number of columns.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextPickerOptions-columnWidths?: LengthMetrics[]--><!--Device-TextPickerOptions-columnWidths?: LengthMetrics[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## range

```TypeScript
range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]
```

Data selection range of the picker. This parameter cannot be set to an empty array. If it is set to an empty array,no value is displayed. If it is dynamically changed to an empty array, the current valid value remains displayed.

**NOTE**

1. Single-column pickers: string[], [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md),or [TextPickerRangeContent](arkts-arkui-textpickerrangecontent-i.md)[]2. Multi-column independent pickers: string[][]3. Multi-column cascading pickers: [TextCascadePickerRangeContent](arkts-arkui-textcascadepickerrangecontent-i.md)[]4. The Resource type supports only [strarray.json](docroot://quick-start/resource-categories-and-access.md#resource-group-directories).5. The type and number of columns in the range cannot be dynamically modified.

**Type:** string[] \| string[][] \| Resource \| TextPickerRangeContent[] \| TextCascadePickerRangeContent[]

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerOptions-range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]--><!--Device-TextPickerOptions-range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected?: number | number[]
```

Index of the selected item in the data list. The index is zero-based.

Default value: **0**

**NOTE**

1. Single-column pickers: number2. Multi-column pickers: number[]3. Since API version 10, this parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).

**Type:** number \| number[]

**Default:** 0

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerOptions-selected?: number | number[]--><!--Device-TextPickerOptions-selected?: number | number[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value?: ResourceStr | ResourceStr[]
```

Value of the selected item. The priority of this parameter is lower than that of **selected**.

Default value: value of the first item in the data list.

**NOTE**

1. Since API version 10, this parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).2. The [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md) type is supported since API version 20.3. This parameter works only when the picker contains text only.It does not work when the picker contains images or mixed content.4. Single-column pickers: [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md)5. Multi-column pickers: [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md)[]

**Type:** ResourceStr \| ResourceStr[]

**Default:** value of the first item [since 8 - 9]

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextPickerOptions-value?: ResourceStr | ResourceStr[]--><!--Device-TextPickerOptions-value?: ResourceStr | ResourceStr[]-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

