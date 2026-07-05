# getDowngradeDownloadTaskState

## getDowngradeDownloadTaskState

```TypeScript
function getDowngradeDownloadTaskState(bundleNames: Array<string>): Promise<Array<DownloadProgress>>
```

查询接入云盘的应用的全量下载任务状态。使用Promise异步回调。 由于返回的DownloadProgress对象中不包含包名信息，因此在批量查询多个应用时，调用方需自行记录应用包名。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.CLOUDFILE_SYNC_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSyncManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleNames | Array&lt;string> | Yes | 需要查询的应用包名数组，每个元素为应用的包名字符串，包名数组大小上限为20个。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;DownloadProgress>> | - Promise对象，返回查询的全量下载任务的状态信息数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13900010 | Try again. |
| 13900020 | Invalid argument. Possible causes:  1.Mandatory parameter are left unspecified. 2.The length of the input parameter exceeds the upper limit.  3.The input parameter contains an invalid bundleName. |

