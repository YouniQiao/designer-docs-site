# getVMRuntimeStat

## getVMRuntimeStat

```TypeScript
function getVMRuntimeStat(item: string): long
```

Obtains the specified system GC statistics based on parameters.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| item | string | 是 | Type of the statistics to obtain. The following statistics can be obtained:  "ark.gc.gc-count": number of GC times of the current thread. "ark.gc.gc-time": total GC duration  triggered by the current thread, in milliseconds. "ark.gc.gc-bytes-allocated": size of the Ark VM memory  allocated to the current thread, in bytes. "ark.gc.gc-bytes-freed": memory freed by GC of the current  thread, in bytes. "ark.gc.fullgc-longtime-count": number of longtime full GC times triggered by the  current thread. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | System GC statistics returned based on the input parameters. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes:  1. Invalid parameter, a string parameter required.  2. Invalid parameter, unknown property. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  console.info(`gc-count: ${hidebug.getVMRuntimeStat('ark.gc.gc-count')}`);
  console.info(`gc-time: ${hidebug.getVMRuntimeStat('ark.gc.gc-time')}`);
  console.info(`gc-bytes-allocated: ${hidebug.getVMRuntimeStat('ark.gc.gc-bytes-allocated')}`);
  console.info(`gc-bytes-freed: ${hidebug.getVMRuntimeStat('ark.gc.gc-bytes-freed')}`);
  console.info(`fullgc-longtime-count: ${hidebug.getVMRuntimeStat('ark.gc.fullgc-longtime-count')}`);
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

