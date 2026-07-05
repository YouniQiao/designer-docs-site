# getDisallowedInstallBundlesSync

## getDisallowedInstallBundlesSync

```TypeScript
function getDisallowedInstallBundlesSync(admin: Want, accountId?: number): Array<string>
```

获取当前/指定用户下的应用程序包安装禁止名单。

**起始版本：** 12

**需要权限：** 

 ohos.permission.ENTERPRISE_SET_BUNDLE_INSTALL_POLICY

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| accountId | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | 返回当前用户下的应用程序包安装禁止名单。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

