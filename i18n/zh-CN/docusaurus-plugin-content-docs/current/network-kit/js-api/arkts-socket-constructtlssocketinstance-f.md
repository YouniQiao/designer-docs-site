# constructTLSSocketInstance

## constructTLSSocketInstance

```TypeScript
function constructTLSSocketInstance(): TLSSocket
```

Creates a TLSSocket object.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TLSSocket | the TLSSocket of the constructTLSSocketInstance. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';

let tls: socket.TLSSocket = socket.constructTLSSocketInstance();

```

## constructTLSSocketInstance

```TypeScript
function constructTLSSocketInstance(tcpSocket: TCPSocket): TLSSocket
```

Creates a TLSSocket object with a TCPSocket object.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tcpSocket | TCPSocket | 是 | Parameter for creating a TLSSocket object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TLSSocket | the TLSSocket of the constructTLSSocketInstance. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2300002 | System internal error. |
| 2303601 | Invalid socket FD. |
| 2303602 | Socket is not connected. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}

tcp.connect(tcpconnectoptions, (err: BusinessError) => {
  if (err) {
    console.error('connect fail');
    return;
  }
  console.info('connect success');

  // 确保TCPSocket已连接后，再升级TLSSocket
  let tls: socket.TLSSocket = socket.constructTLSSocketInstance(tcp);
})

```

