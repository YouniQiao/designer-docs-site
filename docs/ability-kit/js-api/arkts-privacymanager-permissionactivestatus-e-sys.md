# PermissionActiveStatus

```TypeScript
enum PermissionActiveStatus
```

表示权限使用状态变化类型的枚举。用于描述权限使用[on)]privacyManager.on）的回调中返回，帮助应用感知权限从未使用到前台使用、后台使用的状态切换。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## PERM_INACTIVE

```TypeScript
PERM_INACTIVE = 0
```

表示未使用权限。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## PERM_ACTIVE_IN_FOREGROUND

```TypeScript
PERM_ACTIVE_IN_FOREGROUND = 1
```

表示前台使用权限。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## PERM_ACTIVE_IN_BACKGROUND

```TypeScript
PERM_ACTIVE_IN_BACKGROUND = 2
```

表示后台使用权限。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

