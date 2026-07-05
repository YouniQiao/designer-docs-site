# constructUDPSocketInstance

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## constructUDPSocketInstance

```TypeScript
function constructUDPSocketInstance(): UDPSocket
```

Creates a UDPSocket object.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| UDPSocket | the UDPSocket of the constructUDPSocketInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let udp: socket.UDPSocket = socket.constructUDPSocketInstance();

```

