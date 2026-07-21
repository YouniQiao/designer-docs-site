# setConfiguration

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

<a id="setconfiguration"></a>
## setConfiguration

```TypeScript
function setConfiguration(pipe: USBDevicePipe, config: USBConfig): number
```

Sets the device configuration.

Before you do this, call [usb.getDevices](arkts-basicservices-usb-getdevices-f.md#getdevices-1) to obtain the USB device list and device configuration, call [usb.requestRight](arkts-basicservices-usb-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-usb-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [setConfiguration](arkts-basicservices-usbmanager-setconfiguration-f.md#setconfiguration-1)

<!--Device-usb-function setConfiguration(pipe: USBDevicePipe, config: USBConfig): number--><!--Device-usb-function setConfiguration(pipe: USBDevicePipe, config: USBConfig): number-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | Device pipe, which is used to determine the bus number and device address. |
| config | [USBConfig](arkts-basicservices-usb-usbconfig-i.md) | Yes | USB configuration to set. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns **0** if the USB configuration is successfully set; returns an error code otherwise. |

**Example**

```TypeScript
let ret = usb.setConfiguration(devicepipe, config);
console.info(`setConfiguration = ${ret}`);

```

