# RichEditorBaseController

Represents the base class of the **RichEditor** component controller.

**Inheritance/Implementation:** RichEditorBaseController implements [TextEditControllerEx](arkts-arkui-texteditcontrollerex-i.md)

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeSelectionMenu

```TypeScript
closeSelectionMenu(): void
```

Closes the custom or default context menu on selection.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## deleteBackward

```TypeScript
deleteBackward(): void
```

The capability of deleting characters is provided. If no content is selected, the character before the caret is deleted. If some content is selected, the selected content is deleted. This API cannot be used in the pre-screen display scenario.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getCaretOffset

```TypeScript
getCaretOffset(): number
```

Obtains the current caret position. If the caret position cannot be obtained (for example, the controller is not bound to a component), -1 is returned.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Position of the caret. |

## getCaretRect

```TypeScript
getCaretRect(): RectResult | undefined
```

Obtains the relative position of the caret in the **RichEditor** component. If the caret is not blinking, the API returns **undefined**.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RectResult | Relative position of the caret in the **RichEditor** component. |

## getLayoutManager

```TypeScript
getLayoutManager(): LayoutManager
```

Obtains a **LayoutManager** object.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| LayoutManager | **LayoutManager** object.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## getPreviewText

```TypeScript
getPreviewText(): PreviewText
```

Obtains the preview text.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| PreviewText | Preview text.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## getTypingStyle

```TypeScript
getTypingStyle(): RichEditorTextStyle
```

Obtains the preset text style of a user.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RichEditorTextStyle | Preset typing style.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined**is returned. |

## isEditing

```TypeScript
isEditing(): boolean
```

Obtains the editing state of this **RichEditor** component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Editing state. The value **true** indicates the editing state, and **false** indicates the non-editing state. |

## scrollToVisible

```TypeScript
scrollToVisible(range?: TextRange): void
```

Scroll the input field component to make the specified content visible.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | TextRange | No | The visible range.If the parameter is invalid, this method will have no effect. |

## setCaretOffset

```TypeScript
setCaretOffset(offset: number): boolean
```

Sets the cursor offset.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | Offset of the caret. If it exceeds the range of all content, the setting will fail. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the caret offset is set successfully.<br>**true** if the caret offset is set successfully; **false** otherwise. |

## setSelection

```TypeScript
setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
```

Sets the range of content selection. The selected content is highlighted. If both selectionStart and selectionEnd are set to -1, all the content is selected. If both selectionStart and selectionEnd are set to 0, the selected content can be cleared. If this API is called when the text box is not focused, the selected effect is not displayed. Since API version 12, on 2-in-1 devices, regardless of the value of **options**, calling the **setSelection** API will not display the menu. In addition, if there is already a menu present within the component, calling the **setSelection** API will close the menu. On non-2-in-1 devices, when **options** is set to **MenuPolicy.DEFAULT**, the following rules apply: 1. If the component has a selection handle menu, calling the API will not close the menu, and the menu position will be adjusted. 2. If the component has a menu without a selection handle, calling the API will not close the menu, and the menu position will remain unchanged. 3. If there is no menu within the component, calling the API will not display the menu.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | Start position of the selection. |
| selectionEnd | number | Yes | End position of the selection. |
| options | SelectionOptions | No | Configuration of options.<br>**Since:** 12 |

## setStyledPlaceholder

```TypeScript
setStyledPlaceholder(styledString: StyledString): void
```

Set the styledString placeholder.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | The styledString for placeholder.If the parameter is invalid, this method will have no effect. |

## setTypingParagraphStyle

```TypeScript
setTypingParagraphStyle(style: RichEditorParagraphStyle): void
```

Sets the preset paragraph style. The input text takes effect only when the component content is empty or a line break is added at the end of the component.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | RichEditorParagraphStyle | Yes | Preset paragraph style. |

## setTypingStyle

```TypeScript
setTypingStyle(value: RichEditorTextStyle): void
```

Sets the preset typing style.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorTextStyle | Yes | Preset typing style. |

## stopEditing

```TypeScript
stopEditing(): void
```

Exits the editing state.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

