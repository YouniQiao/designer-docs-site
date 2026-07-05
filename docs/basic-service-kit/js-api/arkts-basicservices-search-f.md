# search

## Modules to Import

```TypeScript
import { request } from '@ohos.request';
```

## search

```TypeScript
function search(callback: AsyncCallback<Array<string>>): void
```

Searches for task IDs based on [Filter](arkts-basicservices-filter-i.md#filter). The IDs of all tasks from the invoking time to 24 hours ago are searched. This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the task ID. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter type.<br> 2. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |


## search

```TypeScript
function search(filter: Filter, callback: AsyncCallback<Array<string>>): void
```

Searches for task IDs based on [Filter](arkts-basicservices-filter-i.md#filter). This API uses an asynchronous callback to return the result.

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Filter | Yes | Filter criteria. |
| callback | AsyncCallback&lt;Array&lt;string&gt;&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined** and **data** is the task ID. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter type.<br> 2. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |


## search

```TypeScript
function search(filter?: Filter): Promise<Array<string>>
```

Searches for task IDs based on [Filter](arkts-basicservices-filter-i.md#filter). This API uses a promise to return the result.

**Since:** 10

**System capability:** SystemCapability.Request.FileTransferAgent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | Filter | No | Filter criteria. The default value is empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | Promise used to return the task IDs that meet the filter criteria. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Incorrect parameter type.<br> 2. Parameter verification failed. |
| [13400003](../../apis-basic-services-kit/errorcode-request.md#13400003-service-error) | Task service ability error. |

