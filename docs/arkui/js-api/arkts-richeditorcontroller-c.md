# RichEditorController

RichEditor组件的控制器，继承自[RichEditorBaseController](arkts-richeditorbasecontroller-c.md#RichEditorBaseController)。 > **说明：** > > 当内容的长度超过组件显示区域的高度时，调用插入接口（例如[addTextSpan](arkts-richeditorcontroller-c.md#addTextSpan)、 > [addImageSpan](arkts-richeditorcontroller-c.md#addImageSpan)、[addBuilderSpan](arkts-richeditorcontroller-c.md#addBuilderSpan) > 、[addSymbolSpan](arkts-richeditorcontroller-c.md#addSymbolSpan)），组件会自动滚动内容使得插入内容末尾可见。

**Inheritance:** RichEditorControllerextends: RichEditorBaseController.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addBuilderSpan

```TypeScript
addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number
```

在RichEditor中添加用户自定义布局（BuilderSpan）。 > **说明：** > > - RichEditor组件添加占位Span，占位Span调用系统的measure方法计算真实的长宽和位置。 > > - 可通过[RichEditorBuilderSpanOptions](arkts-richeditorbuilderspanoptions-i.md#RichEditorBuilderSpanOptions)设置此builder在RichEditor中的index（一个文字为一个单位）。 > > - 此占位Span不可获焦，支持拖拽，支持部分通用属性，占位、删除等能力等同于ImageSpan，长度视为一个文字。 > > - 支持通过[bindSelectionMenu](arkts-richeditorattribute-c.md#bindSelectionMenu)设置自定义菜单。 > > - 不支持通过[getSpans](arkts-richeditorcontroller-c.md#getSpans)，[getSelection](arkts-richeditorcontroller-c.md#getSelection)， > [onSelect](arkts-richeditorattribute-c.md#onSelect)，[aboutToDelete](arkts-richeditorattribute-c.md#aboutToDelete)获取 > builderSpan信息。 > > - 不支持通过[updateSpanStyle](arkts-richeditorcontroller-c.md#updateSpanStyle)， > [updateParagraphStyle](arkts-richeditorcontroller-c.md#updateParagraphStyle)等方式更新builder。 > > - 对此builder节点进行复制或粘贴不生效。 > > - builder的布局约束由RichEditor传入，如果builder里最外层组件不设置大小，则会用RichEditor的大小作为maxSize。 > > - builder的手势相关事件机制与通用手势事件相同，如果builder中未设置透传，则仅有builder中的子组件响应。 > > - 如果组件光标闪烁，插入后光标位置更新为新插入builder的后面。 通用属性仅支持[size](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#size)、 [padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding)、 [margin](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#margin)、 [aspectRatio](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-layout-constraints.md#aspectratio)、 [borderStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderstyle)、 [borderWidth](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderwidth)、 [borderColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#bordercolor)、 [borderRadius](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderradius)、 [backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、 [backgroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle9) 、[opacity]common、 [blur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#blur)、 [backdropBlur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backdropblur)、 [shadow](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#shadow)、 [grayscale](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#grayscale)、 [brightness](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#brightness)、 [saturate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#saturate)、 [contrast](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#contrast)、 [invert](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#invert)、 [sepia](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#sepia)、 [hueRotate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#huerotate)、 [colorBlend](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#colorblend)、 [linearGradientBlur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lineargradientblur12) 、[clip](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip12)、 [mask](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#mask12)、 [foregroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-foreground-blur-style.md#foregroundblurstyle) 、 [accessibilityGroup](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitygroup) 、 [accessibilityText](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitytext) 、 [accessibilityDescription](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitydescription) 、 [accessibilityLevel](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel) 、 [sphericalEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#sphericaleffect12) 、[lightUpEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lightupeffect12)、 [pixelStretchEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#pixelstretcheffect12) 。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CustomBuilder | Yes | 自定义组件。 |
| options | RichEditorBuilderSpanOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 添加完成的builderSpan在所有Span中的索引位置。 |

## addImageSpan

```TypeScript
addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number
```

添加图片内容，如果组件光标闪烁，插入后光标位置更新为新插入图片的后面。 该接口为同步接口，在弱网环境下，直接添加网络图片可能会阻塞UI线程造成冻屏问题。不建议直接添加网络图片。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PixelMap \| ResourceStr | Yes | 图片内容。 |
| options | RichEditorImageSpanOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 添加完成的ImageSpan在所有Span中的索引位置。 |

## addSymbolSpan

```TypeScript
addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number
```

在RichEditor中添加图标小符号（SymbolSpan），如果组件光标闪烁，插入后光标位置更新为新插入SymbolSpan的后面。 暂不支持手势、复制、拖拽处理。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Resource | Yes | symbol资源信息。 |
| options | RichEditorSymbolSpanOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 添加完成的SymbolSpan在所有Span中的索引位置。 |

## addTextSpan

```TypeScript
addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number
```

添加文本内容，如果组件光标闪烁，插入后光标位置更新为新插入文本的后面。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ResourceStr | Yes | 文本内容。 从API version 20开始，支持Resource类型。 [since 20] |
| options | RichEditorTextSpanOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 添加完成的TextSpan在所有Span中的索引位置。 |

## deleteSpans

```TypeScript
deleteSpans(value?: RichEditorRange): void
```

删除指定范围内的文本和图片。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorRange | No |  |

## fromStyledString

```TypeScript
fromStyledString(value: StyledString): Array<RichEditorSpan>
```

将属性字符串转换为span信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | StyledString | Yes | 转换前的属性字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;RichEditorSpan> | 文本和图片Span信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. |

## getParagraphs

```TypeScript
getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>
```

获取指定范围的段落信息。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorRange | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;RichEditorParagraphResult> | 选中段落的信息。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。 |

## getSelection

```TypeScript
getSelection(): RichEditorSelection
```

获取选中内容的范围和span信息。未选中时，返回光标所在span信息。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RichEditorSelection | 选中内容信息。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。 |

## getSpans

```TypeScript
getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>
```

获取span信息。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorRange | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;RichEditorImageSpanResult \| RichEditorTextSpanResult> | 文本和图片Span信息。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。 |

## toStyledString

```TypeScript
toStyledString(value: RichEditorRange): StyledString
```

将给定范围的组件内容转换成属性字符串，SymbolSpan和BuilderSpan不支持转换。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorRange | Yes | 需要获取的范围。 |

**Return value:**

| Type | Description |
| --- | --- |
| StyledString | 转换后的属性字符串 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. |

## updateParagraphStyle

```TypeScript
updateParagraphStyle(value: RichEditorParagraphStyleOptions): void
```

更新段落的样式。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorParagraphStyleOptions | Yes | 段落的样式选项信息。 |

## updateSpanStyle

```TypeScript
updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void
```

更新文本、图片或SymbolSpan样式。 若只更新了一个Span的部分内容，则会根据更新部分、未更新部分将该Span拆分为多个Span。 使用该接口更新文本、图片或SymbolSpan样式时默认不会关闭自定义文本选择菜单。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorUpdateTextSpanStyleOptions \| RichEditorUpdateImageSpanStyleOptions \| RichEditorUpdateSymbolSpanStyleOptions | Yes | 文本、图片或SymbolSpan的样式选项信息。 [since 11] |

