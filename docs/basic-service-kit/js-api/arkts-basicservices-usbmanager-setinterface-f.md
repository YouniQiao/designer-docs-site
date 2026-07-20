# setInterface

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## setInterface

```TypeScript
function setInterface(pipe: USBDevicePipe, iface: USBInterface): number
```

Sets a USB interface.

> **NOTE**  
>  
> A USB interface may have multiple selection modes and supports dynamic switching. It is used to reset the  
> endpoint to match the transmission type during data transmission.  
>  
> Before calling this API, call the  
> [usbManager.claimInterface](arkts-basicservices-usbmanager-claiminterface-f.md#claiminterface-1)  
> API to claim a communication interface.

**Since:** 9

<!--Device-usbManager-function setInterface(pipe: USBDevicePipe, iface: USBInterface): int--><!--Device-usbManager-function setInterface(pipe: USBDevicePipe, iface: USBInterface): int-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | USB device pipe, which is used to determine the bus number and device address. You need to call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain its value. |
| iface | [USBInterface](arkts-basicservices-usb-usbinterface-i.md) | Yes | USB interface. You can use [usbManager.getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1)to obtain device information and identify the USB interface based on its **id** and **alternateSetting**. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **0** if the USB interface is successfully set; returns an error code otherwise. The error codes are as follows:* - 88080389: The service is not started. Possible causes: 1. No device is inserted. 2. The service exits abnormally.* - 88080486: The service is being initialized. Try again later.* - 88080488: No device access permission. Call the [usbManager.requestRight](arkts-basicservices-usbmanager-requestright-f.md#requestright-1) API to request authorization.* - -1: The driver is abnormal. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

**Example**

```TypeScript
function setInterface() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  let interfaces: usbManager.USBInterface = device.configs?.[0]?.interfaces?.[0];
  let ret: number = usbManager.claimInterface(devicepipe, interfaces);
  ret = usbManager.setInterface(devicepipe, interfaces);
  console.info(`setInterface = ${ret}`);
}

```

