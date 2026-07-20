# getFileDescriptor

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## getFileDescriptor

```TypeScript
function getFileDescriptor(pipe: USBDevicePipe): number
```

Obtains the file descriptor.

Before you do this, call [usb.getDevices](arkts-basicservices-usb-getdevices-f.md#getdevices-1) to obtain the USB device list, call [usb.requestRight](arkts-basicservices-usb-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-usb-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getFileDescriptor](arkts-basicservices-usbmanager-getfiledescriptor-f.md#getfiledescriptor-1)

<!--Device-usb-function getFileDescriptor(pipe: USBDevicePipe): number--><!--Device-usb-function getFileDescriptor(pipe: USBDevicePipe): number-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | Device pipe, which is used to determine the bus number and device address. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the file descriptor of the USB device if the operation is successful; returns **-1** otherwise. |

**Example**

```TypeScript
let ret = usb.getFileDescriptor(devicepipe);

```

