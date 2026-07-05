# PermissionDecisionStatus

```TypeScript
export enum PermissionDecisionStatus
```

权限决策状态枚举。

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NEED_PERMISSION_DIALOG

```TypeScript
NEED_PERMISSION_DIALOG = 0
```

表示需要弹出权限对话框。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_DENIED

```TypeScript
NO_DIALOG_DENIED = 1
```

表示无需弹窗，权限已被用户拒绝。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_RESTRICTED

```TypeScript
NO_DIALOG_RESTRICTED = 2
```

表示无需弹窗，权限受系统或策略限制。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_GRANTED

```TypeScript
NO_DIALOG_GRANTED = 3
```

表示无需弹窗，权限已授予。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_NOT_DECLARED

```TypeScript
NO_DIALOG_NOT_DECLARED = 4
```

表示无需弹窗，但权限未声明。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## NO_DIALOG_CLI_PERMISSION_RESOLVED

```TypeScript
NO_DIALOG_CLI_PERMISSION_RESOLVED = 5
```

表示无需弹窗，CLI权限已完成运行时权限解析。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

