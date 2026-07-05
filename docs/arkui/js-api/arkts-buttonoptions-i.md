# ButtonOptions

按钮的样式。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## role

```TypeScript
role?: ButtonRole
```

按钮的角色，根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过 [backgroundColor]CommonMethod#backgroundColor(value: ResourceColor)、 [fontColor](arkts-buttonattribute-c.md#fontColor)和[buttonStyle](arkts-buttonattribute-c.md#buttonStyle)接口设置，实际显示效果以最后一次设置为 准。 默认值：ButtonRole.NORMAL

**Type:** ButtonRole

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttonStyle

```TypeScript
buttonStyle?: ButtonStyleMode
```

按钮的样式和重要程度，根据设置枚举值的不同，系统自动会调整按钮的背景色和文字颜色。背景色和文字颜色也支持开发者通过 [backgroundColor]CommonMethod#backgroundColor(value: ResourceColor)、 [fontColor](arkts-buttonattribute-c.md#fontColor)和[role](arkts-buttonattribute-c.md#role)接口设置，实际显示效果以最后一次设置为准。 默认值：ButtonStyleMode.EMPHASIZED **说明：** 按钮重要程度：强调按钮>普通按钮>文字按钮。

**Type:** ButtonStyleMode

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stateEffect

```TypeScript
stateEffect?: boolean
```

按钮按下时是否开启按压态显示效果。 true：开启按压效果；false：关闭按压效果。 默认值：true **说明：** 当开启按压态显示效果，且开发者设置状态样式时，会基于状态样式设置完成后的背景色再进行颜色叠加。

**Type:** boolean

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controlSize

```TypeScript
controlSize?: ControlSize
```

按钮的尺寸。 默认值：ControlSize.NORMAL

**Type:** ControlSize

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: ButtonType
```

按钮显示样式。 默认值：ButtonType.ROUNDED_RECTANGLE API version 18及之后，ButtonType的默认值修改为ButtonType.ROUNDED_RECTANGLE。API version 18之前的版本，ButtonType的默认值为 ButtonType.Capsule。

**Type:** ButtonType

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

