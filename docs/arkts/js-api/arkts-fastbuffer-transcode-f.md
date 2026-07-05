# transcode

## transcode

```TypeScript
function transcode(source: FastBuffer | Uint8Array, fromEnc: string, toEnc: string): FastBuffer
```

将FastBuffer或Uint8Array对象从fromEnc编码转换为toEnc编码。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | FastBuffer \| Uint8Array | Yes | 实例对象。 |
| fromEnc | string | Yes | 当前编码格式。支持的格式范围为BufferEncoding。传入空字符串时，表示使用编码格式'utf8'。 |
| toEnc | string | Yes | 目标编码。支持的格式范围为BufferEncoding。 |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | 将当前编码转换成目标编码，并返回一个新的FastBuffer对象。 |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let newBuf = fastbuffer.transcode(fastbuffer.from('buffer'), 'utf-8', 'ascii');
console.info("newBuf = " + newBuf.toString('ascii'));
// Output: newBuf = buffer

```

