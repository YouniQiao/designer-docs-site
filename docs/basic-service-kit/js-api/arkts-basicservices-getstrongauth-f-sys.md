# getStrongAuth (System API)

## Modules to Import

```TypeScript
import { screenLock } from '@ohos.screenLock';
```

## getStrongAuth

```TypeScript
function getStrongAuth(userId: number): number
```

Obtain strong authentication reason flags for os account local userId.

**Since:** 12

**Required permissions:** ohos.permission.ACCESS_SCREEN_LOCK

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | Os account local userId. |

**Return value:**

| Type | Description |
| --- | --- |
| number | the strong authentication reason flags. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | permission verification failed. A non-system application calls a system API. |
| [13200002](../../apis-basic-services-kit/errorcode-screenlock.md#13200002-screen-lock-management-service-is-abnormal) | the screenlock management service is abnormal. |

