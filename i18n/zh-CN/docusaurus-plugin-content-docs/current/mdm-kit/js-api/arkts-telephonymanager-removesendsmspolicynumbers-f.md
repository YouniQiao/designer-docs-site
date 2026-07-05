# removeSendSmsPolicyNumbers

## removeSendSmsPolicyNumbers

```TypeScript
function removeSendSmsPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void
```

移除发送短信允许或禁用名单

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件 |
| policy | adminManager.Policy | 是 | 允许或禁用策略 |
| numbers | Array&lt;string> | 是 | 通话号码列表，当前仅支持全号码匹配。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | The parameter validation failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

