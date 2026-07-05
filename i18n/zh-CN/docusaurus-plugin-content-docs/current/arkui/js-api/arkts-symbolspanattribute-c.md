# SymbolSpanAttribute

不支持[通用属性]common，支持以下属性： 不支持[通用事件]common。

**继承实现关系：** SymbolSpanAttribute继承自：CommonMethod<SymbolSpanAttribute>。

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## attributeModifier

```TypeScript
attributeModifier(modifier: AttributeModifier<SymbolSpanAttribute>)
```

设置组件的动态属性。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| modifier | AttributeModifier&lt;SymbolSpanAttribute> | 是 | 动态设置组件的属性。 |

## effectStrategy

```TypeScript
effectStrategy(value: SymbolEffectStrategy)
```

设置SymbolSpan动效策略。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | SymbolEffectStrategy | 是 | SymbolSpan动效策略。 默认值：SymbolEffectStrategy.NONE |

## fontColor

```TypeScript
fontColor(value: Array<ResourceColor>)
```

设置SymbolSpan组件颜色。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;ResourceColor> | 是 | SymbolSpan组件颜色。 默认值：不同渲染策略下默认值不同。 |

## fontSize

```TypeScript
fontSize(value: number | string | Resource)
```

设置SymbolSpan组件大小。设置string类型时，支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string \| Resource | 是 | SymbolSpan组件大小。 默认值：16fp 单位：  [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string)
```

设置SymbolSpan组件粗细。number类型取值[100,900]，取值间隔为100，默认为400，取值越大，字体越粗。string类型仅支持number类型取值的字符串形式，例如“400”，以及“bold”、“bolder ”、“lighter”、“regular” 、“medium”分别对应FontWeight中相应的枚举值。 sys.symbol.ohos_lungs图标不支持设置fontWeight。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string | 是 | SymbolSpan组件粗细。 默认值：FontWeight.Normal |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr, fontWeightConfigs?: FontWeightConfigs)
```

设置SymbolSpan组件图标小符号的粗细，支持通过FontWeightConfigs配置是否开启可变字重调节、是否开启随设备的字体粗细级别自动更新字重。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | 是 | SymbolSpan组件图标小符号的粗细。 number类型取值[100, 900]，取值间隔为100，默认为40  0，取值越大，字体越粗。 ResourceStr类型仅支持number类型取值的字符串形式，例如“400"，以及“bold”、“bolder”、“lighter”、“regular”、“medium”分别对应  FontWeight中相应的枚举值。 默认值：FontWeight.Normal |
| fontWeightConfigs | FontWeightConfigs | 否 |  |

## renderingStrategy

```TypeScript
renderingStrategy(value: SymbolRenderingStrategy)
```

设置SymbolSpan渲染策略。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 12开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | SymbolRenderingStrategy | 是 | SymbolSpan渲染策略。 默认值：SymbolRenderingStrategy.SINGLE |

