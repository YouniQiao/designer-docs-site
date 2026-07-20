# CliCommandPermissionResult (System API)

Represents the permission information of a single CLI command.

**Since:** 26.0.0

<!--Device-abilityAccessCtrl-interface CliCommandPermissionResult--><!--Device-abilityAccessCtrl-interface CliCommandPermissionResult-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@kit.AbilityKit';
```

## requiredCliPermissions

```TypeScript
requiredCliPermissions: Array<CliPermissionDetail>
```

List of CLI permission information that the current CLI command depends on.

**Type:** Array<CliPermissionDetail>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-CliCommandPermissionResult-requiredCliPermissions: Array<CliPermissionDetail>--><!--Device-CliCommandPermissionResult-requiredCliPermissions: Array<CliPermissionDetail>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

