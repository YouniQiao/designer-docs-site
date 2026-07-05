# getGraphicsMemorySummary

## getGraphicsMemorySummary

```TypeScript
function getGraphicsMemorySummary(interval?: int): Promise<GraphicsMemorySummary>
```

Obtains the size of the GPU memory summary. This API uses a promise to return the result.

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| interval | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GraphicsMemorySummary> | Returns the size of the GPU memory summary, in KB. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 11400104 | Failed to get the application memory due to a remote exception. |

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

