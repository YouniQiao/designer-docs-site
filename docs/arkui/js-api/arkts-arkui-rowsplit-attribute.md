# RowSplit properties/events

In addition to the [universal attributes](arkts-arkui-common-commonmethod-c.md), the following attributes are supported.

The [universal events](arkts-arkui-common-commonmethod-c.md) are supported.

**Inheritance/Implementation:** RowSplitAttribute extends [CommonMethod<RowSplitAttribute>](CommonMethod<RowSplitAttribute>)

**Since:** 7

<!--Device-unnamed-declare class RowSplitAttribute extends CommonMethod<RowSplitAttribute>--><!--Device-unnamed-declare class RowSplitAttribute extends CommonMethod<RowSplitAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## resizeable

```TypeScript
resizeable(value: boolean)
```

Sets whether the divider can be dragged.

> The divider of **RowSplit** can change the width of the left and right child components, but only to the  
> extent that the resultant width falls within the maximum and minimum widths of the child components.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RowSplitAttribute-resizeable(value: boolean): RowSplitAttribute--><!--Device-RowSplitAttribute-resizeable(value: boolean): RowSplitAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the divider can be dragged. **true**: The divider can be dragged.**false**: The divider cannot be dragged.<br>Default value: **false**<br>Invalid values are treated as the default value. |

