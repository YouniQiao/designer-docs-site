# transcode

## transcode

```TypeScript
function transcode(source: Buffer | Uint8Array, fromEnc: string, toEnc: string): Buffer
```

将Buffer或Uint8Array对象从一种字符编码重新编码为另一种。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | Buffer \| Uint8Array | Yes | 实例对象。 |
| fromEnc | string | Yes | 当前编码。支持的格式范围为[BufferEncoding]buffer.BufferEncoding。 |
| toEnc | string | Yes | 目标编码。支持的格式范围为[BufferEncoding]buffer.BufferEncoding。 |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 将当前编码转换成目标编码，并返回一个新的Buffer对象。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let newBuf = buffer.transcode(buffer.from('€'), 'utf-8', 'ascii');
console.info("newBuf = " + newBuf.toString('ascii'));
// Output: newBuf = ,

```

