# getTask

## getTask

```TypeScript
function getTask(context: BaseContext, id: string, token?: string): Promise<Task>
```

根据任务id查询任务。使用Promise异步回调。

**Since:** 11

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | BaseContext | Yes | 基于应用程序的上下文。 |
| id | string | Yes | 任务id。 |
| token | string | No | 任务查询token。默认值为空。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Task> | Promise对象。返回任务配置信息的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400003 | Task service ability error. |
| 21900006 | Task removed or not found. |

