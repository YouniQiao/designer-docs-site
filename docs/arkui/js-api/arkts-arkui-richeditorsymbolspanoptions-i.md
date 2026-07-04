# RichEditorSymbolSpanOptions

Sets the offset and style of the **SymbolSpan** component.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: number
```

Position of the symbol span to be added. If this parameter is omitted, the span is added to the end of all content. If the value is less than 0, the span is added to the beginning of all content. If the value is greater than the length of all content, the span is added to the end of all content.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: RichEditorSymbolSpanStyle
```

Style of the symbol span. If this parameter is left empty, the default style will be used.

**Type:** RichEditorSymbolSpanStyle

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

