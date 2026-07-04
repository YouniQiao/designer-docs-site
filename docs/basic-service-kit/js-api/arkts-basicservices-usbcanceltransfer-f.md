# usbCancelTransfer

## Modules to Import

```TypeScript
import { usbManager } from '@ohos.usbManager';
```

## usbCancelTransfer

```TypeScript
function usbCancelTransfer(transfer: UsbDataTransferParams): void
```

Cancels an asynchronous USB data transfer request. > **NOTE** > > This API is used to proactively cancel an unfinished USB data transfer request (for example, the one submitted by > **usbSubmitTransfer**). > Before calling this API, call the > [usbManager.claimInterface](arkts-basicservices-claiminterface-f.md#claiminterface-1) > API to claim a communication interface.

**Since:** 18

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transfer | UsbDataTransferParams | Yes | Only the [USBDevicePipe](arkts-basicservices-usbdevicepipe-i.md#usbdevicepipe) and[USBEndpoint](arkts-basicservices-usbendpoint-i.md#usbendpoint) parameters should be specified in this API. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [14400001](../../apis-basic-services-kit/errorcode-usb.md#14400001-usb-device-connection-denied) | Access right denied. Call requestRight to get the USBDevicePipe access right first. |
| [14400008](../../apis-basic-services-kit/errorcode-usb.md#14400008-no-device-disconnected) | No such device (it may have been disconnected). |
| [14400010](../../apis-basic-services-kit/errorcode-usb.md#14400010-unrecognized-error) | Other USB error. Possible causes:<br>1.Unrecognized discard error code. |
| [14400011](../../apis-basic-services-kit/errorcode-usb.md#14400011-no-ongoing-transfer-found) | The transfer is not in progress, or is already complete or cancelled. |

**Example**

The following sample code shows the basic process for calling the usbCancelTransfer API and it needs to be executed in a specific method. In actual calling, you must comply with the device-related protocols to ensure correct data transfer and device compatibility.

```TypeScript
// Call usbManager.getDevices to obtain a data set. Then, obtain a USB device and its access permission.
// Pass the obtained USB device as a parameter to usbManager.connectDevice. Then, call usbManager.connectDevice to connect the USB device.
// Call usbManager.claimInterface to claim a USB interface. After that, call usbManager.bulkTransfer to start bulk transfer.
function usbCancelTransfer() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.info(`device list is empty`);
    return;
  }
  let device: usbManager.USBDevice = devicesList?.[0];
  usbManager.requestRight(device.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(device);
  if (devicepipe === undefined) {
    console.info(`connect device fail`);
    return;
  }
  // Obtain the endpoint address.
  let endpoint = device.configs?.[0]?.interfaces?.[0]?.endpoints.find((value) => {
    return value.direction === 0 && value.type === 2
  })
  if (endpoint === undefined) {
    console.info(`invalid endpoint`);
    return;
  }
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
    usbManager.usbCancelTransfer(transferParams);
    console.info('USB transfer request submitted.');
  } catch (error) {
    console.error('USB transfer failed:', error);
  }
}

```

