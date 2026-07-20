# search

## Modules to Import

```TypeScript
import { request } from '@kit.BasicServicesKit';
```

## search

```TypeScript
function search(callback: AsyncCallback<Array<string>>): void
```

Searches for task IDs based on [Filter](arkts-basicservices-agent-filter-i.md). The IDs of all tasks from the invoking time to 24 hours ago are searched. This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-agent-function search(callback: AsyncCallback<Array<string>>): void--><!--Device-agent-function search(callback: AsyncCallback<Array<string>>): void-End-->

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<Array<string>> | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the task ID. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter type.<br> 2. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |


## search

```TypeScript
function search(filter: Filter, callback: AsyncCallback<Array<string>>): void
```

Searches for task IDs based on [Filter](arkts-basicservices-agent-filter-i.md). This API uses an asynchronous callback to return the result.

**Since:** 10

<!--Device-agent-function search(filter: Filter, callback: AsyncCallback<Array<string>>): void--><!--Device-agent-function search(filter: Filter, callback: AsyncCallback<Array<string>>): void-End-->

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [Filter](arkts-basicservices-agent-filter-i.md) | Yes | Filter criteria. |
| callback | [AsyncCallback](arkts-basicservices-base-asynccallback-i.md)<Array<string>> | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined** and **data** is the task ID. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter type.<br> 2. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |


## search

```TypeScript
function search(filter?: Filter): Promise<Array<string>>
```

Searches for task IDs based on [Filter](arkts-basicservices-agent-filter-i.md). This API uses a promise to return the result.

**Since:** 10

<!--Device-agent-function search(filter?: Filter): Promise<Array<string>>--><!--Device-agent-function search(filter?: Filter): Promise<Array<string>>-End-->

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [Filter](arkts-basicservices-agent-filter-i.md) | No | Filter criteria. The default value is empty. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<string>> | Promise used to return the task IDs that meet the filter criteria. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter type.<br> 2. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |

