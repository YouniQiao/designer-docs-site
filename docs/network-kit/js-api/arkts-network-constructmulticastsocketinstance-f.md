# constructMulticastSocketInstance

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## constructMulticastSocketInstance

```TypeScript
function constructMulticastSocketInstance(): MulticastSocket
```

Creates a MulticastSocket object.

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| MulticastSocket | the MulticastSocket of the constructMulticastSocketInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();

```

