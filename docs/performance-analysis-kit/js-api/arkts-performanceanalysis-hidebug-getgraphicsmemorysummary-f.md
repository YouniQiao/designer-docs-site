# getGraphicsMemorySummary

## Modules to Import

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## getGraphicsMemorySummary

```TypeScript
function getGraphicsMemorySummary(interval?: number): Promise<GraphicsMemorySummary>
```

Obtains the size of the GPU memory summary. This API uses a promise to return the result.

**Since:** 21

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-hidebug-function getGraphicsMemorySummary(interval?: int): Promise<GraphicsMemorySummary>--><!--Device-hidebug-function getGraphicsMemorySummary(interval?: int): Promise<GraphicsMemorySummary>-End-->

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| interval | number | No | If the cache of graphics memory is older than interval (unit: second), the latest |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<GraphicsMemorySummary> | Returns the size of the GPU memory summary, in KB. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [11400104](../errorcode-hiviewdfx-hidebug-cpuusage.md#11400104-abnormal-cpu-usage) | Failed to get the application memory due to a remote exception. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

hidebug.getGraphicsMemorySummary().then((ret: hidebug.GraphicsMemorySummary) => {
  console.info(`get graphicsMemory gl: ${ret.gl} graph: ${ret.graph}.`)
}).catch((error: BusinessError) => {
  console.error(`error code: ${error.code}, error msg: ${error.message}.`);
})

```

