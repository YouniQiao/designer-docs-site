# Search properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** SearchAttribute extends [CommonMethod<SearchAttribute>](CommonMethod<SearchAttribute>)

**Since:** 8

<!--Device-unnamed-declare class SearchAttribute extends CommonMethod<SearchAttribute>--><!--Device-unnamed-declare class SearchAttribute extends CommonMethod<SearchAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoCapitalizationMode

```TypeScript
autoCapitalizationMode(mode: AutoCapitalizationMode)
```

Sets the text auto-capitalization mode. This API provides the capability, but actual implementation depends on the input method application.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-SearchAttribute-autoCapitalizationMode(mode: AutoCapitalizationMode): SearchAttribute--><!--Device-SearchAttribute-autoCapitalizationMode(mode: AutoCapitalizationMode): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [AutoCapitalizationMode](../arkts-apis/arkts-arkui-text-common-autocapitalizationmode-e.md) | Yes | Auto-capitalization mode. The default state is inactive. |

## cancelButton

```TypeScript
cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions)
```

Sets the style of the cancel button on the right. For details, see [Example 2: Setting Search and Delete Icons](../../../../reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-2-setting-search-and-delete-icons)and [Example 11: Setting a Custom Symbol-Type Cancel Button](../../../../reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-11-setting-a-custom-symbol-type-cancel-button).

The default icon size on wearable devices is 18 fp.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions): SearchAttribute--><!--Device-SearchAttribute-cancelButton(value: CancelButtonOptions | CancelButtonSymbolOptions): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CancelButtonOptions \| CancelButtonSymbolOptions | Yes | Style of the cancel button on the right.<br>Default value:<br>{<br>style: CancelButtonStyle.INPUT,<br>icon: {<br>size: '16vp',<br>color: '#99ffffff',<br>src: ' '<br>}<br>}<br>When style is set to **CancelButtonStyle.CONSTANT**, the cancel button is displayed in a default style.<br>**Since:** 12 |

## caretStyle

```TypeScript
caretStyle(value: CaretStyle)
```

Sets the caret style.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-caretStyle(value: CaretStyle): SearchAttribute--><!--Device-SearchAttribute-caretStyle(value: CaretStyle): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CaretStyle](../arkts-apis/arkts-arkui-text-common-caretstyle-i.md) | Yes | Caret style.<br>Default value:<br>{<br>width: '2.0vp',<br>color: '#007DFF'<br>} |

## compressLeadingPunctuation

```TypeScript
compressLeadingPunctuation(enabled: Optional<boolean>)
```

Sets whether to enable leading punctuation compression.

> **NOTE**  
>  
> - Leading punctuation is not compressed by default.  
>  
> - For the list of punctuation marks that support compression, see the punctuation range at the beginning of a  
> line in [ParagraphStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-paragraphstyle-i.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-SearchAttribute-compressLeadingPunctuation(enabled: Optional<boolean>): SearchAttribute--><!--Device-SearchAttribute-compressLeadingPunctuation(enabled: Optional<boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether to enable leading punctuation compression.<br>**true**: Leading punctuation compression is enabled. **false**: Leading punctuation compression is disabled. |

## copyOption

```TypeScript
copyOption(value: CopyOptions)
```

Sets whether the input text can be copied. If this attribute is set to **CopyOptions.None**, the **Search** component supports paste and select-all operations, while other operations such as copy, cut, translate, and share,as well as the Celia Writer assisted writing feature, are disabled.

Dragging is not allowed when **CopyOptions.None** is set.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-copyOption(value: CopyOptions): SearchAttribute--><!--Device-SearchAttribute-copyOption(value: CopyOptions): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CopyOptions](../arkts-apis/arkts-arkui-enums-copyoptions-e.md) | Yes | Whether the input text can be copied.<br>Default value: **CopyOptions.LocalDevice** |

## customKeyboard

```TypeScript
customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions)
```

Sets the custom keyboard.

When a custom keyboard is set, activating the text box opens the specified custom component, instead of the system input method.

The custom keyboard's height can be set through the **height** attribute of the custom component's root node, and its width is fixed at the default value.

The custom keyboard is presented by overlaying the original screen. It is not compressed or lifted if avoid mode is not enabled or avoidance is not needed for the text box.

The custom keyboard cannot obtain focus, but it blocks gesture events.

By default, the custom keyboard is closed when the input component loses focus. You can also use the [stopEditing](arkts-arkui-search-searchcontroller-c.md#stopediting-1) API to close the keyboard.

When setting a custom keyboard, you can bind the [onKeyPreIme](arkts-arkui-common-commonmethod-c.md#onkeypreime-1) event to prevent input from the physical keyboard.

From API version 23, the [setCustomKeyboardContinueFeature](../../../../reference/apis-arkui/arkts-apis-uicontext-uicontext.md#setcustomkeyboardcontinuefeature23)API can be used to enable the continuation feature for custom keyboards. When switching between custom keyboards,the system changes the keyboard directly without triggering the close and open animations.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): SearchAttribute--><!--Device-SearchAttribute-customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | CustomBuilder \| ComponentContent \| undefined | Yes | Custom keyboard. If the value is **undefined**, the custom keyboard is closed.<br>**Since:** 22 |
| options | [KeyboardOptions](arkts-arkui-rich-editor-keyboardoptions-i.md) | No | Whether to support keyboard avoidance.<br>**Since:** 12 |

## decoration

```TypeScript
decoration(value: TextDecorationOptions)
```

Sets the color, type, and style of the text decorative line.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-decoration(value: TextDecorationOptions): SearchAttribute--><!--Device-SearchAttribute-decoration(value: TextDecorationOptions): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextDecorationOptions](arkts-arkui-common-textdecorationoptions-i.md) | Yes | Text decorative line options.<br>Default value: {<br> type:TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>} |

## dividerColor

```TypeScript
dividerColor(color: Optional<ColorMetrics>)
```

Sets the color of the text box divider.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-SearchAttribute-dividerColor(color: Optional<ColorMetrics>): SearchAttribute--><!--Device-SearchAttribute-dividerColor(color: Optional<ColorMetrics>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](arkts-arkui-optional-t.md)<ColorMetrics> | Yes | Divider color.<br>By default, system theme colors are used: 0x33000000 in light mode (appears as light black), 0x33FFFFFF in dark mode (appears as light white). |

## editMenuOptions

```TypeScript
editMenuOptions(editMenu: EditMenuOptions)
```

Sets the extended options of the custom menu, including the text content, icon, and callback.

When [disableMenuItems](../../../../reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or

[disableSystemServiceMenuItems](../../../../reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)is used to disable system service menu items in the text selection menu, the disabled menu options will be excluded from the parameter list in the [onCreateMenu](../arkts-apis/arkts-arkui-text-common-editmenuoptions-i.md#oncreatemenu-1) callback of **editMenuOptions**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-editMenuOptions(editMenu: EditMenuOptions): SearchAttribute--><!--Device-SearchAttribute-editMenuOptions(editMenu: EditMenuOptions): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | [EditMenuOptions](../arkts-apis/arkts-arkui-text-common-editmenuoptions-i.md) | Yes | Extended options of the custom menu. |

## enableAutoSpacing

```TypeScript
enableAutoSpacing(enabled: Optional<boolean>)
```

Sets whether to enable automatic spacing between Chinese and Western characters.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-SearchAttribute-enableAutoSpacing(enabled: Optional<boolean>): SearchAttribute--><!--Device-SearchAttribute-enableAutoSpacing(enabled: Optional<boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether to enable automatic spacing between Chinese and Western characters.<br>**true**: Enabled. **false**: Disabled.<br>Default value: **false** |

## enableHapticFeedback

```TypeScript
enableHapticFeedback(isEnabled: boolean)
```

Specifies whether to enable haptic feedback.

To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under **requestPermissions** in the [module.json5](../../../../quick-start/module-configuration-file.md) file of the project.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-SearchAttribute-enableHapticFeedback(isEnabled: boolean): SearchAttribute--><!--Device-SearchAttribute-enableHapticFeedback(isEnabled: boolean): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to enable haptic feedback.<br>**true**: Haptic feedback is enabled.**false**: Haptic feedback is disabled.<br>Default value: **true** |

## enableKeyboardOnFocus

```TypeScript
enableKeyboardOnFocus(value: boolean)
```

Sets whether to pop up the soft keyboard when the **Search** component obtains focus in a way other than clicking.

Since API version 10, the **Search** component is bound to the input method by default when it obtains focus.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-enableKeyboardOnFocus(value: boolean): SearchAttribute--><!--Device-SearchAttribute-enableKeyboardOnFocus(value: boolean): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to automatically pop up the soft keyboard when the **Search** component gains focus.<br>**true**: The soft keyboard pops up. **false**: The soft keyboard does not pop up.<br>Default value:**true** |

## enablePreviewText

```TypeScript
enablePreviewText(enable: boolean)
```

Sets whether to enable preview text.

The preview content is defined as a temporary, uncommitted input state. Currently, the text interception function is not supported.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-enablePreviewText(enable: boolean): SearchAttribute--><!--Device-SearchAttribute-enablePreviewText(enable: boolean): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable preview text.<br>**true**: Preview text is enabled. **false**:Preview text is disabled.<br>Default value: **true** |

## enableSelectedDataDetector

```TypeScript
enableSelectedDataDetector(enable: boolean | undefined)
```

Sets whether to enable entity recognition for selected text. This API only works on devices that provide text recognition.

When **enableSelectedDataDetector** is set to **true**, all entity types are recognized by default.

This feature is only effective when [CopyOptions](../../apis-core-file-kit/arkts-apis/arkts-corefile-file-fs-copyoptions-i.md) is set to **CopyOptions.LocalDevice** or **CopyOptions.CrossDevice**.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-SearchAttribute-enableSelectedDataDetector(enable: boolean | undefined): SearchAttribute--><!--Device-SearchAttribute-enableSelectedDataDetector(enable: boolean | undefined): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean \| undefined | Yes | Whether to enable entity recognition for selected text.<br>**true**: Entity recognition is enabled. **false**: Entity recognition is disabled. Default value: **true** |

## enterKeyType

```TypeScript
enterKeyType(value: EnterKeyType)
```

Sets the type of the Enter key.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-enterKeyType(value: EnterKeyType): SearchAttribute--><!--Device-SearchAttribute-enterKeyType(value: EnterKeyType): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [EnterKeyType](arkts-arkui-text-input-enterkeytype-e.md) | Yes | Type of the Enter key.<br>Default value: **EnterKeyType.Search** |

## fallbackLineSpacing

```TypeScript
fallbackLineSpacing(enabled: Optional<boolean>)
```

Adapts the line height to the actual text height for overlapped multi-line text. This API takes effect only when the line height is less than the actual text height. If this API is not set, the line height does not adapt to the actual text height by default.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-SearchAttribute-fallbackLineSpacing(enabled: Optional<boolean>): SearchAttribute--><!--Device-SearchAttribute-fallbackLineSpacing(enabled: Optional<boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether the line height is adapted to the actual text height.<br>**true**:Line height is adapted to the actual text height. **false**: Line height is not adapted to the actual text height. |

## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color of the input text. **fontSize**, **fontStyle**, **fontWeight**, and **fontFamily** are set in the [textFont](SearchAttribute#textFont) attribute.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-fontColor(value: ResourceColor): SearchAttribute--><!--Device-SearchAttribute-fontColor(value: ResourceColor): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color of the input text.<br>Default value: **'#FF182431'**<br>Default value on wearable devices: **'#dbffffff' ** |

## fontFeature

```TypeScript
fontFeature(value: string)
```

Sets the font feature, for example, monospaced digits.

Format: normal \| \<feature-tag-value\>

Format of **\<feature-tag-value\>**: \<string\> \[ \<integer\> \| on \| off ]

There can be multiple **\<feature-tag-value\>** values, which are separated by commas (,).

For example, the input format for monospaced clock fonts is "ss01" on.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-fontFeature(value: string): SearchAttribute--><!--Device-SearchAttribute-fontFeature(value: string): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Font feature. |

## halfLeading

```TypeScript
halfLeading(halfLeading: Optional<boolean>)
```

Enables half leading for text, which splits the leading equally between the top and bottom of the line.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchAttribute-halfLeading(halfLeading: Optional<boolean>): SearchAttribute--><!--Device-SearchAttribute-halfLeading(halfLeading: Optional<boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| halfLeading | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether half leading is enabled. Half leading refers to splitting the leading in half and applying it equally to the top and bottom of the line.<br>**true**: Half leading is enabled. **false**: Half leading is not enabled.<br>Default value: **false** |

## includeFontPadding

```TypeScript
includeFontPadding(include: Optional<boolean>)
```

Sets whether to add spacing to the first and last lines to avoid text truncation. If this attribute is not set, no spacing is added by default.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-SearchAttribute-includeFontPadding(include: Optional<boolean>): SearchAttribute--><!--Device-SearchAttribute-includeFontPadding(include: Optional<boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| include | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether to add spacing to the first and last lines to avoid text truncation.<br>**true**: Spacing is added to the first and last lines. **false**: Spacing is not added to the first and last lines. |

## inputFilter

```TypeScript
inputFilter(value: ResourceStr, error?: Callback<string>)
```

Sets the regular expression for input filtering. Only inputs that comply with the regular expression can be displayed. Other inputs are filtered out.

For single-character input scenarios, only single-character matching is supported; for multi-character input scenarios (such as pasting), string matching is supported.

If **inputFilter** is set and the entered characters are not null, the filtering effect attached to the text box type (specified through the **type** attribute) does not take effect.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-inputFilter(value: ResourceStr, error?: Callback<string>): SearchAttribute--><!--Device-SearchAttribute-inputFilter(value: ResourceStr, error?: Callback<string>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) | Yes | Regular expression. |
| error | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<string> | No | Filtered-out content to return when regular expression matching fails. |

## keyboardAppearance

```TypeScript
keyboardAppearance(appearance: Optional<KeyboardAppearance>)
```

Sets the keyboard appearance for the text box. This setting takes effect only after input method adaptation. For details, see [Immersive Mode of the Input Method Application](../../../../inputmethod/inputmethod-immersive-mode-guide.md).

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-SearchAttribute-keyboardAppearance(appearance: Optional<KeyboardAppearance>): SearchAttribute--><!--Device-SearchAttribute-keyboardAppearance(appearance: Optional<KeyboardAppearance>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appearance | [Optional](arkts-arkui-optional-t.md)<KeyboardAppearance> | Yes | Appearance of the keyboard.<br>Default value:**KeyboardAppearance.NONE_IMMERSIVE** |

## letterSpacing

```TypeScript
letterSpacing(value: number | string | Resource)
```

Sets the letter spacing for a text style. If the value specified is a percentage or **0**, the default value is used. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

If the value specified is a negative value, the text is compressed. A negative value too small may result in the text being compressed to 0 and no content being displayed.

This setting applies to every character, including those at line endings.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-letterSpacing(value: number | string | Resource): SearchAttribute--><!--Device-SearchAttribute-letterSpacing(value: number | string | Resource): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Letter spacing.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

## lineHeight

```TypeScript
lineHeight(value: number | string | Resource)
```

Sets the text line height. If the value is less than or equal to **0**, the line height is not limited and the font size is adaptive. If the value is of the number type, the unit fp is used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-lineHeight(value: number | string | Resource): SearchAttribute--><!--Device-SearchAttribute-lineHeight(value: number | string | Resource): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Text line height. |

## maxFontScale

```TypeScript
maxFontScale(scale: Optional<number|Resource>)
```

Sets the maximum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchAttribute-maxFontScale(scale: Optional<number|Resource>): SearchAttribute--><!--Device-SearchAttribute-maxFontScale(scale: Optional<number|Resource>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | [Optional](arkts-arkui-optional-t.md)<number\|Resource> | Yes | Maximum font scale factor for text. The **undefined** type is supported.<br>Value range:[1, +∞)<br>**NOTE**<br>A value less than 1 is handled as **1**. Abnormal values are ineffective by default.<br>After the **maxFontScale** attribute is set, the content of the **Search** component can be scaled up to 2 times at most.<br>Before use, you need to configure the [configuration.json](../../../../quick-start/app-configuration-file.md#tags-in-the-configuration-file) and [app.json5](../../../../quick-start/app-configuration-file.md) files in the project. For details, see [Example 19: Setting the Minimum and Maximum Font Scale Factors](../../../../reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-19-setting-the-minimum-and-maximum-font-scale-factors). |

## maxFontSize

```TypeScript
maxFontSize(value: number | string | Resource)
```

Sets the maximum font size. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

For the setting to take effect, this attribute must be used together with [minFontSize](SearchAttribute#minFontSize) or layout constraint settings.

When the adaptive font size is used, the **fontSize** settings do not take effect.

If **maxFontSize** is less than or equal to 0 or **maxFontSize** is less than **minFontSize**, the adaptive font size does not take effect. In this case, the value of **size** in the [textFont](SearchAttribute#textFont)attribute takes effect. If **size** is not set, the default value applies.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-maxFontSize(value: number | string | Resource): SearchAttribute--><!--Device-SearchAttribute-maxFontSize(value: number | string | Resource): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Maximum font size.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

## maxLength

```TypeScript
maxLength(value: number)
```

Sets the maximum number of characters for text input. By default, there is no maximum number of characters. When the maximum number is reached, no more characters can be entered.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-maxLength(value: number): SearchAttribute--><!--Device-SearchAttribute-maxLength(value: number): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of characters for text input.<br> When the value is less than 0, the default value is used and no limit is applied. |

## minFontScale

```TypeScript
minFontScale(scale: Optional<number|Resource>)
```

Sets the minimum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-SearchAttribute-minFontScale(scale: Optional<number|Resource>): SearchAttribute--><!--Device-SearchAttribute-minFontScale(scale: Optional<number|Resource>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | [Optional](arkts-arkui-optional-t.md)<number\|Resource> | Yes | Minimum font scale factor for text. The **undefined** type is supported.<br>Value range: [0, 1]<br>**NOTE**<br>A value less than 0 is handled as **0**. A value greater than1 is handled as **1**. Abnormal values are ineffective by default.<br>Before use, you need to configure the [configuration.json](../../../../quick-start/app-configuration-file.md#tags-in-the-configuration-file) and [app.json5](../../../../quick-start/app-configuration-file.md) files in the project. For details, see [Example 19: Setting the Minimum and Maximum Font Scale Factors](../../../../reference/apis-arkui/arkui-ts/ts-basic-components-search.md#example-19-setting-the-minimum-and-maximum-font-scale-factors). |

## minFontSize

```TypeScript
minFontSize(value: number | string | Resource)
```

Sets the minimum font size. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

For the setting to take effect, this attribute must be used together with [maxFontSize](SearchAttribute#maxFontSize) or layout constraint settings.

When the adaptive font size is used, the **fontSize** settings do not take effect.

If **minFontSize** is less than or equal to 0, the adaptive font size does not take effect. In this case, the value of **size** in the [textFont](SearchAttribute#textFont) attribute takes effect. If **size** is not set, the default value applies.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-minFontSize(value: number | string | Resource): SearchAttribute--><!--Device-SearchAttribute-minFontSize(value: number | string | Resource): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Minimum font size.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

## onChange

```TypeScript
onChange(callback: EditableTextOnChangeCallback)
```

Called when the input in the text box changes.

In this callback, if caret operations are performed, you must adjust the caret logic based on the **previewText** parameter to ensure it works seamlessly within the preview display scenario.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-onChange(callback: EditableTextOnChangeCallback): SearchAttribute--><!--Device-SearchAttribute-onChange(callback: EditableTextOnChangeCallback): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [EditableTextOnChangeCallback](../arkts-apis/arkts-arkui-editabletextonchangecallback-t.md) | Yes | Callback invoked when the input in the text box changes.<br>**Since:** 12 |

## onContentScroll

```TypeScript
onContentScroll(callback: OnContentScrollCallback)
```

Called when the text content is scrolled.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-onContentScroll(callback: OnContentScrollCallback): SearchAttribute--><!--Device-SearchAttribute-onContentScroll(callback: OnContentScrollCallback): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnContentScrollCallback](../arkts-apis/arkts-arkui-oncontentscrollcallback-t.md) | Yes | Callback for text content scrolling.<br>**Since:** 18 |

## onCopy

```TypeScript
onCopy(callback: Callback<string>)
```

Called when a copy operation is performed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-onCopy(callback: Callback<string>): SearchAttribute--><!--Device-SearchAttribute-onCopy(callback: Callback<string>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<string> | Yes | Callback used to return the copied text content.<br>**Since:** 18 |

## onCut

```TypeScript
onCut(callback: Callback<string>)
```

Called when a cut operation is performed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-onCut(callback: Callback<string>): SearchAttribute--><!--Device-SearchAttribute-onCut(callback: Callback<string>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<string> | Yes | Callback used to return the cut text content.<br>**Since:** 18 |

## onDidDelete

```TypeScript
onDidDelete(callback: Callback<DeleteValue>)
```

Called when text is deleted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-onDidDelete(callback: Callback<DeleteValue>): SearchAttribute--><!--Device-SearchAttribute-onDidDelete(callback: Callback<DeleteValue>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<DeleteValue> | Yes | Callback invoked when text is deleted.<br>It is available only for system input methods. |

## onDidInsert

```TypeScript
onDidInsert(callback: Callback<InsertValue>)
```

Called when text is inserted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-onDidInsert(callback: Callback<InsertValue>): SearchAttribute--><!--Device-SearchAttribute-onDidInsert(callback: Callback<InsertValue>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<InsertValue> | Yes | Callback invoked when text is inserted.<br>It is available only for system input methods. |

## onEditChange

```TypeScript
onEditChange(callback: Callback<boolean>)
```

Called when the input state changes. The text box is in the editing state when it has the caret placed in it, and is in the non-editing state otherwise.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-onEditChange(callback: Callback<boolean>): SearchAttribute--><!--Device-SearchAttribute-onEditChange(callback: Callback<boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<boolean> | Yes | Callback for editing state changes. The value **true** indicates that the text is being inserted, and **false** indicates that the text box is out of focus and text cannot be inserted. |

## onPaste

```TypeScript
onPaste(callback: OnPasteCallback)
```

Called when a paste operation is performed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-onPaste(callback: OnPasteCallback): SearchAttribute--><!--Device-SearchAttribute-onPaste(callback: OnPasteCallback): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnPasteCallback](../arkts-apis/arkts-arkui-onpastecallback-t.md) | Yes | Executed when a paste operation is performed.Callback used to return the pasted text content.<br>**Since:** 18 |

## onSubmit

```TypeScript
onSubmit(callback: Callback<string>)
```

Called when the search icon, search button, or soft keyboard search button is clicked.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-onSubmit(callback: Callback<string>): SearchAttribute--><!--Device-SearchAttribute-onSubmit(callback: Callback<string>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<string> | Yes | Search submission callback, which returns the text content currently in the search box.<br>**Since:** 18 |

## onSubmit

```TypeScript
onSubmit(callback: SearchSubmitCallback)
```

Invoked when the search icon, search button, or soft keyboard search button is clicked. The submission event provides a method to maintain the edit state of the **Search** component.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-SearchAttribute-onSubmit(callback: SearchSubmitCallback): SearchAttribute--><!--Device-SearchAttribute-onSubmit(callback: SearchSubmitCallback): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [SearchSubmitCallback](arkts-arkui-searchsubmitcallback-t.md) | Yes | Callback invoked when the search icon, search button, or soft keyboard search button is clicked. |

## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: OnTextSelectionChangeCallback)
```

Called when the text selection changes or the caret position changes during editing.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-onTextSelectionChange(callback: OnTextSelectionChangeCallback): SearchAttribute--><!--Device-SearchAttribute-onTextSelectionChange(callback: OnTextSelectionChangeCallback): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnTextSelectionChangeCallback](arkts-arkui-ontextselectionchangecallback-t.md) | Yes | Callback for text selection changes or caret position changes.<br>**Since:** 18 |

## onWillAttachIME

```TypeScript
onWillAttachIME(callback: Callback<IMEClient>)
```

Called when the search box is about to be bound to an input method.

<!--Del-->

Before the search box is bound to an input method, you can use the [setKeyboardAppearanceConfig](../arkts-apis/arkts-arkui-arkui-uicontext-uicontext-c-sys.md#setkeyboardappearanceconfig-1) API of **UIContext** to set the keyboard style.<!--DelEnd-->

From API version 22, the [setExtraConfig](../arkts-apis/arkts-arkui-text-common-imeclient-i.md#setextraconfig-1) method of [IMEClient](../arkts-apis/arkts-arkui-text-common-imeclient-i.md)can be called to set input method extension information. After the input method is bound, it receives this extension information, which can be used to implement custom functionality.

**IMEClient** is valid only during the execution of **onWillAttachIME** and cannot be called asynchronously.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-SearchAttribute-onWillAttachIME(callback: Callback<IMEClient>): SearchAttribute--><!--Device-SearchAttribute-onWillAttachIME(callback: Callback<IMEClient>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<IMEClient> | Yes | Called when the search box is about to be bound to an input method. |

## onWillChange

```TypeScript
onWillChange(callback: Callback<EditableTextChangeValue, boolean>)
```

Called when the text content is about to change.

This callback is triggered after **onWillInsert** and **onWillDelete**, but before **onDidInsert** and **onDidDelete**.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-SearchAttribute-onWillChange(callback: Callback<EditableTextChangeValue, boolean>): SearchAttribute--><!--Device-SearchAttribute-onWillChange(callback: Callback<EditableTextChangeValue, boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<EditableTextChangeValue, boolean> | Yes | Callback invoked when the text content is about to change.<br>Returning **true** allows the change to proceed, while returning **false** cancels the change. |

## onWillCopy

```TypeScript
onWillCopy(callback: Callback<string, boolean>)
```

Called before using the Clipboard copy menu.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SearchAttribute-onWillCopy(callback: Callback<string, boolean>): SearchAttribute--><!--Device-SearchAttribute-onWillCopy(callback: Callback<string, boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<string, boolean> | Yes | Callback used to check whether copy is allowed. |

## onWillCut

```TypeScript
onWillCut(callback: Callback<string, boolean>)
```

Called before using the Clipboard cut menu.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SearchAttribute-onWillCut(callback: Callback<string, boolean>): SearchAttribute--><!--Device-SearchAttribute-onWillCut(callback: Callback<string, boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<string, boolean> | Yes | Callback used to check whether cut is allowed. |

## onWillDelete

```TypeScript
onWillDelete(callback: Callback<DeleteValue, boolean>)
```

Called when text is about to be deleted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-onWillDelete(callback: Callback<DeleteValue, boolean>): SearchAttribute--><!--Device-SearchAttribute-onWillDelete(callback: Callback<DeleteValue, boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<DeleteValue, boolean> | Yes | Callback invoked when text is about to be deleted.<br>It returns **true** if the text is deleted; returns **false** otherwise.<br>This callback is not invoked for text preview.<br>It is available only for system input methods. |

## onWillInsert

```TypeScript
onWillInsert(callback: Callback<InsertValue, boolean>)
```

Called when text is about to be inserted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-onWillInsert(callback: Callback<InsertValue, boolean>): SearchAttribute--><!--Device-SearchAttribute-onWillInsert(callback: Callback<InsertValue, boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<InsertValue, boolean> | Yes | Callback invoked when text is about to be inserted.<br>It returns **true** if the text is inserted; returns **false** otherwise.<br>This callback is not invoked for pre-edit or candidate word operations.<br>It is available only for system input methods. |

## placeholderColor

```TypeScript
placeholderColor(value: ResourceColor)
```

Sets the placeholder text color. The default value on wearable devices is **'#99ffffff'**.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-placeholderColor(value: ResourceColor): SearchAttribute--><!--Device-SearchAttribute-placeholderColor(value: ResourceColor): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Placeholder text color.<br>Default value: **'#99182431'** |

## placeholderFont

```TypeScript
placeholderFont(value?: Font)
```

Placeholder text style, including the font size, font weight, font family, and font style.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-placeholderFont(value?: Font): SearchAttribute--><!--Device-SearchAttribute-placeholderFont(value?: Font): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | No | Placeholder text style. |

## searchButton

```TypeScript
searchButton(value: ResourceStr, option?: SearchButtonOptions)
```

Sets the text on the search button located next to the search text box.

Clicking the search button triggers both **onSubmit** and **onClick** callbacks.

The default font size on wearable devices is 18 fp.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-searchButton(value: ResourceStr, option?: SearchButtonOptions): SearchAttribute--><!--Device-SearchAttribute-searchButton(value: ResourceStr, option?: SearchButtonOptions): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) | Yes | Text on the search button located next to the search text box.<br>The Resource type is supported since API version 20.<br>**Since:** 20 |
| option | [SearchButtonOptions](arkts-arkui-search-searchbuttonoptions-i.md) | No | Text style of the search button located next to the search text box.<br>Default value:<br>{<br>fontSize: '16fp',<br>fontColor: '#ff3f97e9'<br>}<br>**Since:** 10 |

## searchIcon

```TypeScript
searchIcon(value: IconOptions | SymbolGlyphModifier)
```

Sets the style of the search icon on the left.

The default icon size on wearable devices is 16 vp.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-searchIcon(value: IconOptions | SymbolGlyphModifier): SearchAttribute--><!--Device-SearchAttribute-searchIcon(value: IconOptions | SymbolGlyphModifier): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | IconOptions \| SymbolGlyphModifier | Yes | Style of the search icon on the left.&lt;!--RP1--&gt;<br>Default value in light mode:<br>{<br>size: '16vp',<br>color: '#99182431',<br>src: ' '<br>}<br>Default value in dark mode:<br>{<br>size: '16vp',<br>color: '#99ffffff',<br>src: ' '<br>} &lt;!--RP1End--&gt;<br>**Since:** 12 |

## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(value: ResourceColor)
```

Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-selectedBackgroundColor(value: ResourceColor): SearchAttribute--><!--Device-SearchAttribute-selectedBackgroundColor(value: ResourceColor): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Background color of the selected text. |

## selectedDragPreviewStyle

```TypeScript
selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)
```

Sets the drag preview style for text being dragged in the search box.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-SearchAttribute-selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): SearchAttribute--><!--Device-SearchAttribute-selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SelectedDragPreviewStyle \| undefined | Yes | Drag preview style for text being dragged in the search box.<br>If this parameter is set to **undefined**, the drag preview follows the theme: white in light mode and black in dark mode. |

## selectionMenuHidden

```TypeScript
selectionMenuHidden(value: boolean)
```

Sets whether to hide the system text selection menu.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-selectionMenuHidden(value: boolean): SearchAttribute--><!--Device-SearchAttribute-selectionMenuHidden(value: boolean): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to hide the system text selection menu.<br>**true**: Tapping, long-pressing,double-tapping, triple-tapping, or right-clicking the text box will not trigger the system text selection menu.<br>**false**: Tapping, long-pressing, double-tapping, triple-tapping, or right-clicking the text box will trigger the system text selection menu.<br>Default value: **false** |

## shaderStyle

```TypeScript
shaderStyle(shader: ShaderStyle | undefined)
```

Set the shader style of the text, such as lineargradient or radialgradient.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SearchAttribute-shaderStyle(shader: ShaderStyle | undefined): SearchAttribute--><!--Device-SearchAttribute-shaderStyle(shader: ShaderStyle | undefined): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | ShaderStyle \| undefined | Yes | The shader style of the text.Passing `undefined` resets it to the default value. |

## stopBackPress

```TypeScript
stopBackPress(isStopped: Optional<boolean>)
```

Sets whether to prevent the back key event from being propagated.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-SearchAttribute-stopBackPress(isStopped: Optional<boolean>): SearchAttribute--><!--Device-SearchAttribute-stopBackPress(isStopped: Optional<boolean>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isStopped | [Optional](arkts-arkui-optional-t.md)<boolean> | Yes | Whether to prevent the back key event from being propagated.<br>**true**:Propagation is prevented. **false**: Propagation is allowed.<br>Default value: **true** The default value is used for abnormal values. |

## strokeColor

```TypeScript
strokeColor(color: Optional<ResourceColor>)
```

Sets the text stroke color.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-SearchAttribute-strokeColor(color: Optional<ResourceColor>): SearchAttribute--><!--Device-SearchAttribute-strokeColor(color: Optional<ResourceColor>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](arkts-arkui-optional-t.md)<ResourceColor> | Yes | Stroke color. Default value: font color. Invalid values are treated as the default value. |

## strokeJoinStyle

```TypeScript
strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined)
```

Set the join style of the stroke.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SearchAttribute-strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): SearchAttribute--><!--Device-SearchAttribute-strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strokeJoinStyle | StrokeJoinStyle \| undefined | Yes | The join style of stroke.Passing `undefined` resets it to the default value |

## strokeWidth

```TypeScript
strokeWidth(width: Optional<LengthMetrics>)
```

Sets the text stroke width.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-SearchAttribute-strokeWidth(width: Optional<LengthMetrics>): SearchAttribute--><!--Device-SearchAttribute-strokeWidth(width: Optional<LengthMetrics>): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | [Optional](arkts-arkui-optional-t.md)<LengthMetrics> | Yes | Text stroke width. When the unit of **LengthMetrics** is px:<br>Values &lt;0: solid text.<br>Values &gt; 0: outlined text.<br>Default value: **0** (no stroke) |

## textAlign

```TypeScript
textAlign(value: TextAlign)
```

Sets the text alignment mode in the search text box. Currently, the following alignment modes are supported:**TextAlign.Start**, **TextAlign.Center**, **TextAlign.End**, **TextAlign.LEFT**, and **TextAlign.RIGHT**.**TextAlign.JUSTIFY** behaves the same as **TextAlign.Start**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-textAlign(value: TextAlign): SearchAttribute--><!--Device-SearchAttribute-textAlign(value: TextAlign): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextAlign](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textalign-e.md) | Yes | Text alignment mode in the search text box.<br>Default value: **TextAlign.Start** |

## textDirection

```TypeScript
textDirection(direction: TextDirection | undefined)
```

Specifies the text layout direction. If this attribute is not set, the default text layout direction follows the component layout direction.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-SearchAttribute-textDirection(direction: TextDirection | undefined): SearchAttribute--><!--Device-SearchAttribute-textDirection(direction: TextDirection | undefined): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | TextDirection \| undefined | Yes | Defines the text layout direction.<br>If this parameter is set to **undefined**, the text layout direction follows the component layout direction as defined by **TextDirection.DEFAULT**. |

## textFont

```TypeScript
textFont(value?: Font)
```

Style of the text entered in the search box, including the font size, font weight, font family, and font style.

The default font size on wearable devices is 18 fp.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-SearchAttribute-textFont(value?: Font): SearchAttribute--><!--Device-SearchAttribute-textFont(value?: Font): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | No | Text font of the search text box. |

## textIndent

```TypeScript
textIndent(value: Dimension)
```

Sets the indent of the first line text.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-textIndent(value: Dimension): SearchAttribute--><!--Device-SearchAttribute-textIndent(value: Dimension): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Dimension](../arkts-apis/arkts-arkui-dimension-t.md) | Yes | Indent of the first line text.<br>Default value: **0** |

## type

```TypeScript
type(value: SearchType)
```

Sets the text box type.

Different **SearchType** values trigger corresponding keyboard types and enforce input restrictions.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-SearchAttribute-type(value: SearchType): SearchAttribute--><!--Device-SearchAttribute-type(value: SearchType): SearchAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SearchType](arkts-arkui-search-searchtype-e.md) | Yes | Text box type.<br>Default value: **SearchType.NORMAL** |

