# revokePermission

## revokePermission

```TypeScript
function revokePermission(tokenID: int): Promise<void>
```

Revoke all persistence permissions for the application.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.REVOKE_FILE_ACCESS_PERSIST

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
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900020 | Invalid tokenID |

## revokePermission

```TypeScript
function revokePermission(tokenID: int, policies: Array<PolicyInfo>): Promise<void>
```

Revoke persistence permissions for the URI.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.REVOKE_FILE_ACCESS_PERSIST

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | Token ID of the application. |
| policies | Array&lt;PolicyInfo> | Yes | Policy information to revoke permission on URIs. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually the result returned by VerifyAccessToken. |
| 202 | The caller is not a system application. |
| 401 | Parameter error.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types; 3.Invalid policy size. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory |
| 13900020 | Invalid tokenID |

