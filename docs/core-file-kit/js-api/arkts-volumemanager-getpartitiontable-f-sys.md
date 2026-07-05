# getPartitionTable

## getPartitionTable

```TypeScript
function getPartitionTable(diskId: string): Promise<PartitionTableInfo>
```

Obtains partition table information based on the disk ID. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MOUNT_FORMAT_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| diskId | string | Yes | Disk ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PartitionTableInfo> | Promise used to return the partition table information of the  current disk ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600008 | No such object. |
| 13600010 | The input parameter is invalid. |
| 13600021 | Get partition table failed. |

