# getReceiveSmsPolicyNumbers

## getReceiveSmsPolicyNumbers

```TypeScript
function getReceiveSmsPolicyNumbers(admin: Want | null, policy: adminManager.Policy): Array<string>
```

查询接收短信允许或禁用名单

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | 企业设备管理扩展组件 |
| policy | adminManager.Policy | Yes | 允许或禁用名单策略。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | phone numbers in the trust/block list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | The parameter validation failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

