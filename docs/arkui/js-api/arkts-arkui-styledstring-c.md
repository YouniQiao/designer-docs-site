# StyledString

StyledString

**Since:** 12

<!--Device-unnamed-declare class StyledString--><!--Device-unnamed-declare class StyledString-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>)
```

A constructor used to create a styled string.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledString-constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>)--><!--Device-StyledString-constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| ImageAttachment \| CustomSpan | Yes | Text of the styled string.<br>**NOTE**<br>If this parameter is of the ImageAttachment or CustomSpan type, the **styles** parameter has no effect.<br>To set **styles**, use methods such as [setStyle](arkts-arkui-mutablestyledstring-c.md#setstyle-1). |
| styles | Array&lt;StyleOptions&gt; | No | Initialization options of the styled string.<br>**NOTE**<br>If **start** is set to an invalid value, it uses the default value **0**.<br>If the **length** value is invalid, **length** will default to the actual length of the styled string starting from the start position.<br>If **StyledStringKey** does not match **StyledStringValue**, **styles** has no effect. |

<a id="equals"></a>
## equals

```TypeScript
equals(other: StyledString): boolean
```

Checks whether this styled string the same as another styled string.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledString-equals(other: StyledString): boolean--><!--Device-StyledString-equals(other: StyledString): boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| other | [StyledString](arkts-arkui-styledstring-c.md) | Yes | **StyledString** object to compare. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether two styled strings are equal.<br>**true** if the two styled strings are equal; **false** otherwise.<br>**NOTE**<br>The two styled strings are the same if they have the same text and style.<br>[GestureStyle](arkts-arkui-gesturestyle-c.md) in styled strings is not compared. This means that, if two styled strings are the same except for the event configured, they are treated as the same.<br>In comparing [CustomSpan](arkts-arkui-customspan-c.md) or [LeadingMarginSpan](arkts-arkui-leadingmarginspan-c.md) objects, addresses are compared. The objects that have the same address are the same. |

<a id="fromhtml"></a>
## fromHtml

```TypeScript
static fromHtml(html: string): Promise<StyledString>
```

Converts an HTML string into a styled string. Currently, the following HTML tags are supported for conversion: \<p>, \<span>, \<img>, \

, \<strong>, \<b>, \<a>, \<i>, \<em>, \<s>, \<u>, \<del>, \<sup>, \<sub>. The **style** attribute within tags can be converted to the corresponding style in the styled string.

For details about how to use this API, see [Example 12: Implementing Conversion Using fromHtml and toHtml](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#example-12-implementing-conversion-using-fromhtml-and-tohtml).

| Tag Name| Description |  
| ------------- | ---------------------------- |  
| \<p\> | Paragraph tag, which separates text into paragraphs. |  
| \<span\> | Inline text supporting style configuration. |  
| \<img\> | Image tag, used to insert an image. |  
| \<strong\> | Bold text tag. |  
| &lt;br&gt;<sup>20+</sup> | Line break tag. |  
| \<b\><sup>20+</sup> | Bold text tag. |  
| \<a\><sup>20+</sup> | Hyperlink tag. |  
| \<i\><sup>20+</sup> | Italic text tag. |  
| \<em\><sup>20+</sup> | Italic text tag. |  
| \<s\><sup>20+</sup> | Strikethrough tag, which adds a line through the text. |  
| \<u\><sup>20+</sup> | Underline tag, which adds a decorative underline to the text. |  
| \<del\><sup>20+</sup> | Strikethrough tag, which adds a line through the text. |  
| \<sup\><sup>20+</sup> | Superscript tag. |  
| \<sub\><sup>20+</sup> | Subscript tag. |

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledString-static fromHtml(html: string): Promise<StyledString>--><!--Device-StyledString-static fromHtml(html: string): Promise<StyledString>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| html | string | Yes | HTML-formatted string. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;StyledString&gt; | Styled string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |
| [170001](../errorcode-styled-string.md#170001-conversion-error) | Convert Error. |

<a id="getstring"></a>
## getString

```TypeScript
getString(): string
```

Obtains the text of this styled string.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledString-getString(): string--><!--Device-StyledString-getString(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Text of the styled string.<br>**NOTE**<br>If the styled string contains an image or [CustomSpan](arkts-arkui-customspan-c.md) elements, they are represented as space characters in the returned result. |

<a id="getstyles"></a>
## getStyles

```TypeScript
getStyles(start: number, length: number, styledKey?: StyledStringKey): Array<SpanStyle>
```

Obtains the styles in the specified range of a styled string. The specified range must not exceed the string's length.

This API returns only styles explicitly set by the developer.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledString-getStyles(start: number, length: number, styledKey?: StyledStringKey): Array<SpanStyle>--><!--Device-StyledString-getStyles(start: number, length: number, styledKey?: StyledStringKey): Array<SpanStyle>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | Subscript that corresponds to the target range in the styled string. |
| length | number | Yes | Length of the target range in the styled string. |
| styledKey | [StyledStringKey](arkts-arkui-styledstringkey-e.md) | No | Style key of the styled string. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SpanStyle&gt; | Array of styles.<br>**NOTE**<br>If no style is set for the specified range in the styled string, an empty array is returned.<br>If the values of **start** and **length** are out of the acceptable range or if any mandatory parameter is passed as **undefined**, an exception is thrown.<br>If **styledKey** is set to an invalid value or **undefined**, an exception is thrown.<br>If **styledKey** is a **CustomSpan** object, the style returned is the one passed to create the object.That is, modifying the style object also affects the actual display effect. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

<a id="substyledstring"></a>
## subStyledString

```TypeScript
subStyledString(start: number, length?: number): StyledString
```

Obtains a substring of this styled string. The specified range must not exceed the string's length.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledString-subStyledString(start: number, length?: number): StyledString--><!--Device-StyledString-subStyledString(start: number, length?: number): StyledString-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | Subscript that corresponds to the start position of the styled substring. |
| length | number | No | Length of the styled substring. |

**Return value:**

| Type | Description |
| --- | --- |
| [StyledString](arkts-arkui-styledstring-c.md) | Styled substring.<br>**NOTE**<br>If the value of **start** is valid, the difference between the length of the styled string and the value of **start** is used as the default value of **length**.<br>If the values of **start** and **length** are out of the acceptable range or if any mandatory parameter is passed as **undefined**, an exception is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

<a id="tohtml"></a>
## toHtml

```TypeScript
static toHtml(styledString: StyledString): string
```

Converts a styled string into an HTML-formatted string. The supported styled string keys for conversion, as detailed in [StyledStringKey](arkts-arkui-styledstringkey-e.md), include: **StyledStringKey.FONT**,**StyledStringKey.DECORATION**, **StyledStringKey.LETTER_SPACING**, **StyledStringKey.TEXT_SHADOW**,**StyledStringKey.LINE_HEIGHT**, and **StyledStringKey.IMAGE**.

For details about how to use this API, see [Example 12: Implementing Conversion Using fromHtml and toHtml](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#example-12-implementing-conversion-using-fromhtml-and-tohtml).

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-StyledString-static toHtml(styledString: StyledString): string--><!--Device-StyledString-static toHtml(styledString: StyledString): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | [StyledString](arkts-arkui-styledstring-c.md) | Yes | Styled string. |

**Return value:**

| Type | Description |
| --- | --- |
| string | HTML string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed. |

## length

```TypeScript
readonly length: number
```

Length of the styled string.

**NOTE**

Both **ImageAttachment** and **CustomSpan** in the styled string are counted as length 1.

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-StyledString-readonly length: number--><!--Device-StyledString-readonly length: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

