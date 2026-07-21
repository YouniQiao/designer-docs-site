# updateCryptPasswd (System API)

## Modules to Import

```TypeScript
import { encryptedVolumeManager } from '@kit.CoreFileKit';
```

<a id="updatecryptpasswd"></a>
## updateCryptPasswd

```TypeScript
function updateCryptPasswd(volumeId: string, passWord: string, newPassWord: string): Promise<void>
```

Updating the Password of an Encrypted Volume Device.

**Since:** 24

**Required permissions:** ohos.permission.ENCRYPT_VOLUME_MANAGER

**Model restriction:** This API can be used only in the stage model.

<!--Device-encryptedVolumeManager-function updateCryptPasswd(volumeId: string, passWord: string, newPassWord: string): Promise<void>--><!--Device-encryptedVolumeManager-function updateCryptPasswd(volumeId: string, passWord: string, newPassWord: string): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Volume

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeId | string | Yes | The id of the volume |
| passWord | string | Yes | Encrypt the password of the volume device |
| newPassWord | string | Yes | Encrypt the new password of the volume device |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | return Promise |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| 13600001 | IPC error. |
| 13600002 | Not supported filesystem. |
| 13600005 | Incorrect volume state. |
| 13600008 | No such object. |
| 13600010 | Invalid params |
| 13600019 | Check the password length and ensure it includes at least two of the following: uppercase letters, lowercase letters, numbers, and special characters. |
| 13600021 | Volume is not encrypted. |
| 13600022 | Incorrect password. |

