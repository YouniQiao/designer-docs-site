# grantToolPermissionsByUser

## grantToolPermissionsByUser

```TypeScript
export function grantToolPermissionsByUser(userAuthResult: UserAuthResult[]): Promise<TicketInfo[]>
```

根据用户授权结果授予工具权限。 该功能根据用户的授权决定授予工具（CLI命令或API）的权限。 授权成功后，会生成工单，用于权限验证。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS

**系统能力：** SystemCapability.Security.Asset

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userAuthResult | UserAuthResult[] | 是 | 用户授权结果列表 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;TicketInfo[]> | Promise用于返回${TicketInfo[]}。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denial.  The interface caller does not have permission "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS". |
| 202 | The caller is not a system application. |
| 24010000 | Invalid parameter. PermissionName exceeds 256 characters,  permissionStatus is invalid, etc. |
| 24010001 | Service is abnormal. possible cause: IPC failed. |
| 24010002 | Common internal error. possible cause: dependent service unavailable,  resource access failure, etc. |
| 24010003 | The account is not logged in, network is unavailable, timeout, etc. |
| 24010004 | Invalid permission. A permission in permissionInfo does not exist. |
| 24010005 | Grant permission failed. The application specified by the tokenID is not  allowed to be granted with the specified permission, the specified permission cannot be granted by user, etc. |

