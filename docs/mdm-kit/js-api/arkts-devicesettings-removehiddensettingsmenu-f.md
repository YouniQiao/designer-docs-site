# removeHiddenSettingsMenu

## removeHiddenSettingsMenu

```TypeScript
function removeHiddenSettingsMenu(admin: Want, menusToHidden: Array<SettingsMenu>): void
```

将设置项从当前用户下的隐藏设置项列表中移除。隐藏设置项列表中的设置项在当前用户的设置菜单中会被隐藏，隐藏后不可以在设置的搜索中搜索到，如果通过某种方式搜索到该设置项，点击后也无法打开。若移除后剩余的隐藏设置项列表为空，则设置项会全 部显示。调用接口后即刻生效，无需重启设置应用。

**Since:** 24

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SETTINGS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| menusToHidden | Array&lt;SettingsMenu> | Yes | 隐藏的设置项列表  最大长度为43且不能为空。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9200016 | Service timeout. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { deviceSettings } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

let menusToHidden: Array<deviceSettings.SettingsMenu> = [
  // Replace or add items as needed.
  deviceSettings.SettingsMenu.ACCOUNT_ID,
  deviceSettings.SettingsMenu.WIFI,
]

try {
  deviceSettings.removeHiddenSettingsMenu(wantTemp, menusToHidden);
  console.info('Succeeded in removing hidden settings menu.');
} catch (err) {
  console.error(`Failed to remove hidden settings menu. Code: ${err.code}, message: ${err.message}`);
}

```

