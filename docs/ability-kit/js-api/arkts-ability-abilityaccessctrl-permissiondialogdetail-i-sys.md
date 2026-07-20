# PermissionDialogDetail (System API)

Represents the permission dialog information of a single command.

**Since:** 26.0.0

<!--Device-abilityAccessCtrl-interface PermissionDialogDetail--><!--Device-abilityAccessCtrl-interface PermissionDialogDetail-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@kit.AbilityKit';
```

## authResult

```TypeScript
authResult: string
```

Authorization result string.

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PermissionDialogDetail-authResult: string--><!--Device-PermissionDialogDetail-authResult: string-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## needPermissionDialog

```TypeScript
needPermissionDialog: boolean
```

Whether the current CLI command requires a permission dialog. The value **true** indicates that a permission dialog is required, and **false** indicates that no permission dialog is required.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PermissionDialogDetail-needPermissionDialog: boolean--><!--Device-PermissionDialogDetail-needPermissionDialog: boolean-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionNameList

```TypeScript
permissionNameList: Array<Permissions>
```

List of permission names that the agent initiating CLI-related operations currently does not satisfy. If the related permissions are not satisfied, the CLI cannot be started, or the started CLI process cannot obtain the corresponding permissions.

**Type:** Array<Permissions>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PermissionDialogDetail-permissionNameList: Array<Permissions>--><!--Device-PermissionDialogDetail-permissionNameList: Array<Permissions>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## statusList

```TypeScript
statusList: Array<PermissionDecisionStatus>
```

List of permission decision statuses.

**Type:** Array<PermissionDecisionStatus>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PermissionDialogDetail-statusList: Array<PermissionDecisionStatus>--><!--Device-PermissionDialogDetail-statusList: Array<PermissionDecisionStatus>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

