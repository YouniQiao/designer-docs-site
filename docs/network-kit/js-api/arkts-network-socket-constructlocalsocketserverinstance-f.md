# constructLocalSocketServerInstance

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

<a id="constructlocalsocketserverinstance"></a>
## constructLocalSocketServerInstance

```TypeScript
function constructLocalSocketServerInstance(): LocalSocketServer
```

Creates a LocalSocketServer object.

**Since:** 12

<!--Device-socket-function constructLocalSocketServerInstance(): LocalSocketServer--><!--Device-socket-function constructLocalSocketServerInstance(): LocalSocketServer-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [LocalSocketServer](arkts-network-socket-localsocketserver-i.md) | the LocalSocketServer of the constructLocalSocketServerInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let server: socket.LocalSocketServer = socket.constructLocalSocketServerInstance();

```

