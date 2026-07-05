# PermissionStateChangeInfo

Indicates the information of permission state change.

**Since:** 18

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## change

```TypeScript
change: PermissionStateChangeType
```

Indicates the permission state change type.

**Type:** PermissionStateChangeType

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.AccessToken

## permissionName

```TypeScript
permissionName: Permissions
```

Indicates the permission whose state has been changed.

**Type:** Permissions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.AccessToken

## tokenID

```TypeScript
tokenID: number
```

Indicates the application whose permission state has been changed.

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.AccessToken

