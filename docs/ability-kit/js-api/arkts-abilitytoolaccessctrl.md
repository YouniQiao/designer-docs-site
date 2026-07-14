# @ohos.abilityToolAccessCtrl

The namespace of abilityToolAccessCtrl

**Since:** 26.0.0

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [grantToolPermissionsByUser](arkts-ability-granttoolpermissionsbyuser-f-sys.md#granttoolpermissionsbyuser-1) | Grants tool permissions based on user authorization results. This function grants permissions for tools (CLI commands or APIs) according to the user's authorization decisions. After successful authorization, tickets are generated which can be used for permission verification. |
| [requestToolPermissions](arkts-ability-requesttoolpermissions-f-sys.md#requesttoolpermissions-1) | Queries tool permissions based on the specified operations. This function checks the permission status for CLI commands or APIs specified in permissionQuery.operationInfo. For each operation, it returns the permission status, authorization status, and whether a user dialog is required. When needTicket is set to true, a ticket will be generated for remote authorization. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AuthStatusInfo](arkts-ability-authstatusinfo-i-sys.md) | Authorization status information. |
| [CliCmdInfo](arkts-ability-clicmdinfo-i-sys.md) | CLI command information. |
| [OperationInfo](arkts-ability-operationinfo-i-sys.md) | Operation information. |
| [PermissionInfo](arkts-ability-permissioninfo-i-sys.md) | Permission information. |
| [PermissionQuery](arkts-ability-permissionquery-i-sys.md) | Permission query information. |
| [PermissionQueryResult](arkts-ability-permissionqueryresult-i-sys.md) | Permission query result. |
| [TicketInfo](arkts-ability-ticketinfo-i-sys.md) | Ticket information. |
| [UserAuthResult](arkts-ability-userauthresult-i-sys.md) | User authorization result. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [AuthStatus](arkts-ability-authstatus-e-sys.md) | Authorization status. |
| [OperationType](arkts-ability-operationtype-e-sys.md) | Operation type. |
<!--DelEnd-->

