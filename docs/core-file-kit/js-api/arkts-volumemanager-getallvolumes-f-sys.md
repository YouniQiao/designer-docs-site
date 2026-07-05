# getAllVolumes

## getAllVolumes

```TypeScript
function getAllVolumes(callback: AsyncCallback<Array<Volume>>): void
```

获取当前外置存储中所有卷设备信息，使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;Volume>> | Yes | 获取当前所有可获得的卷设备信息之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:Mandatory  parameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

## getAllVolumes

```TypeScript
function getAllVolumes(): Promise<Array<Volume>>
```

获取当前外置存储中所有卷设备信息，使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;Volume>> | Promise对象，返回当前所有可获得的卷设备信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:Mandatory  parameters are left unspecified; |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

