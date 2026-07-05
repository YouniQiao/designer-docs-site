# CliPermissionDetail

表示CLI指令声明的单个CLI权限的状态信息。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context,Permissions,PermissionRequestResult } from '@kit.AbilityKit';
```

## cliPermissionStatus

```TypeScript
cliPermissionStatus: PermissionDecisionStatus
```

CLI指令声明的CLI权限的决策状态。

**Type:** PermissionDecisionStatus

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## usedPermissions

```TypeScript
usedPermissions: Array<Permissions>
```

由requiredCliPermission映射出的运行时权限列表。

**Type:** Array<Permissions>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## requiredCliPermission

```TypeScript
requiredCliPermission: Permissions
```

调用CLI所需的CLI权限。

**Type:** Permissions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

