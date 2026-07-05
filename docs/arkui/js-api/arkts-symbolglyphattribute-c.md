# SymbolGlyphAttribute

支持[通用属性]common，不支持文本通用属性，仅支持以下特有属性： 支持[通用事件]common。

**Inheritance:** SymbolGlyphAttributeextends: CommonMethod<SymbolGlyphAttribute>.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## effectStrategy

```TypeScript
effectStrategy(value: SymbolEffectStrategy)
```

设置SymbolGlyph组件动效策略。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SymbolEffectStrategy | Yes | SymbolGlyph组件动效策略。 默认值：SymbolEffectStrategy.NONE |

## fontColor

```TypeScript
fontColor(value: Array<ResourceColor>)
```

设置SymbolGlyph组件颜色。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;ResourceColor> | Yes | SymbolGlyph组件颜色。 当value为undefined时，使用图标的默认颜色，默认颜色跟随主题。 |

## fontColor

```TypeScript
fontColor(value: Array<ResourceColor | ColorMetrics> | undefined)
```

设置SymbolGlyph组件的颜色，相比[fontColor](arkts-symbolglyphattribute-c.md#fontColor)接口，本接口支持传入 [ColorMetrics](arkts-colormetrics-c.md#ColorMetrics)类型参数。 > **说明：** > > 该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;ResourceColor \| ColorMetrics> \| undefined | Yes |  |

## fontSize

```TypeScript
fontSize(value: number | string | Resource)
```

设置SymbolGlyph组件大小。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。 组件的图标显示大小由fontSize控制，设置width或height后，其他通用属性仅对组件的占位大小生效。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | SymbolGlyph组件大小。 默认值：16fp 单位：  [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 不支持设置百分比字符串。 |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string)
```

设置SymbolGlyph组件粗细。number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“ bolder”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。 sys.symbol.ohos_lungs图标不支持设置fontWeight。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string | Yes | SymbolGlyph组件粗细。 默认值：FontWeight.Normal |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)
```

设置SymbolGlyph组件图标小符号的粗细，支持通过FontWeightConfigs配置是否开启可变字重调节、是否开启随设备的字体粗细级别自动更新字重。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | SymbolGlyph组件图标小符号的粗细。 number类型取值[100, 900]，取值间隔为100，默认为40  0，取值越大，字体越粗。 ResourceStr类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“regular”、“medium”分别对应  FontWeight中相应的枚举值。 默认值：FontWeight.Normal |
| fontWeightConfigs | FontWeightConfigs | No |  |

## maxFontScale

```TypeScript
maxFontScale(scale: Optional<number|Resource>)
```

设置SymbolGlyph组件最大的字体缩放倍数。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | Optional&lt;number\|Resource> | Yes | SymbolGlyph组件最大的字体缩放倍数。 取值范围：  [1, +∞) 说明： 设置的值小于1时，按值为1处理，异常值默认不生效。 |

## minFontScale

```TypeScript
minFontScale(scale: Optional<number|Resource>)
```

设置SymbolGlyph组件最小的字体缩放倍数。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | Optional&lt;number\|Resource> | Yes | SymbolGlyph组件最小的字体缩放倍数。 取值范围：[0, 1] 设置为0，缩放最小。 说明： 设置的值小于0时，按值为0处理。设置的值大于1，按值为1处理。异常值默认不生效。 |

## renderingStrategy

```TypeScript
renderingStrategy(value: SymbolRenderingStrategy)
```

设置SymbolGlyph组件渲染策略。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SymbolRenderingStrategy | Yes | SymbolGlyph组件渲染策略。 默认值：SymbolRenderingStrategy.SINGLE |

## shaderStyle

```TypeScript
shaderStyle(shader: Array<ShaderStyle | undefined> | ShaderStyle)
```

设置SymbolGlyph组件的渐变色效果。 可以显示为径向渐变[RadialGradientStyle]RadialGradientStyle或线性渐变[LinearGradientStyle]LinearGradientStyle或纯色 [ColorShaderStyle]ColorShaderStyle的效果，shaderStyle的优先级高于[fontColor]SymbolSpanAttribute#fontColor和AI识 别，纯色建议使用[fontColor]SymbolSpanAttribute#fontColor。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | Array&lt;ShaderStyle \| undefined> \| ShaderStyle | Yes | 径向渐变或线性渐变或纯色。 传入ShaderStyle时，覆盖所有层；传入数组时，数据项是  ShaderStyle，则应用该层；数组项是undefined，则该层使用SymbolGlyph默认颜色，未设置的层也应用默认颜色。根据传入的参数区分处理径向渐变  [RadialGradientStyle]RadialGradientStyle或线性渐变[LinearGradientStyle]LinearGradientStyle或纯色  [ColorShaderStyle]ColorShaderStyle，最终设置到SymbolGlyph组件上显示为渐变色效果。 说明： 单位：  [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 中心点请按百分比使用。如果使用的是非百分比（例如10PX），效果等同于设置  1000%。 半径建议使用百分比。 百分比是基于图标大小的百分比，建议取值范围[0, 1)。 |

## symbolEffect

```TypeScript
symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)
```

设置SymbolGlyph组件动效策略及播放状态。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbolEffect | SymbolEffect | Yes |  |
| isActive | boolean | No |  |

## symbolEffect

```TypeScript
symbolEffect(symbolEffect: SymbolEffect, triggerValue?: number)
```

设置SymbolGlyph组件动效策略及播放触发器。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbolEffect | SymbolEffect | Yes |  |
| triggerValue | number | No |  |

## symbolShadow

```TypeScript
symbolShadow(shadow: Optional<ShadowOptions>)
```

设置SymbolGlyph组件的阴影效果。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shadow | Optional&lt;ShadowOptions> | Yes | SymbolGlyph组件的阴影效果。 单位：  [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 默认值：{ radius：0, color：  Color.Black, offsetX：0, offsetY：0 } 不支持fill、type属性和color中的ColoringStrategy枚举值。 |

