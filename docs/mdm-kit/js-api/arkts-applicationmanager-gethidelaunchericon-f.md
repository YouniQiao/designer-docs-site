# getHideLauncherIcon

## getHideLauncherIcon

```TypeScript
function getHideLauncherIcon(admin: Want | null): Array<string>
```

查询当前用户下隐藏桌面应用图标名单。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 当设备有多个MDM应用时，传入admin  查询对应admin设置的策略。传入null时查询整机实际生效的策略。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回当前用户下的隐藏桌面应用图标名单。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

