# TextAttribute

除支持[通用属性]common，还支持以下属性： **布局与对齐** 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** TextAttributeextends: CommonMethod<TextAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## baselineOffset

```TypeScript
baselineOffset(value: number | ResourceStr)
```

设置文本基线的偏移量。 设置该值为百分比时，按默认值显示。 正数内容向上偏移，负数向下偏移。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| ResourceStr | Yes | 文本基线的偏移量。 默认值：0 从API version 20开始，支持[Resource]Resource类  型。 [since 20] |

## bindSelectionMenu

```TypeScript
bindSelectionMenu(spanType: TextSpanType, content: CustomBuilder, responseType: TextResponseType,
    options?: SelectionMenuOptions)
```

设置自定义选择菜单。 bindSelectionMenu的长按响应时长为600ms， [bindContextMenu]CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions) 的长按响应时长为800ms，当两者同时绑定且触发方式均为长按时，优先响应bindSelectionMenu。 自定义菜单超长时，建议内部嵌套使用[Scroll]scroll组件，避免键盘被遮挡。 从API版本26.0.0开始，文本组件调用该接口时，options中的menuType属性传入MenuType.PREVIEW_MENU，设置图片预览菜单的能力生效。 如果要使用图片预览菜单，需要同时把spanType设置为TextSpanType.IMAGE，responseType设置为TextResponseType.LONG_PRESS，options中的menuType设置为 MenuType.PREVIEW_MENU才会生效。 当[copyOption](arkts-textattribute-c.md#copyOption)为CopyOptions.None时，设置图片预览菜单将不会生效。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。 > > 通过[editMenuOptions](arkts-textattribute-c.md#editMenuOptions)设置文本选择菜单时，保留系统默认的风格，触发菜单弹出的条件不变。 > > 通过[bindSelectionMenu](arkts-textattribute-c.md#bindSelectionMenu)设置文本选择菜单时，风格由开发者定义，触发菜单弹出的条件由开发者定义。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| spanType | TextSpanType | Yes | 选择菜单的类型。 默认值：TextSpanType.TEXT |
| content | CustomBuilder | Yes | 选择菜单的内容。 |
| responseType | TextResponseType | Yes | 选择菜单的响应类型。 默认值：TextResponseType.LONG_PRESS |
| options | SelectionMenuOptions | No |  |

## caretColor

```TypeScript
caretColor(color: ResourceColor)
```

设置文本框选中区域手柄颜色。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ResourceColor | Yes | 文本选中手柄颜色。 默认值：'#007DFF' |

## compressLeadingPunctuation

```TypeScript
compressLeadingPunctuation(enabled: Optional<boolean>)
```

设置是否开启行首标点符号压缩。 > **说明：** > > - 行首标点符号默认不压缩。 > > - 支持压缩的标点符号，请参考[ParagraphStyle](../../apis-arkgraphics2d/arkts-apis/arkts-text-paragraphstyle-i.md#ParagraphStyle)的行首压缩的标点范围。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | Yes | 是否开启行首标点符号压缩。 true表示开启行首标点符号压缩；false表示不开启行首标点符号压缩。 |

## contentTransition

```TypeScript
contentTransition(transition: Optional<ContentTransition>)
```

可以设置为数字翻牌动效[NumericTextTransition]NumericTextTransition。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transition | Optional&lt;ContentTransition> | Yes | 文本动效属性。 |

## copyOption

```TypeScript
copyOption(value: CopyOptions)
```

设置组件是否支持文本可复制粘贴。 从API version 20开始，当Text组件执行复制操作时，会将HTML格式的内容添加到剪贴板中。 - 当Text组件包含子组件时，仅支持[Span]span和[ImageSpan]image_span子组件向剪贴板中添加HTML格式的内容。 - 设置Text组件的属性字符串时，请参考属性字符串[toHtml]StyledString#toHtml接口文档，以了解支持转换为HTML的范围。 设置copyOption为CopyOptions.InApp或者CopyOptions.LocalDevice时： - 长按文本，会弹出文本选择菜单，可选中文本并进行复制、全选操作。 - 默认情况下，长按选中文本可拖拽。若要取消此功能，可将 `draggable` 设置为 `false`。 - 若需要支持Ctrl+C复制，需同时设置[textSelectable](arkts-textattribute-c.md#textSelectable)为TextSelectableMode.SELECTABLE_FOCUSABLE。 此时Text会监听onClick事件，手势事件为非冒泡事件，若需要点击Text组件区域响应父组件的点击手势事件，建议在父组件上使用 [parallelGesture]CommonMethod#parallelGesture绑定手势识别，也可参考 [示例7（设置文本识别）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#示例7设置文本识别)。 由于卡片没有长按事件，此场景下长按文本，不会弹出文本选择菜单。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CopyOptions | Yes | 组件是否支持文本可复制粘贴。 默认值：CopyOptions.None |

## dataDetectorConfig

```TypeScript
dataDetectorConfig(config: TextDataDetectorConfig)
```

设置文本识别配置，可配置识别类型、实体显示样式，以及是否开启长按预览等。 需配合[enableDataDetector](arkts-textattribute-c.md#enableDataDetector)一起使用，设置enableDataDetector为true时，dataDetectorConfig的配 置才能生效。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | TextDataDetectorConfig | Yes | 文本识别配置。 |

## decoration

```TypeScript
decoration(value: DecorationStyleInterface)
```

设置文本装饰线样式及其颜色。 > **说明：** > > 当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见"gjyqp"等英文字符。 > > 当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值"#00FFFFFF"时，装饰线颜色设置为透明色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | DecorationStyleInterface | Yes | 文本装饰线样式对象。 默认值： {  type: TextDecorationType.None,    color: Color.Black,  style: TextDecorationStyle.SOLID  } 说明： style参数不支持卡片能力。 [since 12] |

## draggable

```TypeScript
draggable(value: boolean)
```

设置选中文本拖拽效果。 不能和[onDragStart]CommonMethod#onDragStart事件同时使用。 当draggable设置为true时，需配合[CopyOptions]CopyOptions使用，设置copyOptions为CopyOptions.InApp或者CopyOptions.LocalDevice，支 持对选中文本的拖拽及复制到输入框。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 选中文本拖拽效果。 true表示选中文本可拖拽，false表示不可拖拽。 默认值：false |

## editMenuOptions

```TypeScript
editMenuOptions(editMenu: EditMenuOptions)
```

设置自定义菜单扩展项，允许用户设置扩展项的文本内容、图标、回调方法。 调用[disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20)或 [disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20) 接口屏蔽文本选择菜单内的系统服务菜单项时，editMenuOptions接口内回调方法[onCreateMenu]EditMenuOptions.onCreateMenu的入参列表中不包含被屏蔽的菜单选项。 > **说明：** > > 通过[editMenuOptions](arkts-textattribute-c.md#editMenuOptions)设置文本选择菜单时，保留系统默认的风格，触发菜单弹出的条件不变。 > > 通过[bindSelectionMenu](arkts-textattribute-c.md#bindSelectionMenu)设置文本选择菜单时，风格由开发者定义，触发菜单弹出的条件由开发者定义。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | EditMenuOptions | Yes | 扩展菜单选项。 |

## ellipsisMode

```TypeScript
ellipsisMode(value: EllipsisMode)
```

设置省略位置。 ellipsisMode属性需要与overflow设置为TextOverflow.Ellipsis以及maxLines使用，单独设置ellipsisMode属性不生效。 EllipsisMode.START和EllipsisMode.CENTER仅在单行超长文本生效。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | EllipsisMode | Yes | 省略位置。 默认值：EllipsisMode.END |

## enableAutoSpacing

```TypeScript
enableAutoSpacing(enabled: Optional<boolean>)
```

设置是否开启中文与西文的自动间距。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | Yes | 是否开启中文与西文的自动间距。 true为开启自动间距，false为不开启。 默认值：false |

## enableDataDetector

```TypeScript
enableDataDetector(enable: boolean)
```

设置是否进行文本特殊实体识别。当enableDataDetector设置为true时，识别特殊实体。 所识别实体的样式如下，即字体颜色改为蓝色、并添加蓝色下划线。 > **说明：** > > - 设备底层需要具备文本识别能力，该接口才能生效。 > > - 当[textOverflow](arkts-textattribute-c.md#textOverflow)设置为TextOverflow.MARQUEE时，不进行文本特殊实体识别。 <!--RP2--><!--RP2End-->

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 使能文本识别。 true表示文本可实体识别，false表示不可识别。 默认值：false |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(isEnabled: boolean)
```

设置是否开启触控反馈。 开启触控反馈时，需要在工程的[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中配置requestPermissions字段开启振动权限，配 置如下： > **说明：** > > 从API version 18开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | 是否开启触控反馈。 true表示开启，false表示不开启。 默认值：true |

## enableSelectedDataDetector

```TypeScript
enableSelectedDataDetector(enable: boolean | undefined)
```

设置是否对选中文本进行实体识别。该接口依赖设备底层应具有文本识别能力，否则设置不会生效。 当enableSelectedDataDetector设置为true时，默认识别所有类型的实体。 需要[CopyOptions]CopyOptions为CopyOptions.LocalDevice或CopyOptions.CROSS_DEVICE时，本功能生效。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean \| undefined | Yes | 开启选中词文本识别。 true：开启识别，false：关闭识别。默认值为：true。 |

## fallbackLineSpacing

```TypeScript
fallbackLineSpacing(enabled: Optional<boolean>)
```

针对多行文字叠加，支持行高基于文字实际高度自适应。此接口仅当行高小于文字实际高度时生效。不通过该接口设置，默认行高不基于文字实际高度自适应。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | Yes | 行高是否基于文字实际高度自适应。 true表示行高基于文字实际高度自适应；false表示行高不基于文字实际高度自适应。 |

## font

```TypeScript
font(value: Font)
```

设置文本样式。 包括字体大小、字体粗细、字体族和字体风格。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Font | Yes | 文本样式。 |

## font

```TypeScript
font(fontValue: Font, options?: FontSettingOptions)
```

设置文本样式，支持设置字体配置项。 仅Text组件生效，其子组件不生效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontValue | Font | Yes | 设置文本样式。 |
| options | FontSettingOptions | No | 设置字体配置项。 |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

设置字体颜色。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | 字体颜色。 默认值：'#e6182431' Wearable设备上默认值为：'#c5ffffff' |

## fontFamily

```TypeScript
fontFamily(value: string | Resource)
```

设置字体族。 > **说明：** > > 可以使用[loadFontSync](../../apis-arkgraphics2d/arkts-apis/arkts-text-fontcollection-c.md#loadFontSync)注册自定义字体。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | 字体族。默认字体'HarmonyOS Sans'。 使用多个字体时，请用逗号','分隔，字体的优先级按顺序生效。例如：'Arial,HarmonyOS  Sans'。 |

## fontFeature

```TypeScript
fontFeature(value: string)
```

设置文字特性效果，比如数字等宽的特性。 格式为：normal \| \<feature-tag-value\> \<feature-tag-value\>的格式为：\<string\> \[ \<integer\> \| on \| off ] \<feature-tag-value\>的个数可以有多个，中间用','隔开。 例如，使用等宽数字的输入格式为："ss01" on。 > **说明：** > > 不支持Text内同时存在文本内容和Span或ImageSpan子组件。如果同时存在，只显示Span或ImageSpan内的内容。 > > 字体排版引擎会对开发者传入的宽度[width]CommonMethod#width(value: Length)进行向下取整，保证是整型像素后进行排版。如果向上取整，可能会出现文字右侧被截断。 > > 当多个Text组件在[Row]row容器内布局且没有设置具体的布局分配信息时，Text会以Row的最大尺寸进行布局。如果需要子组件主轴累加的尺寸不超过Row容器主轴的尺寸，可以设置 > [layoutWeight]CommonMethod#layoutWeight或者是以[Flex]common布局来约束子组件的主轴尺寸。 > > 系统默认字体支持的liga连字：Th fb ff fb ffb ffh ffi ffk ffl fh fi fk fl rf rt rv rx ry。常导致Span、属性字符串的效果不符合预期，关闭liga连字特性可以规避。 > > 文字特性效果与使用的字体文件密切相关。例如，8标点挤压功能在当前系统默认字体中仅对左侧标点符号生效，而右侧标点符号及感叹号、顿号、问号均不生效。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | 文字特性效果。 |

## fontSize

```TypeScript
fontSize(value: number | string | Resource)
```

设置字体大小。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | 字体大小。fontSize为number类型时，使用fp单位。不支持设置百分比字符串。 默认值：16fp  Wearable设备上默认值为：15fp |

## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

设置字体样式。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FontStyle | Yes | 字体样式。 默认值：FontStyle.Normal |

## fontVariations

```TypeScript
fontVariations(fontVariations: Array<FontVariation>)
```

设置可变字体的属性。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontVariations | Array&lt;FontVariation> | Yes | 可变字体的属性数组，数组成员为可变字体的各种属性。fontVariations属性的优先级高于  [fontWeight]TextAttribute#fontWeight(weight: number \| FontWeight \| ResourceStr, options?: FontSettingOptions)  。 |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr)
```

设置文本的字体粗细，设置过大可能会在不同字体下有截断。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | 文本的字体粗细，number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类  型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。 默认值：  FontWeight.Normal Wearable设备上默认值为：FontWeight.Regular 从API version 20开始，支持[Resource]Resource类  型。 [since 20] |

## fontWeight

```TypeScript
fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions)
```

设置文本字重，支持设置字体配置项。 仅Text组件生效，其子组件不生效。<!--RP4--><!--RP4End-->

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| weight | number \| FontWeight \| ResourceStr | Yes | 设置文本字重。number类型取值[100, 900]，取值间隔为100，默认为400，取值越大，字体越粗。string类  型仅支持number类型取值的字符串形式，例如"400"，以及"bold"、"bolder"、"lighter"、"regular"、"medium"，分别对应FontWeight中相应的枚举值。 从API  version 20开始，支持[Resource]Resource类型。 [since 20] |
| options | FontSettingOptions | No | 设置字体配置项。 当options的参数enableVariableFontWeight取值false时，禁用可变字重调节，weight取值为  [100, 900]范围内的整百数值时，字重取值为weight。weight是非整百数值时，字重取默认值400。 当options的参数enableVariableFontWeight取值true时，启用可变字重调  节，weight取值为[100, 900]范围内任意整数时，字重取值为weight。 |

## halfLeading

```TypeScript
halfLeading(halfLeading: boolean)
```

设置文本是否垂直居中。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| halfLeading | boolean | Yes | 设置文本是否垂直居中。 true表示将行间距平分至行的顶部与底部，false则不平分。 默认值：false |

## heightAdaptivePolicy

```TypeScript
heightAdaptivePolicy(value: TextHeightAdaptivePolicy)
```

设置文本自适应布局调整字号的方式。 规则如下： - MAX_LINES_FIRST模式：优先使用[maxLines](arkts-textattribute-c.md#maxLines)属性来调整文本高度。如果使用maxLines属性的布局大小超过了布局约束，则尝试在 [minFontSize](arkts-textattribute-c.md#minFontSize)和[maxFontSize](arkts-textattribute-c.md#maxFontSize)的范围内缩小字体以显示更多文本。 - MIN_FONT_SIZE_FIRST模式：优先使用minFontSize属性来调整文本高度。如果使用minFontSize属性可以将文本布局在一行中，则尝试在minFontSize和maxFontSize的范围内增大字体并使 用最大限度的字体大小在一行内显示，否则按minFontSize显示。 - LAYOUT_CONSTRAINT_FIRST模式：优先使用布局约束来调整文本高度。如果布局大小超过布局约束，则尝试在minFontSize和maxFontSize的范围内缩小字体以满足布局约束。如果将字体大小缩小到 minFontSize后，布局大小仍然超过布局约束，则删除超过布局约束的行。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TextHeightAdaptivePolicy | Yes | 文本自适应高度的方式。 默认值：TextHeightAdaptivePolicy.MAX_LINES_FIRST |

## includeFontPadding

```TypeScript
includeFontPadding(include: Optional<boolean>)
```

设置是否在首行和尾行增加间距以避免文字截断。不通过该接口设置，默认不增加间距。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| include | Optional&lt;boolean> | Yes | 是否在首行和尾行增加间距以避免文字截断。 true表示在首行和尾行增加间距；false表示在首行和尾行不增加间距。 |

## incrementalUpdatePolicy

```TypeScript
incrementalUpdatePolicy(policy: IncrementalUpdatePolicy | undefined)
```

设置文本渲染的增量更新策略。未通过该接口设置时，默认为IncrementalUpdatePolicy.NONE。 该接口仅在Text内容包含属性字符串（StyledString）时生效。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | IncrementalUpdatePolicy \| undefined | Yes | 文本渲染的增量更新策略。 设置为undefined时，按  IncrementalUpdatePolicy.NONE处理。 |

## letterSpacing

```TypeScript
letterSpacing(value: number | ResourceStr)
```

设置文本字符间距。 设置该值为百分比时，按默认值显示。设置该值为0时，按默认值显示。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。 当取值为负值时，文字会被压缩。负值过小时会将组件内容区大小压缩为0，导致内容无法显示。 对每个字符生效，包括行尾字符。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| ResourceStr | Yes | 文本字符间距。 默认值：0 单位：  [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 从API version 20开始，支持  [Resource]Resource类型。 [since 20] |

## lineBreakStrategy

```TypeScript
lineBreakStrategy(strategy: LineBreakStrategy)
```

设置折行规则。该属性在[wordBreak](arkts-textattribute-c.md#wordBreak)不等于WordBreak.BREAK_ALL的时候生效，且不支持连词符。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | LineBreakStrategy | Yes | 文本的折行规则。 默认值：LineBreakStrategy.GREEDY |

## lineHeight

```TypeScript
lineHeight(value: number | string | Resource)
```

设置文本的文本行高。 设置值不大于0时，不限制文本行高，自适应字体大小，number类型时单位为fp。string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。 > **说明：** > > 特殊字符字体高度远超出同行的其他字符高度时，文本框出现截断、遮挡、内容相对位置发生变化等不符合预期的显示异常，需要开发者调整组件高度、行高等属性，修改对应的页面布局。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | 文本的文本行高。 |

## lineHeightMultiple

```TypeScript
lineHeightMultiple(value: number | undefined)
```

使用倍数模式设置文本的行高。 设置行高为入参（value）与字高（fontHeight）的乘积。 > **说明：** > > 当lineHeightMultiple使用有效值和[lineHeight](arkts-textattribute-c.md#lineHeight)或 > [lineSpacing](arkts-textattribute-c.md#lineSpacing)同时设置时，仅lineHeightMultiple生效。 > lineHeightMultiple小于0时，lineHeightMultiple不生效，使用[lineHeight](arkts-textattribute-c.md#lineHeight)和 > [lineSpacing](arkts-textattribute-c.md#lineSpacing)设置行高和行间距。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| undefined | Yes | 使用行高的倍数数值。 取值范围：  [0, +∞) 说明： - 设置的值小于0时，lineHeightMultiple不生效。 - 设置的值等于0时，等效于设置为1，表现为行高没有变化。 - 支持小数输入。 |

## lineSpacing

```TypeScript
lineSpacing(value: LengthMetrics)
```

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes | 文本的行间距。默认值：0 |

## lineSpacing

```TypeScript
lineSpacing(value: LengthMetrics, options?: LineSpacingOptions)
```

设置文本的行间距。当不配置LineSpacingOptions时，首行上方和尾行下方默认会有行间距。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics | Yes | 文本的行间距。设置值不大于0时，取默认值0。 |
| options | LineSpacingOptions | No | 设置行间距配置项。 默认值：{ onlyBetweenLines: false } |

## marqueeOptions

```TypeScript
marqueeOptions(options: Optional<TextMarqueeOptions>)
```

设置文本跑马灯模式的配置项。 当textOverflow设置为TextOverflow.MARQUEE时，marqueeOptions的设置才能生效。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | Optional&lt;TextMarqueeOptions> | Yes | 当Text组件的textOverflow属性设置为MARQUEE时，可通过marqueeOptions设置跑马灯动效具体的属性，如  开关、步长、循环次数、方向等。 |

## maxFontScale

```TypeScript
maxFontScale(scale: number | Resource)
```

设置文本最大的字体缩放倍数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number \| Resource | Yes | 文本最大的字体缩放倍数。 取值范围：[1, +∞) 说明： 设置的值小于1时，按值为1处理，其余异常值默认不生效。 |

## maxFontSize

```TypeScript
maxFontSize(value: number | string | Resource)
```

设置文本最大显示字号。 string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。 需配合[minFontSize](arkts-textattribute-c.md#minFontSize)以及[maxLines](arkts-textattribute-c.md#maxLines)或布局大小限制使用，单独设置不生效。 自适应字号生效时，fontSize设置不生效。 maxFontSize小于等于0或者maxFontSize小于minFontSize时，自适应字号不生效，此时按照[fontSize](arkts-textattribute-c.md#fontSize)属性的值生效，未设置时按照其默认值生 效。 从API version 18开始支持在子组件和属性字符串上生效，未设置字号的部分会自适应。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | 文本最大显示字号。 单位：  [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) |

## maxLineHeight

```TypeScript
maxLineHeight(value: LengthMetrics | undefined)
```

设置文本的最大行高，设置值不大于0时，最大行高不受限制。 maxLineHeight小于minLineHeight时，maxLineHeight按照minLineHeight属性的值生效。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics \| undefined | Yes | 文本的最大行高，不支持百分比。 设置的值不大于0时按0处理，设置为0时，最大行高不受限制。 |

## maxLines

```TypeScript
maxLines(value: number)
```

设置文本的最大行数。 默认情况下，文本是自动折行的，如果指定此属性，则文本最多不会超过指定的行数。如果有多余的文本，可以通过[textOverflow](arkts-textattribute-c.md#textOverflow)来指定截断方式。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 文本的最大行数。 说明： 取值范围：[0, INT32_MAX] 设置为0时，不显示文本内容。 |

## minFontScale

```TypeScript
minFontScale(scale: number | Resource)
```

设置文本最小的字体缩放倍数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number \| Resource | Yes | 文本最小的字体缩放倍数。 取值范围：[0, 1] 说明： 设置的值小于0时按0处理，大于1时按1处理，其余异常值默认不生  效。 |

## minFontSize

```TypeScript
minFontSize(value: number | string | Resource)
```

设置文本最小显示字号。 string类型支持number类型取值的字符串形式，可以附带单位，例如"10"、"10fp"。 需配合[maxFontSize](arkts-textattribute-c.md#maxFontSize)以及[maxLines](arkts-textattribute-c.md#maxLines)或布局大小限制使用，单独设置不生效。 自适应字号生效时，fontSize设置不生效。 minFontSize小于或等于0时，自适应字号不生效，此时按照[fontSize](arkts-textattribute-c.md#fontSize)属性的值生效，未设置时按照其默认值生效。 从API version 18开始，支持在子组件和属性字符串上生效，未设置字号的部分会自适应。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | 文本最小显示字号。 单位：  [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) |

## minLineHeight

```TypeScript
minLineHeight(value: LengthMetrics | undefined)
```

设置文本的最小行高，设置值不大于0时，取默认值0。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LengthMetrics \| undefined | Yes | 文本的最小行高，不支持百分比。 设置的值不大于0时按0处理。 |

## minLines

```TypeScript
minLines(minLines: Optional<number>)
```

设置文本显示的最小行数。 如果实际文本高度小于最小行数对应的高度，最后显示高度为最小行数对应的高度。 与[maxLines](arkts-textattribute-c.md#maxLines)同时配置时，最小行高显示范围不会超过最大行高限制。 如果文本设置了[constraintSize]CommonMethod#constraintSize，那么组件最后显示高度会在 [constraintSize]CommonMethod#constraintSize约束内。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minLines | Optional&lt;number> | Yes | 文本最小行数。 取值范围：[0, INT32_MAX] 设置的值小于0时按0处理。 |

## onCopy

```TypeScript
onCopy(callback: (value: string) => void)
```

长按文本内部区域弹出剪贴板后，点击剪贴板复制按钮，触发该回调。目前只有文本可以复制。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string) => void | Yes | 监听事件的回调函数。 |

## onMarqueeStateChange

```TypeScript
onMarqueeStateChange(callback: Callback<MarqueeState>)
```

跑马灯动画进行到特定的阶段时，触发该回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;MarqueeState> | Yes | 通过callback参数指定触发回调的状态，状态由MarqueeState枚举定义，例如开始滚动、滚动一次、滚动完成。 |

## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void)
```

文本选择的位置发生变化时，触发该回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (selectionStart: number, selectionEnd: number) => void | Yes | 监听事件的回调函数。 |

## onWillCopy

```TypeScript
onWillCopy(callback: Callback<string, boolean>)
```

在进行复制操作前，触发该回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string, boolean> | Yes | string为将要被复制的文本内容；boolean表示当前文本是否允许被复制，true：允许文本被复制；false：不允许文本被复制。 |

## optimizeTrailingSpace

```TypeScript
optimizeTrailingSpace(optimize: Optional<boolean>)
```

设置是否在文本布局过程中优化每行末尾的空格，可解决行尾空格影响对齐显示效果问题。 设置Text.optimizeTrailingSpace为true时： * 多行、单行、图文混排等多种情况下均会优化行尾空格（TextAlign.Center或TextAlign.End时，优化效果明显）； * 纯空格文本时，修饰线、阴影、背景色跟随空格文本显示； * 行首空格不在优化范围内，行尾文本强制换行，每行行尾空格根据组件宽度优化行尾空格。 当纯空格文本设置优化行尾空格[optimizeTrailingSpace](arkts-textattribute-c.md#optimizeTrailingSpace)为true时，不允许同时设置文本背景色 [backgroundColor]CommonMethod#backgroundColor(value: ResourceColor)、空格装饰线 [decoration](arkts-textattribute-c.md#decoration)和对齐[textAlign](arkts-textattribute-c.md#textAlign)三个属性。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| optimize | Optional&lt;boolean> | Yes | 是否优化每行末尾的空格。 true表示优化末尾空格，false则不优化。 默认值：false |

## orphanCharOptimization

```TypeScript
orphanCharOptimization(enabled: Optional<boolean>)
```

设置文本排版时是否使能孤字优化。不通过该接口设置，默认不使能孤字优化。 孤字优化通过更高效地处理孤立字符（段落尾行首字符）来改善文本布局。使能后，它会调整换行点以尽可能避免孤立字符。孤字优化特性需在[wordBreak](arkts-textattribute-c.md#wordBreak)为非 BREAK_ALL并且待排版文本首个[TextStyle](../../apis-arkgraphics2d/arkts-apis/arkts-text-textstyle-i.md#TextStyle)的 [locale](../../apis-arkgraphics2d/arkts-apis/arkts-text-textstyle-i.md#TextStyle)为“zh-Hans”或“zh-Hant”时生效。

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | Yes | 段落最后一行是否使能孤字优化。 true表示使能孤字优化，false表示不使能孤字优化。 值为undefined或null时，不使能孤字  优化。 |

## privacySensitive

```TypeScript
privacySensitive(supported: boolean)
```

设置是否支持卡片敏感隐私信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supported | boolean | Yes | 是否支持卡片敏感隐私信息。 默认值为false，当设置为true时，隐私模式下文字将被遮罩为横杠“-”样式。 说明： 设置为null则  表示不敏感。 进入隐私模式需要卡片框架支持。隐私遮罩的类型可以通过[obscured]CommonMethod#obscured配置。 |

## punctuationOverflow

```TypeScript
punctuationOverflow(enabled: Optional<boolean>)
```

是否启用行尾标点溢出。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean> | Yes | 是否开启，默认为false |

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(color: ResourceColor)
```

设置文本选中底板颜色。如果未设置不透明度，默认为20%不透明度。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ResourceColor | Yes | 文本选中底板颜色。 默认值：'#007DFF' |

## selectedDragPreviewStyle

```TypeScript
selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)
```

设置文本拖拽时的背板样式。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SelectedDragPreviewStyle \| undefined | Yes | 文本拖拽时的背板样式。 设置为undefined时：背板颜色跟随主题，浅色模式显示白色，深色模式显示黑色。 |

## selection

```TypeScript
selection(selectionStart: number, selectionEnd: number)
```

设置选中区域。 选中区域高亮且显示手柄和文本选择菜单。 当[copyOption](arkts-textattribute-c.md#copyOption)设置为CopyOptions.None时，设置selection属性不生效。 当[textOverflow](arkts-textattribute-c.md#textOverflow)设置为TextOverflow.MARQUEE时，设置selection属性不生效。 当selectionStart大于等于selectionEnd时不选中。可选范围为[0, textSize]，其中textSize为文本内容最大字符数，入参小于0时处理为0，大于textSize时处理为textSize。 当selectionStart或selectionEnd位于截断的不可见区域时，文本不选中。当[clip]CommonMethod#clip(value: boolean)设置为false时，超出父组件的文本可以被 选中。 可通过[onTextSelectionChange](arkts-textattribute-c.md#onTextSelectionChange)接口获取选中区域位置变化结果。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | 所选文本的起始位置。 默认值：-1 |
| selectionEnd | number | Yes | 所选文本的结束位置。 默认值：-1 |

## shaderStyle

```TypeScript
shaderStyle(shader: ShaderStyle)
```

可以显示为径向渐变[RadialGradientStyle]RadialGradientStyle或线性渐变[LinearGradientStyle]LinearGradientStyle或纯色 [ColorShaderStyle]ColorShaderStyle的效果，shaderStyle的优先级高于[fontColor]SymbolSpanAttribute#fontColor和AI识 别，纯色建议使用[fontColor]SymbolSpanAttribute#fontColor。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | ShaderStyle | Yes | 径向渐变或线性渐变或纯色。 根据传入的参数区分处理径向渐变[RadialGradientStyle]RadialGradientStyle或线  性渐变[LinearGradientStyle]LinearGradientStyle或纯色[ColorShaderStyle]ColorShaderStyle，最终设置到Text文本上显示  为渐变色效果。 说明： 当设置为径向渐变[RadialGradientStyle]RadialGradientStyle时，若  [RadialGradientOptions]RadialGradientOptions的center参数设置到组件范围外时，可将repeating参数设置为true，此时渐变效果会更明显。 |

## tailIndents

```TypeScript
tailIndents(value: Optional<LengthMetrics | Array<LengthMetrics>>)
```

指定文本中每一行的尾部缩进。 <p><strong>说明</strong>： <br>当提供单个LengthMetrics值时，所有行共享相同的尾部缩进。 <br>当提供数组时，第i个元素指定第i行的尾部缩进。 如果文本行数超过数组长度，则使用数组中的最后一个元素应用至其余的行。 <br>负值被视为0。 <br>如果设置为undefined，则使用默认值0。 </p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Optional&lt;LengthMetrics \| Array&lt;LengthMetrics>> | Yes | 尾部缩进值。默认值为0 |

## textAlign

```TypeScript
textAlign(value: TextAlign)
```

设置文本段落在水平方向的对齐方式。 文本段落宽度占满Text组件宽度。 可通过[align]CommonMethod#align(value: Alignment)属性控制文本段落在垂直方向上的位置，此组件中不可通过align属性控制文本段落在水平方向上的位置，具体效果如下： - Alignment.TopStart、Alignment.Top、Alignment.TopEnd：内容顶部对齐。 - Alignment.Start、Alignment.Center、Alignment.End：内容垂直居中。 - Alignment.BottomStart、Alignment.Bottom、Alignment.BottomEnd：内容底部对齐。 当textAlign属性设置为TextAlign.JUSTIFY时，需要根据文本内容设置[wordBreak](arkts-textattribute-c.md#wordBreak)属性，且最后一行文本水平对齐首部，不参与两端对齐。 > **说明：** > > textAlign只能调整文本整体的布局，不影响字符的显示顺序。若需要调整字符的显示顺序，请参考[镜像状态字符对齐](docroot://ui/arkts-internationalization.md#镜像状态字符对齐)。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TextAlign | Yes | 文本段落在水平方向的对齐方式。 默认值：TextAlign.Start Wearable设备上默认值为：TextAlign.Center |

## textCase

```TypeScript
textCase(value: TextCase)
```

设置文本大小写。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TextCase | Yes | 文本大小写。 默认值：TextCase.Normal |

## textContentAlign

```TypeScript
textContentAlign(textContentAlign: Optional<TextContentAlign>)
```

设置文本内容区在组件内的垂直对齐方式。 此接口可以在文本内容区高度大于组件高度时生效，确保文本内容区的对齐方式正确显示。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textContentAlign | Optional&lt;TextContentAlign> | Yes | 文本段落在垂直方向的对齐方式。 默认(undefined和异常值情况下)和align属性设置为Center效  果一致。 |

## textDirection

```TypeScript
textDirection(direction: TextDirection | undefined)
```

指定文本排版方向，未通过该接口设置时，默认文本排版方向遵循组件布局方向。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | TextDirection \| undefined | Yes | 文本排版方向。 设置为undefined时，按照TextDirection.DEFAULT处理，表现为文本排版方向遵循组件布  局方向。 |

## textIndent

```TypeScript
textIndent(value: Length)
```

设置首行文本缩进。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | 首行文本缩进。 默认值：0 单位：  [fp](docroot://reference/apis-arkui/arkui-ts/ts-pixel-units.md#基本像素单位) 取值范围：大于等于0。设置负数时，按默认值处理。 |

## textOverflow

```TypeScript
textOverflow(options: TextOverflowOptions)
```

设置文本超长时的显示方式。 当 [TextOverflowOptions](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#textoverflowoptions18对象说明) 设置为TextOverflow.None、TextOverflow.Clip或TextOverflow.Ellipsis时： - 设置为TextOverflow.None、TextOverflow.Clip，文本超长时按最大行截断显示。 - 设置为TextOverflow.Ellipsis，文本超长时显示不下的文本用省略号代替。 - 需配合[maxLines](arkts-textattribute-c.md#maxLines)使用，单独设置不生效。 - 断行规则参考[wordBreak](arkts-textattribute-c.md#wordBreak)。默认情况下参考WordBreak.BREAK_WORD的截断方式，文本截断按字进行。例如，英文以单词为最小单位进行截断。若需要以 字母为单位进行截断，可设置wordBreak属性为WordBreak.BREAK_ALL。 - 折行规则参考[lineBreakStrategy](arkts-textattribute-c.md#lineBreakStrategy)。该属性在[wordBreak](arkts-textattribute-c.md#wordBreak)不等 于WordBreak.BREAK_ALL的时候生效，不支持连词符。 - 从API version 11开始，建议优先组合[textOverflow](arkts-textattribute-c.md#textOverflow)和 [wordBreak](arkts-textattribute-c.md#wordBreak)属性来设置截断方式，具体详见 [示例4（设置文本断行及折行）](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#示例4设置文本断行及折行)<!--RP1--><!--RP1 End-->。 当TextOverflowOptions设置为TextOverflow.MARQUEE时： - 文本在一行内滚动显示。 - 设置[maxLines](arkts-textattribute-c.md#maxLines)及[copyOption](arkts-textattribute-c.md#copyOption)属性均不生效。 - Text组件[clip]CommonMethod#clip(value: boolean)属性默认为true。 - 属性字符串的[CustomSpan]CustomSpan不支持跑马灯模式。 - [textAlign](arkts-textattribute-c.md#textAlign)属性的生效规则：当文本不可滚动时，textAlign属性生效；当文本可滚动时，textAlign属性不生效。 - 从API version 12开始，当TextOverflowOptions设置为TextOverflow.MARQUEE时，支持ImageSpan组件，文本和图片可在一行内滚动显示。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TextOverflowOptions | Yes | 文本超长显示方式对象 [since 18] |

## textSelectable

```TypeScript
textSelectable(mode: TextSelectableMode)
```

设置是否支持文本可选择、可获焦。 需配合[copyOption](arkts-textattribute-c.md#copyOption)使用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | TextSelectableMode | Yes | 文本是否支持可选择、可获焦。 默认值：TextSelectableMode.SELECTABLE_UNFOCUSABLE |

## textShadow

```TypeScript
textShadow(value: ShadowOptions | Array<ShadowOptions>)
```

设置文字阴影效果。 不支持ShadowOptions对象中的type、fill字段和color字段的智能取色模式。 从API version 11开始，该接口支持以数组形式入参，实现多重文字阴影。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ShadowOptions \| Array&lt;ShadowOptions> | Yes | 文字阴影效果。 [since 11] |

## textVerticalAlign

```TypeScript
textVerticalAlign(textVerticalAlign: Optional<TextVerticalAlign>)
```

设置文本段落在垂直方向的对齐方式。 > **说明：** > > - 与[halfLeading](arkts-textattribute-c.md#halfLeading)同时配置时，halfLeading不生效。 > > - 一个段落下使用同一字号必须同时设置行高[lineHeight](arkts-textattribute-c.md#lineHeight)或者同一个段落不同字号文本混排时才有效果差异，否则设置了该属性任意枚举值和未设置该属性都是一样的 > 排版效果。属性字符串[TextStyle]TextStyle中的SuperscriptStyle上下角标样式仅在[TextVerticalAlign]TextVerticalAlign属性值为 > TextVerticalAlign.BASELINE时生效，其余垂直对齐方式下上下角标文本和普通文本表现一致，无上下角标效果。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textVerticalAlign | Optional&lt;TextVerticalAlign> | Yes | 文本段落在垂直方向的对齐方式。 默认值：TextVerticalAlign.BASELINE |

## wordBreak

```TypeScript
wordBreak(value: WordBreak)
```

设置断行规则。 默认情况下，不调用wordBreak或者设置WordBreak.BREAK_WORD时，文本截断按字进行。例如，英文以单词为最小单位进行截断。 WordBreak.BREAK_ALL与{overflow:&nbsp;TextOverflow.Ellipsis}、maxLines组合使用，可实现英文单词按字母截断，超出部分以省略号显示。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | WordBreak | Yes | 断行规则。 默认值：WordBreak.BREAK_WORD |

