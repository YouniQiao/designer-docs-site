# getAccountManager

## Modules to Import

```TypeScript
import { osAccount } from '@ohos.account.osAccount';
```

## getAccountManager

```TypeScript
function getAccountManager(): AccountManager
```

Obtains an **AccountManager** instance.

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| AccountManager | **AccountManager** instance obtained. |

**Example**

```TypeScript
let accountManager: osAccount.AccountManager = osAccount.getAccountManager();

```

