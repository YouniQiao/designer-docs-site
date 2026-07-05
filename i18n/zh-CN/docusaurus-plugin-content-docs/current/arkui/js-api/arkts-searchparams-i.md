# SearchParams

Events and styles supported by the search area.

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { SearchParams,AtomicServiceSearch,SearchButtonParams,OperationParams,SelectParams,InputFilterParams,MenuAlignParams } from '@kit.ArkUI';
```

## enableHapticFeedback

```TypeScript
enableHapticFeedback?: boolean
```

Enable or disable haptic feedback.

**类型：** boolean

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## searchButton

```TypeScript
searchButton?: SearchButtonParams
```

Set the search button text, fontSize and fontColor.

**类型：** SearchButtonParams

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## caretStyle

```TypeScript
caretStyle?: CaretStyle
```

Set the cursor style.

**类型：** CaretStyle

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onSubmit

```TypeScript
onSubmit?: Callback<string> | SearchSubmitCallback
```

Call the function when clicked the search button.

**类型：** Callback<string> | SearchSubmitCallback

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## enterKeyType

```TypeScript
enterKeyType?: EnterKeyType
```

Set enter key type of soft keyboard.

**类型：** EnterKeyType

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## pressedBackgroundColor

```TypeScript
pressedBackgroundColor?: ResourceColor
```

Background color when pressed.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor?: ResourceColor
```

Define the text selected background color of the text input.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## textIndent

```TypeScript
textIndent?: Dimension
```

Specify the indentation of the first line in a text-block.

**类型：** Dimension

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: SearchType
```

Called when the search type is set.

**类型：** SearchType

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## copyOptions

```TypeScript
copyOptions?: CopyOptions
```

Called when the copy option is set.

**类型：** CopyOptions

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onDidDelete

```TypeScript
onDidDelete?: Callback<DeleteValue>
```

Get text value information when the deletion has been completed.

**类型：** Callback<DeleteValue>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## componentBackgroundColor

```TypeScript
componentBackgroundColor?: ResourceColor
```

Indicates the background color of a component.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## inputFilter

```TypeScript
inputFilter?: InputFilterParams
```

Called when the inputFilter of text is set.

**类型：** InputFilterParams

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## editMenuOptions

```TypeScript
editMenuOptions?: EditMenuOptions
```

Set the custom text menu.

**类型：** EditMenuOptions

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## maxFontSize

```TypeScript
maxFontSize?: number | string | Resource
```

Called when the maximum font size of the font is set.

**类型：** number | string | Resource

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## decoration

```TypeScript
decoration?: TextDecorationOptions
```

Called when the text decoration of the text is set.

**类型：** TextDecorationOptions

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## enablePreviewText

```TypeScript
enablePreviewText?: boolean
```

Define the preview text mode of the text input.

**类型：** boolean

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## cancelIcon

```TypeScript
cancelIcon?: IconOptions
```

Set the cancel button style.

**类型：** IconOptions

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onWillDelete

```TypeScript
onWillDelete?: Callback<DeleteValue, boolean>
```

Get text value information when about to delete.

**类型：** Callback<DeleteValue, boolean>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onWillInsert

```TypeScript
onWillInsert?: Callback<InsertValue, boolean>
```

Get text value information when about to input.

**类型：** Callback<InsertValue, boolean>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## searchIcon

```TypeScript
searchIcon?: IconOptions | SymbolGlyphModifier
```

Set the search icon style.

**类型：** IconOptions | SymbolGlyphModifier

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: EditableTextOnChangeCallback
```

Call the function when editing the input text.

**类型：** EditableTextOnChangeCallback

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onEditChange

```TypeScript
onEditChange?: Callback<boolean>
```

Called when judging whether the text editing change finished.

**类型：** Callback<boolean>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## fontFeature

```TypeScript
fontFeature?: ResourceStr
```

Set font feature. normal | <feature-tag-value>, where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0 the values of <feature-tag-value> reference to doc of search component number of <feature-tag-value> can be single or multiple, and separated by comma ','.

**类型：** ResourceStr

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
textAlign?: TextAlign
```

Called when the text align is set.

**类型：** TextAlign

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onPaste

```TypeScript
onPaste?: OnPasteCallback
```

Called when using the Clipboard menu.

**类型：** OnPasteCallback

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## letterSpacing

```TypeScript
letterSpacing?: number | string | Resource
```

Called when the distance between text fonts is set.

**类型：** number | string | Resource

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## searchKey

```TypeScript
searchKey?: ResourceStr
```

Used to identify a unique search component.

**类型：** ResourceStr

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onContentScroll

```TypeScript
onContentScroll?: OnContentScrollCallback
```

Called when the content scrolls.

**类型：** OnContentScrollCallback

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onCut

```TypeScript
onCut?: Callback<string>
```

Called when using the Clipboard menu.

**类型：** Callback<string>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onCopy

```TypeScript
onCopy?: Callback<string>
```

Called when using the Clipboard menu.

**类型：** Callback<string>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## minFontSize

```TypeScript
minFontSize?: number | string | Resource
```

Called when the minimum font size of the font is set.

**类型：** number | string | Resource

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onTextSelectionChange

```TypeScript
onTextSelectionChange?: OnTextSelectionChangeCallback
```

Called when the text selection changes.

**类型：** OnTextSelectionChangeCallback

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## placeholderColor

```TypeScript
placeholderColor?: ResourceColor
```

Set the place hold text color.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## hideSelectionMenu

```TypeScript
hideSelectionMenu?: boolean
```

Controls whether the selection menu pops up.

**类型：** boolean

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## placeholderFont

```TypeScript
placeholderFont?: Font
```

Set the font used for place holder text.

**类型：** Font

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## enableKeyboardOnFocus

```TypeScript
enableKeyboardOnFocus?: boolean
```

Sets whether request keyboard or not when on focus.

**类型：** boolean

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## textFont

```TypeScript
textFont?: Font
```

Set enter key type of soft keyboard.

**类型：** Font

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onDidInsert

```TypeScript
onDidInsert?: Callback<InsertValue>
```

Get text value information when completed input.

**类型：** Callback<InsertValue>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## maxLength

```TypeScript
maxLength?: number
```

Called when the input of maximum text length is set.

**类型：** number

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Set the SearchButton fontColor.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

