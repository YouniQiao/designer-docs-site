# requestToolPermissions

## requestToolPermissions

```TypeScript
export function requestToolPermissions(permissionQuery: PermissionQuery): Promise<PermissionQueryResult>
```

根据指定的操作查询工具权限。 该函数用于检查权限查询中指定的CLI命令或API的权限状态。 对于每个操作，它返回权限状态、授权状态以及是否需要用户对话框。 当needTicket设置为true时，远程授权会生成一个票据。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.QUERY_TOOL_PERMISSIONS

**系统能力：** SystemCapability.Security.Asset

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| permissionQuery | PermissionQuery | 是 | 权限查询信息 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PermissionQueryResult> | Promise用于返回${PermissionQueryResult}。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denial.  The interface caller does not have permission "ohos.permission.QUERY_TOOL_PERMISSIONS". |
| 202 | The caller is not a system application. |
| 24010000 | Invalid parameter. OperationType and operationInfo do not match,  specified callerTokenId does not exist, ticketExpireTime exceeds 24h, etc. |
| 24010001 | Service is abnormal. possible cause: IPC failed. |
| 24010002 | Common internal error. possible cause: dependent service unavailable,  resource access failure, etc. |
| 24010003 | The account is not logged in, network is unavailable, timeout, etc. |
| 24010006 | The requested operation is not allowed to be executed  while the device is locked. |

