# byteLength

## byteLength

```TypeScript
function byteLength(
    string: string | Buffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer,
    encoding?: BufferEncoding
  ): number
```

根据不同的编码格式，返回指定字符串的字节数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| string | string \| Buffer \| TypedArray \| DataView \| ArrayBuffer \| SharedArrayBuffer | Yes | 指定字符串。 |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回指定字符串的字节数。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let str = '\u00bd + \u00bc = \u00be';
console.info(`${str}: ${str.length} characters, ${buffer.byteLength(str, 'utf-8')} bytes`);
// Output: ½ + ¼ = ¾: 9 characters, 12 bytes

```

