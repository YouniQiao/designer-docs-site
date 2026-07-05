# read

## read

```TypeScript
function read(portId: int, buffer: Uint8Array, timeout?: int): Promise<int>
```

从串口设备异步读取数据。使用Promise异步回调。

**起始版本：** 19

**系统能力：** SystemCapability.USB.USBManager.Serial

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| portId | int | 是 | 目标设备的端口号，来自[getPortList]serialManager.getPortList()获取的串口参数SerialPort。 |
| buffer | Uint8Array | 是 | 读取数据的缓冲区，最大长度为8192比特。 |
| timeout | int | 否 | 超时时间（单位：毫秒）。API在目标端口缓冲区无数据时，等待指定时间后返回。默认值0表示不等待直接返回。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise对象，返回读取数据长度。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 |  |
| 31400001 |  |
| 31400003 |  |
| 31400005 |  |
| 31400006 |  |
| 31400007 |  |

**示例：**

```TypeScript
import { JSON } from '@kit.ArkTS';
import { serialManager } from '@kit.BasicServicesKit';

// 获取串口列表
function read() {
  let portList: serialManager.SerialPort[] = serialManager.getPortList();
  console.info('usbSerial portList: ' + JSON.stringify(portList));
  if (!portList || portList.length === 0) {
    console.error('usbSerial portList is empty');
    return;
  }
  let portId: number = portList[0].portId;

  // 检测设备是否可被应用访问
  if (!serialManager.hasSerialRight(portId)) {
    serialManager.requestSerialRight(portId).then(result => {
      if (!result) {
        // 没有访问设备的权限且用户不授权则退出
        console.error('user is not granted the operation permission');
        return;
      } else {
        console.info('grant permission successfully');
      }
    });
  }

  // 打开设备
  try {
    serialManager.open(portId)
    console.info('open usbSerial success, portId: ' + portId);
  } catch (error) {
    console.error('open usbSerial error, ' + JSON.stringify(error));
  }

  // 异步读取
  let readBuffer: Uint8Array = new Uint8Array(64);
  serialManager.read(portId, readBuffer, 2000).then((size: number) => {
    console.info('read usbSerial success, readBuffer: ' + readBuffer.toString());
  }).catch((error: Error) => {
    console.error('read usbSerial error, ' + JSON.stringify(error));
  })

  // 关闭串口
  try {
    serialManager.close(portId);
    console.info('close usbSerial success, portId: ' + portId);
  } catch (error) {
    console.error('close usbSerial error, ' + JSON.stringify(error));
  }
}

```

