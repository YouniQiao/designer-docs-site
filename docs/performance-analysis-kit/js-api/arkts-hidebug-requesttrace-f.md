# requestTrace

## requestTrace

```TypeScript
function requestTrace(config: RequestTraceConfig): Promise<string>
```

Requests trace collection with the specified configuration.

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | RequestTraceConfig | Yes | Trace request configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the path of the trace file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 11400104 | Remote service exception. |
| 11400120 | Trace storage limit reached. |
| 11400302 | Resource unavailable. |

**Example**

```TypeScript
import { hidebug, hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  hidebug.requestTrace({
    identifier: "trace_name",
    bufferSizeKb: 1024,
    durationMs: 1000,
    reserved: 0,
  }).then((tracePath: string) => {
    hilog.info(0x0000, 'hidebug', `tracePath: ${tracePath}`)
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'hidebug', `error code: ${err.code}, message: ${err.message}`)
  })
} catch (error) {
  hilog.error(0x0000, 'hidebug', `error code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}`)
}

```

