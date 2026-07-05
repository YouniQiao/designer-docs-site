# compare

## compare

```TypeScript
function compare(buf1: Buffer | Uint8Array, buf2: Buffer | Uint8Array): -1 | 0 | 1
```

返回两个Buffer对象的比较结果，通常用于对Buffer对象数组进行排序。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf1 | Buffer \| Uint8Array | Yes | 待比较数组。 |
| buf2 | Buffer \| Uint8Array | Yes | 待比较数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| -1 | 如果buf1与buf2相同，则返回0。  如果排序时buf1位于buf2之后，则返回1。  如果排序时buf1位于buf2之前，则返回-1。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let buf1 = buffer.from('1234');
let buf2 = buffer.from('0123');
let res = buffer.compare(buf1, buf2);

console.info(Number(res).toString());
// Output: 1

```

