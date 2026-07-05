# getDeviceId

## getDeviceId

```TypeScript
function getDeviceId(clientSocket: int): string
```

Obtain the device id in the client socket.

**起始版本：** 17

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| clientSocket | int | 是 | Indicates client socket. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the connected device id |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 服务端获取客户端设备地址。
let clientSocket = 1; // clientSocket是sppAccept回调中得到的，调用getDeviceId接口前需更新clientSocket。
try {
    let deviceAddr: string = socket.getDeviceId(clientSocket);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

// 客户端获取服务端设备地址。
// clientSocket是sppConnect回调中得到的，调getDeviceId接口前需更新clientSocket。
try {
    let deviceAddr: string = socket.getDeviceId(clientSocket);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

