# constructTCPSocketServerInstance

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## constructTCPSocketServerInstance

```TypeScript
function constructTCPSocketServerInstance(): TCPSocketServer
```

Creates a TCPSocketServer object.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| TCPSocketServer | the TCPSocketServer of the constructTCPSocketServerInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

```

