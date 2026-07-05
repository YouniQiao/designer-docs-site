# DividerAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**Inheritance:** DividerAttributeextends: CommonMethod<DividerAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
color(value: ResourceColor)
```

设置分割线的颜色，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 分割线颜色。 默认值：'#33182431' 非法值：按默认值处理。 支持通过  [WithTheme]with_theme设置通用分割线颜色。 |

## lineCap

```TypeScript
lineCap(value: LineCapStyle)
```

设置分割线的端点样式，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LineCapStyle | Yes | 分割线的端点样式。 默认值：LineCapStyle.Butt 非法值：按默认值处理。 |

## strokeWidth

```TypeScript
strokeWidth(value: number | string)
```

设置分割线的宽度，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 > **说明：** > > - 分割线的宽度不支持百分比设置。 > > - 使用水平分割线时，strokeWidth控制高度，优先级低于通用属性[height]CommonMethod#height(value: Length)；使用垂直分割线时，strokeWidth控制宽度，优 > 先级低于通用属性[width]CommonMethod#width(value: Length)。 > > - 超过通用属性设置大小时，按照通用属性进行裁切。 > > - 如果设备硬件存在1像素取整后分割线不显示问题，建议使用2像素。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | 分割线宽度。 默认值：1px 非法值：按默认值处理。 单位：vp |

## vertical

```TypeScript
vertical(value: boolean)
```

设置分割线的方向，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 使用水平分割线还是垂直分割线。 false：水平分割线；true：垂直分割线。 默认值：false 非法值：按默认值处理。 |

