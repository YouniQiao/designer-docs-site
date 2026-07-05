# concat

## concat

```TypeScript
function concat(list: Buffer[] | Uint8Array[], totalLength?: int): Buffer
```

将数组中的内容复制指定字节长度到新的Buffer对象中并返回。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| list | Buffer[] \| Uint8Array[] | Yes | 实例数组。 |
| totalLength | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 返回新的Buffer对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200001 | The value of "length" is out of range. It must be >= 0 and &lt;= uint32 max.  Received value is: [length] |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from("1234");
let buf2 = buffer.from("abcd");
let buf = buffer.concat([buf1, buf2]);
console.info(buf.toString('hex'));
// Output: 3132333461626364

```

