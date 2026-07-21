# closePipe

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

<a id="closepipe"></a>
## closePipe

```TypeScript
function closePipe(pipe: USBDevicePipe): number
```

Closes a USB device pipe.

1. Call [usbManager.getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1) to obtain the USB device list.2. Call [usbManager.requestRight](arkts-basicservices-usbmanager-requestright-f.md#requestright-1) to request the device access permission.3. Call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter.

**Since:** 9

<!--Device-usbManager-function closePipe(pipe: USBDevicePipe): int--><!--Device-usbManager-function closePipe(pipe: USBDevicePipe): int-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | USB device pipe, which is used to determine the message control channel. You need to call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain its value. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **0** if the USB device pipe is closed successfully; returns an error code otherwise. The error codes are as follows:* - 22: The service is abnormal. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

**Example**

```TypeScript
function closePipe() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  usbManager.requestRight(devicesList?.[0]?.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(devicesList?.[0]);
  let ret: number = usbManager.closePipe(devicepipe);
  console.info(`closePipe = ${ret}`);
}

```

