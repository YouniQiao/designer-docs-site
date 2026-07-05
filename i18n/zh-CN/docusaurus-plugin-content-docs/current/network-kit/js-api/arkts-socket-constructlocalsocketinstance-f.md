# constructLocalSocketInstance

## constructLocalSocketInstance

```TypeScript
function constructLocalSocketInstance(): LocalSocket
```

Creates a LocalSocket object.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LocalSocket | the LocalSocket of the constructLocalSocketInstance. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';
let client: socket.LocalSocket = socket.constructLocalSocketInstance();

```

