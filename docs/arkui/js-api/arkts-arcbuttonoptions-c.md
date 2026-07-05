# ArcButtonOptions

定义ArcButton的默认样式或自定义样式参数。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcButtonPosition,ArcButton,ArcButtonStatus,ArcButtonStyleMode,ArcButtonOptions,ArcButtonProgressConfig } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options: CommonArcButtonOptions)
```

弧形按钮的构造函数。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CommonArcButtonOptions | Yes | 定义ArcButton组件的文本、背景色、阴影等参数。 |

## onClick

```TypeScript
onClick?: Callback<ClickEvent>
```

弧形按钮点击动作触发该回调。

**Type:** Callback<ClickEvent>

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## backgroundColor

```TypeScript
backgroundColor: ColorMetrics
```

弧形按钮背景颜色。 ArcButtonStyleMode需要设置为CUSTOM。 默认值：Color.Black。

**Type:** ColorMetrics

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## styleMode

```TypeScript
styleMode: ArcButtonStyleMode
```

弧形按钮样式模式。该样式不支持与[ArcButtonProgressConfig](arkts-arcbuttonprogressconfig-c.md#ArcButtonProgressConfig)样式同时使用。 默认值：ArcButtonStyleMode.EMPHASIZED_LIGHT。

**Type:** ArcButtonStyleMode

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## pressedFontColor

```TypeScript
pressedFontColor: ColorMetrics
```

弧形按钮按下文本颜色。 ArcButtonStyleMode需要设置为CUSTOM。 默认值：Color.White。

**Type:** ColorMetrics

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## fontMargin

```TypeScript
fontMargin: LocalizedMargin
```

弧形按钮文本边距。 默认值：{start:24vp, top: 10vp,end: 24vp, bottom:16vp }。

**Type:** LocalizedMargin

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle: BlurStyle
```

弧形按钮背景模糊能力。 默认值：BlurStyle.NONE。

**Type:** BlurStyle

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## label

```TypeScript
label: ResourceStr
```

弧形按钮显示文本。

**Type:** ResourceStr

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## fontStyle

```TypeScript
fontStyle: FontStyle
```

弧形按钮文本样式。 默认值：FontStyle.Normal。

**Type:** FontStyle

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## fontFamily

```TypeScript
fontFamily: string | Resource
```

弧形按钮字体名。

**Type:** string | Resource

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## progressConfig

```TypeScript
progressConfig?: ArcButtonProgressConfig
```

ArcButton进度条参数。不设置该属性时ArcButton组件表现为按钮样式（ [示例1](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton.md#示例1-设置弧形按钮)），设置后表现为进度条样式（ [示例2](docroot://reference/apis-arkui/arkui-ts/ohos-arkui-advanced-ArcButton.md#示例2-设置设备进度条按钮)），进度条样式不受 [ArcButtonStyleMode](arkts-arcbuttonstylemode-e.md#ArcButtonStyleMode)属性设置影响。 默认值：[ArcButtonProgressConfig](arkts-arcbuttonprogressconfig-c.md#ArcButtonProgressConfig) 的各项子属性均取其默认值。

**Type:** ArcButtonProgressConfig

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## fontSize

```TypeScript
fontSize: LengthMetrics
```

弧形按钮文本大小。 默认值：19fp。

**Type:** LengthMetrics

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## position

```TypeScript
position: ArcButtonPosition
```

上下弧形按钮类型属性。 默认值：ArcButtonPosition.BOTTOM_EDGE。

**Type:** ArcButtonPosition

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## onTouch

```TypeScript
onTouch?: Callback<TouchEvent>
```

弧形按钮手指触摸动作触发该回调。

**Type:** Callback<TouchEvent>

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## shadowColor

```TypeScript
shadowColor: ColorMetrics
```

弧形按钮阴影颜色。 默认值：Color.Black。

**Type:** ColorMetrics

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## fontColor

```TypeScript
fontColor: ColorMetrics
```

弧形按钮文本颜色。 ArcButtonStyleMode需要设置为CUSTOM。 默认值：Color.White。

**Type:** ColorMetrics

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## shadowEnabled

```TypeScript
shadowEnabled: boolean
```

弧形按钮阴影开关。 默认值：false 值为true时，显示阴影。值为false时，不显示阴影。

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## status

```TypeScript
status: ArcButtonStatus
```

弧形按钮状态。 默认值：ArcButtonStatus.NORMAL。

**Type:** ArcButtonStatus

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

