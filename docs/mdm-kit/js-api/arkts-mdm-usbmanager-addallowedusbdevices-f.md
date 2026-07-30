# addAllowedUsbDevices

## Modules to Import

```TypeScript
import { usbManager } from '@kit.MDMKit';
```

## addAllowedUsbDevices

```TypeScript
function addAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void
```

Adds allowed USB devices.

A policy conflict is reported when this API is called in the following scenarios:

1. The USB capability of the device or the USB-to-Serial capability has been disabled using the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy) API.2. The USB storage device access policy has been disabled using the [setUsbStorageDeviceAccessPolicy](arkts-mdm-usbmanager-setusbstoragedeviceaccesspolicy-f.md#setusbstoragedeviceaccesspolicy) API.3. Disallowed USB device types have been added using the [addDisallowedUsbDevices](arkts-mdm-usbmanager-adddisallowedusbdevices-f.md#adddisallowedusbdevices) API.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the stage model.

<!--Device-usbManager-function addAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void--><!--Device-usbManager-function addAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| usbDeviceIds | Array&lt;UsbDeviceId&gt; | Yes | USB device IDs, which can be obtained through [getDevices](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-usbmanager-getdevices-f.md#getdevices). The maximum number of USB devices is 1,000. If there are already 300 USB device IDs, only 700 more can be added. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200007](../errorcode-enterpriseDeviceManager.md#9200007-system-ability-error) | The system ability works abnormally. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
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
  let usbDeviceIds: Array<usbManager.UsbDeviceId> = [{
      vendorId: 1,
      productId: 1
  }];
  usbManager.addAllowedUsbDevices(wantTemp, usbDeviceIds);
  console.info(`Succeeded in adding allowed USB devices.`);
} catch (err) {
  console.error(`Failed to add allowed USB devices. Code: ${err.code}, message: ${err.message}`);
}

```

