# constructTCPSocketServerInstance

## constructTCPSocketServerInstance

```TypeScript
function constructTCPSocketServerInstance(): TCPSocketServer
```

Creates a TCPSocketServer object.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TCPSocketServer | the TCPSocketServer of the constructTCPSocketServerInstance. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';
let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

```

