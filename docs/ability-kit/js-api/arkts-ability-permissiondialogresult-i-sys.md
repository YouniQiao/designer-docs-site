---
last_update:
  date: 2026-07-04
---

# PermissionDialogResult (System API)

Result of querying whether a permission dialog is required.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## detailList

```TypeScript
detailList: Array<PermissionDialogDetail>
```

Dialog result list. Each element corresponds to the input command at the same index.

**Type:** Array<PermissionDialogDetail>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

