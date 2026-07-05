# getOsAccountSubProfileManager (System API)

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## getOsAccountSubProfileManager

```TypeScript
function getOsAccountSubProfileManager(): OsAccountSubProfileManager
```

Obtains an OS account sub-profile manager instance.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| OsAccountSubProfileManager | Instance object of the OS account sub-profile manager. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. |

**Example**

```TypeScript
let subProfileManager: osAccount.OsAccountSubProfileManager = osAccount.getOsAccountSubProfileManager();

```

