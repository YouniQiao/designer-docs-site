# TextBlob

Defines a block consisting of one or more characters with the same font. > **NOTE** > > - This module uses the physical pixel unit, px. > > - The module operates under a single-threaded model. The caller needs to manage thread safety and context state > transitions.

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@ohos.graphics.drawing';
```

## bounds

```TypeScript
bounds(): common2D.Rect
```

Obtains the rectangular bounding box of the text blob.

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Rect | Rectangular bounding box. |

## makeFromPosText

```TypeScript
static makeFromPosText(text: string, len: number, points: common2D.Point[], font: Font): TextBlob
```

Creates a **TextBlob** object from the text. The coordinates of each font in the **TextBlob** object are determined by the coordinate information in the **points** array.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Content to be used for drawing the text blob. |
| len | number | Yes | Number of glyphs, which is an integer obtained from[countText](arkts-arkgraphics2d-font-c.md#counttext-1). |
| points | common2D.Point[] | Yes | Array of points, which are used to specify the coordinates of each font. Thearray length must be the same as the value of **len**. |
| font | Font | Yes | **Font** object. |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | **TextBlob** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

## makeFromRunBuffer

```TypeScript
static makeFromRunBuffer(pos: Array<TextBlobRunBuffer>, font: Font, bounds?: common2D.Rect): TextBlob
```

Creates a **TextBlob** object based on the **RunBuffer** information.

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | Array&lt;TextBlobRunBuffer&gt; | Yes | **TextBlobRunBuffer** array. |
| font | Font | Yes | **Font** object. |
| bounds | common2D.Rect | No | Bounding box. If this parameter is not set, there is no bounding box. |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | **TextBlob** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

## makeFromString

```TypeScript
static makeFromString(text: string, font: Font, encoding?: TextEncoding): TextBlob
```

Converts a value of the string type into a **TextBlob** object.

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Content to be used for drawing the text blob. |
| font | Font | Yes | **Font** object. |
| encoding | TextEncoding | No | Encoding type. The default value is **TEXT_ENCODING_UTF8**. Currently, only**TEXT_ENCODING_UTF8** takes effect, and other encoding types are treated as **TEXT_ENCODING_UTF8**. |

**Return value:**

| Type | Description |
| --- | --- |
| TextBlob | **TextBlob** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

## uniqueID

```TypeScript
uniqueID(): number
```

Obtains the unique, non-zero identifier of this **TextBlob** object.

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| number | Unique, non-zero identifier of this **TextBlob** object. |

