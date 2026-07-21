# TextInput properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** TextInputAttribute extends [CommonMethod<TextInputAttribute>](CommonMethod<TextInputAttribute>)

**Since:** 7

<!--Device-unnamed-declare class TextInputAttribute extends CommonMethod<TextInputAttribute>--><!--Device-unnamed-declare class TextInputAttribute extends CommonMethod<TextInputAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="autocapitalizationmode"></a>
## autoCapitalizationMode

```TypeScript
autoCapitalizationMode(mode: AutoCapitalizationMode)
```

Sets the auto-capitalization text mode. This API provides the capability, but actual implementation depends on the input method application.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextInputAttribute-autoCapitalizationMode(mode: AutoCapitalizationMode): TextInputAttribute--><!--Device-TextInputAttribute-autoCapitalizationMode(mode: AutoCapitalizationMode): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [AutoCapitalizationMode](../arkts-apis/arkts-arkui-autocapitalizationmode-e.md) | Yes | Auto-capitalization mode. The default state is inactive. |

<a id="barstate"></a>
## barState

```TypeScript
barState(value: BarState)
```

Sets the scrollbar display mode for the inline style in the editing state.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-barState(value: BarState): TextInputAttribute--><!--Device-TextInputAttribute-barState(value: BarState): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BarState](../arkts-apis/arkts-arkui-barstate-e.md) | Yes | Scrollbar display mode for the inline style in the editing state.<br>Default value:**BarState.Auto** |

<a id="cancelbutton"></a>
## cancelButton

```TypeScript
cancelButton(options: CancelButtonOptions)
```

Sets the style of the cancel button on the right. Only icons of the image type are supported. The [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is not supported. For details, see [Example 4 Customizing the Cancel Button Style on the Right](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-4-customizing-the-cancel-button-style-on-the-right).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-cancelButton(options: CancelButtonOptions): TextInputAttribute--><!--Device-TextInputAttribute-cancelButton(options: CancelButtonOptions): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [CancelButtonOptions](arkts-arkui-cancelbuttonoptions-i.md) | Yes | Options of the cancel button on the right.<br>Default value:<br>{<br>style: CancelButtonStyle.INPUT<br>}<br>Default value on wearables: **28vp**<br>**Since:** 18 |

<a id="cancelbutton-1"></a>
## cancelButton

```TypeScript
cancelButton(symbolOptions: CancelButtonSymbolOptions)
```

Sets the style of the cancel button on the right. Only symbol-type icons are supported. The [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is not supported. For details, see [Example 15: Setting a Symbol-Type Cancel Button](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-15-setting-a-symbol-type-cancel-button).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextInputAttribute-cancelButton(symbolOptions: CancelButtonSymbolOptions): TextInputAttribute--><!--Device-TextInputAttribute-cancelButton(symbolOptions: CancelButtonSymbolOptions): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbolOptions | [CancelButtonSymbolOptions](arkts-arkui-cancelbuttonsymboloptions-i.md) | Yes | Style of the cancel button on the right.<br>Default value:<br>{<br>style: CancelButtonStyle.INPUT<br>} |

<a id="caretcolor"></a>
## caretColor

```TypeScript
caretColor(value: ResourceColor)
```

Sets the color of the caret in the text box.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-caretColor(value: ResourceColor): TextInputAttribute--><!--Device-TextInputAttribute-caretColor(value: ResourceColor): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Color of the caret in the text box.<br>Default value: **'#007DFF'** |

<a id="caretposition"></a>
## caretPosition

```TypeScript
caretPosition(value: number)
```

Sets the caret position.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-caretPosition(value: number): TextInputAttribute--><!--Device-TextInputAttribute-caretPosition(value: number): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Caret position.<br>The position before the first character is 0. |

<a id="caretstyle"></a>
## caretStyle

```TypeScript
caretStyle(value: CaretStyle)
```

Sets the caret style.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-caretStyle(value: CaretStyle): TextInputAttribute--><!--Device-TextInputAttribute-caretStyle(value: CaretStyle): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CaretStyle](../arkts-apis/arkts-arkui-caretstyle-i.md) | Yes | Caret style. |

<a id="compressleadingpunctuation"></a>
## compressLeadingPunctuation

```TypeScript
compressLeadingPunctuation(enabled: Optional<boolean>)
```

Sets whether to enable leading punctuation compression.

> **NOTE**  
>  
> - Leading punctuation is not compressed by default.  
>  
> - For the range of punctuation marks that support leading compression, see  
> [ParagraphStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-paragraphstyle-i.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextInputAttribute-compressLeadingPunctuation(enabled: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-compressLeadingPunctuation(enabled: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable leading punctuation compression.<br>**true**: Leading punctuation compression is enabled. **false**: Leading punctuation compression is disabled. |

<a id="contenttype"></a>
## contentType

```TypeScript
contentType(value: ContentType)
```

Sets the content type for autofill.<!--RP7--><!--RP7End-->

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-contentType(value: ContentType): TextInputAttribute--><!--Device-TextInputAttribute-contentType(value: ContentType): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ContentType](../../apis-audio-kit/arkts-apis/arkts-audio-audio-contenttype-e.md) | Yes | Content type for autofill. |

<a id="copyoption"></a>
## copyOption

```TypeScript
copyOption(value: CopyOptions)
```

Sets whether the input text can be copied. If this attribute is set to **CopyOptions.None**, only paste and select all operations are supported.

If this attribute is set to **CopyOptions.None**, drag and drop operations are not supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-copyOption(value: CopyOptions): TextInputAttribute--><!--Device-TextInputAttribute-copyOption(value: CopyOptions): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CopyOptions](../arkts-apis/arkts-arkui-copyoptions-e.md) | Yes | Whether the input text can be copied.<br>Default value: **CopyOptions.LocalDevice** |

<a id="customkeyboard"></a>
## customKeyboard

```TypeScript
customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions)
```

Sets a custom keyboard.

When a custom keyboard is set, activating the text box opens the specified custom component, instead of the system input method.

The custom keyboard's height can be set through the **height** attribute of the custom component's root node, and its width is fixed at the default value.

The custom keyboard is presented by overlaying the original screen, which is not compressed or lifted if avoid mode is not enabled or avoidance is not needed for the text box.

The custom keyboard cannot obtain the focus, but it blocks gesture events.

By default, the custom keyboard is closed when the input component loses the focus. You can also use the [TextInputController](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#textinputcontroller8).[stopEditing](arkts-arkui-textinputcontroller-c.md#stopediting-1) API to close the keyboard.

When setting a custom keyboard, you can bind the [onKeyPreIme](arkts-arkui-commonmethod-c.md#onkeypreime-1) event to prevent input from the physical keyboard.

From API version 23, the [setCustomKeyboardContinueFeature](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#setcustomkeyboardcontinuefeature23)API can be used to enable the continuation feature for custom keyboards. When switching between custom keyboards,the system changes the keyboard directly without triggering the close and open animations.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextInputAttribute--><!--Device-TextInputAttribute-customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CustomBuilder](arkts-arkui-custombuilder-t.md) \| ComponentContent \| undefined | Yes | Custom keyboard. If the value is **undefined**, the custom keyboard is closed.<br>**Since:** 22 |
| options | [KeyboardOptions](arkts-arkui-keyboardoptions-i.md) | No | Whether to support keyboard avoidance.<br>**Since:** 12 |

<a id="decoration"></a>
## decoration

```TypeScript
decoration(value: TextDecorationOptions)
```

Sets the color, type, and style of the text decorative line.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-decoration(value: TextDecorationOptions): TextInputAttribute--><!--Device-TextInputAttribute-decoration(value: TextDecorationOptions): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextDecorationOptions](arkts-arkui-textdecorationoptions-i.md) | Yes | Text decorative line options.<br>Default value: {<br> type:TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID,<br> thicknessScale: 1.0<br>} |

<a id="editmenuoptions"></a>
## editMenuOptions

```TypeScript
editMenuOptions(editMenu: EditMenuOptions)
```

Sets the extended options of the custom menu, including the text content, icon, and callback.

When [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or

[disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)is used to disable system service menu items in the text selection menu, the disabled menu options will be excluded from the parameter list in the [onCreateMenu](../arkts-apis/arkts-arkui-editmenuoptions-i.md#oncreatemenu-1) callback of **editMenuOptions**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-editMenuOptions(editMenu: EditMenuOptions): TextInputAttribute--><!--Device-TextInputAttribute-editMenuOptions(editMenu: EditMenuOptions): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | [EditMenuOptions](../arkts-apis/arkts-arkui-editmenuoptions-i.md) | Yes | Extended options of the custom menu. |

<a id="ellipsismode"></a>
## ellipsisMode

```TypeScript
ellipsisMode(mode: Optional<EllipsisMode>)
```

Sets the ellipsis position. The **ellipsisMode** attribute takes effect only in the [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style). It must be used together with **overflow** set to **TextOverflow.Ellipsis**. The **ellipsisMode** attribute does not take effect if set alone.

This attribute works normally in the non-editing state. In the editing state, **EllipsisMode.START** and **EllipsisMode.CENTER** take effect only when **maxLines** is set to **1**, while **EllipsisMode.END**,**EllipsisMode.MULTILINE_START**, and **EllipsisMode.MULTILINE_CENTER** take effect normally.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextInputAttribute-ellipsisMode(mode: Optional<EllipsisMode>): TextInputAttribute--><!--Device-TextInputAttribute-ellipsisMode(mode: Optional<EllipsisMode>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [Optional](arkts-arkui-optional-t.md)&lt;EllipsisMode&gt; | Yes | Ellipsis position.<br>Default value: **EllipsisMode.END** |

<a id="enableautofill"></a>
## enableAutoFill

```TypeScript
enableAutoFill(value: boolean)
```

Sets whether to enable autofill.<!--RP6--><!--RP6End-->

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-enableAutoFill(value: boolean): TextInputAttribute--><!--Device-TextInputAttribute-enableAutoFill(value: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable autofill.<br>**true** to enable; **false** otherwise.<br>Default value: **true** |

<a id="enableautofillanimation"></a>
## enableAutoFillAnimation

```TypeScript
enableAutoFillAnimation(enabled: Optional<boolean>)
```

Sets whether to enable the autofill animation.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextInputAttribute-enableAutoFillAnimation(enabled: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-enableAutoFillAnimation(enabled: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable the autofill animation.<br>**true** to enable; **false** otherwise.<br>Default value: **true**<br>**NOTE**<br>When enabled, the animation takes effect only for text boxes where [InputType](arkts-arkui-inputtype-e.md) is set to **Password**, **NEW_PASSWORD**, or **NUMBER_PASSWORD**. |

<a id="enableautospacing"></a>
## enableAutoSpacing

```TypeScript
enableAutoSpacing(enabled: Optional<boolean>)
```

Sets whether to enable automatic spacing between Chinese and Western characters.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextInputAttribute-enableAutoSpacing(enabled: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-enableAutoSpacing(enabled: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable automatic spacing between Chinese and Western characters.<br>**true** to enable, **false** otherwise.<br>Default value: **false** |

<a id="enablehapticfeedback"></a>
## enableHapticFeedback

```TypeScript
enableHapticFeedback(isEnabled: boolean)
```

Sets whether to enable haptic feedback.

To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under **requestPermissions** in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the project.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-TextInputAttribute-enableHapticFeedback(isEnabled: boolean): TextInputAttribute--><!--Device-TextInputAttribute-enableHapticFeedback(isEnabled: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to enable haptic feedback.<br>**true**: Haptic feedback is enabled.**false**: Haptic feedback is disabled.<br>Default value: **true** |

<a id="enablekeyboardonfocus"></a>
## enableKeyboardOnFocus

```TypeScript
enableKeyboardOnFocus(value: boolean)
```

Sets whether to pop up the soft keyboard when the **TextInput** component obtains focus in a way other than clicking.

Since API version 10, the **TextInput** component is bound to the input method by default when it obtains focus.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-enableKeyboardOnFocus(value: boolean): TextInputAttribute--><!--Device-TextInputAttribute-enableKeyboardOnFocus(value: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to pop up the soft keyboard when the **TextInput** component obtains focus in a way other than clicking.<br>**true**: The soft keyboard pops up. **false**: The soft keyboard does not pop up.<br>Default value: **false** for TV devices; **true** for other devices |

<a id="enablepreviewtext"></a>
## enablePreviewText

```TypeScript
enablePreviewText(enable: boolean)
```

Sets whether to enable preview text.

The preview content is defined as a temporary, uncommitted input state. Currently, the text interception function is not supported.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-enablePreviewText(enable: boolean): TextInputAttribute--><!--Device-TextInputAttribute-enablePreviewText(enable: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable preview text.<br>**true**: Preview text is enabled. **false**:Preview text is disabled.<br>Default value: **true** |

<a id="enableselecteddatadetector"></a>
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

<!--Device-TextInputAttribute-enableSelectedDataDetector(enable: boolean | undefined): TextInputAttribute--><!--Device-TextInputAttribute-enableSelectedDataDetector(enable: boolean | undefined): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean \| undefined | Yes | Whether to enable entity recognition for selected text.<br>**true**: Entity recognition is enabled. **false**: Entity recognition is disabled. Default value: **true** |

<a id="enterkeytype"></a>
## enterKeyType

```TypeScript
enterKeyType(value: EnterKeyType)
```

Sets the type of the Enter key.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-enterKeyType(value: EnterKeyType): TextInputAttribute--><!--Device-TextInputAttribute-enterKeyType(value: EnterKeyType): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [EnterKeyType](arkts-arkui-enterkeytype-e.md) | Yes | Type of the Enter key.<br>Default value: **EnterKeyType.Done** |

<a id="fallbacklinespacing"></a>
## fallbackLineSpacing

```TypeScript
fallbackLineSpacing(enabled: Optional<boolean>)
```

Adapts the line height to the actual text height for overlapped multi-line text. This API takes effect only when the line height is less than the actual text height. If this API is not set, the line height does not adapt to the actual text height by default.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextInputAttribute-fallbackLineSpacing(enabled: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-fallbackLineSpacing(enabled: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether the line height adapts to the actual text height.<br>**true**: Line height adapts to the actual text height. **false**: Line height does not adapt to the actual text height. |

<a id="fontcolor"></a>
## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-fontColor(value: ResourceColor): TextInputAttribute--><!--Device-TextInputAttribute-fontColor(value: ResourceColor): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color.<br>Default value on wearables: **'#dbffffff' ** |

<a id="fontfamily"></a>
## fontFamily

```TypeScript
fontFamily(value: ResourceStr)
```

Sets the font family.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-fontFamily(value: ResourceStr): TextInputAttribute--><!--Device-TextInputAttribute-fontFamily(value: ResourceStr): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) | Yes | Font family. Default font: **'HarmonyOS Sans'**<br>To specify multiple fonts,separate them with commas (,), and fonts are applied in priority order. Example: **'Arial, HarmonyOS Sans'**.<br>The 'HarmonyOS Sans' font and custom fonts are supported for applications.<br>Only the **'HarmonyOS Sans'** font is supported for widgets. |

<a id="fontfeature"></a>
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

<!--Device-TextInputAttribute-fontFeature(value: string): TextInputAttribute--><!--Device-TextInputAttribute-fontFeature(value: string): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Font feature. |

<a id="fontsize"></a>
## fontSize

```TypeScript
fontSize(value: Length)
```

Sets the font size.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-fontSize(value: Length): TextInputAttribute--><!--Device-TextInputAttribute-fontSize(value: Length): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Font size. If **fontSize** is of the number type, the unit fp is used. The default font size is 16 fp. The value cannot be a percentage.<br>Default value on wearables: **18fp** |

<a id="fontstyle"></a>
## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

Sets the font style.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-fontStyle(value: FontStyle): TextInputAttribute--><!--Device-TextInputAttribute-fontStyle(value: FontStyle): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [FontStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-fontstyle-e.md) | Yes | Font style.<br>Default value: **FontStyle.Normal** |

<a id="fontweight"></a>
## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr)
```

Sets the font weight. If the value is too large, the text may be clipped depending on the font.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-fontWeight(value: number | FontWeight | ResourceStr): TextInputAttribute--><!--Device-TextInputAttribute-fontWeight(value: number | FontWeight | ResourceStr): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | Font weight. For the number type, the value range is [100, 900], at an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the string type, only strings that represent a number, for example, **400**, and the following enumerated values of **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>Default value: **FontWeight.Normal**<br>The Resource type is supported since API version 20.<br>**Since:** 20 |

<a id="halfleading"></a>
## halfLeading

```TypeScript
halfLeading(halfLeading: Optional<boolean>)
```

Enables half leading for text, which splits the leading equally between the top and bottom of the line.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextInputAttribute-halfLeading(halfLeading: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-halfLeading(halfLeading: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| halfLeading | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether half leading is enabled. Half leading refers to splitting the leading in half and applying it equally to the top and bottom of the line.<br>**true**: Half leading is enabled. **false**: Half leading is not enabled.<br>Default value: **false** |

<a id="heightadaptivepolicy"></a>
## heightAdaptivePolicy

```TypeScript
heightAdaptivePolicy(value: TextHeightAdaptivePolicy)
```

Sets how the adaptive height is determined for the text in the inline style.

When this attribute is set to **TextHeightAdaptivePolicy.MAX_LINES_FIRST**, the [maxLines](TextInputAttribute#maxLines) attribute takes precedence for adjusting the text height. If the **maxLines** setting results in a layout beyond the layout constraints, the text will shrink to a font size between [minFontSize](TextInputAttribute#minFontSize) and [maxFontSize](TextInputAttribute#maxFontSize) to allow for more content to be shown.

If this attribute is set to **TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST**, the **minFontSize** attribute takes precedence for adjusting the text height. If the text can fit in one line with the **minFontSize** setting, the text will enlarge to the maximum available font size between **minFontSize** and **maxFontSize**.

**TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST** produces the same effect as **TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST**.

When the component is in the non-inline style, the three values of **TextHeightAdaptivePolicy** have the same effect, that is, the text will shrink to a font size between **minFontSize** and **maxFontSize** to allow for more content to be shown.

> **NOTE**  
>  
> If the text box is in the inline style, the font size in the editing state is different from that in the non-  
> editing state.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextInputAttribute--><!--Device-TextInputAttribute-heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextHeightAdaptivePolicy](../arkts-apis/arkts-arkui-textheightadaptivepolicy-e.md) | Yes | How the adaptive height is determined for the text.<br>Default value:**TextHeightAdaptivePolicy.MAX_LINES_FIRST** |

<a id="includefontpadding"></a>
## includeFontPadding

```TypeScript
includeFontPadding(include: Optional<boolean>)
```

Sets whether to add spacing to the first and last lines to avoid text truncation. If this attribute is not set, no spacing is added by default.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextInputAttribute-includeFontPadding(include: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-includeFontPadding(include: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| include | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to add spacing to the first and last lines to avoid text truncation.<br>**true**: Spacing is added to the first and last lines. **false**: Spacing is not added to the first and last lines. |

<a id="inputfilter"></a>
## inputFilter

```TypeScript
inputFilter(value: ResourceStr, error?: Callback<string>)
```

Sets the regular expression for input filtering. Only inputs that comply with the regular expression can be displayed. Other inputs are filtered out.

For single-character input scenarios, only single-character matching is supported; for multi-character input scenarios (such as pasting), string matching is supported.

Since API version 11, setting **inputFilter** with a non-empty string invalidates the text filtering effect attached to the [type](TextInputAttribute#type) API.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-inputFilter(value: ResourceStr, error?: Callback<string>): TextInputAttribute--><!--Device-TextInputAttribute-inputFilter(value: ResourceStr, error?: Callback<string>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) | Yes | Regular expression. |
| error | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;string&gt; | No | Filtered-out content to return when regular expression matching fails.<br>**Since:** 18 |

<a id="keyboardappearance"></a>
## keyboardAppearance

```TypeScript
keyboardAppearance(appearance: Optional<KeyboardAppearance>)
```

Sets the keyboard appearance for the text box. This setting takes effect only after input method adaptation. For details, see [Immersive Mode of the Input Method Application](docroot://inputmethod/inputmethod-immersive-mode-guide.md).

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-TextInputAttribute-keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextInputAttribute--><!--Device-TextInputAttribute-keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appearance | [Optional](arkts-arkui-optional-t.md)&lt;KeyboardAppearance&gt; | Yes | Appearance of the keyboard.<br>Default value:**KeyboardAppearance.NONE_IMMERSIVE** |

<a id="letterspacing"></a>
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

<!--Device-TextInputAttribute-letterSpacing(value: number | string | Resource): TextInputAttribute--><!--Device-TextInputAttribute-letterSpacing(value: number | string | Resource): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Letter spacing.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

<a id="linebreakstrategy"></a>
## lineBreakStrategy

```TypeScript
lineBreakStrategy(strategy: LineBreakStrategy)
```

Sets the line break rule. This attribute takes effect when **wordBreak** is not set to **breakAll**. Hyphens are not supported.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-lineBreakStrategy(strategy: LineBreakStrategy): TextInputAttribute--><!--Device-TextInputAttribute-lineBreakStrategy(strategy: LineBreakStrategy): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | [LineBreakStrategy](../arkts-apis/arkts-arkui-linebreakstrategy-e.md) | Yes | Line break rule.<br>Default value: **LineBreakStrategy.GREEDY**<br>**NOTE**<br>This attribute takes effect only when the [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is set. |

<a id="lineheight"></a>
## lineHeight

```TypeScript
lineHeight(value: number | string | Resource)
```

Sets the text line height.

If the value is less than or equal to **0**, the line height is unrestricted and adapts to the font size. When the value is a number, the unit is fp. For the string type, numeric string values with optional units, for example,**"10"** or **"10fp"**, are supported.

> **NOTE**  
>  
> - If certain characters have significantly taller glyphs than others in the same line, layout anomalies such as  
> clipping, overlapping, or misalignment may occur. In this case, adjust component attributes such as height and  
> line height to ensure proper layout rendering.  
>  
> - When the [password mode](docroot://ui/arkts-common-components-text-input.md#password-mode) is set,  
> [lineHeight](TextInputAttribute#lineHeight) set by this API does not take effect.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-lineHeight(value: number | string | Resource): TextInputAttribute--><!--Device-TextInputAttribute-lineHeight(value: number | string | Resource): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Text line height. |

<a id="maxfontscale"></a>
## maxFontScale

```TypeScript
maxFontScale(scale: Optional<number|Resource>)
```

Sets the maximum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextInputAttribute-maxFontScale(scale: Optional<number|Resource>): TextInputAttribute--><!--Device-TextInputAttribute-maxFontScale(scale: Optional<number|Resource>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | [Optional](arkts-arkui-optional-t.md)&lt;number\|Resource&gt; | Yes | Maximum font scale factor for text. The **undefined** type is supported.<br>Value range:[1, +∞)<br>**NOTE**<br>Values less than 1 are treated as **1**. Invalid values are not applied by default.<br>After the **maxFontScale** attribute is set, the error message set by **showError** can be enlarged to a maximum of twice the original size.<br>Before use, you need to configure the [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) and [app.json5](docroot://quick-start/app-configuration-file.md) files in the project. For details, see [Example 18: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-18-setting-the-minimum-and-maximum-font-scale-factors). |

<a id="maxfontsize"></a>
## maxFontSize

```TypeScript
maxFontSize(value: number | string | Resource)
```

Sets the maximum font size. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

This attribute takes effect only when used together with [minFontSize](TextInputAttribute#minFontSize) and [maxLines](TextInputAttribute#maxLines) (for the editing state of the inline style), or layout constraint settings.

When the adaptive font size is used, the **fontSize** settings do not take effect.

If the value of **maxFontSize** is less than or equal to 0 or is less than the value of **minFontSize**, the adaptive font sizing feature is disabled. In such cases, the [fontSize](TextInputAttribute#fontSize)attribute is used instead. If **fontSize** is not set, the default value will apply.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-maxFontSize(value: number | string | Resource): TextInputAttribute--><!--Device-TextInputAttribute-maxFontSize(value: number | string | Resource): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Maximum font size.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

<a id="maxlength"></a>
## maxLength

```TypeScript
maxLength(value: number)
```

Sets the maximum number of characters for text input.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-maxLength(value: number): TextInputAttribute--><!--Device-TextInputAttribute-maxLength(value: number): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of characters for text input.<br>Default value: **Infinity**, indicating that there is no upper limit on the number of characters that can be entered<br>**NOTE**<br>If this attribute is not set or set to an invalid value, the default value is used. If a decimal value is provided, only its integer part is applied. If the value exceeds 2^31-1, exceptions may occur. |

<a id="maxlines"></a>
## maxLines

```TypeScript
maxLines(value: number)
```

Sets the maximum number of lines that can be displayed with the inline style in the editing state.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-maxLines(value: number): TextInputAttribute--><!--Device-TextInputAttribute-maxLines(value: number): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of lines that can be displayed with the inline style in the editing state.<br>Default value: **3**<br>Value range: (0, UINT32_MAX] |

<a id="minfontscale"></a>
## minFontScale

```TypeScript
minFontScale(scale: Optional<number|Resource>)
```

Sets the minimum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextInputAttribute-minFontScale(scale: Optional<number|Resource>): TextInputAttribute--><!--Device-TextInputAttribute-minFontScale(scale: Optional<number|Resource>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | [Optional](arkts-arkui-optional-t.md)&lt;number\|Resource&gt; | Yes | Minimum font scale factor for text. The **undefined** type is supported.<br>Value range: [0, 1]<br>**NOTE**<br>A value less than 0 is handled as **0**. A value greater than1 is handled as **1**. Invalid values are not applied by default.<br>Before use, you need to configure the [configuration.json](docroot://quick-start/app-configuration-file.md#tags-in-the-configuration-file) and [app.json5](docroot://quick-start/app-configuration-file.md) files in the project. For details, see [Example 18: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-18-setting-the-minimum-and-maximum-font-scale-factors). |

<a id="minfontsize"></a>
## minFontSize

```TypeScript
minFontSize(value: number | string | Resource)
```

Sets the minimum font size. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

This attribute takes effect only when used together with [maxFontSize](TextInputAttribute#maxFontSize) and [maxLines](TextInputAttribute#maxLines) (for the editing state of the inline style), or layout constraint settings.

When the adaptive font size is used, the **fontSize** settings do not take effect.

If the value of **minFontSize** is less than or equal to 0, the adaptive font sizing feature is disabled. In such cases, the [fontSize](TextInputAttribute#fontSize) attribute is used instead. If **fontSize** is not set, the default value will apply.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-minFontSize(value: number | string | Resource): TextInputAttribute--><!--Device-TextInputAttribute-minFontSize(value: number | string | Resource): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Minimum font size.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

<a id="onchange"></a>
## onChange

```TypeScript
onChange(callback: EditableTextOnChangeCallback)
```

Triggered when the input in the text box changes.

In this callback, if caret operations are performed, you must adjust the caret logic based on the **previewText** parameter to ensure it works seamlessly within the preview display scenario.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-onChange(callback: EditableTextOnChangeCallback): TextInputAttribute--><!--Device-TextInputAttribute-onChange(callback: EditableTextOnChangeCallback): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [EditableTextOnChangeCallback](../arkts-apis/arkts-arkui-editabletextonchangecallback-t.md) | Yes | Callback invoked when the input in the text box changes.<br>**Since:** 12 |

<a id="oncontentscroll"></a>
## onContentScroll

```TypeScript
onContentScroll(callback: OnContentScrollCallback)
```

Triggered when the text content is scrolled.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-onContentScroll(callback: OnContentScrollCallback): TextInputAttribute--><!--Device-TextInputAttribute-onContentScroll(callback: OnContentScrollCallback): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnContentScrollCallback](../arkts-apis/arkts-arkui-oncontentscrollcallback-t.md) | Yes | Callback for text content scrolling.<br>**Since:** 18 |

<a id="oncopy"></a>
## onCopy

```TypeScript
onCopy(callback: Callback<string>)
```

Triggered when a copy operation is performed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-onCopy(callback: Callback<string>): TextInputAttribute--><!--Device-TextInputAttribute-onCopy(callback: Callback<string>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;string&gt; | Yes | Callback used to return the copied text content.<br>**Since:** 18 |

<a id="oncut"></a>
## onCut

```TypeScript
onCut(callback: Callback<string>)
```

Triggered when a cut operation is performed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-onCut(callback: Callback<string>): TextInputAttribute--><!--Device-TextInputAttribute-onCut(callback: Callback<string>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;string&gt; | Yes | Callback used to return the cut text content.<br>**Since:** 18 |

<a id="ondiddelete"></a>
## onDidDelete

```TypeScript
onDidDelete(callback: Callback<DeleteValue>)
```

Triggered when text is deleted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-onDidDelete(callback: Callback<DeleteValue>): TextInputAttribute--><!--Device-TextInputAttribute-onDidDelete(callback: Callback<DeleteValue>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;DeleteValue&gt; | Yes | Callback triggered when text is deleted.<br>It is available only for system input methods. |

<a id="ondidinsert"></a>
## onDidInsert

```TypeScript
onDidInsert(callback: Callback<InsertValue>)
```

Triggered when text is inserted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-onDidInsert(callback: Callback<InsertValue>): TextInputAttribute--><!--Device-TextInputAttribute-onDidInsert(callback: Callback<InsertValue>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;InsertValue&gt; | Yes | Callback triggered when text is inserted.<br>It is available only for system input methods. |

<a id="oneditchange"></a>
## onEditChange

```TypeScript
onEditChange(callback: Callback<boolean>)
```

Triggered when the input status changes. The text box is in the editing state when it has the caret placed in it,and is in the non-editing state otherwise.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-onEditChange(callback: Callback<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-onEditChange(callback: Callback<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;boolean&gt; | Yes | Callback for the input status change. Returns **true** if the input box is in the editing state; returns **false** if the input box is in the non-editing state.<br>**Since:** 18 |

<a id="oneditchanged"></a>
## onEditChanged

```TypeScript
onEditChanged(callback: (isEditing: boolean) => void)
```

Triggered when the input status changes.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** onEditChange

<!--Device-TextInputAttribute-onEditChanged(callback: (isEditing: boolean) => void): TextInputAttribute--><!--Device-TextInputAttribute-onEditChanged(callback: (isEditing: boolean) => void): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (isEditing: boolean) =&gt; void | Yes | callback of the listened event. |

<a id="onpaste"></a>
## onPaste

```TypeScript
onPaste(callback: OnPasteCallback)
```

Triggered when a paste operation is performed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-onPaste(callback: OnPasteCallback): TextInputAttribute--><!--Device-TextInputAttribute-onPaste(callback: OnPasteCallback): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnPasteCallback](../arkts-apis/arkts-arkui-onpastecallback-t.md) | Yes | Executed when a paste operation is performed.<br>**Since:** 18 |

<a id="onsecuritystatechange"></a>
## onSecurityStateChange

```TypeScript
onSecurityStateChange(callback: Callback<boolean>)
```

Triggered when the password visibility state is toggled.

> **NOTE**  
>  
> This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-onSecurityStateChange(callback: Callback<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-onSecurityStateChange(callback: Callback<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;boolean&gt; | Yes | Callback used to return the result.<br>Returns **true** if the state is toggled; returns **false** otherwise. |

<a id="onsubmit"></a>
## onSubmit

```TypeScript
onSubmit(callback: OnSubmitCallback)
```

Triggered when the Enter key on the keyboard is pressed for submission.

On non-TV devices, the input box loses focus and the keyboard is dismissed by default when the Enter key is pressed. You can configure whether to dismiss the keyboard in **OnSubmitCallback**. For details, see [Example 2: Setting Underlines](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-2-setting-underlines).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-onSubmit(callback: OnSubmitCallback): TextInputAttribute--><!--Device-TextInputAttribute-onSubmit(callback: OnSubmitCallback): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnSubmitCallback](arkts-arkui-onsubmitcallback-t.md) | Yes | Callback for submission.<br>**Since:** 18 |

<a id="ontextselectionchange"></a>
## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: OnTextSelectionChangeCallback)
```

Triggered when the text selection changes or the caret position changes during editing.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-onTextSelectionChange(callback: OnTextSelectionChangeCallback): TextInputAttribute--><!--Device-TextInputAttribute-onTextSelectionChange(callback: OnTextSelectionChangeCallback): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [OnTextSelectionChangeCallback](arkts-arkui-ontextselectionchangecallback-t.md) | Yes | Callback for text selection changes or caret position changes.<br>**Since:** 18 |

<a id="onwillattachime"></a>
## onWillAttachIME

```TypeScript
onWillAttachIME(callback: Callback<IMEClient>)
```

Called when the input box is about to be bound to an input method.

<!--Del-->

Before the input box is bound to an input method, you can use the [setKeyboardAppearanceConfig](../arkts-apis/arkts-arkui-arkui-uicontext-uicontext-c-sys.md#setkeyboardappearanceconfig-1) API of **UIContext** to set the keyboard style.<!--DelEnd-->

From API version 22, the [setExtraConfig](../arkts-apis/arkts-arkui-imeclient-i.md#setextraconfig-1) method of [IMEClient](../arkts-apis/arkts-arkui-imeclient-i.md)can be called to set input method extension information. After the input method is bound, it receives this extension information which can be used to implement custom functionality.

**IMEClient** is valid only during the execution of **onWillAttachIME** and cannot be called asynchronously.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextInputAttribute-onWillAttachIME(callback: Callback<IMEClient>): TextInputAttribute--><!--Device-TextInputAttribute-onWillAttachIME(callback: Callback<IMEClient>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;IMEClient&gt; | Yes | Callback invoked when the input box is about to be bound to an input method. |

<a id="onwillchange"></a>
## onWillChange

```TypeScript
onWillChange(callback: Callback<EditableTextChangeValue, boolean>)
```

Triggered when the text content is about to change.

This callback is triggered after **onWillInsert** and **onWillDelete**, but before **onDidInsert** and **onDidDelete**.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-TextInputAttribute-onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextInputAttribute--><!--Device-TextInputAttribute-onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;EditableTextChangeValue, boolean&gt; | Yes | Callback triggered when the text content is about to change.<br>Returning **true** allows the change to proceed, while returning **false** cancels the change. |

<a id="onwillcopy"></a>
## onWillCopy

```TypeScript
onWillCopy(callback: Callback<string, boolean>)
```

Triggered before the copy operation is performed.

**Since**: 26.0.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextInputAttribute-onWillCopy(callback: Callback<string, boolean>): TextInputAttribute--><!--Device-TextInputAttribute-onWillCopy(callback: Callback<string, boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;string, boolean&gt; | Yes | Callback invoked before the copy operation. If the callback is the string type, the value indicates the text content to be copied. If the callback is the boolean type, the value indicates whether the selected text is allowed to be copied. **true**: yes. **false**: no. |

<a id="onwillcut"></a>
## onWillCut

```TypeScript
onWillCut(callback: Callback<string, boolean>)
```

Triggered before the cut operation is performed.

**Since**: 26.0.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextInputAttribute-onWillCut(callback: Callback<string, boolean>): TextInputAttribute--><!--Device-TextInputAttribute-onWillCut(callback: Callback<string, boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;string, boolean&gt; | Yes | Callback invoked before the cut operation. If the callback is the string type, the value indicates the text content to be cut. If the callback is the boolean type, the value indicates whether the selected text is allowed to be cut. **true**: yes. **false**: no. |

<a id="onwilldelete"></a>
## onWillDelete

```TypeScript
onWillDelete(callback: Callback<DeleteValue, boolean>)
```

Triggered when text is about to be deleted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-onWillDelete(callback: Callback<DeleteValue, boolean>): TextInputAttribute--><!--Device-TextInputAttribute-onWillDelete(callback: Callback<DeleteValue, boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;DeleteValue, boolean&gt; | Yes | Callback triggered when text is about to be deleted.<br>It returns **true** if the text is deleted; returns **false** otherwise.<br>This callback is not called for text preview.<br>It is available only for system input methods. |

<a id="onwillinsert"></a>
## onWillInsert

```TypeScript
onWillInsert(callback: Callback<InsertValue, boolean>)
```

Triggered when text is about to be inserted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-onWillInsert(callback: Callback<InsertValue, boolean>): TextInputAttribute--><!--Device-TextInputAttribute-onWillInsert(callback: Callback<InsertValue, boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;InsertValue, boolean&gt; | Yes | Callback triggered when text is about to be inserted.<br>It returns **true** if the text is inserted; returns **false** otherwise.<br>This callback is not triggered for pre-edit or candidate word operations.<br>It is available only for system input methods. |

<a id="orphancharoptimization"></a>
## orphanCharOptimization

```TypeScript
orphanCharOptimization(enabled: Optional<boolean>)
```

Sets whether to enable orphan character optimization during text typesetting. If this attribute is not set, orphan character optimization is disabled by default.

Orphan character optimization improves the text layout by handling the orphan character (the first Chinese character of the last line of a paragraph) more efficiently. When enabled, it adjusts line breaks to avoid orphan characters as much as possible. This feature takes effect only when [wordBreak](TextInputAttribute#wordBreak)is not **BREAK_ALL** and [locale](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textstyle-i.md) of the first [TextStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textstyle-i.md) of the text to be typeset is either **"zh-Hans"** or **"zh-Hant"**.

**Since**: 26.0.0

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextInputAttribute-orphanCharOptimization(enabled: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-orphanCharOptimization(enabled: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable orphan character optimization for the last line of the paragraph.<br>**true**: Orphan character optimization is enabled. **false**: Orphan character optimization is disabled.<br>When the value is **undefined** or **null**, orphan character optimization is disabled. |

<a id="passwordicon"></a>
## passwordIcon

```TypeScript
passwordIcon(value: PasswordIcon)
```

Sets the password icon to display at the end of the password text box.

Images in JPG, PNG, BMP, HEIC, and WEBP formats are supported.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-passwordIcon(value: PasswordIcon): TextInputAttribute--><!--Device-TextInputAttribute-passwordIcon(value: PasswordIcon): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PasswordIcon](arkts-arkui-passwordicon-i.md) | Yes | Password icon to display at the end of the password text box.<br>By default, the system-provided icon is used.<br>The icon size is fixed at 24 vp (or 28 vp on wearables), regardless of the source image size. |

<a id="passwordrules"></a>
## passwordRules

```TypeScript
passwordRules(value: string)
```

Defines the rules for generating passwords. When autofill is used, these rules are transparently transmitted to Password Vault for generating a new password.<!--RP1--><!--RP1End-->

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-passwordRules(value: string): TextInputAttribute--><!--Device-TextInputAttribute-passwordRules(value: string): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Rules for generating passwords. |

<a id="placeholdercolor"></a>
## placeholderColor

```TypeScript
placeholderColor(value: ResourceColor)
```

Sets the placeholder text color.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-placeholderColor(value: ResourceColor): TextInputAttribute--><!--Device-TextInputAttribute-placeholderColor(value: ResourceColor): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Placeholder text color.<br>The default value follows the theme.<br>Default value on wearables: **'#99ffffff'** |

<a id="placeholderfont"></a>
## placeholderFont

```TypeScript
placeholderFont(value?: Font)
```

Sets the placeholder text style, including the font size, font weight, font family, and font style.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-placeholderFont(value?: Font): TextInputAttribute--><!--Device-TextInputAttribute-placeholderFont(value?: Font): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | No | Placeholder text style.<br>Default value on wearables: **18fp** |

<a id="punctuationoverflow"></a>
## punctuationOverflow

```TypeScript
punctuationOverflow(enabled: Optional<boolean>)
```

Whether to enable punctuation overflow at line ends.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextInputAttribute-punctuationOverflow(enabled: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-punctuationOverflow(enabled: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable the feature, the default value is false. |

<a id="selectall"></a>
## selectAll

```TypeScript
selectAll(value: boolean)
```

Sets whether to select all text in the initial state. The [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is not supported.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-selectAll(value: boolean): TextInputAttribute--><!--Device-TextInputAttribute-selectAll(value: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to select all text in the initial state.<br>**true**: Selecting all text is enabled. **false**: Selecting all text is disabled.<br>Default value: **false** |

<a id="selectedbackgroundcolor"></a>
## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(value: ResourceColor)
```

Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-selectedBackgroundColor(value: ResourceColor): TextInputAttribute--><!--Device-TextInputAttribute-selectedBackgroundColor(value: ResourceColor): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Background color of the selected text. |

<a id="selecteddragpreviewstyle"></a>
## selectedDragPreviewStyle

```TypeScript
selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)
```

Sets the drag preview style for text being dragged in the text box.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextInputAttribute-selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextInputAttribute--><!--Device-TextInputAttribute-selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SelectedDragPreviewStyle](../arkts-apis/arkts-arkui-selecteddragpreviewstyle-i.md) \| undefined | Yes | Drag preview style for text being dragged in the text box.<br>If this parameter is set to **undefined**, the drag preview follows the theme: white in light mode and black in dark mode. |

<a id="selectionmenuhidden"></a>
## selectionMenuHidden

```TypeScript
selectionMenuHidden(value: boolean)
```

Sets whether to hide the system text selection menu.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-selectionMenuHidden(value: boolean): TextInputAttribute--><!--Device-TextInputAttribute-selectionMenuHidden(value: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to hide the system text selection menu.<br>**true**: The system text selection menu is hidden when a user clicks the text box cursor, long-presses the text box, double-taps the text box,triple-taps the text box, or right-clicks the text box.<br>**false**: The system text selection menu is displayed.<br>Default value: **false** |

<a id="shaderstyle"></a>
## shaderStyle

```TypeScript
shaderStyle(shader: ShaderStyle | undefined)
```

Set the shader style of the text, such as lineargradient or radialgradient.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextInputAttribute-shaderStyle(shader: ShaderStyle | undefined): TextInputAttribute--><!--Device-TextInputAttribute-shaderStyle(shader: ShaderStyle | undefined): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | [ShaderStyle](../arkts-apis/arkts-arkui-shaderstyle-c.md) \| undefined | Yes | The shader style of the text.Passing `undefined` resets it to the default value. |

<a id="showcounter"></a>
## showCounter

```TypeScript
showCounter(value: boolean, options?: InputCounterOptions)
```

Sets the character counter displayed when the number of characters entered exceeds the threshold. If the **showCounter** API is not called, the character counter is not displayed by default.

**options** can be set only when **value** is set to **true**, in which case a character counter is displayed below the text box. This attribute must be used together with [maxLength](TextInputAttribute#maxLength). The character counter is displayed in this format: Number of characters entered/Character limit.

It is visible when the number of characters entered is greater than the character limit multiplied by the threshold percentage value. If **options** is not set, the text box border and character counter subscript turn red when the number of characters entered exceeds the limit. If **value** is set to **true** and [InputCounterOptions](arkts-arkui-inputcounteroptions-i.md) is set, the text box border and character counter subscript turn red and the text box shakes when the number of characters entered reaches the limit, provided that the value of **thresholdPercentage** is valid. If **highlightBorder** is set to **false**, the text box border does not turn red. By default, **highlightBorder** is set to **true**.

The character counter is not displayed in the [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) and [password mode](docroot://ui/arkts-common-components-text-input.md#password-mode).

[Example 5: Setting a Character Counter](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-5-setting-a-character-counter)shows the effect of setting **showCounter**.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-showCounter(value: boolean, options?: InputCounterOptions): TextInputAttribute--><!--Device-TextInputAttribute-showCounter(value: boolean, options?: InputCounterOptions): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to display the character counter.<br>**true**: Character counter is displayed.**false**: Character counter is not displayed. |
| options | [InputCounterOptions](arkts-arkui-inputcounteroptions-i.md) | No | Configuration options for the character counter. |

<a id="showerror"></a>
## showError

```TypeScript
showError(value?: ResourceStr | undefined)
```

Sets the error message displayed when an error occurs.

If the data type is **ResourceStr** and the input content does not comply with specifications, the error message is displayed. If the error message does not fit in one line, an ellipsis is displayed to represent clipped text. If the data type is **undefined**, no error message is displayed. For details, see [Example 2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-2-setting-underlines).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-showError(value?: ResourceStr | undefined): TextInputAttribute--><!--Device-TextInputAttribute-showError(value?: ResourceStr | undefined): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) \| undefined | No | Error message displayed when an error occurs.<br>By default, no error message is displayed.<br>On wearables, the font size is 13 fp and the alignment mode is center alignment.<br>**NOTE**<br>The Resource type is supported since API version 12.<br>**Since:** 12 |

<a id="showpassword"></a>
## showPassword

```TypeScript
showPassword(visible: boolean)
```

Sets whether to show the password.

This API has effect only when the [input type](arkts-arkui-inputtype-e.md) is set to **Password**, **NEWPASSWORD**, or **NUMBERPASSWORD** mode. It does not work in other modes.

In the [password mode](docroot://ui/arkts-common-components-text-input.md#password-mode), inconsistencies between the backend state of the text box and the frontend application's state management variables may cause abnormal behavior of the trailing icon. To avoid such issues, use the [onSecurityStateChange](TextInputAttribute#onSecurityStateChange) callback to sync the states. For details,see [Example 1: Setting and Obtaining the Caret Position](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textinput.md#example-1-setting-and-obtaining-the-caret-position).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-showPassword(visible: boolean): TextInputAttribute--><!--Device-TextInputAttribute-showPassword(visible: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| visible | boolean | Yes | Whether to show the password.<br>**true**: The password is shown. **false**: The password is not shown.<br>Default value: **false** |

<a id="showpasswordicon"></a>
## showPasswordIcon

```TypeScript
showPasswordIcon(value: boolean)
```

Sets whether to display the password icon at the end of the password text box.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-showPasswordIcon(value: boolean): TextInputAttribute--><!--Device-TextInputAttribute-showPasswordIcon(value: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to display the password icon at the end of the password text box.<br>**true** to display, **false** otherwise.<br>Default value: **false** for TV devices; **true** for other devices |

<a id="showunderline"></a>
## showUnderline

```TypeScript
showUnderline(value: boolean)
```

Sets whether to enable an underline.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-showUnderline(value: boolean): TextInputAttribute--><!--Device-TextInputAttribute-showUnderline(value: boolean): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable an underline.<br>**true** to enable, **false** otherwise.<br>Default value: **false**<br>By default, the underline comes in the color of **'#33182431'**, thickness of 1 px, and text box size of 48 vp. The underline is only available for the **InputType.Normal** type. |

<a id="showunit"></a>
## showUnit

```TypeScript
showUnit(value: CustomBuilder)
```

Sets the unit displayed with the text box. This attribute effective only when [showUnderline](TextInputAttribute#showUnderline) is set to **true**.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-showUnit(value: CustomBuilder): TextInputAttribute--><!--Device-TextInputAttribute-showUnit(value: CustomBuilder): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Unit displayed with the text box. |

<a id="stopbackpress"></a>
## stopBackPress

```TypeScript
stopBackPress(isStopped: Optional<boolean>)
```

Sets whether to prevent the back key event from being propagated.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-TextInputAttribute-stopBackPress(isStopped: Optional<boolean>): TextInputAttribute--><!--Device-TextInputAttribute-stopBackPress(isStopped: Optional<boolean>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isStopped | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to prevent the back button press from being propagated to other components or applications.<br>**true**: Propagation is prevented. **false**: Propagation is allowed.<br>Default value: **true** Invalid values are treated as the default value. |

<a id="strokecolor"></a>
## strokeColor

```TypeScript
strokeColor(color: Optional<ResourceColor>)
```

Sets the text stroke color.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextInputAttribute-strokeColor(color: Optional<ResourceColor>): TextInputAttribute--><!--Device-TextInputAttribute-strokeColor(color: Optional<ResourceColor>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](arkts-arkui-optional-t.md)&lt;ResourceColor&gt; | Yes | Stroke color. Default value: font color. Invalid values are treated as the default value. |

<a id="strokejoinstyle"></a>
## strokeJoinStyle

```TypeScript
strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined)
```

Set the join style of the stroke.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextInputAttribute-strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextInputAttribute--><!--Device-TextInputAttribute-strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strokeJoinStyle | [StrokeJoinStyle](../arkts-apis/arkts-arkui-strokejoinstyle-e.md) \| undefined | Yes | The join style of stroke.Passing `undefined` resets it to the default value. |

<a id="strokewidth"></a>
## strokeWidth

```TypeScript
strokeWidth(width: Optional<LengthMetrics>)
```

Sets the text stroke width.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextInputAttribute-strokeWidth(width: Optional<LengthMetrics>): TextInputAttribute--><!--Device-TextInputAttribute-strokeWidth(width: Optional<LengthMetrics>): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | [Optional](arkts-arkui-optional-t.md)&lt;LengthMetrics&gt; | Yes | Text stroke width. When the unit of **LengthMetrics** is **px**:<br>Values < 0: solid text.<br>Values > 0: outlined text.<br>Default value: **0** (no stroke) |

<a id="style"></a>
## style

```TypeScript
style(value: TextInputStyle | TextContentStyle)
```

Sets the text input style. The inline style only supports **InputType.Normal**.

For details about the text box types, see [type](TextInputAttribute#type).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-style(value: TextInputStyle | TextContentStyle): TextInputAttribute--><!--Device-TextInputAttribute-style(value: TextInputStyle | TextContentStyle): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextInputStyle](arkts-arkui-textinputstyle-e.md) \| TextContentStyle | Yes | Text input style.<br>Default value: **TextInputStyle.Default** |

<a id="textalign"></a>
## textAlign

```TypeScript
textAlign(value: TextAlign)
```

Sets the horizontal alignment of the text.

Available options are **TextAlign.Start**, **TextAlign.Center**, and **TextAlign.End**. **TextAlign.JUSTIFY** behaves the same as **TextAlign.Start**.

You can use the [align](arkts-arkui-commonmethod-c.md#align-1) attribute to control the vertical position of a text paragraph. In this component, the **align** attribute cannot be used to control the horizontal position of a text paragraph.

- **Alignment.TopStart**, **Alignment.Top**, **Alignment.TopEnd**: Content aligns to the top.  
- **Alignment.Start**, **Alignment.Center**, **Alignment.End**: Content is centered vertically.  
- **Alignment.BottomStart**, **Alignment.Bottom**, **Alignment.BottomEnd:** Content aligns to the bottom.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-textAlign(value: TextAlign): TextInputAttribute--><!--Device-TextInputAttribute-textAlign(value: TextAlign): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextAlign](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textalign-e.md) | Yes | Horizontal alignment of the text.<br>Default value: **TextAlign.Start** |

<a id="textdirection"></a>
## textDirection

```TypeScript
textDirection(direction: TextDirection | undefined)
```

Specifies the text layout direction. If this attribute is not set, the default text layout direction follows the component layout direction.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextInputAttribute-textDirection(direction: TextDirection | undefined): TextInputAttribute--><!--Device-TextInputAttribute-textDirection(direction: TextDirection | undefined): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | [TextDirection](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textdirection-e.md) \| undefined | Yes | Text layout direction.<br>If this parameter is set to **undefined**, the text layout direction follows the component layout direction as defined by **TextDirection.DEFAULT**. |

<a id="textindent"></a>
## textIndent

```TypeScript
textIndent(value: Dimension)
```

Sets the indent of the first line text.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-textIndent(value: Dimension): TextInputAttribute--><!--Device-TextInputAttribute-textIndent(value: Dimension): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Dimension](../arkts-apis/arkts-arkui-dimension-t.md) | Yes | Indent of the first line text.<br>Default value: **0** |

<a id="textoverflow"></a>
## textOverflow

```TypeScript
textOverflow(value: TextOverflow)
```

Sets the display mode for overflowing text. This attribute is supported only in the editing and non-editing states of the [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style).

Chinese text is truncated by character. English text is truncated by word. To truncate English text by letter, set **wordBreak** to **WordBreak.BREAK_ALL**.

When **overflow** is set to **TextOverflow.None**, the effect is the same as **TextOverflow.Clip**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-textOverflow(value: TextOverflow): TextInputAttribute--><!--Device-TextInputAttribute-textOverflow(value: TextOverflow): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextOverflow](../arkts-apis/arkts-arkui-textoverflow-e.md) | Yes | Display mode of overflowing text.<br>Default value for the [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) in the non-editing state:**TextOverflow.Ellipsis**<br>Default value for the inline style in the editing state: **TextOverflow.Clip** |

<a id="type"></a>
## type

```TypeScript
type(value: InputType)
```

Sets the text box type.

Different **InputType** values trigger corresponding keyboard types and enforce input restrictions.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextInputAttribute-type(value: InputType): TextInputAttribute--><!--Device-TextInputAttribute-type(value: InputType): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [InputType](arkts-arkui-inputtype-e.md) | Yes | Text box type.<br>Default value: **InputType.Normal** |

<a id="underlinecolor"></a>
## underlineColor

```TypeScript
underlineColor(value: ResourceColor | UnderlineColor | undefined)
```

Color of the underline.

When [showUnderline](TextInputAttribute#showUnderline) is enabled, the underline color can be configured.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-underlineColor(value: ResourceColor | UnderlineColor | undefined): TextInputAttribute--><!--Device-TextInputAttribute-underlineColor(value: ResourceColor | UnderlineColor | undefined): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) \| UnderlineColor \| undefined | Yes | Color of the underline.<br>The underline color changes with the underline mode. If the underline color is only set for the normal state, you can directly enter a value of the ResourceColor type. If the value specified is **undefined**, **null**, or invalid, all underlines are restored to the default value.<br>Default value: underline color configured for the theme. The default underline color in the theme is **'#33182431'**. |

<a id="wordbreak"></a>
## wordBreak

```TypeScript
wordBreak(value: WordBreak)
```

Sets the word break rule. This attribute takes effect when the [inline style](docroot://ui/arkts-common-components-text-input.md#inline-style) is set for the component, but has no effect on placeholder text.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextInputAttribute-wordBreak(value: WordBreak): TextInputAttribute--><!--Device-TextInputAttribute-wordBreak(value: WordBreak): TextInputAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [WordBreak](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-wordbreak-e.md) | Yes | Word break rule in the inline style.<br>Default value: **WordBreak.BREAK_WORD** |

