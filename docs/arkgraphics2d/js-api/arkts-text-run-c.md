# Run

文本排版单元。 下列API示例中都需先使用[TextLine]text.TextLine类的[getGlyphRuns()]text.TextLine.getGlyphRuns接口获取Run对象实例，再通过此实例调 用对应方法。

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

获取该排版单元指定范围内每个字形的字形宽度数组。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | 要获取的字形位置范围。range.start表示范围开始的位置，range.end表示范围的长度。如果长度是0表示从range.start开始获取到渲染块结束。当  range.end、range.start为负数，或者传入null、undefined时，该方法将返回undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point> | Returns the glyph width array of each glyph in the run unit relative to the  horizontal direction. In [common2D.Point](arkts-common2d-point-i.md#Point), the x value  represents the glyph width of each glyph relative to the horizontal direction, in physical pixels (px). The y  value is a reserved field and returns 0 by default. |

**Example**

```TypeScript
let advancesRange = runs[0].getAdvances({start:1, end:2}); // Obtain the widths of glyphs in the range starting from position 1, with a length of 2.
advancesRange = runs[0].getAdvances({start:-1, end:2}); // -1 is an invalid value, and undefined is returned.
advancesRange = runs[0].getAdvances({start:0, end:-10}); // -10 is an invalid value, and undefined is returned.
let advancesNull = runs[0].getAdvances(null); // null is an invalid value, and undefined is returned.

```

## getAdvances

```TypeScript
getAdvances(range: Range): Array<common2D.Point> | undefined
```

获取指定范围内的字形宽度数组

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | range获取当前run的字形范围，其中start表示起始位置，end表示范围长度，如果长度为0，则获取从start到末尾的字形 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point> | Array holding the advance width and height of each glyph. |

## getFont

```TypeScript
getFont(): drawing.Font
```

获取排版单元的字体属性对象。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| drawing.Font | Font object of this run. |

**Example**

```TypeScript
let font = runs[0].getFont();

```

## getGlyphCount

```TypeScript
getGlyphCount(): int
```

获取该排版单元中字形的数量。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| int | 该排版单元中字形数量，整数。 |

**Example**

```TypeScript
let glyphs = runs[0].getGlyphCount();

```

## getGlyphs

```TypeScript
getGlyphs(): Array<int>
```

获取该排版单元中每个字符的字形序号。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | 该排版单元中每个字符对应的字形序号。 |

**Example**

```TypeScript
let glyph = runs[0].getGlyphs();

```

## getGlyphs

```TypeScript
getGlyphs(range: Range): Array<int>
```

获取该排版单元指定范围内每个字符的字形序号。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | 要获取的字形序号范围，range.start表示范围开始的位置，range.end表示范围的长度，当range.end为0时表示从range.start开始获取到渲染块结束。当  range.end、range.start为负数，或者传入null、undefined时，该方法将返回undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | 该排版单元中每个字符对应的字形序号。 |

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

## getGlyphs

```TypeScript
getGlyphs(range: Range): Array<int> | undefined
```

获取范围内每个字符的字形标识符

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | range获取当前run的字形范围，其中start表示起始位置，end表示范围长度，如果长度为0，则获取从start到末尾的字形 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | Glyph identifier or undefined. |

## getImageBounds

```TypeScript
getImageBounds(): common2D.Rect
```

获取该排版单元的图像边界，图像边界与排版字体、排版字号、字符本身都有关，相当于视觉边界，例如字符串为" a b "，'a'字符前面有1个空格，'b'字符后面有1个空格，用户在界面上只能看到"a b"，图像边界即为不包括带行首和 末尾空格的边界。 > **说明：** > > 示意图展示了字符串为" a b "的图像边界。 > > ![zh-ch_image_ImageBounds.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_ImageBounds.png) > > 示意图展示了字符串为"j"或"E"的图像边界。 > > ! > [zh-ch_image_ImageBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_ImageBounds_Character.png)

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

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

获取该排版单元中每个字形的索引偏移量。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point> | Array holding the offset of each glyph in the run relative to its index. |

**Example**

```TypeScript
let offsets = runs[0].getOffsets();

```

## getPositions

```TypeScript
getPositions(): Array<common2D.Point>
```

获取该排版单元中每个字形相对于每行的字形位置。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point> | Array holding the position of each glyph relative to the respective line in  the run. |

**Example**

```TypeScript
let positions = runs[0].getPositions();

```

## getPositions

```TypeScript
getPositions(range: Range): Array<common2D.Point>
```

获取该排版单元指定范围内每个字形相对于每行的字形位置数组。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | 要获取的字形位置范围，range.start表示范围开始的位置，range.end表示范围的长度，如果长度是0表示从范围range.start开始获取到渲染块结束。当  range.end、range.start为负数，或者传入null、undefined时，该方法将返回undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point> | Array holding the position of each glyph relative to the respective line in  the run. |

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

## getPositions

```TypeScript
getPositions(range: Range): Array<common2D.Point> | undefined
```

获取指定范围内字体位置信息

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | Yes | range获取当前run的字形范围，其中start表示起始位置，end表示范围长度，如果长度为0，则获取从start到末尾的字形 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common2D.Point> | The position of the font in the layout or undefined. |

## getStringIndices

```TypeScript
getStringIndices(range?: Range): Array<int>
```

获取排版单元指定范围内字形的字符索引，该索引是相对于整个段落的偏移。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | 返回每个字符的索引。 |

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

## getStringIndices

```TypeScript
getStringIndices(range?: Range): Array<int> | undefined
```

获取run对象中字形索引的范围，索引为相对于段落起始的偏移

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | Range | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;int> | The glyph indices or undefined. |

## getStringRange

```TypeScript
getStringRange(): Range
```

获取排版单元生成字形的字符范围。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| Range | 排版单元生成字形的字符范围，Range类型中的start表示字符范围的开始位置，该位置是相对于整个段落的索引，Range类型中的end表示字符范围的长度。 |

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

获取该排版单元的文本方向。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TextDirection | 返回该排版单元的文本方向。 |

**Example**

```TypeScript
let textDirection = runs[0].getTextDirection();

```

## getTextStyle

```TypeScript
getTextStyle(): TextStyle
```

获取当前绘制单元的样式属性信息

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TextStyle | 当前绘制单元的样式属性对象 |

## getTypographicBounds

```TypeScript
getTypographicBounds(): TypographicBounds
```

获取该排版单元的排版边界，排版边界与排版字体、排版字号有关，与字符本身无关，例如字符串为" a b "，'a'字符前面有1个空格，'b'字符后面有1个空格，排版边界就包括行首和末尾空格的边界。 > **说明：** > > 示意图展示了字符串为" a b "的排版边界。 > > ! > [zh-ch_image_TypographicBounds.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds.png) > > 示意图展示了字符串为"j"或"E"的排版边界。 > > ! > [zh-ch_image_TypographicBounds_Character.png](docroot://reference/apis-arkgraphics2d/figures/zh-ch_image_TypographicBounds_Character.png)

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| TypographicBounds | 该排版单元的排版边界。 |

**Example**

```TypeScript
let typographicBounds = runs[0].getTypographicBounds();

```

## paint

```TypeScript
paint(canvas: drawing.Canvas, x: double, y: double): void
```

在画布上以(x, y)为左上角位置绘制排版单元。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| canvas | drawing.Canvas | Yes | 绘制的目标 canvas。 |
| x | double | Yes | 绘制的左上角位置的横坐标，浮点数，单位为物理像素px。 |
| y | double | Yes | 绘制的左上角位置的纵坐标，浮点数，单位为物理像素px。 |

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

