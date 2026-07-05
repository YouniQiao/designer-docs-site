# finishTrace

## finishTrace

```TypeScript
function finishTrace(name: string, taskId: int): void
```

Stops an asynchronous trace. To stop a trace, the values of name and task ID in **finishTrace** must be the same as those in [startTrace()]hiTraceMeter.startTrace. Since API version 19, you are advised to use [finishAsyncTrace()]hiTraceMeter.finishAsyncTrace, which must be used together with [startAsyncTrace()]hiTraceMeter.startAsyncTrace.

**Since:** 8

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the trace to start. |
| taskId | int | Yes | Task ID. |

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


// Start trace tasks with the same name in serial mode.
hiTraceMeter.startTrace("myTestFunc", 1);
// Service flow...
hiTraceMeter.finishTrace("myTestFunc", 1);  // End the first trace task.
// Service flow...
hiTraceMeter.startTrace("myTestFunc", 1);   // Start the second trace task with the same name in serial mode.
// Service flow...
hiTraceMeter.finishTrace("myTestFunc", 1);

```

