---
last_update:
  date: 2026-07-04
---

# createAtManager

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## createAtManager

```TypeScript
function createAtManager(): AtManager
```

Obtains the AtManager instance.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Security.AccessToken

**Return value:**

| Type | Description |
| --- | --- |
| AtManager | returns the instance of the AtManager. |

**Example**

```TypeScript
// Create a permission management instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();

```

