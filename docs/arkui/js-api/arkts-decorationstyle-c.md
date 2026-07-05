# DecorationStyle

文本装饰线样式对象说明。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value: DecorationStyleInterface)
```

文本装饰线样式的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DecorationStyleInterface | Yes | 文本装饰线设置项。 默认值： {  type: TextDecorationType.None,  color  : Color.Black,  style: TextDecorationStyle.SOLID  } |

## constructor

```TypeScript
constructor(value: DecorationStyleInterface, options?: DecorationOptions)
```

文本装饰线样式的构造函数，包含额外配置选项。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DecorationStyleInterface | Yes | 文本装饰线设置项。 默认值： {  type: TextDecorationType.None,  color  : Color.Black,  style: TextDecorationStyle.SOLID,   thicknessScale: 1.0 } |
| options | DecorationOptions | No |  |

## thicknessScale

```TypeScript
readonly thicknessScale?: number
```

获取属性字符串的文本装饰线粗细缩放值。

**Type:** number

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
readonly color?: ResourceColor
```

获取属性字符串的文本装饰线颜色。

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
readonly options?: DecorationOptions
```

获取属性字符串的文本装饰线样式的额外配置选项。

**Type:** DecorationOptions

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
readonly style?: TextDecorationStyle
```

获取属性字符串的文本装饰线样式。

**Type:** TextDecorationStyle

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
readonly type: TextDecorationType
```

获取属性字符串的文本装饰线类型。

**Type:** TextDecorationType

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

