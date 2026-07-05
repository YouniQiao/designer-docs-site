# partition

## partition

```TypeScript
function partition(diskId: string, type: int, callback: AsyncCallback<void>): void
```

对磁盘进行分区，使用callback异步回调。当前仅支持将磁盘设备重新分区为一个分区，系统是支持读取多分区的磁盘设备。 不支持对光盘进行分区。

**Since:** 9

**Required permissions:** 

 ohos.permission.MOUNT_FORMAT_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| diskId | string | Yes | 卷设备所属的磁盘id。 |
| type | int | Yes | 分区类型。 |
| callback | AsyncCallback&lt;void> | Yes | 对磁盘设备进行分区。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

## partition

```TypeScript
function partition(diskId: string, type: int): Promise<void>
```

对磁盘设备进行分区，使用Promise异步回调。当前仅支持将磁盘设备重新分区为一个分区，系统是支持读取多分区的磁盘设备。 不支持对光盘进行分区。

**Since:** 9

**Required permissions:** 

 ohos.permission.MOUNT_FORMAT_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| diskId | string | Yes | 卷设备所属的磁盘设备id。 |
| type | int | Yes | 分区类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

