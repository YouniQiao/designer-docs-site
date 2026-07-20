# resetUsbDevice

## Modules to Import

```TypeScript
import { usbManager } from '@kit.BasicServicesKit';
```

## resetUsbDevice

```TypeScript
function resetUsbDevice(pipe: USBDevicePipe): boolean
```

Resets a USB peripheral.

> **NOTE**  
>  
> Previous configurations and APIs will be reset. Ensure that the related services have been completed before  
> calling this API.

**Since:** 20

<!--Device-usbManager-function resetUsbDevice(pipe: USBDevicePipe): boolean--><!--Device-usbManager-function resetUsbDevice(pipe: USBDevicePipe): boolean-End-->

**System capability:** SystemCapability.USB.USBManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pipe | [USBDevicePipe](arkts-basicservices-usbmanager-usbdevicepipe-i.md) | Yes | USB device pipe, which is used to determine the bus number and device address. You need to call [usbManager.connectDevice](arkts-basicservices-usbmanager-connectdevice-f.md#connectdevice-1) to obtain its value. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the device is reset successfully; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [14400001](../../apis-basic-services-kit/errorcode-usb.md#14400001-usb-device-connection-denied) | Access right denied. Call requestRight to get the USBDevicePipe access right first. |
| [14400004](../../apis-basic-services-kit/errorcode-usb.md#14400004-service-exception) | Service exception. Possible causes: 1. No accessory is plugged in. |
| [14400008](../../apis-basic-services-kit/errorcode-usb.md#14400008-no-device-disconnected) | No such device(it may have been disconnected) |
| [14400010](../../apis-basic-services-kit/errorcode-usb.md#14400010-unrecognized-error) | Other USB error. Possible causes:* <br>1.Unrecognized discard error code. |
| [14400013](../../apis-basic-services-kit/errorcode-usb.md#14400013-parameter-validity-check-failed) | The USBDevicePipe validity check failed. Possible causes:* <br>1.The input parameters fail the validation check.* <br>2.The call chain used to obtain the input parameters is not reasonable. |

**Example**

```TypeScript
function resetUsbDevice() {
  let devicesList: Array<usbManager.USBDevice> = usbManager.getDevices();
  if (!devicesList || devicesList.length == 0) {
    console.error(`device list is empty`);
    return;
  }

  usbManager.requestRight(devicesList?.[0]?.name);
  let devicepipe: usbManager.USBDevicePipe = usbManager.connectDevice(devicesList?.[0]);
  try {
    let ret: boolean = usbManager.resetUsbDevice(devicepipe);
    console.info(`resetUsbDevice  = ${ret}`);
  } catch (err) {
    console.error(`resetUsbDevice failed: ` + err);
  }
}

```

