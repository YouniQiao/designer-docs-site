# @ohos.graphics.text

The Text module provides a set of APIs for text layout and font management. It aims to deliver high-quality
typesetting through features like character-to-glyph conversion, kerning, line breaking, alignment, and text
measurement. Additionally, it provides font management capabilities, including font registration, font descriptors,
and font collection management.

This module provides the following classes for creating complex text paragraphs:

- [TextStyle](arkts-arkgraphics2d-textstyle-i.md): defines the font type, size, spacing, and other text properties.
- [FontCollection](arkts-arkgraphics2d-fontcollection-c.md): manages a collection of different fonts.
- [FontDescriptor](arkts-arkgraphics2d-fontdescriptor-i.md): provides information about font descriptors.
- [ParagraphStyle](arkts-arkgraphics2d-paragraphstyle-i.md): controls line break and word break strategies for the entire
paragraph.
- [ParagraphBuilder](arkts-arkgraphics2d-paragraphbuilder-c.md): used to create different paragraph objects.
- [Paragraph](arkts-arkgraphics2d-paragraph-c.md): created by calling [build()](arkts-arkgraphics2d-paragraphbuilder-c.md#build-1) of the
**ParagraphBuilder** class.
- [LineTypeset](arkts-arkgraphics2d-linetypeset-c.md): created by calling
[buildLineTypeset()](arkts-arkgraphics2d-paragraphbuilder-c.md#buildlinetypeset-1) of the **ParagraphBuilder** class.
- [TextLine](arkts-arkgraphics2d-textline-c.md): paragraph text on a line-by-line basis, obtained by calling
[getTextLines()](arkts-arkgraphics2d-paragraph-c.md#gettextlines-1) of the **Paragraph** class.
- [Run](arkts-arkgraphics2d-runmetrics-i.md): text typesetting unit, obtained by calling
[getGlyphRuns()](arkts-arkgraphics2d-textline-c.md#getglyphruns-1) of the **TextLine** class.

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
| [getFontCount](arkts-arkgraphics2d-getfontcount-f.md#getfontcount-1) | Obtains the number of font files contained in a font file based on the font file path.Returns **0** if the font file is not found, the font file path is invalid, the font file does not have therequired permission, or the file is not in the font format. |
| [getFontDescriptorByFullName](arkts-arkgraphics2d-getfontdescriptorbyfullname-f.md#getfontdescriptorbyfullname-1) | Obtains the font descriptor based on the font name and type. This API uses a promise to return the result.A font descriptor is a data structure that describes font features. It contains details of the font appearance andproperties. |
| [getFontDescriptorsFromPath](arkts-arkgraphics2d-getfontdescriptorsfrompath-f.md#getfontdescriptorsfrompath-1) | Obtains an array of font descriptors by font file path. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; - An empty array is returned if the font file is not found, the font file path is invalid, the font file does not&gt; have the required permission, or the file is not in the font format.&gt;&gt; - The **weight** field in [FontDescriptor](arkts-arkgraphics2d-fontdescriptor-i.md) does not exactly correspond to the weight&gt; value in the font file. Instead, the actual weight value in the font file is rounded off and mapped to the&gt; [FontWeight](arkts-arkgraphics2d-fontweight-e.md) enum value. For example, the weight value 350 in the font file is mapped to 4&gt; 00, and the corresponding enum value is W400. |
| [getFontPathsByType](arkts-arkgraphics2d-getfontpathsbytype-f.md#getfontpathsbytype-1) | Obtains the paths of all font files of a specified font type. |
| [getFontUnicodeSet](arkts-arkgraphics2d-getfontunicodeset-f.md#getfontunicodeset-1) | Obtains an array of font Unicode by font file path. This API uses a promise to return the result.An empty array is returned if the font file is not found, the font file path is invalid, the font file does nothave the required permission, or the file is not in the font format. |
| [getSystemFontFullNamesByType](arkts-arkgraphics2d-getsystemfontfullnamesbytype-f.md#getsystemfontfullnamesbytype-1) | Obtains the full names of all fonts of the specified type. This API uses a promise to return the result. |
| [isFontSupported](arkts-arkgraphics2d-isfontsupported-f.md#isfontsupported-1) | Checks whether the system supports the specified font file. |
| [matchFontDescriptors](arkts-arkgraphics2d-matchfontdescriptors-f.md#matchfontdescriptors-1) | Obtains all system font descriptors that match the provided font descriptor. This API uses a promise to return theresult. |
| [setTextHighContrast](arkts-arkgraphics2d-settexthighcontrast-f.md#settexthighcontrast-1) | Sets the high contrast mode for text rendering.The setting of this API takes effect for the entire process, and all pages in the process share the same mode.You can call this API to set the high contrast mode, or enable or disable the high contrast mode by toggling theswitch on the system settings screen. This API is used to set the high contrast mode for text rendering. Thesetting of this API takes precedence over the one based on system settings.This API does not take effect for the text drawing scenario. |
| [setTextUndefinedGlyphDisplay](arkts-arkgraphics2d-settextundefinedglyphdisplay-f.md#settextundefinedglyphdisplay-1) | Sets the glyph type to be used when characters are mapped to the .notdef (undefined) glyph.This setting affects all text rendered subsequently.This setting affects how to display undefined characters in the font:- The default behavior follows the .notdef glyph design of the font.- After this feature is enabled, characters without glyphs are displayed as a tofu block of text. |

### Classes

| Name | Description |
| --- | --- |
| [FontCollection](arkts-arkgraphics2d-fontcollection-c.md) | Implements a collection of fonts. |
| [LineTypeset](arkts-arkgraphics2d-linetypeset-c.md) | Implements a carrier that stores the text content and style. It can be used to compute layout details forindividual lines of text.Before calling any of the following APIs, you must use[buildLineTypeset()](arkts-arkgraphics2d-paragraphbuilder-c.md#buildlinetypeset-1) in the[ParagraphBuilder](arkts-arkgraphics2d-paragraphbuilder-c.md) class to create a **LineTypeset** object. |
| [Paragraph](arkts-arkgraphics2d-paragraph-c.md) | Implements a carrier that stores the text content and style. You can perform operations such as layout and drawing.Before calling any of the following APIs, you must use [build()](arkts-arkgraphics2d-paragraphbuilder-c.md#build-1) of the[ParagraphBuilder](arkts-arkgraphics2d-paragraphbuilder-c.md) class to create a **Paragraph** object. |
| [ParagraphBuilder](arkts-arkgraphics2d-paragraphbuilder-c.md) | Implements a paragraph builder. |
| [Run](arkts-arkgraphics2d-run-c.md) | Implements a unit for text layout.Before calling any of the following APIs, you must use [getGlyphRuns()](arkts-arkgraphics2d-textline-c.md#getglyphruns-1) of the[TextLine](arkts-arkgraphics2d-textline-c.md) class to create a **Run** object. |
| [TextLine](arkts-arkgraphics2d-textline-c.md) | Implements a carrier that describes the basic text line structure of a paragraph.Before calling any of the following APIs, you must use [getTextLines()](arkts-arkgraphics2d-paragraph-c.md#gettextlines-1) of the[Paragraph](arkts-arkgraphics2d-paragraphstyle-i.md) class or [createLine()](arkts-arkgraphics2d-linetypeset-c.md#createline-1) of the[LineTypeset](arkts-arkgraphics2d-linetypeset-c.md) class to create a **TextLine** object. |

### Interfaces

| Name | Description |
| --- | --- |
| [Decoration](arkts-arkgraphics2d-decoration-i.md) | Describes a text decoration. |
| [FontDescriptor](arkts-arkgraphics2d-fontdescriptor-i.md) | Describes the font descriptor information. |
| [FontFeature](arkts-arkgraphics2d-fontfeature-i.md) | Describes a font feature. |
| [FontVariation](arkts-arkgraphics2d-fontvariation-i.md) | Describes a font variation. |
| [FontVariationAxis](arkts-arkgraphics2d-fontvariationaxis-i.md) | Represents the font variable axis information. |
| [FontVariationInstance](arkts-arkgraphics2d-fontvariationinstance-i.md) | Font variable instance information, which stores preset variable font style information. |
| [LineMetrics](arkts-arkgraphics2d-linemetrics-i.md) | Describes the measurement information of a single line of text in the text layout. |
| [ParagraphStyle](arkts-arkgraphics2d-paragraphstyle-i.md) | Describes a paragraph style. |
| [PlaceholderSpan](arkts-arkgraphics2d-placeholderspan-i.md) | Describes the placeholder style. |
| [PositionWithAffinity](arkts-arkgraphics2d-positionwithaffinity-i.md) | Describes the position and affinity of a glyph. |
| [Range](arkts-arkgraphics2d-range-i.md) | Describes a left-closed and right-open interval. |
| [RectStyle](arkts-arkgraphics2d-rectstyle-i.md) | Describes the style of a rectangle. |
| [RunMetrics](arkts-arkgraphics2d-runmetrics-i.md) | Describes the layout information and measurement information of a run of text in a text line. |
| [StrutStyle](arkts-arkgraphics2d-strutstyle-i.md) | Describes the strut style, which determines the line spacing, baseline alignment mode, and other properties relatedto the line height when drawing texts. The strut style is disabled by default. |
| [TextBox](arkts-arkgraphics2d-textbox-i.md) | Rectangular area of the text, indicating the rectangular space occupied by the text during layout. |
| [TextLayoutResult](arkts-arkgraphics2d-textlayoutresult-i.md) | Represents the text layout result. |
| [TextRectSize](arkts-arkgraphics2d-textrectsize-i.md) | Represents the text rectangle size, which is used to describe the width and height of the text rectangle. It is afloating-point value in physical pixels (px). |
| [TextShadow](arkts-arkgraphics2d-textshadow-i.md) | Describes the text shadow. |
| [TextStyle](arkts-arkgraphics2d-textstyle-i.md) | Describes a text style. |
| [TextTab](arkts-arkgraphics2d-texttab-i.md) | Implements a paragraph-style text tab, which stores the alignment mode and position. |
| [TypographicBounds](arkts-arkgraphics2d-typographicbounds-i.md) | Describes the typographic boundaries of a text line. These boundaries depend on the typographic font and font size,but not on the characters themselves. For example, for the string " a b " (which has a space before "a" and a spaceafter "b"), the typographic boundaries include the spaces at the beginning and end of the line. Similarly, thestrings "j" and "E" have identical typographic boundaries, independent of the characters themselves.&gt; **NOTE**&gt;&gt; The following figure shows the layout parameters of a text line: width (width of the text line including the left&gt; and right spaces), ascent (highest point of the rising height), descent (lowest point of the falling height),&gt; leading (line spacing), top (highest point of the current line), baseline (character baseline), bottom (lowest&gt; point of the current line), and next line top (highest point of the next line).&gt;&gt; ![image_Typographic.png](../../../../reference/apis-arkgraphics2d/figures/image_Typographic.png)&gt;&gt; The following figure shows the typographic boundaries of the string " a b ".&gt;&gt; ![image_TypographicBounds.png](../../../../reference/apis-arkgraphics2d/figures/image_TypographicBounds.png)&gt;&gt; The following figure shows the typographic boundaries of the strings "j" and "E".&gt;&gt; !&gt; [image_TypographicBounds_Character.png](../../../../reference/apis-arkgraphics2d/figures/image_TypographicBounds_Character.png) |

### Enums

| Name | Description |
| --- | --- |
| [Affinity](arkts-arkgraphics2d-affinity-e.md) | Enumerates the affinity modes. |
| [BreakStrategy](arkts-arkgraphics2d-breakstrategy-e.md) | Enumerates the text break strategies. |
| [EllipsisMode](arkts-arkgraphics2d-ellipsismode-e.md) | Enumerates the ellipsis styles.**EllipsisMode.START** and **EllipsisMode.MIDDLE** take effect only when text overflows in a single line. |
| [FontStyle](arkts-arkgraphics2d-fontstyle-e.md) | Enumerates the font styles. |
| [FontWeight](arkts-arkgraphics2d-fontweight-e.md) | Enumerates the font weights. |
| [FontWidth](arkts-arkgraphics2d-fontwidth-e.md) | Enumerates the font widths. |
| [LineHeightStyle](arkts-arkgraphics2d-lineheightstyle-e.md) | Enumerates the line height scaling base. |
| [PlaceholderAlignment](arkts-arkgraphics2d-placeholderalignment-e.md) | Enumerates the vertical alignment modes of a placeholder relative to the surrounding text.![image_PlaceholderAlignment.png](../../../../reference/apis-arkgraphics2d/figures/image_PlaceholderAlignment.png)&gt; **NOTE**&gt;&gt; The figure shows the last three alignment modes. The first three alignment modes are similar in text baseline&gt; alignment, with the comparison reference being the text baseline, indicated by the green line.&gt;&gt; ![image_Baseline.png](../../../../reference/apis-arkgraphics2d/figures/image_Baseline.png) |
| [RectHeightStyle](arkts-arkgraphics2d-rectheightstyle-e.md) | Enumerates the rectangle height styles. |
| [RectWidthStyle](arkts-arkgraphics2d-rectwidthstyle-e.md) | Enumerates the rectangle width styles. |
| [TextAlign](arkts-arkgraphics2d-textalign-e.md) | Enumerates the text alignment modes. |
| [TextBadgeType](arkts-arkgraphics2d-textbadgetype-e.md) | Enumerates the text badges. |
| [TextBaseline](arkts-arkgraphics2d-textbaseline-e.md) | Enumerates the text baseline types. |
| [TextDecorationStyle](arkts-arkgraphics2d-textdecorationstyle-e.md) | Enumerates the text decoration styles. |
| [TextDecorationType](arkts-arkgraphics2d-textdecorationtype-e.md) | Enumerates the text decoration types. |
| [TextDirection](arkts-arkgraphics2d-textdirection-e.md) | Enumerates the text directions. |
| [TextDisplayState](arkts-arkgraphics2d-textdisplaystate-e.md) | Enumerates text display states. Native result after text typesetting, which is irrelevant to external displayfactors such as external canvas cropping and screen overflow. |
| [TextHeightBehavior](arkts-arkgraphics2d-textheightbehavior-e.md) | Enumerates the text height modifier patterns. |
| [TextHighContrast](arkts-arkgraphics2d-texthighcontrast-e.md) | Enumerates the high contrast types for text rendering. |
| [TextProcessState](arkts-arkgraphics2d-textprocessstate-e.md) | Enumerates text processing states. |
| [TextUndefinedGlyphDisplay](arkts-arkgraphics2d-textundefinedglyphdisplay-e.md) | Enumerates the modes for displaying undefined text glyphs. |
| [TextVerticalAlign](arkts-arkgraphics2d-textverticalalign-e.md) | Enumerates the vertical alignment modes of text. |
| [WordBreak](arkts-arkgraphics2d-wordbreak-e.md) | Enumerates the word break types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [SystemFontType](arkts-arkgraphics2d-systemfonttype-e.md) | Enumerates the font types, which can be combined through bitwise OR operations. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [CaretOffsetsCallback](arkts-arkgraphics2d-caretoffsetscallback-t.md) | Defines the callback used to receive the offset and index of each character in a text line object as itsparameters. |

