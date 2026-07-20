# SearchParams

Events and styles supported by the search area.

**Since:** 18

<!--Device-unnamed-export interface SearchParams--><!--Device-unnamed-export interface SearchParams-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SearchParams, AtomicServiceSearch, SearchButtonParams, OperationParams, SelectParams, InputFilterParams, MenuAlignParams } from '@kit.ArkUI';
```

## cancelIcon

```TypeScript
cancelIcon?: IconOptions
```

Set the cancel button style.

**Type:** IconOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-cancelIcon?: IconOptions--><!--Device-SearchParams-cancelIcon?: IconOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## caretStyle

```TypeScript
caretStyle?: CaretStyle
```

Set the cursor style.

**Type:** CaretStyle

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-caretStyle?: CaretStyle--><!--Device-SearchParams-caretStyle?: CaretStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## componentBackgroundColor

```TypeScript
componentBackgroundColor?: ResourceColor
```

Indicates the background color of a component.

**Type:** ResourceColor

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-componentBackgroundColor?: ResourceColor--><!--Device-SearchParams-componentBackgroundColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## copyOptions

```TypeScript
copyOptions?: CopyOptions
```

Called when the copy option is set.

**Type:** CopyOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-copyOptions?: CopyOptions--><!--Device-SearchParams-copyOptions?: CopyOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## decoration

```TypeScript
decoration?: TextDecorationOptions
```

Called when the text decoration of the text is set.

**Type:** TextDecorationOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-decoration?: TextDecorationOptions--><!--Device-SearchParams-decoration?: TextDecorationOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## editMenuOptions

```TypeScript
editMenuOptions?: EditMenuOptions
```

Set the custom text menu.

**Type:** EditMenuOptions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-editMenuOptions?: EditMenuOptions--><!--Device-SearchParams-editMenuOptions?: EditMenuOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableHapticFeedback

```TypeScript
enableHapticFeedback?: boolean
```

Enable or disable haptic feedback.

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-enableHapticFeedback?: boolean--><!--Device-SearchParams-enableHapticFeedback?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableKeyboardOnFocus

```TypeScript
enableKeyboardOnFocus?: boolean
```

Sets whether request keyboard or not when on focus.

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-enableKeyboardOnFocus?: boolean--><!--Device-SearchParams-enableKeyboardOnFocus?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enablePreviewText

```TypeScript
enablePreviewText?: boolean
```

Define the preview text mode of the text input.

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-enablePreviewText?: boolean--><!--Device-SearchParams-enablePreviewText?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enterKeyType

```TypeScript
enterKeyType?: EnterKeyType
```

Set enter key type of soft keyboard.

**Type:** EnterKeyType

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-enterKeyType?: EnterKeyType--><!--Device-SearchParams-enterKeyType?: EnterKeyType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Set the SearchButton fontColor.

**Type:** ResourceColor

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-fontColor?: ResourceColor--><!--Device-SearchParams-fontColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fontFeature

```TypeScript
fontFeature?: ResourceStr
```

Set font feature.normal | <feature-tag-value>,where <feature-tag-value> = <string> [ <integer> | on | off ], like: "ss01" 0the values of <feature-tag-value> reference to doc of search component number of <feature-tag-value> can be single or multiple, and separated by comma ','.

**Type:** ResourceStr

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-fontFeature?: ResourceStr--><!--Device-SearchParams-fontFeature?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hideSelectionMenu

```TypeScript
hideSelectionMenu?: boolean
```

Controls whether the selection menu pops up.

**Type:** boolean

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-hideSelectionMenu?: boolean--><!--Device-SearchParams-hideSelectionMenu?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## inputFilter

```TypeScript
inputFilter?: InputFilterParams
```

Called when the inputFilter of text is set.

**Type:** InputFilterParams

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-inputFilter?: InputFilterParams--><!--Device-SearchParams-inputFilter?: InputFilterParams-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## letterSpacing

```TypeScript
letterSpacing?: number | string | Resource
```

Called when the distance between text fonts is set.

**Type:** number | string | Resource

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-letterSpacing?: number | string | Resource--><!--Device-SearchParams-letterSpacing?: number | string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxFontSize

```TypeScript
maxFontSize?: number | string | Resource
```

Called when the maximum font size of the font is set.

**Type:** number | string | Resource

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-maxFontSize?: number | string | Resource--><!--Device-SearchParams-maxFontSize?: number | string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxLength

```TypeScript
maxLength?: number
```

Called when the input of maximum text length is set.

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-maxLength?: number--><!--Device-SearchParams-maxLength?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## minFontSize

```TypeScript
minFontSize?: number | string | Resource
```

Called when the minimum font size of the font is set.

**Type:** number | string | Resource

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-minFontSize?: number | string | Resource--><!--Device-SearchParams-minFontSize?: number | string | Resource-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange?: EditableTextOnChangeCallback
```

Call the function when editing the input text.

**Type:** EditableTextOnChangeCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onChange?: EditableTextOnChangeCallback--><!--Device-SearchParams-onChange?: EditableTextOnChangeCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onContentScroll

```TypeScript
onContentScroll?: OnContentScrollCallback
```

Called when the content scrolls.

**Type:** OnContentScrollCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onContentScroll?: OnContentScrollCallback--><!--Device-SearchParams-onContentScroll?: OnContentScrollCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCopy

```TypeScript
onCopy?: Callback<string>
```

Called when using the Clipboard menu.

**Type:** Callback<string>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onCopy?: Callback<string>--><!--Device-SearchParams-onCopy?: Callback<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCut

```TypeScript
onCut?: Callback<string>
```

Called when using the Clipboard menu.

**Type:** Callback<string>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onCut?: Callback<string>--><!--Device-SearchParams-onCut?: Callback<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidDelete

```TypeScript
onDidDelete?: Callback<DeleteValue>
```

Get text value information when the deletion has been completed.

**Type:** Callback<DeleteValue>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onDidDelete?: Callback<DeleteValue>--><!--Device-SearchParams-onDidDelete?: Callback<DeleteValue>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidInsert

```TypeScript
onDidInsert?: Callback<InsertValue>
```

Get text value information when completed input.

**Type:** Callback<InsertValue>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onDidInsert?: Callback<InsertValue>--><!--Device-SearchParams-onDidInsert?: Callback<InsertValue>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onEditChange

```TypeScript
onEditChange?: Callback<boolean>
```

Called when judging whether the text editing change finished.

**Type:** Callback<boolean>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onEditChange?: Callback<boolean>--><!--Device-SearchParams-onEditChange?: Callback<boolean>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onPaste

```TypeScript
onPaste?: OnPasteCallback
```

Called when using the Clipboard menu.

**Type:** OnPasteCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onPaste?: OnPasteCallback--><!--Device-SearchParams-onPaste?: OnPasteCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onSubmit

```TypeScript
onSubmit?: Callback<string> | SearchSubmitCallback
```

Call the function when clicked the search button.

**Type:** Callback<string> | SearchSubmitCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onSubmit?: Callback<string> | SearchSubmitCallback--><!--Device-SearchParams-onSubmit?: Callback<string> | SearchSubmitCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onTextSelectionChange

```TypeScript
onTextSelectionChange?: OnTextSelectionChangeCallback
```

Called when the text selection changes.

**Type:** OnTextSelectionChangeCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onTextSelectionChange?: OnTextSelectionChangeCallback--><!--Device-SearchParams-onTextSelectionChange?: OnTextSelectionChangeCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillDelete

```TypeScript
onWillDelete?: Callback<DeleteValue, boolean>
```

Get text value information when about to delete.

**Type:** Callback<DeleteValue, boolean>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onWillDelete?: Callback<DeleteValue, boolean>--><!--Device-SearchParams-onWillDelete?: Callback<DeleteValue, boolean>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillInsert

```TypeScript
onWillInsert?: Callback<InsertValue, boolean>
```

Get text value information when about to input.

**Type:** Callback<InsertValue, boolean>

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-onWillInsert?: Callback<InsertValue, boolean>--><!--Device-SearchParams-onWillInsert?: Callback<InsertValue, boolean>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## placeholderColor

```TypeScript
placeholderColor?: ResourceColor
```

Set the place hold text color.

**Type:** ResourceColor

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-placeholderColor?: ResourceColor--><!--Device-SearchParams-placeholderColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## placeholderFont

```TypeScript
placeholderFont?: Font
```

Set the font used for place holder text.

**Type:** Font

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-placeholderFont?: Font--><!--Device-SearchParams-placeholderFont?: Font-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pressedBackgroundColor

```TypeScript
pressedBackgroundColor?: ResourceColor
```

Background color when pressed.

**Type:** ResourceColor

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-pressedBackgroundColor?: ResourceColor--><!--Device-SearchParams-pressedBackgroundColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## searchButton

```TypeScript
searchButton?: SearchButtonParams
```

Set the search button text, fontSize and fontColor.

**Type:** SearchButtonParams

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-searchButton?: SearchButtonParams--><!--Device-SearchParams-searchButton?: SearchButtonParams-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## searchIcon

```TypeScript
searchIcon?: IconOptions | SymbolGlyphModifier
```

Set the search icon style.

**Type:** IconOptions | SymbolGlyphModifier

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-searchIcon?: IconOptions | SymbolGlyphModifier--><!--Device-SearchParams-searchIcon?: IconOptions | SymbolGlyphModifier-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## searchKey

```TypeScript
searchKey?: ResourceStr
```

Used to identify a unique search component.

**Type:** ResourceStr

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-searchKey?: ResourceStr--><!--Device-SearchParams-searchKey?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor?: ResourceColor
```

Define the text selected background color of the text input.

**Type:** ResourceColor

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-selectedBackgroundColor?: ResourceColor--><!--Device-SearchParams-selectedBackgroundColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textAlign

```TypeScript
textAlign?: TextAlign
```

Called when the text align is set.

**Type:** TextAlign

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-textAlign?: TextAlign--><!--Device-SearchParams-textAlign?: TextAlign-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textFont

```TypeScript
textFont?: Font
```

Set enter key type of soft keyboard.

**Type:** Font

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-textFont?: Font--><!--Device-SearchParams-textFont?: Font-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textIndent

```TypeScript
textIndent?: Dimension
```

Specify the indentation of the first line in a text-block.

**Type:** Dimension

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-textIndent?: Dimension--><!--Device-SearchParams-textIndent?: Dimension-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: SearchType
```

Called when the search type is set.

**Type:** SearchType

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchParams-type?: SearchType--><!--Device-SearchParams-type?: SearchType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

