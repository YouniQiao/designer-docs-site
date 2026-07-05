# alloc

## alloc

```TypeScript
function alloc(size: number, fill?: string | FastBuffer | number, encoding?: BufferEncoding): FastBuffer
```

创建指定字节长度的FastBuffer对象并初始化。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | 指定的FastBuffer对象长度，单位：字节。取值范围：0 &lt;= size &lt;= UINT32_MAX。 |
| fill | string \| FastBuffer \| number | No |  |
| encoding | BufferEncoding | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | 返回一个FastBuffer对象。 |

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

