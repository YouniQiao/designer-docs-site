# TextAreaController

The controller for the **TextArea** component inherits from
[TextContentControllerBase](arkts-arkui-textcontentcontrollerbase-c.md). The APIs involved are as follows:<!--Del--> system API
[getText](arkts-arkui-textcontentcontrollerbase-c-sys.md#gettext-1) and other APIs like<!--DelEnd-->
[getTextContentRect](arkts-arkui-textcontentcontrollerbase-c.md#gettextcontentrect-1),
[getTextContentLineCount](arkts-arkui-textcontentcontrollerbase-c.md#gettextcontentlinecount-1),
[getCaretOffset](arkts-arkui-textcontentcontrollerbase-c.md#getcaretoffset-1), [addText](arkts-arkui-textcontentcontrollerbase-c.md#addtext-1),
[deleteText](arkts-arkui-textcontentcontrollerbase-c.md#deletetext-1),
[getSelection](arkts-arkui-textcontentcontrollerbase-c.md#getselection-1),
[clearPreviewText](arkts-arkui-textcontentcontrollerbase-c.md#clearpreviewtext-1),
[setStyledPlaceholder](arkts-arkui-textcontentcontrollerbase-c.md#setstyledplaceholder-1), and
[deleteBackward](arkts-arkui-textcontentcontrollerbase-c.md#deletebackward-1).

**Inheritance/Implementation:** TextAreaController extends [TextContentControllerBase](arkts-arkui-textcontentcontrollerbase-c.md)

**Since:** 8

**System capability:** 
- API version 10 and later: SystemCapability.ArkUI.ArkUI.Full

## caretPosition

```TypeScript
caretPosition(value: number): void
```

Sets the position of the caret.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Length from the start of the string to the position where the caret is located.<br>Valuesless than 0 are treated as **0**. Values greater than the string length are treated as the string length. |

## constructor

```TypeScript
constructor()
```

A constructor used to create a **TextAreaController** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## setTextSelection

```TypeScript
setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
```

Sets the text selection range and highlights the selected text when the component is focused. This API works only
when the value of **selectionStart** is less than that of **selectionEnd**.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | Start position of the text selection range. The start position of text in thetext box is 0.<br>Values less than 0 are treated as **0**. Values greater than the maximum text length aretreated as the maximum text length.<br> |
| selectionEnd | number | Yes | End position of the text selection range.<br>Values less than 0 are treated as**0**. Values greater than the maximum text length are treated as the maximum text length.<br> |
| options | SelectionOptions | No | Configuration options for text selection.<br>Default value:**MenuPolicy.DEFAULT**<br><br>**Since:** 12 |

## stopEditing

```TypeScript
stopEditing(): void
```

Exits the editing state.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

