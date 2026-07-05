# isEncoding

## isEncoding

```TypeScript
function isEncoding(encoding: string): boolean
```

判断`encoding`是否为支持的编码格式。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

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
import { fastbuffer } from '@kit.ArkTS';

console.info(fastbuffer.isEncoding('utf-8').toString());
// Output: true
console.info(fastbuffer.isEncoding('hex').toString());
// Output: true
console.info(fastbuffer.isEncoding('utf/8').toString());
// Output: false
console.info(fastbuffer.isEncoding('').toString());
// Output: false

```

