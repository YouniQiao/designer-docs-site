# hasSerialRight

## Modules to Import

```TypeScript
import { serialManager } from '@kit.BasicServicesKit';
```

## hasSerialRight

```TypeScript
function hasSerialRight(portId: number): boolean
```

Checks whether the application has the permission to access the serial port device. When an application is restarted after exits, you need to request the permission from the user again.

**Since:** 19

<!--Device-serialManager-function hasSerialRight(portId: int): boolean--><!--Device-serialManager-function hasSerialRight(portId: int): boolean-End-->

**System capability:** SystemCapability.USB.USBManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | number | Yes | Port number of the target device, which is obtained from the serial port parameter SerialPort returned by [getPortList](arkts-basicservices-serialmanager-getportlist-f.md#getportlist-1). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The value **true** indicates that the permission is authorized, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |
| [14400005](../../apis-basic-services-kit/errorcode-usb.md#14400005-database-operation-exception) |  |
| [31400001](../../apis-basic-services-kit/errorcode-usb.md#31400001-serial-port-service-error) |  |
| [31400003](../../apis-basic-services-kit/errorcode-usb.md#31400003-port-number-not-exist) |  |

**Example**

The following sample code shows the basic process for calling the hasSerialRight API and it needs to be executed in a specific method. In actual calling, you must comply with the device-related protocols.

```TypeScript
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// Obtain the serial port list.
function hasSerialRight() {
  let portList: serialManager.SerialPort[] = serialManager.getPortList();
  console.info('portList: ', JSON.stringify(portList));
  if (!portList || portList.length === 0) {
    console.error('portList is empty');
    return;
  }

  // Check whether the device can be accessed by the application.
  if (serialManager.hasSerialRight(portId)) {
    console.info('The serial port is accessible');
  } else {
    console.error('No permission to access the serial port');
  }
}

```

