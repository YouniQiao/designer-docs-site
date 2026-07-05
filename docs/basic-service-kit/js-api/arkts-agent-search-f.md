# search

## search

```TypeScript
function search(callback: AsyncCallback<Array<string>>): void
```

根据默认[Filter]request.agent.Filter过滤条件查找任务id，即查询调用 时刻至24小时前的所有任务的任务id。使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数。当根据过滤条件查找任务成功，err为undefined，data为满足条件的任务id；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter type.  2. Parameter verification failed. |
| 13400003 | Task service ability error. |

## search

```TypeScript
function search(filter: Filter, callback: AsyncCallback<Array<string>>): void
```

根据[Filter]request.agent.Filter过滤条件查找任务id。使用 callback异步回调。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Filter | Yes | 过滤条件。 |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数。当根据过滤条件查找任务成功，err为undefined，data为满足条件的任务id；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter type.  2. Parameter verification failed. |
| 13400003 | Task service ability error. |

## search

```TypeScript
function search(filter?: Filter): Promise<Array<string>>
```

根据[Filter]request.agent.Filter过滤条件查找任务id。使用 Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Filter | No | 过滤条件。默认值为空。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象。返回满足条件任务id的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Incorrect parameter type.  2. Parameter verification failed. |
| 13400003 | Task service ability error. |

