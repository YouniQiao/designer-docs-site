# isBuffer

## isBuffer

```TypeScript
function isBuffer(obj: Object): boolean
```

判断obj是否为Buffer。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | Object | Yes | 判断对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 如果obj是Buffer，则返回true，否则返回false。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

let result = buffer.isBuffer(buffer.alloc(10)); // 10: buffer size
console.info("result = " + result);
// Output: result = true
let result1 = buffer.isBuffer(buffer.from('foo'));
console.info("result1 = " + result1);
// Output: result1 = true
let result2 = buffer.isBuffer('a string');
console.info("result2 = " + result2);
// Output: result2 = false
let result3 = buffer.isBuffer([]);
console.info("result3 = " + result3);
// Output: result3 = false
let result4 = buffer.isBuffer(new Uint8Array(1024));
console.info("result4 = " + result4);
// Output: result4 = false

```

