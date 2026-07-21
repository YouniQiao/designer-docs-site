# Text properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

**Layout and Alignment**

In addition to the [universal events](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following events are supported.

**Inheritance/Implementation:** TextAttribute extends [CommonMethod<TextAttribute>](CommonMethod<TextAttribute>)

**Since:** 7

<!--Device-unnamed-declare class TextAttribute extends CommonMethod<TextAttribute>--><!--Device-unnamed-declare class TextAttribute extends CommonMethod<TextAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="baselineoffset"></a>
## baselineOffset

```TypeScript
baselineOffset(value: number | ResourceStr)
```

Sets the offset of the text baseline.

Percentage values follow default display behavior.

A positive value moves the content upwards, while a negative value moves it downwards.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-baselineOffset(value: number | ResourceStr): TextAttribute--><!--Device-TextAttribute-baselineOffset(value: number | ResourceStr): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| ResourceStr | Yes | Offset of the text baseline.<br>Unit: fp. Default value: 0.<br>**Since:** 20 |

<a id="bindselectionmenu"></a>
## bindSelectionMenu

```TypeScript
bindSelectionMenu(spanType: TextSpanType, content: CustomBuilder, responseType: TextResponseType,
    options?: SelectionMenuOptions)
```

Sets the custom selection menu.

The long-press response duration of **bindSelectionMenu** is 600 ms while that of [bindContextMenu](arkts-arkui-commonmethod-c.md#bindcontextmenu-1)is 800 ms. When both are bound and their triggering methods are set to long press, **bindSelectionMenu** takes precedence.

When the custom menu is too long, it is recommended that nest a [Scroll](arkts-arkui-scroll.md) component inside to prevent the keyboard from being obscured.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).  
>  
> When [editMenuOptions](TextAttribute#editMenuOptions) is used for configuring the text selection menu, the  
> system's default style and trigger conditions are preserved.  
>  
> In contrast, when [bindSelectionMenu](TextAttribute#bindSelectionMenu) is used, both the menu style and the  
> trigger conditions are fully customizable.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-bindSelectionMenu(spanType: TextSpanType, content: CustomBuilder, responseType: TextResponseType,
    options?: SelectionMenuOptions): TextAttribute--><!--Device-TextAttribute-bindSelectionMenu(spanType: TextSpanType, content: CustomBuilder, responseType: TextResponseType,
    options?: SelectionMenuOptions): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| spanType | [TextSpanType](arkts-arkui-textspantype-e.md) | Yes | Span type of the menu.<br>Default value: **TextSpanType.TEXT** |
| content | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Content of the menu. |
| responseType | [TextResponseType](arkts-arkui-textresponsetype-e.md) | Yes | Response type of the menu.<br>Default value:**TextResponseType.LONG_PRESS** |
| options | [SelectionMenuOptions](../arkts-apis/arkts-arkui-arkui-advanced-selectionmenu-selectionmenuoptions-i.md) | No | Options of the menu. |

<a id="caretcolor"></a>
## caretColor

```TypeScript
caretColor(color: ResourceColor)
```

Sets the color of the text selection handle, also known as the caret, in the text box.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-TextAttribute-caretColor(color: ResourceColor): TextAttribute--><!--Device-TextAttribute-caretColor(color: ResourceColor): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Color of the text selection handle.<br>Default value: **'#007DFF'** |

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

<!--Device-TextAttribute-compressLeadingPunctuation(enabled: Optional<boolean>): TextAttribute--><!--Device-TextAttribute-compressLeadingPunctuation(enabled: Optional<boolean>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable leading punctuation compression.<br>**true**: Leading punctuation compression is enabled. **false**: Leading punctuation compression is disabled. |

<a id="contenttransition"></a>
## contentTransition

```TypeScript
contentTransition(transition: Optional<ContentTransition>)
```

Applies a transition animation to text content. Supports numeric flip animation via [NumericTextTransition](../arkts-apis/arkts-arkui-numerictexttransition-c.md).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAttribute-contentTransition(transition: Optional<ContentTransition>): TextAttribute--><!--Device-TextAttribute-contentTransition(transition: Optional<ContentTransition>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transition | [Optional](arkts-arkui-optional-t.md)&lt;ContentTransition&gt; | Yes | Text animation effect. |

<a id="copyoption"></a>
## copyOption

```TypeScript
copyOption(value: CopyOptions)
```

Sets whether copy and paste operations are allowed.

Since API version 20, copied text from the **Text** component includes HTML-formatted content in the pasteboard.

- When the **Text** component contains child elements, only [Span](arkts-arkui-span.md) and [ImageSpan](arkts-arkui-imagespan.md)support HTML-formatted pasteboard content.  
- For styled strings, refer to [toHtml](../arkts-apis/arkts-arkui-styledstring-c.md#tohtml-1) for supported HTML conversion scope.

When **copyOption** is set to **CopyOptions.InApp** or **CopyOptions.LocalDevice**:

- A long press on the text will display a menu that offers the copy and select-all options.  
- By default, selected text is draggable. To disable dragging, set **draggable** to **false**.  
- To support **Ctrl+C** copying, also set [textSelectable](TextAttribute#textSelectable) to **TextSelectableMode.SELECTABLE_FOCUSABLE**.

The **Text** component listens for **onClick**, which is a non-bubbling event. To allow parent components to respond to clicks within the **Text** area, use [parallelGesture](arkts-arkui-commonmethod-c.md#parallelgesture-1) on the parent. For implementation guidance, see [Example 7: Setting Text Recognition](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#example-7-setting-text-recognition).

Because widgets do not have the long press event, the menu will not be displayed when users long press text.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-copyOption(value: CopyOptions): TextAttribute--><!--Device-TextAttribute-copyOption(value: CopyOptions): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CopyOptions](../arkts-apis/arkts-arkui-copyoptions-e.md) | Yes | Whether copy and paste operations are allowed.<br>Default value:**CopyOptions.None** |

<a id="datadetectorconfig"></a>
## dataDetectorConfig

```TypeScript
dataDetectorConfig(config: TextDataDetectorConfig)
```

Configures text recognition settings, including entity types to detect, display styles for detected entities, and long-press preview options.

This API must be used together with [enableDataDetector](TextAttribute#enableDataDetector). It takes effect only when **enableDataDetector** is set to **true**.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-dataDetectorConfig(config: TextDataDetectorConfig): TextAttribute--><!--Device-TextAttribute-dataDetectorConfig(config: TextDataDetectorConfig): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [TextDataDetectorConfig](../arkts-apis/arkts-arkui-textdatadetectorconfig-i.md) | Yes | Text recognition configuration. |

<a id="decoration"></a>
## decoration

```TypeScript
decoration(value: DecorationStyleInterface)
```

Style and color of the text decorative line.

> **NOTE**  
>  
> When the bottom contour of a character intersects with the decoration, underline avoidance is triggered, commonly  
> affecting characters like "g", "j", "y", "q", and "p."  
>  
> If the decoration color is set to **Color.Transparent**, it inherits the text color of the first character in  
> each line. If the decoration color is set to **"#00FFFFFF"**, the line becomes fully transparent.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-decoration(value: DecorationStyleInterface): TextAttribute--><!--Device-TextAttribute-decoration(value: DecorationStyleInterface): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [DecorationStyleInterface](../arkts-apis/arkts-arkui-decorationstyleinterface-i.md) | Yes | Style of the text decorative line.<br>Default value:<br>{<br> type:TextDecorationType.None,<br> color: Color.Black,<br> style: TextDecorationStyle.SOLID <br>}<br>**NOTE**<br>The **style** parameter cannot be used in widgets.<br>**Since:** 12 |

<a id="draggable"></a>
## draggable

```TypeScript
draggable(value: boolean)
```

Sets the drag effect of the selected text.

This attribute cannot be used together with the [onDragStart](arkts-arkui-commonmethod-c.md#ondragstart-1) event.

If set to **true**, **draggable** must be used in conjunction with [CopyOptions](../../apis-core-file-kit/arkts-apis/arkts-corefile-file-fs-copyoptions-i.md). When **copyOptions** is set to **CopyOptions.InApp** or **CopyOptions.LocalDevice**, the selected text becomes draggable and can be copied into a text box.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAttribute-draggable(value: boolean): TextAttribute--><!--Device-TextAttribute-draggable(value: boolean): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Drag effect of the selected text.<br>**true**: The selected text is draggable.**false**: The selected text is not draggable.<br>Default value: **false** |

<a id="editmenuoptions"></a>
## editMenuOptions

```TypeScript
editMenuOptions(editMenu: EditMenuOptions)
```

Sets the extended options for the custom menu, including the text content, icon, and callback.

When [disableMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablemenuitems20) or

[disableSystemServiceMenuItems](docroot://reference/apis-arkui/arkts-apis-uicontext-textmenucontroller.md#disablesystemservicemenuitems20)is used to disable system service menu items in the text selection menu, the disabled menu options will be excluded from the parameter list in the [onCreateMenu](../arkts-apis/arkts-arkui-editmenuoptions-i.md#oncreatemenu-1) callback of **editMenuOptions**.

> **NOTE**  
>  
> When [editMenuOptions](TextAttribute#editMenuOptions) is used for configuring the text selection menu, the  
> system's default style and trigger conditions are preserved.  
>  
> In contrast, when [bindSelectionMenu](TextAttribute#bindSelectionMenu) is used, both the menu style and the  
> trigger conditions are fully customizable.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-editMenuOptions(editMenu: EditMenuOptions): TextAttribute--><!--Device-TextAttribute-editMenuOptions(editMenu: EditMenuOptions): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | [EditMenuOptions](../arkts-apis/arkts-arkui-editmenuoptions-i.md) | Yes | Extended options of the custom menu. |

<a id="ellipsismode"></a>
## ellipsisMode

```TypeScript
ellipsisMode(value: EllipsisMode)
```

Sets the ellipsis position.

For the settings to work, **overflow** must be set to **TextOverflow.Ellipsis** and **maxLines** must be specified.Setting **ellipsisMode** alone does not take effect.

**EllipsisMode.START** and **EllipsisMode.CENTER** take effect only when text overflows in a single line.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-ellipsisMode(value: EllipsisMode): TextAttribute--><!--Device-TextAttribute-ellipsisMode(value: EllipsisMode): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [EllipsisMode](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-ellipsismode-e.md) | Yes | Ellipsis position.<br>Default value: **EllipsisMode.END** |

<a id="enableautospacing"></a>
## enableAutoSpacing

```TypeScript
enableAutoSpacing(enabled: Optional<boolean>)
```

Sets whether to enable automatic spacing between Chinese and Western characters.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAttribute-enableAutoSpacing(enabled: Optional<boolean>): TextAttribute--><!--Device-TextAttribute-enableAutoSpacing(enabled: Optional<boolean>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable automatic spacing between Chinese and Western characters.<br>**true** to enable, **false** otherwise.<br>Default value: **false** |

<a id="enabledatadetector"></a>
## enableDataDetector

```TypeScript
enableDataDetector(enable: boolean)
```

Sets whether to enable special entity detection within the text. Special entities are detected when **enableDataDetector** is set to **true**.

The style of detected entities is as follows: the font color is changed to blue, and a blue underline is added.

> **NOTE**  
>  
> - This API takes effect only when the device has an underlying text detection capability.  
>  
> - When [textOverflow](TextAttribute#textOverflow) is set to **TextOverflow.MARQUEE**, text special entity  
> detection is not performed.

<!--RP2--><!--RP2End-->

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-enableDataDetector(enable: boolean): TextAttribute--><!--Device-TextAttribute-enableDataDetector(enable: boolean): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable text recognition.<br>**true**: Enable text recognition. **false**:Disable text recognition.<br>Default value: **false** |

<a id="enablehapticfeedback"></a>
## enableHapticFeedback

```TypeScript
enableHapticFeedback(isEnabled: boolean)
```

Sets whether to enable haptic feedback.

To enable haptic feedback, you must declare the **ohos.permission.VIBRATE** permission under **requestPermissions** in the [module.json5](docroot://quick-start/module-configuration-file.md) file of the project.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 18.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-TextAttribute-enableHapticFeedback(isEnabled: boolean): TextAttribute--><!--Device-TextAttribute-enableHapticFeedback(isEnabled: boolean): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | boolean | Yes | Whether to enable haptic feedback.<br>**true** to enable, **false** otherwise.<br>Default value: **true** |

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

<!--Device-TextAttribute-enableSelectedDataDetector(enable: boolean | undefined): TextAttribute--><!--Device-TextAttribute-enableSelectedDataDetector(enable: boolean | undefined): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean \| undefined | Yes | Whether to enable entity recognition for selected text.<br>**true**: Entity recognition is enabled. **false**: Entity recognition is disabled. Default value: **true** |

<a id="fallbacklinespacing"></a>
## fallbackLineSpacing

```TypeScript
fallbackLineSpacing(enabled: Optional<boolean>)
```

Adapts the line height to the actual text height for overlapped multi-line text. This API takes effect only when the line height is less than the actual text height. If this API is not set, the line height does not adapt to the actual text height by default.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextAttribute-fallbackLineSpacing(enabled: Optional<boolean>): TextAttribute--><!--Device-TextAttribute-fallbackLineSpacing(enabled: Optional<boolean>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether the line height adapts to the actual text height.<br>**true**: Line height adapts to the actual text height. **false**: Line height does not adapt to the actual text height. |

<a id="font"></a>
## font

```TypeScript
font(value: Font)
```

Sets the text style, covering the font size, font width, font family, and font style.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAttribute-font(value: Font): TextAttribute--><!--Device-TextAttribute-font(value: Font): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | Yes | Text style. |

<a id="font-1"></a>
## font

```TypeScript
font(fontValue: Font, options?: FontSettingOptions)
```

Sets the font style, with support for font settings.

It is only effective for the **Text** component, not for its child components.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-TextAttribute-font(fontValue: Font, options?: FontSettingOptions): TextAttribute--><!--Device-TextAttribute-font(fontValue: Font, options?: FontSettingOptions): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontValue | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | Yes | Sets the text style. |
| options | [FontSettingOptions](../arkts-apis/arkts-arkui-fontsettingoptions-i.md) | No | Font settings. |

<a id="fontcolor"></a>
## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-fontColor(value: ResourceColor): TextAttribute--><!--Device-TextAttribute-fontColor(value: ResourceColor): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color.<br>Default value: **'#e6182431'**<br>Default value for wearables:**'#c5ffffff'** |

<a id="fontfamily"></a>
## fontFamily

```TypeScript
fontFamily(value: string | Resource)
```

Sets the font family.

> **NOTE**  
>  
> You can use [loadFontSync](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-fontcollection-c.md#loadfontsync-1) to register custom fonts.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-fontFamily(value: string | Resource): TextAttribute--><!--Device-TextAttribute-fontFamily(value: string | Resource): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | Font family. Default font: **'HarmonyOS Sans'**<br>To specify multiple fonts,separate them with commas (,), and fonts are applied in priority order. Example: **'Arial, HarmonyOS Sans'**. |

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

> **NOTE**  
>  
> The **Text** component cannot contain both text and the child component **Span** or **ImageSpan**. If both of  
> them exist, only the content in **Span** or **ImageSpan** is displayed.  
>  
> The typesetting engine rounds down the value of [width](arkts-arkui-commonmethod-c.md#width-1) to ensure that  
> the value is an integer. If the typesetting engine rounds up the value instead, the right side of the text may be  
> clipped.  
>  
> When multiple **Text** components are placed in the [Row](arkts-arkui-row.md) container with no specific layout or space  
> allocation settings configured, the components are laid out based on the maximum size of the container. To make  
> sure the sum of the components' main axis sizes does not exceed the main axis size of the container, you can set  
> [layoutWeight](arkts-arkui-commonmethod-c.md#layoutweight-1) or use the [flex layout](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md).  
>  
> The system's default font supports the following ligatures: Th, fb, ff, fb, ffb, ffh, ffi, ffk, ffl, fh, fi, fk,  
> fl, rf, rt, rv, rx, ry. These ligatures may cause unexpected effects of spans and styled strings. Disabling the  
> ligature feature can avoid this issue.  
>  
> Text rendering behavior is closely tied to the font file in use. For instance, the system's default font supports  
> 8-punctuation compression only for left-side punctuation marks. Right-side punctuation, including exclamation  
> marks, enumeration commas, and question marks, is not affected by this feature.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-TextAttribute-fontFeature(value: string): TextAttribute--><!--Device-TextAttribute-fontFeature(value: string): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Font feature. |

<a id="fontsize"></a>
## fontSize

```TypeScript
fontSize(value: number | string | Resource)
```

Sets the text size.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-fontSize(value: number | string | Resource): TextAttribute--><!--Device-TextAttribute-fontSize(value: number | string | Resource): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Font size. If **fontSize** is of the number type, the unit fp is used. This parameter cannot be set in percentage.<br>Default value: **16fp**<br>Default value on wearable devices: **15fp** |

<a id="fontstyle"></a>
## fontStyle

```TypeScript
fontStyle(value: FontStyle)
```

Sets the font style.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-fontStyle(value: FontStyle): TextAttribute--><!--Device-TextAttribute-fontStyle(value: FontStyle): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [FontStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-fontstyle-e.md) | Yes | Font style.<br>Default value: **FontStyle.Normal** |

<a id="fontvariations"></a>
## fontVariations

```TypeScript
fontVariations(fontVariations: Array<FontVariation>)
```

Set the font variation.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAttribute-fontVariations(fontVariations: Array<FontVariation>): TextAttribute--><!--Device-TextAttribute-fontVariations(fontVariations: Array<FontVariation>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontVariations | Array&lt;FontVariation&gt; | Yes | Indicates the text font variation. |

<a id="fontweight"></a>
## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | ResourceStr)
```

Sets the font weight. If the value is too large, the text may be clipped depending on the font.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-fontWeight(value: number | FontWeight | ResourceStr): TextAttribute--><!--Device-TextAttribute-fontWeight(value: number | FontWeight | ResourceStr): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| ResourceStr | Yes | Font weight. For the number type, the value range is [100, 900], at an interval of 100. The default value is **400**. A larger value indicates a heavier font weight. For the string type, only strings that represent a number, for example, **400**, and the following enumerated values of **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>Default value: **FontWeight.Normal**<br>Default value on wearable devices:**FontWeight.Regular**<br>The [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md) type is supported since API version 20.<br>**Since:** 20 |

<a id="fontweight-1"></a>
## fontWeight

```TypeScript
fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions)
```

Sets the text font weight, with support for font settings.

It is only effective for the **Text** component, not for its child components.<!--RP4--><!--RP4End-->

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-TextAttribute-fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions): TextAttribute--><!--Device-TextAttribute-fontWeight(weight: number | FontWeight | ResourceStr, options?: FontSettingOptions): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| weight | number \| FontWeight \| ResourceStr | Yes | Font weight. For the number type, the value ranges from 100to 900, at an interval of 100. A larger value indicates a heavier font weight. The default value is **400**.For the string type, only strings that represent a number, for example, **400**, and the following enumerated values of **FontWeight** are supported: **bold**, **bolder**, **lighter**, **regular**, and **medium**.<br>The [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md) type is supported since API version 20.<br>**Since:** 20 |
| options | [FontSettingOptions](../arkts-apis/arkts-arkui-fontsettingoptions-i.md) | No | Font setting options.<br>When **enableVariableFontWeight** in **options** is set to **false**, variable font weight adjustment is disabled. If **weight** is set to a value at intervals of 100 within [100, 900], the font weight uses the specified value. If **weight** is set to a value that is not a multiple of 100, the default value **400** is used.<br>When **enableVariableFontWeight** in **options** is set to **true**, variable font weight adjustment is enabled. If **weight** is set to any integer within [100, 900], the font weight uses the specified value. |

<a id="halfleading"></a>
## halfLeading

```TypeScript
halfLeading(halfLeading: boolean)
```

Whether half leading is enabled. Half leading refers to splitting the leading in half and applying it equally to the top and bottom of the line.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-halfLeading(halfLeading: boolean): TextAttribute--><!--Device-TextAttribute-halfLeading(halfLeading: boolean): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| halfLeading | boolean | Yes | Whether half leading is enabled. Half leading refers to splitting the leading in half and applying it equally to the top and bottom of the line.<br>**true**: Half leading is enabled.**false**: Half leading is not enabled.<br>Default value: **false** |

<a id="heightadaptivepolicy"></a>
## heightAdaptivePolicy

```TypeScript
heightAdaptivePolicy(value: TextHeightAdaptivePolicy)
```

Sets the font size adjustment strategy for adaptive text layout.

The available modes are as follows:

- **MAX_LINES_FIRST**: prioritizes using the [maxLines](TextAttribute#maxLines) attribute to control text height. If the **maxLines** setting results in a layout beyond the layout constraints, the text will shrink to a font size between [minFontSize](TextAttribute#minFontSize) and [maxFontSize](TextAttribute#maxFontSize)to allow for more content to be shown.  
- **MIN_FONT_SIZE_FIRST**: prioritizes using the **minFontSize** attribute to control text height. If the text fits on one line at **minFontSize**, the system attempts to increase the font size between **minFontSize** and **maxFontSize** to fill the line with the largest available font size. If the text cannot fit on a single line even at **minFontSize**, it sticks with **minFontSize**.  
- **LAYOUT_CONSTRAINT_FIRST**: prioritizes using layout constraints to control text height. If the resultant layout is beyond the layout constraints, the text will shrink to a font size between **minFontSize** and **maxFontSize** to respect the layout constraints. If the text still extends beyond the layout constraints after shrinking to **minFontSize**, the lines that exceed the constraints are deleted.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAttribute-heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAttribute--><!--Device-TextAttribute-heightAdaptivePolicy(value: TextHeightAdaptivePolicy): TextAttribute-End-->

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

<!--Device-TextAttribute-includeFontPadding(include: Optional<boolean>): TextAttribute--><!--Device-TextAttribute-includeFontPadding(include: Optional<boolean>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| include | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to add spacing to the first and last lines to avoid text truncation.<br>**true**: Spacing is added to the first and last lines. **false**: Spacing is not added to the first and last lines. |

<a id="incrementalupdatepolicy"></a>
## incrementalUpdatePolicy

```TypeScript
incrementalUpdatePolicy(policy: IncrementalUpdatePolicy | undefined)
```

Sets the incremental update policy for text rendering.

This API takes effect only when Text content contains a StyledString.Default value is IncrementalUpdatePolicy.NONE.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAttribute-incrementalUpdatePolicy(policy: IncrementalUpdatePolicy | undefined): TextAttribute--><!--Device-TextAttribute-incrementalUpdatePolicy(policy: IncrementalUpdatePolicy | undefined): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | [IncrementalUpdatePolicy](../arkts-apis/arkts-arkui-incrementalupdatepolicy-e.md) \| undefined | Yes | Indicates the incremental update policy.Passing `undefined` resets it to the default value. |

<a id="letterspacing"></a>
## letterSpacing

```TypeScript
letterSpacing(value: number | ResourceStr)
```

Sets the letter spacing for a text style.

If the value specified is a percentage or **0**, the default value is used. For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

Negative values compress text. Excessive compression may reduce content area to zero, hiding content.

This setting applies to every character, including those at line endings.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-letterSpacing(value: number | ResourceStr): TextAttribute--><!--Device-TextAttribute-letterSpacing(value: number | ResourceStr): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| ResourceStr | Yes | Letter spacing.<br>Default value: **0**<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md)<br>The [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md) type is supported since API version 20.<br>**Since:** 20 |

<a id="linebreakstrategy"></a>
## lineBreakStrategy

```TypeScript
lineBreakStrategy(strategy: LineBreakStrategy)
```

Sets the line break rule. This attribute takes effect only when [wordBreak](TextAttribute#wordBreak) is not **WordBreak.BREAK_ALL**. Hyphens are not supported.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-lineBreakStrategy(strategy: LineBreakStrategy): TextAttribute--><!--Device-TextAttribute-lineBreakStrategy(strategy: LineBreakStrategy): TextAttribute-End-->

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

Sets the text line height.

If the value is less than or equal to **0**, the line height is unrestricted and adapts to the font size. When the value is a number, the unit is fp. For the string type, numeric string values with optional units, for example,**"10"** or **"10fp"**, are supported.

> **NOTE**  
>  
> If certain characters have significantly taller glyphs than others in the same line, layout anomalies such as  
> clipping, overlapping, or misalignment may occur. In this case, adjust component attributes such as height and  
> line height to ensure proper layout rendering.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-lineHeight(value: number | string | Resource): TextAttribute--><!--Device-TextAttribute-lineHeight(value: number | string | Resource): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Text line height. |

<a id="lineheightmultiple"></a>
## lineHeightMultiple

```TypeScript
lineHeightMultiple(value: number | undefined)
```

Sets the line height of text in multiple mode.

The line height equals the input parameter **value** multiplied by **fontHeight**.

> **NOTE**  
>  
> When both this API and [lineHeight](TextAttribute#lineHeight) are set, only **lineHeightMultiple** takes  
> effect.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-TextAttribute-lineHeightMultiple(value: number | undefined): TextAttribute--><!--Device-TextAttribute-lineHeightMultiple(value: number | undefined): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| undefined | Yes | Multiplier for the line height.<br>Value range: ≥ 0<br>Values ≤ 0 are treated as **0**. When the value is set to **0**, the default line height is used. Decimal values are supported. |

<a id="linespacing"></a>
## lineSpacing

```TypeScript
lineSpacing(value: LengthMetrics)
```

Sets the line spacing of the text. If the value specified is less than or equal to 0, the default value **0** is used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-lineSpacing(value: LengthMetrics): TextAttribute--><!--Device-TextAttribute-lineSpacing(value: LengthMetrics): TextAttribute-End-->

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

<!--Device-TextAttribute-lineSpacing(value: LengthMetrics, options?: LineSpacingOptions): TextAttribute--><!--Device-TextAttribute-lineSpacing(value: LengthMetrics, options?: LineSpacingOptions): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](../arkts-apis/arkts-arkui-lengthmetrics-t.md) | Yes | Line spacing. Values less than or equal to 0 are treated as the default value **0**. |
| options | [LineSpacingOptions](../arkts-apis/arkts-arkui-linespacingoptions-i.md) | No | Line spacing configuration options.<br>Default value:**{ onlyBetweenLines: false }** |

<a id="marqueeoptions"></a>
## marqueeOptions

```TypeScript
marqueeOptions(options: Optional<TextMarqueeOptions>)
```

Sets the marquee effect for text.

The **marqueeOptions** settings take effect only when **textOverflow** is set to **TextOverflow.MARQUEE**.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextAttribute-marqueeOptions(options: Optional<TextMarqueeOptions>): TextAttribute--><!--Device-TextAttribute-marqueeOptions(options: Optional<TextMarqueeOptions>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;TextMarqueeOptions&gt; | Yes | Marquee animation properties such as enable/disable, step size,loop count, and direction. |

<a id="maxfontscale"></a>
## maxFontScale

```TypeScript
maxFontScale(scale: number | Resource)
```

Sets the maximum font scale factor for text.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-maxFontScale(scale: number | Resource): TextAttribute--><!--Device-TextAttribute-maxFontScale(scale: number | Resource): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number \| Resource | Yes | Maximum font scale factor for text.<br>Value range:[1, +∞)<br>**NOTE**<br>Values less than 1 are treated as **1**. Other invalid values are ineffective by default. |

<a id="maxfontsize"></a>
## maxFontSize

```TypeScript
maxFontSize(value: number | string | Resource)
```

Sets the maximum font size.

For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

For the setting to take effect, this attribute must be used together with [minFontSize](TextAttribute#minFontSize) and [maxLines](TextAttribute#maxLines), or layout constraint settings.

When the adaptive font size is used, the **fontSize** settings do not take effect.

If the value of **maxFontSize** is less than or equal to 0 or is less than the value of **minFontSize**, the adaptive font sizing feature is disabled. In such cases, the [fontSize](TextAttribute#fontSize) attribute is used instead. If **fontSize** is not set, the default value will apply.

Since API version 18, adaptive font sizing is supported on child components and styled strings, and text segments without an explicitly defined font size will automatically adjust based on the available space.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-maxFontSize(value: number | string | Resource): TextAttribute--><!--Device-TextAttribute-maxFontSize(value: number | string | Resource): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Maximum font size.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

<a id="maxlineheight"></a>
## maxLineHeight

```TypeScript
maxLineHeight(value: LengthMetrics | undefined)
```

Sets the maximum line height of text. If the value is less than or equal to 0, the maximum line height is unrestricted.

If **maxLineHeight** is less than **minLineHeight**, **maxLineHeight** takes effect using the value of **minLineHeight**.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-TextAttribute-maxLineHeight(value: LengthMetrics | undefined): TextAttribute--><!--Device-TextAttribute-maxLineHeight(value: LengthMetrics | undefined): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](../arkts-apis/arkts-arkui-lengthmetrics-t.md) \| undefined | Yes | Maximum line height of text. Percentage values are not supported.<br>Values less than or equal to 0 are treated as **0**. When the value is set to **0**, the maximum line height is unrestricted. |

<a id="maxlines"></a>
## maxLines

```TypeScript
maxLines(value: number)
```

Sets the maximum number of lines for text.

By default, text is automatically folded. If this attribute is specified, the text will not exceed the specified number of lines. If there is extra text, you can use [textOverflow](TextAttribute#textOverflow) to specify how it is displayed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-maxLines(value: number): TextAttribute--><!--Device-TextAttribute-maxLines(value: number): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Maximum number of lines of the text.<br>**NOTE**<br>Value range: [0, *INT32_MAX*]<br>If this parameter is set to **0**, no text content is displayed. |

<a id="minfontscale"></a>
## minFontScale

```TypeScript
minFontScale(scale: number | Resource)
```

Sets the minimum font scale factor for text.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-minFontScale(scale: number | Resource): TextAttribute--><!--Device-TextAttribute-minFontScale(scale: number | Resource): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number \| Resource | Yes | Minimum font scale factor for text.<br>Value range: [0, 1]<br>**NOTE**<br>Values less than 0 are treated as 0, and values greater than 1 are treated as 1. Other invalid values do not take effect by default. |

<a id="minfontsize"></a>
## minFontSize

```TypeScript
minFontSize(value: number | string | Resource)
```

Sets the minimum font size.

For the string type, numeric string values with optional units, for example, **"10"** or **"10fp"**, are supported.

For the setting to take effect, this attribute must be used together with [maxFontSize](TextAttribute#maxFontSize) and [maxLines](TextAttribute#maxLines), or layout constraint settings.

When the adaptive font size is used, the **fontSize** settings do not take effect.

If the value of **minFontSize** is less than or equal to 0, the adaptive font sizing feature is disabled. In such cases, the [fontSize](TextAttribute#fontSize) attribute is used instead. If **fontSize** is not set, the default value will apply.

Since API version 18, adaptive font sizing is supported on child components and styled strings, and text segments without an explicitly defined font size will automatically adjust based on the available space.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-minFontSize(value: number | string | Resource): TextAttribute--><!--Device-TextAttribute-minFontSize(value: number | string | Resource): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string \| Resource | Yes | Minimum font size.<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

<a id="minlineheight"></a>
## minLineHeight

```TypeScript
minLineHeight(value: LengthMetrics | undefined)
```

Sets the minimum line height of text. If the value is less than or equal to 0, the default value **0** is used.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-TextAttribute-minLineHeight(value: LengthMetrics | undefined): TextAttribute--><!--Device-TextAttribute-minLineHeight(value: LengthMetrics | undefined): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LengthMetrics](../arkts-apis/arkts-arkui-lengthmetrics-t.md) \| undefined | Yes | Minimum line height of text. Percentage values are not supported.<br>Values less than or equal to 0 are treated as **0**. |

<a id="minlines"></a>
## minLines

```TypeScript
minLines(minLines: Optional<number>)
```

Sets the minimum number of lines for text.

If the actual text height is less than the height for the minimum number of lines, the component uses the height corresponding to the minimum number of lines.

When this API and [maxLines](TextAttribute#maxLines) are both set, the minimum line height cannot exceed the maximum line height.

If [constraintSize](arkts-arkui-commonmethod-c.md#constraintsize-1) is set for the text, the component height is confined within the [constraintSize](arkts-arkui-commonmethod-c.md#constraintsize-1) bounds.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-TextAttribute-minLines(minLines: Optional<number>): TextAttribute--><!--Device-TextAttribute-minLines(minLines: Optional<number>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minLines | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Minimum number of lines of the text.<br>Value range: [0, *INT32_MAX*]<br>Values less than 0 are clamped to **0**. |

<a id="oncopy"></a>
## onCopy

```TypeScript
onCopy(callback: (value: string) => void)
```

Called when data is copied to the pasteboard, which is displayed when the text box is long pressed. Currently, only text can be copied.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAttribute-onCopy(callback: (value: string) => void): TextAttribute--><!--Device-TextAttribute-onCopy(callback: (value: string) => void): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: string) =&gt; void | Yes | Callback of the listened event. |

<a id="onmarqueestatechange"></a>
## onMarqueeStateChange

```TypeScript
onMarqueeStateChange(callback: Callback<MarqueeState>)
```

Called when the marquee animation reaches the specified state.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-TextAttribute-onMarqueeStateChange(callback: Callback<MarqueeState>): TextAttribute--><!--Device-TextAttribute-onMarqueeStateChange(callback: Callback<MarqueeState>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;MarqueeState&gt; | Yes | Callback that receives a **MarqueeState** enum value, which indicates the current state of the marquee animation. |

<a id="ontextselectionchange"></a>
## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void)
```

Called when the text selection position changes.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAttribute--><!--Device-TextAttribute-onTextSelectionChange(callback: (selectionStart: number, selectionEnd: number) => void): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (selectionStart: number, selectionEnd: number) =&gt; void | Yes | Callback of the listened event. |

<a id="onwillcopy"></a>
## onWillCopy

```TypeScript
onWillCopy(callback: Callback<string, boolean>)
```

Called before the copy operation is performed.

**Since**: 26.0.0

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAttribute-onWillCopy(callback: Callback<string, boolean>): TextAttribute--><!--Device-TextAttribute-onWillCopy(callback: Callback<string, boolean>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;string, boolean&gt; | Yes | The string type indicates the text to be copied.<br>The boolean type indicates whether the text can be copied. The value **true** means yes and **false** means no. |

<a id="optimizetrailingspace"></a>
## optimizeTrailingSpace

```TypeScript
optimizeTrailingSpace(optimize: Optional<boolean>)
```

Sets whether to optimize trailing spaces at line endings during text layout, resolving alignment display issues caused by trailing spaces.

When **Text.optimizeTrailingSpace** is set to **true**:

* Trailing space optimization applies to multi-line text, single-line text, and text and image layouts (particularly noticeable with **TextAlign.Center** or **TextAlign.End**).* For text containing only spaces, decoration lines, shadows, and background colors follow the space text display.* Leading spaces are not optimized. When text with trailing spaces wraps, trailing spaces on each line are optimized based on component width.

When optimizing pure space text by setting [optimizeTrailingSpace](TextAttribute#optimizeTrailingSpace) to **true**, you cannot simultaneously set [backgroundColor](arkts-arkui-commonmethod-c.md#backgroundcolor-1),[decoration](TextAttribute#decoration), and [textAlign](TextAttribute#textAlign) attributes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAttribute-optimizeTrailingSpace(optimize: Optional<boolean>): TextAttribute--><!--Device-TextAttribute-optimizeTrailingSpace(optimize: Optional<boolean>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| optimize | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to optimize trailing spaces.<br>**true** to optimize, **false** otherwise.<br>Default value: **false** |

<a id="orphancharoptimization"></a>
## orphanCharOptimization

```TypeScript
orphanCharOptimization(enabled: Optional<boolean>)
```

Sets whether to enable orphan character optimization during text typesetting. If this attribute is not set, orphan character optimization is disabled by default.

Orphan character optimization improves the text layout by handling the orphan character (the first Chinese character of the last line of a paragraph) more efficiently. When enabled, it adjusts line breaks to avoid orphan characters as much as possible. This feature takes effect only when [wordBreak](TextAttribute#wordBreak) is not **BREAK_ALL** and [locale](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textstyle-i.md) of the first [TextStyle](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textstyle-i.md) of the text to be typeset is either **"zh-Hans"** or **"zh-Hant"**.

**Since**: 26.0.0

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAttribute-orphanCharOptimization(enabled: Optional<boolean>): TextAttribute--><!--Device-TextAttribute-orphanCharOptimization(enabled: Optional<boolean>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable orphan character optimization for the last line of the paragraph.<br>**true**: Orphan character optimization is enabled. **false**: Orphan character optimization is disabled.<br>When the value is **undefined** or **null**, orphan character optimization is disabled. |

<a id="privacysensitive"></a>
## privacySensitive

```TypeScript
privacySensitive(supported: boolean)
```

Sets whether to enable privacy mode on widgets.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-TextAttribute-privacySensitive(supported: boolean): TextAttribute--><!--Device-TextAttribute-privacySensitive(supported: boolean): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| supported | boolean | Yes | Whether to enable privacy mode on widgets.<br>Default value: **false**. The value **true** means to enable privacy mode, in which case text is obscured with hyphens (-).<br>**NOTE**<br>The value **null** means not to enable privacy mode on widgets.<br>Enabling privacy mode requires support from the widget framework. You can use [obscured](arkts-arkui-commonmethod-c.md#obscured-1) to set how the component content is obscured. |

<a id="punctuationoverflow"></a>
## punctuationOverflow

```TypeScript
punctuationOverflow(enabled: Optional<boolean>)
```

Whether to enable punctuation overflow at line ends.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAttribute-punctuationOverflow(enabled: Optional<boolean>): TextAttribute--><!--Device-TextAttribute-punctuationOverflow(enabled: Optional<boolean>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to enable the feature, the default value is false. |

<a id="selectedbackgroundcolor"></a>
## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(color: ResourceColor)
```

Sets the background color of the selected text. If the opacity is not set, a 20% opacity will be used.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-TextAttribute-selectedBackgroundColor(color: ResourceColor): TextAttribute--><!--Device-TextAttribute-selectedBackgroundColor(color: ResourceColor): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Background color of the selected text.<br>Default value: **'#007DFF'** |

<a id="selecteddragpreviewstyle"></a>
## selectedDragPreviewStyle

```TypeScript
selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined)
```

Sets the drag preview style for selected text.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextAttribute-selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextAttribute--><!--Device-TextAttribute-selectedDragPreviewStyle(value: SelectedDragPreviewStyle | undefined): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SelectedDragPreviewStyle](../arkts-apis/arkts-arkui-selecteddragpreviewstyle-i.md) \| undefined | Yes | Drag preview style for selected text.<br>If this parameter is set to **undefined**, the drag preview follows the theme: white in light mode and black in dark mode. |

<a id="selection"></a>
## selection

```TypeScript
selection(selectionStart: number, selectionEnd: number)
```

Sets text selection.

The selected text is highlighted, with selection handles and the text selection menu displayed.

If [copyOption](TextAttribute#copyOption) is set to **CopyOptions.None**, the setting of the **selection** attribute does not take effect.

If [textOverflow](TextAttribute#textOverflow) is set to **TextOverflow.MARQUEE**, the setting of the **selection** attribute does not take effect.

If the value of **selectionStart** is greater than or equal to that of **selectionEnd**, no text will be selected.The value range is [0, textSize], where **textSize** indicates the maximum number of characters in the text content. If the value is less than 0, the value **0** will be used. If the value is greater than **textSize**,**textSize** will be used.

If the selection range falls within a truncated or invisible area, selection is ignored. When [clip](arkts-arkui-commonmethod-c.md#clip-1) is set to **false**, the text outside the parent component can be selected.

You can obtain the selection range change result through the [onTextSelectionChange](TextAttribute#onTextSelectionChange) API.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAttribute-selection(selectionStart: number, selectionEnd: number): TextAttribute--><!--Device-TextAttribute-selection(selectionStart: number, selectionEnd: number): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selectionStart | number | Yes | Start position of the selected text.<br>Default value: **-1** |
| selectionEnd | number | Yes | End position of the selected text.<br>Default value: **-1** |

<a id="shaderstyle"></a>
## shaderStyle

```TypeScript
shaderStyle(shader: ShaderStyle)
```

Applies gradient or solid color effects to text. Supports [RadialGradientStyle](../arkts-apis/arkts-arkui-radialgradientstyle-c.md),[LinearGradientStyle](../arkts-apis/arkts-arkui-lineargradientstyle-c.md), and [ColorShaderStyle](../arkts-apis/arkts-arkui-colorshaderstyle-c.md). **shaderStyle** takes precedence over [fontColor](SymbolSpanAttribute#fontColor) and AI-based styling. For solid colors,prefer using [fontColor](SymbolSpanAttribute#fontColor).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAttribute-shaderStyle(shader: ShaderStyle): TextAttribute--><!--Device-TextAttribute-shaderStyle(shader: ShaderStyle): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shader | [ShaderStyle](../arkts-apis/arkts-arkui-shaderstyle-c.md) | Yes | Shader effect.<br>Based on the input, the system applies a radial gradient ([RadialGradientStyle](../arkts-apis/arkts-arkui-radialgradientstyle-c.md)), linear gradient ([LinearGradientStyle](../arkts-apis/arkts-arkui-lineargradientstyle-c.md)), or solid color ([ColorShaderStyle](../arkts-apis/arkts-arkui-colorshaderstyle-c.md)).<br>**NOTE**<br>If [RadialGradientStyle](../arkts-apis/arkts-arkui-radialgradientstyle-c.md) is used and the **center** parameter (from [RadialGradientOptions](arkts-arkui-radialgradientoptions-i.md)) is outside the component bounds, setting **repeating** to **true** enhances the gradient effect. |

<a id="tailindents"></a>
## tailIndents

```TypeScript
tailIndents(value: Optional<LengthMetrics | Array<LengthMetrics>>)
```

Specify the tail indentation for each line in a text block.

<p><strong>NOTE</strong>:<br>When a single LengthMetrics value is provided, all lines share the same tail indent.<br>When an array is provided, the i-th element specifies the tail indent for the i-th line.If the number of text lines exceeds the array length, the last element in the array is used for the remaining lines.<br>Negative values are treated as 0.<br>If the value is set to undefined, the default value 0 is used.</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-TextAttribute-tailIndents(value: Optional<LengthMetrics | Array<LengthMetrics>>): TextAttribute--><!--Device-TextAttribute-tailIndents(value: Optional<LengthMetrics | Array<LengthMetrics>>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Optional](arkts-arkui-optional-t.md)&lt;LengthMetrics \| Array&lt;LengthMetrics&gt;&gt; | Yes | The tail indent value(s).Default value is 0. |

<a id="textalign"></a>
## textAlign

```TypeScript
textAlign(value: TextAlign)
```

Sets the horizontal alignment of the text.

The text takes up the full width of the **Text** component.

The vertical position of the text paragraph can be controlled by the [align](arkts-arkui-commonmethod-c.md#align-1) attribute, but the horizontal position cannot be controlled by **align** in this component. The specific effects are as follows:

- **Alignment.TopStart**, **Alignment.Top**, **Alignment.TopEnd**: Content aligns to the top.  
- **Alignment.Start**, **Alignment.Center**, **Alignment.End**: Content is centered vertically.  
- **Alignment.BottomStart**, **Alignment.Bottom**, **Alignment.BottomEnd:** Content aligns to the bottom.

When **textAlign** is set to **TextAlign.JUSTIFY**, the [wordBreak](TextAttribute#wordBreak) property must be configured according to the text content. The last line of text aligns to the start horizontally and does not participate in justification.

> **NOTE**  
>  
> **textAlign** only adjusts the overall text layout and does not affect character display order. For character  
> display order adjustment, see  
> [Bidirectional Text Layout and Alignment](docroot://ui/arkts-internationalization.md#bidirectional-text-layout-and-alignment).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-textAlign(value: TextAlign): TextAttribute--><!--Device-TextAttribute-textAlign(value: TextAlign): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextAlign](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textalign-e.md) | Yes | Horizontal alignment of the text.<br>Default value: **TextAlign.Start**<br>Default value on wearable devices: **TextAlign.Center** |

<a id="textcase"></a>
## textCase

```TypeScript
textCase(value: TextCase)
```

Sets the text case.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-textCase(value: TextCase): TextAttribute--><!--Device-TextAttribute-textCase(value: TextCase): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TextCase](../arkts-apis/arkts-arkui-textcase-e.md) | Yes | Text case.<br>Default value: **TextCase.Normal** |

<a id="textcontentalign"></a>
## textContentAlign

```TypeScript
textContentAlign(textContentAlign: Optional<TextContentAlign>)
```

Sets the vertical alignment of the text content area within the component.

This API takes effect only when the height of the text content exceeds the component's height.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-TextAttribute-textContentAlign(textContentAlign: Optional<TextContentAlign>): TextAttribute--><!--Device-TextAttribute-textContentAlign(textContentAlign: Optional<TextContentAlign>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textContentAlign | [Optional](arkts-arkui-optional-t.md)&lt;TextContentAlign&gt; | Yes | Vertical alignment of the text.<br>If the value is **undefined** or invalid, alignment defaults to **Center**. |

<a id="textdirection"></a>
## textDirection

```TypeScript
textDirection(direction: TextDirection | undefined)
```

Specifies the text layout direction. If this attribute is not set, the default text layout direction follows the component layout direction.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-TextAttribute-textDirection(direction: TextDirection | undefined): TextAttribute--><!--Device-TextAttribute-textDirection(direction: TextDirection | undefined): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | [TextDirection](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-textdirection-e.md) \| undefined | Yes | Text layout direction.<br>If this parameter is set to **undefined**, the text layout direction follows the component layout direction as defined by **TextDirection.DEFAULT**. |

<a id="textindent"></a>
## textIndent

```TypeScript
textIndent(value: Length)
```

Sets the indent of the first line text.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAttribute-textIndent(value: Length): TextAttribute--><!--Device-TextAttribute-textIndent(value: Length): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Indent of the first line text.<br>Default value: **0**<br>Unit: [fp](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) |

<a id="textoverflow"></a>
## textOverflow

```TypeScript
textOverflow(options: TextOverflowOptions)
```

Sets the display mode for overflowing text.

When [TextOverflowOptions](arkts-arkui-textoverflowoptions-i.md) is set to **TextOverflow.None**, **TextOverflow.Clip**, or **TextOverflow.Ellipsis**:

- **TextOverflow.None** or **TextOverflow.Clip**: Text is truncated when it exceeds the maximum number of lines.  
- **TextOverflow.Ellipsis**: Overflowing text is replaced with an ellipsis (...).  
- This must be used with [maxLines](TextAttribute#maxLines) for the settings to take effect.  
- Line breaking behavior is controlled by [wordBreak](TextAttribute#wordBreak). By default, it uses **WordBreak.BREAK_WORD**, which breaks text by word (for example, English text is broken at word boundaries). To break text by character, set **wordBreak** to **WordBreak.BREAK_ALL**.  
- Line wrapping behavior is governed by [lineBreakStrategy](TextAttribute#lineBreakStrategy) which takes effect only when [wordBreak](TextAttribute#wordBreak) is not **WordBreak.BREAK_ALL**. Hyphens are not supported.  
- Since API version 11, it is recommended that you configure both [textOverflow](TextAttribute#textOverflow)and [wordBreak](TextAttribute#wordBreak) to control truncation behavior. For details, see [Example 4](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-text.md#example-4-setting-text-wrapping-and-line-breaking)<!--RP1--><!--RP1End-->.

When **TextOverflowOptions** is set to **TextOverflow.MARQUEE**:

- Text scrolls horizontally within a single line.  
- [maxLines](TextAttribute#maxLines) and[copyOption](TextAttribute#copyOption) are ignored.  
- The [clip](arkts-arkui-commonmethod-c.md#clip-1) attribute of the **Text** component defaults to **true**.  
- [CustomSpan](../arkts-apis/arkts-arkui-customspan-c.md) is not supported in marquee mode.  
- Behavior of [textAlign](TextAttribute#textAlign): If the text does not scroll, **textAlign** applies; if the text scrolls, **textAlign** is ignored.  
- Since API version 12, **TextOverflow.MARQUEE** is available for the **ImageSpan** component, where the text and images are allowed to scroll within a single line.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-TextAttribute-textOverflow(options: TextOverflowOptions): TextAttribute--><!--Device-TextAttribute-textOverflow(options: TextOverflowOptions): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TextOverflowOptions](arkts-arkui-textoverflowoptions-i.md) | Yes | Display mode when the text is too long.<br>**Since:** 18 |

<a id="textselectable"></a>
## textSelectable

```TypeScript
textSelectable(mode: TextSelectableMode)
```

Sets whether the text is selectable and focusable.

This attribute must be used in conjunction with [copyOption](TextAttribute#copyOption).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-TextAttribute-textSelectable(mode: TextSelectableMode): TextAttribute--><!--Device-TextAttribute-textSelectable(mode: TextSelectableMode): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [TextSelectableMode](../arkts-apis/arkts-arkui-textselectablemode-e.md) | Yes | Whether the text is selectable and focusable.<br>Default value:**TextSelectableMode.SELECTABLE_UNFOCUSABLE** |

<a id="textshadow"></a>
## textShadow

```TypeScript
textShadow(value: ShadowOptions | Array<ShadowOptions>)
```

Sets the text shadow.

Intelligent color extraction is not supported for the **type**, **fill**, and **color** fields of the **ShadowOptions** object.

Since API version 11, this API supports input parameters in an array to implement multiple text shadows.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 10.

<!--Device-TextAttribute-textShadow(value: ShadowOptions | Array<ShadowOptions>): TextAttribute--><!--Device-TextAttribute-textShadow(value: ShadowOptions | Array<ShadowOptions>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ShadowOptions](arkts-arkui-shadowoptions-i.md) \| Array&lt;ShadowOptions&gt; | Yes | Text shadow.<br>**Since:** 11 |

<a id="textverticalalign"></a>
## textVerticalAlign

```TypeScript
textVerticalAlign(textVerticalAlign: Optional<TextVerticalAlign>)
```

Sets the vertical alignment of the text.

> **NOTE**  
>  
> - When this API and [halfLeading](TextAttribute#halfLeading) are both set, **halfLeading** does not take  
> effect.  
>  
> - The effect of this attribute is noticeable only when the same font size is used in a paragraph and  
> [lineHeight](TextAttribute#lineHeight) is set, or when different font sizes are mixed in a paragraph.  
> Otherwise, the effect is the same regardless of whether this attribute is set or which enum value is used. The  
> **SuperscriptStyle** in [TextStyle](../arkts-apis/arkts-arkui-textstyle-i.md) takes effect only when the value of  
> [TextVerticalAlign](../arkts-apis/arkts-arkui-textverticalalign-e.md) is set to **TextVerticalAlign.BASELINE**. In other vertical  
> alignment modes, the superscript and subscript texts are displayed in the same way as the normal text.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-TextAttribute-textVerticalAlign(textVerticalAlign: Optional<TextVerticalAlign>): TextAttribute--><!--Device-TextAttribute-textVerticalAlign(textVerticalAlign: Optional<TextVerticalAlign>): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| textVerticalAlign | [Optional](arkts-arkui-optional-t.md)&lt;TextVerticalAlign&gt; | Yes | Vertical alignment of the text.<br>Default value:**TextVerticalAlign.BASELINE** |

<a id="wordbreak"></a>
## wordBreak

```TypeScript
wordBreak(value: WordBreak)
```

Sets the word break rule.

By default, when **wordBreak** is not called or is set to **WordBreak.BREAK_WORD**, text is broken by word. (for example, English text is broken at word boundaries).

To break text by character, with the excess part displayed as an ellipsis (...), use **WordBreak.BREAK_ALL** in combination with **{overflow: TextOverflow.Ellipsis}** and **maxLines**.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-TextAttribute-wordBreak(value: WordBreak): TextAttribute--><!--Device-TextAttribute-wordBreak(value: WordBreak): TextAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [WordBreak](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-text-wordbreak-e.md) | Yes | Word break rule.<br>Default value: **WordBreak.BREAK_WORD** |

