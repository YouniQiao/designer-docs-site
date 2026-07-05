# PermissionStateChangeInfo

表示某次权限授权状态变化的详情。

**Since:** 18

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context,Permissions,PermissionRequestResult } from '@kit.AbilityKit';
```

## tokenID

```TypeScript
tokenID: int
```

被订阅的应用身份标识。该参数必须为大于0的整数，传入0时返回错误码12100001。 BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 获取。

**Type:** int

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

## change

```TypeScript
change: PermissionStateChangeType
```

权限授权状态变化类型。

**Type:** PermissionStateChangeType

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

## permissionName

```TypeScript
permissionName: Permissions
```

当前授权状态发生变化的权限名，合法的权限名取值可在[应用权限列表](docroot://security/AccessToken/app-permissions.md)中查询。

**Type:** Permissions

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

