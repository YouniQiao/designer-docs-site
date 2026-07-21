# constructTCPSocketInstance

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

<a id="constructtcpsocketinstance"></a>
## constructTCPSocketInstance

```TypeScript
function constructTCPSocketInstance(): TCPSocket
```

Creates a TCPSocket object.

**Since:** 10

<!--Device-socket-function constructTCPSocketInstance(): TCPSocket--><!--Device-socket-function constructTCPSocketInstance(): TCPSocket-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [TCPSocket](arkts-network-socket-tcpsocket-i.md) | the TCPSocket of the constructTCPSocketInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();

```

