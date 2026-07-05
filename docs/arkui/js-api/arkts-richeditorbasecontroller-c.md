# RichEditorBaseController

RichEditor组件控制器基类。

**Inheritance:** RichEditorBaseControllerimplements: TextEditControllerEx.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## closeSelectionMenu

```TypeScript
closeSelectionMenu(): void
```

关闭自定义选择菜单或系统默认选择菜单。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## deleteBackward

```TypeScript
deleteBackward(): void
```

提供删除字符能力。没有内容被选中时，删除当前光标位置前的1个字符。有内容被选中时，删除选中内容。 该接口不支持预上屏场景使用。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getCaretOffset

```TypeScript
getCaretOffset(): number
```

返回当前光标所在位置。 当无法获取光标位置时（例如controller未与组件绑定时），该接口返回-1。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前光标所在位置。 |

## getCaretRect

```TypeScript
getCaretRect(): RectResult | undefined
```

返回当前光标与RichEditor组件的相对位置。如果光标不闪烁，返回undefined。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RectResult | 当前光标与RichEditor的相对位置。 |

## getLayoutManager

```TypeScript
getLayoutManager(): LayoutManager
```

获取布局管理器对象。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| LayoutManager | 布局管理器对象。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。 |

## getPreviewText

```TypeScript
getPreviewText(): PreviewText
```

获取预上屏信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| PreviewText | 预上屏信息。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。 |

## getTypingStyle

```TypeScript
getTypingStyle(): RichEditorTextStyle
```

获取用户预设的文本样式。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RichEditorTextStyle | 用户预设样式。  当controller未绑定组件或绑定controller的组件被释放时，返回undefined。 |

## isEditing

```TypeScript
isEditing(): boolean
```

获取当前富文本的编辑状态。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true为编辑态，false为非编辑态。 |

## scrollToVisible

```TypeScript
scrollToVisible(range?: TextRange): void
```

将指定范围的文本滚动到可视区内。

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| range | TextRange | No |  |

## setCaretOffset

```TypeScript
setCaretOffset(offset: number): boolean
```

设置光标位置。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | 光标偏移位置。超出所有内容范围时，设置失败。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 光标是否设置成功。 true表示光标位置设置成功，false表示未成功。 |

## setSelection

```TypeScript
setSelection(selectionStart: number, selectionEnd: number, options?: SelectionOptions): void
```

支持设置组件内的内容选中，选中部分背板高亮。 selectionStart和selectionEnd均为-1时表示全选，均为0时可以清空选中区。 未获焦时调用该接口不产生选中效果。 从API version 12开始，在2in1设备中，无论options取何值，调用setSelection接口都不会弹出菜单，此外，如果组件中已经存在菜单，调用setSelection接口会关闭菜单。 在非2in1设备中，options取值为MenuPolicy.DEFAULT时，遵循以下规则： 1. 组件内有手柄菜单时，接口调用后不关闭菜单，并且调整菜单位置。 2. 组件内有不带手柄的菜单时，接口调用后不关闭菜单，并且菜单位置不变。 3. 组件内无菜单时，接口调用后也无菜单显示。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | 选中开始位置。 |
| selectionEnd | number | Yes | 选中结束位置。 |
| options | SelectionOptions | No |  |

## setStyledPlaceholder

```TypeScript
setStyledPlaceholder(styledString: StyledString): void
```

设置无输入时的属性字符串样式的提示文本。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | 设置属性字符串样式的提示文本，其优先级高于[placeholder](arkts-richeditorattribute-c.md#placeholder)属性设  置的提示文本。 提示文本不支持触发属性字符串[GestureStyle](arkts-gesturestyle-c.md#GestureStyle)样式绑定的手势事件，以及  [UrlStyle](arkts-urlstyle-c.md#UrlStyle)样式的超链接跳转能力。 |

## setTypingParagraphStyle

```TypeScript
setTypingParagraphStyle(style: RichEditorParagraphStyle): void
```

设置用户预设的段落样式。仅在组件内容为空或组件末尾换行后，输入文本生效。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | RichEditorParagraphStyle | Yes | 预设段落样式。 |

## setTypingStyle

```TypeScript
setTypingStyle(value: RichEditorTextStyle): void
```

设置用户预设的文本样式。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | RichEditorTextStyle | Yes | 预设样式。 |

## stopEditing

```TypeScript
stopEditing(): void
```

退出编辑态。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

