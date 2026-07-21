# TextInputController

The controller for the **TextInput** component inherits from [TextContentControllerBase](arkts-arkui-textcontentcontrollerbase-c.md). The APIs involved are as follows:<!--Del--> system API [getText](arkts-arkui-textcontentcontrollerbase-c-sys.md#gettext-1) and other APIs like<!--DelEnd-->[getTextContentRect](arkts-arkui-textcontentcontrollerbase-c.md#gettextcontentrect-1),[getTextContentLineCount](arkts-arkui-textcontentcontrollerbase-c.md#gettextcontentlinecount-1),[getCaretOffset](arkts-arkui-textcontentcontrollerbase-c.md#getcaretoffset-1), [addText](arkts-arkui-textcontentcontrollerbase-c.md#addtext-1),[deleteText](arkts-arkui-textcontentcontrollerbase-c.md#deletetext-1),[getSelection](arkts-arkui-textcontentcontrollerbase-c.md#getselection-1),[clearPreviewText](arkts-arkui-textcontentcontrollerbase-c.md#clearpreviewtext-1),[setStyledPlaceholder](arkts-arkui-textcontentcontrollerbase-c.md#setstyledplaceholder-1), and [deleteBackward](arkts-arkui-textcontentcontrollerbase-c.md#deletebackward-1).

**Inheritance/Implementation:** TextInputController extends [TextContentControllerBase](arkts-arkui-textcontentcontrollerbase-c.md)

**Since:** 8

<!--Device-unnamed-declare class TextInputController extends TextContentControllerBase--><!--Device-unnamed-declare class TextInputController extends TextContentControllerBase-End-->

**System capability:** 
- API version 10 and later: SystemCapability.ArkUI.ArkUI.Full

<a id="caretposition"></a>
## caretPosition

```TypeScript
caretPosition(value: number): void
```

Sets the position of the caret. If the value is less than 0, the value **0** is used. If the value exceeds the text length, the caret is placed at the end of the text.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputController-caretPosition(value: number): void--><!--Device-TextInputController-caretPosition(value: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Length from the start of the string to the position where the caret is located. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a **TextInputController** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputController-constructor()--><!--Device-TextInputController-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="settextselection"></a>
## setTextSelection

```TypeScript
setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
```

Sets the text selection area, which will be highlighted.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputController-setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void--><!--Device-TextInputController-setTextSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | Start position of the text selection range. The start position of text in the text box is 0. |
| selectionEnd | number | Yes | End position of the text selection range. If **selectionEnd** is less than 0, it is handled as **0**. If **selectionEnd** exceeds the text length, it is clamped to the text length. |
| options | [SelectionOptions](arkts-arkui-selectionoptions-i.md) | No | Configuration options for text selection.<br>Default value:**MenuPolicy.DEFAULT**<br>This parameter can be used in atomic services since API version 12.<br>**Since:** 12 |

<a id="stopediting"></a>
## stopEditing

```TypeScript
stopEditing(): void
```

Exits the editing state.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputController-stopEditing(): void--><!--Device-TextInputController-stopEditing(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

