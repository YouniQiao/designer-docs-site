# TextContentControllerBase

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## addText

```TypeScript
addText(text: string, textOperationOptions?: TextContentControllerOptions): number
```

Add a text.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | text value. |
| textOperationOptions | TextContentControllerOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | caret index |

## clearPreviewText

```TypeScript
clearPreviewText(): void
```

Clear the content of preview.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## deleteBackward

```TypeScript
deleteBackward(): void
```

删除输入框文本末尾字符。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## deleteText

```TypeScript
deleteText(range?: TextRange): void
```

Delete text in TextRange.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | TextRange | No |  |

## getCaretOffset

```TypeScript
getCaretOffset() : CaretOffset
```

Get the index and relative position of the CaretOffset. <p><strong>NOTE</strong>: <br>If this API is called when the caret position is updated in the current frame, it will not take effect. <br>For the Search component, the returned position information is the offset of the first character relative to the search icon in the component. <br>If no text is entered in the Search component, the return value contains the position information relative to the component. <br>The location information in the return value is the location of the caret relative to the editable component. </p>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| CaretOffset | index and relative position of the CaretOffset. |

## getSelection

```TypeScript
getSelection(): TextRange
```

Gets the selected range of text content.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| TextRange | range for selecting. |

## getText

```TypeScript
getText(range?: TextRange): string
```

Gets the text content of the selected range.

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | TextRange | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | text content of the selected range. |

## getTextContentLineCount

```TypeScript
getTextContentLineCount() : number
```

Get the lines number of the text content. The getTextContentLineCount type is used to obtain the number of lines of the edited text.

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Text content line count |

## getTextContentRect

```TypeScript
getTextContentRect() : RectResult
```

Get the start and end positions of the text content. <p><strong>NOTE</strong>: <br>If no text is entered, the return value contains the position information, but the size is 0. <br>The position information is the offset of the first character relative to the editable area. <br>For the Search component, the returned position information is the offset of the first character relative to the search icon in the component. <br>If there is input, the width in the return value is the fixed width of the editable area. </p>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RectResult | Text content rect.The unit of the return value is pixel. |

## scrollToVisible

```TypeScript
scrollToVisible(range?: TextRange): void
```

将输入框文本滚动到可见区。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | TextRange | No |  |

## setStyledPlaceholder

```TypeScript
setStyledPlaceholder(styledString: StyledString): void
```

设置提示文本的样式。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | 设置提示文本样式的属性字符串  若传入的入参无效，则本接口不生效 |

