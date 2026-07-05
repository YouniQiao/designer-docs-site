# createIsoImage

## createIsoImage

```TypeScript
function createIsoImage(volumeId: string, filePath: string): Promise<void>
```

Creates an ISO image from a volume. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MOUNT_UNMOUNT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeId | string | Yes | Volume ID. |
| filePath | string | Yes | File path for the ISO image. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600002 | Not supported filesystem. |
| 13600005 | Incorrect volume state. |
| 13600010 | The input parameter is invalid. |
| 13600024 | Empty disc. |
| 13600025 | Failed to write the ISO file. |

