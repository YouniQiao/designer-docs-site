# getDistributedAccountAbility

## Modules to Import

```TypeScript
import { distributedAccount } from '@ohos.account.distributedAccount';
```

## getDistributedAccountAbility

```TypeScript
function getDistributedAccountAbility(): DistributedAccountAbility
```

Obtains a **DistributedAccountAbility** instance.

**Since:** 7

**System capability:** SystemCapability.Account.OsAccount

**Return value:**

| Type | Description |
| --- | --- |
| DistributedAccountAbility | **DistributedAccountAbility** instance obtained.This instance provides APIs for querying and updating the login state of a distributed account. |

**Example**

```TypeScript
// Obtain a DistributedAccountAbility instance.
const accountAbility: distributedAccount.DistributedAccountAbility = distributedAccount.getDistributedAccountAbility();

```

