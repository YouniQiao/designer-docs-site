# ButtonAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**继承实现关系：** ButtonAttribute继承自：CommonMethod<ButtonAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## buttonStyle

```TypeScript
buttonStyle(value: ButtonStyleMode)
```

设置Button组件的样式和重要程度。根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过 [backgroundColor]CommonMethod#backgroundColor(value: ResourceColor)、 [fontColor](arkts-buttonattribute-c.md#fontColor)和[role](arkts-buttonattribute-c.md#role)接口设置，实际显示效果以最后一次设置为准。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ButtonStyleMode | 是 | Button组件的样式和重要程度。 默认值：ButtonStyleMode.EMPHASIZED |

## contentModifier

```TypeScript
contentModifier(modifier: ContentModifier<ButtonConfiguration>)
```

定制Button内容区的方法。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;ButtonConfiguration> | 是 | 在Button组件上，定制内容区的方法。 modifier：内容修改器，开发者需要自定义class实现  ContentModifier接口。 |

## controlSize

```TypeScript
controlSize(value: ControlSize)
```

设置Button组件的尺寸。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ControlSize | 是 | Button组件的尺寸。 默认值：ControlSize.NORMAL |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

设置文本显示颜色。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ResourceColor | 是 | 文本显示颜色。 默认值：$r('sys.color.font_on_primary')，显示为白色字体。 |

## fontFamily

```TypeScript
fontFamily(value: string | Resource)
```

设置字体列表。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | string \| Resource | 是 | 字体列表。默认字体'HarmonyOS Sans'，当前支持'HarmonyOS Sans'字体和  [注册自定义字体](arkts-font.md#font)。 |

## fontSize

```TypeScript
fontSize(value: Length)
```

设置文本显示字号。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Length | 是 | 文本显示字号。 默认值：当controlSize为ControlSize.NORMAL时，默认值为`$r('sys.float.Body_L')`。 当  controlSize为ControlSize.SMALL时，默认值为`$r('sys.float.Body_S')`。 说明：设置string类型时，不支持百分比。 |

## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

设置文本的字体样式。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | FontStyle | 是 | 文本的字体样式。 默认值：FontStyle.Normal |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string)
```

设置文本的字体粗细。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string | 是 | 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，取值越大，字体越粗。 默认值：500  string类型仅支持number类型取值的字符串形式，例如'400'，以及'bold'、'bolder'、'lighter'、'regular'、'medium'，分别对应FontWeight中相应的枚举值。 当  值为异常值或非法值时，字体粗细取值为400。 |

## labelStyle

```TypeScript
labelStyle(value: LabelStyle)
```

设置Button组件label文本和字体的样式。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | LabelStyle | 是 | Button组件label文本和字体的样式。 |

## maxFontScale

```TypeScript
maxFontScale(scale: number | Resource)
```

设置文本最大的字体缩放倍数。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scale | number \| Resource | 是 | 文本最大的字体缩放倍数。 取值范围：  [1, +∞) 说明： 设置的值小于1时，按值为1处理，异常值默认不生效。 未设置最大缩放倍数时，圆形按钮最大缩放倍数为1倍，胶囊型按钮、普通按钮、圆角矩形按钮最大缩放倍数跟随系统设置。 |

## minFontScale

```TypeScript
minFontScale(scale: number | Resource)
```

设置文本最小的字体缩放倍数。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| scale | number \| Resource | 是 | 文本最小的字体缩放倍数。 取值范围：[0, 1] 说明： 设置的值小于0时，按值为0处理，设置的值大于1，按值为1处理，异  常值默认不生效。 |

## role

```TypeScript
role(value: ButtonRole)
```

设置Button组件的角色。根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过 [backgroundColor]CommonMethod#backgroundColor(value: ResourceColor)、 [fontColor](arkts-buttonattribute-c.md#fontColor)和[buttonStyle](arkts-buttonattribute-c.md#buttonStyle)接口设置，实际显示效果以最后一次设置为准。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ButtonRole | 是 | 设置Button组件的角色。 默认值：ButtonRole.NORMAL |

## stateEffect

```TypeScript
stateEffect(value: boolean)
```

设置是否开启按压态显示效果。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 按钮按下时是否开启按压态显示效果。 true：开启按压效果；false：关闭按压效果。 默认值：true |

## type

```TypeScript
type(value: ButtonType)
```

设置Button样式。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ButtonType | 是 | Button样式。 API version 18及之后，ButtonType的默认值从ButtonType.Capsule变更为  ButtonType.ROUNDED_RECTANGLE。 |

