# setValueForAccount

## setValueForAccount

```TypeScript
function setValueForAccount(admin: Want, item: SettingsItem, accountId: number, value: string): void
```

设置指定用户的设备设置策略。该接口可以设置指定用户在设置应用中的某个参数，比如设置用户100的设备名称等。

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
| accountId | number | Yes | 用户ID，取值范围：大于等于0。 accountId可以通过  [getOsAccountLocalId]@ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(callback:  AsyncCallback)  等接口来获取  取值范围为全体整数。   -用户ID，必须大于等于0。 您可以调用  [getOsAccountLocalId]@Ohos.account.osAccount:osAccount.AccountManager.getOsAccountLocalId(回调：  AsyncCallback获取用户ID。 |
| value | string | Yes | 策略类型值。 当item为[SettingsItem.DEVICE_NAME]{@link deviceSettings.SettingsItem时，value为设备名  称的字符串。 字符串长度范围：大于等于1，小于等于100。只允许设置当前用户的设备名称，设置其他用户的设备名称返回9200012错误码。 当item为  [SettingsItem.FLOATING_NAVIGATION]deviceSettings.SettingsItem时，value为三键导航的开关状态。 - '0'：表示开启三键导航（通过接口  [enterKioskMode](../../apis-ability-kit/arkts-apis/arkts-kioskmanager-enterkioskmode-f.md#enterKioskMode-1)进入Kiosk模式下，三键导航显示依赖底部手势开启；即三键  导航开关和底部手势开关同时开启时，三键导航才会显示。底部手势可通过接口  [applicationManager.setKioskFeatures]|

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
import { deviceSettings  from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace with actual values.
  let accountId = 100;
  let deviceName: string = "deviceName"
  deviceSettings.setValueForAccount(wantTemp, deviceSettings.SettingsItem.DEVICE_NAME, accountId, deviceName);
  console.info('Succeeded in setting device name.');
} catch (err) {
  console.error(`Failed to set device name. Code: ${err.code}, message: ${err.message}`);
}

```

