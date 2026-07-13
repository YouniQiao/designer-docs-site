# CliAuthInfo (System API)

Represents CLI authorization information.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@kit.AbilityKit';
```

## authorizationResults

```TypeScript
authorizationResults: Array<boolean>
```

List of authorization results, and the array length must be equal to permissionNames.length. The value **true**
indicates that the authorization is successful and the CLI command can obtain the corresponding permission. The
value **false** indicates that the authorization is denied and the CLI command cannot obtain the corresponding
permission.

**Type:** Array<boolean>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## cliInfo

```TypeScript
cliInfo: CliInfo
```

CLI information corresponding to the authorization information.

**Type:** CliInfo

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

## permissionNames

```TypeScript
permissionNames: Array<Permissions>
```

List of permission names. Each element cannot be empty and its length cannot exceed 256 characters.

**Type:** Array<Permissions>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

