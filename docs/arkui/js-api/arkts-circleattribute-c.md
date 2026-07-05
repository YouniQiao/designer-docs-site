# CircleAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** CircleAttributeextends: CommonShapeMethod<CircleAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fill

```TypeScript
fill(value: ResourceColor | ColorMetrics)
```

Sets the color of the fill area. An invalid value is handled as the default value. If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor \| ColorMetrics | Yes | Color of the fill area  Default value : Color.Black. |

## stroke

```TypeScript
stroke(value: ResourceColor | ColorMetrics)
```

Sets the stroke color. If this attribute is not set, the component does not have any stroke. If the value is invalid, no stroke will be drawn.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor \| ColorMetrics | Yes | Stroke color. |

