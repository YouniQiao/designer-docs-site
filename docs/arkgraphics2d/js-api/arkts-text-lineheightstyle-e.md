# LineHeightStyle

```TypeScript
enum LineHeightStyle
```

行高缩放基数枚举。

**Since:** 21

**System capability:** SystemCapability.Graphics.Drawing

## FONT_SIZE

```TypeScript
FONT_SIZE = 0
```

以字号大小作为缩放基数。最终行高为[TextStyle]text.TextStyle.fontSize * [TextStyle]text.TextStyle.heightScale。

**Since:** 21

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## FONT_HEIGHT

```TypeScript
FONT_HEIGHT = 1
```

以字形高度作为缩放基数。最终行高为塑形后字形高度 * [TextStyle]text.TextStyle.heightScale。

**Since:** 21

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

