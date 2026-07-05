# byteLength

## byteLength

```TypeScript
function byteLength(value: string | FastBuffer | TypedArray | DataView | ArrayBuffer | SharedArrayBuffer, encoding?: BufferEncoding): number
```

根据不同的编码格式，返回指定字符串的字节数。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| FastBuffer \| TypedArray \| DataView \| ArrayBuffer \| SharedArrayBuffer | Yes | 指定字符串。 |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回指定字符串的字节数。 |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let str = 'hello world';
console.info(`${str}: ${str.length} characters, ${fastbuffer.byteLength(str, 'utf-8')} bytes`);
// Output: hello world: 11 characters, 11 bytes

str = '\u00bd + \u00bc = \u00be';
console.info(`${str}: ${str.length} characters, ${fastbuffer.byteLength(str, 'utf-8')} bytes`);
// Output: ½ + ¼ = ¾: 9 characters, 12 bytes

```

