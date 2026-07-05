# CapsuleStyleOptions

胶囊样式选项。 继承自[ScanEffectOptions](arkts-scaneffectoptions-i.md#ScanEffectOptions)和[CommonProgressStyleOptions](arkts-commonprogressstyleoptions-i.md#CommonProgressStyleOptions)。

**Inheritance:** CapsuleStyleOptionsextends: ScanEffectOptions, CommonProgressStyleOptions.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderColor

```TypeScript
borderColor?: ResourceColor
```

内描边颜色。 默认值： API version 10：'#33006cde' API version 11及以上：'#33007dff'

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderRadius

```TypeScript
borderRadius?: LengthMetrics
```

Capsule进度条圆角半径（不支持百分比设置）。 取值范围：[0, min(width, height)/2]。默认值：min(width, height)/2。 设置非法数值时，按照默认值处理。

**Type:** LengthMetrics

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showDefaultPercentage

```TypeScript
showDefaultPercentage?: boolean
```

显示百分比文本的开关。开启后，进度条上显示当前进度的百分比。设置了content属性时该属性不生效。 true：表示显示百分比文本；false：表示不显示百分比文本。 默认值：false

**Type:** boolean

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderWidth

```TypeScript
borderWidth?: Length
```

内描边宽度（不支持百分比设置）。 默认值：1vp

**Type:** Length

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

文本颜色。 默认值：'#ff182431'

**Type:** ResourceColor

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## content

```TypeScript
content?: ResourceStr
```

文本内容，应用可自定义。 从API version 20开始，支持Resource类型。

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## font

```TypeScript
font?: Font
```

文本样式。 默认值： 文本大小（不支持百分比设置）：12fp 其他文本参数跟随[Text]text组件的主题值。

**Type:** Font

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

