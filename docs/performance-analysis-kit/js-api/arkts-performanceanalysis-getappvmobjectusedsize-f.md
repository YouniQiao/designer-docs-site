# getAppVMObjectUsedSize

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## getAppVMObjectUsedSize

```TypeScript
function getAppVMObjectUsedSize(): bigint
```

Obtains the VM memory size occupied by ArkTS objects.

**Since:** 21

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| bigint | VM memory size occupied by ArkTS objects, in KB. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

console.info(`getAppVMObjectUsedSize = ${hidebug.getAppVMObjectUsedSize()}`);

```

