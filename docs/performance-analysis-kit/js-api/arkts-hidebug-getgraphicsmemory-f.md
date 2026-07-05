# getGraphicsMemory

## getGraphicsMemory

```TypeScript
function getGraphicsMemory(): Promise<int>
```

Obtains the total GPU memory size (**gl** + **graph**) of the application. This API uses a promise to return the result.

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise used to return the total GPU memory size of the application, in KB. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 11400104 | Failed to get the application memory due to a remote exception. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

hidebug.getGraphicsMemory().then((ret: number) => {
  console.info(`graphicsMemory: ${ret}`)
}).catch((error: BusinessError) => {
  console.error(`error code: ${error.code}, error msg: ${error.message}`);
})

```

