# TextInputController

TextInput组件的控制器继承自[TextContentControllerBase]TextContentControllerBase，涉及的接口有 [getTextContentRect]TextContentControllerBase#getTextContentRect、 [getTextContentLineCount]TextContentControllerBase#getTextContentLineCount、 [getCaretOffset]TextContentControllerBase#getCaretOffset、[addText]TextContentControllerBase#addText、 [deleteText]TextContentControllerBase#deleteText、[getSelection]TextContentControllerBase#getSelection 、[clearPreviewText]TextContentControllerBase#clearPreviewText、 [setStyledPlaceholder]TextContentControllerBase#setStyledPlaceholder、 [deleteBackward]TextContentControllerBase#deleteBackward<!--Del-->以及系统接口 [getText]TextContentControllerBase#getText<!--DelEnd-->。

**Inheritance:** TextInputControllerextends: TextContentControllerBase.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## caretPosition

```TypeScript
caretPosition(value: number): void
```

设置输入光标的位置。当取值小于0时，取0，大于文本长度时，显示在文本末尾。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 从字符串开始到光标所在位置的字符长度。 |

## constructor

```TypeScript
constructor()
```

TextInputController的构造函数。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setTextSelection

```TypeScript
setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
```

设置文本选择区域并高亮显示。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | 文本选择区域起始位置，文本框中文字的起始位置为0。 |
| selectionEnd | number | Yes | 文本选择区域结束位置。当selectionEnd&lt;0时，按照0处理；当selectionEnd大于文本长度时，按照文本长度处理。 |
| options | SelectionOptions | No |  |

## stopEditing

```TypeScript
stopEditing(): void
```

退出编辑态。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

