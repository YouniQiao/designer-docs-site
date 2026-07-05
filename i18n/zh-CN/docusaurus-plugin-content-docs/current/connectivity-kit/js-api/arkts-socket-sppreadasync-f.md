# sppReadAsync

## sppReadAsync

```TypeScript
function sppReadAsync(clientSocket: int): Promise<ArrayBuffer>
```

Asynchronous interface for reading data from the socket.

**起始版本：** 18

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| clientSocket | int | 是 | Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ArrayBuffer> | Returns the promise object, used to get the spp read data. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 2901054 | IO error. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 入参clientNumber由sppAccept或sppConnect接口获取。
async function readAsync(clientNumber: number) {
  let flag = 1;
  try {
    while (flag) { // 该接口需业务循环调用读取，具体循环形式按业务需要来实现，这里只是示例。
      let buffer = await socket.sppReadAsync(clientNumber); // 使用await确保顺序读取。
      let data = new Uint8Array(buffer);
      if (data) {
        console.info('sppRead success, data length = ' + data.byteLength);
        // 在此处理接收到的数据。
      }
    }
  } catch (err) {
    console.error('startSppRead errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
    socket.sppCloseClientSocket(clientNumber); // 发生错误时关闭连接。
  }
}

```

