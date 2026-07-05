# RichEditorSymbolSpanOptions

设置SymbolSpan组件的偏移位置和样式。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: number
```

添加组件的位置。省略时，添加到所有内容的最后。 如果值小于0，添加到所有内容的最前面；如果值大于所有内容的长度，添加到所有内容的最后面。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: RichEditorSymbolSpanStyle
```

组件样式信息。省略时，使用系统默认样式信息。

**Type:** RichEditorSymbolSpanStyle

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

