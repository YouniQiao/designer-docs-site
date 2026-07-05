# getMaxTransmitDataSize

## getMaxTransmitDataSize

```TypeScript
function getMaxTransmitDataSize(clientSocket: int): int
```

Obtain the maximum data size that can be transmitted through this socket channel.

**起始版本：** 22

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| clientSocket | int | 是 | Indicates the client socket ID, returned by {@link sppAccept} or {@link sppConnect}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Maximum transmitted data size |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 入参clientNumber由sppAccept或sppConnect接口获取。
let clientSocket = 1; 
try {
    let result: number = socket.getMaxTransmitDataSize(clientSocket);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

