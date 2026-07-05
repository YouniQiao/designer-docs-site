# constructLocalSocketServerInstance

## constructLocalSocketServerInstance

```TypeScript
function constructLocalSocketServerInstance(): LocalSocketServer
```

Creates a LocalSocketServer object.

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| LocalSocketServer | the LocalSocketServer of the constructLocalSocketServerInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let server: socket.LocalSocketServer = socket.constructLocalSocketServerInstance();

```

