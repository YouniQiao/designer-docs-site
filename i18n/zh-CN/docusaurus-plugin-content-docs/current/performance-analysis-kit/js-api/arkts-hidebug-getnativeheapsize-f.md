# getNativeHeapSize

## getNativeHeapSize

```TypeScript
function getNativeHeapSize() : bigint
```

Obtains the total number of bytes occupied by the total space (**uordblks** + **fordblks**, which are obtained from **mallinfo**) held by a process, which is measured by the memory allocator.

**起始版本：** 8

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| bigint | Size of the memory occupied by the total space held by the process, in bytes. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let nativeHeapSize: bigint = hidebug.getNativeHeapSize();
console.info(`nativeHeapSize = ${nativeHeapSize}`);

```

