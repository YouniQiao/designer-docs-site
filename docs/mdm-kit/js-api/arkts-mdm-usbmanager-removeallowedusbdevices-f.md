# removeAllowedUsbDevices

## Modules to Import

```TypeScript
import { usbManager } from '@kit.MDMKit';
```

## removeAllowedUsbDevices

```TypeScript
function removeAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void
```

Removes allowed USB devices.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_USB

**Model restriction:** This API can be used only in the stage model.

<!--Device-usbManager-function removeAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void--><!--Device-usbManager-function removeAllowedUsbDevices(admin: Want, usbDeviceIds: Array<UsbDeviceId>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| usbDeviceIds | Array&lt;UsbDeviceId&gt; | Yes | USB device IDs, which can be obtained through [getDevices](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-usbmanager-getdevices-f.md#getdevices). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
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
  usbManager.removeAllowedUsbDevices(wantTemp, usbDeviceIds);
  console.info(`Succeeded in removing allowed USB devices.`);
} catch (err) {
  console.error(`Failed to remove allowed USB devices. Code: ${err.code}, message: ${err.message}`);
}

```

