# WebSocketMessage

Info about the message received from a specific client.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## data

```TypeScript
data: string | ArrayBuffer
```

Content of the message.

**类型：** string | ArrayBuffer

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## clientConnection

```TypeScript
clientConnection: WebSocketConnection
```

The connection where the message comes from.

**类型：** WebSocketConnection

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

