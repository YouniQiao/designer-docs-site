# Paragraph

Implements a carrier that stores the text content and style. You can perform operations such as layout and drawing. Before calling any of the following APIs, you must use [build()](arkts-arkgraphics2d-paragraphbuilder-c.md#build-1) of the [ParagraphBuilder](arkts-arkgraphics2d-paragraphbuilder-c.md#paragraphbuilder) class to create a **Paragraph** object.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@ohos.graphics.text';
```

## didExceedMaxLines

```TypeScript
didExceedMaxLines(): boolean
```

Checks whether the number of lines in the paragraph exceeds the maximum.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result. The value **true** means that the number of lines exceeds the maximum, and**false** means the opposite. |

**Example**

```TypeScript
let didExceed = paragraph.didExceedMaxLines();

```

## forceReuseRasterResult

```TypeScript
forceReuseRasterResult(isForce: boolean): void
```

Whether to force reuse the rasterization result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isForce | boolean | Yes | Whether to force reuse the rasterization result.True means to force reuse of the rasterization result.False means to allow updates to the rasterization result.The default value is false. |

## getActualTextRange

```TypeScript
getActualTextRange(lineNumber: number, includeSpaces: boolean): Range
```

Obtains the actually visible text range in the specified line, excluding any overflow ellipsis.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lineNumber | number | Yes | Line number of the text range, starting from 0. This API can only be used to obtainthe bounds of existing lines. That is, the line number must start from 0, and the maximum line index is thenumber of text lines – 1. The number of text lines can be obtained via the[getLineCount](arkts-arkgraphics2d-paragraph-c.md#getlinecount-1) API. |
| includeSpaces | boolean | Yes | Whether spaces are included. The value **true** means that spaces arecontained, and **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| Range | Text range obtained. If the line index is invalid, **start** and **end** are both **0**. |

**Example**

```TypeScript
let rang = paragraph.getActualTextRange(0, true);

```

## getAlphabeticBaseline

```TypeScript
getAlphabeticBaseline(): number
```

Obtains the alphabetic baseline.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Alphabetic baseline, in units of px. The value is a floating point number. |

**Example**

```TypeScript
let alphabeticBaseline = paragraph.getAlphabeticBaseline();

```

## getCharacterPositionAtCoordinate

```TypeScript
getCharacterPositionAtCoordinate(x: number, y: number, encoding: drawing.TextEncoding): PositionWithAffinity
```

Obtains the character position information closest to the given coordinates.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Horizontal coordinate in the text layout area, in physical pixels (px). X offset relativeto the top-left corner of the text layout area, with the right direction as positive. Supports floating-pointvalues and accepts negative values, which indicate positions to the left of the text layout area. If thecoordinates are beyond the text layout area, the nearest character position is returned. It can be obtainedthrough a touch event or click event. |
| y | number | Yes | Vertical coordinate in the text layout area, in physical pixels (px). Y offset relative tothe top-left corner of the text layout area, with the downward direction as positive. Supports floating-pointvalues and accepts negative values, which indicate positions above the text layout area. If the coordinatesare beyond the text layout area, the nearest character position is returned. It can be obtained through atouch event or click event. |
| encoding | drawing.TextEncoding | Yes | Text encoding type. Currently, only UTF-8 and UTF-16 encoding typesare supported. For UTF-8 encoding, the returned character position indicates the byte offset. For UTF-16encoding, the returned character position indicates the UTF-16 encoding unit offset. |

**Return value:**

| Type | Description |
| --- | --- |
| PositionWithAffinity | Character position. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [25900001](../errorcode-drawing.md#25900001-abnormal-parameter-value) | Parameter error. Possible causes: Incorrect parameter range. |

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

Obtains the character range corresponding to the specified glyph range.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| glyphRange | Range | Yes | Glyph range. |
| encoding | drawing.TextEncoding | Yes | Text encoding type. Currently, only UTF-8 and UTF-16 encoding typesare supported. For UTF-8 encoding, the returned character range indicates the byte range. For UTF-16 encoding, the returned character range indicates the UTF-16 encoding unit range. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Range&gt; | Character range. If the array contains one element, it indicates the character range.If the array contains two elements, the first element indicates the character range, and the second elementindicates the actual glyph range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [25900001](../errorcode-drawing.md#25900001-abnormal-parameter-value) | Parameter error. Possible causes: Incorrect parameter range. |

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
getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity
```

Obtains the position of a glyph closest to the given coordinates.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Horizontal coordinate, which is a floating-point value in physical pixels (px). |
| y | number | Yes | Vertical coordinate, which is a floating-point value in physical pixels (px). |

**Return value:**

| Type | Description |
| --- | --- |
| PositionWithAffinity | Position of the glyph. |

**Example**

```TypeScript
let positionWithAffinity = paragraph.getGlyphPositionAtCoordinate(0, 0);

```

## getGlyphRangeForCharacterRange

```TypeScript
getGlyphRangeForCharacterRange(characterRange: Range, encoding: drawing.TextEncoding): Array<Range>
```

Obtains the glyph range corresponding to the specified character range.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| characterRange | Range | Yes | Character range. |
| encoding | drawing.TextEncoding | Yes | Text encoding type. Currently, only UTF-8 and UTF-16 encoding typesare supported. For UTF-8 encoding, the returned actual character range indicates the byte range. For UTF-16encoding, the returned actual character range indicates the UTF-16 encoding unit range. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Range&gt; | Glyph range. The array contains two elements. The first element indicates the glyphrange, and the second element indicates the actual character range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [25900001](../errorcode-drawing.md#25900001-abnormal-parameter-value) | Parameter error. Possible causes: Incorrect parameter range. |

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
getHeight(): number
```

Obtains the total height of the text.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Total height, in units of px. The value is a floating point number. |

**Example**

```TypeScript
let height = paragraph.getHeight();

```

## getIdeographicBaseline

```TypeScript
getIdeographicBaseline(): number
```

Obtains the ideographic baseline.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Ideographic baseline, in units of px. The value is a floating point number. |

**Example**

```TypeScript
let ideographicBaseline = paragraph.getIdeographicBaseline();

```

## getLineCount

```TypeScript
getLineCount(): number
```

Obtains the number of text lines.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of text lines. The value is an integer. |

**Example**

```TypeScript
let lineCount = paragraph.getLineCount();

```

## getLineHeight

```TypeScript
getLineHeight(line: number): number
```

Obtains the height of a given line.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| line | number | Yes | Index of the line. The value is an integer ranging from 0 to getLineCount() – 1. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Line height, in physical pixels (px). |

**Example**

```TypeScript
let lineHeight = paragraph.getLineHeight(0);

```

## getLineMetrics

```TypeScript
getLineMetrics(): Array<LineMetrics>
```

Obtains an array of line measurement information.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;LineMetrics&gt; | Array of line measurement information. |

**Example**

```TypeScript
let arrLineMetric =  paragraph.getLineMetrics();

```

## getLineMetrics

```TypeScript
getLineMetrics(lineNumber: number): LineMetrics | undefined
```

Obtains the line measurement information of a line.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lineNumber | number | Yes | Line number, starting from 0. |

**Return value:**

| Type | Description |
| --- | --- |
| LineMetrics | **LineMetrics** object containing the measurement information if thespecified line number is valid and the measurement information exists. If the line number is invalid or themeasurement information cannot be obtained, **undefined** is returned. |

**Example**

```TypeScript
let lineMetrics =  paragraph.getLineMetrics(0);

```

## getLineWidth

```TypeScript
getLineWidth(line: number): number
```

Obtains the width of a given line.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| line | number | Yes | Index of the line. The value is an integer ranging from 0 to getLineCount() – 1. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Line width, in physical pixels (px). |

**Example**

```TypeScript
let lineWidth = paragraph.getLineWidth(0);

```

## getLongestLine

```TypeScript
getLongestLine(): number
```

Obtains the longest line in the text.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Longest line, in units of px. The value is a floating point number. |

**Example**

```TypeScript
let longestLine = paragraph.getLongestLine();

```

## getLongestLineWithIndent

```TypeScript
getLongestLineWithIndent(): number
```

Obtains the width of the longest line, including its indentation, in the text. You are advised to round up the return value. If the text content is empty, **0** is returned.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Width of the longest line, including its indentation. The value is a floating point number,in px. |

**Example**

```TypeScript
let longestLineWithIndent = paragraph.getLongestLineWithIndent();

```

## getMaxIntrinsicWidth

```TypeScript
getMaxIntrinsicWidth(): number
```

Obtains the maximum intrinsic width of the paragraph.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Maximum intrinsic width, in units of px. The value is a floating point number. |

**Example**

```TypeScript
let maxIntrinsicWidth = paragraph.getMaxIntrinsicWidth();

```

## getMaxWidth

```TypeScript
getMaxWidth(): number
```

Obtains the maximum width of the line in the text.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Maximum line width, in units of px. The value is a floating point number. |

**Example**

```TypeScript
let maxWidth = paragraph.getMaxWidth();

```

## getMinIntrinsicWidth

```TypeScript
getMinIntrinsicWidth(): number
```

Obtains the minimum intrinsic width of the paragraph.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Minimum intrinsic width, in units of px. The value is a floating point number. |

**Example**

```TypeScript
let minIntrinsicWidth = paragraph.getMinIntrinsicWidth();

```

## getParagraphStyle

```TypeScript
getParagraphStyle(): ParagraphStyle
```

Obtains the style configuration of a paragraph.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| ParagraphStyle | Paragraph style configuration. |

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

Obtains the text processing status of a paragraph.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TextProcessState | Text processing status of a paragraph. |

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

Obtains the rectangles occupied by all placeholders in the text.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextBox&gt; | Array holding the rectangles obtained. |

**Example**

```TypeScript
let placeholderRects = paragraph.getRectsForPlaceholders();

```

## getRectsForRange

```TypeScript
getRectsForRange(range: Range, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>
```

Obtains the rectangles occupied by the characters in the range of the text under the given rectangle width and height.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | Range of the text. |
| widthStyle | RectWidthStyle | Yes | Width of the rectangle. |
| heightStyle | RectHeightStyle | Yes | Height of the rectangle. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextBox&gt; | Array holding the rectangles obtained. |

**Example**

```TypeScript
let range: text.Range = { start: 0, end: 1};
let rects = paragraph.getRectsForRange(range, text.RectWidthStyle.TIGHT, text.RectHeightStyle.TIGHT);

```

## getTextDisplayState

```TypeScript
getTextDisplayState(): TextDisplayState
```

Obtains the text display status of a paragraph.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TextDisplayState | Text display status of a paragraph. |

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

Obtains all the text lines.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextLine&gt; | Array of text lines. |

**Example**

```TypeScript
let lines = paragraph.getTextLines();

```

## getVisibleTextRanges

```TypeScript
getVisibleTextRanges(): Array<Range>
```

Obtains the range of text that is visible on the screen in a paragraph. Excludes text that is not displayed due to truncation by the maximum line count (the maxLines attribute of [ParagraphStyle](arkts-arkgraphics2d-paragraphstyle-i.md#paragraphstyle)) or replacement in ellipsis mode ([EllipsisMode](arkts-arkgraphics2d-ellipsismode-e.md#ellipsismode)).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Range&gt; | Array of the visible text range of a paragraph. The range is the index of the UTF-16encoding unit. |

**Example**

```TypeScript
let visibleRanges = paragraph.getVisibleTextRanges();

```

## getWordBoundary

```TypeScript
getWordBoundary(offset: number): Range
```

Obtains the range of the word where the glyph with a given offset is located.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | Offset of the glyph. The value is an integer. |

**Return value:**

| Type | Description |
| --- | --- |
| Range | Range of the word. |

**Example**

```TypeScript
let wordRange = paragraph.getWordBoundary(0);

```

## layout

```TypeScript
layout(width: number): Promise<void>
```

Performs layout and calculates the positions of all glyphs. This API uses a promise to return the result.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | Maximum width of a single line, in units of px. The value is a floating point number. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

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
layoutSync(width: number): void
```

Performs layout and calculates the positions of all glyphs.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | number | Yes | Maximum width of a single line, in units of px. The value is a floating point number. |

**Example**

```TypeScript
paragraph.layoutSync(100);

```

## layoutWithConstraints

```TypeScript
layoutWithConstraints(size: TextRectSize): TextLayoutResult
```

Performs layout with the given height and width and calculates the positions of all glyphs.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | TextRectSize | Yes | Constrained height and width, in physical pixels (px). |

**Return value:**

| Type | Description |
| --- | --- |
| TextLayoutResult | Actual size after layout and character range after typesetting. |

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
paint(canvas: drawing.Canvas, x: number, y: number): void
```

Paints the text on the canvas with the coordinate point (x, y) as the upper left corner.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| canvas | drawing.Canvas | Yes | Target canvas. |
| x | number | Yes | Horizontal coordinate of the upper left corner, which is a floating-point value, inphysical pixels (px). |
| y | number | Yes | Vertical coordinate of the upper left corner, which is a floating-point value, in physicalpixels (px). |

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
paintOnPath(canvas: drawing.Canvas, path: drawing.Path, hOffset: number, vOffset: number): void
```

Draws text along a path on the canvas.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| canvas | drawing.Canvas | Yes | Target canvas. |
| path | drawing.Path | Yes | Path along which the text is drawn. |
| hOffset | number | Yes | Offset along the path direction. Positive values extend forward from the path startpoint, and negative values extend backward. Unit: physical pixels (px). |
| vOffset | number | Yes | Offset along the vertical direction of the path. Positive values extend to the rightalong the path, and negative values extend to the left. Unit: physical pixels (px). |

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

Updates the color of the entire text span. This API call also updates the decoration color if it hasn't been set yet.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | common2D.Color | Yes | Updated font color. |

**Example**

```TypeScript
paragraph.updateColor({ alpha: 255, red: 255, green: 0, blue: 0 });

```

## updateDecoration

```TypeScript
updateDecoration(decoration: Decoration): void
```

Updates the decoration line of the entire text span.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| decoration | Decoration | Yes | Updated decoration line. |

**Example**

```TypeScript
paragraph.updateDecoration({
  textDecoration: text.TextDecorationType.OVERLINE,
  color: { alpha: 255, red: 255, green: 0, blue: 0 },
  decorationStyle: text.TextDecorationStyle.WAVY,
  decorationThicknessScale: 2.0,
});

```

