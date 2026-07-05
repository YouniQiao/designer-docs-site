# compare

## compare

```TypeScript
function compare(buf1: FastBuffer | Uint8Array, buf2: FastBuffer | Uint8Array): -1 | 0 | 1
```

返回两个FastBuffer对象的比较结果，通常用于对FastBuffer对象数组进行排序。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf1 | FastBuffer \| Uint8Array | Yes | 待比较的第一个对象。 |
| buf2 | FastBuffer \| Uint8Array | Yes | 待比较的第二个对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| -1 | 如果buf1与buf2相同，则返回0。 如果排序时buf1位于buf2之后，则返回1。 如果排序时buf1位于buf2之前，则返回-1。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200068 | The underlying ArrayBuffer is null or detach. |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let buf1 = fastbuffer.from('1234');
let buf2 = fastbuffer.from('0123');
let res = fastbuffer.compare(buf1, buf2);

console.info(Number(res).toString());
// Output: 1

```

