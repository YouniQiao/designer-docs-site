# alloc

## Modules to Import

```TypeScript
import { buffer } from '@kit.ArkTS';
```

<a id="alloc"></a>
## alloc

```TypeScript
function alloc(size: number, fill?: string | Buffer | number | number | number, encoding?: BufferEncoding): Buffer
```

Creates and initializes a **Buffer** object of the specified length.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-buffer-function alloc(size: int, fill?: string | Buffer | int | double | long, encoding?: BufferEncoding): Buffer--><!--Device-buffer-function alloc(size: int, fill?: string | Buffer | int | double | long, encoding?: BufferEncoding): Buffer-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Size of the **Buffer** object to create, in bytes. |
| fill | string \| Buffer \| number \| number \| number | No | Value to be filled in the buffer. The default value is **0**.<br>**Since:** 9 - 10 |
| encoding | [BufferEncoding](arkts-arkts-fastbuffer-bufferencoding-t.md) | No | Encoding format (valid only when **fill** is a string). The default value is **'utf8'**. |

**Return value:**

| Type | Description |
| --- | --- |
| [Buffer](arkts-arkts-buffer-buffer-c.md) | **Buffer** object created. |

