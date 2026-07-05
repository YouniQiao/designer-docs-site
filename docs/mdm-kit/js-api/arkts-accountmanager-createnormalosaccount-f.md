# createNormalOsAccount

## createNormalOsAccount

```TypeScript
function createNormalOsAccount(admin: Want, name: string): Promise<osAccount.OsAccountInfo>
```

添加普通系统账号

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。 |
| name | string | Yes | 系统账号名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;osAccount.OsAccountInfo> | Returns the information about the added OS account. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201003 | Failed to add an OS account. |
| 9201040 | The number of accounts reaches the upper limit. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

