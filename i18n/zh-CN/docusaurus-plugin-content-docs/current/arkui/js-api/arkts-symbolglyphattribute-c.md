# SymbolGlyphAttribute

支持[通用属性]common，不支持文本通用属性，仅支持以下特有属性： 支持[通用事件]common。

**继承实现关系：** SymbolGlyphAttribute继承自：CommonMethod<SymbolGlyphAttribute>。

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## effectStrategy

```TypeScript
effectStrategy(value: SymbolEffectStrategy)
```

设置SymbolGlyph组件动效策略。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | SymbolEffectStrategy | 是 | SymbolGlyph组件动效策略。 默认值：SymbolEffectStrategy.NONE |

## fontColor

```TypeScript
fontColor(value: Array<ResourceColor>)
```

设置SymbolGlyph组件颜色。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;ResourceColor> | 是 | SymbolGlyph组件颜色。 当value为undefined时，使用图标的默认颜色，默认颜色跟随主题。 |

## fontColor

```TypeScript
fontColor(value: Array<ResourceColor | ColorMetrics> | undefined)
```

设置SymbolGlyph组件的颜色，相比[fontColor](arkts-symbolglyphattribute-c.md#fontColor)接口，本接口支持传入 [ColorMetrics](arkts-colormetrics-c.md#ColorMetrics)类型参数。 > **说明：** > > 该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;ResourceColor \| ColorMetrics> \| undefined | 是 |  |

## fontSize

```TypeScript
fontSize(value: number | string | Resource)
```

设置SymbolGlyph组件大小。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。 组件的图标显示大小由fontSize控制，设置width或height后，其他通用属性仅对组件的占位大小生效。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string \| Resource | 是 | SymbolGlyph组件大小。 默认值：16fp 单位：  [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 不支持设置百分比字符串。 |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string)
```

设置SymbolGlyph组件粗细。number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“ bolder”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。 sys.symbol.ohos_lungs图标不支持设置fontWeight。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string | 是 | SymbolGlyph组件粗细。 默认值：FontWeight.Normal |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)
```

设置SymbolGlyph组件图标小符号的粗细，支持通过FontWeightConfigs配置是否开启可变字重调节、是否开启随设备的字体粗细级别自动更新字重。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | 是 | SymbolGlyph组件图标小符号的粗细。 number类型取值[100, 900]，取值间隔为100，默认为40  0，取值越大，字体越粗。 ResourceStr类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder”、“lighter”、“regular”、“medium”分别对应  FontWeight中相应的枚举值。 默认值：FontWeight.Normal |
| fontWeightConfigs | FontWeightConfigs | 否 |  |

## maxFontScale

```TypeScript
maxFontScale(scale: Optional<number|Resource>)
```

设置SymbolGlyph组件最大的字体缩放倍数。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scale | Optional&lt;number\|Resource> | 是 | SymbolGlyph组件最大的字体缩放倍数。 取值范围：  [1, +∞) 说明： 设置的值小于1时，按值为1处理，异常值默认不生效。 |

## minFontScale

```TypeScript
minFontScale(scale: Optional<number|Resource>)
```

设置SymbolGlyph组件最小的字体缩放倍数。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scale | Optional&lt;number\|Resource> | 是 | SymbolGlyph组件最小的字体缩放倍数。 取值范围：[0, 1] 设置为0，缩放最小。 说明： 设置的值小于0时，按值为0处理。设置的值大于1，按值为1处理。异常值默认不生效。 |

## renderingStrategy

```TypeScript
renderingStrategy(value: SymbolRenderingStrategy)
```

设置SymbolGlyph组件渲染策略。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | SymbolRenderingStrategy | 是 | SymbolGlyph组件渲染策略。 默认值：SymbolRenderingStrategy.SINGLE |

## shaderStyle

```TypeScript
shaderStyle(shader: Array<ShaderStyle | undefined> | ShaderStyle)
```

设置SymbolGlyph组件的渐变色效果。 可以显示为径向渐变[RadialGradientStyle]RadialGradientStyle或线性渐变[LinearGradientStyle]LinearGradientStyle或纯色 [ColorShaderStyle]ColorShaderStyle的效果，shaderStyle的优先级高于[fontColor]SymbolSpanAttribute#fontColor和AI识 别，纯色建议使用[fontColor]SymbolSpanAttribute#fontColor。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shader | Array&lt;ShaderStyle \| undefined> \| ShaderStyle | 是 | 径向渐变或线性渐变或纯色。 传入ShaderStyle时，覆盖所有层；传入数组时，数据项是  ShaderStyle，则应用该层；数组项是undefined，则该层使用SymbolGlyph默认颜色，未设置的层也应用默认颜色。根据传入的参数区分处理径向渐变  [RadialGradientStyle]RadialGradientStyle或线性渐变[LinearGradientStyle]LinearGradientStyle或纯色  [ColorShaderStyle]ColorShaderStyle，最终设置到SymbolGlyph组件上显示为渐变色效果。 说明： 单位：  [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 中心点请按百分比使用。如果使用的是非百分比（例如10PX），效果等同于设置  1000%。 半径建议使用百分比。 百分比是基于图标大小的百分比，建议取值范围[0, 1)。 |

## symbolEffect

```TypeScript
symbolEffect(symbolEffect: SymbolEffect, isActive?: boolean)
```

设置SymbolGlyph组件动效策略及播放状态。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| symbolEffect | SymbolEffect | 是 |  |
| isActive | boolean | 否 |  |

## symbolEffect

```TypeScript
symbolEffect(symbolEffect: SymbolEffect, triggerValue?: number)
```

设置SymbolGlyph组件动效策略及播放触发器。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| symbolEffect | SymbolEffect | 是 |  |
| triggerValue | number | 否 |  |

## symbolShadow

```TypeScript
symbolShadow(shadow: Optional<ShadowOptions>)
```

设置SymbolGlyph组件的阴影效果。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shadow | Optional&lt;ShadowOptions> | 是 | SymbolGlyph组件的阴影效果。 单位：  [vp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 默认值：{ radius：0, color：  Color.Black, offsetX：0, offsetY：0 } 不支持fill、type属性和color中的ColoringStrategy枚举值。 |

