# setUsbStorageDeviceAccessPolicy

## Modules to Import

```TypeScript
import { usbManager } from '@kit.MDMKit';
```

## setUsbStorageDeviceAccessPolicy

```TypeScript
function setUsbStorageDeviceAccessPolicy(admin: Want, usbPolicy: UsbPolicy): void
```

Sets the access policy of the USB storage device.

> **NOTE**  
> > Before calling the API, read and write operations on the USB storage device should be suspended to ensure  
> operational stability and data integrity. Otherwise, unexpected exceptions may occur.

A policy conflict occurs when you set the USB storage device access policy to read, write, or read-only in the following scenarios:

1. The USB capability of the device has been disabled using the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API.2. The USB storage device has been disallowed to use through [addDisallowedUsbDevices](arkts-mdm-usbmanager-adddisallowedusbdevices-f.md#adddisallowedusbdevices-1).3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount](arkts-mdm-restrictions-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount-1) API.

A policy conflict is reported if the USB storage device access policy is disabled by calling this API in the following scenarios:

1. The USB capability of the device has been disabled using the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy-1) API.2. The available USB devices have been added through [addAllowedUsbDevices](arkts-mdm-usbmanager-addallowedusbdevices-f.md#addallowedusbdevices-1).3. USB storage write access has been disabled for specific users via the [setDisallowedPolicyForAccount](arkts-mdm-restrictions-setdisallowedpolicyforaccount-f.md#setdisallowedpolicyforaccount-1) API.

You can disable a USB storage device by calling this API or [addDisallowedUsbDevices](arkts-mdm-usbmanager-adddisallowedusbdevices-f.md#adddisallowedusbdevices-1). The latter is recommended.

**Since:** 12

**Required permissions:** 
- API version 26.0.0+: ohos.permission.ENTERPRISE_MANAGE_USB or ohos.permission.PERSONAL_MANAGE_RESTRICTIONS
- API version 12 - 24: ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the stage model.

<!--Device-usbManager-function setUsbStorageDeviceAccessPolicy(admin: Want, usbPolicy: UsbPolicy): void--><!--Device-usbManager-function setUsbStorageDeviceAccessPolicy(admin: Want, usbPolicy: UsbPolicy): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| usbPolicy | [UsbPolicy](arkts-mdm-usbmanager-usbpolicy-e.md) | Yes | Access policy of the USB storage device. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200007](../errorcode-enterpriseDeviceManager.md#9200007-system-ability-error) | The system ability works abnormally. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { usbManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  let policy: usbManager.UsbPolicy = usbManager.UsbPolicy.DISABLED;
  usbManager.setUsbStorageDeviceAccessPolicy(wantTemp, policy);
  console.info(`Succeeded in setting USB storage device access policy.`);
} catch (err) {
  console.error(`Failed to set USB storage device access policy. Code: ${err.code}, message: ${err.message}`);
}

```

