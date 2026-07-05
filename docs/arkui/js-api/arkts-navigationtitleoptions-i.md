# NavigationTitleOptions

标题栏选项。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundEffect

```TypeScript
backgroundEffect?: BackgroundEffectOptions
```

设置标题栏背景属性包括：模糊半径，亮度，饱和度，颜色等。 **说明：** 不建议与backgroundBlurStyleOptions同时使用。

**Type:** BackgroundEffectOptions

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableHoverMode

```TypeScript
enableHoverMode?: boolean
```

是否响应悬停态。 使用规则： 1. 需满足Navigation为全屏大小； 2. 标题栏显示模式为[Free](arkts-navigationtitlemode-e.md#NavigationTitleMode)时或者标题栏布局方式为[STANDARD](arkts-barstyle-e.md#BarStyle)时，此接口设置无效。 true：响应悬停态；false：不响应悬停态。 默认值：false

**Type:** boolean

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

标题栏背景颜色，不设置时为系统默认颜色。

**Type:** ResourceColor

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## mainTitleModifier

```TypeScript
mainTitleModifier?: TextModifier
```

主标题属性修改器。 1. 通过Modifier设置的属性会覆盖系统默认的属性（如果Modifier设置了fontSize，maxFontSize，minFontSize任一属性，则系统设置的大小相关属性不生效，以开发者的设置为准）； 2. 不设该属性或者设置了异常值，则恢复系统默认设置； 3. [Free](arkts-navigationtitlemode-e.md#NavigationTitleMode)模式下设置字体大小时，原有滑动改变标题大小的效果失效。

**Type:** TextModifier

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## paddingEnd

```TypeScript
paddingEnd?: LengthMetrics
```

标题栏结束端内间距。 仅支持以下任一场景： 1. 使用非自定义菜单，即[菜单value](arkts-navigationattribute-c.md#menus)为Array<NavigationMenuItem>； 2. 没有右上角菜单，且使用非自定义标题，即[标题value](arkts-navigationattribute-c.md#title)类型为ResourceStr或NavigationCommonTitle。 默认值： LengthMetrics.resource(`$r('sys.float.margin_right')`)

**Type:** LengthMetrics

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## subTitleModifier

```TypeScript
subTitleModifier?: TextModifier
```

子标题属性修改器。 1. 通过Modifier设置的属性会覆盖系统默认的属性（如果Modifier设置了fontSize，maxFontSize，minFontSize任一属性，则系统设置的大小相关属性不生效，以开发者的设置为准）； 2. 不设该属性或者设置了异常值，则恢复系统默认设置。

**Type:** TextModifier

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyleOptions

```TypeScript
backgroundBlurStyleOptions?: BackgroundBlurStyleOptions
```

标题栏背景模糊选项。 **说明：** 只在设置了backgroundBlurStyle时生效。 不建议与backgroundEffect同时使用。

**Type:** BackgroundBlurStyleOptions

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scrollEffectOptions

```TypeScript
scrollEffectOptions?: ScrollEffectOptions
```

标题滑动模糊样式。

**Type:** ScrollEffectOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle?: BlurStyle
```

标题栏背景模糊样式，不设置时关闭背景模糊效果。

**Type:** BlurStyle

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## systemMaterial

```TypeScript
systemMaterial?: Material
```

为标题栏设置系统样式的材质。不同的材料有不同的效果，会影响 titleBar的背景颜色、边框、阴影和其他视觉属性。 设备行为差异：相同材料在不同设备上的效果可能不同，具体取决于 他们的计算能力。

**Type:** Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## paddingStart

```TypeScript
paddingStart?: LengthMetrics
```

标题栏起始端内间距。 仅支持以下任一场景： 1. 显示返回图标，即[hideBackButton](arkts-navigationattribute-c.md#hideBackButton)为false； 2. 使用非自定义标题，即[标题value](arkts-navigationattribute-c.md#title)类型为ResourceStr或NavigationCommonTitle。 默认值： LengthMetrics.resource(`$r('sys.float.margin_left')`)。

**Type:** LengthMetrics

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## barStyle

```TypeScript
barStyle?: BarStyle
```

设置标题栏布局方式。 默认值：BarStyle.STANDARD

**Type:** BarStyle

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

