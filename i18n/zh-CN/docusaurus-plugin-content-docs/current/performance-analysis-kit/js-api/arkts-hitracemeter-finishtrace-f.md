# finishTrace

## finishTrace

```TypeScript
function finishTrace(name: string, taskId: int): void
```

Stops an asynchronous trace. To stop a trace, the values of name and task ID in **finishTrace** must be the same as those in [startTrace()]hiTraceMeter.startTrace. Since API version 19, you are advised to use [finishAsyncTrace()]hiTraceMeter.finishAsyncTrace, which must be used together with [startAsyncTrace()]hiTraceMeter.startAsyncTrace.

**起始版本：** 8

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Name of the trace to start. |
| taskId | int | 是 | Task ID. |

**示例：**

```TypeScript
// 跟踪并行执行的同名任务
hiTraceMeter.startTrace("myTestFunc", 1);
// 业务流程...... 
hiTraceMeter.startTrace("myTestFunc", 2);  // 第二个跟踪的任务开始，同时第一个跟踪的同名任务还没结束，出现了并行执行，对应接口的taskId需要不同
// 业务流程...... 
hiTraceMeter.finishTrace("myTestFunc", 1);
// 业务流程...... 
hiTraceMeter.finishTrace("myTestFunc", 2);


// 跟踪串行执行的同名任务
hiTraceMeter.startTrace("myTestFunc", 1);
// 业务流程...... 
hiTraceMeter.finishTrace("myTestFunc", 1);  // 第一个跟踪的任务结束
// 业务流程...... 
hiTraceMeter.startTrace("myTestFunc", 1);   // 第二个跟踪的同名任务开始，同名的待跟踪任务串行执行。
// 业务流程...... 
hiTraceMeter.finishTrace("myTestFunc", 1);

```

