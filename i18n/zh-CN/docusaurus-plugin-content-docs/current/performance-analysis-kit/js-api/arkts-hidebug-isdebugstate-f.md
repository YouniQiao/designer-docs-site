# isDebugState

## isDebugState

```TypeScript
function isDebugState(): boolean
```

Obtains the debugging state of an application process.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the Ark or native layer of the application process is in the debugging state. The  value true indicates that the layer is in the debugging state, and false indicates the opposite. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

console.info(`isDebugState = ${hidebug.isDebugState()}`)

```

