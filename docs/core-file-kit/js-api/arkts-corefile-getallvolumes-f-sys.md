# getAllVolumes (System API)

## Modules to Import

```TypeScript
import { volumeManager } from '@ohos.file.volumeManager';
```

## getAllVolumes

```TypeScript
function getAllVolumes(callback: AsyncCallback<Array<Volume>>): void
```

Obtains information about all volumes of this external storage device. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Volume&gt;&gt; | Yes | Callback used to return information about all available volumes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Mandatoryparameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |


## getAllVolumes

```TypeScript
function getAllVolumes(): Promise<Array<Volume>>
```

Obtains information about all volumes of this external storage device. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Volume&gt;&gt; | Promise used to return the information about all available volume devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:Mandatoryparameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

