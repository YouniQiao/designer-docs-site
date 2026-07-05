# constructTCPSocketInstance

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## constructTCPSocketInstance

```TypeScript
function constructTCPSocketInstance(): TCPSocket
```

Creates a TCPSocket object.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| TCPSocket | the TCPSocket of the constructTCPSocketInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();

```

