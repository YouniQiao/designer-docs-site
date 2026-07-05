# getNativeHeapFreeSize

## getNativeHeapFreeSize

```TypeScript
function getNativeHeapFreeSize() : bigint
```

Obtains the total number of bytes occupied by the total free space (**fordblks**, which is obtained from **mallinfo**) held by a process, which is measured by the memory allocator.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| bigint | Size of the memory occupied by the total free space held by the process, in bytes. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let nativeHeapFreeSize: bigint = hidebug.getNativeHeapFreeSize();
console.info(`nativeHeapFreeSize = ${nativeHeapFreeSize}`);

```

