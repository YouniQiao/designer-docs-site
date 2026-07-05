# addSendSmsPolicyNumbers

## addSendSmsPolicyNumbers

```TypeScript
function addSendSmsPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void
```

添加发送短信的允许或禁用名单

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件 |
| policy | adminManager.Policy | Yes | 允许或禁用名单策略。 |
| numbers | Array&lt;string> | Yes | 通话号码列表，当前仅支持全号码匹配。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9200012 | The parameter validation failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

