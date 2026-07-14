# RichEditor properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported. In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), [OnDidChangeCallback](arkts-arkui-ondidchangecallback-t.md), [StyledStringChangedListener](arkts-arkui-styledstringchangedlistener-i.md), [StyledStringChangeValue](arkts-arkui-styledstringchangevalue-i.md), and the following events are supported.

**Inheritance/Implementation:** RichEditorAttribute extends [CommonMethod<RichEditorAttribute>](CommonMethod<RichEditorAttribute>)

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## aboutToDelete

```TypeScript
aboutToDelete(callback: Callback<RichEditorDeleteValue, boolean>)
```

Triggered when content is about to be deleted in the input method. This callback is not supported when the **RichEditor** component constructed with [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RichEditorDeleteValue, boolean&gt; | Yes | [RichEditorDeleteValue](arkts-arkui-richeditordeletevalue-i.md)indicates the text or image span where the content to be deleted is located.<br>**true**: Content is deleted.&lt;br&gt;**false**: Content is not deleted.<br>Callback invoked when content is about to be deleted in the inputmethod. It is executed when a candidate word is touched in preview text.<br>**Since:** 12 |

## aboutToIMEInput

```TypeScript
aboutToIMEInput(callback: Callback<RichEditorInsertValue, boolean>)
```

Triggered when content is about to be entered in the input method. This callback is not supported when the **RichEditor** component constructed with [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RichEditorInsertValue, boolean&gt; | Yes | [RichEditorInsertValue](arkts-arkui-richeditorinsertvalue-i.md)indicates whether content will be entered in the input method.<br>**true**: The component adds the content.<br>**false**: The component does not add the content.<br>Callback invoked when content is about to be entered inthe input method.<br>**Since:** 12 |

## barState

```TypeScript
barState(state: BarState)
```

Sets the display mode of the **RichEditor** scrollbar. > **NOTE** > > This API can be called within > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 18.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | BarState | Yes | Scrollbar display mode.<br>Default value: **BarState.Auto** |

## bindSelectionMenu

```TypeScript
bindSelectionMenu(spanType: RichEditorSpanType, content: CustomBuilder, responseType: ResponseType | RichEditorResponseType,
    options?: SelectionMenuOptions)
```

Sets the custom context menu on text selection. If the custom menu is too long, embed a [Scroll](arkts-arkui-scroll.md) component to prevent the keyboard from being blocked.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| spanType | RichEditorSpanType | Yes | Menu type.<br>Default value:<br>RichEditorSpanType.TEXT |
| content | CustomBuilder | Yes | Menu content. |
| responseType | ResponseType \| RichEditorResponseType | Yes | Response type of the menu.<br> Default value:<br>ResponseType.LongPress<br>**Since:** 11 |
| options | SelectionMenuOptions | No | Menu options. |

## caretColor

```TypeScript
caretColor(value: ResourceColor)
```

Sets the color of the caret and selection handle in the text box.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Color of the caret and selection handle in the text box.<br>Default value:**'#007DFF'** |

## compressLeadingPunctuation

```TypeScript
compressLeadingPunctuation(enabled: Optional<boolean>)
```

Sets whether to enable punctuation compression at the beginning of a line. > **NOTE** > > By default, the punctuation at the beginning of a line is not compressed. > > For details about the punctuation that supports compression, see the punctuation range of the line header > compression of [ParagraphStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-paragraphstyle-i.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean&gt; | Yes | Whether to enable punctuation compression at the beginning of a line.<br>true indicates that punctuation compression is enabled at the beginning of a line. false indicates thatpunctuation compression is disabled at the beginning of a line. |

## copyOptions

```TypeScript
copyOptions(value: CopyOptions)
```

Specifies whether copy and paste is allowed for text content. Since API version 20, copied or cut text from the **RichEditor** component includes HTML-formatted content in the pasteboard. - Only TextSpan and ImageSpan can add HTML content to the pasteboard. Other span types (such as BuilderSpan, SymbolSpan, and CustomSpan) cannot add HTML content to the pasteboard. - For styled strings, refer to [toHtml](arkts-arkui-styledstring-c.md#tohtml-1) for supported HTML conversion scope. If copyOptions is not set to CopyOptions.None, a text selection menu will be displayed when you long-press the component content. If a custom context menu is defined through **bindSelectionMenu** or other approaches, it will be displayed. If copyOptions is set to CopyOptions.None, the copy, cut, translate, share, search, and write-aid functions are disabled, and drag-and-drop operations are not supported.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CopyOptions | Yes | Whether copy and paste is allowed for text content.<br>Default value:**CopyOptions.LocalDevice** |

## customKeyboard

```TypeScript
customKeyboard(value: CustomBuilder | ComponentContent | undefined,
                 options?: KeyboardOptions | undefined)
```

Sets a custom keyboard. When a custom keyboard is set, activating the text box opens the specified custom component, instead of the system input method. The custom keyboard's height can be set through the **height** attribute of the custom component's root node, and its width is fixed at the default value. The custom keyboard cannot obtain focus, but it blocks gesture events. By default, the custom keyboard is closed when the input component loses the focus. > **NOTE** > > This API can be called within > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 23.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CustomBuilder \| ComponentContent \| undefined | Yes | Custom keyboard.<br>When undefined is passed, thesystem keyboard is used by default.<br>**Since:** 23 |
| options | KeyboardOptions \| undefined | No | Whether to support keyboard avoidance.<br>When undefined ispassed, avoidance is not supported by default.<br>**Since:** 23 |

## dataDetectorConfig

```TypeScript
dataDetectorConfig(config: TextDataDetectorConfig)
```

Configures special entity recognition settings, including entity types to detect, display styles for detected entities, and long-press preview options. This API must be used together with [enableDataDetector](RichEditorAttribute.enableDataDetector). It takes effect only when **enableDataDetector** is set to **true**. When entities A and B overlap, the following rules are followed: 1. If A ⊂ B, retain B. Otherwise, retain A. 2. When A ⊄ B and B ⊄ A: If A.start < B.start, retain A; otherwise, retain B.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | TextDataDetectorConfig | Yes | Text recognition configuration. |

## editMenuOptions

```TypeScript
editMenuOptions(editMenu: EditMenuOptions)
```

Sets the extended options of the default system menu, including the text content, icon, and callback. When [disableMenuItems](../../../../reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or [disableSystemServiceMenuItems](../../../../reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20) is used to disable system service menu items in the context menu on selection, the disabled menu options will be excluded from the parameter list in the [onCreateMenu](arkts-arkui-editmenuoptions-i.md#oncreatemenu-1) callback of **editMenuOptions**. > **NOTE** > > This API can be called within > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 18.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | EditMenuOptions | Yes | Extended options of the custom context menu on selection. |

## enableAutoSpacing

```TypeScript
enableAutoSpacing(enable: Optional<boolean>)
```

Sets whether to enable automatic spacing between Chinese and Western characters.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean&gt; | Yes | Whether to enable automatic spacing between Chinese and Western characters.&lt;br&gt;**true** to enable, **false** otherwise.<br>Default value: **false**. |

## enableDataDetector

```TypeScript
enableDataDetector(enable: boolean)
```

Enables recognition for special entities within the text. For this API to work, the target device must provide the text recognition capability. If enableDataDetector is set to true and the [dataDetectorConfig](RichEditorAttribute.dataDetectorConfig) attribute is not specified, the system identifies all types of entities by default, and changes the color and decoration of these entities to the preset style. Touching and right-clicking an entity opens a context menu with actions based on entity type, while left-clicking triggers the first menu option directly. This API does not work for the node text of **addBuilderSpan**. When **copyOptions** is set to **CopyOptions.None**, the menu displayed after an entity is clicked does not provide the text selection or copy functionality. <!--RP1--><!--RP1End-->

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable text recognition.<br>**true** to enable, **false** otherwise.<br>Default value: **false**. |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(isEnabled: boolean)
```

Sets whether to enable haptic feedback. > **NOTE** > > This API can be called in > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 20.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to enable haptic feedback.<br>Default value: **true**. **true** to enable;**false** otherwise.<br>**NOTE**<br>Haptic feedback takes effect only when the application has theohos.permission.VIBRATE permission, the user has enabled haptic feedback, and the system hardware supports it. |

## enableKeyboardOnFocus

```TypeScript
enableKeyboardOnFocus(isEnabled: boolean)
```

Sets whether to enable the input method when the **RichEditor** component obtains focus in a way other than clicking. > **NOTE** > > This API can be called within > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 18.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to bring up the keyboard when a component obtains focus in a way other thanclicking.<br>**true**: yes; **false**: no<br>Default value: **true** |

## enablePreviewText

```TypeScript
enablePreviewText(enable: boolean)
```

Sets whether to enable preview text. > **NOTE** > > This API can be called within > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 18.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable preview text.<br>**true** to enable, **false** otherwise.<br>Defaultvalue: **true** |

## enableSelectedDataDetector

```TypeScript
enableSelectedDataDetector(enable: boolean | undefined)
```

Sets whether to enable the AI menu function for text selection. After this function is enabled, the email address, phone number, website address, date, and address in the selection area can be identified, and the corresponding AI menu items can be displayed in the text selection menu. By default, the AI menu feature is enabled. When the AI menu function is enabled, after a text is selected in the component, the corresponding AI menu item is displayed in the text selection menu, including the URL (opening a connection) and email (creating an email) in [TextMenuItemId](arkts-arkui-textmenuitemid-c.md)., phoneNumber (call), address (navigation), and dateTime (new event). When the AI menu takes effect, the corresponding options can be displayed only when the selected scope contains only one complete AI entity. This menu item does not appear at the same time as the askAI menu item in [TextMenuItemId](arkts-arkui-textmenuitemid-c.md). This function takes effect only when [copyOptions](RichEditorAttribute.copyOptions) is set to CopyOptions.LocalDevice or CopyOptions.CROSS_DEVICE. This API depends on the text recognition capability at the bottom layer of the device. Otherwise, the setting does not take effect.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean \| undefined | Yes | Whether to enable text recognition. The value **true** means to enable textrecognition, and **false** means the opposite.<br>If **undefined** or **null** is passed, the attribute isreset to the default value. |

## enterKeyType

```TypeScript
enterKeyType(value: EnterKeyType)
```

Sets the Enter key type of the soft keyboard.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | EnterKeyType | Yes | Type of the Enter key.<br>Default value: **EnterKeyType.NEW_LINE** |

## fallbackLineSpacing

```TypeScript
fallbackLineSpacing(enabled: Optional<boolean>)
```

For multi-line text overlay, the line height can be automatically adjusted based on the actual text height. This API is not used to set the line height. By default, the line height is not automatically adjusted based on the actual text height. This API depends on the lineHeight attribute of [RichEditorTextStyle](arkts-arkui-richeditortextstyleresult-i.md). When the value of lineHeight is less than the actual height of the text rendered under the current font size, the fallbackLineSpacing property takes effect.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean&gt; | Yes | Whether the line height is adaptive based on the actual text height.<br>Thevalue true indicates that the line height is automatically adjusted based on the actual text height. The valuefalse indicates that the line height is not automatically adjusted based on the actual text height. |

## horizontalScrolling

```TypeScript
horizontalScrolling(enabled: Optional<boolean>)
```

Whether to enable horizontal scrolling when text is wider than the view. The default value is false, and text will be wrapped by the view.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean&gt; | Yes | whether to enable horizontal scrolling.True means enable this feature, false means disable this feature. |

## includeFontPadding

```TypeScript
includeFontPadding(include: Optional<boolean>)
```

Sets whether to add a spacing between the first and last lines to avoid text truncation. If this interface is not used, the spacing is not increased by default.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| include | Optional&lt;boolean&gt; | Yes | Whether to add a spacing between the first and last lines to avoid texttruncation.<br>The value true indicates that the space between the first line and the last line is added. Thevalue false indicates that the space between the first line and the last line is not added. |

## keyboardAppearance

```TypeScript
keyboardAppearance(appearance: Optional<KeyboardAppearance>)
```

Sets the keyboard appearance.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appearance | Optional&lt;KeyboardAppearance&gt; | Yes | Keyboard appearance.<br>Default value:**KeyboardAppearance.NONE_IMMERSIVE** |

## maxLength

```TypeScript
maxLength(maxLength: Optional<number>)
```

Sets the maximum length of the component content. When the total length of the content (including text, images, symbols, and builders) reaches this value, no more content can be added.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxLength | Optional&lt;number&gt; | Yes | Maximum number of characters for text input.<br>Default value: **Infinity**, which means unlimited input. The **undefined** type is supported.<br>**NOTE**<br>If this attribute is not setor is set to an invalid value, the default value is used. If a decimal number is specified, the integer part isused. |

## maxLines

```TypeScript
maxLines(maxLines: Optional<number>)
```

Sets the maximum number of lines that the rich text can display. When **maxLines** is set, content that exceeds the specified number of lines can be scrolled to display. If both the component height and **maxLines** are set, the component height takes precedence.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxLines | Optional&lt;number&gt; | Yes | Maximum number of lines that the rich text can display. When **maxLines** isset, content that exceeds the specified number of lines can be scrolled to display. If both the componentheight and **maxLines** are set, the component height takes precedence.<br>Default value: **UINT32_MAX**, whichmeans unlimited input. The **undefined** type is supported.<br>Value range: (0, UINT32_MAX] |

## onCopy

```TypeScript
onCopy(callback: Callback<CopyEvent>)
```

Triggered during copy. You can use this method to override the system's default behavior and implement the copying of text and images. The **RichEditor** component constructed using [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) supports copying of text and images by default.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CopyEvent&gt; | Yes | User copy event. |

## onCut

```TypeScript
onCut(callback: Callback<CutEvent>)
```

Triggered during cutting. You can use this method to override the system's default behavior and implement the cutting of text and images. The **RichEditor** component constructed using [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) supports text and image cutting by default.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CutEvent&gt; | Yes | Defines a custom cut event. |

## onDeleteComplete

```TypeScript
onDeleteComplete(callback: Callback<void>)
```

Triggered when content is deleted in the input method. This callback is not supported when the **RichEditor** component constructed with [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; | Yes | Triggered when deletion in the input method is completed.<br>**Since:** 12 |

## onDidChange

```TypeScript
onDidChange(callback: OnDidChangeCallback) : RichEditorAttribute
```

Triggered after an addition or deletion operation is performed in the component. This callback is not executed if there is no actual addition or deletion of text. This callback is not supported when the **RichEditor** component constructed with [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used. > **NOTE** > > This API can be called within > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 18.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnDidChangeCallback | Yes | The triggered function after content changed. |

## onDidIMEInput

```TypeScript
onDidIMEInput(callback: Callback<TextRange>)
```

Triggered when text input in the input method is complete. This callback is not supported when the **RichEditor** component constructed with [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used. > **NOTE** > > This API can be called in > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;TextRange&gt; | Yes | **TextRange** indicates the text range for the current input.<br>Callbackinvoked when text input in the input method is complete. |

## onEditingChange

```TypeScript
onEditingChange(callback: Callback<boolean>)
```

Triggered when the content editing state in the component changes.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean&gt; | Yes | Callback invoked when the editing state of all content in the componentchanges. The value **true** indicates the editing state, and **false** indicates the non-editing state. |

## onIMEInputComplete

```TypeScript
onIMEInputComplete(callback: Callback<RichEditorTextSpanResult>)
```

Triggered when text input in the input method is complete. This callback can return information about only one text span. If the editing operation involves returning information about multiple text spans, you are advised to use the [onDidIMEInput](RichEditorAttribute.onDidIMEInput) API. This callback is not supported when the **RichEditor** component constructed with [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RichEditorTextSpanResult&gt; | Yes | [RichEditorTextSpanResult](arkts-arkui-richeditortextspanresult-i.md)indicates the text span information after text input is complete.<br>Callback invoked when text input in theinput method is complete.<br>**Since:** 12 |

## onPaste

```TypeScript
onPaste(callback: PasteEventCallback)
```

Triggered when a paste operation is performed. You can use this API to override the default system behavior so that both images and text can be pasted.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PasteEventCallback | Yes | Callback used to subscribe to the pasted text content.<br>**Since:** 12 |

## onReady

```TypeScript
onReady(callback: Callback<void>)
```

Triggered after the **RichEditor** component is initialized.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void&gt; | Yes | Triggered when initialization of the **RichEditor** component iscomplete.<br>**Since:** 12 |

## onSelect

```TypeScript
onSelect(callback: Callback<RichEditorSelection>)
```

Invoked when content is selected. If a mouse device is used for selection, this callback is invoked when the left mouse button is double-clicked to select content and invoked again when the button is released. If a finger is used for selection, this callback is invoked by a long press and invoked again when the finger is released. If the selected area is continuously modified by using a finger or mouse or if the selected area is triple-clicked, the onSelect callback is not invoked. If the selection area needs to be detected in real time or the RichEditor component constructed using [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used, use the onSelectionChange API.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RichEditorSelection&gt; | Yes | [RichEditorSelection](arkts-arkui-richeditorselection-i.md) indicatesinformation about all the selected spans.<br>Callback invoked when content is selected.<br>**Since:** 12 |

## onSelectionChange

```TypeScript
onSelectionChange(callback: Callback<RichEditorRange>)
```

Triggered when the selection area or caret position changes in the editing state. When the caret position changes, the start and end positions of the selection area are the same.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RichEditorRange&gt; | Yes | [RichEditorRange](arkts-arkui-richeditorrange-i.md) indicates the start andend positions of the content selection area.<br>Callback invoked when the content selection area changes or thecaret position changes in the editing state. |

## onSubmit

```TypeScript
onSubmit(callback: SubmitCallback)
```

Triggered when the Enter key on the soft keyboard is pressed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | SubmitCallback | Yes | Callback used to return the subscription event. |

## onWillAttachIME

```TypeScript
onWillAttachIME(callback: Callback<IMEClient> | undefined)
```

Triggers a callback before a component is bound to an input method. Call the [setExtraConfig](arkts-arkui-imeclient-i.md#setextraconfig-1) method of [IMEClient](arkts-arkui-imeclient-i.md) to set input method extension information. After the input method is bound , it receives this extension information, which can be used to implement custom functionality.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;IMEClient&gt; \| undefined | Yes | Callback triggered before the component is bound to an inputmethod.<br>If the value is undefined, the bound callback event is cleared. |

## onWillChange

```TypeScript
onWillChange(callback: Callback<RichEditorChangeValue, boolean>) : RichEditorAttribute
```

Invoked when any addition or deletion operation is about to be performed in the component. This callback is not supported when the **RichEditor** component constructed with [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used. > **NOTE** > > This API can be called within > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 18.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;RichEditorChangeValue, boolean&gt; | Yes | The triggered function before text content is aboutto change. |

## orphanCharOptimization

```TypeScript
orphanCharOptimization(enabled: Optional<boolean>)
```

Whether to avoid an orphan word on the last line of the paragraph.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean&gt; | Yes | The default value is false,indicates the flag whether to enable this feature. |

## placeholder

```TypeScript
placeholder(value: ResourceStr, style?: PlaceholderStyle)
```

Sets the placeholder text, which is displayed when there is no input. > **NOTE** > > This API can be called within > [attributeModifier](../../../../reference/apis-arkui/arkui-ts/ts-universal-attributes-attribute-modifier.md#attributemodifier) > since API version 18.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceStr | Yes | Placeholder text. |
| style | PlaceholderStyle | No | Style of the placeholder text.<br>By default, the style follows the theme. |

## punctuationOverflow

```TypeScript
punctuationOverflow(enabled: Optional<boolean>)
```

Whether to enable punctuation overflow at line ends.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | Optional&lt;boolean&gt; | Yes | Whether to enable the feature, the default value is false. |

## scrollBarColor

```TypeScript
scrollBarColor(color: Optional<ColorMetrics>)
```

Sets the color of the scrollbar.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | Optional&lt;ColorMetrics&gt; | Yes | Color of the scrollbar.<br>Default value: **'#66182431'**, displayed asgray.<br>Note: If an abnormal value is set, the default value is used. |

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(value: ResourceColor)
```

Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Background color of the selected text.<br>By default, a 20% opacity is applied. |

## selectedDragPreviewStyle

```TypeScript
selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)
```

Sets the drag and view style.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SelectedDragPreviewStyle \| undefined | Yes | Drag and preview style. If this attribute is set toundefined, the style will be reset. |

## singleLine

```TypeScript
singleLine(isEnable: boolean | undefined)
```

Sets whether to enable the single-line mode. If this interface is not used, the single-line mode is disabled by default. > **NOTE** > > The scroll bar is not displayed in single-line mode. > > In single-line mode, the newline character is displayed as a space.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnable | boolean \| undefined | Yes | Whether to enable the single-line mode.<br>The value true indicates thatthe single-line mode is enabled, and the value false indicates that the single-line mode is disabled.<br>Ifthis attribute is set to undefined or null, the value false is used and the single-line mode is not enabled. |

## stopBackPress

```TypeScript
stopBackPress(isStopped: Optional<boolean>)
```

Sets whether to prevent the back button press from being propagated to other components or applications.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isStopped | Optional&lt;boolean&gt; | Yes | Whether to prevent the back button press from being propagated to othercomponents or applications.<br>**true** to prevent, **false** otherwise.<br>Default value: **true**. If aninvalid value is provided, the default value is used. |

## undoStyle

```TypeScript
undoStyle(style: Optional<UndoStyle>)
```

Sets whether to retain the original content style when undoing or redoing an action. When the [RichEditorStyledStringOptions](arkts-arkui-richeditorstyledstringoptions-i.md) is used to build the RichEditor component, the original content style is retained by default during undo and redo, and is not affected by the attributes set by this API.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | Optional&lt;UndoStyle&gt; | Yes | Whether to retain the original style when undoing an operation. Defaultvalue: **UndoStyle.CLEAR_STYLE**. |

