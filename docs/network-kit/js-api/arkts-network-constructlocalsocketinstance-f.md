# constructLocalSocketInstance

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## constructLocalSocketInstance

```TypeScript
function constructLocalSocketInstance(): LocalSocket
```

Creates a LocalSocket object.

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| LocalSocket | the LocalSocket of the constructLocalSocketInstance. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
let client: socket.LocalSocket = socket.constructLocalSocketInstance();

```

