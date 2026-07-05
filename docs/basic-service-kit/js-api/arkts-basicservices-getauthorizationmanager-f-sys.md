# getAuthorizationManager (System API)

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## getAuthorizationManager

```TypeScript
function getAuthorizationManager(): AuthorizationManager
```

Obtains this OS account authorization manager.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| AuthorizationManager | Instance object of the OS account authorization manager. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |

**Example**

```TypeScript
let authorizationManager: osAccount.AuthorizationManager = osAccount.getAuthorizationManager();

```

