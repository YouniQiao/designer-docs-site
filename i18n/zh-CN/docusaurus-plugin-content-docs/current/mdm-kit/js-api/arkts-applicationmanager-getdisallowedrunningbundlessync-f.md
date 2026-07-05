# getDisallowedRunningBundlesSync

## getDisallowedRunningBundlesSync

```TypeScript
function getDisallowedRunningBundlesSync(admin: Want, accountId?: number): Array<string>
```

获取当前/指定用户下的应用运行禁止名单。

**起始版本：** 12

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

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
| Array&lt;string> | 返回当前/指定用户下的应用运行禁止名单。 说明： API version 20及之前版本，返回值为应用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)列表。从API version 21版本开始，返回值为应用  [appId](docroot://quick-start/common-problem-of-application.md#什么是appid)或  [appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

