# isEncoding

## isEncoding

```TypeScript
function isEncoding(encoding: string): boolean
```

判断encoding是否为支持的编码格式。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | Yes | 编码格式。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是支持的编码格式返回true，反之则返回false。 |

**Example**

```TypeScript
import { buffer } from '@kit.ArkTS';

console.info(buffer.isEncoding('utf-8').toString());
// Output: true
console.info(buffer.isEncoding('hex').toString());
// Output: true
console.info(buffer.isEncoding('utf/8').toString());
// Output: false
console.info(buffer.isEncoding('').toString());
// Output: false

```

