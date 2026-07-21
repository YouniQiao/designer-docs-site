# deactivateUserKey (System API)

## Modules to Import

```TypeScript
import { keyManager } from '@kit.CoreFileKit';
```

<a id="deactivateuserkey"></a>
## deactivateUserKey

```TypeScript
function deactivateUserKey(userId: number):void
```

When the screen is locked, the specified user key is uninstalled synchronously.**(Currently, this API is available only to lock screen applications.)**

**Since:** 15

**Required permissions:** ohos.permission.STORAGE_MANAGER_CRYPT

<!--Device-keyManager-function deactivateUserKey(userId: long):void--><!--Device-keyManager-function deactivateUserKey(userId: long):void-End-->

**System capability:** SystemCapability.FileManagement.StorageService.Encryption

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | User ID. This parameter specifies the user who currently logs in to the lock screen application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The input parameter is invalid. Possible causes: Mandatory parameters are left unspecified; Or input parameter has type different from the type the interface requires. |
| 13600001 | IPC error. |
| 13600008 | No such object. Possible causes: Cannot find userkey for the specified user. |
| 13600009 | User ID out of range. Possible causes: input parameter userId < 100 or userId > 10736. |

**Example**

```TypeScript
import { keyManager } from "@kit.CoreFileKit";
import { BusinessError } from '@kit.BasicServicesKit';
let userId: number = 100;
try {
  keyManager.deactivateUserKey(userId);
  console.info("deactivateUserKey success");
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("deactivateUserKey failed with error:" + JSON.stringify(error));
}

```

