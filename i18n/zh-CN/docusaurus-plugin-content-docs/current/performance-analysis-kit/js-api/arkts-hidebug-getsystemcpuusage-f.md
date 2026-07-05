# getSystemCpuUsage

## getSystemCpuUsage

```TypeScript
function getSystemCpuUsage(): double
```

Obtains the CPU usage of the system. > **NOTE** > > This API involves cross-process communication and takes a long time. To avoid performance problems, you are > advised not to call this API in the main thread.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | CPU usage of the system. For example, if the CPU usage is 50%, 0.5 is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 11400104 | The status of the system CPU usage is abnormal. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  console.info(`getSystemCpuUsage: ${hidebug.getSystemCpuUsage()}`)
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

