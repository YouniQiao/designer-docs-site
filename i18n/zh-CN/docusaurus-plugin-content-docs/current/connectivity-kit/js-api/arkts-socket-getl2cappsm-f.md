# getL2capPsm

## getL2capPsm

```TypeScript
function getL2capPsm(serverSocket: int): int
```

Get l2cap socket psm.

**起始版本：** 20

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| serverSocket | int | 是 | Indicates the server socket ID, returned by {@link sppListen}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the l2cap socket psm |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 服务端获取客户端设备地址。
let serverNumber = 1; // 此处serverNumber需赋值为调用sppListen接口后，回调中得到的serverNumber。
try {
    let l2capPsm: number = socket.getL2capPsm(serverNumber);
} catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
}

```

