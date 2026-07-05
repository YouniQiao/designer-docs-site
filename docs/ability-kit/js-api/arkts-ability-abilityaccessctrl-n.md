# abilityAccessCtrl

**Since:** 12

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAtManager](arkts-ability-createatmanager-f.md#createatmanager-1) | Obtains the AtManager instance. |

### Interfaces

| Name | Description |
| --- | --- |
| [AtManager](arkts-ability-atmanager-i.md) | Provides methods for managing access_token. |
| [PermissionStateChangeInfo](arkts-ability-permissionstatechangeinfo-i.md) | Indicates the information of permission state change. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AtManager](arkts-ability-atmanager-i-sys.md) | Provides methods for managing access_token. |
| [PermissionStatusInfo](arkts-ability-permissionstatusinfo-i-sys.md) | Permission status information. |
| [CliInfo](arkts-ability-cliinfo-i-sys.md) | CLI information. |
| [PermissionDialogDetail](arkts-ability-permissiondialogdetail-i-sys.md) | Permission dialog information for a command. |
| [PermissionDialogResult](arkts-ability-permissiondialogresult-i-sys.md) | Result of querying whether a permission dialog is required. |
| [CliPermissionDetail](arkts-ability-clipermissiondetail-i-sys.md) | Detailed information about the required permission for a CLI. |
| [CliCommandPermissionResult](arkts-ability-clicommandpermissionresult-i-sys.md) | Permission information for a CLI command. |
| [CliPermissionsResult](arkts-ability-clipermissionsresult-i-sys.md) | CLI permission query result. |
| [CliAuthInfo](arkts-ability-cliauthinfo-i-sys.md) | CLI authorization result information. |
| [ToolAuthResult](arkts-ability-toolauthresult-i-sys.md) | Authorization result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [GrantStatus](arkts-ability-grantstatus-e.md) | GrantStatus. |
| [PermissionStateChangeType](arkts-ability-permissionstatechangetype-e.md) | Enum for permission state change type. |
| [PermissionStatus](arkts-ability-permissionstatus-e.md) | PermissionStatus. |
| [SwitchType](arkts-ability-switchtype-e.md) | SwitchType. |
| [SelectedResult](arkts-ability-selectedresult-e.md) | SelectedResult. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PermissionRequestToggleStatus](arkts-ability-permissionrequesttogglestatus-e-sys.md) | Enum for permission request toggle status. |
| [PermissionDecisionStatus](arkts-ability-permissiondecisionstatus-e-sys.md) | Permission decision status. |
<!--DelEnd-->

