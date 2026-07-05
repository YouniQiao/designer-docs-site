# encrypt

## encrypt

```TypeScript
function encrypt(volumeId: string, passWord: string): Promise<void>
```

Encrypt.

**Since:** 24

**Required permissions:** 

 ohos.permission.ENCRYPT_VOLUME_MANAGER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeId | string | Yes | The id of the volume |
| passWord | string | Yes | Encrypt the password of the volume device |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | return Promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600002 | Not supported filesystem. |
| 13600005 | Incorrect volume state. |
| 13600008 | No such object. |
| 13600010 | Invalid params |
| 13600019 | Check the password length and ensure it includes at least two of  the following:uppercase letters, lowercase letters, numbers, and special characters. |

