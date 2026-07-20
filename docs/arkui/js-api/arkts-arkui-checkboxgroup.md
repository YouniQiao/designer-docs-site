# CheckboxGroup

The **CheckboxGroup** component is used to select or deselect all check boxes in a group.

> **NOTE**

## Child Components

Not supported

## CheckboxGroup

```TypeScript
CheckboxGroup(options?: CheckboxGroupOptions)
```

Creates a check box group for controlling the select-all or deselect-all state of check boxes within the group.Check boxes and check box groups with the same **group** value belong to the same group.

When this API is used with components that come with the caching mechanism, such as the [List]{@link list}component, those check boxes that have not been created yet need to be manually selected or unselected. For details, see [Example 4](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkboxgroup.md#example-4-implementing-the-select-all-functionality).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CheckboxGroupInterface-(options?: CheckboxGroupOptions): CheckboxGroupAttribute--><!--Device-CheckboxGroupInterface-(options?: CheckboxGroupOptions): CheckboxGroupAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CheckboxGroupOptions | No | Check box group parameters. |

## Summary

- [CheckBoxGroupConfiguration](arkts-arkui-checkboxgroup-checkboxgroupconfiguration-i.md)
- [CheckboxGroupOptions](arkts-arkui-checkboxgroup-checkboxgroupoptions-i.md)
- [CheckboxGroupResult](arkts-arkui-checkboxgroup-checkboxgroupresult-i.md)
- [OnCheckboxGroupChangeCallback](arkts-arkui-checkboxgroup-oncheckboxgroupchangecallback-t.md)
- [SelectStatus](arkts-arkui-checkboxgroup-selectstatus-e.md)
