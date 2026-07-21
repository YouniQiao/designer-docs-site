# setConfiguration

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

<a id="setconfiguration"></a>
## setConfiguration

```TypeScript
function setConfiguration(pipe: USBDevicePipe, config: USBConfiguration): number
```

Sets the device configuration.

**Since:** 9

<!--Device-usbManager-function setConfiguration(pipe: USBDevicePipe, config: USBConfiguration): int--><!--Device-usbManager-function setConfiguration(pipe: USBDevicePipe, config: USBConfiguration): int-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | USB device pipe, which is used to determine the bus number and device address. You need to call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain its value. |
| config | [USBConfiguration](arkts-basicservices-usbmanager-usbconfiguration-i.md) | Yes | USB configuration. You can use [usbManager.getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1)to obtain device information and identify the USB configuration based on the ID. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **0** if the USB configuration is successfully set; returns an error code otherwise. The error codes are as follows:* - 88080389: The service is not started. Possible causes: 1. No device is inserted. 2. The service exits abnormally.* - 88080486: The service is being initialized. Try again later.* - 88080488: No device access permission. Call the [usbManager.requestRight](arkts-basicservices-usbmanager-requestright-f.md#requestright-1) API to request authorization.* - -1: The driver is abnormal.* - -17: I/O failure. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

**Example**

```TypeScript
function setConfiguration() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  let config: usbManager.USBConfiguration = device.configs?.[0];
  let ret: number= usbManager.setConfiguration(devicepipe, config);
  console.info(`setConfiguration = ${ret}`);
}

```

