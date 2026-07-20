# mount (System API)

## Modules to Import

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
```

## mount

```TypeScript
function mount(volumeId: string, callback: AsyncCallback<void>): void
```

Mounts a volume. This API uses an asynchronous callback to return the result. Currently, only the FAT, exFAT, ext4and NTFS file systems are supported.

**Since:** 9

**Required permissions:** ohos.permission.MOUNT_UNMOUNT_MANAGER

<!--Device-volumeManager-function mount(volumeId: string, callback: AsyncCallback<void>): void--><!--Device-volumeManager-function mount(volumeId: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeId | string | Yes | Volume ID. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when the specified volume is mounted. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600002 | Not supported filesystem. |
| 13600003 | Failed to mount. |
| 13600005 | Incorrect volume state. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |


## mount

```TypeScript
function mount(volumeId: string): Promise<void>
```

Mounts a volume. This API uses a promise to return the result. Currently, only the FAT, exFAT, ext4 and NTFS file systems are supported.

**Since:** 9

**Required permissions:** ohos.permission.MOUNT_UNMOUNT_MANAGER

<!--Device-volumeManager-function mount(volumeId: string): Promise<void>--><!--Device-volumeManager-function mount(volumeId: string): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeId | string | Yes | Volume ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;<br>2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600002 | Not supported filesystem. |
| 13600003 | Failed to mount. |
| 13600005 | Incorrect volume state. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

