# readSync

## readSync

```TypeScript
function readSync(portId: int, buffer: Uint8Array, timeout?: int): int
```

从串口设备同步读取数据。

**Since:** 19

**System capability:** SystemCapability.USB.USBManager.Serial

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| portId | int | Yes | 目标设备的端口号，来自[getPortList]serialManager.getPortList()获取的串口参数SerialPort。 |
| buffer | Uint8Array | Yes | 读取数据的缓冲区，最大长度为8192比特。 |
| timeout | int | No | 超时时间（单位：毫秒）。API在目标端口缓冲区无数据时，等待指定时间后返回。默认值0表示不等待直接返回。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回读取数据长度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 |  |
| 31400001 |  |
| 31400003 |  |
| 31400005 |  |
| 31400006 |  |
| 31400007 |  |

**Example**

```TypeScript
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// Obtain the serial port list.
function readSync() {
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

  // Read data synchronously.
  let readSyncBuffer: Uint8Array = new Uint8Array(64);
  try {
    serialManager.readSync(portId, readSyncBuffer, 2000);
    console.info('readSync usbSerial success, readSyncBuffer: ' + readSyncBuffer.toString());
  } catch (error) {
    console.error('readSync usbSerial error, ' + JSON.stringify(error));
  }
}

```

