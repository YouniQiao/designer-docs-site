# getPortList

## Modules to Import

```TypeScript
import { serialManager } from '@kit.BasicServicesKit';
```

<a id="getportlist"></a>
## getPortList

```TypeScript
function getPortList(): Readonly<SerialPort>[]
```

Obtains the serial port device list, including the device name and port number.

**Since:** 19

<!--Device-serialManager-function getPortList(): Readonly<SerialPort>[]--><!--Device-serialManager-function getPortList(): Readonly<SerialPort>[]-End-->

**System capability:** SystemCapability.USB.USBManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| [Readonly](../../apis-na/arkts-apis/arkts-na-readonly-t.md)&lt;SerialPort&gt;[] | Serial port information list. |

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
}

```

