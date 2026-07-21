# finishTrace

<a id="finishtrace"></a>
## finishTrace

```TypeScript
function finishTrace(name: string, taskId: number): void
```

Records a trace and marks it as the end of a task.

This method is invoked at the end of a transaction to indicate that a task has ended, whose name is specified by {@code name}. This method must be invoked after the the startTrace.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** finishTrace

<!--Device-bytrace-function finishTrace(name: string, taskId: number): void--><!--Device-bytrace-function finishTrace(name: string, taskId: number): void-End-->

**System capability:** SystemCapability.HiviewDFX.HiTrace

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Indicates the task name. It must be the same with the { |
| taskId | number | Yes | The unique id used to distinguish the tasks and must be the same with the . |

**Example**

```TypeScript
bytrace.finishTrace("myTestFunc", 1);

```

```TypeScript
// Start trace tasks with the same name concurrently.
bytrace.startTrace("myTestFunc", 1);
// Service flow...
bytrace.startTrace("myTestFunc", 2);  // The second trace task starts while the first task is still running. The first and second tasks have the same name but different task IDs.
// Service flow...
bytrace.finishTrace("myTestFunc", 1);
// Service flow...
bytrace.finishTrace("myTestFunc", 2);

```

```TypeScript
// Start trace tasks with the same name in serial mode.
bytrace.startTrace("myTestFunc", 1);
// Service flow...
bytrace.finishTrace("myTestFunc", 1);  // The first trace task ends.
// Service flow...
bytrace.startTrace("myTestFunc", 1);   // The second trace task starts after the first task ends. The two tasks have the same name and task ID.
// Service flow...
bytrace.finishTrace("myTestFunc", 1);

```

