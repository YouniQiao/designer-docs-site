# @ohos.taskpool

TaskPool provides a multi-thread running environment for applications. It helps reduce resource consumption and
improve system performance. It also frees you from caring about the thread lifecycle. You can use the TaskPool APIs
to create background tasks and perform operations on them, for example, executing or canceling a task. Theoretically,
you can create an unlimited number of tasks, but this is not recommended due to memory limitations. In addition, you
are not advised performing blocking operations in a task, especially indefinite blocking. Long-time blocking
operations occupy worker threads and may block other task scheduling, adversely affecting your application
performance.
You can determine the execution sequence of tasks with the same priority. They are executed in the same sequence as
you call the task execution APIs. The default task priority is MEDIUM.
If the number of tasks to be executed is greater than the number of worker threads in the task pool, the task pool
scales out based on load balancing to minimize the waiting duration. Similarly, when the number of tasks to be
executed falls below the number of worker threads, the task pool scales in to reduce the number of worker threads.
For details about the error codes returned by TaskPool APIs, see
[Utils Error Codes](../../../../reference/apis-arkts/errorcode-utils.md).
For details about the precautions for using TaskPool, see
[Precautions for TaskPool](../../../../arkts-utils/taskpool-introduction.md#precautions-for-taskpool).
The following concepts are used in this topic:

- Task group task: task in a [TaskGroup](arkts-arkts-taskgroup-c.md).
- Serial queue task: task in a [SequenceRunner](arkts-arkts-sequencerunner-c.md).
- Asynchronous queue task: task in an [AsyncRunner](arkts-arkts-asyncrunner-c.md).
- Periodic task: task executed by calling
[executePeriodically](arkts-arkts-executeperiodically-f.md#executeperiodically-1).

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { taskpool } from '@kit.ArkTS';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [cancel](arkts-arkts-cancel-f.md#cancel-1) | Cancels a task in the task pool. If the task is in the internal queue of the task pool, the task will not beexecuted after being canceled, and an exception indicating task cancellation is returned. If the task has beendistributed to the worker thread of the task pool, canceling the task does not affect the task execution, and theexecution result is returned in the catch branch. You can use **isCanceled()** to check the task cancellationstatus. In other words, **taskpool.cancel** takes effect for calls of **taskpool.execute**,**taskpool.executeDelayed**, or **taskpool.executePeriodically**.Starting from API version 20, after performing a cancel operation, you can use the generic type BusinessError&lt;[taskpool.TaskResult](arkts-arkts-taskresult-i.md)&gt; in the catch branch to obtain the exception information thrown bythe task or the final execution result. |
| [cancel](arkts-arkts-cancel-f.md#cancel-2) | Cancels a task group in the task pool. If a task group is canceled before all the tasks in it are finished,**undefined** is returned.Starting from API version 20, after performing a cancel operation, you can use the generic type BusinessError&lt;[taskpool.TaskResult](arkts-arkts-taskresult-i.md)&gt; in the catch branch to obtain the exception information thrown bythe task or the final execution result. |
| [cancel](arkts-arkts-cancel-f.md#cancel-3) | Cancels a task in the task pool by task ID. If the task is in the internal queue of the task pool, the task willnot be executed after being canceled, and an exception indicating task cancellation is returned. If the task hasbeen distributed to the worker thread of the task pool, canceling the task does not affect the task execution, andthe execution result is returned in the catch branch. You can use **isCanceled()** to check the task cancellationstatus. **taskpool.cancel** takes effect for the previous calls of **taskpool.execute** or**taskpool.executeDelayed**. If **taskpool.cancel** is called by other threads, note that the cancel operation,which is asynchronous, may take effect for later calls of **taskpool.execute** or **taskpool.executeDelayed**.Starting from API version 20, after performing a cancel operation, you can use the generic type BusinessError&lt;[taskpool.TaskResult](arkts-arkts-taskresult-i.md)&gt; in the catch branch to obtain the exception information thrown bythe task or the final execution result. |
| [execute](arkts-arkts-execute-f.md#execute-1) | Places a function to be executed in the internal queue of the task pool. The function is not executed immediately.It waits to be distributed to the worker thread for execution. In this mode, the function cannot be canceled. ThisAPI uses a promise to return the result. |
| [execute](arkts-arkts-execute-f.md#execute-2) | Verifies the passed-in parameter types and return value type of a concurrent function, and places the function inthe queue of the task pool. This API uses a promise to return the result. |
| [execute](arkts-arkts-execute-f.md#execute-3) | Places a task in the internal queue of the task pool. The task will not be executed immediately; instead, it waitsto be distributed to a worker thread for execution. In the current mode, you can set the task priority and cancelthe task. Note that the task cannot belong to a task group, serial queue, or asynchronous queue. For non-continuoustasks, this API can be called multiple times. This API uses a promise to return the result. |
| [execute](arkts-arkts-execute-f.md#execute-4) | Places the generic task in the internal queue of the task pool. The parameter type and return value type of thetask are not verified. This API uses a promise to return the result.The verification of the **execute** task works in conjunction with **new GenericsTask**, requiring that theparameter and return value types match those specified in **new GenericsTask**. |
| [execute](arkts-arkts-execute-f.md#execute-5) | Places a task group in the internal queue of the task pool. The tasks in the task group are not executedimmediately. They wait to be distributed to the worker thread for execution. After all tasks in the task group areexecuted, a result array is returned. This mode is applicable to the execution of associated tasks. This API uses apromise to return the result. |
| [execute](arkts-arkts-execute-f.md#execute-6) | Execute a concurrent task with Configs. |
| [execute](arkts-arkts-execute-f.md#execute-7) | Execute a concurrent generics task with Configs. |
| [execute](arkts-arkts-execute-f.md#execute-8) | Execute a concurrent task group with Configs. |
| [executeDelayed](arkts-arkts-executedelayed-f.md#executedelayed-1) | Executes a task after a given delay. In this execution mode, you can set the task priority and call **cancel()** tocancel the execution. The task cannot be a task in a task group, serial queue, or asynchronous queue, or a periodictask. This API can be called only once for a continuous task, but multiple times for a non-continuous task. ThisAPI uses a promise to return the result. |
| [executeDelayed](arkts-arkts-executedelayed-f.md#executedelayed-2) | Executes the generic task with a delay without verifying the parameter type and return value type of the task. ThisAPI uses a promise to return the result.The verification of the **executeDelayed** task works in conjunction with **new GenericsTask**, requiring that theparameter and return value types match those specified in **new GenericsTask**. |
| [executePeriodically](arkts-arkts-executeperiodically-f.md#executeperiodically-1) | Executes a task periodically. In this execution mode, you can set the task priority and call **cancel()** to cancelthe execution. A periodic task cannot be a task in a task group, serial queue, or asynchronous queue. It cannotcall **execute()** again or have a dependency relationship. |
| [executePeriodically](arkts-arkts-executeperiodically-f.md#executeperiodically-2) | Executes a generic task periodically, without verifying the parameter type and return value type of the task.The verification of the **executePeriodically** task works in conjunction with **new GenericsTask**, requiring thatthe parameter and return value types match those specified in **new GenericsTask**. |
| [getTask](arkts-arkts-gettask-f.md#gettask-1) | Obtains the corresponding task instance by task ID, or by task ID and task name.&gt; **NOTE**&gt;&gt; - If no task instance is found based on the input task ID, **undefined** is returned.&gt;&gt; - If the corresponding task instance can be queried based on the input task ID but the thread that calls the&gt; **getTask** method is different from the thread that creates the task instance, **undefined** is returned.&gt;&gt; - If taskId and taskName are both passed, and the name of the task instance queried via task ID does not match&gt; the provided task name, **undefined** is returned. |
| [getTaskPoolInfo](arkts-arkts-gettaskpoolinfo-f.md#gettaskpoolinfo-1) | Obtains the thread information and task information of the task pool. |
| [isConcurrent](arkts-arkts-isconcurrent-f.md#isconcurrent-1) | Checks whether a function is a concurrent function. |
| [terminateTask](arkts-arkts-terminatetask-f.md#terminatetask-1) | Terminates a continuous task in the task pool. It is called after the continuous task is complete. After the taskis terminated, the thread that executes the task may be reclaimed. |

### Classes

| Name | Description |
| --- | --- |
| [AsyncRunner](arkts-arkts-asyncrunner-c.md) | Implements an asynchronous queue, for which you can specify the task execution concurrency and queuing policy. |
| [GenericsTask](arkts-arkts-genericstask-c.md) | Implements a generic task. **GenericsTask** inherits from[Task](arkts-arkts-execute-f.md#execute-1).During the creation of a generic task, the passed-in parameter types and return value types of concurrent functionsare verified in the compilation phase. Other behaviors are the same as those during the creation of a task. |
| [LongTask](arkts-arkts-longtask-c.md) | Describes a continuous task. **LongTask** inherits from[Task](arkts-arkts-execute-f.md#execute-1).No upper limit is set for the execution time of a continuous task, and no timeout exception is thrown if acontinuous task runs for a long period of time. However, a continuous task cannot be executed in a task group orexecuted for multiple times.The thread for executing a continuous task exists until [terminateTask](arkts-arkts-terminatetask-f.md#terminatetask-1) is calledafter the execution is complete. The thread is reclaimed when it is idle. |
| [SequenceRunner](arkts-arkts-sequencerunner-c.md) | Implements a serial queue, in which all tasks are executed in sequence. |
| [Task](arkts-arkts-task-c.md) | Enumerates tasks, which can be executed for multiple times, placed in a task group, serial queue, or asynchronousqueue for execution, or added with dependencies for execution. |
| [TaskGroup](arkts-arkts-taskgroup-c.md) | Implements a task group, in which tasks are associated with each other and all tasks are executed at a time. If allthe tasks are executed normally, an array of task results is returned asynchronously, and the sequence of elementsin the array is the same as the sequence of tasks added by calling[addTask](arkts-arkts-taskgroup-c.md#addtask-2). If any task fails, the corresponding exception is thrown.If multiple tasks in the task group fail, the exception of the first failed task is thrown. A task group can beexecuted for multiple times, but no task can be added after the task group is executed. |
| [TaskInfo](arkts-arkts-taskinfo-c.md) | Describes the internal information about a task. |
| [TaskPoolInfo](arkts-arkts-taskpoolinfo-c.md) | Describes the internal information about a task pool. |
| [ThreadInfo](arkts-arkts-threadinfo-c.md) | Describes the internal information about a worker thread. |

### Interfaces

| Name | Description |
| --- | --- |
| [Configs](arkts-arkts-configs-i.md) | Defines the task configs interface |
| [TaskResult](arkts-arkts-taskresult-i.md) | Describes the supplementary information captured in **BusinessError** in the catch branch after a task in thewaiting or execution phase is canceled. In other scenarios, the task result is **undefined**. |

### Enums

| Name | Description |
| --- | --- |
| [Priority](arkts-arkts-priority-e.md) | Enumerates the priorities available for created tasks. The task priority applies during task execution. The workerthread priority is updated with the task priority. For details about the mappings, see[QoS Level](../../../../napi/qos-guidelines.md#qos-level). |
| [State](arkts-arkts-state-e.md) | Enumerates the task states. After a task is created and **execute()** is called, the task is placed in the internalqueue of the task pool and the state is **WAITING**. When the task is being executed by the worker thread of thetask pool, the state changes to **RUNNING**. After the task is executed and the result is returned, the state isreset to **WAITING**. When the task is proactively canceled, the state changes to **CANCELED**. |

### Types

| Name | Description |
| --- | --- |
| [CallbackFunction](arkts-arkts-callbackfunction-t.md) | Describes a callback function. |
| [CallbackFunctionWithError](arkts-arkts-callbackfunctionwitherror-t.md) | Describes a callback function with an error message. |

