# writeSync

## Modules to Import

```TypeScript
import { serialManager } from '@ohos.usbManager.serial';
```

## writeSync

```TypeScript
function writeSync(portId: number, buffer: Uint8Array, timeout?: number): number
```

Writes data to the serial port device synchronously. The length of data written each time cannot exceed 4 KB; otherwise, data loss may occur. You are advised to write long data in multiple packets.

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | number | Yes | Port number of the target device, which is obtained from the serial port parameter SerialPortreturned by [getPortList](arkts-basicservices-getportlist-f.md#getportlist-1). |
| buffer | Uint8Array | Yes | Destination buffer for writing data, with a maximum length of 4 KB. |
| timeout | number | No | Timeout interval.Unit: milliseconds. Whether the buffer of the target port is writable within thespecified time. If yes, the API is processed properly; otherwise, a timeout message is returned after the specifiedtime. The default value **0** indicates that the API returns the result immediately when the target port is notwritable. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Length of the data written. |

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

The following sample code shows the basic process for calling the writeSync API and it needs to be executed in a specific method. In actual calling, you must comply with the device-related protocols.

```TypeScript
import { JSON } from '@kit.ArkTS';
import { buffer } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// Obtain the serial port list.
function writeSync() {
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
        // If the application does not have the access permission and is not granted by the user, the application exits.
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

  // Write data synchronously.
  let writeSyncBuffer: Uint8Array = new Uint8Array(buffer.from('Hello World', 'utf-8').buffer)
  try {
    serialManager.writeSync(portId, writeSyncBuffer, 2000);
    console.info('writeSync usbSerial success, writeSyncBuffer: ' + writeSyncBuffer.toString());
  } catch (error) {
    console.error('writeSync usbSerial error, ' + JSON.stringify(error));
  }
}

```

