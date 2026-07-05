# getPortList

## getPortList

```TypeScript
function getPortList(): Readonly<SerialPort>[]
```

查询串口设备清单，包括设备名称和对应的端口号。

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

**Return value:**

| Type | Description |
| --- | --- |
| Readonly&lt;SerialPort>[] | Serial port information list. |

**Example**

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

