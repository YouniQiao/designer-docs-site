# LineTypeset

Implements a carrier that stores the text content and style. It can be used to compute layout details for individual lines of text.

Before calling any of the following APIs, you must use [buildLineTypeset()](arkts-arkgraphics2d-text-paragraphbuilder-c.md#buildlinetypeset-1) in the [ParagraphBuilder](arkts-arkgraphics2d-text-paragraphbuilder-c.md) class to create a **LineTypeset** object.

**Since:** 18

<!--Device-text-class LineTypeset--><!--Device-text-class LineTypeset-End-->

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## createLine

```TypeScript
createLine(startIndex: number, count: number): TextLine
```

Generates a text line object based on the specified layout range.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-LineTypeset-createLine(startIndex: int, count: int): TextLine--><!--Device-LineTypeset-createLine(startIndex: int, count: int): TextLine-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startIndex | number | Yes | Start position for layout calculation. The value is an integer in the range [0, total number of text characters). |
| count | number | Yes | Number of characters from the specified start position. The value is an integer in the range [0, total number of text characters). The sum of **startIndex** and **count** cannot be greater than the total number of text characters. If **count** is **0**, the layout range is [startIndex, position of the last character in the text]. You can use [getLineBreak](arkts-arkgraphics2d-text-linetypeset-c.md#getlinebreak-1) to obtain the number of characters that can fit in the layout. |

**Return value:**

| Type | Description |
| --- | --- |
| [TextLine](arkts-arkgraphics2d-text-textline-c.md) | **TextLine** object generated based on the characters in the text range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
let startIndex = 0;
let width = 100.0;
let count = lineTypeset.getLineBreak(startIndex, width);
let line : text.TextLine = lineTypeset.createLine(startIndex, count);

```

## getLineBreak

```TypeScript
getLineBreak(startIndex: number, width: number): number
```

Obtains the number of characters that can fit in the layout from the specified position within a limited width.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-LineTypeset-getLineBreak(startIndex: int, width: double): int--><!--Device-LineTypeset-getLineBreak(startIndex: int, width: double): int-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startIndex | number | Yes | Start position (inclusive) for calculation. The value is an integer in the range [0, total number of text characters). If the parameter is out of range, an exception is thrown. |
| width | number | Yes | Layout width. The value is a floating point number greater than 0, in px. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of characters. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
let startIndex = 0;
let width = 100.0;
let count = lineTypeset.getLineBreak(startIndex, width);

```

