# TextBlob

由一个或多个具有相同字体的字符组成的字块。 > **说明：** > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## bounds

```TypeScript
bounds(): common2D.Rect
```

获取文字边界框的矩形区域。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Rect | Rectangular bounding box. |

## bounds

```TypeScript
bounds(): common2D.Rect | undefined
```

Obtains the rectangular bounding box of the text blob.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Rect | Rect object. |

## makeFromPosText

```TypeScript
static makeFromPosText(text: string, len: number, points: common2D.Point[], font: Font): TextBlob
```

使用文本创建TextBlob对象，TextBlob对象中每个字形的坐标由points中对应的坐标信息决定。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 绘制字形的文本内容。 |
| len | number | Yes | 字形个数，由[countText](arkts-drawing-font-c.md#countText)获取，该参数为整数。 |
| points | common2D.Point[] | Yes | 点数组，用于指定每个字形的坐标，长度必须为len。 |
| font | Font | Yes | 字型对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | TextBlob对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromPosText

```TypeScript
static makeFromPosText(text: string, len: int, points: common2D.Point[], font: Font): TextBlob | undefined
```

Creates a TextBlob object from the text. The coordinates of each font in the TextBlob object are determined by the coordinate information in the points array.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Content to be used for drawing the text blob. |
| len | int | Yes | Number of fonts. The value is an integer and is obtained from countText. |
| points | common2D.Point[] | Yes | Array of points, which are used to specify the coordinates of each font.  The array length must be the same as the value of len. |
| font | Font | Yes | Specify text size, font, text scale, etc. |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | TextBlob object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromRunBuffer

```TypeScript
static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob
```

基于RunBuffer信息创建TextBlob对象。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | Array&lt;TextBlobRunBuffer> | Yes | TextBlobRunBuffer数组。 |
| font | Font | Yes | 字型对象。 |
| bounds | common2D.Rect | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | TextBlob对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromRunBuffer

```TypeScript
static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob | undefined
```

Creates a Textblob object based on the RunBuffer information.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | Array&lt;TextBlobRunBuffer> | Yes | The array of TextBlobRunBuffer. |
| font | Font | Yes | Font used for this run. |
| bounds | common2D.Rect | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | TextBlob object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromString

```TypeScript
static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob
```

将string类型的值转化成TextBlob对象。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 绘制字形的文本内容。 |
| font | Font | Yes | 字型对象。 |
| encoding | TextEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | TextBlob对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## makeFromString

```TypeScript
static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob | undefined
```

Converts a value of the string type into a TextBlob object.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Content to be used for drawing the text blob. |
| font | Font | Yes | Specify text size, font, text scale, etc. |
| encoding | TextEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | TextBlob object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## uniqueID

```TypeScript
uniqueID(): long
```

获取该TextBlob对象的唯一的非零标识符。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| long | 返回TextBlob对象的唯一的非零标识符。 |

