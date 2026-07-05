# EllipsisMode

```TypeScript
enum EllipsisMode
```

省略号类型枚举。 EllipsisMode.START和EllipsisMode.MIDDLE仅在单行超长文本生效。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## START

```TypeScript
START = 0
```

开头省略号，该枚举值只在[ParagraphStyle]text.ParagraphStyle中设置maxLines为1时生效。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## MIDDLE

```TypeScript
MIDDLE = 1
```

中间省略号，该枚举值只在[ParagraphStyle]text.ParagraphStyle中设置maxLines为1时生效。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## END

```TypeScript
END = 2
```

末尾省略号，该枚举值在[ParagraphStyle]text.ParagraphStyle中maxLines设置为任何值时均有效。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## MULTILINE_START

```TypeScript
MULTILINE_START = 3
```

开头省略号，该枚举值在[ParagraphStyle]text.ParagraphStyle中maxLines设置为任何值时均有效。

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## MULTILINE_MIDDLE

```TypeScript
MULTILINE_MIDDLE = 4
```

中间省略号，该枚举值在[ParagraphStyle]text.ParagraphStyle中maxLines设置为任何值时均有效。

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

