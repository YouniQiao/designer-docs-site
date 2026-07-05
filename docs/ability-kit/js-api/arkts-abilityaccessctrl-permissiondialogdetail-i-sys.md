# PermissionDialogDetail

表示单条命令的权限弹窗信息。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context,Permissions,PermissionRequestResult } from '@kit.AbilityKit';
```

## statusList

```TypeScript
statusList: Array<PermissionDecisionStatus>
```

权限决策状态列表。

**Type:** Array<PermissionDecisionStatus>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## authResult

```TypeScript
authResult: string
```

授权结果字符串。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionNameList

```TypeScript
permissionNameList: Array<Permissions>
```

发起CLI相关操作的智能体当前未满足的权限名称列表。若相关权限不满足，CLI将无法拉起，或拉起后的CLI进程无法获得对应权限。

**Type:** Array<Permissions>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## needPermissionDialog

```TypeScript
needPermissionDialog: boolean
```

当前CLI命令是否需要权限弹窗，true表示需要权限弹窗，false表示不需要权限弹窗。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

