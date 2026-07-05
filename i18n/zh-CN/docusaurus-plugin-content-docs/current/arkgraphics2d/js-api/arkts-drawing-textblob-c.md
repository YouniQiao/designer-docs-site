# TextBlob

由一个或多个具有相同字体的字符组成的字块。 > **说明：** > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

## 导入模块

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## bounds

```TypeScript
bounds(): common2D.Rect
```

获取文字边界框的矩形区域。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| common2D.Rect | Rectangular bounding box. |

## bounds

```TypeScript
bounds(): common2D.Rect | undefined
```

Obtains the rectangular bounding box of the text blob.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| common2D.Rect | Rect object. |

## makeFromPosText

```TypeScript
static makeFromPosText(text: string, len: number, points: common2D.Point[], font: Font): TextBlob
```

使用文本创建TextBlob对象，TextBlob对象中每个字形的坐标由points中对应的坐标信息决定。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 绘制字形的文本内容。 |
| len | number | 是 | 字形个数，由[countText](arkts-drawing-font-c.md#countText)获取，该参数为整数。 |
| points | common2D.Point[] | 是 | 点数组，用于指定每个字形的坐标，长度必须为len。 |
| font | Font | 是 | 字型对象。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TextBlob | TextBlob对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromPosText

```TypeScript
static makeFromPosText(text: string, len: int, points: common2D.Point[], font: Font): TextBlob | undefined
```

Creates a TextBlob object from the text. The coordinates of each font in the TextBlob object are determined by the coordinate information in the points array.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Content to be used for drawing the text blob. |
| len | int | 是 | Number of fonts. The value is an integer and is obtained from countText. |
| points | common2D.Point[] | 是 | Array of points, which are used to specify the coordinates of each font.  The array length must be the same as the value of len. |
| font | Font | 是 | Specify text size, font, text scale, etc. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TextBlob | TextBlob object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromRunBuffer

```TypeScript
static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob
```

基于RunBuffer信息创建TextBlob对象。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pos | Array&lt;TextBlobRunBuffer> | 是 | TextBlobRunBuffer数组。 |
| font | Font | 是 | 字型对象。 |
| bounds | common2D.Rect | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TextBlob | TextBlob对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromRunBuffer

```TypeScript
static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob | undefined
```

Creates a Textblob object based on the RunBuffer information.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pos | Array&lt;TextBlobRunBuffer> | 是 | The array of TextBlobRunBuffer. |
| font | Font | 是 | Font used for this run. |
| bounds | common2D.Rect | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TextBlob | TextBlob object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromString

```TypeScript
static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob
```

将string类型的值转化成TextBlob对象。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | 绘制字形的文本内容。 |
| font | Font | 是 | 字型对象。 |
| encoding | TextEncoding | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TextBlob | TextBlob对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromString

```TypeScript
static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob | undefined
```

Converts a value of the string type into a TextBlob object.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Content to be used for drawing the text blob. |
| font | Font | 是 | Specify text size, font, text scale, etc. |
| encoding | TextEncoding | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TextBlob | TextBlob object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## uniqueID

```TypeScript
uniqueID(): long
```

获取该TextBlob对象的唯一的非零标识符。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | 返回TextBlob对象的唯一的非零标识符。 |

