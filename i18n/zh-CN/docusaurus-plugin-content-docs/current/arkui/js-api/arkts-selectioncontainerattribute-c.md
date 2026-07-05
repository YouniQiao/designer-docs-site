# SelectionContainerAttribute

Defines the attributes of SelectionContainer.

**继承实现关系：** SelectionContainerAttribute继承自：CommonMethod<SelectionContainerAttribute>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { SelectionContainerInstance,SelectionContainer,OnMenuItemClickWithTextCallback,SelectionContainerAttribute,SelectionContainerEditMenuOptions,SelectionContainerTextJoinStyle,SelectionContainerMenuOptions } from '@kit.ArkUI';
```

## bindSelectionMenu

```TypeScript
bindSelectionMenu(spanType: Optional<TextSpanType>, content: Optional<CustomBuilder>,
    responseType: Optional<TextResponseType>, options?: Optional<SelectionContainerMenuOptions>): SelectionContainerAttribute
```

Bind to the selection menu. <p><strong>NOTE</strong>: <br>The duration required for a long-press gesture is 600 ms for bindSelectionMenu and 800 ms for bindContextMenu. <br>When both bindSelectionMenu and bindContextMenu are set and both are configured to be triggered by a long-press gesture, bindSelectionMenu is triggered first. <br>If the custom menu is too long, embed a Scroll component to prevent the keyboard from being blocked. </p>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| spanType | Optional&lt;TextSpanType> | 是 | Indicates the type of selection menu. Default value is  TextSpanType.TEXT. |
| content | Optional&lt;CustomBuilder> | 是 | Indicates the content of selection menu. |
| responseType | Optional&lt;TextResponseType> | 是 | Indicates response type of selection menu. Default value is  TextResponseType.LONG_PRESS. |
| options | Optional&lt;SelectionContainerMenuOptions> | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## caretColor

```TypeScript
caretColor(color: Optional<ResourceColor>): SelectionContainerAttribute
```

Set the caret color for selected text.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | Optional&lt;ResourceColor> | 是 | caret color. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## copyOption

```TypeScript
copyOption(value: Optional<CopyOptions>): SelectionContainerAttribute
```

Set whether to allow copy and where data can be copied.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Optional&lt;CopyOptions> | 是 | copy option for selected text. Default value is CopyOptions.InApp. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## editMenuOptions

```TypeScript
editMenuOptions(editMenu: Optional<SelectionContainerEditMenuOptions>): SelectionContainerAttribute
```

Set the custom text menu. Sets the extended options of the custom context menu on selection, including the text content, icon, and callback.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| editMenu | Optional&lt;SelectionContainerEditMenuOptions> | 是 | Customize text menu options. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(isEnabled: Optional<boolean>): SelectionContainerAttribute
```

Enable or disable haptic feedback.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnabled | Optional&lt;boolean> | 是 | whether to enable haptic feedback. Default value is true. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## onCopy

```TypeScript
onCopy(callback: Optional<Callback<string>>): SelectionContainerAttribute
```

Called when selected text is copied. Currently, only text can be copied.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Optional&lt;Callback&lt;string>> | 是 | callback of copy event.  The callback parameter (string) is the selected text concatenated in the visual order of Text components. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: Optional<Callback<Array<string>>>): SelectionContainerAttribute
```

Called when text selection changes in SelectionContainer.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Optional&lt;Callback&lt;Array&lt;string>>> | 是 | callback of selection change event.  The order of items in the first callback parameter array is consistent with the visual order of Text  components. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## onWillCopy

```TypeScript
onWillCopy(callback: Optional<Callback<string, boolean>>): SelectionContainerAttribute
```

Called before using the Clipboard copy menu. Currently, only text can be copied.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Optional&lt;Callback&lt;string, boolean>> | 是 | callback used to check whether copy is allowed.  The first callback parameter (string) is the selected text concatenated in the visual order of Text components. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(color: Optional<ResourceColor>): SelectionContainerAttribute
```

Set selected text background color.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | Optional&lt;ResourceColor> | 是 | selected text background color. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

## textJoinStyle

```TypeScript
textJoinStyle(style: Optional<SelectionContainerTextJoinStyle>): SelectionContainerAttribute
```

Set text join style for aggregated text in SelectionContainer. <p><strong>NOTE</strong>: <br>This setting affects the string value used in callbacks such as onWillCopy and onCopy. <br>It also affects built-in text menu item logic that depends on string concatenation, such as copy. <br>The default style is SelectionContainerTextJoinStyle.NEWLINE. </p>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| style | Optional&lt;SelectionContainerTextJoinStyle> | 是 | text join style for aggregated text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| SelectionContainerAttribute | returns the instance of the SelectionContainerAttribute. |

