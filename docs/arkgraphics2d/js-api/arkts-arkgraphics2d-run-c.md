# Run

Implements a unit for text layout.

Before calling any of the following APIs, you must use [getGlyphRuns()](arkts-arkgraphics2d-textline-c.md#getglyphruns-1) of the
[TextLine](arkts-arkgraphics2d-textline-c.md) class to create a **Run** object.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## getAdvances

```TypeScript
getAdvances(range: Range): Array<common2D.Point>
```

Obtains the glyph width array of each glyph within the specified range of the run.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | Range of the glyph position to be obtained. **range.start** indicates the start positionof the range, and **range.end** indicates the range length. If the length is **0**, the range starts from**range.start** and ends at the end of the run. If **range.end** or **range.start** is set to a negativevalue, **null**, or **undefined**, **undefined** is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point&gt; | Returns the glyph width array of each glyph in the run unit relative to thehorizontal direction. In [common2D.Point](arkts-arkgraphics2d-point-i.md), the x valuerepresents the glyph width of each glyph relative to the horizontal direction, in physical pixels (px). The yvalue is a reserved field and returns **0** by default. |

**Example**

```TypeScript
let advancesRange = runs[0].getAdvances({start:1, end:2}); // Obtain the widths of glyphs in the range starting from position 1, with a length of 2.
advancesRange = runs[0].getAdvances({start:-1, end:2}); // -1 is an invalid value, and undefined is returned.
advancesRange = runs[0].getAdvances({start:0, end:-10}); // -10 is an invalid value, and undefined is returned.
let advancesNull = runs[0].getAdvances(null); // null is an invalid value, and undefined is returned.

```

## getFont

```TypeScript
getFont(): drawing.Font
```

Obtains the **Font** object of this run.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| drawing.Font | **Font** object of this run. |

**Example**

```TypeScript
let font = runs[0].getFont();

```

## getGlyphCount

```TypeScript
getGlyphCount(): number
```

Obtains the number of glyphs in this run.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of glyphs. The value is an integer. |

**Example**

```TypeScript
let glyphs = runs[0].getGlyphCount();

```

## getGlyphs

```TypeScript
getGlyphs(): Array<number>
```

Obtains the index of each glyph in this run.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | Array holding the index of each glyph in the run. |

**Example**

```TypeScript
let glyph = runs[0].getGlyphs();

```

## getGlyphs

```TypeScript
getGlyphs(range: Range): Array<number>
```

Obtains the index of each glyph in the specified range of this run.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | Range of glyph indices to obtain. **range.start** indicates the starting position of therange, and **range.end** indicates the length of the range. When **range.end** is **0**, glyphs are fetchedfrom **range.start** to the end of the rendered block. If **range.end** or **range.start** is set to anegative value, **null**, or **undefined**, **undefined** is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | Array holding the index of each glyph in the run. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

function textFunc() {
  let glyphs = runs[0].getGlyphs(); // Obtain the index of all glyphs of the run.
  let glyphsRange = runs[0].getGlyphs({start:1, end:2}); // Obtain the glyph indices within the range starting at position 1 with a length of 2 from the rendered block.
  glyphsRange = runs[0].getGlyphs({start:-1, end:2}); // -1 is an invalid value, and undefined is returned.
  glyphsRange = runs[0].getGlyphs({start:0, end:-10}); // -10 is an invalid value, and undefined is returned.
  let glyphsNull = runs[0].getGlyphs(null); // null is an invalid value, and undefined is returned.
  let glyphsUndefined = runs[0].getGlyphs(undefined); // undefined is an invalid value, and undefined is returned.
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## getImageBounds

```TypeScript
getImageBounds(): common2D.Rect
```

Obtains the image boundaries of the typographic unit. Equivalent to visual boundaries, these boundaries are
associated with the typographic font, font size, and characters. For example, for the string " a b " (which has a
space before "a" and a space after "b"), only "a b" is visible to users, and therefore the image boundaries do
not include these spaces at the beginning and end of the line.

> **NOTE**
>
> The following figure shows the image boundaries of the string " a b ".
>
> ![image_ImageBounds.png](../../../../reference/apis-arkgraphics2d/figures/image_ImageBounds.png)
>
> The following figure shows the image boundaries of the strings "j" and "E".
>
> !
> [image_ImageBounds_Character.png](../../../../reference/apis-arkgraphics2d/figures/image_ImageBounds_Character.png)

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Rect | Image boundary of the layout unit, in physical pixels (px). |

**Example**

```TypeScript
let bounds = runs[0].getImageBounds();

```

## getOffsets

```TypeScript
getOffsets(): Array<common2D.Point>
```

Obtains the offset of each glyph in this run relative to its index.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point&gt; | Array holding the offset of each glyph in the run relative to its index. |

**Example**

```TypeScript
let offsets = runs[0].getOffsets();

```

## getPositions

```TypeScript
getPositions(): Array<common2D.Point>
```

Obtains the position of each glyph relative to the respective line in this run.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point&gt; | Array holding the position of each glyph relative to the respective line inthe run. |

**Example**

```TypeScript
let positions = runs[0].getPositions();

```

## getPositions

```TypeScript
getPositions(range: Range): Array<common2D.Point>
```

Obtains the position array of each glyph relative to the respective line within the specified range of this run.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | Range of the glyphs, where **range.start** indicates the start position of the range,and **range.end** indicates the length of the range. If the length is **0**, the range is from**range.start** to the end of the run. If **range.end** or **range.start** is set to a negative value,**null**, or **undefined**, **undefined** is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point&gt; | Array holding the position of each glyph relative to the respective line inthe run. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

function textFunc() {
  let positions = runs[0].getPositions(); // Obtain the positions of all glyphs in the run.
  let positionsRange = runs[0].getPositions({start:1, end:2}); // Obtain the positions of glyphs in the range starting from position 1, with a length of 2.
  positionsRange = runs[0].getPositions({start:-1, end:2}); // -1 is an invalid value, and undefined is returned.
  positionsRange = runs[0].getPositions({start:0, end:-10}); // -10 is an invalid value, and undefined is returned.
  let positionsNull = runs[0].getPositions(null); // null is an invalid value, and undefined is returned.
  let positionsUndefined = runs[0].getPositions(undefined); // undefined is an invalid value, and undefined is returned.
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## getStringIndices

```TypeScript
getStringIndices(range?: Range): Array<number>
```

Obtains an array of character indices for glyphs within a specified range of this run, where the indices are
offsets relative to the entire paragraph.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | No | Range of character indices to be obtained. **range.start** indicates the startingposition of the range, and **range.end** indicates the range length. If the length is 0, characters areretrieved from **range.start** to the end of the rendered block. If **range.end** or **range.start** is setto a negative value, **null**, or **undefined**, **undefined** is returned. If this parameter is not passed,the entire run is obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number&gt; | Array of character indices. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

function textFunc() {
  let indices = runs[0].getStringIndices(); // Obtain the indices of all characters in the run.
  let indicesRange = runs[0].getStringIndices({start:1, end:2}); // Obtain the indices of characters in the range starting from position 1, with a length of 2.
  indicesRange = runs[0].getStringIndices({start:-1, end:2}); // -1 is an invalid value, and undefined is returned.
  indicesRange = runs[0].getStringIndices({start:0, end:-10}); // -10 is an invalid value, and undefined is returned.
  let indicesNull = runs[0].getStringIndices(null); // null is an invalid value, and undefined is returned.
  let indicesUndefined = runs[0].getStringIndices(undefined); // undefined is an invalid value, and undefined is returned.
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## getStringRange

```TypeScript
getStringRange(): Range
```

Obtains the range of glyphs generated by this run.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Range | Range of the glyphs, where **start** indicates the start position of the range, which is theindex relative to the entire paragraph, and **end** indicates the length of the range. |

**Example**

```TypeScript
let runStringRange = runs[0].getStringRange();
let location = runStringRange.start;
let length = runStringRange.end;

```

## getTextDirection

```TypeScript
getTextDirection(): TextDirection
```

Obtains the text direction of the run.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TextDirection | Obtains the text direction of the run. |

**Example**

```TypeScript
let textDirection = runs[0].getTextDirection();

```

## getTextStyle

```TypeScript
getTextStyle(): TextStyle
```

Obtains the text style of this run.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TextStyle | Text style of this run. |

## getTypographicBounds

```TypeScript
getTypographicBounds(): TypographicBounds
```

Obtains the typographic boundaries of the typographic unit. These boundaries are associated with the typographic
font and font size, but not with the characters. For example, for the string " a b " (which has a space before "a
" and a space after "b"), the typographic boundaries include the spaces at the beginning and end of the line.

> **NOTE**
>
> The following figure shows the typographic boundaries of the string " a b ".
>
> ![image_TypographicBounds.png](../../../../reference/apis-arkgraphics2d/figures/image_TypographicBounds.png)
>
> The following figure shows the typographic boundaries of the strings "j" and "E".
>
> !
> [image_TypographicBounds_Character.png](../../../../reference/apis-arkgraphics2d/figures/image_TypographicBounds_Character.png)

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TypographicBounds | Typographic boundaries of the run. |

**Example**

```TypeScript
let typographicBounds = runs[0].getTypographicBounds();

```

## paint

```TypeScript
paint(canvas: drawing.Canvas, x: number, y: number): void
```

Paints this run on the canvas with the coordinate point (x, y) as the upper left corner.

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
import { drawing } from '@kit.ArkGraphics2D'
import { text } from '@kit.ArkGraphics2D'
import { common2D } from '@kit.ArkGraphics2D'
import { image } from '@kit.ImageKit'

function textFunc(pixelmap: PixelMap) {
  let canvas = new drawing.Canvas(pixelmap);
  runs[0].paint(canvas, 0, 0);
}

@Entry
@Component
struct Index {
  @State pixelmap?: PixelMap = undefined;
  fun: Function = textFunc;
  build() {
    Column() {
      Image(this.pixelmap).width(200).height(200);
      Button().onClick(() => {
        if (this.pixelmap == undefined) {
          const color: ArrayBuffer = new ArrayBuffer(160000);
          let opts: image.InitializationOptions = { editable: true, pixelFormat: 3, size: { height: 200, width: 200 } }
          this.pixelmap = image.createPixelMapSync(color, opts);
        }
        this.fun(this.pixelmap);
      })
    }
  }
}

```

