# abilityAccessCtrl

**Since:** 8

<!--Device-unnamed-declare namespace abilityAccessCtrl--><!--Device-unnamed-declare namespace abilityAccessCtrl-End-->

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createAtManager](arkts-ability-abilityaccessctrl-createatmanager-f.md#createatmanager-1) | Creates a program access control management instance for scenarios such as permission verification, runtime permission request, settings page authorization guidance, and permission status change monitoring. After the call is successful, an AtManager instance is returned, which can be used for subsequent permission management operations. |

### Interfaces

| Name | Description |
| --- | --- |
| [AtManager](arkts-ability-abilityaccessctrl-atmanager-i.md) | Program access control management class, providing capabilities such as permission verification, runtime permission dialog box request, settings page authorization guidance, global switch request, and permission status monitoring. Obtain an instance through [createAtManager](arkts-ability-abilityaccessctrl-createatmanager-f.md#createatmanager-1). |
| [PermissionStateChangeInfo](arkts-ability-abilityaccessctrl-permissionstatechangeinfo-i.md) | Represents the permission state change details. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AtManager](arkts-ability-abilityaccessctrl-atmanager-i-sys.md) | Program access control management class, providing capabilities such as permission verification, runtime permission dialog box request, settings page authorization guidance, global switch request, and permission status monitoring. Obtain an instance through [createAtManager](arkts-ability-abilityaccessctrl-createatmanager-f.md#createatmanager-1). |
| [PermissionStatusInfo](arkts-ability-abilityaccessctrl-permissionstatusinfo-i-sys.md) | Indicates the permission status. |
| [CliInfo](arkts-ability-abilityaccessctrl-cliinfo-i-sys.md) | Represents CLI (Command Line Interface) information. |
| [PermissionDialogDetail](arkts-ability-abilityaccessctrl-permissiondialogdetail-i-sys.md) | Represents the permission dialog information of a single command. |
| [PermissionDialogResult](arkts-ability-abilityaccessctrl-permissiondialogresult-i-sys.md) | Represents the permission dialog query result. |
| [CliPermissionDetail](arkts-ability-abilityaccessctrl-clipermissiondetail-i-sys.md) | Represents the status information of a single CLI permission declared by a CLI command. |
| [CliCommandPermissionResult](arkts-ability-abilityaccessctrl-clicommandpermissionresult-i-sys.md) | Represents the permission information of a single CLI command. |
| [CliPermissionsResult](arkts-ability-abilityaccessctrl-clipermissionsresult-i-sys.md) | Represents the CLI permission query result. |
| [CliAuthInfo](arkts-ability-abilityaccessctrl-cliauthinfo-i-sys.md) | Represents CLI authorization information. |
| [ToolAuthResult](arkts-ability-abilityaccessctrl-toolauthresult-i-sys.md) | Represents the tool authorization result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [GrantStatus](arkts-ability-abilityaccessctrl-grantstatus-e.md) | Enumerates the permission grant states. |
| [SelectedResult](arkts-ability-abilityaccessctrl-selectedresult-e.md) | Enumerates the results of the dialog box for redirection to the settings page. |
| [PermissionStateChangeType](arkts-ability-abilityaccessctrl-permissionstatechangetype-e.md) | Enumerates the operations that trigger permission state changes. |
| [PermissionStatus](arkts-ability-abilityaccessctrl-permissionstatus-e.md) | Enumerates the permission states. |
| [SwitchType](arkts-ability-abilityaccessctrl-switchtype-e.md) | Enumerates the global switch types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PermissionRequestToggleStatus](arkts-ability-abilityaccessctrl-permissionrequesttogglestatus-e-sys.md) | Enumerates the permission toggle states. |
| [PermissionDecisionStatus](arkts-ability-abilityaccessctrl-permissiondecisionstatus-e-sys.md) | Enumerates the permission decision statuses. |
<!--DelEnd-->

