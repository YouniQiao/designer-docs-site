# hasSerialRight

## hasSerialRight

```TypeScript
function hasSerialRight(portId: int): boolean
```

检查应用程序是否具有访问串口设备的权限。应用退出后再拉起时，需要重新申请授权。

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | int | Yes | 目标设备的端口号，来自[getPortList]serialManager.getPortList()获取的串口参数SerialPort。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true表示已授权，false表示未授权。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 |  |
| 14400005 |  |
| 31400001 |  |
| 31400003 |  |

**Example**

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
  let portId: number = portList[0].portId;

  // Check whether the device can be accessed by the application.
  if (serialManager.hasSerialRight(portId)) {
    console.info('The serial port is accessible');
  } else {
    console.error('No permission to access the serial port');
  }
}

```

