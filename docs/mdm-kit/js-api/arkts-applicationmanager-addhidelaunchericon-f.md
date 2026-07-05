# addHideLauncherIcon

## addHideLauncherIcon

```TypeScript
function addHideLauncherIcon(admin: Want, bundleNames: Array<string>): void
```

添加隐藏桌面应用图标名单。 > **说明：** > > 1、本接口仅支持隐藏当前用户的桌面应用图标，不支持隐藏应用卡片。 > > 2、如果被隐藏的应用有应用分身，会同步隐藏应用分身。 > > 3、不能把桌面所有应用都添加到隐藏名单中，否则所有应用都会显示到桌面上。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleNames | Array&lt;string> | Yes | 应用包名数组，指定需要隐藏的应用，最大支持500个。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

