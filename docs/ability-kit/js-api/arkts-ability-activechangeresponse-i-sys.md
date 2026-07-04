---
last_update:
  date: 2026-07-04
---

# ActiveChangeResponse (System API)

Indicates the response of permission active status.

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## activeStatus

```TypeScript
activeStatus: PermissionActiveStatus
```

The active status name

**Type:** PermissionActiveStatus

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## callingTokenId

```TypeScript
callingTokenId?: number
```

AccessTokenID which called the interface

**Type:** number

**Since:** 18

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## deviceId

```TypeScript
deviceId: string
```

The device id

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## enhancedIdentity

```TypeScript
enhancedIdentity?: string
```

Enhanced identity.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionName

```TypeScript
permissionName: Permissions
```

The permission name

**Type:** Permissions

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## tokenId

```TypeScript
tokenId: number
```

AccessTokenID

**Type:** number

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## usedType

```TypeScript
usedType?: PermissionUsedType
```

Used type of the permission accessed.

**Type:** PermissionUsedType

**Since:** 18

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

