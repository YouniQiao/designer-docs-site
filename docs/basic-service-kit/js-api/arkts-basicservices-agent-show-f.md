# show

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## show

```TypeScript
function show(id: string, callback: AsyncCallback<TaskInfo>): void
```

Queries the task details based on the task ID. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-agent-function show(id: string, callback: AsyncCallback<TaskInfo>): void--><!--Device-agent-function show(id: string, callback: AsyncCallback<TaskInfo>): void-End-->

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Task ID. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<TaskInfo> | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined** and **data** is the **TaskInfo** object obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |
| [21900006](../../apis-basic-services-kit/errorcode-request.md#21900006-task-not-found) | Task removed or not found. |


## show

```TypeScript
function show(id: string): Promise<TaskInfo>
```

Queries the task details based on the task ID. This API uses a promise to return the result.

**Since:** 10

<!--Device-agent-function show(id: string): Promise<TaskInfo>--><!--Device-agent-function show(id: string): Promise<TaskInfo>-End-->

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Task ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<TaskInfo> | Promise used to return the **TaskInfo** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Missing mandatory parameters.<br> 2. Incorrect parameter type. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |
| [21900006](../../apis-basic-services-kit/errorcode-request.md#21900006-task-not-found) | Task removed or not found. |

