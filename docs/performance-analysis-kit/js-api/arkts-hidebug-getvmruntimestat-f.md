# getVMRuntimeStat

## getVMRuntimeStat

```TypeScript
function getVMRuntimeStat(item: string): long
```

Obtains the specified system GC statistics based on parameters.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| item | string | Yes | Type of the statistics to obtain. The following statistics can be obtained:  "ark.gc.gc-count": number of GC times of the current thread. "ark.gc.gc-time": total GC duration  triggered by the current thread, in milliseconds. "ark.gc.gc-bytes-allocated": size of the Ark VM memory  allocated to the current thread, in bytes. "ark.gc.gc-bytes-freed": memory freed by GC of the current  thread, in bytes. "ark.gc.fullgc-longtime-count": number of longtime full GC times triggered by the  current thread. |

**Return value:**

| Type | Description |
| --- | --- |
| long | System GC statistics returned based on the input parameters. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Possible causes:  1. Invalid parameter, a string parameter required.  2. Invalid parameter, unknown property. |

**Example**

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

