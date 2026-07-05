# Paragraph

保存文本内容及样式的载体，支持排版与绘制操作。 下列API示例中都需先使用[ParagraphBuilder]text.ParagraphBuilder类的[build()]text.ParagraphBuilder.build接口获取到 Paragraph对象实例，再通过此实例调用对应方法。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## didExceedMaxLines

```TypeScript
didExceedMaxLines(): boolean
```

返回段落是否超过最大行数。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true表示段落超出了最大行限制，false则表示没有超出最大行限制。 |

**Example**

```TypeScript
let didExceed = paragraph.didExceedMaxLines();

```

## forceReuseRasterResult

```TypeScript
forceReuseRasterResult(isForce: boolean): void
```

是否强制复用栅格化结果。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isForce | boolean | Yes | 是否强制复用栅格化结果。  True表示强制复用光栅化结果。False表示允许更新光栅化结果。  默认值为false。 |

## getActualTextRange

```TypeScript
getActualTextRange(lineNumber: int, includeSpaces: boolean): Range
```

获取指定行的实际可见文本范围，不包括溢出的省略号。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lineNumber | int | Yes | 要获取文本范围的行索引，行索引从0开始。该接口只能获取已有行的边界，即输入行索引从0开始。最大行索引为文本行数量-1，文本行数量可通过  [getLineCount]text.Paragraph.getLineCount接口获取。 |
| includeSpaces | boolean | Yes | 表示是否应包含空白字符。true表示包含空白字符，false表示不包含空白字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Range | 返回对应行数的实际文本范围。如果行索引非法，返回的start和end均为0。 |

**Example**

```TypeScript
let rang = paragraph.getActualTextRange(0, true);

```

## getAlphabeticBaseline

```TypeScript
getAlphabeticBaseline(): double
```

获取拉丁字母基线位置。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 拉丁字母下的基线位置，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
let alphabeticBaseline = paragraph.getAlphabeticBaseline();

```

## getCharacterPositionAtCoordinate

```TypeScript
getCharacterPositionAtCoordinate(x: double, y: double, encoding: drawing.TextEncoding): PositionWithAffinity
```

获取与给定坐标最接近的字符位置信息。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | double | Yes | 文本排版区域内的水平坐标，单位为物理像素（px）。相对于文本排版区域左上角的x偏移量，向右为正方向。支持浮点数，可取负值（表示在文本区域左侧）。坐标超出文本区域范围时，将返回最近的字  符位置。可通过触摸事件或点击事件获取。 |
| y | double | Yes | 文本排版区域内的垂直坐标，单位为物理像素（px）。相对于文本排版区域左上角的y偏移量，向下为正方向。支持浮点数，可取负值（表示在文本区域上方）。坐标超出文本区域范围时，将返回最近的字  符位置。可通过触摸事件或点击事件获取。 |
| encoding | drawing.TextEncoding | Yes | 文本编码类型。目前仅支持UTF-8和UTF-16编码类型。对于UTF-8编码，返回的字符位置表示字节偏移量。对于UTF-16编码，返回的字符  位置表示UTF-16编码单元偏移量。 |

**Return value:**

| Type | Description |
| --- | --- |
| PositionWithAffinity | 字符位置信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

**Example**

```TypeScript
import { drawing, text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button("get character position")
        .onClick(() => {
          let encoding: drawing.TextEncoding = drawing.TextEncoding.TEXT_ENCODING_UTF8;
          let textData = "Heน้ำl👨‍👩‍👧lo1️⃣World";
          let myTextStyle: text.TextStyle = {
            color: { alpha: 255, red: 255, green: 0, blue: 0 },
            fontSize: 33,
          };
          let myParagraphStyle: text.ParagraphStyle = {
            textStyle: myTextStyle,
            align: text.TextAlign.END,
          };
          let fontCollection = new text.FontCollection();
          let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
          paragraphBuilder.addText(textData);
          let paragraph = paragraphBuilder.build();
          paragraph.layoutSync(200);
          let x = 10;
          let y = 5;
          let position = paragraph.getCharacterPositionAtCoordinate(x, y, encoding);
        })
    }
  }
}

```

## getCharacterRangeForGlyphRange

```TypeScript
getCharacterRangeForGlyphRange(glyphRange: Range, encoding: drawing.TextEncoding): Array<Range>
```

获取指定字形范围对应的字符范围。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| glyphRange | Range | Yes | 字形范围。 |
| encoding | drawing.TextEncoding | Yes | 文本编码类型。目前仅支持UTF-8和UTF-16编码类型。对于UTF-8编码，返回的字符范围表示字节范围。对于UTF-16编码，返回的字符范  围表示UTF-16编码单元范围。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Range> | 字符范围。如果数组包含一个元素，它表示字符范围。如果包含两个元素，第一个是字符范围，第二个是实际的字形范围。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

**Example**

```TypeScript
import { drawing, text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button("get character range")
        .onClick(() => {
          let glyphRange: text.Range = { start: 0, end: 5 };
          let encoding: drawing.TextEncoding = drawing.TextEncoding.TEXT_ENCODING_UTF8;
          let textData = "Heน้ำl👨‍👩‍👧lo1️⃣World";
          let myTextStyle: text.TextStyle = {
            color: { alpha: 255, red: 255, green: 0, blue: 0 },
            fontSize: 33,
          };
          let myParagraphStyle: text.ParagraphStyle = {
            textStyle: myTextStyle,
            align: text.TextAlign.END,
          };
          let fontCollection = new text.FontCollection();
          let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
          paragraphBuilder.addText(textData);
          let paragraph = paragraphBuilder.build();
          paragraph.layoutSync(200);
          let ranges = paragraph.getCharacterRangeForGlyphRange(glyphRange, encoding);
        })
    }
  }
}

```

## getGlyphPositionAtCoordinate

```TypeScript
getGlyphPositionAtCoordinate(x: double, y: double): PositionWithAffinity
```

获取与给定坐标最接近的字形位置信息。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | double | Yes | 横坐标，浮点数，单位为物理像素px。 |
| y | double | Yes | 纵坐标，浮点数，单位为物理像素px。 |

**Return value:**

| Type | Description |
| --- | --- |
| PositionWithAffinity | 字形位置信息。 |

**Example**

```TypeScript
let positionWithAffinity = paragraph.getGlyphPositionAtCoordinate(0, 0);

```

## getGlyphRangeForCharacterRange

```TypeScript
getGlyphRangeForCharacterRange(characterRange: Range, encoding: drawing.TextEncoding): Array<Range>
```

获取指定字符范围对应的字形范围。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characterRange | Range | Yes | 字符范围。 |
| encoding | drawing.TextEncoding | Yes | 文本编码类型。目前仅支持UTF-8和UTF-16编码类型。对于UTF-8编码，返回的实际字符范围表示字节范围。对于UTF-16编码，返回的实  际字符范围表示UTF-16编码单元范围。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Range> | 字形范围。数组包含两个元素，第一个是字形范围，第二个是实际的字符范围。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

**Example**

```TypeScript
import { drawing, text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button("get glyph range")
        .onClick(() => {
          let characterRange: text.Range = { start: 0, end: 5 };
          let encoding: drawing.TextEncoding = drawing.TextEncoding.TEXT_ENCODING_UTF8;
          let textData = "Heน้ำl👨‍👩‍👧lo1️⃣World";
          let myTextStyle: text.TextStyle = {
            color: { alpha: 255, red: 255, green: 0, blue: 0 },
            fontSize: 33,
          };
          let myParagraphStyle: text.ParagraphStyle = {
            textStyle: myTextStyle,
            align: text.TextAlign.END,
          };
          let fontCollection = new text.FontCollection();
          let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
          paragraphBuilder.addText(textData);
          let paragraph = paragraphBuilder.build();
          paragraph.layoutSync(200);
          let ranges = paragraph.getGlyphRangeForCharacterRange(characterRange, encoding);
        })
    }
  }
}

```

## getHeight

```TypeScript
getHeight(): double
```

获取文本总高度。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 总高度，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
let height = paragraph.getHeight();

```

## getIdeographicBaseline

```TypeScript
getIdeographicBaseline(): double
```

获取表意字（如CJK（中文，日文，韩文））下的基线位置。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 获取表意字下的基线位置，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
let ideographicBaseline = paragraph.getIdeographicBaseline();

```

## getLineCount

```TypeScript
getLineCount(): int
```

返回文本行数。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| int | 文本行数量，整数。 |

**Example**

```TypeScript
let lineCount = paragraph.getLineCount();

```

## getLineHeight

```TypeScript
getLineHeight(line: int): double
```

返回指定行的行高。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| line | int | Yes | 文本行索引，整数，范围为0~getLineCount()-1。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | 行高，单位为物理像素px。 |

**Example**

```TypeScript
let lineHeight = paragraph.getLineHeight(0);

```

## getLineMetrics

```TypeScript
getLineMetrics(): Array<LineMetrics>
```

获取文本行的行度量数组。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;LineMetrics> | 文本行的行度量数组。 |

**Example**

```TypeScript
let arrLineMetric =  paragraph.getLineMetrics();

```

## getLineMetrics

```TypeScript
getLineMetrics(lineNumber: int): LineMetrics | undefined
```

获取特定行号的行度量信息。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lineNumber | int | Yes | 要查询度量信息的行的编号，行号从0开始。 |

**Return value:**

| Type | Description |
| --- | --- |
| LineMetrics | LineMetrics object containing the measurement information if the  specified line number is valid and the measurement information exists. If the line number is invalid or the  measurement information cannot be obtained, undefined is returned. |

**Example**

```TypeScript
let lineMetrics =  paragraph.getLineMetrics(0);

```

## getLineWidth

```TypeScript
getLineWidth(line: int): double
```

返回指定行的行宽。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| line | int | Yes | 文本行索引，整数，范围为0~getLineCount()-1。 |

**Return value:**

| Type | Description |
| --- | --- |
| double | 行宽，单位为物理像素px。 |

**Example**

```TypeScript
let lineWidth = paragraph.getLineWidth(0);

```

## getLongestLine

```TypeScript
getLongestLine(): double
```

获取文本最长行宽。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 最长一行的宽度，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
let longestLine = paragraph.getLongestLine();

```

## getLongestLineWithIndent

```TypeScript
getLongestLineWithIndent(): double
```

获取文本最长一行的宽度（包含缩进），建议向上取整。文本内容为空时返回0。

**Since:** 13

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 最长一行的宽度（该宽度包含当前行缩进的宽度），浮点数，单位为物理像素px。 |

**Example**

```TypeScript
let longestLineWithIndent = paragraph.getLongestLineWithIndent();

```

## getMaxIntrinsicWidth

```TypeScript
getMaxIntrinsicWidth(): double
```

获取段落最大固有宽度。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 该段落所占水平空间的最大固有宽度，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
let maxIntrinsicWidth = paragraph.getMaxIntrinsicWidth();

```

## getMaxWidth

```TypeScript
getMaxWidth(): double
```

获取文本最大行宽。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 最大的行宽，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
let maxWidth = paragraph.getMaxWidth();

```

## getMinIntrinsicWidth

```TypeScript
getMinIntrinsicWidth(): double
```

获取段落最小固有宽度。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 该段落所占水平空间的最小固有宽度，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
let minIntrinsicWidth = paragraph.getMinIntrinsicWidth();

```

## getParagraphStyle

```TypeScript
getParagraphStyle(): ParagraphStyle
```

获取段落的样式配置。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| ParagraphStyle | 段落的样式配置。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button("Click")
        .onClick(() => {
          let textData = "Hello World";
          let myTextStyle: text.TextStyle = {
            color: { alpha: 255, red: 255, green: 0, blue: 0 },
            fontSize: 33,
          };
          let myParagraphStyle: text.ParagraphStyle = {
            textStyle: myTextStyle
          };
          let fontCollection = new text.FontCollection();
          let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
          paragraphBuilder.addText(textData);
          let paragraph = paragraphBuilder.build();
          paragraph.layoutSync(200);
          let paragraphStyle = paragraph.getParagraphStyle();
          if (paragraphStyle.textStyle != undefined) {
            console.info("Print fontSize: " + paragraphStyle.textStyle?.fontSize);
          }
        })
    }
  }
}

```

## getProcessState

```TypeScript
getProcessState(): TextProcessState
```

获取段落的文本处理状态。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TextProcessState | 段落的文本处理状态。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button("Click")
        .onClick(() => {
          let textData = "Hello World";
          let myTextStyle: text.TextStyle = {
            color: { alpha: 255, red: 255, green: 0, blue: 0 },
            fontSize: 33,
          };
          let myParagraphStyle: text.ParagraphStyle = {
            textStyle: myTextStyle
          };
          let fontCollection = new text.FontCollection();
          let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
          paragraphBuilder.addText(textData);
          let paragraph = paragraphBuilder.build();
          let processState = paragraph.getProcessState(); // Now it is INIT
          console.info("Print state: " + processState);
          paragraph.layoutSync(200);
          processState = paragraph.getProcessState(); // Now it is FORMATTED
          console.info("Print state: " + processState);
        })
    }
  }
}

```

## getRectsForPlaceholders

```TypeScript
getRectsForPlaceholders(): Array<TextBox>
```

获取文本中所有占位符所占的矩形区域。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextBox> | 矩形区域数组。 |

**Example**

```TypeScript
let placeholderRects = paragraph.getRectsForPlaceholders();

```

## getRectsForRange

```TypeScript
getRectsForRange(range: Range, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>
```

获取给定的矩形区域宽度以及矩形区域高度的规格下，文本中该区间范围内的字符所占的矩形区域。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | 需要获取的区域的文本区间。 |
| widthStyle | RectWidthStyle | Yes | 返回的矩形区域的宽度的规格。 |
| heightStyle | RectHeightStyle | Yes | 返回的矩形区域的高度的规格。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextBox> | 矩形区域数组。 |

**Example**

```TypeScript
let range: text.Range = { start: 0, end: 1};
let rects = paragraph.getRectsForRange(range, text.RectWidthStyle.TIGHT, text.RectHeightStyle.TIGHT);

```

## getTextDisplayState

```TypeScript
getTextDisplayState(): TextDisplayState
```

获取段落的文本显示状态。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TextDisplayState | 段落的文本显示状态。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button("Click")
        .onClick(() => {
          let textData = "Hello World";
          let myTextStyle: text.TextStyle = {
            color: { alpha: 255, red: 255, green: 0, blue: 0 },
            fontSize: 33,
          };
          let myParagraphStyle: text.ParagraphStyle = {
            textStyle: myTextStyle
          };
          let fontCollection = new text.FontCollection();
          let paragraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);
          paragraphBuilder.addText(textData);
          let paragraph = paragraphBuilder.build();
          let displayState = paragraph.getTextDisplayState(); // Now it is UNKNOWN
          console.info("Print state: " + displayState);
          paragraph.layoutSync(200);
          displayState = paragraph.getTextDisplayState(); // Now it is CLIP
          console.info("Print state: " + displayState);
        })
    }
  }
}

```

## getTextLines

```TypeScript
getTextLines(): Array<TextLine>
```

返回所有的文本行。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextLine> | 文本行载体数组。 |

**Example**

```TypeScript
let lines = paragraph.getTextLines();

```

## getVisibleTextRanges

```TypeScript
getVisibleTextRanges(): Array<Range>
```

获取段落中在屏幕上可见的文本范围。不包含因最大行数（[ParagraphStyle]text.ParagraphStyle的maxLines属性）截断或省略号模式（ [EllipsisMode]text.EllipsisMode）替换而未显示的文本。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Range> | 段落可见文本范围数组，范围为UTF-16编码单元索引。 |

**Example**

```TypeScript
let visibleRanges = paragraph.getVisibleTextRanges();

```

## getWordBoundary

```TypeScript
getWordBoundary(offset: int): Range
```

返回给定offset的字形所在单词的索引区间。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | int | Yes | 字形的偏移量，整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Range | 单词的索引区间。 |

**Example**

```TypeScript
let wordRange = paragraph.getWordBoundary(0);

```

## layout

```TypeScript
layout(width: double): Promise<void>
```

进行排版并计算所有字形位置，使用Promise异步回调。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | double | Yes | 单行的最大宽度，浮点数，单位为物理像素px。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { drawing, text } from '@kit.ArkGraphics2D'
import { image } from '@kit.ImageKit'

let textStyle: text.TextStyle = {
  color: {
    alpha: 255,
    red: 255,
    green: 0,
    blue: 0
  },
  fontSize: 30,
};
let paragraphStyle: text.ParagraphStyle = {
  textStyle: textStyle,
};
let fontCollection: text.FontCollection = new text.FontCollection();
let paragraphBuilder = new text.ParagraphBuilder(paragraphStyle, fontCollection);
// Add a text string.
paragraphBuilder.addText("test");
// Create a paragraph object.
let paragraph = paragraphBuilder.build();

function textFunc(pixelmap: PixelMap) {
  // Construct a canvas using an image object.
  let canvas = new drawing.Canvas(pixelmap);
  // Draw a text string.
  paragraph.paint(canvas, 100, 10);
}

@Entry
@Component
struct Index {
  @State pixelmap?: PixelMap = undefined;
  fun: Function = textFunc;

  async prepareLayoutPromise() {
    // Calculate the layout of the paragraph object.
    paragraph.layout(200).then((data) => {
      console.info(`Succeeded in doing layout,  ${JSON.stringify(data)}`);
    }).catch((error: Error) => {
      console.error(`Failed to do layout, error: ${JSON.stringify(error)} message: ${error.message}`);
    });
  }

  aboutToAppear() {
    this.prepareLayoutPromise();
  }

  build() {
    Column() {
      Image(this.pixelmap).width(200).height(200);
      Button("layout")
        .width(100)
        .height(50)
        .onClick(() => {
          const color: ArrayBuffer = new ArrayBuffer(160000);
          let opts: image.InitializationOptions = { editable: true, pixelFormat: 3, size: { height: 200, width: 200 } }
          if (this.pixelmap == undefined) {
            // Construct an image object.
            this.pixelmap = image.createPixelMapSync(color, opts);
          }
          // Draw the text.
          this.fun(this.pixelmap);
        })
    }
  }
}

```

## layoutSync

```TypeScript
layoutSync(width: double): void
```

进行排版并计算所有字形位置。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | double | Yes | 单行的最大宽度，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
paragraph.layoutSync(100);

```

## layoutWithConstraints

```TypeScript
layoutWithConstraints(size: TextRectSize): TextLayoutResult
```

使用给定的高度和宽度进行排版并计算所有字形的位置。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | TextRectSize | Yes | 约束的高度和宽度，单位为物理像素px。 |

**Return value:**

| Type | Description |
| --- | --- |
| TextLayoutResult | 布局后的实际尺寸和排版后容下的字符范围。 |

**Example**

```TypeScript
let size: text.TextRectSize = { width: 200, height: 100 };
let result = paragraph.layoutWithConstraints(size); // Enhanced layoutSync
console.info('Width: ' + result.correctRect.width + ', Height: ' + result.correctRect.height);
for (let i = 0; i < result.fitStrRange.length; ++i) {
  console.info('fitRange: [' + result.fitStrRange[i].start + ', ' + result.fitStrRange[i].end + ']');
}

```

## paint

```TypeScript
paint(canvas: drawing.Canvas, x: double, y: double): void
```

在画布上以 (x, y) 为左上角绘制文本。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| canvas | drawing.Canvas | Yes | 绘制的目标画布。 |
| x | double | Yes | 绘制的左上角位置的横坐标，浮点数，单位为物理像素px。 |
| y | double | Yes | 绘制的左上角位置的纵坐标，浮点数，单位为物理像素px。 |

**Example**

```TypeScript
const color: ArrayBuffer = new ArrayBuffer(160000);
let opts: image.InitializationOptions = { editable: true, pixelFormat: 3, size: { height: 200, width: 200 } }
let pixelMap: image.PixelMap = image.createPixelMapSync(color, opts);
let canvas = new drawing.Canvas(pixelMap);
paragraph.paint(canvas, 0, 0);

```

## paintOnPath

```TypeScript
paintOnPath(canvas: drawing.Canvas, path: drawing.Path, hOffset: double, vOffset: double): void
```

在画布上沿路径绘制文本。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| canvas | drawing.Canvas | Yes | 绘制的目标画布。 |
| path | drawing.Path | Yes | 确认文字位置的路径。 |
| hOffset | double | Yes | 沿路径方向偏置，从路径起点向前为正，向后为负，单位为物理像素px。 |
| vOffset | double | Yes | 沿路径垂直方向偏置，沿路径方向左侧为负，右侧为正，单位为物理像素px。 |

**Example**

```TypeScript
const color: ArrayBuffer = new ArrayBuffer(160000);
let opts: image.InitializationOptions = { editable: true, pixelFormat: 3, size: { height: 200, width: 200 } }
let pixelMap: image.PixelMap = image.createPixelMapSync(color, opts);
let canvas = new drawing.Canvas(pixelMap);
let path = new drawing.Path();
path.arcTo(20, 20, 180, 180, 180, 90);
paragraph.paintOnPath(canvas, path, 0, 0);

```

## updateColor

```TypeScript
updateColor(color: common2D.Color): void
```

更新整个文本段落的颜色。如果当前装饰线未设置颜色，使用该接口也会同时更新装饰线的颜色。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | common2D.Color | Yes | 更新后的字体色。 |

**Example**

```TypeScript
paragraph.updateColor({ alpha: 255, red: 255, green: 0, blue: 0 });

```

## updateDecoration

```TypeScript
updateDecoration(decoration: Decoration): void
```

更新整个文本段落的装饰线。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| decoration | Decoration | Yes | 更新后的装饰线。 |

**Example**

```TypeScript
paragraph.updateDecoration({
  textDecoration: text.TextDecorationType.OVERLINE,
  color: { alpha: 255, red: 255, green: 0, blue: 0 },
  decorationStyle: text.TextDecorationStyle.WAVY,
  decorationThicknessScale: 2.0,
});

```

