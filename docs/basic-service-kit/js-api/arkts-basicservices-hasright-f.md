# hasRight

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## hasRight

```TypeScript
function hasRight(deviceName: string): boolean
```

Checks whether the application has the permission to access the device.
Checks whether the user, for example, the application or system, has the device access permissions. The value **
true** is returned if the user has the device access permissions; the value **false** is returned otherwise.

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceName | string | Yes | Device name, which is name of USBDevice, obtained from the device list returned by [usbManager.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the application has the permission to access the device; returns **false**otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

**Example**

```TypeScript
function hasRight(): boolean {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return false;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let right: boolean = usbManager.hasRight(device.name);
  console.info(`${right}`);
  return right;
}

```

