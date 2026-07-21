# transcode

## Modules to Import

```TypeScript
import { buffer } from '@kit.ArkTS';
```

<a id="transcode"></a>
## transcode

```TypeScript
function transcode(source: Buffer | Uint8Array, fromEnc: string, toEnc: string): Buffer
```

Transcodes a **Buffer** or **Uint8Array** object from one encoding format to another.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-buffer-function transcode(source: Buffer | Uint8Array, fromEnc: string, toEnc: string): Buffer--><!--Device-buffer-function transcode(source: Buffer | Uint8Array, fromEnc: string, toEnc: string): Buffer-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| source | [Buffer](arkts-arkts-buffer-buffer-c.md) \| Uint8Array | Yes | Instance object. |
| fromEnc | string | Yes | Current encoding format. For details about the supported formats, see [BufferEncoding](arkts-arkts-buffer-bufferencoding-t.md). |
| toEnc | string | Yes | Target encoding format. For details about the supported formats, see [BufferEncoding](arkts-arkts-buffer-bufferencoding-t.md). |

**Return value:**

| Type | Description |
| --- | --- |
| [Buffer](arkts-arkts-buffer-buffer-c.md) | New **Buffer** object in the target encoding format. |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let newBuf = buffer.transcode(buffer.from('€'), 'utf-8', 'ascii');
console.info("newBuf = " + newBuf.toString('ascii'));
// Output: newBuf = ,

```

