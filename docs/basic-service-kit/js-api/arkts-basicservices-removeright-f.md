# removeRight

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## removeRight

```TypeScript
function removeRight(deviceName: string): boolean
```

Removes the device access permission for the application. System applications are granted the device access permission by default, and calling this API will not revoke the permission.

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceName | string | Yes | Device name, which is name of USBDevice, obtained from the device list returned by [usbManager.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Permission removal result. The value **true** indicates that the access permission is removedsuccessfully; and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 |

**Example**

```TypeScript
function removeRight(): boolean {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return false;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  if (usbManager.removeRight(device.name)) {
    console.info(`Succeed in removing right`);
    return true;
  }
  return false;
}

```

