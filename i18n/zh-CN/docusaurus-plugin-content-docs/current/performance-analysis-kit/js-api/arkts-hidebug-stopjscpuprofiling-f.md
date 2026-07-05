# stopJsCpuProfiling

## stopJsCpuProfiling

```TypeScript
function stopJsCpuProfiling() : void
```

Stops the VM profiling method. **stopJsCpuProfiling()** and **startJsCpuProfiling(filename: string)** are called in pairs. **startJsCpuProfiling()** always occurs before **stopJsCpuProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  hidebug.startJsCpuProfiling("cpu_profiling");
  // ...
  hidebug.stopJsCpuProfiling();
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

