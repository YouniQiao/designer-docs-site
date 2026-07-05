# WebSocketServerConfig

Defines parameters for a WebSocket Server.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## protocol

```TypeScript
protocol?: string
```

Self defined protocol.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## maxConcurrentClientsNumber

```TypeScript
maxConcurrentClientsNumber: int
```

Maximum number of concurrent clients. When it's reached, the server will reject new connections.

**Type:** int

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## serverCert

```TypeScript
serverCert?: ServerCert
```

Server cert.

**Type:** ServerCert

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## serverIP

```TypeScript
serverIP?: string
```

Network card that the server listens on. The server listens on this specific address. It's 0.0.0.0 by default.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## serverPort

```TypeScript
serverPort: int
```

Port number that the server listens on.

**Type:** int

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## maxConnectionsForOneClient

```TypeScript
maxConnectionsForOneClient: int
```

Maximum number of one client's connections. When it's reached, the server will reject new connections.

**Type:** int

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

