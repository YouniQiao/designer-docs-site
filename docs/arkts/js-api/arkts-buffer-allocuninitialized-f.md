# allocUninitialized

## allocUninitialized

```TypeScript
function allocUninitialized(size: int): Buffer
```

创建指定大小未初始化的Buffer对象。内存不从缓冲池分配。 创建的Buffer内容未知，需要使用[fill()]buffer.Buffer#fill函数来初始化Buffer对象。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | int | Yes | 指定的Buffer对象长度，单位：字节。 |

**Return value:**

| Type | Description |
| --- | --- |
| Buffer | 未初始化的Buffer实例。 |

**Example**

```TypeScript
import { buffer, JSON } from '@kit.ArkTS';

let buf = buffer.allocUninitialized(10);
buf.fill(0);
console.info(JSON.stringify(buf)); // {"type":"Buffer","data":[0,0,0,0,0,0,0,0,0,0]}

```

