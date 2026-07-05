# sppWriteAsync

## sppWriteAsync

```TypeScript
function sppWriteAsync(clientSocket: int, data: ArrayBuffer): Promise<void>
```

Asynchronous interface for writing data to the socket.

**起始版本：** 18

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| clientSocket | int | 是 | Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}. |
| data | ArrayBuffer | 是 | Indicates the data to write. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Returns the promise object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |
| 2901054 | IO error. |
| 2900099 | Operation failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let clientNumber = 1; // 入参clientNumber由sppAccept或sppConnect接口获取。
let arrayBuffer = new ArrayBuffer(8);
let data = new Uint8Array(arrayBuffer);
try {
    socket.sppWriteAsync(clientNumber, arrayBuffer).then(() => {
      console.info("sppWrite success");
    });
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

