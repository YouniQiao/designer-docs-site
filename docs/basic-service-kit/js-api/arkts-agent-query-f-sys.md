# query

## query

```TypeScript
function query(id: string, callback: AsyncCallback<TaskInfo>): void
```

Queries specified task details. Creates a group based on GroupConfig

**Since:** 10

**Required permissions:** 

 ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER

**System capability:** SystemCapability.Request.FileTransferAgent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | the task id. |
| callback | AsyncCallback&lt;TaskInfo> | Yes | callback function with a `TaskInfo` argument for informations of the  current task. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type. |
| 13400003 | Task service ability error. |
| 21900006 | Task removed or not found. |

## query

```TypeScript
function query(id: string): Promise<TaskInfo>
```

Queries specified task details.

**Since:** 10

**Required permissions:** 

 ohos.permission.DOWNLOAD_SESSION_MANAGER or ohos.permission.UPLOAD_SESSION_MANAGER

**System capability:** SystemCapability.Request.FileTransferAgent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | the task id. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TaskInfo> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | permission verification failed, application which is not a system application  uses system API. |
| 401 | Parameter error. Possible causes:  1. Missing mandatory parameters.  2. Incorrect parameter type. |
| 13400003 | Task service ability error. |
| 21900006 | Task removed or not found. |

