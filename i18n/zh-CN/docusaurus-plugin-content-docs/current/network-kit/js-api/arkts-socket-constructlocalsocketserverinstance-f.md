# constructLocalSocketServerInstance

## constructLocalSocketServerInstance

```TypeScript
function constructLocalSocketServerInstance(): LocalSocketServer
```

Creates a LocalSocketServer object.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LocalSocketServer | the LocalSocketServer of the constructLocalSocketServerInstance. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';
let server: socket.LocalSocketServer = socket.constructLocalSocketServerInstance();

```

