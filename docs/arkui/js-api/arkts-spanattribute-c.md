# SpanAttribute

属性继承自[BaseSpan](arkts-basespan-c.md#BaseSpan)。 通用事件支持[点击事件onClick]CommonMethod#onClick(event: Callback<ClickEvent>, distanceThreshold: number)、 [悬浮事件onHover]CommonMethod#onHover。

**Inheritance:** SpanAttributeextends: BaseSpan<SpanAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## decoration

```TypeScript
decoration(value: DecorationStyleInterface)
```

设置文本装饰线样式及其颜色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DecorationStyleInterface | Yes | 文本装饰线样式对象。 默认值： {  type: TextDecorationType.None,    color: Color.Black,  style: TextDecorationStyle.SOLID  } 说明： style参数不支持卡片能力。 [since 12] |

## font

```TypeScript
font(value: Font)
```

设置文本样式。包括字体大小、字体粗细、字体族和字体风格。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 文本样式。 |

## font

```TypeScript
font(value: Font, fontConfigs?: FontConfigs)
```

设置文本样式。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 文本样式，包括字体大小、字体粗细、字体族和字体风格。 |
| fontConfigs | FontConfigs | No |  |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

设置字体颜色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 字体颜色。 默认值：'#e6182431' Wearable设备上默认值为：'#c5ffffff' |

## fontFamily

```TypeScript
fontFamily(value: string | Resource)
```

设置字体列表。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | 字体列表。 默认字体'HarmonyOS Sans'。 使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,  HarmonyOS Sans'。 |

## fontSize

```TypeScript
fontSize(value: number | string | Resource)
```

设置字体大小。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | 字体大小。fontSize为number类型时，使用fp单位。字体默认大小16fp。string类型支持number类型取值的字符串形式，  可以附带单位，例如"10"、"10fp"，不支持设置百分比字符串。 Wearable设备上默认值为：15fp |

## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

设置字体样式。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FontStyle | Yes | 字体样式。 默认值：FontStyle.Normal |

## fontVariations

```TypeScript
fontVariations(fontVariations: Array<FontVariation>)
```

设置可变字体的属性。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontVariations | Array&lt;FontVariation> | Yes | 可变字体的属性数组，数组成员为可变字体的各种属性。fontVariations属性的优先级高于  [fontWeight]SpanAttribute#fontWeight(weight: number \| FontWeight \| ResourceStr, fontWeightConfigs?: FontWeightConfigs)  。 |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr)
```

设置文本的字体粗细，设置过大可能会在不同字体下有截断。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类  型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。 默认值：  FontWeight.Normal 从API version 20开始，支持[Resource]Resource类型。 [since 20] |

## fontWeight

```TypeScript
fontWeight(weight: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)
```

设置文本的字体粗细。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| weight | number \| FontWeight \| ResourceStr | Yes | 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string  类型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。设置过大可能会在不同字体  下有截断。 默认值：FontWeight.Normal |
| fontWeightConfigs | FontWeightConfigs | No |  |

## letterSpacing

```TypeScript
letterSpacing(value: number | ResourceStr)
```

设置文本字符间距。取值小于0，字符聚集重叠，取值大于0且随着数值变大，字符间距越来越大，稀疏分布。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| ResourceStr | Yes | 文本字符间距。 单位：  [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 从API version 20开始，支持  [Resource]Resource类型。 [since 20] |

## lineHeight

```TypeScript
lineHeight(value: Length)
```

设置文本行高。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 文本行高。 number类型时单位为fp。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。 |

## textCase

```TypeScript
textCase(value: TextCase)
```

设置文本大小写。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TextCase | Yes | 文本大小写。 默认值：TextCase.Normal |

## textShadow

```TypeScript
textShadow(value: ShadowOptions | Array<ShadowOptions>)
```

设置文字阴影效果。该接口支持以数组形式入参，实现多重文字阴影。不支持fill字段, 不支持智能取色模式。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ShadowOptions \| Array&lt;ShadowOptions> | Yes | 文字阴影效果。 |

