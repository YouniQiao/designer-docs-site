# RectAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** RectAttributeextends: CommonShapeMethod<RectAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## radius

```TypeScript
radius(value: Length | Array<any>)
```

设置圆角半径大小，取值范围≥0，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。异常值按照默认值处理。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length \| Array&lt;any> | Yes | 圆角半径大小。 默认值：0 默认单位：vp 异常值undefined和null按照  [[0, 0], [0, 0], [0, 0], [0, 0]]处理。 [since 20] |

## radiusHeight

```TypeScript
radiusHeight(value: Length)
```

设置圆角的高度，仅设置高时宽高一致，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 异常值按照默认值处理。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 圆角的高度，取值范围≥0。 默认值：0 默认单位：vp 异常值undefined按照默认值处理。 [since 20] |

## radiusWidth

```TypeScript
radiusWidth(value: Length)
```

设置圆角的宽度，仅设置宽时宽高一致，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 异常值按照默认值处理。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 圆角的宽度，取值范围≥0。 默认值：0 默认单位：vp 异常值undefined按照默认值处理。 [since 20] |

