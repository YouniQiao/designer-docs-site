# setTextUndefinedGlyphDisplay

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

**ArkTS mode:** ArkTS-Dyn since version 20; ArkTS-Sta since version 23.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-text-function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void--><!--Device-text-function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| noGlyphShow | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Display mode of characters that cannot be shaped. |

**Example**

```TypeScript
text.setTextUndefinedGlyphDisplay(text.TextUndefinedGlyphDisplay.USE_TOFU)
```

