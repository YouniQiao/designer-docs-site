# getSystemMemInfo

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## getSystemMemInfo

```TypeScript
function getSystemMemInfo(): SystemMemInfo
```

Obtains system memory information. This API is implemented by reading data from the **\/proc/meminfo** node.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| SystemMemInfo | System memory information. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let systemMemInfo: hidebug.SystemMemInfo = hidebug.getSystemMemInfo();

console.info(`totalMem: ${systemMemInfo.totalMem}, freeMem: ${systemMemInfo.freeMem}, ` +
  `availableMem: ${systemMemInfo.availableMem}`);

```

