# getSystemSize (System API)

## Modules to Import

```TypeScript
import { storageStatistics } from '@kit.CoreFileKit';
```

## getSystemSize

```TypeScript
function getSystemSize(callback: AsyncCallback<number>): void
```

Get the system size.

**Since:** 9

**Required permissions:** ohos.permission.STORAGE_MANAGER

<!--Device-storageStatistics-function getSystemSize(callback: AsyncCallback<long>): void--><!--Device-storageStatistics-function getSystemSize(callback: AsyncCallback<long>): void-End-->

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | callback<br>Unit: Byte. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Mandatory parameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getSystemSize((error: BusinessError, number: number) => {
  if (error) {
    console.error("getSystemSize failed with error:" + JSON.stringify(error));
  } else {
    // Do something.
    console.info("getSystemSize successfully:" + number);
  }
});

```


## getSystemSize

```TypeScript
function getSystemSize(): Promise<number>
```

Get the system size.

**Since:** 9

**Required permissions:** ohos.permission.STORAGE_MANAGER

<!--Device-storageStatistics-function getSystemSize(): Promise<long>--><!--Device-storageStatistics-function getSystemSize(): Promise<long>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | return Promise (Unit: Byte) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Mandatory parameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
storageStatistics.getSystemSize().then((number: number) => {
  console.info("getSystemSize successfully:" + number);
}).catch((err: BusinessError) => {
  console.error("getSystemSize failed with error:" + JSON.stringify(err));
});

```

