# getFreeSize (System API)

## Modules to Import

```TypeScript
import { storageStatistics } from '@kit.CoreFileKit';
```

<a id="getfreesize"></a>
## getFreeSize

```TypeScript
function getFreeSize(callback: AsyncCallback<number>): void
```

Obtains the available space (in bytes) of the built-in storage. This API uses an asynchronous callback to return the result.

**Since:** 15

**Required permissions:** 
- API version 9 - 14: ohos.permission.STORAGE_MANAGER

<!--Device-storageStatistics-function getFreeSize(callback: AsyncCallback<long>): void--><!--Device-storageStatistics-function getFreeSize(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | Callback used to return the available space of the built-in storage obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.<br>**Applicable version:** 9 - 14 |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application.<br>**Applicable version:** 9 - 14 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Mandatory parameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getFreeSize((error: BusinessError, number: number) => {
  if (error) {
    console.error("getFreeSize failed with error:" + JSON.stringify(error));
  } else {
    // Do something.
    console.info("getFreeSize successfully:" + number);
  }
});

```

