# rich_editor

定义富文本组件实例。

## rich_editor

```TypeScript
rich_editor(value: RichEditorOptions)
```

创建富文本组件时调用。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorOptions | Yes | 富文本组件初始化选项。 |

```TypeScript
rich_editor(options: RichEditorStyledStringOptions)
```

创建富文本组件时调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RichEditorStyledStringOptions | Yes | 富文本组件初始化选项。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [RichEditorAttribute](arkts-richeditorattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持[OnDidChangeCallback]{@link text_common:OnDidChangeCallback}、 [StyledStringChangedListener]{@link text_common:StyledStringChangedListener}、 [StyledStringChangeValue]{@link text_common:StyledStringChangeValue}和以下事件： |
| [RichEditorBaseController](arkts-richeditorbasecontroller-c.md) | RichEditor组件控制器基类。 |
| [RichEditorController](arkts-richeditorcontroller-c.md) | RichEditor组件的控制器，继承自[RichEditorBaseController]{@link RichEditorBaseController}。 > **说明：** > > 当内容的长度超过组件显示区域的高度时，调用插入接口（例如[addTextSpan]{@link RichEditorController.addTextSpan}、 > [addImageSpan]{@link RichEditorController.addImageSpan}、[addBuilderSpan]{@link RichEditorController.addBuilderSpan} > 、[addSymbolSpan]{@link RichEditorController.addSymbolSpan}），组件会自动滚动内容使得插入内容末尾可见。 |
| [RichEditorStyledStringController](arkts-richeditorstyledstringcontroller-c.md) | 使用属性字符串构建的RichEditor组件的控制器，继承自[RichEditorBaseController]{@link RichEditorBaseController}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CopyEvent](arkts-copyevent-i.md) | 定义用户复制事件。 |
| [CutEvent](arkts-cutevent-i.md) | 定义用户剪切事件。 |
| [KeyboardOptions](arkts-keyboardoptions-i.md) | 设置自定义键盘是否支持避让功能。 |
| [LeadingMarginPlaceholder](arkts-leadingmarginplaceholder-i.md) | 前导边距占位符，用于表示文本段落左侧与组件边缘之间的距离。 |
| [PasteEvent](arkts-pasteevent-i.md) | 定义用户粘贴事件。 |
| [PlaceholderStyle](arkts-placeholderstyle-i.md) | 设置提示文本的字体样式。 |
| [PreviewMenuOptions](arkts-previewmenuoptions-i.md) | 预览菜单的选项。 |
| [RichEditorBuilderSpanOptions](arkts-richeditorbuilderspanoptions-i.md) | 设置builder的偏移位置和样式。 |
| [RichEditorChangeValue](arkts-richeditorchangevalue-i.md) | 图文变化信息。 |
| [RichEditorDeleteValue](arkts-richeditordeletevalue-i.md) | 删除操作和被删除内容的信息。 |
| [RichEditorGesture](arkts-richeditorgesture-i.md) | 用户手势事件。 |
| [RichEditorImageSpan](arkts-richeditorimagespan-i.md) | 图片Span信息。 |
| [RichEditorImageSpanOptions](arkts-richeditorimagespanoptions-i.md) | 设置图片的偏移位置和图片样式信息。 |
| [RichEditorImageSpanResult](arkts-richeditorimagespanresult-i.md) | 后端返回的图片信息。 |
| [RichEditorImageSpanStyle](arkts-richeditorimagespanstyle-i.md) | 图片样式。 |
| [RichEditorImageSpanStyleResult](arkts-richeditorimagespanstyleresult-i.md) | 后端返回的图片样式信息。 |
| [RichEditorInsertValue](arkts-richeditorinsertvalue-i.md) | 插入文本的信息。 |
| [RichEditorInterface](arkts-richeditorinterface-i.md) | 提供编写文本的接口。 |
| [RichEditorLayoutStyle](arkts-richeditorlayoutstyle-i.md) | 图片布局信息。 |
| [RichEditorOptions](arkts-richeditoroptions-i.md) | RichEditor初始化参数。 |
| [RichEditorParagraphResult](arkts-richeditorparagraphresult-i.md) | 后端返回的段落信息。 |
| [RichEditorParagraphStyle](arkts-richeditorparagraphstyle-i.md) | 段落样式。 |
| [RichEditorParagraphStyleOptions](arkts-richeditorparagraphstyleoptions-i.md) | 段落样式选项。 继承自[RichEditorRange]{@link RichEditorRange}。 > **说明：** > > 接口作用的范围：设定的区间所涉及的段落。 |
| [RichEditorRange](arkts-richeditorrange-i.md) | 定义RichEditor的范围。 |
| [RichEditorSelection](arkts-richeditorselection-i.md) | 选中内容信息。 |
| [RichEditorSpanPosition](arkts-richeditorspanposition-i.md) | Span位置信息。 |
| [RichEditorSpanStyleOptions](arkts-richeditorspanstyleoptions-i.md) | 文本样式选项。 继承自[RichEditorRange]{@link RichEditorRange}。 |
| [RichEditorStyledStringOptions](arkts-richeditorstyledstringoptions-i.md) | RichEditor初始化参数。 |
| [RichEditorSymbolSpanOptions](arkts-richeditorsymbolspanoptions-i.md) | 设置SymbolSpan组件的偏移位置和样式。 |
| [RichEditorSymbolSpanStyle](arkts-richeditorsymbolspanstyle-i.md) | 组件SymbolSpan样式信息。 |
| [RichEditorSymbolSpanStyleResult](arkts-richeditorsymbolspanstyleresult-i.md) | 后端返回的SymbolSpan样式信息。 |
| [RichEditorTextSpan](arkts-richeditortextspan-i.md) | 文本Span信息。 |
| [RichEditorTextSpanOptions](arkts-richeditortextspanoptions-i.md) | 添加文本的偏移位置和文本样式信息。 |
| [RichEditorTextSpanResult](arkts-richeditortextspanresult-i.md) | 文本Span信息。 |
| [RichEditorTextStyle](arkts-richeditortextstyle-i.md) | 文本样式信息。 |
| [RichEditorTextStyleResult](arkts-richeditortextstyleresult-i.md) | 后端返回的文本样式信息。 在RichEditorTextStyle中，fontWeight是设置字体粗细的输入参数。 RichEditorSymbolSpanStyle和RichEditorSymbolSpanStyleResult中fontWeight的转换关系，与RichEditorTextStyle和 RichEditorTextStyleResult中fontWeight的转换关系一致。 |
| [RichEditorUpdateImageSpanStyleOptions](arkts-richeditorupdateimagespanstyleoptions-i.md) | 图片的样式选项。 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。 |
| [RichEditorUpdateSymbolSpanStyleOptions](arkts-richeditorupdatesymbolspanstyleoptions-i.md) | SymbolSpan样式选项。 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。 |
| [RichEditorUpdateTextSpanStyleOptions](arkts-richeditorupdatetextspanstyleoptions-i.md) | 文本样式选项。 继承自[RichEditorSpanStyleOptions]{@link RichEditorSpanStyleOptions}。 |
| [RichEditorUrlStyle](arkts-richeditorurlstyle-i.md) | Url信息。 |
| [SelectionMenuOptions](arkts-selectionmenuoptions-i.md) | 菜单的选项。 |

### Enums

| Name | Description |
| --- | --- |
| [RichEditorDeleteDirection](arkts-richeditordeletedirection-e.md) | 删除方向。 |
| [RichEditorResponseType](arkts-richeditorresponsetype-e.md) | 菜单的响应类型。 |
| [RichEditorSpanType](arkts-richeditorspantype-e.md) | Span类型信息。 |
| [UndoStyle](arkts-undostyle-e.md) | 撤销还原是否保留原样式选项。 |

### Types

| Name | Description |
| --- | --- |
| [MenuCallback](arkts-menucallback-t.md) | 自定义选择菜单显示或隐藏时触发的回调事件。 |
| [MenuOnAppearCallback](arkts-menuonappearcallback-t.md) | 自定义选择菜单弹出时触发的回调事件。 |
| [OnHoverCallback](arkts-onhovercallback-t.md) | 鼠标悬浮触发回调。 |
| [PasteEventCallback](arkts-pasteeventcallback-t.md) | 粘贴完成前，触发回调。 |
| [RichEditorSpan](arkts-richeditorspan-t.md) | RichEditor span信息。 |
| [SubmitCallback](arkts-submitcallback-t.md) | 软键盘按下回车键时的回调事件。 |

### Constants

| Name | Description |
| --- | --- |
| [RichEditor](arkts-rich-editor-con.md#RichEditor) | 支持图文混排和文本交互式编辑的组件。 > **说明：** > > - 该组件从API version 10开始支持。后续版本新增内容，采用上角标单独标记该内容的起始版本。 > > - 该组件从API版本26.0.0开始支持[WithTheme]{@link with_theme}。 |
| [RichEditorInstance](arkts-rich-editor-con.md#RichEditorInstance) | 定义富文本组件实例。 |

