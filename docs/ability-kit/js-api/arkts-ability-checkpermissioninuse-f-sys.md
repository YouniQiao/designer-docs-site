---
last_update:
  date: 2026-07-04
---

# checkPermissionInUse (System API)

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## checkPermissionInUse

```TypeScript
function checkPermissionInUse(permissionName: Permissions): boolean
```

Checks whether the specified permission is in use.

**Since:** 26.0.0

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | Permissions | Yes | Name of the permission to be queried. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the permission is in use; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionName is empty or exceeds 256 characters. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Query whether a specified permission is being used
  let isPermissionInUse = privacyManager.checkPermissionInUse('ohos.permission.CAMERA');
  console.info('checkPermissionInUse success, result: ' + isPermissionInUse);
} catch (err) {
  let error = err as BusinessError;
  console.error(`checkPermissionInUse fail, code: ${error.code}, message: ${error.message}`);
}

```

