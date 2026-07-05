# MemoryLimit

Defines the memory limit of the application process.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## 导入模块

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## vssLimit

```TypeScript
vssLimit: bigint
```

The limit of the application process's virtual memory, in kilobyte

**类型：** bigint

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## vmTotalHeapSize

```TypeScript
vmTotalHeapSize: bigint
```

The limit of the total js vm heap size of process, in kilobyte

**类型：** bigint

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## vmHeapLimit

```TypeScript
vmHeapLimit: bigint
```

The limit of the js vm heap size of current virtual machine, in kilobyte

**类型：** bigint

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## rssLimit

```TypeScript
rssLimit: bigint
```

The limit of the application process's resident set, in kilobyte

**类型：** bigint

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

