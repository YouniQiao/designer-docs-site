# text_common

## Summary

### Classes

| Name | Description |
| --- | --- |
| [ColorShaderStyle](arkts-colorshaderstyle-c.md) | 显示为纯色。ColorShaderStyle继承自[ShaderStyle]{@link ShaderStyle}。 |
| [ContentTransition](arkts-contenttransition-c.md) | 文本动效基类。 |
| [LinearGradientStyle](arkts-lineargradientstyle-c.md) | 显示为线性渐变。LinearGradientStyle继承自[ShaderStyle]{@link ShaderStyle}。 |
| [NumericTextTransition](arkts-numerictexttransition-c.md) | 数字翻牌动效。仅限正整数，不支持小数和负数。不支持渐变色和Text跑马灯模式。不支持选中，[copyOption]{@link TextAttribute#copyOption}属性无效。当文本存在子组件时或通过属性字符串设置时，数字 翻牌失效。 NumericTextTransition继承自[ContentTransition]{@link ContentTransition}。 |
| [RadialGradientStyle](arkts-radialgradientstyle-c.md) | 显示为径向渐变。RadialGradientStyle继承自[ShaderStyle]{@link ShaderStyle}。 |
| [ShaderStyle](arkts-shaderstyle-c.md) | 文本着色器效果基类。 |
| [TextMenuItemId](arkts-textmenuitemid-c.md) | 自定义菜单项的Id值。用于识别菜单选项，内置菜单项Id值见下列属性表格。 |

### Interfaces

| Name | Description |
| --- | --- |
| [AccessibilitySpanOptions](arkts-accessibilityspanoptions-i.md) | Span的无障碍朗读功能属性。 |
| [CaretStyle](arkts-caretstyle-i.md) | 定义光标样式。 |
| [DecorationStyleResult](arkts-decorationstyleresult-i.md) | 后端返回的文本装饰线样式信息。 |
| [DeleteValue](arkts-deletevalue-i.md) | 提供从文本中删除值的接口。 |
| [EditableTextChangeValue](arkts-editabletextchangevalue-i.md) | 文本变化的详细信息，包括预上屏。 |
| [EditMenuOptions](arkts-editmenuoptions-i.md) | 编辑菜单选项 |
| [FontConfigs](arkts-fontconfigs-i.md) | 字体配置项。 |
| [FontSettingOptions](arkts-fontsettingoptions-i.md) | 字体配置项。 |
| [FontWeightConfigs](arkts-fontweightconfigs-i.md) | 字体粗细配置项。当传入该配置对象时（包括空对象{}），未显式设置的属性将使用默认值。当传入null或undefined时，不应用默认值，字体粗细行为与父组件文本保持一致。 |
| [IMEClient](arkts-imeclient-i.md) | 输入控件绑定输入法客户端类型。 |
| [InsertValue](arkts-insertvalue-i.md) | 定义插入的文本值信息。 |
| <!--DelRow-->[KeyboardAppearanceConfig](arkts-keyboardappearanceconfig-i.md) | 键盘外观样式属性。 |
| [LayoutManager](arkts-layoutmanager-i.md) | 布局管理器对象。 > **说明：** > > 文本内容变更后，需等待布局完成才可获取到最新的布局信息。 |
| [LineSpacingOptions](arkts-linespacingoptions-i.md) | 设置文本的行间距，是否仅在行与行之间生效。 |
| [MaxLinesOptions](arkts-maxlinesoptions-i.md) | 配置TextArea组件，文本超长时的显示效果。 |
| [NumericTextTransitionOptions](arkts-numerictexttransitionoptions-i.md) | 数字翻牌的参数。 |
| [PositionWithAffinity](arkts-positionwithaffinity-i.md) | 位置以及亲和度。 |
| [PreviewText](arkts-previewtext-i.md) | 预上屏信息。 |
| [SelectedDragPreviewStyle](arkts-selecteddragpreviewstyle-i.md) | 文本拖拽时的背板样式。 |
| [StyledStringChangedListener](arkts-styledstringchangedlistener-i.md) | 属性字符串的文本内容变化监听器。 |
| [StyledStringChangeValue](arkts-styledstringchangevalue-i.md) | 属性字符串的文本变化信息。 |
| [StyledStringController](arkts-styledstringcontroller-i.md) | 定义StyledString控制器。 |
| [TextBaseController](arkts-textbasecontroller-i.md) | 文本选择控制器。 |
| [TextChangeOptions](arkts-textchangeoptions-i.md) | 变化前的文本信息，以及变化后的选区范围。 |
| [TextDataDetectorConfig](arkts-textdatadetectorconfig-i.md) | 该配置只支持[Text]{@link text}组件和[RichEditor]{@link rich_editor}组件。 |
| [TextEditControllerEx](arkts-texteditcontrollerex-i.md) | 文本扩展编辑控制器。 继承自[TextBaseController]{@link TextBaseController}。 |
| [TextLayoutOptions](arkts-textlayoutoptions-i.md) | 文本布局选项。 |
| [TextMenuItem](arkts-textmenuitem-i.md) | 文本菜单项 |
| [TextMenuOptions](arkts-textmenuoptions-i.md) | 菜单选项。 |
| [TextRange](arkts-textrange-i.md) | 文本范围。 |
| <!--DelRow-->[VoiceButtonOptions](arkts-voicebuttonoptions-i.md) | 语音按钮选项。 |

### Enums

| Name | Description |
| --- | --- |
| [AutoCapitalizationMode](arkts-autocapitalizationmode-e.md) | 自动大小写模式类型，只提供接口能力，具体实现以输入法应用为主。 |
| [FlipDirection](arkts-flipdirection-e.md) | 翻牌方向。默认值为DOWN。 |
| [IncrementalUpdatePolicy](arkts-incrementalupdatepolicy-e.md) | 文本渲染的增量更新策略。 |
| [KeyboardAppearance](arkts-keyboardappearance-e.md) | 键盘外观。 |
| <!--DelRow-->[KeyboardFluidLightMode](arkts-keyboardfluidlightmode-e.md) | 键盘流光效果。 |
| <!--DelRow-->[KeyboardGradientMode](arkts-keyboardgradientmode-e.md) | 键盘模糊效果。 |
| [MaxLinesMode](arkts-maxlinesmode-e.md) | TextArea组件在文本超长时显示效果。默认值为CLIP，按最大行截断显示。 |
| [MenuType](arkts-menutype-e.md) | 菜单类型。 |
| [StrokeJoinStyle](arkts-strokejoinstyle-e.md) | 定义线条拐角的样式，即在绘制折线时线段拐角处的画笔样式。 |
| [SuperscriptStyle](arkts-superscriptstyle-e.md) | 定义文本上下角标样式。 |
| <!--DelRow-->[TextChangeReason](arkts-textchangereason-e.md) | 组件内容变化原因。 |
| [TextContentAlign](arkts-textcontentalign-e.md) | 文本内容区垂直对齐方向。 |
| [TextDataDetectorType](arkts-textdatadetectortype-e.md) | 定义文本数据检测类型。 |
| [TextDeleteDirection](arkts-textdeletedirection-e.md) | 定义删除文本方向。 |
| [TextDirection](arkts-textdirection-e.md) | 文本排版方向。 |
| [TextMenuShowMode](arkts-textmenushowmode-e.md) | 菜单的显示模式。 |
| [TextVerticalAlign](arkts-textverticalalign-e.md) | 文本垂直对齐的方式。默认值BASELINE，沿基线对齐。 |

### Types

| Name | Description |
| --- | --- |
| [Affinity](arkts-affinity-t.md) | 位置亲和度枚举。 |
| [EditableTextOnChangeCallback](arkts-editabletextonchangecallback-t.md) | 输入内容发生变化时，触发该回调。 |
| [FontVariation](arkts-fontvariation-t.md) | 可变字体的属性。 |
| [InputMethodExtraConfig](arkts-inputmethodextraconfig-t.md) | 输入法扩展信息。 |
| [LineMetrics](arkts-linemetrics-t.md) | 用于描述文本布局中单行文字的度量信息。 |
| [OnCreateMenuCallback](arkts-oncreatemenucallback-t.md) | 菜单创建时触发。 |
| [OnDidChangeCallback](arkts-ondidchangecallback-t.md) | 文本变换后回调。 |
| [OnPrepareMenuCallback](arkts-onpreparemenucallback-t.md) | 当文本选择区域变化后显示菜单之前触发该回调，可在该回调中进行菜单数据设置。入参和返回值只包含一级菜单项，不包含二级菜单项。 |
| [Paragraph](arkts-paragraph-t.md) | 保存文本内容及样式的载体，支持排版与绘制操作。 |
| [RectHeightStyle](arkts-rectheightstyle-t.md) | 矩形区域高度规格枚举。 |
| [RectWidthStyle](arkts-rectwidthstyle-t.md) | 矩形区域宽度规格枚举。 |
| [TextBox](arkts-textbox-t.md) | 文本矩形区域。 |

