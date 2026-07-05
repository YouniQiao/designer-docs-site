# constructTCPSocketInstance

## constructTCPSocketInstance

```TypeScript
function constructTCPSocketInstance(): TCPSocket
```

Creates a TCPSocket object.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TCPSocket | the TCPSocket of the constructTCPSocketInstance. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';
let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();

```

