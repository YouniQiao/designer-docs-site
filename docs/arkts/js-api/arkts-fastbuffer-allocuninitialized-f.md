# allocUninitialized

## allocUninitialized

```TypeScript
function allocUninitialized(size: number): FastBuffer
```

创建指定大小未初始化的FastBuffer对象，需要使用fill函数来初始化FastBuffer对象。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | 指定的FastBuffer对象长度，单位：字节。取值范围：0 &lt;= size &lt;= UINT32_MAX。 |

**Return value:**

| Type | Description |
| --- | --- |
| FastBuffer | 未初始化的FastBuffer实例。 |

**Example**

```TypeScript
import { fastbuffer } from '@kit.ArkTS';

let buf = fastbuffer.allocUninitialized(10);
buf.fill(0);
// "buf":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

```

