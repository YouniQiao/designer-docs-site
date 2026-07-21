# constructTLSSocketServerInstance

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

<a id="constructtlssocketserverinstance"></a>
## constructTLSSocketServerInstance

```TypeScript
function constructTLSSocketServerInstance(): TLSSocketServer
```

Creates a TLSSocketServer object.

**Since:** 24

<!--Device-socket-function constructTLSSocketServerInstance(): TLSSocketServer--><!--Device-socket-function constructTLSSocketServerInstance(): TLSSocketServer-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [TLSSocketServer](arkts-network-socket-tlssocketserver-i.md) | the TLSSocketServer of the constructTLSSocketServerInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tlsServer: socket.TLSSocketServer = socket.constructTLSSocketServerInstance();

```

