# unregisterRemoteAuthCallback (System API)

## Modules to Import

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## unregisterRemoteAuthCallback

```TypeScript
function unregisterRemoteAuthCallback(): void
```

Unregisters the callback for remote authentication.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_USER_AUTH_INTERNAL

**Model restriction:** This API can be used only in the stage model.

<!--Device-userAuth-function unregisterRemoteAuthCallback(): void--><!--Device-userAuth-function unregisterRemoteAuthCallback(): void-End-->

**System capability:** SystemCapability.UserIAM.UserAuth.Core

**System API:** This is a system API.

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied. Called by non-system application. |
| [12500002](../errorcode-useriam.md#12500002-common-error-code-of-the-identity-authentication-system) | General operation error. |

