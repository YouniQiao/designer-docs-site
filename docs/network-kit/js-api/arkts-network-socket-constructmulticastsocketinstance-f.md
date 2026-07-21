# constructMulticastSocketInstance

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

<a id="constructmulticastsocketinstance"></a>
## constructMulticastSocketInstance

```TypeScript
function constructMulticastSocketInstance(): MulticastSocket
```

Creates a MulticastSocket object.

**Since:** 12

<!--Device-socket-function constructMulticastSocketInstance(): MulticastSocket--><!--Device-socket-function constructMulticastSocketInstance(): MulticastSocket-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [MulticastSocket](arkts-network-socket-multicastsocket-i.md) | the MulticastSocket of the constructMulticastSocketInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();

```

