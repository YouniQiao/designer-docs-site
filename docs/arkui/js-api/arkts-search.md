# search

定义搜索组件实例。

## search

```TypeScript
search(options?: SearchOptions)
```

定义搜索组件构造函数。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SearchOptions | No | 搜索框组件初始化选项 [since 8 - 17] |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [SearchAttribute](arkts-searchattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |
| [SearchController](arkts-searchcontroller-c.md) | Search组件的控制器继承自[TextContentControllerBase]{@link TextContentControllerBase}，涉及的接口有 [getTextContentRect]{@link TextContentControllerBase#getTextContentRect}、 [getTextContentLineCount]{@link TextContentControllerBase#getTextContentLineCount}、 [getCaretOffset]{@link TextContentControllerBase#getCaretOffset}、[addText]{@link TextContentControllerBase#addText}、 [deleteText]{@link TextContentControllerBase#deleteText}、[getSelection]{@link TextContentControllerBase#getSelection} 、[clearPreviewText]{@link TextContentControllerBase#clearPreviewText}、 [setStyledPlaceholder]{@link TextContentControllerBase#setStyledPlaceholder}、 [deleteBackward]{@link TextContentControllerBase#deleteBackward}<!--Del-->以及系统接口 [getText]{@link TextContentControllerBase#getText}<!--DelEnd-->。 |

### Interfaces

| Name | Description |
| --- | --- |
| [CancelButtonOptions](arkts-cancelbuttonoptions-i.md) | 定义清除按钮选项。 |
| [CancelButtonSymbolOptions](arkts-cancelbuttonsymboloptions-i.md) | 定义清除按钮Symbol图标选项。 |
| [IconOptions](arkts-iconoptions-i.md) | 定义图标选项。 |
| [SearchButtonOptions](arkts-searchbuttonoptions-i.md) | 定义搜索按钮选项。 |
| [SearchInterface](arkts-searchinterface-i.md) | 搜索框组件，适用于浏览器的搜索内容输入框等应用场景。 > **说明：** > > 该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor]{@link rich_editor}组件。 |
| [SearchOptions](arkts-searchoptions-i.md) | Search初始化参数。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Enums

| Name | Description |
| --- | --- |
| [CancelButtonStyle](arkts-cancelbuttonstyle-e.md) | 清除按钮样式枚举。 |
| [SearchType](arkts-searchtype-e.md) | 搜索输入框类型。 |

### Types

| Name | Description |
| --- | --- |
| [SearchSubmitCallback](arkts-searchsubmitcallback-t.md) | 点击搜索图标、搜索按钮或者按下软键盘搜索按钮时的回调事件。 |

### Constants

| Name | Description |
| --- | --- |
| [Search](arkts-search-con.md#Search) | 搜索框组件，适用于浏览器的搜索内容输入框等应用场景。 > **说明：** > > 该组件仅支持单文本样式，若需实现富文本样式，建议使用[RichEditor]{@link rich_editor}组件。 ###### 子组件 无 |
| [SearchInstance](arkts-search-con.md#SearchInstance) | 定义搜索组件实例。 |

