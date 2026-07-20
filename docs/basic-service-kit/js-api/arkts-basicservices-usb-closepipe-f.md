# closePipe

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## closePipe

```TypeScript
function closePipe(pipe: USBDevicePipe): number
```

Closes a USB device pipe.

Before you do this, call [usb.getDevices](arkts-basicservices-usb-getdevices-f.md#getdevices-1) to obtain the USB device list, call [usb.requestRight](arkts-basicservices-usb-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-usb-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [closePipe](arkts-basicservices-usbmanager-closepipe-f.md#closepipe-1)

<!--Device-usb-function closePipe(pipe: USBDevicePipe): number--><!--Device-usb-function closePipe(pipe: USBDevicePipe): number-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | USB device pipe. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **0** if the USB device pipe is closed successfully; returns an error code otherwise. |

**Example**

```TypeScript
let ret = usb.closePipe(devicepipe);
console.info(`closePipe = ${ret}`);

```

