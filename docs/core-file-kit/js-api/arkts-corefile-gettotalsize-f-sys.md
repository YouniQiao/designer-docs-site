# getTotalSize (System API)

## Modules to Import

```TypeScript
import { storageStatistics } from '@ohos.file.storageStatistics';
```

## getTotalSize

```TypeScript
function getTotalSize(callback: AsyncCallback<number>): void
```

Obtains the total size (in bytes) of the built-in storage. This API uses an asynchronous callback to return the result.

**Since:** 15

**Required permissions:** 
- API version 9 - 14: ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback used to return the built-in storage space obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.<br>**Applicable version:** 9 - 14 |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application.<br>**Applicable version:** 9 - 14 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Mandatoryparameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getTotalSize((error: BusinessError, number: number) => {
  if (error) {
    console.error("getTotalSize failed with error:" + JSON.stringify(error));
  } else {
    // Do something.
    console.info("getTotalSize successfully:" + number);
  }
});

```

