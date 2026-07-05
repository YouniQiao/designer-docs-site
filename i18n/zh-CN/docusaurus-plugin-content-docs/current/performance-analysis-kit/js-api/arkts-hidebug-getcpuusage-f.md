# getCpuUsage

## getCpuUsage

```TypeScript
function getCpuUsage() : double
```

Obtains the CPU usage of a process. > **NOTE** > > This API involves cross-process communication and takes a long time. To avoid performance problems, you are > advised not to call this API in the main thread.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | CPU usage of a process. For example, if the CPU usage is 50%, 0.5 is returned. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let cpuUsage: number = hidebug.getCpuUsage();
console.info(`cpuUsage = ${cpuUsage}`);

```

