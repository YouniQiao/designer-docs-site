# constructTLSSocketServerInstance

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## constructTLSSocketServerInstance

```TypeScript
function constructTLSSocketServerInstance(): TLSSocketServer
```

Creates a TLSSocketServer object.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| TLSSocketServer | the TLSSocketServer of the constructTLSSocketServerInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tlsServer: socket.TLSSocketServer = socket.constructTLSSocketServerInstance();

```

