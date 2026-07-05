# getVolumeByUuid

## getVolumeByUuid

```TypeScript
function getVolumeByUuid(uuid: string, callback: AsyncCallback<Volume>): void
```

通过卷设备uuid获得指定卷设备信息，使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | string | Yes | 卷设备uuid。 |
| callback | AsyncCallback&lt;Volume> | Yes | 获取卷设备信息之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

## getVolumeByUuid

```TypeScript
function getVolumeByUuid(uuid: string): Promise<Volume>
```

通过卷设备uuid获得指定卷设备信息，使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uuid | string | Yes | 卷设备uuid。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Volume> | Promise对象，返回当前uuid的卷设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

