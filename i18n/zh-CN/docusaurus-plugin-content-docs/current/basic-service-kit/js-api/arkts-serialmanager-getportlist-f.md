# getPortList

## getPortList

```TypeScript
function getPortList(): Readonly<SerialPort>[]
```

查询串口设备清单，包括设备名称和对应的端口号。

**起始版本：** 19

**系统能力：** SystemCapability.USB.USBManager.Serial

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Readonly&lt;SerialPort>[] | Serial port information list. |

**示例：**

```TypeScript
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// 获取串口设备清单 
function getPortList() {
  let portList: serialManager.SerialPort[] = serialManager.getPortList();
  console.info('usbSerial portList: ' + JSON.stringify(portList));
  if (!portList || portList.length === 0) {
    console.error('usbSerial portList is empty');
    return;
  }
}

```

