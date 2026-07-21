# RichEditorController

Implements the **RichEditor** component controller. Inherits from [RichEditorBaseController](arkts-arkui-richeditorbasecontroller-c.md).

> **NOTE**  
>  
> When the length of the content exceeds the height of the display area of the component, the insertion interface (  
> such as [addTextSpan](arkts-arkui-richeditorcontroller-c.md#addtextspan-1),  
> [addImageSpan](arkts-arkui-richeditorcontroller-c.md#addimagespan-1),  
> [addBuilderSpan](arkts-arkui-richeditorcontroller-c.md#addbuilderspan-1) and  
> [addSymbolSpan](arkts-arkui-richeditorcontroller-c.md#addsymbolspan-1)) is called. The component automatically scrolls the  
> content to make the end of the inserted content visible.

**Inheritance/Implementation:** RichEditorController extends [RichEditorBaseController](arkts-arkui-richeditorbasecontroller-c.md)

**Since:** 10

<!--Device-unnamed-declare class RichEditorController extends RichEditorBaseController--><!--Device-unnamed-declare class RichEditorController extends RichEditorBaseController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="addbuilderspan"></a>
## addBuilderSpan

```TypeScript
addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number
```

Adds a custom layout (BuilderSpan) to **RichEditor**.

> **NOTE**  
>  
> - This API adds a builder span to take up space in the layout. It calls the system **measure** method to  
> calculate the actual length, width, and position.  
>  
> - You can use [RichEditorBuilderSpanOptions](arkts-arkui-richeditorbuilderspanoptions-i.md) to set the index of the builder  
> in the **RichEditor** component (with one character as the unit).  
>  
> - This builder span is unfocusable, draggable, and equipped with certain universal attributes. It behaves  
> similarly to an image span in terms of placeholder and deletion functionality, and it is treated as a single  
> character in length.  
>  
> - Custom menus can be set using [bindSelectionMenu](RichEditorAttribute.bindSelectionMenu).  
>  
> - The information about the builder span cannot be obtained through  
> [getSpans](arkts-arkui-richeditorcontroller-c.md#getspans-1), [getSelection](arkts-arkui-richeditorcontroller-c.md#getselection-1),  
> [onSelect](RichEditorAttribute.onSelect), or [aboutToDelete](RichEditorAttribute.aboutToDelete).  
>  
> - The builder span cannot be updated using [updateSpanStyle](arkts-arkui-richeditorcontroller-c.md#updatespanstyle-1) or  
> [updateParagraphStyle](arkts-arkui-richeditorcontroller-c.md#updateparagraphstyle-1).  
>  
> - Copying or pasting the builder span does not take effect.  
>  
> - The layout constraints of the builder span are passed in from the **RichEditor** component. If the size of the  
> outermost component in the builder span is not set, the size of the **RichEditor** is used as the value of  
> **maxSize**.  
>  
> - The gesture event mechanism of the builder span is the same as the universal gesture event mechanism. If  
> transparent transmission is not set in the builder, only the child components in the builder respond.  
>  
> - If the caret in the component is blinking, the caret position is updated to be after the inserted image span.

Only the following universal attributes are supported:[size](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#size),[padding](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#padding),[margin](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-size.md#margin),[aspectRatio](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-layout-constraints.md#aspectratio),[borderStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderstyle),[borderWidth](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderwidth),[borderColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#bordercolor),[borderRadius](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-border.md#borderradius),[backgroundColor](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundcolor),[backgroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle9), [opacity](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md),[blur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#blur),[backdropBlur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-background.md#backdropblur),[shadow](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#shadow),[grayscale](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#grayscale),[brightness](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#brightness),[saturate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#saturate),[contrast](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#contrast),[invert](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#invert),[sepia](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#sepia),[hueRotate](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#huerotate),[colorBlend](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#colorblend),[linearGradientBlur](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lineargradientblur12), [clip](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#clip12),[mask](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-sharp-clipping.md#mask12),[foregroundBlurStyle](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-foreground-blur-style.md#foregroundblurstyle),[accessibilityGroup](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitygroup),[accessibilityText](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitytext),[accessibilityDescription](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitydescription),[accessibilityLevel](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-accessibility.md#accessibilitylevel),[sphericalEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#sphericaleffect12), [lightUpEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#lightupeffect12),

[pixelStretchEffect](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-image-effect.md#pixelstretcheffect12).

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorController-addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number--><!--Device-RichEditorController-addBuilderSpan(value: CustomBuilder, options?: RichEditorBuilderSpanOptions): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Custom component. |
| options | [RichEditorBuilderSpanOptions](arkts-arkui-richeditorbuilderspanoptions-i.md) | No | Builder options. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the added builder span in all spans. |

<a id="addimagespan"></a>
## addImageSpan

```TypeScript
addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number
```

Adds an image span. If the caret in the component is blinking, the caret position is updated to be after the inserted image span.

This API is a synchronous API. In a weak network environment, directly adding network images may block the UI thread and cause screen freezing. To avoid potential loading issues, do not directly add a network image.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RichEditorController-addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number--><!--Device-RichEditorController-addImageSpan(value: PixelMap | ResourceStr, options?: RichEditorImageSpanOptions): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-image-pixelmap-i.md) \| ResourceStr | Yes | Image content. |
| options | [RichEditorImageSpanOptions](arkts-arkui-richeditorimagespanoptions-i.md) | No | Image options. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the added image span in all spans. |

<a id="addsymbolspan"></a>
## addSymbolSpan

```TypeScript
addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number
```

Adds a symbol span. If the caret in the component is blinking, the caret position is updated to be after the inserted symbol span.

Currently, gestures, copying, and dragging are not supported.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorController-addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number--><!--Device-RichEditorController-addSymbolSpan(value: Resource, options?: RichEditorSymbolSpanOptions ): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md) | Yes | Symbol resource object. |
| options | [RichEditorSymbolSpanOptions](arkts-arkui-richeditorsymbolspanoptions-i.md) | No | Symbol options. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the added symbol span in all spans. |

<a id="addtextspan"></a>
## addTextSpan

```TypeScript
addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number
```

Adds a text span. If the caret in the component is blinking, the caret position is updated to be after the inserted text span.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RichEditorController-addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number--><!--Device-RichEditorController-addTextSpan(content: ResourceStr, options?: RichEditorTextSpanOptions): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) | Yes | Text content.<br>The Resource type is supported since API version 20.<br>**Since:** 20 |
| options | [RichEditorTextSpanOptions](arkts-arkui-richeditortextspanoptions-i.md) | No | Text options. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Index of the added text span in all spans. |

<a id="deletespans"></a>
## deleteSpans

```TypeScript
deleteSpans(value?: RichEditorRange): void
```

Deletes the text and image spans in a specified range.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RichEditorController-deleteSpans(value?: RichEditorRange): void--><!--Device-RichEditorController-deleteSpans(value?: RichEditorRange): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RichEditorRange](arkts-arkui-richeditorrange-i.md) | No | Range of the target spans. If this parameter is left empty, all text and image spans will be deleted. |

<a id="fromstyledstring"></a>
## fromStyledString

```TypeScript
fromStyledString(value: StyledString): Array<RichEditorSpan>
```

Converts a styled string into a span.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorController-fromStyledString(value: StyledString): Array<RichEditorSpan>--><!--Device-RichEditorController-fromStyledString(value: StyledString): Array<RichEditorSpan>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [StyledString](../arkts-apis/arkts-arkui-styledstring-c.md) | Yes | Styled string before conversion. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;RichEditorSpan&gt; | Text and image span information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. |

<a id="getparagraphs"></a>
## getParagraphs

```TypeScript
getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>
```

Obtains the paragraph information within a specified range.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorController-getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>--><!--Device-RichEditorController-getParagraphs(value?: RichEditorRange): Array<RichEditorParagraphResult>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RichEditorRange](arkts-arkui-richeditorrange-i.md) | No | Range of the paragraphs to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;RichEditorParagraphResult&gt; | Information about the selected paragraphs.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined** is returned. |

<a id="getselection"></a>
## getSelection

```TypeScript
getSelection(): RichEditorSelection
```

Obtains the range and span information of the selected content. If no text is selected, this API returns the information about the span where the caret is located.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorController-getSelection(): RichEditorSelection--><!--Device-RichEditorController-getSelection(): RichEditorSelection-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [RichEditorSelection](arkts-arkui-richeditorselection-i.md) | Provides information about the selected content.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined** is returned. |

<a id="getspans"></a>
## getSpans

```TypeScript
getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>
```

Obtains span information.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RichEditorController-getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>--><!--Device-RichEditorController-getSpans(value?: RichEditorRange): Array<RichEditorImageSpanResult | RichEditorTextSpanResult>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RichEditorRange](arkts-arkui-richeditorrange-i.md) | No | Range of the target span. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;RichEditorImageSpanResult \| RichEditorTextSpanResult&gt; | Text and image span information.<br>If no component is bound to the controller or the component bound to the controller is released, **undefined** is returned. |

<a id="tostyledstring"></a>
## toStyledString

```TypeScript
toStyledString(value: RichEditorRange): StyledString
```

Convert the component content within the given range into a styled string. SymbolSpan and BuilderSpan cannot be converted.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorController-toStyledString(value: RichEditorRange): StyledString--><!--Device-RichEditorController-toStyledString(value: RichEditorRange): StyledString-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RichEditorRange](arkts-arkui-richeditorrange-i.md) | Yes | Source range. |

**Return value:**

| Type | Description |
| --- | --- |
| [StyledString](../arkts-apis/arkts-arkui-styledstring-c.md) | Styled string after conversion. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. |

<a id="updateparagraphstyle"></a>
## updateParagraphStyle

```TypeScript
updateParagraphStyle(value: RichEditorParagraphStyleOptions): void
```

Updates the paragraph style.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RichEditorController-updateParagraphStyle(value: RichEditorParagraphStyleOptions): void--><!--Device-RichEditorController-updateParagraphStyle(value: RichEditorParagraphStyleOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RichEditorParagraphStyleOptions](arkts-arkui-richeditorparagraphstyleoptions-i.md) | Yes | Information about the paragraph style. |

<a id="updatespanstyle"></a>
## updateSpanStyle

```TypeScript
updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void
```

Updates the text, image, or symbol span style.

If only part of a span is updated, the span is split into multiple spans based on the updated part and the non-updated part.

Calling this API will not close the custom context menu on selection by default.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-RichEditorController-updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void--><!--Device-RichEditorController-updateSpanStyle(value: RichEditorUpdateTextSpanStyleOptions | RichEditorUpdateImageSpanStyleOptions | RichEditorUpdateSymbolSpanStyleOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RichEditorUpdateTextSpanStyleOptions](arkts-arkui-richeditorupdatetextspanstyleoptions-i.md) \| RichEditorUpdateImageSpanStyleOptions \| RichEditorUpdateSymbolSpanStyleOptions | Yes | Style options of the text, image, or symbol span.<br>**Since:** 11 |

