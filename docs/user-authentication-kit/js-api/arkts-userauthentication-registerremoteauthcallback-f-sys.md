# registerRemoteAuthCallback (System API)

## Modules to Import

```TypeScript
import { userAuth } from '@ohos.userIAM.userAuth';
```

## registerRemoteAuthCallback

```TypeScript
function registerRemoteAuthCallback(callback: IRemoteAuthCallback): void
```

Registers the callback for remote authentication.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_USER_AUTH_INTERNAL

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | IRemoteAuthCallback | Yes | Callback used to get remote authentication WidgetParam and return theresult |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Called by non-system application. |
| [12500002](../errorcode-useriam.md#12500002-common-error-code-of-the-identity-authentication-system) | General operation error. |

