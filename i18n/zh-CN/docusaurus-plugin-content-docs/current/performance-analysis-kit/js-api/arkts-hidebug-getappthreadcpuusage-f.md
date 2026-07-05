# getAppThreadCpuUsage

## getAppThreadCpuUsage

```TypeScript
function getAppThreadCpuUsage(): ThreadCpuUsage[]
```

Obtains the CPU usage of application threads. > **NOTE** > > This API involves cross-process communication and takes a long time. To avoid performance problems, you are > advised not to call this API in the main thread.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ThreadCpuUsage[] | CPU usage of all threads of the current application process. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let appThreadCpuUsage: hidebug.ThreadCpuUsage[] = hidebug.getAppThreadCpuUsage();
for (let i = 0; i < appThreadCpuUsage.length; i++) {
  console.info(`threadId=${appThreadCpuUsage[i].threadId}, cpuUsage=${appThreadCpuUsage[i].cpuUsage}`);
}

```

