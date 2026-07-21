# getAuthorizationManager (System API)

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

<a id="getauthorizationmanager"></a>
## getAuthorizationManager

```TypeScript
function getAuthorizationManager(): AuthorizationManager
```

Obtains this OS account authorization manager.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-osAccount-function getAuthorizationManager(): AuthorizationManager--><!--Device-osAccount-function getAuthorizationManager(): AuthorizationManager-End-->

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [AuthorizationManager](arkts-basicservices-osaccount-authorizationmanager-i-sys.md) | Instance object of the OS account authorization manager. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |

**Example**

```TypeScript
let authorizationManager: osAccount.AuthorizationManager = osAccount.getAuthorizationManager();

```

