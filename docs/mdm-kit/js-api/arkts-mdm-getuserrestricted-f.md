# getUserRestricted

## Modules to Import

```TypeScript
import { restrictions } from '@ohos.enterprise.restrictions';
```

## getUserRestricted

```TypeScript
function getUserRestricted(admin: Want, settingsItem: string): boolean
```

Obtains the disabled status of a setting item.

**Since:** 20

**Deprecated since:** 26.0.0

**Substitutes:** getUserRestricted(admin:

**Required permissions:** ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| settingsItem | string | Yes | Setting item.<br>- **setEthernetIp**: Ethernet IP address configuration, currentlysupported only on PCs/2-in-1 devices.<br>- **setDeviceName**: device name configuration, currently supportedonly on PCs/2-in-1 devices, smartphones, and tablets. When it is disabled, the device name cannot be modifiedin the following settings: **About**, **Bluetooth**, and **More connectivity options** &gt; **NearLink** on PCs/2-in-1 devices, and **About**, **Bluetooth**, and **Personal hotspot** on smartphones and tablets.<br>-**setBiometricsAndScreenLock**: screen lock password configuration, currently supported only on PCs/2-in-1devices, smartphones, and tablets. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Disabled status of the specified setting item. The value **true** means the item is disabled;the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

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
  // Replace input parameters with actual values.
  let result: boolean = restrictions.getUserRestricted(wantTemp, 'setEthernetIp');
  console.info('Succeeded in getting user restricted');
} catch (err) {
  console.error(`Failed to get user restricted. Code is ${err.code}, message is ${err.message}`);
}

```


## getUserRestricted

```TypeScript
function getUserRestricted(admin: Want, settingsItem: SettingsForDevice): boolean
```

Gets whether users are restricted from changing specified settings items on the device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_SET_USER_RESTRICTION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | admin indicates the administrator ability information. |
| settingsItem | SettingsForDevice | Yes | settingsItem indicates the specific settings item to be disallowed. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true if restrict the specific settings item of device, otherwise false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

