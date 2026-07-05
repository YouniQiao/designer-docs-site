# WebSocketServerConfig

Defines parameters for a WebSocket Server.

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## protocol

```TypeScript
protocol?: string
```

Self defined protocol.

**类型：** string

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## maxConcurrentClientsNumber

```TypeScript
maxConcurrentClientsNumber: int
```

Maximum number of concurrent clients. When it's reached, the server will reject new connections.

**类型：** int

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## serverCert

```TypeScript
serverCert?: ServerCert
```

Server cert.

**类型：** ServerCert

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## serverIP

```TypeScript
serverIP?: string
```

Network card that the server listens on. The server listens on this specific address. It's 0.0.0.0 by default.

**类型：** string

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## serverPort

```TypeScript
serverPort: int
```

Port number that the server listens on.

**类型：** int

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## maxConnectionsForOneClient

```TypeScript
maxConnectionsForOneClient: int
```

Maximum number of one client's connections. When it's reached, the server will reject new connections.

**类型：** int

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

