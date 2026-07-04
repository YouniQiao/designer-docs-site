---
last_update:
  date: 2026-07-04
---

# setPermissionUsedRecordToggleStatus (System API)

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## setPermissionUsedRecordToggleStatus

```TypeScript
function setPermissionUsedRecordToggleStatus(status: boolean): Promise<void>
```

Sets the toggle state of permission access records for the current user.

**Since:** 18

**Required permissions:** ohos.permission.PERMISSION_RECORD_TOGGLE

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| status | boolean | Yes | The toggle status to be set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_RECORD_TOGGLE". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. Possible causes: 1. A database error occurs;2. Failed to query applications under the user. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Set permission usage record switch status
privacyManager.setPermissionUsedRecordToggleStatus(true).then(() => {
  console.info('setPermissionUsedRecordToggleStatus success');
}).catch((err: BusinessError): void => {
  console.error(`setPermissionUsedRecordToggleStatus fail, code: ${err.code}, message: ${err.message}`);
});

```

