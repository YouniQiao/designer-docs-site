---
last_update:
  date: 2026-07-04
---

# PermissionDialogDetail (System API)

Permission dialog information for a command.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## authResult

```TypeScript
authResult: string
```

Authorization result.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## needPermissionDialog

```TypeScript
needPermissionDialog: boolean
```

Indicates whether the current CLI requires a permission dialog.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionNameList

```TypeScript
permissionNameList: Array<Permissions>
```

List of permissions that are not granted and do not allow permission dialogs.

**Type:** Array<Permissions>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## statusList

```TypeScript
statusList: Array<PermissionDecisionStatus>
```

Permission decision status list. Each element corresponds to the permission at the same index.

**Type:** Array<PermissionDecisionStatus>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

