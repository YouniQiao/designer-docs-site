# RichEditorImageSpanOptions

设置图片的偏移位置和图片样式信息。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: number
```

添加图片的位置。省略时，添加到所有内容的末尾。 当值小于0时，设置在所有内容最前面；当值大于所有内容长度时，设置在所有内容最后面。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onHover

```TypeScript
onHover?: OnHoverCallback
```

鼠标悬停触发回调。省略时，不执行相关行为。

**Type:** OnHoverCallback

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## imageStyle

```TypeScript
imageStyle?: RichEditorImageSpanStyle
```

图片样式。

**Type:** RichEditorImageSpanStyle

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gesture

```TypeScript
gesture?: RichEditorGesture
```

行为触发回调。省略时，仅使用系统默认行为。

**Type:** RichEditorGesture

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

