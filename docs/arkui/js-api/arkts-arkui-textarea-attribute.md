# TextArea properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** TextAreaAttribute extends [CommonMethod<TextAreaAttribute>](CommonMethod<TextAreaAttribute>)

**Since:** 7

<!--Device-unnamed-declare class TextAreaAttribute extends CommonMethod<TextAreaAttribute>--><!--Device-unnamed-declare class TextAreaAttribute extends CommonMethod<TextAreaAttribute>-End-->

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

<!--Device-TextAreaAttribute-autoCapitalizationMode(mode: AutoCapitalizationMode): TextAreaAttribute--><!--Device-TextAreaAttribute-autoCapitalizationMode(mode: AutoCapitalizationMode): TextAreaAttribute-End-->

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

Sets the scrollbar display mode.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-barState(value: BarState): TextAreaAttribute--><!--Device-TextAreaAttribute-barState(value: BarState): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BarState](../arkts-apis/arkts-arkui-barstate-e.md) | Yes | Scrollbar display mode.<br>Default value: **BarState.Auto** |

<a id="caretcolor"></a>
## caretColor

```TypeScript
caretColor(value: ResourceColor)
```

Sets the color of the caret in the text box.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-caretColor(value: ResourceColor): TextAreaAttribute--><!--Device-TextAreaAttribute-caretColor(value: ResourceColor): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Color of the caret in the text box.<br>Default value: **'#007DFF'** |

<a id="caretstyle"></a>
## caretStyle

```TypeScript
caretStyle(value: CaretStyle)
```

Sets the caret style.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-caretStyle(value: CaretStyle): TextAreaAttribute--><!--Device-TextAreaAttribute-caretStyle(value: CaretStyle): TextAreaAttribute-End-->

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
> - For the list of punctuation marks that support compression, see the punctuation range at the beginning of a  
> line in [ParagraphStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-paragraphstyle-i.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextAreaAttribute-compressLeadingPunctuation(enabled: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-compressLeadingPunctuation(enabled: Optional<boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable leading punctuation compression.<br>**true**: Leading punctuation compression is enabled. **false**: Leading punctuation compression is disabled. |

<a id="contenttype"></a>
## contentType

```TypeScript
contentType(contentType: ContentType)
```

Sets the content type for autofill.<!--RP3--><!--RP3End-->

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-contentType(contentType: ContentType): TextAreaAttribute--><!--Device-TextAreaAttribute-contentType(contentType: ContentType): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contentType | [ContentType](../../apis-audio-kit/arkts-apis/arkts-audio-audio-contenttype-e.md) | Yes | Content type for autofill. |

<a id="copyoption"></a>
## copyOption

```TypeScript
copyOption(value: CopyOptions)
```

Sets whether the input text can be copied. If this attribute is set to **CopyOptions.None**, only paste and select all operations are supported.

If this attribute is set to **CopyOptions.None**, drag and drop operations are not supported.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-copyOption(value: CopyOptions): TextAreaAttribute--><!--Device-TextAreaAttribute-copyOption(value: CopyOptions): TextAreaAttribute-End-->

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

Sets the custom keyboard.

When a custom keyboard is set, activating the text box opens the specified custom component, instead of the system input method.

The height of the custom keyboard can be set using the **height** property of the custom component's root node,while the width uses the system default value.

The custom keyboard is presented by overlaying the original screen, which is not compressed or lifted if avoid mode is not enabled or avoidance is not needed for the text box.

The custom keyboard cannot obtain the focus, but it blocks gesture events.

By default, the custom keyboard is closed when the input component loses the focus. You can also use the [TextAreaController](arkts-arkui-textareacontroller-c.md).[stopEditing](arkts-arkui-textareacontroller-c.md#stopediting-1) API to close the keyboard.

When setting a custom keyboard, you can bind the [onKeyPrelme](arkts-arkui-commonmethod-c.md#onkeypreime-1) event to prevent input from the physical keyboard.

From API version 23, the [setCustomKeyboardContinueFeature](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#setcustomkeyboardcontinuefeature23)API can be used to enable the continuation feature for custom keyboards. When switching between custom keyboards,the system changes the keyboard directly without triggering the close and open animations.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextAreaAttribute--><!--Device-TextAreaAttribute-customKeyboard(value: CustomBuilder | ComponentContent | undefined, options?: KeyboardOptions): TextAreaAttribute-End-->

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

<!--Device-TextAreaAttribute-decoration(value: TextDecorationOptions): TextAreaAttribute--><!--Device-TextAreaAttribute-decoration(value: TextDecorationOptions): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextDecorationOptions](arkts-arkui-textdecorationoptions-i.md) | Yes | Text decorative line options.<br>Default value: {<br> type:TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>} |

<a id="editmenuoptions"></a>
## editMenuOptions

```TypeScript
editMenuOptions(editMenu: EditMenuOptions)
```

Sets the extended options of the custom context menu on selection, including the text content, icon, and callback.

When [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or

[disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)is used to disable system service menu items in the context menu on selection, the disabled menu options will be excluded from the parameter list in the [onCreateMenu](../arkts-apis/arkts-arkui-editmenuoptions-i.md#oncreatemenu-1) callback of **editMenuOptions**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-editMenuOptions(editMenu: EditMenuOptions): TextAreaAttribute--><!--Device-TextAreaAttribute-editMenuOptions(editMenu: EditMenuOptions): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | [EditMenuOptions](../arkts-apis/arkts-arkui-editmenuoptions-i.md) | Yes | Extended options of the custom context menu on selection. |

<a id="ellipsismode"></a>
## ellipsisMode

```TypeScript
ellipsisMode(mode: Optional<EllipsisMode>)
```

Sets the ellipsis position. For the settings to work, [textOverflow](TextAreaAttribute#textOverflow) must be set to **TextOverflow.Ellipsis** and [maxLines](TextAreaAttribute#maxLines(value: number)) must be specified.Setting **ellipsisMode** alone does not take effect.

**EllipsisMode.START** and **EllipsisMode.CENTER** take effect only when [maxLines](TextAreaAttribute#maxLines(value: number)) is set to **1**.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextAreaAttribute-ellipsisMode(mode: Optional<EllipsisMode>): TextAreaAttribute--><!--Device-TextAreaAttribute-ellipsisMode(mode: Optional<EllipsisMode>): TextAreaAttribute-End-->

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

Sets whether to enable autofill.<!--RP2--><!--RP2End-->

<!--RP6--><!--RP6End-->

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-enableAutoFill(value: boolean): TextAreaAttribute--><!--Device-TextAreaAttribute-enableAutoFill(value: boolean): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable autofill.<br>**true** to enable, **false** otherwise.<br>Default value: **true** |

<a id="enableautospacing"></a>
## enableAutoSpacing

```TypeScript
enableAutoSpacing(enabled: Optional<boolean>)
```

Sets whether to enable automatic spacing between Chinese and Western characters.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAreaAttribute-enableAutoSpacing(enabled: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-enableAutoSpacing(enabled: Optional<boolean>): TextAreaAttribute-End-->

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

Specifies whether to enable haptic feedback.

To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under **requestPermissions** in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the project.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-TextAreaAttribute-enableHapticFeedback(isEnabled: boolean): TextAreaAttribute--><!--Device-TextAreaAttribute-enableHapticFeedback(isEnabled: boolean): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to enable haptic feedback.<br>**true** to enable, **false** otherwise.<br>Default value: **true** |

<a id="enablekeyboardonfocus"></a>
## enableKeyboardOnFocus

```TypeScript
enableKeyboardOnFocus(value: boolean)
```

Sets whether to pop up the soft keyboard when the **TextArea** component obtains focus in a way other than clicking.

Since API version 10, the **TextArea** component is bound to the input method by default when it obtains focus.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-enableKeyboardOnFocus(value: boolean): TextAreaAttribute--><!--Device-TextAreaAttribute-enableKeyboardOnFocus(value: boolean): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to pop up the soft keyboard when the **TextArea** component obtains focus in a way other than clicking.<br>**true**: The soft keyboard pops up. **false**: The soft keyboard does not pop up.<br>Default value: **true** |

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

<!--Device-TextAreaAttribute-enablePreviewText(enable: boolean): TextAreaAttribute--><!--Device-TextAreaAttribute-enablePreviewText(enable: boolean): TextAreaAttribute-End-->

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

<!--Device-TextAreaAttribute-enableSelectedDataDetector(enable: boolean | undefined): TextAreaAttribute--><!--Device-TextAreaAttribute-enableSelectedDataDetector(enable: boolean | undefined): TextAreaAttribute-End-->

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

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 12.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-enterKeyType(value: EnterKeyType): TextAreaAttribute--><!--Device-TextAreaAttribute-enterKeyType(value: EnterKeyType): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [EnterKeyType](arkts-arkui-enterkeytype-e.md) | Yes | Type of the Enter key.<br>Default value: **EnterKeyType.NEW_LINE** |

<a id="fallbacklinespacing"></a>
## fallbackLineSpacing

```TypeScript
fallbackLineSpacing(enabled: Optional<boolean>)
```

Adapts the line height to the actual text height for overlapped multi-line text. This API takes effect only when the line height is less than the actual text height. If this API is not set, the line height does not adapt to the actual text height by default.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextAreaAttribute-fallbackLineSpacing(enabled: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-fallbackLineSpacing(enabled: Optional<boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether the line height is adapted to the actual text height.<br>**true**:Line height is adapted to the actual text height. **false**: Line height is not adapted to the actual text height. |

<a id="fontcolor"></a>
## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-fontColor(value: ResourceColor): TextAreaAttribute--><!--Device-TextAreaAttribute-fontColor(value: ResourceColor): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color. |

<a id="fontfamily"></a>
## fontFamily

```TypeScript
fontFamily(value: ResourceStr)
```

Sets the font family.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-fontFamily(value: ResourceStr): TextAreaAttribute--><!--Device-TextAreaAttribute-fontFamily(value: ResourceStr): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) | Yes | Font family. Default font: **'HarmonyOS Sans'**<br>To specify multiple fonts,separate them with commas (,), and fonts are applied in priority order. Example: **'Arial, HarmonyOS Sans'**. |

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

<!--Device-TextAreaAttribute-fontFeature(value: string): TextAreaAttribute--><!--Device-TextAreaAttribute-fontFeature(value: string): TextAreaAttribute-End-->

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

Sets the text size.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-fontSize(value: Length): TextAreaAttribute--><!--Device-TextAreaAttribute-fontSize(value: Length): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Font size. If **fontSize** is of the number type, the unit fp is used. The default font size is 16 fp on non-wearable devices and 18 fp on wearable devices. This parameter cannot be set in percentage. |

<a id="fontstyle"></a>
## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

Sets the font style.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-fontStyle(value: FontStyle): TextAreaAttribute--><!--Device-TextAreaAttribute-fontStyle(value: FontStyle): TextAreaAttribute-End-->

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

<!--Device-TextAreaAttribute-fontWeight(value: number | FontWeight | ResourceStr): TextAreaAttribute--><!--Device-TextAreaAttribute-fontWeight(value: number | FontWeight | ResourceStr): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | Font weight. For the number type, the value range is [100, 900], at an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the string type, only strings that represent a number, for example, **"400"**, and the following enumerated values of **FontWeight** are supported: **"bold"**, **"bolder"**, **"lighter"**, **"regular"**, and **"medium"**.<br>Default value: **FontWeight.Normal**<br>The Resource type is supported since API version 20.<br>**Since:** 20 |

<a id="halfleading"></a>
## halfLeading

```TypeScript
halfLeading(halfLeading: Optional<boolean>)
```

Enables half leading for text, which splits the leading equally between the top and bottom of the line.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextAreaAttribute-halfLeading(halfLeading: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-halfLeading(halfLeading: Optional<boolean>): TextAreaAttribute-End-->

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

Sets how the adaptive height is determined for the text.

When this attribute is set to **TextHeightAdaptivePolicy.MAX_LINES_FIRST**, the [maxLines](TextAreaAttribute#maxLines(value: number)) attribute takes precedence for adjusting the text height. If the **maxLines** setting results in a layout beyond the layout constraints, the text will shrink to a font size between [minFontSize](TextAreaAttribute#minFontSize) and [maxFontSize](TextAreaAttribute#maxFontSize) to allow for more content to be shown.

If the text box is in inline input style, the font size in the editing state is different from that in the non-editing state.

If this attribute is set to **TextHeightAdaptivePolicy.MIN_FONT_SIZE_FIRST**, the **minFontSize** attribute takes precedence for adjusting the text height. If the text can fit in one line with the **minFontSize** setting, the text will enlarge to the largest possible font size between **minFontSize** and **maxFontSize**.

If this attribute is set to **TextHeightAdaptivePolicy.LAYOUT_CONSTRAINT_FIRST**, the layout constraints take precedence for adjusting the text height. If the resultant layout is beyond the layout constraints, the text will shrink to a font size between **minFontSize** and **maxFontSize** to respect the layout constraints.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAreaAttribute--><!--Device-TextAreaAttribute-heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextHeightAdaptivePolicy](../arkts-apis/arkts-arkui-textheightadaptivepolicy-e.md) | Yes | How the adaptive height is determined for the text.<br>Default value:**TextHeightAdaptivePolicy.MAX_LINES_FIRST** |

<a id="horizontalscrolling"></a>
## horizontalScrolling

```TypeScript
horizontalScrolling(enabled: Optional<boolean>)
```

Sets whether to enable horizontal scrolling when the text is wider than the view. If this attribute is not set,horizontal scrolling is disabled.

> **NOTE**  
>  
> Horizontal scrolling is not supported in the following scenarios:  
> [inline mode](docroot://ui/arkts-common-components-text-input.md#inline-mode)<!--Del-->;  
> [voiceButton](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea-sys.md#voicebutton23) enabled<  
> !--DelEnd-->.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-TextAreaAttribute-horizontalScrolling(enabled: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-horizontalScrolling(enabled: Optional<boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable horizontal scrolling.<br>**true**: Horizontal scrolling is enabled. **false**: Horizontal scrolling is disabled, and text is wrapped. |

<a id="includefontpadding"></a>
## includeFontPadding

```TypeScript
includeFontPadding(include: Optional<boolean>)
```

Sets whether to add spacing to the first and last lines to avoid text truncation. If this attribute is not set, no spacing is added by default.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextAreaAttribute-includeFontPadding(include: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-includeFontPadding(include: Optional<boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| include | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to add spacing to the first and last lines to avoid text truncation.<br>**true**: Spacing is added to the first and last lines. **false**: Spacing is not added to the first and last lines. |

<a id="inputfilter"></a>
## inputFilter

```TypeScript
inputFilter(value: ResourceStr, error?: (value: string) => void)
```

Sets the regular expression for input filtering. Only inputs that comply with the regular expression can be displayed. Other inputs are filtered out.

For single-character input scenarios, only single-character matching is supported; for multi-character input scenarios (such as pasting), string matching is supported.

Starting from API version 11, setting **inputFilter** with a non-empty string invalidates the text filtering effect attached to the [type](TextAreaAttribute#type) API.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-inputFilter(value: ResourceStr, error?: (value: string) => void): TextAreaAttribute--><!--Device-TextAreaAttribute-inputFilter(value: ResourceStr, error?: (value: string) => void): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) | Yes | Regular expression. |
| error | (value: string) =&gt; void | No | Filtered-out content to return when regular expression matching fails. No return when regular expression matching succeeds. |

<a id="keyboardappearance"></a>
## keyboardAppearance

```TypeScript
keyboardAppearance(appearance: Optional<KeyboardAppearance>)
```

Sets the keyboard appearance for the text box. This setting takes effect only after input method adaptation. For details, see [Immersive Mode of the Input Method Application](docroot://inputmethod/inputmethod-immersive-mode-guide.md).

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-TextAreaAttribute-keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextAreaAttribute--><!--Device-TextAreaAttribute-keyboardAppearance(appearance: Optional<KeyboardAppearance>): TextAreaAttribute-End-->

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

Sets the letter spacing for a text style. Percentage values follow default display behavior. If the value specified is **0**, the default value is used. For the string type, numeric string values with optional units, for example,**"10"** or **"10fp"**, are supported.

If the value specified is a negative value, the text is compressed. A negative value too small may result in the text being compressed to 0 and no content being displayed.

This setting applies to every character, including those at line endings.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-letterSpacing(value: number | string | Resource): TextAreaAttribute--><!--Device-TextAreaAttribute-letterSpacing(value: number | string | Resource): TextAreaAttribute-End-->

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

Sets the line break rule. This attribute takes effect only when [wordBreak](TextAreaAttribute#wordBreak) is not **WordBreak.BREAK_ALL**. Hyphens are not supported.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-lineBreakStrategy(strategy: LineBreakStrategy): TextAreaAttribute--><!--Device-TextAreaAttribute-lineBreakStrategy(strategy: LineBreakStrategy): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strategy | [LineBreakStrategy](../arkts-apis/arkts-arkui-linebreakstrategy-e.md) | Yes | Line break rule.<br>Default value: **LineBreakStrategy.GREEDY** |

<a id="lineheight"></a>
## lineHeight

```TypeScript
lineHeight(value: number | string | Resource)
```

Text line height. If the value is less than or equal to 0, the line height is not limited and the font size is adaptive.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-lineHeight(value: number | string | Resource): TextAreaAttribute--><!--Device-TextAreaAttribute-lineHeight(value: number | string | Resource): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Text line height. String type. Specifies the length [pixel unit](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) explicitly, for example, **'10px'**, or provides the length in percentage, for example, **'100%'**.<br>Note: If no pixel unit is specified, the default unit is fp, in which case **'10'** is equivalent to 10 fp. |

<a id="linespacing"></a>
## lineSpacing

```TypeScript
lineSpacing(value: LengthMetrics)
```

Sets the line spacing of the text. If the value specified is less than or equal to 0, the default value **0** is used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-lineSpacing(value: LengthMetrics): TextAreaAttribute--><!--Device-TextAreaAttribute-lineSpacing(value: LengthMetrics): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](../arkts-apis/arkts-arkui-lengthmetrics-t.md) | Yes | Line spacing. Default value: **0** |

<a id="linespacing-1"></a>
## lineSpacing

```TypeScript
lineSpacing(value: LengthMetrics, options?: LineSpacingOptions)
```

Sets the line spacing for text. When **LineSpacingOptions** is not specified, line spacing is applied above the first line and below the last line by default.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAreaAttribute-lineSpacing(value: LengthMetrics, options?: LineSpacingOptions): TextAreaAttribute--><!--Device-TextAreaAttribute-lineSpacing(value: LengthMetrics, options?: LineSpacingOptions): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](../arkts-apis/arkts-arkui-lengthmetrics-t.md) | Yes | Line spacing. Values less than or equal to 0 are treated as the default value **0**. |
| options | [LineSpacingOptions](../arkts-apis/arkts-arkui-linespacingoptions-i.md) | No | Line spacing configuration options.<br>Default value:**{ onlyBetweenLines: false }**. |

<a id="maxfontscale"></a>
## maxFontScale

```TypeScript
maxFontScale(scale: Optional<number|Resource>)
```

Sets the maximum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextAreaAttribute-maxFontScale(scale: Optional<number|Resource>): TextAreaAttribute--><!--Device-TextAreaAttribute-maxFontScale(scale: Optional<number|Resource>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | [Optional](arkts-arkui-optional-t.md)&lt;number\|Resource&gt; | Yes | Maximum font scale factor for text. The **undefined** type is supported.<br>Value range:[1, +∞)<br>**NOTE**<br>Values less than 1 are treated as **1**. Abnormal values are ineffective by default.<br>Before use, the **configuration.json** file and **app.json5** file must be configured in the project. For details, see [Example 17: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#example-17-setting-the-minimum-and-maximum-font-scale-factors). |

<a id="maxfontsize"></a>
## maxFontSize

```TypeScript
maxFontSize(value: number | string | Resource)
```

Sets the maximum font size. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

For the setting to take effect, this attribute must be used together with [minFontSize](TextAreaAttribute#minFontSize) and [maxLines](TextAreaAttribute#maxLines(value: number)),or layout constraint settings.

When the adaptive font size is used, the **fontSize** settings do not take effect.

If the value of **maxFontSize** is less than or equal to 0 or is less than the value of **minFontSize**, the adaptive font sizing feature is disabled. In such cases, the [fontSize](TextAreaAttribute#fontSize) attribute is used instead. If **fontSize** is not explicitly set, its default value will apply.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-maxFontSize(value: number | string | Resource): TextAreaAttribute--><!--Device-TextAreaAttribute-maxFontSize(value: number | string | Resource): TextAreaAttribute-End-->

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

Sets the maximum number of characters for text input. By default, there is no maximum number of characters. When the maximum number is reached, no more characters can be entered.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-maxLength(value: number): TextAreaAttribute--><!--Device-TextAreaAttribute-maxLength(value: number): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of characters for text input.<br> Values less than 0 are treated as the default value, meaning no limit is set.<br>Default value: **uint32_max** (i.e., 2^32-1) |

<a id="maxlines"></a>
## maxLines

```TypeScript
maxLines(value: number)
```

Sets the maximum number of lines that can be displayed. When **textOverflow** is set, text is truncated if the content exceeds this limit. When **textOverflow** is not set, in inline style, the text is scrollable if the content exceeds the limit while the text box is focused; **maxLines** does not apply when the text box is not focused. In non-inline style, the text is truncated according to the number of lines.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-maxLines(value: number): TextAreaAttribute--><!--Device-TextAreaAttribute-maxLines(value: number): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of lines that can be displayed with the inline style in the editing state.<br>Default value: **3**. In non-inline style, the default value is **UINT32_MAX**.<br>Value range: (0, UINT32_MAX] |

<a id="maxlines-1"></a>
## maxLines

```TypeScript
maxLines(lines: number, options: MaxLinesOptions)
```

Sets the maximum number of visible lines when used with [textOverflow](TextAreaAttribute#textOverflow).Excess content can be truncated or made scrollable based on configuration. Without **textOverflow**:

- With focus in inline mode: Text exceeding the **maxLines** limit becomes scrollable.  
- Without focus in inline mode: **maxLines** has no effect.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAreaAttribute-maxLines(lines: number, options: MaxLinesOptions): TextAreaAttribute--><!--Device-TextAreaAttribute-maxLines(lines: number, options: MaxLinesOptions): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lines | number | Yes | Maximum number of lines that can be displayed with the inline style in the editing state.<br>Default value: **3** with the inline style; **+∞** with the non-inline style, indicating that there is no maximum number of lines<br>Value range: (0, +∞) |
| options | [MaxLinesOptions](../arkts-apis/arkts-arkui-maxlinesoptions-i.md) | Yes | Display effect for overflow text.<br>Default value: **MaxLinesMode.CLIP**. |

<a id="minfontscale"></a>
## minFontScale

```TypeScript
minFontScale(scale: Optional<number|Resource>)
```

Sets the minimum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextAreaAttribute-minFontScale(scale: Optional<number|Resource>): TextAreaAttribute--><!--Device-TextAreaAttribute-minFontScale(scale: Optional<number|Resource>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | [Optional](arkts-arkui-optional-t.md)&lt;number\|Resource&gt; | Yes | Minimum font scale factor for text. The **undefined** type is supported.<br>Value range: [0, 1]<br>**NOTE**<br>A value less than 0 is handled as **0**. A value greater than1 is handled as **1**. Abnormal values are ineffective by default.<br>Before use, the **configuration.json** file and **app.json5** file must be configured in the project. For details, see [Example 17: Setting the Minimum and Maximum Font Scale Factors](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#example-17-setting-the-minimum-and-maximum-font-scale-factors). |

<a id="minfontsize"></a>
## minFontSize

```TypeScript
minFontSize(value: number | string | Resource)
```

Sets the minimum font size. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

For the setting to take effect, this attribute must be used together with [maxFontSize](TextAreaAttribute#maxFontSize) and [maxLines](TextAreaAttribute#maxLines(value: number)),or layout constraint settings.

When the adaptive font size is used, the **fontSize** settings do not take effect.

If the value of **minFontSize** is less than or equal to 0, the adaptive font sizing feature is disabled. In such cases, the [fontSize](TextAreaAttribute#fontSize) attribute is used instead. If **fontSize** is not explicitly set, its default value will apply.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-minFontSize(value: number | string | Resource): TextAreaAttribute--><!--Device-TextAreaAttribute-minFontSize(value: number | string | Resource): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Minimum font size.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

<a id="minlines"></a>
## minLines

```TypeScript
minLines(lines: Optional<number>)
```

Sets the minimum number of lines displayed for the component. When [constraintSize](arkts-arkui-commonmethod-c.md#constraintsize-1) is set, the component's final height respects the defined constraints.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAreaAttribute-minLines(lines: Optional<number>): TextAreaAttribute--><!--Device-TextAreaAttribute-minLines(lines: Optional<number>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| lines | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Minimum number of lines.<br>Default value: **1**<br>Value range: [1, INT32_MAX]<br>Values less than 1 are treated as the default value. |

<a id="onchange"></a>
## onChange

```TypeScript
onChange(callback: EditableTextOnChangeCallback)
```

Called when the input in the text box changes.

In this callback, if caret operations are performed, you must adjust the caret logic based on the **previewText** parameter of [EditableTextOnChangeCallback](../arkts-apis/arkts-arkui-editabletextonchangecallback-t.md) to ensure it works seamlessly within the preview display scenario.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-onChange(callback: EditableTextOnChangeCallback): TextAreaAttribute--><!--Device-TextAreaAttribute-onChange(callback: EditableTextOnChangeCallback): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [EditableTextOnChangeCallback](../arkts-apis/arkts-arkui-editabletextonchangecallback-t.md) | Yes | Callback invoked when the input in the text box changes.<br>**Since:** 12 |

<a id="oncontentscroll"></a>
## onContentScroll

```TypeScript
onContentScroll(callback: (totalOffsetX: number, totalOffsetY: number) => void)
```

Called when the text content is scrolled.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-onContentScroll(callback: (totalOffsetX: number, totalOffsetY: number) => void): TextAreaAttribute--><!--Device-TextAreaAttribute-onContentScroll(callback: (totalOffsetX: number, totalOffsetY: number) => void): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (totalOffsetX: number, totalOffsetY: number) =&gt; void | Yes | callback of the listened event. |

<a id="oncopy"></a>
## onCopy

```TypeScript
onCopy(callback: (value: string) => void)
```

Called when a copy operation is performed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-onCopy(callback: (value: string) => void): TextAreaAttribute--><!--Device-TextAreaAttribute-onCopy(callback: (value: string) => void): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string) =&gt; void | Yes | Called when using the Clipboard menu. |

<a id="oncut"></a>
## onCut

```TypeScript
onCut(callback: (value: string) => void)
```

Called when a copy operation is performed.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-onCut(callback: (value: string) => void): TextAreaAttribute--><!--Device-TextAreaAttribute-onCut(callback: (value: string) => void): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string) =&gt; void | Yes | Called when using the Clipboard menu. |

<a id="ondiddelete"></a>
## onDidDelete

```TypeScript
onDidDelete(callback: Callback<DeleteValue>)
```

Called when text is deleted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-onDidDelete(callback: Callback<DeleteValue>): TextAreaAttribute--><!--Device-TextAreaAttribute-onDidDelete(callback: Callback<DeleteValue>): TextAreaAttribute-End-->

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

Called when text is inserted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-onDidInsert(callback: Callback<InsertValue>): TextAreaAttribute--><!--Device-TextAreaAttribute-onDidInsert(callback: Callback<InsertValue>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;InsertValue&gt; | Yes | Callback triggered when text is inserted.<br>It is available only for system input methods. |

<a id="oneditchange"></a>
## onEditChange

```TypeScript
onEditChange(callback: (isEditing: boolean) => void)
```

Called when the input state changes. The text box is in the editing state when it has the caret placed in it, and is in the non-editing state otherwise.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-onEditChange(callback: (isEditing: boolean) => void): TextAreaAttribute--><!--Device-TextAreaAttribute-onEditChange(callback: (isEditing: boolean) => void): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (isEditing: boolean) =&gt; void | Yes | Triggered when the text area status changes. |

<a id="onpaste"></a>
## onPaste

```TypeScript
onPaste(callback: (value: string, event: PasteEvent) => void)
```

Called when a paste operation is performed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-onPaste(callback: (value: string, event: PasteEvent) => void): TextAreaAttribute--><!--Device-TextAreaAttribute-onPaste(callback: (value: string, event: PasteEvent) => void): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string, event: PasteEvent) =&gt; void | Yes | Called when using the Clipboard menu. |

<a id="onsubmit"></a>
## onSubmit

```TypeScript
onSubmit(callback: (enterKey: EnterKeyType) => void)
```

Called when the Enter key on the soft keyboard is pressed.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-onSubmit(callback: (enterKey: EnterKeyType) => void): TextAreaAttribute--><!--Device-TextAreaAttribute-onSubmit(callback: (enterKey: EnterKeyType) => void): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (enterKey: EnterKeyType) =&gt; void | Yes | callback of the listened event. |

<a id="onsubmit-1"></a>
## onSubmit

```TypeScript
onSubmit(callback: TextAreaSubmitCallback)
```

Called when the Enter key on the soft keyboard is pressed, providing methods to maintain the editing state of the **TextArea** component upon submission.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-TextAreaAttribute-onSubmit(callback: TextAreaSubmitCallback): TextAreaAttribute--><!--Device-TextAreaAttribute-onSubmit(callback: TextAreaSubmitCallback): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [TextAreaSubmitCallback](arkts-arkui-textareasubmitcallback-t.md) | Yes | Called when the Enter key on the soft keyboard is pressed. |

<a id="ontextselectionchange"></a>
## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void)
```

Called when the text selection changes or the caret position changes during editing.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAreaAttribute--><!--Device-TextAreaAttribute-onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (selectionStart: number, selectionEnd: number) =&gt; void | Yes | callback of the listened event. |

<a id="onwillattachime"></a>
## onWillAttachIME

```TypeScript
onWillAttachIME(callback: Callback<IMEClient> | undefined)
```

Called when the input box is about to be bound to an input method.

<!--Del-->

Before the input box is bound to an input method, you can use the [setKeyboardAppearanceConfig](../arkts-apis/arkts-arkui-arkui-uicontext-uicontext-c-sys.md#setkeyboardappearanceconfig-1) API of **UIContext** to set the keyboard style.<!--DelEnd-->

From API version 22, the [setExtraConfig](../arkts-apis/arkts-arkui-imeclient-i.md#setextraconfig-1) method of [IMEClient](../arkts-apis/arkts-arkui-imeclient-i.md)can be called to set input method extension information. After the input method is bound, it receives this extension information which can be used to implement custom functionality.

**IMEClient** is valid only during the execution of **onWillAttachIME** and cannot be called asynchronously.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextAreaAttribute-onWillAttachIME(callback: Callback<IMEClient> | undefined): TextAreaAttribute--><!--Device-TextAreaAttribute-onWillAttachIME(callback: Callback<IMEClient> | undefined): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;IMEClient&gt; \| undefined | Yes | Callback invoked when the input box is about to be bound to an input method. |

<a id="onwillchange"></a>
## onWillChange

```TypeScript
onWillChange(callback: Callback<EditableTextChangeValue, boolean>)
```

Called when the text content is about to change.

This callback is triggered after **onWillInsert** and **onWillDelete**, but before **onDidInsert** and **onDidDelete**.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-TextAreaAttribute-onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-onWillChange(callback: Callback<EditableTextChangeValue, boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;EditableTextChangeValue, boolean&gt; | Yes | Callback triggered when the text content is about to change.<br>**true**: The change is allowed. **false**: The change is canceled. |

<a id="onwillcopy"></a>
## onWillCopy

```TypeScript
onWillCopy(callback: Callback<string, boolean>)
```

Called before a copy operation is performed.

**Since**: 26.0.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAreaAttribute-onWillCopy(callback: Callback<string, boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-onWillCopy(callback: Callback<string, boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;string, boolean&gt; | Yes | Callback invoked before a copy operation. The callback parameter of the string type indicates the text content to be copied. The callback parameter of the boolean type indicates whether the selected text is allowed to be copied. **true**: The text is allowed to be copied. **false**: The text is not allowed to be copied. |

<a id="onwillcut"></a>
## onWillCut

```TypeScript
onWillCut(callback: Callback<string, boolean>)
```

Called before a cut operation is performed.

**Since**: 26.0.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAreaAttribute-onWillCut(callback: Callback<string, boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-onWillCut(callback: Callback<string, boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;string, boolean&gt; | Yes | Callback invoked before a cut operation. The callback parameter of the string type indicates the text content to be cut. The callback parameter of the boolean type indicates whether the selected text is allowed to be cut. **true**: The text is allowed to be cut. **false**: The text is not allowed to be cut. |

<a id="onwilldelete"></a>
## onWillDelete

```TypeScript
onWillDelete(callback: Callback<DeleteValue, boolean>)
```

Called when text is about to be deleted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-onWillDelete(callback: Callback<DeleteValue, boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-onWillDelete(callback: Callback<DeleteValue, boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;DeleteValue, boolean&gt; | Yes | Callback invoked when text is about to be deleted.<br>It returns **true** if the text is deleted; returns **false** otherwise.<br>This callback is not invoked for text preview.<br>It is available only for system input methods. |

<a id="onwillinsert"></a>
## onWillInsert

```TypeScript
onWillInsert(callback: Callback<InsertValue, boolean>)
```

Called when text is about to be inserted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-onWillInsert(callback: Callback<InsertValue, boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-onWillInsert(callback: Callback<InsertValue, boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;InsertValue, boolean&gt; | Yes | Callback invoked when text is about to be inserted.<br>It returns **true** if the text is inserted; returns **false** otherwise.<br>This callback is not invoked for pre-edit or candidate word operations.<br>It is available only for system input methods. |

<a id="orphancharoptimization"></a>
## orphanCharOptimization

```TypeScript
orphanCharOptimization(enabled: Optional<boolean>)
```

Sets whether to enable orphan character optimization during text layout. If this attribute is not set, orphan character optimization is disabled by default.

Orphan character optimization improves text layout by more efficiently handling isolated characters (the first character on the last line of a paragraph). When enabled, it adjusts line break points to avoid isolated characters whenever possible. This feature takes effect only when [wordBreak](TextAreaAttribute#wordBreak) is not **BREAK_ALL** and the [locale](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textstyle-i.md) of the first [TextStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textstyle-i.md) in the text to be laid out is **"zh-Hans"** or **"zh-Hant"**.

**Since**: 26.0.0

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAreaAttribute-orphanCharOptimization(enabled: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-orphanCharOptimization(enabled: Optional<boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable orphan character optimization for the last line of a paragraph.<br>**true**: Orphan character optimization is enabled. **false**: Orphan character optimization is disabled.<br>If the value is **undefined** or **null**, orphan character optimization is disabled. |

<a id="placeholdercolor"></a>
## placeholderColor

```TypeScript
placeholderColor(value: ResourceColor)
```

Sets the placeholder text color.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-placeholderColor(value: ResourceColor): TextAreaAttribute--><!--Device-TextAreaAttribute-placeholderColor(value: ResourceColor): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Placeholder text color.<br>The default value follows the theme. |

<a id="placeholderfont"></a>
## placeholderFont

```TypeScript
placeholderFont(value: Font)
```

Placeholder text style, including the font size, font weight, font family, and font style.

> **NOTE**  
>  
> You can use [loadFontSync](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-fontcollection-c.md#loadfontsync-1) to register custom fonts.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-placeholderFont(value: Font): TextAreaAttribute--><!--Device-TextAreaAttribute-placeholderFont(value: Font): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | Yes | Placeholder text style. |

<a id="punctuationoverflow"></a>
## punctuationOverflow

```TypeScript
punctuationOverflow(enabled: Optional<boolean>)
```

Whether to enable punctuation overflow at line ends.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAreaAttribute-punctuationOverflow(enabled: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-punctuationOverflow(enabled: Optional<boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable the feature, the default value is false. |

<a id="scrollbarcolor"></a>
## scrollBarColor

```TypeScript
scrollBarColor(thumbColor: ColorMetrics | undefined)
```

Sets the color of the scrollbar.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-TextAreaAttribute-scrollBarColor(thumbColor: ColorMetrics | undefined): TextAreaAttribute--><!--Device-TextAreaAttribute-scrollBarColor(thumbColor: ColorMetrics | undefined): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| thumbColor | [ColorMetrics](../arkts-apis/arkts-arkui-graphics-colormetrics-c.md) \| undefined | Yes | Scrollbar color.<br>Default value: **'#66182431'**, displayed as gray. |

<a id="selectedbackgroundcolor"></a>
## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(value: ResourceColor)
```

Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-selectedBackgroundColor(value: ResourceColor): TextAreaAttribute--><!--Device-TextAreaAttribute-selectedBackgroundColor(value: ResourceColor): TextAreaAttribute-End-->

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

Sets the drag preview style for text being dragged in the multi-line text box.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextAreaAttribute-selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextAreaAttribute--><!--Device-TextAreaAttribute-selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SelectedDragPreviewStyle](../arkts-apis/arkts-arkui-selecteddragpreviewstyle-i.md) \| undefined | Yes | Drag preview style for text being dragged in the multi-line text box.<br>If this parameter is set to **undefined**, the drag preview follows the theme: white in light mode and black in dark mode. |

<a id="selectionmenuhidden"></a>
## selectionMenuHidden

```TypeScript
selectionMenuHidden(value: boolean)
```

Sets whether to hide the system text selection menu.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-selectionMenuHidden(value: boolean): TextAreaAttribute--><!--Device-TextAreaAttribute-selectionMenuHidden(value: boolean): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to hide the system text selection menu.<br>**true**: The system text selection menu does not appear under the following circumstances: clicking the text box cursor, long-pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking the text box.<br>**false**:The system text selection menu appears under the following circumstances: clicking the text box cursor, long-pressing the text box, double-tapping the text box, triple-tapping the text box, or right-clicking the text box.<br>Default value: **false** |

<a id="shaderstyle"></a>
## shaderStyle

```TypeScript
shaderStyle(shader: ShaderStyle | undefined)
```

Sets the text shader style, such as linear gradient or radial gradient.

> **NOTE**  
>  
> When both **shaderStyle** and [strokeWidth](TextAreaAttribute#strokeWidth) are set, **shaderStyle** does  
> not take effect.  
>  
> **shaderStyle** has a higher priority than [fontColor](TextAreaAttribute#fontColor).

**Since**: 26.0.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAreaAttribute-shaderStyle(shader: ShaderStyle | undefined): TextAreaAttribute--><!--Device-TextAreaAttribute-shaderStyle(shader: ShaderStyle | undefined): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | [ShaderStyle](../arkts-apis/arkts-arkui-shaderstyle-c.md) \| undefined | Yes | Text shader style.<br>If the value is **undefined**, no gradient effect is applied. |

<a id="showcounter"></a>
## showCounter

```TypeScript
showCounter(value: boolean, options?: InputCounterOptions)
```

Sets the character counter displayed when the number of characters entered exceeds the threshold. If the **showCounter** API is not called, the character counter is not displayed by default.

**options** can be set only when **value** is set to **true**, in which case a character counter is displayed below the text box. This attribute must be used together with **maxLength**. The character counter is displayed in this format: Number of characters entered/Character limit.

It is visible when the number of characters entered is greater than the character limit multiplied by the threshold percentage value. If **options** is not set, the text box border and character counter subscript turn red when the number of characters entered reaches the limit. If **value** is set to **true** and **options** is set, the text box border and character counter subscript turn red and the text box shakes when the number of characters entered reaches the limit, provided that the value of **thresholdPercentage** is valid. If **highlightBorder** is set to **false**, the text box border does not turn red. By default, **highlightBorder** is set to **true**. The character counter is not displayed for text boxes in inline input style.

[Example 2: Implementing a Counter](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-textarea.md#example-2-implementing-a-counter)shows the effect of setting **showCounter**.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-showCounter(value: boolean, options?: InputCounterOptions): TextAreaAttribute--><!--Device-TextAreaAttribute-showCounter(value: boolean, options?: InputCounterOptions): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to display the character counter.<br>**true**: Character counter is displayed.**false**: Character counter is not displayed. |
| options | [InputCounterOptions](arkts-arkui-inputcounteroptions-i.md) | No | Configuration options for the character counter.<br>**Since:** 11 |

<a id="stopbackpress"></a>
## stopBackPress

```TypeScript
stopBackPress(isStopped: Optional<boolean>)
```

Sets whether to prevent the back key event from being propagated.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-TextAreaAttribute-stopBackPress(isStopped: Optional<boolean>): TextAreaAttribute--><!--Device-TextAreaAttribute-stopBackPress(isStopped: Optional<boolean>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isStopped | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to prevent the back button press from being propagated to other components or applications.<br>**true**: Propagation is prevented. **false**: Propagation is allowed.<br>Default value: **true** The default value is used for abnormal values. |

<a id="strokecolor"></a>
## strokeColor

```TypeScript
strokeColor(color: Optional<ResourceColor>)
```

Sets the text stroke color.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAreaAttribute-strokeColor(color: Optional<ResourceColor>): TextAreaAttribute--><!--Device-TextAreaAttribute-strokeColor(color: Optional<ResourceColor>): TextAreaAttribute-End-->

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

Sets the join style of the text stroke.

**Since**: 26.0.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAreaAttribute-strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextAreaAttribute--><!--Device-TextAreaAttribute-strokeJoinStyle(strokeJoinStyle: StrokeJoinStyle | undefined): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| strokeJoinStyle | [StrokeJoinStyle](../arkts-apis/arkts-arkui-strokejoinstyle-e.md) \| undefined | Yes | Join style of the text stroke.<br>If the value is **undefined**, the join style is **StrokeJoinStyle.MITER_JOIN**. For details, see [StrokeJoinStyle](docroot://reference/apis-arkui/arkui-ts/ts-text-common.md#strokejoinstyle). The text joint appears as a sharp corner. |

<a id="strokewidth"></a>
## strokeWidth

```TypeScript
strokeWidth(width: Optional<LengthMetrics>)
```

Sets the text stroke width.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAreaAttribute-strokeWidth(width: Optional<LengthMetrics>): TextAreaAttribute--><!--Device-TextAreaAttribute-strokeWidth(width: Optional<LengthMetrics>): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | [Optional](arkts-arkui-optional-t.md)&lt;LengthMetrics&gt; | Yes | Text stroke width. When the unit of **LengthMetrics** is **px**:<br>Values < 0: solid text. Values > 0: outlined text.<br>Default value: **0** (no stroke) |

<a id="style"></a>
## style

```TypeScript
style(value: TextContentStyle)
```

Sets the polymorphic style of the text box. The inline input style is only available for the **TextAreaType.NORMAL** type.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-style(value: TextContentStyle): TextAreaAttribute--><!--Device-TextAreaAttribute-style(value: TextContentStyle): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextContentStyle](../arkts-apis/arkts-arkui-textcontentstyle-e.md) | Yes | Polymorphic style of the text box.<br>Default value:**TextContentStyle.DEFAULT** |

<a id="textalign"></a>
## textAlign

```TypeScript
textAlign(value: TextAlign)
```

Sets the horizontal alignment of the text.

Available options are **TextAlign.Start**, **TextAlign.Center**, and **TextAlign.End**. **TextAlign.JUSTIFY** is available since API version 11.

The vertical position of the text paragraph can be controlled by the [align](arkts-arkui-commonmethod-c.md#align-1) attribute, but the horizontal position cannot be controlled by **align** in this component.

- **Alignment.TopStart**, **Alignment.Top**, **Alignment.TopEnd**: Content aligns to the top.  
- **Alignment.Start**, **Alignment.Center**, **Alignment.End**: Content is centered vertically.  
- **Alignment.BottomStart**, **Alignment.Bottom**, **Alignment.BottomEnd:** Content aligns to the bottom.

When **textAlign** is set to **TextAlign.JUSTIFY**, the text in the last line is horizontally aligned with the start edge.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAreaAttribute-textAlign(value: TextAlign): TextAreaAttribute--><!--Device-TextAreaAttribute-textAlign(value: TextAlign): TextAreaAttribute-End-->

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

<!--Device-TextAreaAttribute-textDirection(direction: TextDirection | undefined): TextAreaAttribute--><!--Device-TextAreaAttribute-textDirection(direction: TextDirection | undefined): TextAreaAttribute-End-->

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

<!--Device-TextAreaAttribute-textIndent(value: Dimension): TextAreaAttribute--><!--Device-TextAreaAttribute-textIndent(value: Dimension): TextAreaAttribute-End-->

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

Sets the display mode when the text is too long.

In inline style, the effect of truncating text according to [maxLines](TextAreaAttribute#maxLines(value: number)) only applies when **textOverflow** is set.

Text is clipped at the transition between words. To clip text in the middle of a word, set [wordBreak](../arkts-apis/arkts-arkui-wordbreak-e.md) to **WordBreak.BREAK_ALL**.

If **textOverflow** is set to **TextOverflow.None**, **TextOverflow.Clip**, or **TextOverflow.Ellipsis**, this attribute must be used with [maxLines](TextAreaAttribute#maxLines(value: number)) for the settings to take effect. **TextOverflow.None** produces the same effect as **TextOverflow.Clip**.

> **NOTE**  
>  
> The **TextArea** component does not support the **TextOverflow.MARQUEE** mode. If this attribute is set to  
> **TextOverflow.MARQUEE**, **TextOverflow.Clip** is used instead.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-textOverflow(value: TextOverflow): TextAreaAttribute--><!--Device-TextAreaAttribute-textOverflow(value: TextOverflow): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextOverflow](../arkts-apis/arkts-arkui-textoverflow-e.md) | Yes | Display mode when the text is too long.<br>Default value: **TextOverflow.Clip** |

<a id="type"></a>
## type

```TypeScript
type(value: TextAreaType)
```

Sets the text box type.

Different **TextAreaType** values trigger corresponding keyboard types and enforce input restrictions.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-type(value: TextAreaType): TextAreaAttribute--><!--Device-TextAreaAttribute-type(value: TextAreaType): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextAreaType](arkts-arkui-textareatype-e.md) | Yes | Text box type.<br>Default value: **TextAreaType.NORMAL**. |

<a id="wordbreak"></a>
## wordBreak

```TypeScript
wordBreak(value: WordBreak)
```

Sets the word break rule. This attribute does not take effect for the placeholder text.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAreaAttribute-wordBreak(value: WordBreak): TextAreaAttribute--><!--Device-TextAreaAttribute-wordBreak(value: WordBreak): TextAreaAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [WordBreak](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-wordbreak-e.md) | Yes | Word break rule.<br>Default value: **WordBreak.BREAK_WORD** |

