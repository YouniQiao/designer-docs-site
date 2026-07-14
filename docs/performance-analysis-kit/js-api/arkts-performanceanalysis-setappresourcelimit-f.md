# setAppResourceLimit

## Modules to Import

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## setAppResourceLimit

```TypeScript
function setAppResourceLimit(type: string, value: number, enableDebugLog: boolean): void
```

Sets the number of FDs, number of threads, JS memory, or native memory limit of the application. > **NOTE** > > Enable **System resource leak log** in **Developer options** and restart the device for the API to take effect.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Types of leak resources:<br>- pss_memory (native memory)<br>- js_heap (JavaScript heapmemory)<br>- fd (file descriptor)<br>- thread (thread) |
| value | number | Yes | Value range of the maximum values of the leak resource types:<br>- pss_memory:**[1024, 4 × 1024 × 1024]** (Unit: KB)<br>- js_heap: **[85, 95]** (85% to 95% of the upper size limit of the JSheap memory)<br>- fd: **[10, 10000]**<br>- thread: **[1, 1000]**. If the value is out of range, the featurebecomes invalid. |
| enableDebugLog | boolean | Yes | Whether to enable external debugging logs. Enable external debugging logs onlyin the grayscale version (test version released to a small number of users before the official version isreleased). Collecting debugging logs occupies a large number of CPU and memory resources, which may causeapplication smoothness problems.<br>The value **true** means to enable external debugging logs, and false meansthe opposite.<br> |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid argument, Possible causes:1.The limit parameter is too small2.The parameter is not in the specified type3.The parameter type error or parameter order error |
| [11400104](../errorcode-hiviewdfx-hidebug-cpuusage.md#11400104-abnormal-cpu-usage) | Set limit failed due to remote exception |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let type: string = 'js_heap';
let value: number = 85;
let enableDebugLog: boolean = false;
try {
  hidebug.setAppResourceLimit(type, value, enableDebugLog);
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}

```

