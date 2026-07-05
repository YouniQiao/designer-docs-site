# getVss

## getVss

```TypeScript
function getVss(): bigint
```

Obtains the virtual set size used by the application process. This API is implemented by multiplying the value of **size** (number of memory pages) in the **\/proc/{pid}/statm** node by the page size (4 KB per page).

**起始版本：** 11

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| bigint | Virtual set size used by the application process, in KB. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let vss: bigint = hidebug.getVss();
console.info(`vss = ${vss}`);

```

