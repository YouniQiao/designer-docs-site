# getAllDisks

## getAllDisks

```TypeScript
function getAllDisks(): Promise<Array<Disk>>
```

Querying Information About All Disks.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MOUNT_UNMOUNT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Disk>> | return Promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |

