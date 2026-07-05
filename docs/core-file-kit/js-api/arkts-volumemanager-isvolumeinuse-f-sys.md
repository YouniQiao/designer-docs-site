# isVolumeInUse

## isVolumeInUse

```TypeScript
function isVolumeInUse(volumePath: string): Promise<boolean>
```

Query whether the specified volume is currently in use. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MOUNT_UNMOUNT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumePath | string | Yes | Volume Path. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise used to return whether the specified volume is currently in use. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600010 | The input parameter is invalid. |
| 13600033 | Failed to query whether the specified volume is currently in use. |

