# touch

## touch

```TypeScript
function touch(id: string, token: string, callback: AsyncCallback<TaskInfo>): void
```

根据任务id和token查询任务的详细信息。使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 任务id。 |
| token | string | Yes | 任务查询token。 |
| callback | AsyncCallback&lt;TaskInfo> | Yes | 回调函数。当查询任务操作成功，err为undefined，data为查询到的任务TaskInfo信息；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400003 | Task service ability error. |
| 21900006 | Task removed or not found. |

## touch

```TypeScript
function touch(id: string, token: string): Promise<TaskInfo>
```

根据任务id和token查询任务的详细信息。使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | 任务id。 |
| token | string | Yes | 任务查询token。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TaskInfo> | Promise对象。返回任务详细信息TaskInfo的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type.  3. Parameter verification failed. |
| 13400003 | Task service ability error. |
| 21900006 | Task removed or not found. |

