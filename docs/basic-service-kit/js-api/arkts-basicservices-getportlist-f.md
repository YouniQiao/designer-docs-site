# getPortList

## Modules to Import

```TypeScript
import { serialManager } from '@ohos.usbManager.serial';
```

## getPortList

```TypeScript
function getPortList(): Readonly<SerialPort>[]
```

Obtains the serial port device list, including the device name and port number.

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Readonly&lt;SerialPort&gt;[] | Serial port information list. |

**Example**

The following sample code shows the basic process for calling the getPortList API and it needs to be executed in a specific method. In actual calling, you must comply with the device-related protocols.

```TypeScript
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// Obtain the serial port device list.
function getPortList() {
  let portList: serialManager.SerialPort[] = serialManager.getPortList();
  console.info('usbSerial portList: ' + JSON.stringify(portList));
  if (!portList || portList.length === 0) {
    console.error('usbSerial portList is empty');
    return;
  }
  let portId: number = portList[0].portId;
}

```

