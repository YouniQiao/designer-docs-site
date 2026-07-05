# deleteGroup

## deleteGroup

```TypeScript
function deleteGroup(gid: string): Promise<void>
```

移除指定分组，后续不能再往该分组中添加任务id。使用Promise异步回调。 当分组中的所有任务处于完成、失败或移除状态，并且分组被移除时，显示该分组的完成或失败通知。

**Since:** 15

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| gid | string | Yes | 目标分组id。与创建的任务分组ID保持一致，即使用  [request.agent.createGroup]request.agent.createGroup(config: GroupConfig)  接口成功创建任务分组时的返回值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400003 | Task service ability error. |
| 21900008 | Group deleted or not found. |

