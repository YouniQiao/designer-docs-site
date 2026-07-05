# setTextUndefinedGlyphDisplay

## setTextUndefinedGlyphDisplay

```TypeScript
function setTextUndefinedGlyphDisplay(noGlyphShow: TextUndefinedGlyphDisplay): void
```

设置字符映射到.notdef（未定义）字形时要使用的字形类型。 影响此调用后呈现的所有文本。 此配置会影响显示字体中未定义字符的方式： - 默认行为遵循字体的内部.notdef字形设计。 - 开启后将强制使缺失字形的字符以豆腐块形式显示。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| noGlyphShow | TextUndefinedGlyphDisplay | Yes | 无法塑形字符的显示方式。 |

**Example**

```TypeScript
text.setTextUndefinedGlyphDisplay(text.TextUndefinedGlyphDisplay.USE_TOFU)

```

