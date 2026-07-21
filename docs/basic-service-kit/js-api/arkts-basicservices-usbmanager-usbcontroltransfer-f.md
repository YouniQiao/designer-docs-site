# usbControlTransfer

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

<a id="usbcontroltransfer"></a>
## usbControlTransfer

```TypeScript
function usbControlTransfer(pipe: USBDevicePipe, requestparam: USBDeviceRequestParams, timeout?: number): Promise<number>
```

Performs control transfer. This API uses a promise to return the result.

**Since:** 12

<!--Device-usbManager-function usbControlTransfer(pipe: USBDevicePipe, requestparam: USBDeviceRequestParams, timeout?: int): Promise<int>--><!--Device-usbManager-function usbControlTransfer(pipe: USBDevicePipe, requestparam: USBDeviceRequestParams, timeout?: int): Promise<int>-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | USB device pipe. You need to call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain its value. |
| requestparam | [USBDeviceRequestParams](arkts-basicservices-usbmanager-usbdevicerequestparams-i.md) | Yes | Control transfer parameters. Set the parameters as required. For details, see the USB protocol. |
| timeout | number | No | Timeout interval.Unit: milliseconds. This parameter is optional. If the control transfer is complete within the specified time, the size of the transferred or received data block is returned; otherwise, a timeout error is returned. The default value is **0**, indicating that the system waits infinitely until the control transfer is complete. Set this parameter as required. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise used to return the result, which is the size of the transferred or received data block if the transfer is successful. If the API call fails, the following error codes are returned:* - -1: The driver is abnormal. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:* <br>1.Mandatory parameters are left unspecified.* <br>2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.<br>**Applicable version:** 18 and later |

**Example**

```TypeScript
class PARA {
  bmRequestType: number = 0
  bRequest: number = 0
  wValue: number = 0
  wIndex: number = 0
  wLength: number = 0
  data: Uint8Array = new Uint8Array()
}

let param: PARA = {
  bmRequestType: 0x80,
  bRequest: 0x06,

  wValue:0x01 << 8 | 0,
  wIndex: 0,
  wLength: 18,
  data: new Uint8Array(18)
};

function usbControlTransfer() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  usbManager.requestRight(devicesList?.[0]?.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(devicesList?.[0]);
  usbManager.usbControlTransfer(devicepipe, param).then((ret: number) => {
  console.info(`usbControlTransfer = ${ret}`);
  })
}

```

