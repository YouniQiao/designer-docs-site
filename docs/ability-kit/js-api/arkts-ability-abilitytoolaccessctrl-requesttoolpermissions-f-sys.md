# requestToolPermissions (System API)

## requestToolPermissions

```TypeScript
export function requestToolPermissions(permissionQuery: PermissionQuery): Promise<PermissionQueryResult>
```

Queries tool permissions based on the specified operations.This function checks the permission status for CLI commands or APIs specified in permissionQuery.operationInfo.For each operation, it returns the permission status, authorization status, and whether a user dialog is required.When needTicket is set to true, a ticket will be generated for remote authorization.

**Since:** 26.0.0

**Required permissions:** ohos.permission.QUERY_TOOL_PERMISSIONS

<!--Device-abilityToolAccessCtrl-export function requestToolPermissions(permissionQuery: PermissionQuery): Promise<PermissionQueryResult>--><!--Device-abilityToolAccessCtrl-export function requestToolPermissions(permissionQuery: PermissionQuery): Promise<PermissionQueryResult>-End-->

**System capability:** SystemCapability.Security.Asset

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionQuery | [PermissionQuery](arkts-ability-abilitytoolaccessctrl-permissionquery-i-sys.md) | Yes | Permission query information. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PermissionQueryResult> | Promise used to return ${PermissionQueryResult}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denial.The interface caller does not have permission "ohos.permission.QUERY_TOOL_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The caller is not a system application. |
| 24010000 | Invalid parameter. OperationType and operationInfo do not match,specified callerTokenId does not exist, ticketExpireTime exceeds 24h, etc. |
| 24010001 | Service is abnormal. possible cause: IPC failed. |
| 24010002 | Common internal error. possible cause: dependent service unavailable,resource access failure, etc. |
| 24010003 | The account is not logged in, network is unavailable, timeout, etc. |
| 24010006 | The requested operation is not allowed to be executed while the device is locked. |

