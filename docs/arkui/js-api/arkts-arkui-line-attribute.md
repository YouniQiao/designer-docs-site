# Line properties/events

In addition to the [universal attributes](arkts-arkui-common-commonmethod-c.md), the following attributes are supported.

**Inheritance/Implementation:** LineAttribute extends [CommonShapeMethod<LineAttribute>](CommonShapeMethod<LineAttribute>)

**Since:** 7

<!--Device-unnamed-declare class LineAttribute extends CommonShapeMethod<LineAttribute>--><!--Device-unnamed-declare class LineAttribute extends CommonShapeMethod<LineAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endPoint

```TypeScript
endPoint(value: Array<any>)
```

Sets the coordinates (relative coordinates) of the end point of the line. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1). Invalid values are treated as the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-LineAttribute-endPoint(value: Array<any>): LineAttribute--><!--Device-LineAttribute-endPoint(value: Array<any>): LineAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<any> | Yes | Coordinates (relative coordinates) of the end point of the line, in vp.<br>Default value: **[0, 0]**<br>The **undefined** and **null** values are treated as the default value. |

## startPoint

```TypeScript
startPoint(value: Array<any>)
```

Sets the coordinates (relative coordinates) of the start point of the line. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1). Invalid values are treated as the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-LineAttribute-startPoint(value: Array<any>): LineAttribute--><!--Device-LineAttribute-startPoint(value: Array<any>): LineAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<any> | Yes | Coordinates (relative coordinates) of the start point of the line, in vp.<br>Default value: **[0, 0]**<br>The **undefined** and **null** values are treated as the default value. |

