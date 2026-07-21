# bulkTransfer

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

<a id="bulktransfer"></a>
## bulkTransfer

```TypeScript
function bulkTransfer(
    pipe: USBDevicePipe,
    endpoint: USBEndpoint,
    buffer: Uint8Array,
    timeout?: number
  ): Promise<number>
```

Performs bulk transfer. This API uses a promise to return the result.

> **NOTE**  
>  
> The total size of data (including **pipe**, **endpoint**, **buffer**, and **timeout**) to be transferred in a  
> single bulk transfer must be less than 200 KB. Otherwise, the transfer fails and **-1** is returned.  
>  
> Before calling this API, call the  
> [usbManager.claimInterface](arkts-basicservices-usbmanager-claiminterface-f.md#claiminterface-1)  
> API to claim a communication interface.

**Since:** 9

<!--Device-usbManager-function bulkTransfer(
    pipe: USBDevicePipe,
    endpoint: USBEndpoint,
    buffer: Uint8Array,
    timeout?: int
  ): Promise<int>--><!--Device-usbManager-function bulkTransfer(
    pipe: USBDevicePipe,
    endpoint: USBEndpoint,
    buffer: Uint8Array,
    timeout?: int
  ): Promise<int>-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | USB device pipe. You need to call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain its value. |
| endpoint | [USBEndpoint](arkts-basicservices-usbmanager-usbendpoint-i.md) | Yes | USB endpoint, which is used to determine the USB interface for data transfer. You need to call [usbManager.getDevices](arkts-basicservices-usbmanager-getdevices-f.md#getdevices-1) to obtain the device information list and endpoint. Wherein, **address** is used to determine the endpoint address, **direction** is used to determine the endpoint direction, and **interfaceId** is used to determine the USB interface to which the endpoint belongs. Other parameters are passed transparently. |
| buffer | Uint8Array | Yes | Buffer for writing or reading data. |
| timeout | number | No | Timeout interval.Unit: milliseconds. This parameter is optional. If the bulk transfer is complete within the specified time, the size of the transferred or received data block is returned; otherwise, a timeout error is returned. The default value is **0**, indicating that the system waits infinitely until the control transfer is complete. Set this parameter as required. |

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

The following sample code is only a basic process for calling the bulkTransfer API. In actual calling, you must comply with the device-related protocols to ensure correct data transfer and device compatibility.

```TypeScript
// Call usbManager.getDevices to obtain a data set. Then, obtain a USB device and its access permission.
// Pass the obtained USB device as a parameter to usbManager.connectDevice. Then, call usbManager.connectDevice to connect the USB device.
// Call usbManager.claimInterface to claim a USB interface. After that, call usbManager.bulkTransfer to start bulk transfer.
function bulkTransfer() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }

  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  if (!usbManager.hasRight(device.name)) {
    console.error(`request right fail`);
    return;
  }
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  for (let i = 0; i < device.configs?.[0]?.interfaces.length; i++) {
    if (device.configs?.[0]?.interfaces?.[i]?.endpoints?.[0]?.attributes == 2) {
      let endpoint: usbManager.USBEndpoint = device.configs?.[0]?.interfaces?.[i]?.endpoints?.[0];
      let interfaces: usbManager.USBInterface = device.configs?.[0]?.interfaces?.[i];
      let ret: number = usbManager.claimInterface(devicepipe, interfaces);
      let buffer =  new Uint8Array(128);
      usbManager.bulkTransfer(devicepipe, endpoint, buffer).then((ret: number) => {
        console.info(`bulkTransfer = ${ret}`);
      }).catch((error: BusinessError) => {
        console.error(`bulkTransfer failed : ${error}`);
      });
    }
  }
}

```

