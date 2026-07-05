# transcode

## Modules to Import

```TypeScript
import { fastbuffer } from '@ohos.fastbuffer';
```

## transcode

```TypeScript
function transcode(source: FastBuffer | Uint8Array, fromEnc: string, toEnc: string): FastBuffer
```

Re-encodes the given FastBuffer or Uint8Array instance from one character encoding to another.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | FastBuffer \| Uint8Array | Yes | The buffer to re-encode |
| fromEnc | string | Yes | The source character encoding |
| toEnc | string | Yes | The target character encoding |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | Returns a new FastBuffer instance |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let newBuf = fastbuffer.transcode(fastbuffer.from('buffer'), 'utf-8', 'ascii');
console.info("newBuf = " + newBuf.toString('ascii'));
// Output: newBuf = buffer

```

