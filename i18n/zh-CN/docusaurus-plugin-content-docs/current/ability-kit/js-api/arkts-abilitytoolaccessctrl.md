# @ohos.abilityToolAccessCtrl

abilityToolAccessCtrl的命名空间

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Security.Asset

**系统接口：** 此接口为系统接口。

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[grantToolPermissionsByUser](arkts-abilitytoolaccessctrl-granttoolpermissionsbyuser-f-sys.md#grantToolPermissionsByUser-1) | 根据用户授权结果授予工具权限。 该功能根据用户的授权决定授予工具（CLI命令或API）的权限。 授权成功后，会生成工单，用于权限验证。 |
| <!--DelRow-->[requestToolPermissions](arkts-abilitytoolaccessctrl-requesttoolpermissions-f-sys.md#requestToolPermissions-1) | 根据指定的操作查询工具权限。 该函数用于检查权限查询中指定的CLI命令或API的权限状态。 对于每个操作，它返回权限状态、授权状态以及是否需要用户对话框。 当needTicket设置为true时，远程授权会生成一个票据。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AuthStatusInfo](arkts-abilitytoolaccessctrl-authstatusinfo-i-sys.md) | 授权状态信息。 |
| <!--DelRow-->[CliCmdInfo](arkts-abilitytoolaccessctrl-clicmdinfo-i-sys.md) | CLI命令信息。 |
| <!--DelRow-->[OperationInfo](arkts-abilitytoolaccessctrl-operationinfo-i-sys.md) | 操作信息。 |
| <!--DelRow-->[PermissionInfo](arkts-abilitytoolaccessctrl-permissioninfo-i-sys.md) | 权限信息。 |
| <!--DelRow-->[PermissionQuery](arkts-abilitytoolaccessctrl-permissionquery-i-sys.md) | 权限查询信息。 |
| <!--DelRow-->[PermissionQueryResult](arkts-abilitytoolaccessctrl-permissionqueryresult-i-sys.md) | 权限查询结果。 |
| <!--DelRow-->[TicketInfo](arkts-abilitytoolaccessctrl-ticketinfo-i-sys.md) | 凭据信息。 |
| <!--DelRow-->[UserAuthResult](arkts-abilitytoolaccessctrl-userauthresult-i-sys.md) | 用户授权结果。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AuthStatus](arkts-abilitytoolaccessctrl-authstatus-e-sys.md) | 授权状态。 |
| <!--DelRow-->[OperationType](arkts-abilitytoolaccessctrl-operationtype-e-sys.md) | 操作类型。 |

