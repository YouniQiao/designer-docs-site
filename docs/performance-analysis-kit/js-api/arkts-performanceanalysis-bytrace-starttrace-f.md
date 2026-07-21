# startTrace

<a id="starttrace"></a>
## startTrace

```TypeScript
function startTrace(name: string, taskId: number, expectedTime?: number): void
```

Records a trace marking it as the start of a task, can with the expected completion time between startTrace and finishTrace.This method is invoked at the start of a transaction to indicate that a task has started, whose name is specified by {@code name}, and the taskId is used to distinguish the tasks. It must be followed by{@link #finishTrace}, the name and taskId need to be the same.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** startTrace

<!--Device-bytrace-function startTrace(name: string, taskId: number, expectedTime?: number): void--><!--Device-bytrace-function startTrace(name: string, taskId: number, expectedTime?: number): void-End-->

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Indicates the task name. |
| taskId | number | Yes | The unique id used to distinguish the tasks and match with the id in follow finishTrace. |
| expectedTime | number | No | Indicates the expected time required for completing the task, in milliseconds. |

**Example**

```TypeScript
bytrace.startTrace("myTestFunc", 1);
bytrace.startTrace("myTestFunc", 1, 5); // The expected duration of the trace is 5 ms.

```

