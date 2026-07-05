# getDeviceSecurityLevelPolicy

## getDeviceSecurityLevelPolicy

```TypeScript
function getDeviceSecurityLevelPolicy(admin: Want): DeviceSecurityLevelPolicy
```

查询DSL切换策略

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DeviceSecurityLevelPolicy | 返回DSL切换策略 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

