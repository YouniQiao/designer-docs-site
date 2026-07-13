# cancelSerialRight

## Modules to Import

```TypeScript
import { serialManager } from '@kit.BasicServicesKit';
```

## cancelSerialRight

```TypeScript
function cancelSerialRight(portId: number): void
```

Cancels the permission to access the serial port device when the application is running. This API is used to close
the enabled serial port device.

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | number | Yes | Port number of the target device, which is obtained from the serial port parameter SerialPortreturned by [getPortList](arkts-basicservices-getportlist-f.md#getportlist-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [14400005](../../apis-basic-services-kit/errorcode-usb.md#14400005-database-operation-exception) |  |
| [31400001](../../apis-basic-services-kit/errorcode-usb.md#31400001-serial-port-service-error) |  |
| [31400002](../../apis-basic-services-kit/errorcode-usb.md#31400002-no-serial-port-device-access-permission) |  |
| [31400003](../../apis-basic-services-kit/errorcode-usb.md#31400003-port-number-not-exist) |  |

**Example**

The following sample code shows the basic process for calling the cancelSerialRight API and it needs to be executed in a specific method. In actual calling, you must comply with the device-related protocols.

```TypeScript
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// Obtain the serial port list.
function cancelSerialRight() {
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

  // Cancel the granted permission.
  try {
    serialManager.cancelSerialRight(portId);
    console.info('cancelSerialRight success, portId: ', portId);
  } catch (error) {
    console.error('cancelSerialRight error, ', JSON.stringify(error));
  }
}

```

