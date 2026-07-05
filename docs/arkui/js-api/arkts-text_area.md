# text_area

定义多行文本输入组件实例。

## text_area

```TypeScript
text_area(value?: TextAreaOptions)
```

定义TextArea组件构造函数。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | TextAreaOptions | No | TextArea组件参数。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [TextAreaAttribute](arkts-textareaattribute-c.md) | 除支持[通用属性]{@link common}，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |
| [TextAreaController](arkts-textareacontroller-c.md) | TextArea组件的控制器继承自[TextContentControllerBase]{@link TextContentControllerBase}，涉及的接口有 [getTextContentRect]{@link TextContentControllerBase#getTextContentRect}、 [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount}、 [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}、[addText]{@link TextContentControllerBase#addText}、 [deleteText]{@link TextContentControllerBase#deleteText}、[getSelection]{@link TextContentControllerBase#getSelection} 、[clearPreviewText]{@link TextContentControllerBase#clearPreviewText}、 [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder}、 [deleteBackward]{@link TextContentControllerBase#deleteBackward}<!--Del-->以及系统接口 [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->。 |

### Interfaces

| Name | Description |
| --- | --- |
| [TextAreaInterface](arkts-textareainterface-i.md) | 多行文本输入框组件，当输入的文本内容超过组件宽度时会自动换行显示。 高度未设置时，组件无默认高度，自适应内容高度。宽度未设置时，默认撑满最大宽度。 |
| [TextAreaOptions](arkts-textareaoptions-i.md) | TextArea初始化参数。 |

### Enums

| Name | Description |
| --- | --- |
| [TextAreaType](arkts-textareatype-e.md) | 多行文本输入框类型。 |

### Types

| Name | Description |
| --- | --- |
| [TextAreaSubmitCallback](arkts-textareasubmitcallback-t.md) | 软键盘按下回车键时的回调事件。 |

### Constants

| Name | Description |
| --- | --- |
| [TextArea](arkts-text-area-con.md#TextArea) | 多行文本输入框组件，当输入的文本内容超过组件宽度时会自动换行显示。 高度未设置时，组件无默认高度，自适应内容高度。宽度未设置时，默认撑满最大宽度。 > **说明：** ###### 子组件 无 |
| [TextAreaInstance](arkts-text-area-con.md#TextAreaInstance) | 定义多行文本输入组件实例。 |

