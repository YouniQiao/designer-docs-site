# Row properties/events

In addition to the [universal attributes](arkts-arkui-common-commonmethod-c.md), the following attributes are supported.

The [universal events](arkts-arkui-common-commonmethod-c.md) are supported.

**Inheritance/Implementation:** RowAttribute extends [CommonMethod<RowAttribute>](CommonMethod<RowAttribute>)

**Since:** 7

<!--Device-unnamed-declare class RowAttribute extends CommonMethod<RowAttribute>--><!--Device-unnamed-declare class RowAttribute extends CommonMethod<RowAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignItems

```TypeScript
alignItems(value: VerticalAlign)
```

Sets the alignment mode of child components in the vertical direction.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-RowAttribute-alignItems(value: VerticalAlign): RowAttribute--><!--Device-RowAttribute-alignItems(value: VerticalAlign): RowAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [VerticalAlign](../arkts-apis/arkts-arkui-enums-verticalalign-e.md) | Yes | Alignment mode of child components in the vertical direction.<br>Default value:**VerticalAlign.Center** |

## justifyContent

```TypeScript
justifyContent(value: FlexAlign)
```

Sets the alignment mode of the child components in the horizontal direction.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-RowAttribute-justifyContent(value: FlexAlign): RowAttribute--><!--Device-RowAttribute-justifyContent(value: FlexAlign): RowAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [FlexAlign](../arkts-apis/arkts-arkui-enums-flexalign-e.md) | Yes | Alignment mode of child components in the horizontal direction.<br>Default value:**FlexAlign.Start** |

## reverse

```TypeScript
reverse(isReversed: Optional<boolean>)
```

Sets whether to reverse the horizontal arrangement of child components.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-RowAttribute-reverse(isReversed: Optional<boolean>): RowAttribute--><!--Device-RowAttribute-reverse(isReversed: Optional<boolean>): RowAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isReversed | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether to reverse the horizontal arrangement of child components.<br>Default value: **true**. **true**: Child components are arranged in reverse order horizontally. **false**:Child components are arranged in normal order horizontally. |

