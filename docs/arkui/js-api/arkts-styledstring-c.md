# StyledString

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value: string | ImageAttachment | CustomSpan, styles?: Array<StyleOptions>)
```

属性字符串的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| ImageAttachment \| CustomSpan | Yes | 属性字符串文本内容。 说明： 当value的类型为ImageAttachment或  CustomSpan时，styles参数不生效。 需要设置styles时，通过[setStyle](arkts-mutablestyledstring-c.md#setStyle)等方法实现。 |
| styles | Array&lt;StyleOptions> | No |  |

## equals

```TypeScript
equals(other: StyledString): boolean
```

判断两个属性字符串是否相等。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| other | StyledString | Yes | StyledString类型的比较对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 两个属性字符串是否相等。 true表示相等，false表示不相等。 说明： 当属性字符串的文本及样式均一致，视为相等。 不比较  [GestureStyle](arkts-gesturestyle-c.md#GestureStyle)，当属性字符串配置了不同事件，文本和其他样式相同时，亦视为相等。 当比较[CustomSpan](arkts-customspan-c.md#CustomSpan)或  [LeadingMarginSpan](arkts-leadingmarginspan-c.md#LeadingMarginSpan)时，比较的是地址，地址相等，视为相等。 |

## fromHtml

```TypeScript
static fromHtml(html: string): Promise<StyledString>
```

将HTML格式字符串转换成属性字符串，当前支持转换的HTML标签范围：\<p>、\<span>、\<img>、\ 、\<strong>、\<b>、\<a>、\<i>、\<em>、\<s>、\<u>、\<del>、\<sup>、\<sub>、\<cite>、\<dfn>、\<small>、\<h1>、\<h2>、\<h3>、\<h4>、\<h5 >、\<h6>。支持将标签中的style属性样式转换成对应的属性字符串样式。 使用方法参考 [示例12（fromHtml和toHtml互相转换）] (docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#示例12fromhtml和tohtml互相转换) 和[示例18（fromHtml转换）](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#示例18fromhtml转换)。 | 标签名称 | 说明 | | ------------- | ---------------------------- | | \<p\> | 段落，分隔文本段落。 | | \<span\> | 行内文本，支持样式设置。 | | \<img\> | 插入图片。 | | \<strong\> | 加粗文本。 | | &lt;br&gt;<sup>20+</sup> | 换行。 | | \<b\><sup>20+</sup> | 加粗文本。 | | \<a\><sup>20+</sup> | 超链接。 | | \<i\><sup>20+</sup> | 斜体文本。 | | \<em\><sup>20+</sup> | 斜体文本。 | | \<s\><sup>20+</sup> | 删除线（中划线）。 | | \<u\><sup>20+</sup> | 下划线。 | | \<del\><sup>20+</sup> | 删除线（中划线）。 | | \<sup\><sup>20+</sup> | 上标文本。 | | \<sub\><sup>20+</sup> | 下标文本。 | | \<cite\> | 斜体文本。 | \<dfn\> | 斜体文本。 | \<small\> | 缩小字号标签。字号缩放为父容器字号属性的0.8倍，支持嵌套叠加。 | \<h1\> | 一级标题。 | \<h2\> | 二级标题。 | \<h3\> | 三级标题。 | \<h4\> | 四级标题。 | \<h5\> | 五级标题。 | \<h6\> | 六级标题。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| html | string | Yes | html格式的字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;StyledString> | 属性字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 170001 | Convert Error. |

## getString

```TypeScript
getString(): string
```

获取字符串信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | 属性字符串文本内容。 说明： 当属性字符串中包含图片或[CustomSpan](arkts-customspan-c.md#CustomSpan)时，其返回的结果用空格表示。 |

## getStyles

```TypeScript
getStyles(start: number, length: number, styledKey?: StyledStringKey): Array<SpanStyle>
```

获取指定范围属性字符串的样式集合。不能超出属性字符串的长度。 该接口仅返回开发者设置的样式。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | 指定范围属性字符串的下标。 |
| length | number | Yes | 指定范围属性字符串的长度。 |
| styledKey | StyledStringKey | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;SpanStyle> | 各样式对象的数组。 说明： 当指定范围属性字符串未设置任何样式，则返回空数组。 当start和length越界或者必填传入  undefined时，会抛出异常； 当styledKey传入异常值或undefined时，会抛出异常。 当styledKey为CustomSpan时，返回的是创建CustomSpan时传入的样式对象，即修改  该样式对象也会影响实际的显示效果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## marshalling

```TypeScript
static marshalling(styledString: StyledString, callback: StyledStringMarshallCallback): ArrayBuffer
```

序列化属性字符串，通过定义回调来序列化属性字符串的[StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t-sys.md#StyledStringMarshallingValue)。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | 属性字符串参数。 |
| callback | StyledStringMarshallCallback | Yes | 如何序列化[StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t-sys.md#StyledStringMarshallingValue)的回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | 序列化后的buffer信息。 说明： 目前支持文本和图片。 |

## marshalling

```TypeScript
static marshalling(styledString: StyledString): ArrayBuffer
```

序列化属性字符串。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | 属性字符串参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | 序列化后的buffer信息。 说明： 目前支持文本和图片。 |

## subStyledString

```TypeScript
subStyledString(start: number, length?: number): StyledString
```

获取属性字符串的子属性字符串。不能超出属性字符串的长度。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| start | number | Yes | 子属性字符串开始位置的下标。 |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| StyledString | 子属性字符串。 说明： 当start为合法入参时，length的默认值是被查询属性字符串对象的长度与start的值的差。 当start和  length越界或者必填传入undefined时，会抛出异常。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## toHtml

```TypeScript
static toHtml(styledString: StyledString): string
```

将属性字符串转换成HTML格式字符串。支持转换的属性字符串[StyledStringKey](arkts-styledstringkey-e.md#StyledStringKey)包括：StyledStringKey.FONT、 StyledStringKey.DECORATION、StyledStringKey.LETTER_SPACING、StyledStringKey.TEXT_SHADOW、StyledStringKey.LINE_HEIGHT、 StyledStringKey.IMAGE。 使用方法参考 [示例12（fromHtml和toHtml互相转换）](docroot://reference/apis-arkui/arkui-ts/ts-universal-styled-string.md#示例12fromhtml和tohtml互相转换)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| styledString | StyledString | Yes | 属性字符串。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | HTML格式字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## unmarshalling

```TypeScript
static unmarshalling(buffer: ArrayBuffer, callback: StyledStringUnmarshallCallback): Promise<StyledString>
```

反序列化后得到属性字符串，通过定义回调来反序列化[StyledStringMarshallingValue](arkts-styledstringmarshallingvalue-t-sys.md#StyledStringMarshallingValue)。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 属性字符串序列化后的数据。 |
| callback | StyledStringUnmarshallCallback | Yes | 如何反序列化ArrayBuffer的回调。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;StyledString> | Promise对象，返回属性字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 170002 | Styled string decode error. |

## unmarshalling

```TypeScript
static unmarshalling(buffer: ArrayBuffer): Promise<StyledString>
```

反序列化后得到属性字符串。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 属性字符串序列化后的数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;StyledString> | Promise对象，返回属性字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 170002 | Styled string decode error. |

## length

```TypeScript
readonly length: number
```

属性字符串字符的长度。 **说明：** 属性字符串中的ImageAttachment和CustomSpan长度都计为1。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

