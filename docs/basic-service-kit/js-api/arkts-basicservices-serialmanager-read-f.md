# read

## Modules to Import

```TypeScript
import { serialManager } from '@kit.BasicServicesKit';
```

## read

```TypeScript
function read(portId: number, buffer: Uint8Array, timeout?: number): Promise<number>
```

Reads data from the serial port device asynchronously. This API uses a promise to return the result.

**Since:** 19

<!--Device-serialManager-function read(portId: int, buffer: Uint8Array, timeout?: int): Promise<int>--><!--Device-serialManager-function read(portId: int, buffer: Uint8Array, timeout?: int): Promise<int>-End-->

**System capability:** SystemCapability.USB.USBManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | number | Yes | Port number of the target device, which is obtained from the serial port parameter SerialPort returned by [getPortList](arkts-basicservices-serialmanager-getportlist-f.md#getportlist-1). |
| buffer | [Uint8Array](../../apis-na/arkts-apis/arkts-na-lib-es5-uint8array-i.md) | Yes | Buffer for reading data, with a maximum length of 8192 bytes. |
| timeout | number | No | Timeout interval.Unit: milliseconds. If the API has no data in the buffer of the target port, it returns the result after waiting for the specified time. The default value **0** indicates that the API returns the result without waiting. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the length of the data read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [31400001](../../apis-basic-services-kit/errorcode-usb.md#31400001-serial-port-service-error) |  |
| [31400003](../../apis-basic-services-kit/errorcode-usb.md#31400003-port-number-not-exist) |  |
| [31400005](../../apis-basic-services-kit/errorcode-usb.md#31400005-device-not-opened) |  |
| [31400006](../../apis-basic-services-kit/errorcode-usb.md#31400006-data-transfer-timeout) |  |
| [31400007](../../apis-basic-services-kit/errorcode-usb.md#31400007-io-exception) |  |

**Example**

The following sample code shows the basic process for calling the read API and it needs to be executed in a specific method. In actual calling, you must comply with the device-related protocols.

```TypeScript
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// Obtain the serial port list.
function read() {
  let portList: serialManager.SerialPort[] = serialManager.getPortList();
  console.info('usbSerial portList: ' + JSON.stringify(portList));
  if (!portList || portList.length === 0) {
    console.error('usbSerial portList is empty');
    return;
  }
  let portId: number = portList[0].portId;

  // Check whether the device can be accessed by the application.
  if (!serialManager.hasSerialRight(portId)) {
    serialManager.requestSerialRight(portId).then(result => {
      if (!result) {
        // If the application does not have the access permission and the user does not grant the permission, the application exits.
        console.error('user is not granted the operation permission');
        return;
      } else {
        console.info('grant permission successfully');
      }
    });
  }

  // Open a serial port device.
  try {
    serialManager.open(portId)
    console.info('open usbSerial success, portId: ' + portId);
  } catch (error) {
    console.error('open usbSerial error, ' + JSON.stringify(error));
  }

  // Read data asynchronously.
  let readBuffer: Uint8Array = new Uint8Array(64);
  serialManager.read(portId, readBuffer, 2000).then((size: number) => {
    console.info('read usbSerial success, readBuffer: ' + readBuffer.toString());
  }).catch((error: Error) => {
    console.error('read usbSerial error, ' + JSON.stringify(error));
  })

  // Close the serial port device.
  try {
    serialManager.close(portId);
    console.info('close usbSerial success, portId: ' + portId);
  } catch (error) {
    console.error('close usbSerial error, ' + JSON.stringify(error));
  }
}

```

