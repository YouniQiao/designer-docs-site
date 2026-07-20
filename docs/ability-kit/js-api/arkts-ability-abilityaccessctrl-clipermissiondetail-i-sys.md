# CliPermissionDetail (System API)

Represents the status information of a single CLI permission declared by a CLI command.

**Since:** 26.0.0

<!--Device-abilityAccessCtrl-interface CliPermissionDetail--><!--Device-abilityAccessCtrl-interface CliPermissionDetail-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@kit.AbilityKit';
```

## cliPermissionStatus

```TypeScript
cliPermissionStatus: PermissionDecisionStatus
```

Decision status of the CLI permission declared by the CLI command.

**Type:** PermissionDecisionStatus

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-CliPermissionDetail-cliPermissionStatus: PermissionDecisionStatus--><!--Device-CliPermissionDetail-cliPermissionStatus: PermissionDecisionStatus-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## requiredCliPermission

```TypeScript
requiredCliPermission: Permissions
```

CLI permission required to call the CLI.

**Type:** Permissions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-CliPermissionDetail-requiredCliPermission: Permissions--><!--Device-CliPermissionDetail-requiredCliPermission: Permissions-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## usedPermissions

```TypeScript
usedPermissions: Array<Permissions>
```

List of runtime permissions mapped from requiredCliPermission.

**Type:** Array<Permissions>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-CliPermissionDetail-usedPermissions: Array<Permissions>--><!--Device-CliPermissionDetail-usedPermissions: Array<Permissions>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

