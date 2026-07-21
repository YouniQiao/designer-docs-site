# byteLength

## Modules to Import

```TypeScript
import { buffer } from '@kit.ArkTS';
```

<a id="bytelength"></a>
## byteLength

```TypeScript
function byteLength(
    string: string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer,
    encoding?: BufferEncoding
  ): number
```

Obtains the number of bytes of a string based on the encoding format.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-buffer-function byteLength(
    string: string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer,
    encoding?: BufferEncoding
  ): number--><!--Device-buffer-function byteLength(
    string: string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer,
    encoding?: BufferEncoding
  ): number-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| string | string \| Buffer \| TypedArray \| DataView \| ArrayBuffer \| SharedArrayBuffer | Yes | Target string. |
| encoding | [BufferEncoding](arkts-arkts-fastbuffer-bufferencoding-t.md) | No | Encoding format. The default value is **'utf8'**. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of bytes of the string. |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let str = '\u00bd + \u00bc = \u00be';
console.info(`${str}: ${str.length} characters, ${buffer.byteLength(str, 'utf-8')} bytes`);
// Output: ½ + ¼ = ¾: 9 characters, 12 bytes

```

