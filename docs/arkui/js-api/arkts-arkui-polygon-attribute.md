# Polygon properties/events

In addition to the [universal attributes](arkts-arkui-common-commonmethod-c.md), the following attributes are supported.

**Inheritance/Implementation:** PolygonAttribute extends [CommonShapeMethod<PolygonAttribute>](CommonShapeMethod<PolygonAttribute>)

**Since:** 7

<!--Device-unnamed-declare class PolygonAttribute extends CommonShapeMethod<PolygonAttribute>--><!--Device-unnamed-declare class PolygonAttribute extends CommonShapeMethod<PolygonAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## points

```TypeScript
points(value: Array<any>)
```

Sets the vertex coordinates of the polygon. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1). Invalid values are treated as the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-PolygonAttribute-points(value: Array<any>): PolygonAttribute--><!--Device-PolygonAttribute-points(value: Array<any>): PolygonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<any> | Yes | Vertex coordinates of the polygon. A two-dimensional array is passed, and each subarray indicates the `[x, y]` coordinates of a vertex.<br>Default value: **[]** (empty array)<br>Default unit: vp<br>The **undefined** and **null** values are invalid and treated as the default value. |

