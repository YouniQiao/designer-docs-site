# Shape properties/events

In addition to the [universal attributes](arkts-arkui-commonmethod-c.md), the following attributes are supported.

**Inheritance/Implementation:** ShapeAttribute extends [CommonMethod<ShapeAttribute>](CommonMethod<ShapeAttribute>)

**Since:** 7

<!--Device-unnamed-declare class ShapeAttribute extends CommonMethod<ShapeAttribute>--><!--Device-unnamed-declare class ShapeAttribute extends CommonMethod<ShapeAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="antialias"></a>
## antiAlias

```TypeScript
antiAlias(value: boolean)
```

Sets whether to enable anti-aliasing. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-antiAlias(value: boolean): ShapeAttribute--><!--Device-ShapeAttribute-antiAlias(value: boolean): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable anti-aliasing.<br>**true**: enable anti-aliasing; **false**: disable anti-aliasing.<br>Default value: **true**<br>Invalid values **undefined** and **null** are treated as **false**. |

<a id="fill"></a>
## fill

```TypeScript
fill(value: ResourceColor)
```

Sets the color of the fill area. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1). Invalid values are treated as the default value. If this attribute and the universal attribute **foregroundColor** are both set, whichever is set later takes effect.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-fill(value: ResourceColor): ShapeAttribute--><!--Device-ShapeAttribute-fill(value: ResourceColor): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Color of the fill area.<br>Default value: [Color](../arkts-apis/arkts-arkui-color-e.md).Black<br>The **undefined**, **null**, **NaN**, and **Infinity** values are invalid and treated as the default value. |

<a id="fillopacity"></a>
## fillOpacity

```TypeScript
fillOpacity(value: number | string | Resource)
```

Sets the opacity of the fill area. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-fillOpacity(value: number | string | Resource): ShapeAttribute--><!--Device-ShapeAttribute-fillOpacity(value: number | string | Resource): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Opacity of the fill area.<br>**NOTE**<br>For the number type, the value range is [0.0, 1.0]. A value less than 0.0 is treated as **0.0**. A value greater than 1.0 is treated as **1.0**. Any other invalid value is treated as **1.0**.<br>For the string type, the value is a character string of the number type. The value range is the same as that of the number type.<br>For the Resource type, the value is a character string from the system resource or application resource. The value range is the same as that of the number type.<br>Default value: **1.0** |

<a id="mesh"></a>
## mesh

```TypeScript
mesh(value: Array<any>, column: number, row: number)
```

Sets the mesh effect. An image is divided into (row + 1) × (column + 1) meshes. The coordinates of each mesh intersection point are stored in the array. (Every two elements indicate the x and y coordinates of an intersection point.) The mesh vertex position is relocated based on the coordinates in the array value to implement partial image distortion. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

> **NOTE**  
>  
> **mesh** takes effect only when a **pixelMap** object is passed to the shape, and the effect applies to the  
> passed **pixelMap** object. It produces the same result as  
> [drawPixelMapMesh<sup>12+</sup>](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-drawing-canvas-c.md#drawpixelmapmesh-1) in the  
> [drawing module](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-drawing.md). It is recommended that you use  
> **drawPixelMapMesh**.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-mesh(value: Array<any>, column: number, row: number): ShapeAttribute--><!--Device-ShapeAttribute-mesh(value: Array<any>, column: number, row: number): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;any&gt; | Yes | Array with a length of (row + 1) × (column + 1) × 2, which records the position of each vertex of the distorted bitmap.<br>Invalid values **undefined** and **null** are treated as an empty array. If the value is set to an empty array, the values of **column** and **row** are handled as **0**, and the value is handled as an empty array. |
| column | number | Yes | Number of mesh matrix columns.<br>If the value is **undefined**, **null**, **NaN**, or **Infinity**, the values of **column** and **row** are treated as **0**, and the value of **value** is treated as an empty array. |
| row | number | Yes | Number of mesh matrix rows.<br>If the value is **undefined**, **null**, **NaN**, or **Infinity**, the values of **column** and **row** are treated as **0**, and the value of **value** is treated as an empty array. |

<a id="stroke"></a>
## stroke

```TypeScript
stroke(value: ResourceColor)
```

Sets the stroke color. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1). If this attribute is not set, the default stroke opacity is **0**, meaning no stroke is displayed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-stroke(value: ResourceColor): ShapeAttribute--><!--Device-ShapeAttribute-stroke(value: ResourceColor): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Stroke color.<br>Default value: [Color](../arkts-apis/arkts-arkui-color-e.md).Transparent<br>Invalid values **undefined** and **null** values are treated as the default value, and invalid values **NaN** and **Infinity** are treated as [Color](../arkts-apis/arkts-arkui-color-e.md).Black. |

<a id="strokedasharray"></a>
## strokeDashArray

```TypeScript
strokeDashArray(value: Array<any>)
```

Sets the stroke dashes. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1). The value must be greater than or equal to 0. Invalid values are treated as the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-strokeDashArray(value: Array<any>): ShapeAttribute--><!--Device-ShapeAttribute-strokeDashArray(value: Array<any>): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;any&gt; | Yes | Array defining the dash pattern for the shape outline. Elements alternate between dash length and gap length.<br>Default value: **[]** (empty array)<br>Default unit: vp<br>The **undefined** and **null** values are invalid and treated as the default value.<br>**NOTE**<br>Empty array: solid line<br>Even-numbered array: Elements cycle sequentially, for example, [a, b, c, d] represents: dash a -> gap b -> dash c ->gap d -> dash a -> ...<br>Odd-numbered array: Elements are duplicated to create an even-numbered array, for example, [a, b, c] becomes [a, b, c, a, b, c], representing: dash a -> gap b -> dash c -> gap a -> dash b ->gap c -> dash a -> ... |

<a id="strokedashoffset"></a>
## strokeDashOffset

```TypeScript
strokeDashOffset(value: Length)
```

Sets the offset of the start point for drawing the stroke. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1). Invalid values are treated as the default value.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-strokeDashOffset(value: Length): ShapeAttribute--><!--Device-ShapeAttribute-strokeDashOffset(value: Length): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Offset of the start point for drawing the stroke.<br>Default value: **0**<br>Default unit: vp<br>Invalid values **undefined** and **null** are treated as the default value. If set to **NaN** or **Infinity**, **strokeDashArray** has no effect.<br>**Since:** 20 |

<a id="strokelinecap"></a>
## strokeLineCap

```TypeScript
strokeLineCap(value: LineCapStyle)
```

Sets the cap style of the stroke. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-strokeLineCap(value: LineCapStyle): ShapeAttribute--><!--Device-ShapeAttribute-strokeLineCap(value: LineCapStyle): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LineCapStyle](../arkts-apis/arkts-arkui-linecapstyle-e.md) | Yes | Cap style of the stroke.<br>Default value: **LineCapStyle.Butt**<br>The **undefined**, **null**, **NaN**, and **Infinity** values are invalid and treated as the default value. |

<a id="strokelinejoin"></a>
## strokeLineJoin

```TypeScript
strokeLineJoin(value: LineJoinStyle)
```

Sets the join style of the stroke. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-strokeLineJoin(value: LineJoinStyle): ShapeAttribute--><!--Device-ShapeAttribute-strokeLineJoin(value: LineJoinStyle): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LineJoinStyle](../arkts-apis/arkts-arkui-linejoinstyle-e.md) | Yes | Join style of the stroke.<br>Default value: **LineJoinStyle.Miter**<br>The **undefined**, **null**, **NaN**, and **Infinity** values are invalid and treated as the default value. |

<a id="strokemiterlimit"></a>
## strokeMiterLimit

```TypeScript
strokeMiterLimit(value: Length)
```

Sets the limit on the ratio of the miter length to the value of stroke width used to draw a miter join. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1). The miter length indicates the distance from the outer tip to the inner corner of the miter. The border width is the value of **strokeWidth**. This attribute works only when **strokeLineJoin** is set to **LineJoinStyle.Miter**.

The value must be greater than or equal to 1.0. If the value is in the [0, 1) range, the value **1.0** will be used. In other cases, the default value will be used.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-strokeMiterLimit(value: Length): ShapeAttribute--><!--Device-ShapeAttribute-strokeMiterLimit(value: Length): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Limit on the ratio of the miter length to the value of **strokeWidth** used to draw a miter join.<br>Default value: **4**<br>The **undefined**, **null**, and **NaN** values are invalid and treated as the default value. If set to **Infinity**, **stroke** has no effect.<br>**Since:** 20 |

<a id="strokeopacity"></a>
## strokeOpacity

```TypeScript
strokeOpacity(value: number | string | Resource)
```

Sets the stroke opacity. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1). The value range is [0.0, 1.0]. If the set value is less than 0.0, **0.0** will be used. If the set value is greater than 1.0, **1.0** will be used.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-strokeOpacity(value: number | string | Resource): ShapeAttribute--><!--Device-ShapeAttribute-strokeOpacity(value: number | string | Resource): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Stroke opacity.<br>Default value: opacity set by the [stroke](docroot://reference/apis-arkui/arkui-ts/ts-drawing-components-shape.md#stroke) API<br>Invalid value **NaN** is treated as **0.0**, while invalid values **undefined**, **null**, and **Infinity** are treated as **1.0**. |

<a id="strokewidth"></a>
## strokeWidth

```TypeScript
strokeWidth(value: Length)
```

Sets the stroke width. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1). If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-strokeWidth(value: Length): ShapeAttribute--><!--Device-ShapeAttribute-strokeWidth(value: Length): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Stroke width. The value must be greater than or equal to 0.<br>Default value: **1**<br>Default unit: vp<br>Invalid values **undefined**, **null**, and **NaN** are treated as the default value, and invalid value **Infinity** is treated as **0**.<br>**Since:** 20 |

<a id="viewport"></a>
## viewPort

```TypeScript
viewPort(value: ViewportRect)
```

Sets the viewport of the shape.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-ShapeAttribute-viewPort(value: ViewportRect): ShapeAttribute--><!--Device-ShapeAttribute-viewPort(value: ViewportRect): ShapeAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ViewportRect](arkts-arkui-viewportrect-i.md) | Yes | Options of the viewport.<br>Default value: **{}**<br>The **undefined** and **null** values are invalid and treated as the default value.<br>**Since:** 18 |

