# finishTrace

## Modules to Import

```TypeScript
import { hiTraceMeter } from '@kit.PerformanceAnalysisKit';
```

<a id="finishtrace"></a>
## finishTrace

```TypeScript
function finishTrace(name: string, taskId: number): void
```

Stops an asynchronous trace.

To stop a trace, the values of name and task ID in **finishTrace** must be the same as those in [startTrace()](arkts-performanceanalysis-hitracemeter-starttrace-f.md#starttrace-1).

Since API version 19, you are advised to use [finishAsyncTrace()](arkts-performanceanalysis-hitracemeter-finishasynctrace-f.md#finishasynctrace-1), which must be used together with [startAsyncTrace()](arkts-performanceanalysis-hitracemeter-startasynctrace-f.md#startasynctrace-1).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-hiTraceMeter-function finishTrace(name: string, taskId: int): void--><!--Device-hiTraceMeter-function finishTrace(name: string, taskId: int): void-End-->

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the trace to start. |
| taskId | number | Yes | Task ID. |

**Example**

```TypeScript
// Start trace tasks with the same name concurrently.
hiTraceMeter.startTrace("myTestFunc", 1);
// Service flow...
hiTraceMeter.startTrace("myTestFunc", 2);  // Start the second trace with the same name while the first task is still running. The tasks are running concurrently and therefore their taskId must be different.
// Service flow...
hiTraceMeter.finishTrace("myTestFunc", 1);
// Service flow...
hiTraceMeter.finishTrace("myTestFunc", 2);

```

```TypeScript
// Start trace tasks with the same name in serial mode.
hiTraceMeter.startTrace("myTestFunc", 1);
// Service flow...
hiTraceMeter.finishTrace("myTestFunc", 1);  // End the first trace task.
// Service flow...
hiTraceMeter.startTrace("myTestFunc", 1);   // Start the second trace task with the same name in serial mode.
// Service flow...
hiTraceMeter.finishTrace("myTestFunc", 1);

```

