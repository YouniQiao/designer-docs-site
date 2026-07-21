# CommonShapeMethod

CommonShapeMethod

**Inheritance/Implementation:** CommonShapeMethod extends [CommonMethod<T>](CommonMethod<T>)

**Since:** 11

<!--Device-unnamed-declare class CommonShapeMethod<T> extends CommonMethod<T>--><!--Device-unnamed-declare class CommonShapeMethod<T> extends CommonMethod<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="antialias"></a>
## antiAlias

```TypeScript
antiAlias(value: boolean): T
```

Specifies whether anti-aliasing is enabled.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-antiAlias(value: boolean): T--><!--Device-CommonShapeMethod-antiAlias(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether anti-aliasing is enabled.true: Anti-aliasing is enabled.false: Anti-aliasing is disabled.Default value: true |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="fill"></a>
## fill

```TypeScript
fill(value: ResourceColor): T
```

Sets the color of the fill area.An invalid value is handled as the default value.If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-fill(value: ResourceColor): T--><!--Device-CommonShapeMethod-fill(value: ResourceColor): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Color of the fill area. Default value: Color.Black. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="fillopacity"></a>
## fillOpacity

```TypeScript
fillOpacity(value: number | string | Resource): T
```

Sets the opacity of the fill area.The value range is [0.0, 1.0].A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.Any other value evaluates to the value 1.0.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-fillOpacity(value: number | string | Resource): T--><!--Device-CommonShapeMethod-fillOpacity(value: number | string | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Opacity of the fill area. Default value: 1 |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="stroke"></a>
## stroke

```TypeScript
stroke(value: ResourceColor): T
```

Sets the stroke color.If this attribute is not set, the component does not have any stroke.If the value is invalid, no stroke will be drawn.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-stroke(value: ResourceColor): T--><!--Device-CommonShapeMethod-stroke(value: ResourceColor): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Stroke color. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="strokedasharray"></a>
## strokeDashArray

```TypeScript
strokeDashArray(value: Array<any>): T
```

Sets stroke dashes.The value must be greater than or equal to 0. Invalid values are treated as the default value.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-strokeDashArray(value: Array<any>): T--><!--Device-CommonShapeMethod-strokeDashArray(value: Array<any>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;any&gt; | Yes | Stroke dashes.Default value: []Default unit: vp |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="strokedashoffset"></a>
## strokeDashOffset

```TypeScript
strokeDashOffset(value: number | string): T
```

Sets the offset of the start point for drawing the stroke.An invalid value is handled as the default value.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-strokeDashOffset(value: number | string): T--><!--Device-CommonShapeMethod-strokeDashOffset(value: number | string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Offset of the start point for drawing the stroke.Default value: 0Default unit: vp |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="strokelinecap"></a>
## strokeLineCap

```TypeScript
strokeLineCap(value: LineCapStyle): T
```

Sets the cap style of the stroke.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-strokeLineCap(value: LineCapStyle): T--><!--Device-CommonShapeMethod-strokeLineCap(value: LineCapStyle): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LineCapStyle](../arkts-apis/arkts-arkui-linecapstyle-e.md) | Yes | Cap style of the stroke. Default value: LineCapStyle.Butt |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="strokelinejoin"></a>
## strokeLineJoin

```TypeScript
strokeLineJoin(value: LineJoinStyle): T
```

Sets the join style of the stroke.This attribute does not work for the Circle component, which does not have corners.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-strokeLineJoin(value: LineJoinStyle): T--><!--Device-CommonShapeMethod-strokeLineJoin(value: LineJoinStyle): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LineJoinStyle](../arkts-apis/arkts-arkui-linejoinstyle-e.md) | Yes | Join style of the stroke. Default value: LineJoinStyle.Miter |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="strokemiterlimit"></a>
## strokeMiterLimit

```TypeScript
strokeMiterLimit(value: number | string): T
```

Limits for drawing acute angles as bevels

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-strokeMiterLimit(value: number | string): T--><!--Device-CommonShapeMethod-strokeMiterLimit(value: number | string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="strokeopacity"></a>
## strokeOpacity

```TypeScript
strokeOpacity(value: number | string | Resource): T
```

Sets the stroke opacity.The value range is [0.0, 1.0].A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.Any other value evaluates to the value 1.0.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-strokeOpacity(value: number | string | Resource): T--><!--Device-CommonShapeMethod-strokeOpacity(value: number | string | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Stroke opacity. Default value: 1 |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="strokewidth"></a>
## strokeWidth

```TypeScript
strokeWidth(value: Length): T
```

Sets the stroke width.If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonShapeMethod-strokeWidth(value: Length): T--><!--Device-CommonShapeMethod-strokeWidth(value: Length): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Stroke width.The value must be greater than or equal to 0.Default value: 1.Default unit: vp.An invalid value is handled as the default value. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

