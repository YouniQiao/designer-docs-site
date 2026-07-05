# getValueForAccount

## getValueForAccount

```TypeScript
function getValueForAccount(admin: Want, item: SettingsItem, accountId: number): string
```

获取指定用户的设备设置策略。该接口可以获取指定用户在设置应用中的某个参数，比如获取用户100的设备名称等。

**Since:** 24

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SETTINGS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| item | SettingsItem | Yes | 设备设置策略类型。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0。 accountId可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:  AsyncCallback)  等接口来获取  取值范围为全体整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | Policy type value.  When item is set to [SettingsItem.DEVICE_NAME]deviceSettings.SettingsItem, this API returns the  device name of the current user. If the device name of another user is queried, error code 9200012 is returned.  When item is set to [SettingsItem.FLOATING_NAVIGATION]deviceSettings.SettingsItem,  this API returns the three-key navigation switch state for the specified user.  When item is set to [SettingsItem.FLOATING_NAVIGATION]deviceSettings.SettingsItem,  this API can be called properly on phones and tablets but returns error code 801 on other devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
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

try {
  // Replace with actual values.
  let accountId = 100;
  let result: string = deviceSettings.getValueForAccount(wantTemp, deviceSettings.SettingsItem.DEVICE_NAME, accountId);
  console.info(`Succeeded in getting device name, result : ${result}`);
} catch (err) {
  console.error(`Failed to get device name. Code: ${err.code}, message: ${err.message}`);
}

```

