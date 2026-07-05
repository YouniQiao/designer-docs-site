# finishTrace

## finishTrace

```TypeScript
function finishTrace(name: string, taskId: number): void
```

Records a trace and marks it as the end of a task. This method is invoked at the end of a transaction to indicate that a task has ended, whose name is specified by {@code name}. This method must be invoked after the the startTrace.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** ohos.hiTraceMeter.finishTrace

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Indicates the task name. It must be the same with the {@code name} of startTrace. |
| taskId | number | 是 | The unique id used to distinguish the tasks and must be the same with the .  {@code taskId} of startTrace. |

**示例：**

```TypeScript
bytrace.finishTrace("myTestFunc", 1);


// 跟踪并行执行的同名任务
bytrace.startTrace("myTestFunc", 1);
// 业务流程...... 
bytrace.startTrace("myTestFunc", 2);  // 第二个跟踪任务开始，同时第一个同名跟踪任务还没结束，出现了并行执行，对应接口的taskId需要不同
// 业务流程...... 
bytrace.finishTrace("myTestFunc", 1);
// 业务流程...... 
bytrace.finishTrace("myTestFunc", 2);


// 跟踪串行执行的同名任务
bytrace.startTrace("myTestFunc", 1);
// 业务流程...... 
bytrace.finishTrace("myTestFunc", 1);  // 第一个跟踪任务结束
// 业务流程...... 
bytrace.startTrace("myTestFunc", 1);   // 第二个跟踪任务开始，同名跟踪任务串行执行
// 业务流程...... 
bytrace.finishTrace("myTestFunc", 1);

```

