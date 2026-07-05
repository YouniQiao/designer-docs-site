# claimInterface

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## claimInterface

```TypeScript
function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): number
```

Claims a USB device interface. > **NOTE** > > In USB programming, **claimInterface** is a common operation, which indicates that an application requests the > operating system to release a USB interface from the kernel driver and hand over the USB interface to a user > space program for control.<br> > > All the **claim** communication interfaces used below refer to the claim interface operations.

**Since:** 9

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | USBDevicePipe | Yes | USB device pipe, which is used to determine the bus number and device address. You needto call [usbManager.connectDevice](arkts-basicservices-connectdevice-f.md#connectdevice-1) to obtain its value. |
| iface | USBInterface | Yes | USB interface. You can use [usbManager.getDevices](arkts-basicservices-getdevices-f.md#getdevices-1)to obtain device information and identify the USB interface based on the ID. |
| force | boolean | No | Whether to forcibly claim a USB interface. The default value is **false**, which means notto forcibly claim a USB interface. You can set the value as required. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **0** if the **claim** interface is called successfully; returns an error code otherwise. Theerror codes are as follows:- 88080389: The service is not started. Possible causes: 1. No device is inserted. 2. The service exits abnormally.- 88080486: The service is being initialized. Try again later.- 88080488: No device access permission. Call the [usbManager.requestRight](arkts-basicservices-requestright-f.md#requestright-1) API to request authorization.- -1: The driver is abnormal. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br>1.Mandatory parameters are left unspecified.<br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 |

**Example**

```TypeScript
function claimInterface() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  let interfaces: usbManager.USBInterface = device.configs?.[0]?.interfaces?.[0];
  let ret: number= usbManager.claimInterface(devicepipe, interfaces);
  console.info(`claimInterface = ${ret}`);
}

```

