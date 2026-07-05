# concat

## concat

```TypeScript
function concat(list: FastBuffer[] | Uint8Array[], totalLength?: number): FastBuffer
```

将数组中指定字节长度的内容复制到新的FastBuffer对象中并返回拼接后的FastBuffer对象。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| list | FastBuffer[] \| Uint8Array[] | Yes | 实例数组。 |
| totalLength | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | 返回新的FastBuffer对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | Range error. Possible causes:  The value of the parameter is not within the specified range. |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let buf1 = fastbuffer.from("1234");
let buf2 = fastbuffer.from("abcd");
let buf = fastbuffer.concat([buf1, buf2]);
console.info(buf.toString('hex'));
// Output: 3132333461626364

```

