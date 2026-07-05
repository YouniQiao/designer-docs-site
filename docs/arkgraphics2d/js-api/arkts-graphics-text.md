# @ohos.graphics.text

本模块提供一系列用于文本布局和字体管理的编程接口。文本布局相关的接口旨在提供高质量的排版，包括字符到字形的转换、字距调整、换行、对齐、文本测量等。字体管理接口提供字体注册、字体描述符、字体集管理等功能。 该模块提供以下创建复杂样式的文本段落的常用类： - [TextStyle]{@link text.TextStyle}：文本样式，控制文本的字体类型、大小、间距等属性。 - [FontCollection]{@link text.FontCollection}：字体集，控制各种不同的字体。 - [FontDescriptor]{@link text.FontDescriptor}：字体描述符信息。 - [ParagraphStyle]{@link text.ParagraphStyle}：段落样式，控制整个段落的断行策略、断词策略等属性。 - [ParagraphBuilder]{@link text.ParagraphBuilder}：段落生成器，控制生成不同的段落对象。 - [Paragraph]{@link text.Paragraph}：段落，由ParagraphBuilder类调用[build()]{@link text.ParagraphBuilder.build}接口构建而成。 - [LineTypeset]{@link text.LineTypeset}：行排版器，由ParagraphBuilder类调用 [buildLineTypeset()]{@link text.ParagraphBuilder.buildLineTypeset}接口构建而成。 - [TextLine]{@link text.TextLine}：以行为单位的段落文本的载体，由Paragraph类调用[getTextLines()]{@link text.Paragraph.getTextLines}接口获取。 - [Run]{@link text.RunMetrics}：文本排版单元，由TextLine类调用[getGlyphRuns()]{@link text.TextLine.getGlyphRuns}接口获取。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getFontCount](arkts-text-getfontcount-f.md#getFontCount-1) | 根据字体文件路径获取包含的字体文件数。 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回0。 |
| [getFontDescriptorByFullName](arkts-text-getfontdescriptorbyfullname-f.md#getFontDescriptorByFullName-1) | 根据字体名称和类型获取字体描述符，使用Promise异步回调。 字体描述符是描述字体特征的数据结构，包含字体外观和属性的详细信息。 |
| [getFontDescriptorsFromPath](arkts-text-getfontdescriptorsfrompath-f.md#getFontDescriptorsFromPath-1) | 根据字体文件路径获取字体描述符数组。使用Promise异步回调。 > **说明：** > > - 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回空数组。 > > - [FontDescriptor]{@link text.FontDescriptor}中的weight字段并不精准对应字体文件内部的字重数值，而是将字体文件中的实际字重四舍五入映射到 > [FontWeight]{@link text.FontWeight}枚举值后的结果。例如，字体文件字重350会映射为400，对应枚举为W400。 |
| [getFontPathsByType](arkts-text-getfontpathsbytype-f.md#getFontPathsByType-1) | 获取指定字体类型的所有字体文件路径。 |
| [getFontUnicodeSet](arkts-text-getfontunicodeset-f.md#getFontUnicodeSet-1) | 根据字体文件路径获取字体unicode数组。使用Promise异步回调。 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回空数组。 |
| [getSystemFontFullNamesByType](arkts-text-getsystemfontfullnamesbytype-f.md#getSystemFontFullNamesByType-1) | 根据字体类型返回该类型对应的所有字体的字体名称，使用Promise异步回调。 |
| [isFontSupported](arkts-text-isfontsupported-f.md#isFontSupported-1) | 检查系统是否支持指定的字体文件。 |
| [matchFontDescriptors](arkts-text-matchfontdescriptors-f.md#matchFontDescriptors-1) | 根据指定的字体描述符返回所有符合要求的系统字体描述符，使用Promise异步回调。 |
| [setTextHighContrast](arkts-text-settexthighcontrast-f.md#setTextHighContrast-1) | 用于设置文字渲染高对比度模式。 该接口设置后整个进程都会生效，进程内所有页面共用相同模式。 可调用此接口设置，也可通过系统设置界面中**高对比度文字配置开关**进行开启/关闭。使用此接口设置开启/关闭文字渲染高对比度配置的优先级高于系统开关设置。 该接口针对应用的文字自绘制场景不生效。 |
| [setTextUndefinedGlyphDisplay](arkts-text-settextundefinedglyphdisplay-f.md#setTextUndefinedGlyphDisplay-1) | 设置字符映射到.notdef（未定义）字形时要使用的字形类型。 影响此调用后呈现的所有文本。 此配置会影响显示字体中未定义字符的方式： - 默认行为遵循字体的内部.notdef字形设计。 - 开启后将强制使缺失字形的字符以豆腐块形式显示。 |

### Classes

| Name | Description |
| --- | --- |
| [FontCollection](arkts-text-fontcollection-c.md) | 字体集。 |
| [LineTypeset](arkts-text-linetypeset-c.md) | 保存着文本内容以及样式的载体，可以用于计算单行排版信息。 下列API示例中都需先使用[ParagraphBuilder]{@link text.ParagraphBuilder}类的 [buildLineTypeset()]{@link text.ParagraphBuilder.buildLineTypeset}接口获取到LineTypeset对象实例，再通过此实例调用对应方法。 |
| [Paragraph](arkts-text-paragraph-c.md) | 保存文本内容及样式的载体，支持排版与绘制操作。 下列API示例中都需先使用[ParagraphBuilder]{@link text.ParagraphBuilder}类的[build()]{@link text.ParagraphBuilder.build}接口获取到 Paragraph对象实例，再通过此实例调用对应方法。 |
| [ParagraphBuilder](arkts-text-paragraphbuilder-c.md) | 段落生成器。 |
| [Run](arkts-text-run-c.md) | 文本排版单元。 下列API示例中都需先使用[TextLine]{@link text.TextLine}类的[getGlyphRuns()]{@link text.TextLine.getGlyphRuns}接口获取Run对象实例，再通过此实例调 用对应方法。 |
| [TextLine](arkts-text-textline-c.md) | 描述段落基础文本行结构的载体。 下列API示例中都需先使用[Paragraph]{@link text.ParagraphStyle}类的[getTextLines()]{@link text.Paragraph.getTextLines}接口或者 [LineTypeset]{@link text.LineTypeset}类的[createLine()]{@link text.LineTypeset.createLine}接口获取到TextLine对象实例，再通过此实例调用对 应方法。 |

### Interfaces

| Name | Description |
| --- | --- |
| [Decoration](arkts-text-decoration-i.md) | 文本装饰线。 |
| [FontDescriptor](arkts-text-fontdescriptor-i.md) | 字体描述符信息。 |
| [FontFeature](arkts-text-fontfeature-i.md) | 文本字体特征。 |
| [FontVariation](arkts-text-fontvariation-i.md) | 可变字体属性。 |
| [FontVariationAxis](arkts-text-fontvariationaxis-i.md) | 字体可变轴信息。 |
| [FontVariationInstance](arkts-text-fontvariationinstance-i.md) | 字体可变实例信息，存放预设的可变字体样式信息。 |
| [LineMetrics](arkts-text-linemetrics-i.md) | 描述文本布局中单行文字的度量信息。 |
| [ParagraphStyle](arkts-text-paragraphstyle-i.md) | 段落样式。 |
| [PlaceholderSpan](arkts-text-placeholderspan-i.md) | 描述占位符样式。 |
| [PositionWithAffinity](arkts-text-positionwithaffinity-i.md) | 位置和亲和度。 |
| [Range](arkts-text-range-i.md) | 描述左闭右开区间。 |
| [RectStyle](arkts-text-rectstyle-i.md) | 矩形框样式。 |
| [RunMetrics](arkts-text-runmetrics-i.md) | 描述文本行中连续文本块的布局信息和度量数据。 |
| [StrutStyle](arkts-text-strutstyle-i.md) | 支柱样式，用于控制绘制文本的行间距、基线对齐方式以及其他与行高相关的属性，默认不开启。 |
| [TextBox](arkts-text-textbox-i.md) | 文本矩形区域，表示文本在布局时所占用的矩形空间。 |
| [TextLayoutResult](arkts-text-textlayoutresult-i.md) | 文本布局结果。 |
| [TextRectSize](arkts-text-textrectsize-i.md) | 文本矩形尺寸，用于描述文本的矩形宽高属性。值为浮点数，单位为物理像素px。 |
| [TextShadow](arkts-text-textshadow-i.md) | 字体阴影。 |
| [TextStyle](arkts-text-textstyle-i.md) | 文本样式。 |
| [TextTab](arkts-text-texttab-i.md) | 段落风格的文本制表符，储存了对齐方式和位置。 |
| [TypographicBounds](arkts-text-typographicbounds-i.md) | 文本行的排版边界。文本行排版边界与排版字体、排版字号有关，与字符本身无关，例如字符串为" a b "，'a'字符前面有1个空格，'b'字符后面有1个空格，排版边界就包括行首和末尾空格的边界。例如字符串为"j"或"E"，排版边界相同 ，即与字符本身无关。 > **说明：** > > 示意图展示文本行排版参数：width（包含左右空格的文本行宽度）、ascent（上升高度最高点）、descent（下降高度最低点）、leading（行间距）、top（当前行最高点）、baseline（字符基线）、bottom（ > 当前行最低点）、next line top（下一行最高点）。 > > ![zh-ch_image_Typographic.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_Typographic.png) > > 示意图展示了字符串为" a b "的排版边界。 > > ! > [zh-ch_image_TypographicBounds.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds.png) > > 示意图展示了字符串为"j"或"E"的排版边界。 > > ! > [zh-ch_image_TypographicBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds_Character.png) |

### Types

| Name | Description |
| --- | --- |
| [CaretOffsetsCallback](arkts-text-caretoffsetscallback-t.md) | 将文本行中每个字符的偏移量和索引值作为参数的回调方法。 |

### Enums

| Name | Description |
| --- | --- |
| [Affinity](arkts-text-affinity-e.md) | 位置亲和度枚举。 |
| [BreakStrategy](arkts-text-breakstrategy-e.md) | 断行策略枚举。 |
| [EllipsisMode](arkts-text-ellipsismode-e.md) | 省略号类型枚举。 EllipsisMode.START和EllipsisMode.MIDDLE仅在单行超长文本生效。 |
| [FontStyle](arkts-text-fontstyle-e.md) | 字体样式枚举。 |
| [FontWeight](arkts-text-fontweight-e.md) | 字重枚举。 |
| [FontWidth](arkts-text-fontwidth-e.md) | 字体宽度的枚举。 |
| [LineHeightStyle](arkts-text-lineheightstyle-e.md) | 行高缩放基数枚举。 |
| [PlaceholderAlignment](arkts-text-placeholderalignment-e.md) | 占位符相对于周围文本的纵向对齐方式。 ! [zh-ch_image_PlaceholderAlignment.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_PlaceholderAlignment.png) > **说明：** > > 示意图展示了后三种对齐方式，前三种对齐方式在文本基线对齐方式上类似，比较位置是文本基线，即绿色线条部分。 > > ![zh-ch_image_Baseline.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_Baseline.png) |
| [RectHeightStyle](arkts-text-rectheightstyle-e.md) | 矩形区域高度规格枚举。 |
| [RectWidthStyle](arkts-text-rectwidthstyle-e.md) | 矩形区域宽度规格枚举。 |
| [SystemFontType](arkts-text-systemfonttype-e.md) | 字体类型枚举，通过位或运算可实现组合类型。 |
| [TextAlign](arkts-text-textalign-e.md) | 文本对齐方式枚举。 |
| [TextBadgeType](arkts-text-textbadgetype-e.md) | 文本上下标枚举。 |
| [TextBaseline](arkts-text-textbaseline-e.md) | 文本基线类型枚举。 |
| [TextDecorationStyle](arkts-text-textdecorationstyle-e.md) | 装饰线样式枚举。 |
| [TextDecorationType](arkts-text-textdecorationtype-e.md) | 装饰线类型枚举。 |
| [TextDirection](arkts-text-textdirection-e.md) | 文本排版方向枚举。 |
| [TextDisplayState](arkts-text-textdisplaystate-e.md) | 文本显示状态的枚举。表示文本排版后的原生结果，与外部画布裁切、溢出屏幕等外部显示因素无关。 |
| [TextHeightBehavior](arkts-text-textheightbehavior-e.md) | 文本高度修饰符模式枚举。 |
| [TextHighContrast](arkts-text-texthighcontrast-e.md) | 文字渲染高对比度配置类型枚举。 |
| [TextProcessState](arkts-text-textprocessstate-e.md) | 文本处理状态的枚举。 |
| [TextUndefinedGlyphDisplay](arkts-text-textundefinedglyphdisplay-e.md) | 文本未定义字形时的显示方式枚举。 |
| [TextVerticalAlign](arkts-text-textverticalalign-e.md) | 文本垂直对齐方式枚举。 |
| [WordBreak](arkts-text-wordbreak-e.md) | 断词策略枚举。 |

