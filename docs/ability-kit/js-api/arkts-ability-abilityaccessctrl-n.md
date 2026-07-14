# abilityAccessCtrl

**Since:** 8

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAtManager](arkts-ability-createatmanager-f.md#createatmanager-1) | Creates a program access control management instance for scenarios such as permission verification, runtime permission request, settings page authorization guidance, and permission status change monitoring. After the call is successful, an AtManager instance is returned, which can be used for subsequent permission management operations. |

### Interfaces

| Name | Description |
| --- | --- |
| [AtManager](arkts-ability-atmanager-i.md) | Program access control management class, providing capabilities such as permission verification, runtime permission dialog box request, settings page authorization guidance, global switch request, and permission status monitoring. Obtain an instance through [createAtManager](arkts-ability-createatmanager-f.md#createatmanager-1). |
| [PermissionStateChangeInfo](arkts-ability-permissionstatechangeinfo-i.md) | Represents the permission state change details. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AtManager](arkts-ability-atmanager-i-sys.md) | Program access control management class, providing capabilities such as permission verification, runtime permission dialog box request, settings page authorization guidance, global switch request, and permission status monitoring. Obtain an instance through [createAtManager](arkts-ability-createatmanager-f.md#createatmanager-1). |
| [PermissionStatusInfo](arkts-ability-permissionstatusinfo-i-sys.md) | Indicates the permission status. |
| [CliInfo](arkts-ability-cliinfo-i-sys.md) | Represents CLI (Command Line Interface) information. |
| [PermissionDialogDetail](arkts-ability-permissiondialogdetail-i-sys.md) | Represents the permission dialog information of a single command. |
| [PermissionDialogResult](arkts-ability-permissiondialogresult-i-sys.md) | Represents the permission dialog query result. |
| [CliPermissionDetail](arkts-ability-clipermissiondetail-i-sys.md) | Represents the status information of a single CLI permission declared by a CLI command. |
| [CliCommandPermissionResult](arkts-ability-clicommandpermissionresult-i-sys.md) | Represents the permission information of a single CLI command. |
| [CliPermissionsResult](arkts-ability-clipermissionsresult-i-sys.md) | Represents the CLI permission query result. |
| [CliAuthInfo](arkts-ability-cliauthinfo-i-sys.md) | Represents CLI authorization information. |
| [ToolAuthResult](arkts-ability-toolauthresult-i-sys.md) | Represents the tool authorization result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [GrantStatus](arkts-ability-grantstatus-e.md) | Enumerates the permission grant states. |
| [SelectedResult](arkts-ability-selectedresult-e.md) | Enumerates the results of the dialog box for redirection to the settings page. |
| [PermissionStateChangeType](arkts-ability-permissionstatechangetype-e.md) | Enumerates the operations that trigger permission state changes. |
| [PermissionStatus](arkts-ability-permissionstatus-e.md) | Enumerates the permission states. |
| [SwitchType](arkts-ability-switchtype-e.md) | Enumerates the global switch types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PermissionRequestToggleStatus](arkts-ability-permissionrequesttogglestatus-e-sys.md) | Enumerates the permission toggle states. |
| [PermissionDecisionStatus](arkts-ability-permissiondecisionstatus-e-sys.md) | Enumerates the permission decision statuses. |
<!--DelEnd-->

