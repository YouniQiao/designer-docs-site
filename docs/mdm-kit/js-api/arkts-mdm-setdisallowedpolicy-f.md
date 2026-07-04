# setDisallowedPolicy

## Modules to Import

```TypeScript
import { restrictions } from '@ohos.enterprise.restrictions';
```

## setDisallowedPolicy

```TypeScript
function setDisallowedPolicy(admin: Want, feature: string, disallow: boolean): void
```

Disallows a feature.

**Since:** 12

**Deprecated since:** 26.0.0

**Substitutes:** setDisallowedPolicy(admin:

**Required permissions:** 
- API version 20+: ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS or ohos.permission.ENTERPRISE_MANAGE_NETWORK
- API version 15 - 19: ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
- API version 12 - 14: ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| feature | string | Yes | For features that can be set, see Table 1.<br> **Note**: Since API version 15,applications granted with the ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and[activated as device administrator applications](arkts-mdm-startadminprovision-f.md#startadminprovision-1)can use this API to set the following features: **bluetooth**, **hdc**, **microphone**, **usb**, **wifi**,**tethering**, and **camera**&lt;!--RP3--&gt;&lt;!--RP3End--&gt;. Since API version 26.0.0, this API can be used to set the**mtpServer** feature. |
| disallow | boolean | Yes | Whether to disallow the feature. The value **true** means to disallow the feature;the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [9200013](../errorcode-enterpriseDeviceManager.md#9200013-control-not-immediately-effective) | The enterprise management policy has been successfully set,but the function has not taken effect in real time.<br>**Applicable version:** 21 |

**Example**

```TypeScript
import { restrictions } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  restrictions.setDisallowedPolicy(wantTemp, 'printer', true);
  console.info('Succeeded in setting printer disabled');
} catch (err) {
  console.error(`Failed to set printer disabled. Code is ${err.code}, message is ${err.message}`);
}

```


## setDisallowedPolicy

```TypeScript
function setDisallowedPolicy(admin: Want, feature: FeatureForDevice, disallow: boolean): void
```

Enables or disables a specified device feature. Once disabled, the feature cannot be used.

**Since:** 24

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| feature | FeatureForDevice | Yes | Device feature to be enabled or disabled.<br> **Note**: An application thathas obtained the ohos.permission.PERSONAL_MANAGE_RESTRICTIONS permission and has been[activated as the built-in device administrator application](arkts-mdm-startadminprovision-f.md#startadminprovision-1)can use this API to set the [FeatureForDevice.WIFI_P2P](arkts-mdm-featurefordevice-e.md#featurefordevice) feature. |
| disallow | boolean | Yes | Whether to disallow the feature. The value **true** means to disallow the feature;the value **false** means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [9200013](../errorcode-enterpriseDeviceManager.md#9200013-control-not-immediately-effective) | The enterprise management policy has been successfully set,but the function has not taken effect in real time. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { restrictions } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  restrictions.setDisallowedPolicy(wantTemp, restrictions.FeatureForDevice.WIFI_P2P, true);
  console.info('Succeeded in setting Wi-Fi P2P disabled');
} catch (err) {
  console.error(`Failed to set Wi-Fi P2P disabled. Code is ${err.code}, message is ${err.message}`);
}

```

