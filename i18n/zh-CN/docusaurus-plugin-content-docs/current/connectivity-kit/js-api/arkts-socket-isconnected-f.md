# isConnected

## isConnected

```TypeScript
function isConnected(clientSocket: int): boolean
```

Check whether the current socket connection has been established.

**起始版本：** 22

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| clientSocket | int | 是 | Indicates client socket. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Indicates whether or not it is connected. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 入参clientNumber由sppAccept或sppConnect接口获取。
let clientSocket = 1; 
try {
    let result: boolean = socket.isConnected(clientSocket);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

