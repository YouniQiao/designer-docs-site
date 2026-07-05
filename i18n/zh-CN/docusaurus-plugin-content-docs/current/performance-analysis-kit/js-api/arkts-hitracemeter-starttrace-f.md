# startTrace

## startTrace

```TypeScript
function startTrace(name: string, taskId: int): void
```

Starts an asynchronous trace. If multiple trace tasks with the same name need to be performed at the same time or a trace needs to be performed multiple times concurrently, different task IDs must be specified in **startTrace**. If the trace tasks with the same name are not performed at the same time, the same taskId can be used. For a specific example, see [finishTrace()]hiTraceMeter.finishTrace. Since API version 19, you are advised to use [startAsyncTrace()]hiTraceMeter.startAsyncTrace, which must be used together with [finishAsyncTrace()]hiTraceMeter.finishAsyncTrace. In this way, you can specify the trace output level and category.

**起始版本：** 8

**原子化服务API：** 从API version 19开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiTrace

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Name of the trace to start. The maximum length of a trace record is 512 bytes. The  excess part will be truncated. It is recommended that the length of this parameter be less than or equal to 420  bytes. |
| taskId | int | 是 | Task ID. It is used to distinguish multiple tasks with the same name. Ensure that the  task IDs of concurrently executed tasks with the same name are unique. |

**示例：**

```TypeScript
hiTraceMeter.startTrace("myTestFunc", 1);

```

