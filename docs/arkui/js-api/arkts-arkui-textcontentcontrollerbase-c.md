# TextContentControllerBase

Represents the base controller for **TextInput**, **TextArea**, and **Search** components.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addText

```TypeScript
addText(text: string, textOperationOptions?: TextContentControllerOptions): number
```

Inserts text at a specified position in the editable content. If no position is specified, the text is appended to the end of the existing content. This API does not work when the text is being dragged. **addText** only affects the UI performance within the application and has no effect on the internal logic of the input method application. Therefore, avoid calling this API for the preview text.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Text to insert. |
| textOperationOptions | TextContentControllerOptions | No | Configuration option for inserting text. If thisparameter is not provided, the text is appended to the end. |

**Return value:**

| Type | Description |
| --- | --- |
| number | New cursor position after insertion. |

## clearPreviewText

```TypeScript
clearPreviewText(): void
```

Notifies the input method to clear the current preview text.

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 17.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## deleteBackward

```TypeScript
deleteBackward(): void
```

Deletes the character before the text cursor in the text box bound to the basic controller. If some text has been selected using the mouse or keyboard before this function is called, the selected text will be deleted. This API is not supported in preview display scenarios.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## deleteText

```TypeScript
deleteText(range?: TextRange): void
```

Deletes text within a specified range in the editable content. > **NOTE** > > - This API does not work when the text is being dragged. > > - **deleteText** only affects the UI performance within the application and has no effect on the internal logic > of the input method application. Therefore, avoid calling this API for the preview text.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | TextRange | No | Range of the text to be deleted, including the start and end positions.<br>If therange is not specified, the entire text is deleted. If the start position is not specified, deletion startsfrom index 0. If the end position is not specified, deletion ends at the end of the text. |

## getCaretOffset

```TypeScript
getCaretOffset() : CaretOffset
```

Obtains the position information of the caret. > **NOTE** > > - If this API is called when the caret position is updated in the current frame, it will not take effect. > > - For the **Search** component, the returned position information is the offset of the first character relative > to the search icon in the component. > > - If no text is entered in the **Search** component, the return value contains the position information relative > to the component. > > - The location information in the return value is the location of the caret relative to the editable component. > > - If the caret position cannot be obtained (for example, when the > [TextInputController](arkts-arkui-textinputcontroller-c.md#textinputcontroller) is not bound to the [TextInput](./text_input) component), > **null** is returned.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| CaretOffset | Position of the caret relative to the text box.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## getSelection

```TypeScript
getSelection(): TextRange
```

Obtains the current text selection range.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| TextRange | Current text selection range, or cursor position if no text is selected.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## getTextContentLineCount

```TypeScript
getTextContentLineCount() : number
```

Obtains the number of lines of the edited text.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of lines of the edited text.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## getTextContentRect

```TypeScript
getTextContentRect() : RectResult
```

Obtains the position of the edited text area relative to the component and its size. The unit of the return value is pixel.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RectResult | Position of the edited text area relative to the component and its size.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## scrollToVisible

```TypeScript
scrollToVisible(range?: TextRange): void
```

Passes the start and end indexes to the bound text box components (**TextInput**, **TextArea**, and **Search**), and scrolls the text within the range to the visible area.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | TextRange | No | Text range to be scrolled to the visible area, including the start and end positions.of the text.<br>The start position must be less than or equal to the end position. Otherwise, the API call isinvalid. If the start position is less than 0, it is treated as the value **0**. If the end position is greaterthan the length of the entire text, it is treated as the length of the entire text.<br>If no range is specified,the entire text is used by default. If the start position is not specified, the default start position is 0. If theend position is not specified, the default end position is the length of the entire text. |

## setStyledPlaceholder

```TypeScript
setStyledPlaceholder(styledString: StyledString): void
```

Binds or updates the styled placeholder string.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | Styled string for the placeholder. This takes precedence over the plain text.**placeholder** attribute.<br>The placeholder does not support gesture events or hyperlink navigation withinstyled strings. |

