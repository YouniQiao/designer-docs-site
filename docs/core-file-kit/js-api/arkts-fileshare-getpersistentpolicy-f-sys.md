# getPersistentPolicy

## getPersistentPolicy

```TypeScript
function getPersistentPolicy(tokenID: int): Promise<Array<PolicyInfo>>
```

Get all persistence permissions for the application.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_FILE_ACCESS_PERSIST

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | Token ID of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PolicyInfo>> | Returns all persistence policy information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory |
| 13900020 | Invalid tokenID |

