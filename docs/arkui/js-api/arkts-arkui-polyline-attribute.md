# Polyline properties/events

In addition to the [universal attributes](arkts-arkui-common-commonmethod-c.md), the following attributes are supported.

**Inheritance/Implementation:** PolylineAttribute extends [CommonShapeMethod<PolylineAttribute>](CommonShapeMethod<PolylineAttribute>)

**Since:** 7

<!--Device-unnamed-declare class PolylineAttribute extends CommonShapeMethod<PolylineAttribute>--><!--Device-unnamed-declare class PolylineAttribute extends CommonShapeMethod<PolylineAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## points

```TypeScript
points(value: Array<any>)
```

Sets the list of coordinates through which the polyline passes. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-PolylineAttribute-points(value: Array<any>): PolylineAttribute--><!--Device-PolylineAttribute-points(value: Array<any>): PolylineAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<any> | Yes | List of coordinates that the polyline passes through. A two-dimensional array is passed, and each subarray indicates the `[x, y]` coordinates of a vertex.<br>Default value: **[]** (empty array)<br>Default unit: vp<br>The **undefined** and **null** values are invalid and treated as the default value. |

