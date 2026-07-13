# RichEditorTextSpanOptions

Describes the options for adding a text span.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gesture

```TypeScript
gesture?: RichEditorGesture
```

Behavior-triggered callback. If this parameter is left empty, only the default system behavior is supported.

**Type:** RichEditorGesture

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: number
```

Position of the text span to be added. If this parameter is omitted, the paragraph is added to the end of all
content.

If the value specified is less than 0, the paragraph is placed at the beginning of all content. If the value is
greater than the length of all content, the paragraph is placed at the end of all content.

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## paragraphStyle

```TypeScript
paragraphStyle?: RichEditorParagraphStyle
```

Paragraph style.

**Type:** RichEditorParagraphStyle

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## style

```TypeScript
style?: RichEditorTextStyle
```

Style of the text span to be added. If this parameter is left empty, the default text style will be used.

**Type:** RichEditorTextStyle

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## urlStyle

```TypeScript
urlStyle?: RichEditorUrlStyle
```

URL information.

Default value: **undefined**

**Type:** RichEditorUrlStyle

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

