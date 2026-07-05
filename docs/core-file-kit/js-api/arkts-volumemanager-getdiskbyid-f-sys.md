# getDiskById

## getDiskById

```TypeScript
function getDiskById(diskId: string): Promise<Disk>
```

Querying disk information based on the disk ID.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MOUNT_UNMOUNT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| diskId | string | Yes | The diskId of disk. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Disk> | return Promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600008 | No such object. |
| 13600010 | The input parameter is invalid. |

