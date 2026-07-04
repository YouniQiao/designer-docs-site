# CliPermissionDetail (System API)

Detailed information about the required permission for a CLI.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## cliPermissionStatus

```TypeScript
cliPermissionStatus: PermissionDecisionStatus
```

Permission decision status of requiredCliPermission.

**Type:** PermissionDecisionStatus

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## requiredCliPermission

```TypeScript
requiredCliPermission: Permissions
```

Permission required for calling the CLI.

**Type:** Permissions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## usedPermissions

```TypeScript
usedPermissions: Array<Permissions>
```

Runtime permission list mapped from requiredCliPermission.

**Type:** Array<Permissions>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

