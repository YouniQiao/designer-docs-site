# alloc

## Modules to Import

```TypeScript
import { fastbuffer } from '@kit.ArkTS';
```

<a id="alloc"></a>
## alloc

```TypeScript
function alloc(size: number, fill?: string | FastBuffer | number, encoding?: BufferEncoding): FastBuffer
```

Allocates a new FastBuffer for a fixed size bytes. If fill is undefined, the FastBuffer will be zero-filled.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-fastbuffer-function alloc(size: number, fill?: string | FastBuffer | number, encoding?: BufferEncoding): FastBuffer--><!--Device-fastbuffer-function alloc(size: number, fill?: string | FastBuffer | number, encoding?: BufferEncoding): FastBuffer-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | The desired size (in bytes) of the new FastBuffer |
| fill | string \| FastBuffer \| number | No | fill [fill=0] A value to pre-fill the new FastBuffer with |
| encoding | [BufferEncoding](arkts-arkts-fastbuffer-bufferencoding-t.md) | No | encoding [encoding='utf8'] If `fill` is a string, this is its encoding |

**Return value:**

| Type | Description |
| --- | --- |
| [FastBuffer](arkts-arkts-fastbuffer-fastbuffer-c.md) | Return a new allocated FastBuffer |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let buf1 = fastbuffer.alloc(5);
let buf2 = fastbuffer.alloc(5, 'a');
let buf3 = fastbuffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
console.info(buf2.toString());
// Output: aaaaa
console.info(buf3.toString());
// Output: hello world

```

