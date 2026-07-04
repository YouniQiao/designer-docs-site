# setSwitchStatus

## Modules to Import

```TypeScript
import { deviceSettings } from '@ohos.enterprise.deviceSettings';
```

## setSwitchStatus

```TypeScript
function setSwitchStatus(admin: Want, key: SwitchKey, status: SwitchStatus): void
```

Sets the state of a switch. This API can enable or disable NearLink, Bluetooth, and Wi-Fi. After the setting is applied, users can manually enable or disable them. If a switch has been disabled through the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API, error code 203 will be thrown when you attempt to set the state of the switch through this API. In this case, you need to use the [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API to enable the switch.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SETTINGS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| key | SwitchKey | Yes | Switch name. An application that has obtained theohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and has been[activated as the built-in device administrator application](arkts-mdm-startadminprovision-f.md#startadminprovision-1)can use this API to set the following switches: NearLink, Bluetooth, and Wi-Fi. |
| status | SwitchStatus | Yes | Switch state. An application that has obtained theohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and has been[activated as the built-in device administrator application](arkts-mdm-startadminprovision-f.md#startadminprovision-1)can use this API to set the switch state to ON or OFF. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| 9201042 | Failed to toggle the switch state. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

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
  let key: deviceSettings.SwitchKey = deviceSettings.SwitchKey.BLUETOOTH;
  let status: deviceSettings.SwitchStatus  = deviceSettings.SwitchStatus.ON;
  deviceSettings.setSwitchStatus(wantTemp, key, status);
  console.info(`Succeeded in setting switch status.`);
} catch (err) {
  console.error(`Failed to set switch status. Code: ${err.code}, message: ${err.message}`);
}

```

