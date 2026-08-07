# stopAppTraceCapture

## stopAppTraceCapture

```TypeScript
function stopAppTraceCapture(): void
```

Stops application trace collection. Use [startAppTraceCapture()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ to start collection before calling this API. If this API is called before trace collection or it is repeatedly called, an exception will occur.

If **startAppTraceCapture ()** is called without a properly specified **limitSize**, the size of the generated trace may exceed the **limitSize** value, causing the system to automatically call **stopAppTraceCapture()**. In this case, if **stopAppTraceCapture()** is called again, an error code 11400105 will be displayed.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn since version 12; ArkTS-Sta since version 23.

<!--Device-hidebug-function stopAppTraceCapture(): void--><!--Device-hidebug-function stopAppTraceCapture(): void-End-->

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [11400104](../errorcode-hiviewdfx-hidebug-cpuusage.md#11400104-abnormal-cpu-usage) | The status of the trace is abnormal |
| [11400105](../errorcode-hiviewdfx-hidebug-trace.md#11400105-trace-capture-disabled) | No capture trace running |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tags: number[] = [hidebug.tags.ABILITY_MANAGER, hidebug.tags.ARKUI];
let flag: hidebug.TraceFlag = hidebug.TraceFlag.MAIN_THREAD;
let limitSize: number = 1024 * 1024;
try {
  let fileName: string = hidebug.startAppTraceCapture(tags, flag, limitSize);
  // code block
  // ...
  // code block
  hidebug.stopAppTraceCapture();
} catch (error) {
  console.error(`error code: ${(error as BusinessError).code}, error msg: ${(error as BusinessError).message}`);
}
```

