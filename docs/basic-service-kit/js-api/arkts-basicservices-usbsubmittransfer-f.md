# usbSubmitTransfer

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## usbSubmitTransfer

```TypeScript
function usbSubmitTransfer(transfer: UsbDataTransferParams): void
```

Requests a USB data transfer.

> **NOTE**
>
> This API uses an asynchronous callback to return the result.
>
> Before calling this API, call the
> [usbManager.claimInterface](arkts-basicservices-claiminterface-f.md#claiminterface-1)
> API to claim a communication interface.

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transfer | UsbDataTransferParams | Yes | As a USB data transfer interface, it is required for a client to initiate atransfer request. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [14400001](../../apis-basic-services-kit/errorcode-usb.md#14400001-usb-device-connection-denied) | Access right denied. Call requestRight to get the USBDevicePipe access right first. |
| [14400007](../../apis-basic-services-kit/errorcode-usb.md#14400007-resource-busy) | Resource busy. Possible causes:<br>1. The transfer has already been submitted.<br>2. The interface is claimed by another program or driver. |
| [14400008](../../apis-basic-services-kit/errorcode-usb.md#14400008-no-device-disconnected) | No such device (it may have been disconnected). |
| [14400009](../../apis-basic-services-kit/errorcode-usb.md#14400009-insufficient-memory) | Insufficient memory. Possible causes:<br>1. Memory allocation failed. |
| [14400012](../../apis-basic-services-kit/errorcode-usb.md#14400012-io-error) | Transmission I/O error. |

**Example**

The following sample code shows the basic process for calling the usbSubmitTransfer API and it needs to be executed in a specific method. In actual calling, you must comply with the device-related protocols to ensure correct data transfer and device compatibility.

```TypeScript
// Call usbManager.getDevices to obtain a data set. Then, obtain a USB device and its access permission.
// Pass the obtained USB device as a parameter to usbManager.connectDevice. Then, call usbManager.connectDevice to connect the USB device.
// Call usbManager.claimInterface to claim a USB interface. After that, call usbManager.bulkTransfer to start bulk transfer.
function usbSubmitTransfer() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }
  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  if (!usbManager.hasRight(device.name)) {
    console.info(`request right fail`);
    return;
  }
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  // Obtain the endpoint address.
  let endpoint = device.configs?.[0]?.interfaces?.[0]?.endpoints.find((value) => {
    return value.direction === 0 && value.type === 2
  })
  // Obtain the first ID of the device.
  let ret: number = usbManager.claimInterface(devicepipe, device.configs?.[0]?.interfaces?.[0], true);

  let transferParams: usbManager.UsbDataTransferParams = {
    devPipe: devicepipe,
    flags: usbManager.UsbTransferFlags.USB_TRANSFER_SHORT_NOT_OK,
    endpoint: 1,
    type: usbManager.UsbEndpointTransferType.TRANSFER_TYPE_BULK,
    timeout: 2000,
    length: 10, 
    callback: () => {},
    userData: new Uint8Array(10),
    buffer: new Uint8Array(10),
    isoPacketCount: 0,
  };
  try {
    transferParams.endpoint=endpoint?.address as number;
    transferParams.callback=(err, callBackData: usbManager.SubmitTransferCallback)=>{
      console.info('callBackData =' +JSON.stringify(callBackData));
    }
    usbManager.usbSubmitTransfer(transferParams); 
    console.info('USB transfer request submitted.');
  } catch (error) {
    console.error('USB transfer failed:', error);
  }
}

```

