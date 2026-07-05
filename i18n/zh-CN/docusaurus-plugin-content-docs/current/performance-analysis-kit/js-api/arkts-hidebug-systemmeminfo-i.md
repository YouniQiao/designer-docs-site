# SystemMemInfo

Describes the system memory information, including the total memory, free memory, and available memory.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## 导入模块

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## totalMem

```TypeScript
totalMem: bigint
```

Total memory of the system, in KB. The value of this parameter is obtained by reading the value of **MemTotal** in the **\/proc/meminfo** node.

**类型：** bigint

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## availableMem

```TypeScript
availableMem: bigint
```

Available memory of the system, in KB. The value of this parameter is obtained by reading the value of **MemAvailable** in the **\/proc/meminfo** node.

**类型：** bigint

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## freeMem

```TypeScript
freeMem: bigint
```

Free memory of the system, in KB. The value of this parameter is obtained by reading the value of **MemFree** in the **\/proc/meminfo** node.

**类型：** bigint

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

