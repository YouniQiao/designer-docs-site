# getSharedDirectoryInfo

## getSharedDirectoryInfo

```TypeScript
function getSharedDirectoryInfo(): Promise<Array<SharedDirectoryInfo>>
```

Gets the shared sandbox directories of applications

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_SHARED_FILE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;SharedDirectoryInfo>> | Returns the shared sandbox directories on paths. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory. |

