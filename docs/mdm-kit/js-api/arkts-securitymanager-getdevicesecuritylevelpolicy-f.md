# getDeviceSecurityLevelPolicy

## getDeviceSecurityLevelPolicy

```TypeScript
function getDeviceSecurityLevelPolicy(admin: Want): DeviceSecurityLevelPolicy
```

查询DSL切换策略

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件 |

**Return value:**

| Type | Description |
| --- | --- |
| DeviceSecurityLevelPolicy | 返回DSL切换策略 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

