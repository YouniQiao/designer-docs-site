# CliAuthInfo (System API)

CLI authorization result information.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## authorizationResults

```TypeScript
authorizationResults: Array<boolean>
```

User authorization result list used for authorization result generation only. Each element corresponds to the permission name at the same index, and the two arrays must have the same length.

**Type:** Array<boolean>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## cliInfo

```TypeScript
cliInfo: CliInfo
```

CLI command information.

**Type:** CliInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionNames

```TypeScript
permissionNames: Array<Permissions>
```

List of permission names used to generate authorization results. Each element must not be empty and cannot exceed 256 characters.

**Type:** Array<Permissions>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

