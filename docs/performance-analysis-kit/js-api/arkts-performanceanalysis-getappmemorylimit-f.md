# getAppMemoryLimit

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## getAppMemoryLimit

```TypeScript
function getAppMemoryLimit(): MemoryLimit
```

Obtains the memory limit of an application process.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| MemoryLimit | Memory limit of the application process. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let appMemoryLimit:hidebug.MemoryLimit = hidebug.getAppMemoryLimit();
console.info(`rssLimit: ${appMemoryLimit.rssLimit}, vssLimit: ${appMemoryLimit.vssLimit},` +
  `vmHeapLimit: ${appMemoryLimit.vmHeapLimit}, vmTotalHeapSize: ${appMemoryLimit.vmTotalHeapSize}`);

```

