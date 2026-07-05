# getAppVMMemoryInfo

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## getAppVMMemoryInfo

```TypeScript
function getAppVMMemoryInfo(): VMMemoryInfo
```

Obtains VM memory information.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| VMMemoryInfo | VM memory information. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let vmMemory: hidebug.VMMemoryInfo = hidebug.getAppVMMemoryInfo();
console.info(`totalHeap = ${vmMemory.totalHeap}, heapUsed = ${vmMemory.heapUsed},` +
  `allArraySize = ${vmMemory.allArraySize}` );

```

