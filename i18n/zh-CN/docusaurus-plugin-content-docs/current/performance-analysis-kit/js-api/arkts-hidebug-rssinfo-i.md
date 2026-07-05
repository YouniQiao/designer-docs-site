# RssInfo

Describes the physical memory information of the application process.

**起始版本：** 24

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## 导入模块

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## rss

```TypeScript
rss: bigint
```

Size of the occupied physical memory (including the memory occupied by the shared library), in KB. The value of this parameter is obtained by reading the value of VmRSS in the /proc/{pid}/status node.

**类型：** bigint

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## swapRss

```TypeScript
swapRss: bigint
```

Size of the memory occupied by the process in swap space, in KB. The value of this parameter is obtained by reading the value of VmSwap in the /proc/{pid}/status node.

**类型：** bigint

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

