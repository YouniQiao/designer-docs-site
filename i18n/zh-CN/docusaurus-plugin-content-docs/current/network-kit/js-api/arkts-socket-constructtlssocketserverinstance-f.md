# constructTLSSocketServerInstance

## constructTLSSocketServerInstance

```TypeScript
function constructTLSSocketServerInstance(): TLSSocketServer
```

Creates a TLSSocketServer object.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TLSSocketServer | the TLSSocketServer of the constructTLSSocketServerInstance. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tlsServer: socket.TLSSocketServer = socket.constructTLSSocketServerInstance();

```

