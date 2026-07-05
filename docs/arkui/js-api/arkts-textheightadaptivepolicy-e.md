# TextHeightAdaptivePolicy

```TypeScript
declare enum TextHeightAdaptivePolicy
```

Enum of text height adaptation

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## MAX_LINES_FIRST

```TypeScript
MAX_LINES_FIRST = 0
```

Priority is given to using the maxLines attribute to adapt the text height. If the layout size using the maxLines attribute exceeds the layout constraint, try reducing the font size to display more text.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## MIN_FONT_SIZE_FIRST

```TypeScript
MIN_FONT_SIZE_FIRST = 1
```

Priority is given to using the minFontSize attribute to adapt the text height. If the text can be layout in a single line using the minFontSize property, try increasing the font size and using the maximum possible font size.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## LAYOUT_CONSTRAINT_FIRST

```TypeScript
LAYOUT_CONSTRAINT_FIRST = 2
```

Priority is given to using the layout constraint to adapt the text height. If the layout size exceeds the layout constraint, try reducing the font size. If the layout size still exceeds the layout constraint after reducing the font size to minFontSize, remove the lines that exceed the layout constraint.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

