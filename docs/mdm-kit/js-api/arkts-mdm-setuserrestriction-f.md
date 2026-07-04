# setUserRestriction

## Modules to Import

```TypeScript
import { restrictions } from '@ohos.enterprise.restrictions';
```

## setUserRestriction

```TypeScript
function setUserRestriction(admin: Want, settingsItem: string, restricted: boolean): void
```

Sets restrictions on user behaviors.

**Since:** 20

**Deprecated since:** 26.0.0

**Substitutes:** setUserRestriction(admin:

**Required permissions:** ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| settingsItem | string | Yes | User behavior.<br>- **setApn**: APN configuration, currently supported only onsmartphones and tablets.<br>- **powerLongPress**: capability to open the power menu by long-pressing the powerbutton. Currently, only smartphones and tablets are supported.<br>- **setEthernetIp**: Ethernet IP addressconfiguration, currently supported only on PCs/2-in-1 devices.<br>- **setDeviceName**: device nameconfiguration, currently supported only on PCs/2-in-1 devices, smartphones, and tablets. When it is disabled,the device name cannot be modified in the following settings: **About**, **Bluetooth**, and**More connectivity options** &gt; **NearLink** on PCs/2-in-1 devices, and **About**, **Bluetooth**, and**Personal hotspot** on smartphones and tablets.<br>- **setBiometricsAndScreenLock**: screen lock passwordconfiguration, currently supported only on PCs/2-in-1 devices, smartphones, and tablets. |
| restricted | boolean | Yes | Whether to disable the action. The value **true** means to disable the action, and**false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permissionrequired to call the API. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { restrictions } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  restrictions.setUserRestriction(wantTemp, 'setApn', true);
  console.info('Succeeded in restricting from setting apn');
} catch (err) {
  console.error(`Failed to restrict from setting apn. Code is ${err.code}, message is ${err.message}`);
}

```


## setUserRestriction

```TypeScript
function setUserRestriction(admin: Want, settingsItem: SettingsForDevice, restricted: boolean): void
```

Restricting users from changing specified settings item on the device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | admin indicates the administrator ability information. |
| settingsItem | SettingsForDevice | Yes | settingsItem indicates the specific settings item to be disallowed. |
| restricted | boolean | Yes | true if restrict the specific settings item of device, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

