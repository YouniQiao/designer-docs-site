# LayoutManager

Implements a layout manager object.

> **NOTE**  
>  
> After the text content is changed, you must wait for the layout to be completed before you can obtain the most up-  
> to-date layout information.

**Since:** 12

<!--Device-unnamed-declare interface LayoutManager--><!--Device-unnamed-declare interface LayoutManager-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getcharacterpositionatcoordinate"></a>
## getCharacterPositionAtCoordinate

```TypeScript
getCharacterPositionAtCoordinate(x: number, y: number): PositionWithAffinity | undefined
```

Obtains the position of the character nearest to the specified coordinate.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-LayoutManager-getCharacterPositionAtCoordinate(x: number, y: number): PositionWithAffinity | undefined--><!--Device-LayoutManager-getCharacterPositionAtCoordinate(x: number, y: number): PositionWithAffinity | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate relative to the component.<br>Unit: [px](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |
| y | number | Yes | Y coordinate relative to the component.<br>Unit: [px](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

**Return value:**

| Type | Description |
| --- | --- |
| [PositionWithAffinity](arkts-arkui-positionwithaffinity-i.md) | Character position. Returns **undefined** when [LayoutManager](arkts-arkui-layoutmanager-i.md) is not bound to a component. |

<a id="getcharacterrangeforglyphrange"></a>
## getCharacterRangeForGlyphRange

```TypeScript
getCharacterRangeForGlyphRange(glyphRange: TextRange): Array<TextRange> | undefined
```

Obtains the character range and the actual glyph range based on the specified glyph range. If a text contains two Chinese characters and five letters, the glyph index range of the text is [0, 7]. A Chinese character occupies three characters, so the corresponding character index range is [0, 11]. If the specified index range is [0, 11],but there are only seven glyphs, the actual glyph index range is [0, 7].

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-LayoutManager-getCharacterRangeForGlyphRange(glyphRange: TextRange): Array<TextRange> | undefined--><!--Device-LayoutManager-getCharacterRangeForGlyphRange(glyphRange: TextRange): Array<TextRange> | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| glyphRange | [TextRange](arkts-arkui-textrange-i.md) | Yes | Glyph range of the text. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextRange&gt; | Contains two elements: the first is the character range, and the second is the actual glyph range. When the returned range is invalid, the element in the range is **-1**. Returns **undefined** when [LayoutManager](arkts-arkui-layoutmanager-i.md) is not bound to a component. |

<a id="getglyphpositionatcoordinate"></a>
## getGlyphPositionAtCoordinate

```TypeScript
getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity
```

Obtains the position of a glyph close to a given coordinate.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-LayoutManager-getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity--><!--Device-LayoutManager-getGlyphPositionAtCoordinate(x: number, y: number): PositionWithAffinity-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | X coordinate relative to the component.<br>Unit: [px](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |
| y | number | Yes | Y coordinate relative to the component.<br>Unit: [px](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

**Return value:**

| Type | Description |
| --- | --- |
| [PositionWithAffinity](arkts-arkui-positionwithaffinity-i.md) | Glyph position. |

<a id="getglyphrangeforcharacterrange"></a>
## getGlyphRangeForCharacterRange

```TypeScript
getGlyphRangeForCharacterRange(charRange: TextRange): Array<TextRange> | undefined
```

Obtains the glyph range and the actual character range based on the specified character range. If the first glyph is a Chinese character, the glyph index range of the character is [0, 1]. A Chinese character occupies three characters, so the corresponding character index range is [0, 3]. If the specified character index range is [0, 1],one third of a Chinese character cannot be parsed, so the actual character index range is [0, 3].

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-LayoutManager-getGlyphRangeForCharacterRange(charRange: TextRange): Array<TextRange> | undefined--><!--Device-LayoutManager-getGlyphRangeForCharacterRange(charRange: TextRange): Array<TextRange> | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| charRange | [TextRange](arkts-arkui-textrange-i.md) | Yes | Character range of the text. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextRange&gt; | Contains two elements: the first is the glyph range, and the second is the actual character range. When the returned range is invalid, the element in the range is **-1**. Returns **undefined** when [LayoutManager](arkts-arkui-layoutmanager-i.md) is not bound to a component. |

<a id="getlinecount"></a>
## getLineCount

```TypeScript
getLineCount(): number
```

Obtains the total number of lines in the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-LayoutManager-getLineCount(): number--><!--Device-LayoutManager-getLineCount(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Total number of lines in the component. |

<a id="getlinemetrics"></a>
## getLineMetrics

```TypeScript
getLineMetrics(lineNumber: number): LineMetrics
```

Obtains the information about the specified line, including line metrics, text style information, and font properties.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-LayoutManager-getLineMetrics(lineNumber: number): LineMetrics--><!--Device-LayoutManager-getLineMetrics(lineNumber: number): LineMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lineNumber | number | Yes | Line number, which is zero-based. |

**Return value:**

| Type | Description |
| --- | --- |
| [LineMetrics](arkts-arkui-linemetrics-t.md) | Information about the specified line, including line metrics, text style information, and font properties.<br>Returns an invalid value if the line number is less than 0 or exceeds the actual number of lines. |

<a id="getrectsforrange"></a>
## getRectsForRange

```TypeScript
getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>
```

Obtains the drawing area information of the characters or placeholders within any range of the text, based on the specified rectangle width and height styles.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-LayoutManager-getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>--><!--Device-LayoutManager-getRectsForRange(range: TextRange, widthStyle: RectWidthStyle, heightStyle: RectHeightStyle): Array<TextBox>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | [TextRange](arkts-arkui-textrange-i.md) | Yes | Text range for which the drawing area is to be obtained. |
| widthStyle | [RectWidthStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-rectwidthstyle-e.md) | Yes | Width style of the rectangle. |
| heightStyle | [RectHeightStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-rectheightstyle-e.md) | Yes | Height style of the rectangle. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;TextBox&gt; | Array of drawing rectangles. |

