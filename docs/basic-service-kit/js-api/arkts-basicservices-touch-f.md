# touch

## Modules to Import

```TypeScript
import { request } from '@ohos.request';
```

## touch

```TypeScript
function touch(id: string, token: string, callback: AsyncCallback<TaskInfo>): void
```

Queries the task details based on the task ID and token. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Task ID. |
| token | string | Yes | Token for task query. |
| callback | AsyncCallback&lt;TaskInfo&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the **TaskInfo** object obtained. Otherwise, **err** is an errorobject. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |
| [21900006](../../apis-basic-services-kit/errorcode-request.md#21900006-task-not-found) | Task removed or not found. |


## touch

```TypeScript
function touch(id: string, token: string): Promise<TaskInfo>
```

Queries the task details based on the task ID and token. This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Task ID. |
| token | string | Yes | Token for task query. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TaskInfo&gt; | Promise used to return the **TaskInfo** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type.<br> 3. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |
| [21900006](../../apis-basic-services-kit/errorcode-request.md#21900006-task-not-found) | Task removed or not found. |

