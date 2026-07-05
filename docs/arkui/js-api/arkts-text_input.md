# text_input

定义文本输入组件实例。

## text_input

```TypeScript
text_input(value?: TextInputOptions)
```

定义单行文本输入组件构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TextInputOptions | No | TextInput组件参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [TextInputAttribute](arkts-textinputattribute-c.md) | 除支持[通用属性]{@link common}，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |
| [TextInputController](arkts-textinputcontroller-c.md) | TextInput组件的控制器继承自[TextContentControllerBase]{@link TextContentControllerBase}，涉及的接口有 [getTextContentRect]{@link TextContentControllerBase#getTextContentRect}、 [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount}、 [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}、[addText]{@link TextContentControllerBase#addText}、 [deleteText]{@link TextContentControllerBase#deleteText}、[getSelection]{@link TextContentControllerBase#getSelection} 、[clearPreviewText]{@link TextContentControllerBase#clearPreviewText}、 [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder}、 [deleteBackward]{@link TextContentControllerBase#deleteBackward}<!--Del-->以及系统接口 [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->。 |

### Interfaces

| Name | Description |
| --- | --- |
| [PasswordIcon](arkts-passwordicon-i.md) | PasswordIcon对象。 |
| [SubmitEvent](arkts-submitevent-i.md) | 定义用户提交事件。 |
| [TextInputInterface](arkts-textinputinterface-i.md) | 单行文本输入框组件。 > **说明：** > 该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor]{@link rich_editor}组件。 |
| [TextInputOptions](arkts-textinputoptions-i.md) | TextInput初始化参数。 |
| [UnderlineColor](arkts-underlinecolor-i.md) | 定义下划线颜色宽度属性。 |

### Enums

| Name | Description |
| --- | --- |
| [ContentType](arkts-contenttype-e.md) | 自动填充类型。 |
| [EnterKeyType](arkts-enterkeytype-e.md) | 输入法回车键类型。 |
| [InputType](arkts-inputtype-e.md) | 单行文本输入框类型。 |
| [TextInputStyle](arkts-textinputstyle-e.md) | 文本输入样式。 |

### Types

| Name | Description |
| --- | --- |
| [OnContentScrollCallback](arkts-oncontentscrollcallback-t.md) | 文本内容滚动回调。 |
| [OnPasteCallback](arkts-onpastecallback-t.md) | 粘贴回调。 |
| [OnSubmitCallback](arkts-onsubmitcallback-t.md) | 提交回调。 |
| [OnTextSelectionChangeCallback](arkts-ontextselectionchangecallback-t.md) | 文本选择变化回调或光标位置变化回调。 |

### Constants

| Name | Description |
| --- | --- |
| [TextInput](arkts-text-input-con.md#TextInput) | 单行文本输入框组件。 > **说明：** > 该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor]{@link rich_editor}组件。 ###### 子组件 无 |
| [TextInputInstance](arkts-text-input-con.md#TextInputInstance) | 定义文本输入组件实例。 |

