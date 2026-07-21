# ColumnSplit properties/events

In addition to the [universal attributes](arkts-arkui-commonmethod-c.md), the following attributes are supported.

The [universal events](arkts-arkui-commonmethod-c.md) are supported.

**Inheritance/Implementation:** ColumnSplitAttribute extends [CommonMethod<ColumnSplitAttribute>](CommonMethod<ColumnSplitAttribute>)

**Since:** 7

<!--Device-unnamed-declare class ColumnSplitAttribute extends CommonMethod<ColumnSplitAttribute>--><!--Device-unnamed-declare class ColumnSplitAttribute extends CommonMethod<ColumnSplitAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="divider"></a>
## divider

```TypeScript
divider(value: ColumnSplitDividerStyle | null)
```

Margin of the divider.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ColumnSplitAttribute-divider(value: ColumnSplitDividerStyle | null): ColumnSplitAttribute--><!--Device-ColumnSplitAttribute-divider(value: ColumnSplitDividerStyle | null): ColumnSplitAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ColumnSplitDividerStyle](arkts-arkui-columnsplitdividerstyle-i.md) \| null | Yes | Margin of the divider, that is, the distance between the divider and the child component.<br>Default value: **null**. When this parameter is set to null, the distance between the divider and the child component is 0 vp.<br>Invalid values are treated as the default value. |

<a id="resizeable"></a>
## resizeable

```TypeScript
resizeable(value: boolean)
```

Sets whether the divider can be dragged.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ColumnSplitAttribute-resizeable(value: boolean): ColumnSplitAttribute--><!--Device-ColumnSplitAttribute-resizeable(value: boolean): ColumnSplitAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the divider can be dragged. **true**: The divider can be dragged.**false**: The divider cannot be dragged.<br>Default value: **false**<br>Invalid values are treated as the default value. |

