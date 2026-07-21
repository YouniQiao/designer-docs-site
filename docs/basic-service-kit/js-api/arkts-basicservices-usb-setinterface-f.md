# setInterface

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

<a id="setinterface"></a>
## setInterface

```TypeScript
function setInterface(pipe: USBDevicePipe, iface: USBInterface): number
```

Sets a USB interface.

Before you do this, call [usb.getDevices](arkts-basicservices-usb-getdevices-f.md#getdevices-1) to obtain the USB device list and interfaces, call [usb.requestRight](arkts-basicservices-usb-requestright-f.md#requestright-1) to request the device access permission, call [usb.connectDevice](arkts-basicservices-usb-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter, and call [usb.claimInterface](arkts-basicservices-usb-claiminterface-f.md#claiminterface-1) to claim the USB interface.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [setInterface](arkts-basicservices-usbmanager-setinterface-f.md#setinterface-1)

<!--Device-usb-function setInterface(pipe: USBDevicePipe, iface: USBInterface): number--><!--Device-usb-function setInterface(pipe: USBDevicePipe, iface: USBInterface): number-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | Device pipe, which is used to determine the bus number and device address. |
| iface | [USBInterface](arkts-basicservices-usb-usbinterface-i.md) | Yes | USB interface to set. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **0** if the USB interface is successfully set; returns an error code otherwise. |

**Example**

```TypeScript
let ret = usb.setInterface(devicepipe, interfaces);
console.info(`setInterface = ${ret}`);

```

