# getAllowedKioskApps

## getAllowedKioskApps

```TypeScript
function getAllowedKioskApps(admin: Want): Array<string>
```

获取允许在Kiosk模式下运行的应用。

**起始版本：** 20

**需要权限：** 

 ohos.permission.ENTERPRISE_SET_KIOSK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | 允许在Kiosk模式下运行的应用[唯一标识符]./bundleManager/BundleInfo:SignatureInfo清单。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.The application does not have the permission  required to call the API |

