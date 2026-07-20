# setTextUndefinedGlyphDisplay

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## setTextUndefinedGlyphDisplay

```TypeScript
function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void
```

Sets the glyph type to be used when characters are mapped to the .notdef (undefined) glyph.

This setting affects all text rendered subsequently.

This setting affects how to display undefined characters in the font:

- The default behavior follows the .notdef glyph design of the font.  
- After this feature is enabled, characters without glyphs are displayed as a tofu block of text.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-text-function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void--><!--Device-text-function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| noGlyphShow | [TextUndefinedGlyphDisplay](arkts-arkgraphics2d-text-textundefinedglyphdisplay-e.md) | Yes | Display mode of characters that cannot be shaped. |

**Example**

```TypeScript
text.setTextUndefinedGlyphDisplay(text.TextUndefinedGlyphDisplay.USE_TOFU)

```

