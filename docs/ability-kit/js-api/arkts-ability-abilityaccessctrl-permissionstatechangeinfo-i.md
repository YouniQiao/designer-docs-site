# PermissionStateChangeInfo

Represents the permission state change details.

**Since:** 18

<!--Device-abilityAccessCtrl-interface PermissionStateChangeInfo--><!--Device-abilityAccessCtrl-interface PermissionStateChangeInfo-End-->

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@kit.AbilityKit';
```

## change

```TypeScript
change: PermissionStateChangeType
```

Operation that triggers the permission state change.

**Type:** PermissionStateChangeType

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-PermissionStateChangeInfo-change: PermissionStateChangeType--><!--Device-PermissionStateChangeInfo-change: PermissionStateChangeType-End-->

**System capability:** SystemCapability.Security.AccessToken

## permissionName

```TypeScript
permissionName: Permissions
```

Permissions whose authorization state changes. For details about the permissions, see [Application Permissions](docroot://security/AccessToken/app-permissions.md).

**Type:** Permissions

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-PermissionStateChangeInfo-permissionName: Permissions--><!--Device-PermissionStateChangeInfo-permissionName: Permissions-End-->

**System capability:** SystemCapability.Security.AccessToken

## tokenID

```TypeScript
tokenID: number
```

ID of the subscribed application, which can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. <br>For BundleInfo acquisition, please refer to:[bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1).

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-PermissionStateChangeInfo-tokenID: int--><!--Device-PermissionStateChangeInfo-tokenID: int-End-->

**System capability:** SystemCapability.Security.AccessToken

