---
last_update:
  date: 2026-07-04
---

# getPermissionUsedRecordToggleStatus (System API)

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## getPermissionUsedRecordToggleStatus

```TypeScript
function getPermissionUsedRecordToggleStatus(): Promise<boolean>
```

Obtains the toggle state of permission access records of the current user.

**Since:** 18

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Return the toggle status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Query permission usage record switch status
privacyManager.getPermissionUsedRecordToggleStatus().then((status) => {
  console.info('getPermissionUsedRecordToggleStatus success');
  if (status == true) {
    console.info('get status is TRUE');
  } else {
    console.info('get status is FALSE');
  }
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedRecordToggleStatus fail, code: ${err.code}, message: ${err.message}`);
});

```

