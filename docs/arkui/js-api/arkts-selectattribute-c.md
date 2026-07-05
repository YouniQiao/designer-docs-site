# SelectAttribute

除支持[通用属性]common外，还支持以下属性：

**Inheritance:** SelectAttributeextends: CommonMethod<SelectAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## arrowModifier

```TypeScript
arrowModifier(modifier: Optional<SymbolGlyphModifier>)
```

定制Select按钮下拉箭头图标样式的方法，在应用arrowModifier之后，Select按钮下拉箭头的图标样式将完全由开发者自定义。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;SymbolGlyphModifier> | Yes | 在Select组件上，定制Select按钮下拉箭头图标样式的方法。 当modifier的值为undefined时，  不自定义下拉箭头图标样式。 |

## arrowPosition

```TypeScript
arrowPosition(value: ArrowPosition)
```

设置下拉菜单项的文本与箭头之间的对齐方式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ArrowPosition | Yes | 下拉菜单项的文本与箭头之间的对齐方式。 默认值：ArrowPosition.END |

## arrowPosition

```TypeScript
arrowPosition(position: Optional<ArrowPosition>)
```

设置下拉菜单项的文本与箭头之间的对齐方式。与[arrowPosition](arkts-selectattribute-c.md#arrowPosition)相比，position参数新增了对 undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | Optional&lt;ArrowPosition> | Yes | 下拉菜单项的文本与箭头之间的对齐方式。 当position的值为undefined时，默认值：ArrowPosition.END |

## avoidance

```TypeScript
avoidance(mode: AvoidanceMode)
```

设置下拉菜单的避让模式。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | AvoidanceMode | Yes | 设置下拉菜单的避让模式。 默认值：AvoidanceMode.COVER_TARGET |

## controlSize

```TypeScript
controlSize(value: ControlSize)
```

设置Select组件的尺寸。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ControlSize | Yes | Select组件的尺寸。 默认值：ControlSize.NORMAL |

## controlSize

```TypeScript
controlSize(size: Optional<ControlSize>)
```

设置Select组件的尺寸。与[controlSize](arkts-selectattribute-c.md#controlSize)<sup>12+</sup>相比，size参数新增了对 undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Optional&lt;ControlSize> | Yes | Select组件的尺寸。 当size的值为undefined时，默认值为ControlSize.NORMAL。 |

## divider

```TypeScript
divider(options: Optional<DividerOptions> | null)
```

设置分割线样式，不设置该属性则按“默认值”展示分割线。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Optional&lt;DividerOptions> \| null | Yes | 1.设置DividerOptions，则按设置的样式显示分割线。 默认值： {  strokeWidth: '1px' , color: '#33182431' } 2.设置为null时，不显示分割线。 3.strokeWidth设置过宽时，会覆盖文字。分割线会从每一个  Item底部开始，同时向上向下画分割线。 4.startMargin和endMargin的默认值与不设置divider属性时的分割线样式保持一致。startMargin和endMargin的和与  optionWidth的值相等时，不显示分割线。 startMargin和endMargin的和超过optionWidth的值时，按照默认样式显示分割线。 |

## dividerStyle

```TypeScript
dividerStyle(style: Optional<DividerStyleOptions>)
```

设置分割线样式，不设置该属性则按“默认值”展示分割线。该属性与divider互斥，按调用顺序生效。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;DividerStyleOptions> | Yes | 1.设置DividerOptions，则按设置的样式显示分割线。 默认值： { strokeWidth: '  1px' , color: '#33182431' } 2.设置为null或undefined时，展示默认分割线。 3.当mode为FLOAT_ABOVE_MENU时，  strokeWidth设置过宽时，会覆盖文字。分割线会从每一个Item底部开始，同时向上向下画分割线。当mode为EMBEDDED_IN_MENU时，分割线在Menu中展开，独立占用高度。 4  .startMargin和endMargin的默认值与不设置divider属性时的分割线样式保持一致。startMargin和endMargin的和与optionWidth的值相等时，不显示分割线。startMargin和  endMargin的和超过optionWidth的值时，按照默认样式显示分割线。 |

## font

```TypeScript
font(value: Font)
```

设置下拉按钮本身的文本样式。当size为0时，文本不显示，当size为负值时，文本的size按照默认值显示。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 下拉按钮本身的文本样式。 API version 11及以前默认值： { size:   `$r('sys.float.ohos_id_text_size_button1')`, weight: FontWeight.Medium } API version 12以后，如果设置  controlSize的值为：controlSize.SMALL，size默认值是`$r('sys.float.ohos_id_text_size_button2')`，否则为  `$r('sys.float.ohos_id_text_size_button1')`。 |

## font

```TypeScript
font(selectFont: Optional<Font>)
```

设置下拉按钮本身的文本样式。当size为0时，文本不显示，当size为负值时，文本的size按照默认值显示。与[font](arkts-selectattribute-c.md#font)相比，selectFont 参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectFont | Optional&lt;Font> | Yes | 下拉按钮本身的文本样式。 如果设置controlSize的值为：controlSize.SMALL，size默认值是  `$r('sys.float.ohos_id_text_size_button2')`，否则为`$r('sys.float.ohos_id_text_size_button1')`。 当selectFont的值为  undefined时，恢复为系统文本样式。 |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

设置下拉按钮本身的文本颜色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 下拉按钮本身的文本颜色。 默认值：`$r('sys.color.ohos_id_color_text_primary')`混合  `$r('sys.color.ohos_id_alpha_content_primary')`的透明度。 |

## fontColor

```TypeScript
fontColor(resColor: Optional<ResourceColor>)
```

设置下拉按钮本身的文本颜色。与[fontColor](arkts-selectattribute-c.md#fontColor)相比，resColor参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 下拉按钮本身的文本颜色。 当resColor的值为undefined时，默认值：  `$r('sys.color.ohos_id_color_text_primary')`混合`$r('sys.color.ohos_id_alpha_content_primary')`的透明度。 当value的值  为undefined时，维持上次取值。 |

## keyboardAvoidMode

```TypeScript
keyboardAvoidMode(mode: Optional<MenuKeyboardAvoidMode>)
```

设置下拉菜单是否避让软键盘。未通过该接口设置时，默认不避让软键盘。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | Optional&lt;MenuKeyboardAvoidMode> | Yes | 设置下拉菜单是否避让软键盘。取值为undefined时，按照MenuKeyboardAvoidMode.NONE处理，不避让软键  盘。 |

## menuAlign

```TypeScript
menuAlign(alignType: MenuAlignType, offset?: Offset)
```

设置下拉按钮与下拉菜单间的对齐方式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignType | MenuAlignType | Yes | 对齐方式类型。 默认值：MenuAlignType.START |
| offset | Offset | No | 按照对齐类型对齐后，下拉菜单相对下拉按钮的偏移量。 默认值：{dx: 0, dy: 0} |

## menuAlign

```TypeScript
menuAlign(alignType: Optional<MenuAlignType>, offset?: Offset)
```

设置下拉按钮与下拉菜单间的对齐方式。与[menuAlign](arkts-selectattribute-c.md#menuAlign)<sup>10+< /sup>相比，alignType参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignType | Optional&lt;MenuAlignType> | Yes | 对齐方式类型。 当alignType的值为undefined时，默认值：MenuAlignType.START |
| offset | Offset | No | 按照对齐类型对齐后，下拉菜单相对下拉按钮的偏移量。 默认值：{dx: 0, dy: 0} |

## menuBackgroundBlurStyle

```TypeScript
menuBackgroundBlurStyle(value: BlurStyle)
```

设置下拉菜单的背景模糊材质。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BlurStyle | Yes | 下拉菜单的背景模糊材质。 默认值：BlurStyle.COMPONENT_ULTRA_THICK |

## menuBackgroundBlurStyle

```TypeScript
menuBackgroundBlurStyle(style: Optional<BlurStyle>)
```

设置下拉菜单的背景模糊材质。与[menuBackgroundBlurStyle](arkts-selectattribute-c.md#menuBackgroundBlurStyle)<sup>11+</ sup>相比，style参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;BlurStyle> | Yes | 下拉菜单的背景模糊材质。 当style的值为undefined时，默认值：BlurStyle.COMPONENT_ULTRA_THICK |

## menuBackgroundBlurStyleOptions

```TypeScript
menuBackgroundBlurStyleOptions(blurStyle: Optional<BackgroundBlurStyleOptions>)
```

设置Select组件的背景模糊效果。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurStyle | Optional&lt;BackgroundBlurStyleOptions> | Yes | 设置Select组件的背景模糊效果。 |

## menuBackgroundColor

```TypeScript
menuBackgroundColor(value: ResourceColor)
```

设置下拉菜单的背景色。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 下拉菜单的背景色。 默认值： API version 11之前，默认值为$r('sys.color.ohos_id_color_card_bg')。  API version 11及之后，默认值为Color.Transparent。 |

## menuBackgroundColor

```TypeScript
menuBackgroundColor(resColor: Optional<ResourceColor>)
```

设置下拉菜单的背景色。与[menuBackgroundColor](arkts-selectattribute-c.md#menuBackgroundColor)<sup>11+</sup>相比， resColor参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 下拉菜单的背景色。 当resColor的值为undefined时，默认值为Color.Transparent。 |

## menuBackgroundEffect

```TypeScript
menuBackgroundEffect(effect: Optional<BackgroundEffectOptions>)
```

设置Select组件的背景属性。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | Optional&lt;BackgroundEffectOptions> | Yes | 设置Select组件的背景属性，包括：模糊半径、亮度、饱和度和颜色。 |

## menuDistortionMode

```TypeScript
menuDistortionMode(mode: DistortionMode)
```

Sets the distortion animation mode of the select with the new material.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | DistortionMode | Yes | Animation mode. The default value is DistortionMode.DISTORTION_AUTO. |

## menuEdgeLightMode

```TypeScript
menuEdgeLightMode(mode: EdgeLightMode)
```

Sets the edgelight animation mode of the select with the new material.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | EdgeLightMode | Yes | Animation mode. The default value is EdgeLightMode.EDGELIGHT_DISABLED. |

## menuItemContentModifier

```TypeScript
menuItemContentModifier(modifier: ContentModifier<MenuItemConfiguration>)
```

定制Select下拉菜单项内容区的方法。在应用了menuItemContentModifier后，下拉菜单的内容将完全由开发者自定义，此时为Select组件设置的分割线、选项颜色及下拉菜单的字体颜色等属性将不再生效。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | ContentModifier&lt;MenuItemConfiguration> | Yes | 在Select组件上，定制下拉菜单项内容区的方法。 modifier：内容修改器，开发者需要自定义  class实现ContentModifier接口。 |

## menuItemContentModifier

```TypeScript
menuItemContentModifier(modifier: Optional<ContentModifier<MenuItemConfiguration>>)
```

定制Select下拉菜单项内容区的方法。与 [menuItemContentModifier](arkts-selectattribute-c.md#menuItemContentModifier) <sup>12+</sup>相比，modifier参数新增了对undefined类型的支持。在应用了menuItemContentModifier后，下拉菜单的内容将完全由开发者自定义，此时为Select组件设置的分割线、选项颜色 及下拉菜单的字体颜色等属性将不再生效。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;ContentModifier&lt;MenuItemConfiguration>> | Yes | 在Select组件上，定制下拉菜单项内容区的方法。 modifier：内容修改  器，开发者需要自定义class实现ContentModifier接口。 当modifier的值为undefined时，不使用内容修改器。 |

## menuOutline

```TypeScript
menuOutline(outline: MenuOutlineOptions)
```

设置下拉菜单框的外描边样式。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| outline | MenuOutlineOptions | Yes | 下拉菜单框的外描边样式。 |

## menuSystemMaterial

```TypeScript
menuSystemMaterial(material: Optional<SystemUiMaterial>)
```

设置Select下拉菜单的系统材质。不同系统材质对应不同的属性影响效果，该接口影响下拉菜单背景色 [menuBackgroundColor](arkts-selectattribute-c.md#menuBackgroundColor)、边框颜色 [borderColor]CommonMethod#borderColor、边框宽度[borderWidth]CommonMethod#borderWidth、阴影 [shadow]CommonMethod#shadow(value: ShadowOptions | ShadowStyle)等参数，不建议与上述接口一起使用。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| material | Optional&lt;SystemUiMaterial> | Yes | 设置下拉菜单系统材质。材质设置为非法值、undefined时，按照不设置系统材质处理。 |

## minKeyboardAvoidDistance

```TypeScript
minKeyboardAvoidDistance(distance: Optional<LengthMetrics>)
```

设置Select的菜单避让软键盘的最小距离。未通过该接口设置，最小距离默认为8vp。仅当[keyboardAvoidMode](arkts-selectattribute-c.md#keyboardAvoidMode)设置为避让软键盘时生 效。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| distance | Optional&lt;LengthMetrics> | Yes | 设置下拉菜单避让软键盘的最小距离。设置为负数、undefined时，按照8vp处理。 |

## onSelect

```TypeScript
onSelect(callback: (index: number, value: string) => void)
```

下拉菜单选中某一项时，会触发回调。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (index: number, value: string) => void | Yes |  |

## onSelect

```TypeScript
onSelect(callback: Optional<OnSelectCallback>)
```

下拉菜单选中某一项时，会触发回调。与[onSelect](arkts-selectattribute-c.md#onSelect)相比， callback参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Optional&lt;OnSelectCallback> | Yes | 下拉菜单选中某一项的回调。 当callback的值为undefined时，不使用回调函数。 |

## optionBgColor

```TypeScript
optionBgColor(value: ResourceColor)
```

设置下拉菜单项的背景色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 下拉菜单项的背景色。 默认值： API version 11之前，默认值为Color.White。 API version 11及之后，默认  值为Color.Transparent。 |

## optionBgColor

```TypeScript
optionBgColor(resColor: Optional<ResourceColor>)
```

设置下拉菜单项的背景色。与[optionBgColor](arkts-selectattribute-c.md#optionBgColor)相比，resColor参数新增了对undefined类型 的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 下拉菜单项的背景色。 当resColor的值为undefined时，下拉菜单项的背景色为Color.White。 |

## optionFont

```TypeScript
optionFont(value: Font)
```

设置下拉菜单项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 下拉菜单项的文本样式。 默认值： { size: $r('sys.float.ohos_id_text_size_body1'), weight:   FontWeight.Regular } |

## optionFont

```TypeScript
optionFont(selectFont: Optional<Font>)
```

设置下拉菜单项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。 与[optionFont](arkts-selectattribute-c.md#optionFont)相比，selectFont参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectFont | Optional&lt;Font> | Yes | 下拉菜单项的文本样式。 当selectFont的值为undefined时，默认值： { size: $r('  sys.float.ohos_id_text_size_body1'), weight: FontWeight.Regular } |

## optionFontColor

```TypeScript
optionFontColor(value: ResourceColor)
```

设置下拉菜单项的文本颜色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 下拉菜单项的文本颜色。 默认值：$r('sys.color.ohos_id_color_text_primary') |

## optionFontColor

```TypeScript
optionFontColor(resColor: Optional<ResourceColor>)
```

设置下拉菜单项的文本颜色。与[optionFontColor](arkts-selectattribute-c.md#optionFontColor)相比，resColor参数新增了对 undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 下拉菜单项的文本颜色。 当resColor的值为undefined时，默认值：$r('  sys.color.ohos_id_color_text_primary') |

## optionHeight

```TypeScript
optionHeight(value: Dimension)
```

设置下拉菜单显示的最大高度，不支持设置百分比。默认最大高度是屏幕可用高度的80%，设置的菜单最大高度不能超过默认最大高度。 当设置为异常值或零时，属性不生效。 如果下拉菜单所有选项的实际高度没有设定的高度大，下拉菜单的高度按实际高度显示。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | 下拉菜单显示的最大高度。 |

## optionHeight

```TypeScript
optionHeight(height: Optional<Dimension>)
```

设置下拉菜单显示的最大高度，不支持设置百分比。默认最大高度是屏幕可用高度的80%，设置的菜单最大高度不能超过默认最大高度。与 [optionHeight](arkts-selectattribute-c.md#optionHeight)<sup>11+</sup>相比，height参数新增了对undefined类型的支持。 当设置为异常值或零时，属性不生效。 如果下拉菜单所有选项的实际高度小于设定的高度，下拉菜单的高度按实际高度显示。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| height | Optional&lt;Dimension> | Yes | 下拉菜单显示的最大高度。 当height的值为undefined时，属性不生效，下拉菜单最大高度设为默认值，即下拉菜单最大高度默认值为屏幕可用  高度的80%。 |

## optionTextModifier

```TypeScript
optionTextModifier(modifier: Optional<TextModifier>)
```

定制Select下拉菜单未选中项文本样式的方法，在应用optionTextModifier之后，下拉菜单未选中项的文本样式将完全由开发者自定义。 如果[optionFont](arkts-selectattribute-c.md#optionFont)与optionTextModifier的Font属性同时设置，则优先使用 [optionFont](arkts-selectattribute-c.md#optionFont)设置下拉菜单未选中项的文本样式； [optionFont](arkts-selectattribute-c.md#optionFont)中缺省的属性将设置为对应的默认值。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;TextModifier> | Yes | 在Select组件上，定制Select下拉菜单未选中项样式的方法。 当modifier的值为undefined时，不自定义下拉菜单  未选中项的文本样式。 |

## optionWidth

```TypeScript
optionWidth(value: Dimension | OptionWidthMode )
```

设置下拉菜单项的宽度，不支持设置百分比。OptionWidthMode类型为枚举类型，OptionWidthMode决定下拉菜单是否继承下拉按钮宽度。 当设置为异常值或小于最小宽度56vp时，属性无效，菜单项宽度设为默认值，即2栅格。 Select组件距屏幕边缘的左右间距为16vp，建议将组件本身及菜单项的宽度设置为小于等于`calc(100% - 32vp)`的值，以避免下拉菜单弹出时发生偏移。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension \| OptionWidthMode | Yes | 下拉菜单项的宽度。 |

## optionWidth

```TypeScript
optionWidth(width: Optional<Dimension | OptionWidthMode> )
```

设置下拉菜单项的宽度，不支持设置百分比。OptionWidthMode类型为枚举类型，OptionWidthMode决定下拉菜单是否继承下拉按钮宽度。与 [optionWidth](arkts-selectattribute-c.md#optionWidth)<sup>11+</sup>相比，width参数新增了对 undefined类型的支持。 当设置为异常值或小于最小宽度56vp时，属性无效，菜单项宽度设为默认值，即2栅格。 Select组件距屏幕边缘的左右间距为16vp，建议将组件本身及菜单项的宽度设置为小于等于`calc(100% - 32vp)`的值，以避免下拉菜单弹出时发生偏移。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | Optional&lt;Dimension \| OptionWidthMode> | Yes | 下拉菜单项的宽度。 当width的值为undefined时，属性无效，菜单项宽度设为默认值，即2栅格。 |

## selected

```TypeScript
selected(value: number | Resource)
```

设置下拉菜单初始选项的索引，第一项的索引为0。当不设置selected属性或设置为异常值时，默认选中值为-1，菜单项不选中；当设置为undefined、null时，选中第一项。 从API version 10开始，该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 从API version 18开始，该属性支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| Resource | Yes | 下拉菜单初始选项的索引，索引值从0开始。 [since 11] |

## selected

```TypeScript
selected(numCount: Optional<number | Resource>)
```

设置下拉菜单初始选项的索引，第一项的索引为0。当不设置selected属性或设置异常值时，默认选择值为-1，菜单项不选中；当设置为undefined、null时，选中第一项。 该属性支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、 [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| numCount | Optional&lt;number \| Resource> | Yes | 下拉菜单初始选项的索引。 当numCount的值为undefined时，选中第一项。 |

## selectedOptionBgColor

```TypeScript
selectedOptionBgColor(value: ResourceColor)
```

设置下拉菜单选中项的背景色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 下拉菜单选中项的背景色。 默认值：`$r('sys.color.ohos_id_color_component_activated')`混合  `$r('sys.color.ohos_id_alpha_highlight_bg')`的透明度。 |

## selectedOptionBgColor

```TypeScript
selectedOptionBgColor(resColor: Optional<ResourceColor>)
```

设置下拉菜单选中项的背景色。与[selectedOptionBgColor](arkts-selectattribute-c.md#selectedOptionBgColor)相比， resColor参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 下拉菜单选中项的背景色。 当resColor的值为undefined时，默认值：  `$r('sys.color.ohos_id_color_component_activated')`混合`$r('sys.color.ohos_id_alpha_highlight_bg')`的透明度。 |

## selectedOptionFont

```TypeScript
selectedOptionFont(value: Font)
```

设置下拉菜单选中项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 下拉菜单选中项的文本样式。 默认值： { size: $r('sys.float.ohos_id_text_size_body1'), weight:   FontWeight.Regular } |

## selectedOptionFont

```TypeScript
selectedOptionFont(selectFont: Optional<Font>)
```

设置下拉菜单选中项的文本样式。当size为0的时候，文本不显示，当size为负值的时候，文本的size按照默认值显示。与 [selectedOptionFont](arkts-selectattribute-c.md#selectedOptionFont)相比，selectFont参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectFont | Optional&lt;Font> | Yes | 下拉菜单选中项的文本样式。 当selectFont的值为undefined时，默认值： { size: $r('  sys.float.ohos_id_text_size_body1'), weight: FontWeight.Regular } |

## selectedOptionFontColor

```TypeScript
selectedOptionFontColor(value: ResourceColor)
```

设置下拉菜单选中项的文本颜色。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 下拉菜单选中项的文本颜色。 默认值：$r('sys.color.ohos_id_color_text_primary_activated') |

## selectedOptionFontColor

```TypeScript
selectedOptionFontColor(resColor: Optional<ResourceColor>)
```

设置下拉菜单选中项的文本颜色。与[selectedOptionFontColor](arkts-selectattribute-c.md#selectedOptionFontColor)相比， resColor参数新增了对undefined类型的支持。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resColor | Optional&lt;ResourceColor> | Yes | 下拉菜单选中项的文本颜色。 当resColor的值为undefined时，默认值为$r('  sys.color.ohos_id_color_text_primary_activated')。 |

## selectedOptionTextModifier

```TypeScript
selectedOptionTextModifier(modifier: Optional<TextModifier>)
```

定制Select下拉菜单选中项文本样式的方法，在应用selectedOptionTextModifier之后，下拉菜单选中项的文本样式将完全由开发者自定义。 如果[selectedOptionFont](arkts-selectattribute-c.md#selectedOptionFont)与selectedOptionTextModifier的Font属性同时设 置，则优先使用[selectedOptionFont](arkts-selectattribute-c.md#selectedOptionFont)设置下拉菜单选中项的文本样式；若未设置 [selectedOptionFont](arkts-selectattribute-c.md#selectedOptionFont)，则优先使用 [optionFont](arkts-selectattribute-c.md#optionFont)设置下拉菜单选中项的文本样式。其中 [selectedOptionFont](arkts-selectattribute-c.md#selectedOptionFont)或者 [optionFont](arkts-selectattribute-c.md#optionFont)缺省的属性将设置为对应的默认值。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;TextModifier> | Yes | 设置下拉菜单项选中项的文本样式。 开发者可以根据需要管理和维护文本的样式进行设置。 当modifier的值为  undefined时，不自定义下拉菜单项选中项的文本样式。 |

## showDefaultSelectedIcon

```TypeScript
showDefaultSelectedIcon(show: boolean)
```

设置是否显示默认选择的图标。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| show | boolean | Yes | 是否显示默认选定的图标。 true：显示默认选择的图标；false：不显示默认选择的图标，通过突出显示背景色来表示选中。 默认值：false 当show为  true时，若设置了selectedOptionBgColor选中项的背景色时，则同时显示选中项的背景色和默认选定的图标；若未通过selectedOptionBgColor设置选中项的背景色时，不突出显示背景色，只显示默认  选定的图标。 |

## showInSubWindow

```TypeScript
showInSubWindow(showInSubWindow: Optional<boolean>)
```

设置下拉菜单是否显示在子窗中。未通过该接口设置时，下拉菜单默认不显示在子窗中。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| showInSubWindow | Optional&lt;boolean> | Yes | 设置下拉菜单是否显示在子窗中。 true代表下拉菜单显示在子窗中。 false代表下拉菜单不显示在子窗中。 |

## space

```TypeScript
space(value: Length)
```

设置下拉菜单项的文本与箭头的间距。不支持设置百分比。将间距设置为null、undefined，或者小于等于8的值时，取默认值。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 下拉菜单项的文本与箭头的间距。 默认值：8 说明： 设置string类型时，不支持百分比。 |

## space

```TypeScript
space(spaceLength: Optional<Length>)
```

设置下拉菜单项的文本与箭头的间距。不支持设置百分比。设置为null、undefined，或者小于等于8的值，取默认值。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| spaceLength | Optional&lt;Length> | Yes | 下拉菜单项的文本与箭头之间的间距。 当spaceLength的值为undefined时，默认值：8 |

## textModifier

```TypeScript
textModifier(modifier: Optional<TextModifier>)
```

定制Select按钮文本样式的方法，在应用了textModifier之后，Select按钮的文本样式将完全由开发者自定义。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | Optional&lt;TextModifier> | Yes | 在Select组件上，定制按钮文本样式的方法。 当modifier的值为undefined时，不自定义文本样式。 |

## value

```TypeScript
value(value: ResourceStr)
```

设置下拉按钮的文本内容。选中菜单项后，按钮文本将自动更新为选中的菜单项文本。 从API version 10开始，该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)双向绑定变量。 从API version 18开始，该参数支持[!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceStr | Yes | 下拉按钮本身的文本内容。 说明： 文本长度大于列宽时，文本被截断。 [since 11] |

## value

```TypeScript
value(resStr: Optional<ResourceStr>)
```

设置下拉按钮的文本内容。选中菜单项后，按钮文本将自动更新为选中的菜单项文本。与[value](arkts-selectattribute-c.md#value)相比，resStr参数新增了对 undefined类型的支持。 该参数支持[$$](docroot://ui/state-management/arkts-two-way-sync.md)、 [!!](docroot://ui/state-management/arkts-new-binding.md#系统组件参数双向绑定)双向绑定变量。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resStr | Optional&lt;ResourceStr> | Yes | 下拉按钮本身的文本内容。 当resStr的值为undefined时维持上次取值。 |

