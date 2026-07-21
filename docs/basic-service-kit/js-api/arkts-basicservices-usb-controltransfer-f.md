# controlTransfer

## Modules to Import

```TypeScript
import { usb } from '@kit.BasicServicesKit';
```

<a id="controltransfer"></a>
## controlTransfer

```TypeScript
function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>
```

Performs control transfer.

Before you do this, call [usb.getDevices](arkts-basicservices-usb-getdevices-f.md#getdevices-1) to obtain the USB device list, call [usb.requestRight](arkts-basicservices-usb-requestright-f.md#requestright-1) to request the device access permission, and call [usb.connectDevice](arkts-basicservices-usb-connectdevice-f.md#connectdevice-1) to obtain **devicepipe** as an input parameter.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [controlTransfer](arkts-basicservices-usbmanager-controltransfer-f.md#controltransfer-1)

<!--Device-usb-function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>--><!--Device-usb-function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | USB device pipe, which is used to determine the USB device. |
| controlparam | [USBControlParams](arkts-basicservices-usbmanager-usbcontrolparams-i.md) | Yes | Control transfer parameters. |
| timeout | number | No | Timeout duration in ms. This parameter is optional. The default value is **0**,indicating no timeout. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the result, which is the size of the transmitted or received data block if the transfer is successful, or **-1** if an exception has occurred. |

**Example**

```TypeScript
let param = {
  request: 0,
  reqType: 0,
  target:0,
  value: 0,
  index: 0,
  data: null
};
usb.controlTransfer(devicepipe, param).then((ret) => {
 console.info(`controlTransfer = ${ret}`);
})

```

