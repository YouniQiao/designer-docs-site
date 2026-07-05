# styled_string

## Summary

### Classes

| Name | Description |
| --- | --- |
| [BackgroundColorStyle](arkts-backgroundcolorstyle-c.md) | 文本背景颜色对象说明。 |
| [BaselineOffsetStyle](arkts-baselineoffsetstyle-c.md) | 文本基线偏移量对象说明。 |
| [CustomSpan](arkts-customspan-c.md) | 自定义绘制Span，仅提供基类，具体实现由开发者定义。 自定义绘制Span拖拽显示的缩略图为空白。 |
| [DecorationStyle](arkts-decorationstyle-c.md) | 文本装饰线样式对象说明。 |
| [GestureStyle](arkts-gesturestyle-c.md) | 事件手势对象说明。 |
| [ImageAttachment](arkts-imageattachment-c.md) | 图片对象说明。 |
| [LeadingMarginSpan](arkts-leadingmarginspan-c.md) | 文本段落的自定义缩进，仅提供基类，具体实现由开发者定义。 |
| [LetterSpacingStyle](arkts-letterspacingstyle-c.md) | 文本字符间距对象说明。 |
| [LineHeightStyle](arkts-lineheightstyle-c.md) | 文本行高对象说明。 |
| [LineSpacingStyle](arkts-linespacingstyle-c.md) | 文本行间距对象说明。 |
| [MutableStyledString](arkts-mutablestyledstring-c.md) | 继承于[StyledString]{@link StyledString}类。 > **以下接口异常入参处理统一说明：** > > 当start和length越界或者必填传入undefined时，会抛出异常； > > 当styledKey和styledValue传入异常值或者两者对应关系不匹配时，会抛出异常。 |
| [ParagraphStyle](arkts-paragraphstyle-c.md) | 文本段落样式对象说明。 除首个段落外，后续段落按'\n'划分。 每个段落的段落样式按首个占位设置的段落样式生效，未设置时，段落按被绑定组件的段落样式生效。 在API版本26.0.0之前，如果属性字符串段落内首个占位为[CustomSpan]{@link CustomSpan}或[ImageAttachment]{@link ImageAttachment}时，设置在该段落上的段落样式不生 效。从API版本26.0.0开始，设置段落样式生效。 |
| [StyledString](arkts-styledstring-c.md) | StyledString |
| [TextShadowStyle](arkts-textshadowstyle-c.md) | 文本阴影对象说明。 |
| [TextStyle](arkts-textstyle-c.md) | 文本字体样式对象说明。 |
| [UrlStyle](arkts-urlstyle-c.md) | 超链接对象说明。 默认颜色、字号、字重分别是'#ff0a59f7'、'16fp'、'FontWeight.Regular'，若属性字符串设置TextStyle，则TextStyle优先级更高。 |
| [UserDataSpan](arkts-userdataspan-c.md) | 支持存储自定义扩展信息，用于存储和获取用户数据，仅提供基类，具体实现由开发者定义。 扩展信息不影响实际显示效果。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CustomSpanDrawInfo](arkts-customspandrawinfo-i.md) | 定义自定义绘制Span的绘制信息接口。 |
| [CustomSpanMeasureInfo](arkts-customspanmeasureinfo-i.md) | 定义自定义绘制Span的测量信息接口。 |
| [CustomSpanMetrics](arkts-customspanmetrics-i.md) | 定义自定义绘制Span的尺寸信息接口。 |
| [DecorationOptions](arkts-decorationoptions-i.md) | 文本装饰线样式的额外配置选项对象说明。 |
| [DecorationStyleInterface](arkts-decorationstyleinterface-i.md) | 文本装饰线样式接口对象说明。 > **说明：** > > 当文字的下边缘轮廓与装饰线位置相交时，会触发下划线避让规则，下划线将在这些字符处避让文字。常见“gjyqp”等英文字符。 > > 当文本装饰线的颜色设置为Color.Transparent时，装饰线颜色设置为跟随每行第一个字的字体颜色。当文本装饰线的颜色设置为透明色16进制对应值“#00FFFFFF”时，装饰线颜色设置为透明色。 |
| [GestureStyleInterface](arkts-gesturestyleinterface-i.md) | 定义事件手势接口。 |
| [ImageAttachmentInterface](arkts-imageattachmentinterface-i.md) | 定义图片设置项接口。 |
| [ImageAttachmentLayoutStyle](arkts-imageattachmentlayoutstyle-i.md) | 定义图片布局样式。 |
| [LeadingMarginSpanDrawInfo](arkts-leadingmarginspandrawinfo-i.md) | 自定义绘制信息。 |
| [ParagraphStyleInterface](arkts-paragraphstyleinterface-i.md) | ParagraphStyleInterface |
| [ResourceImageAttachmentOptions](arkts-resourceimageattachmentoptions-i.md) | ResourceStr类型图片设置项。 |
| [SpanStyle](arkts-spanstyle-i.md) | SpanStyle |
| [StyleOptions](arkts-styleoptions-i.md) | StyleOptions |
| [TextStyleInterface](arkts-textstyleinterface-i.md) | TextStyleInterface |

### Enums

| Name | Description |
| --- | --- |
| [StyledStringKey](arkts-styledstringkey-e.md) | 范围属性字符串样式。 |

### Types

| Name | Description |
| --- | --- |
| [AttachmentType](arkts-attachmenttype-t.md) | 图片设置项类型，用于设置属性字符串PixelMap类型或[ResourceStr]{@link ResourceStr}类型图片。 |
| [ColorFilterType](arkts-colorfiltertype-t.md) | 图片颜色滤镜设置项类型。 |
| <!--DelRow-->[StyledStringMarshallCallback](arkts-styledstringmarshallcallback-t.md) | 属性字符串[StyledStringMarshallingValue]{@link StyledStringMarshallingValue}序列化回调类型。 |
| <!--DelRow-->[StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t.md) | 属性字符串自定义序列化对象类型，需要开发者定义序列化和反序列化的方式。 |
| <!--DelRow-->[StyledStringUnmarshallCallback](arkts-styledstringunmarshallcallback-t.md) | 属性字符串反序列化ArrayBuffer得到[StyledStringMarshallingValue]{@link StyledStringMarshallingValue}回调类型。 |
| [StyledStringValue](arkts-styledstringvalue-t.md) | 样式对象类型，用于设置属性字符串的样式。 |

