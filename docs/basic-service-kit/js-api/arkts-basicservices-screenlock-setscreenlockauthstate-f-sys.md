# setScreenLockAuthState (System API)

## Modules to Import

```TypeScript
import { screenLock } from '@kit.BasicServicesKit';
```

<a id="setscreenlockauthstate"></a>
## setScreenLockAuthState

```TypeScript
function setScreenLockAuthState(state: AuthState, userId: number, authToken: Uint8Array): Promise<boolean>
```

Set the screen lock authentication state for os account local userId.

**Since:** 12

**Required permissions:** ohos.permission.ACCESS_SCREEN_LOCK_INNER

<!--Device-screenLock-function setScreenLockAuthState(state: AuthState, userId: int, authToken: Uint8Array): Promise<boolean>--><!--Device-screenLock-function setScreenLockAuthState(state: AuthState, userId: int, authToken: Uint8Array): Promise<boolean>-End-->

**System capability:** SystemCapability.MiscServices.ScreenLock

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [AuthState](arkts-basicservices-screenlock-authstate-e-sys.md) | Yes | the screen lock authentication state. |
| userId | number | Yes | Os account local userId. |
| authToken | Uint8Array | Yes | the authentication token for this state |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | permission verification failed, application which is not a system application uses system API. |
| [13200002](../../apis-basic-services-kit/errorcode-screenlock.md#13200002-screen-lock-management-service-is-abnormal) | the screenlock management service is abnormal. |

