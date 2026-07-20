# claimInterface

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

## claimInterface

```TypeScript
function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): number
```

Claims a USB interface.

Before you do this, call [usb.getDevices](arkts-basicservices-usb-getdevices-f.md#getdevices-1) to obtain the USB device list and USB interfaces,call [usb.requestRight](arkts-basicservices-usb-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-usb-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [claimInterface](arkts-basicservices-usbmanager-claiminterface-f.md#claiminterface-1)

<!--Device-usb-function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): number--><!--Device-usb-function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): number-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | Device pipe, which is used to determine the bus number and device address. |
| iface | [USBInterface](arkts-basicservices-usb-usbinterface-i.md) | Yes | USB interface, which is used to determine the index of the interface to claim. |
| force | boolean | No | Whether to forcibly claim the USB interface. The default value is **false**,indicating not to forcibly claim the USB interface. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **0** if the USB interface is successfully claimed; returns an error code otherwise. |

**Example**

```TypeScript
let ret = usb.claimInterface(devicepipe, interfaces);
console.info(`claimInterface = ${ret}`);

```

