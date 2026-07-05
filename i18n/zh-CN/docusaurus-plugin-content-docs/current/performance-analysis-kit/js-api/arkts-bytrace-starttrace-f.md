# startTrace

## startTrace

```TypeScript
function startTrace(name: string, taskId: number, expectedTime?: number): void
```

Records a trace marking it as the start of a task, can with the expected completion time between startTrace and finishTrace. This method is invoked at the start of a transaction to indicate that a task has started, whose name is specified by {@code name}, and the taskId is used to distinguish the tasks. It must be followed by {@link #finishTrace}, the name and taskId need to be the same.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.hiTraceMeter.startTrace

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Indicates the task name. |
| taskId | number | 是 | The unique id used to distinguish the tasks and match with the id in follow finishTrace. |
| expectedTime | number | 否 | Indicates the expected time required for completing the task, in milliseconds. |

**示例：**

```TypeScript
bytrace.startTrace("myTestFunc", 1);
bytrace.startTrace("myTestFunc", 1, 5); // 从startTrace到finishTrace流程的期望耗时为5ms

```

