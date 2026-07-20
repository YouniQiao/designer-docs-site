# @ohos.abilityToolAccessCtrl

The namespace of abilityToolAccessCtrl

**Since:** 26.0.0

<!--Device-unnamed-declare namespace abilityToolAccessCtrl--><!--Device-unnamed-declare namespace abilityToolAccessCtrl-End-->

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [grantToolPermissionsByUser](arkts-ability-abilitytoolaccessctrl-granttoolpermissionsbyuser-f-sys.md#granttoolpermissionsbyuser-1) | Grants tool permissions based on user authorization results.This function grants permissions for tools (CLI commands or APIs) according to the user's authorization decisions.After successful authorization, tickets are generated which can be used for permission verification. |
| [requestToolPermissions](arkts-ability-abilitytoolaccessctrl-requesttoolpermissions-f-sys.md#requesttoolpermissions-1) | Queries tool permissions based on the specified operations.This function checks the permission status for CLI commands or APIs specified in permissionQuery.operationInfo.For each operation, it returns the permission status, authorization status, and whether a user dialog is required.When needTicket is set to true, a ticket will be generated for remote authorization. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AuthStatusInfo](arkts-ability-abilitytoolaccessctrl-authstatusinfo-i-sys.md) | Authorization status information. |
| [CliCmdInfo](arkts-ability-abilitytoolaccessctrl-clicmdinfo-i-sys.md) | CLI command information. |
| [OperationInfo](arkts-ability-abilitytoolaccessctrl-operationinfo-i-sys.md) | Operation information. |
| [PermissionInfo](arkts-ability-abilitytoolaccessctrl-permissioninfo-i-sys.md) | Permission information. |
| [PermissionQuery](arkts-ability-abilitytoolaccessctrl-permissionquery-i-sys.md) | Permission query information. |
| [PermissionQueryResult](arkts-ability-abilitytoolaccessctrl-permissionqueryresult-i-sys.md) | Permission query result. |
| [TicketInfo](arkts-ability-abilitytoolaccessctrl-ticketinfo-i-sys.md) | Ticket information. |
| [UserAuthResult](arkts-ability-abilitytoolaccessctrl-userauthresult-i-sys.md) | User authorization result. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AuthStatus](arkts-ability-abilitytoolaccessctrl-authstatus-e-sys.md) | Authorization status. |
| [OperationType](arkts-ability-abilitytoolaccessctrl-operationtype-e-sys.md) | Operation type. |
<!--DelEnd-->

