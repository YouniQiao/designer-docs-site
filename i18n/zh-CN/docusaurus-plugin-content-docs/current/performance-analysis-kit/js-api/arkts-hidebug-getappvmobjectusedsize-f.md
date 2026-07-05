# getAppVMObjectUsedSize

## getAppVMObjectUsedSize

```TypeScript
function getAppVMObjectUsedSize(): bigint
```

Obtains the VM memory size occupied by ArkTS objects.

**起始版本：** 21

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| bigint | VM memory size occupied by ArkTS objects, in KB. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

console.info(`getAppVMObjectUsedSize = ${hidebug.getAppVMObjectUsedSize()}`);

```

