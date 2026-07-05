# BadgeParam

包含用于创建Badge组件的基础参数。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style: BadgeStyle
```

Badge组件可设置样式，支持设置文本颜色、尺寸、圆点颜色和尺寸。

**Type:** BadgeStyle

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## position

```TypeScript
position?: BadgePosition | Position
```

设置提示点显示位置。 默认值：BadgePosition.RightTop **说明：** Position作为入参，不支持设置百分比；设置为非法值时，默认(0,0)处理。(0,0)为组件左上角位置。 BadgePosition作为入参时，会跟随[Direction]Direction属性控制镜像显示。

**Type:** BadgePosition | Position

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

