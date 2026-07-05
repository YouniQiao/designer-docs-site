# removeOsAccount

## removeOsAccount

```TypeScript
function removeOsAccount(admin: Want, accountId: number): Promise<void>
```

移除系统账号

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。 |
| accountId | number | Yes | 系统账号ID。  取值应为≥101的整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | promise回调 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9200016 | Service timeout. |
| 9201041 | Restricted account. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 204 | Access denied due to user access control policy. Possible causes:  1. The operation is restricted by the OS-account constraint.  2. The required privilege for the operation has not been granted. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

